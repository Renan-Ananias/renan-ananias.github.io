// ============================================
// CYBER NEON SLOTS — PAR SHEET ENGINE
// House Edge via Reel Strips & Pay Table
// RTP alvo: ~95% (Lei dos Grandes Números)
// ============================================

// ── CONSTANTES ──
const INITIAL_BALANCE = 100000;
const TOTAL_WEIGHT = 100; // facilita o cálculo de %

let currentBalance = 0;
let isSpinning = false;
let isSpinningG2 = false;

// ── RTP SESSION TRACKING ──
let sessionTotalBet = 0;
let sessionTotalWin = 0;
let sessionSpins = 0;
let sessionSpinsG2 = 0;

// ────────────────────────────────────────────
// PAR SHEET — GAME 1 (Multi-Line)
// ────────────────────────────────────────────
// Cada célula da grade 3×3 sorteia seu símbolo independentemente
// com base nos pesos abaixo. O RTP é calculado como:
//   RTP = Σ [E(n_paylines_symbol) × mult_symbol]
// Onde E(n) = 8 × (weight/total)³ para 8 paylines
//
// Cálculo do RTP:
//   🥩 peso40 → P₁=0.4 → E=8×0.064=0.512 × 0.9 = 46.08%
//   🐱 peso30 → P₁=0.3 → E=8×0.027=0.216 × 1.5 = 32.40%
//   💰 peso18 → P₁=0.18→ E=8×0.00583=0.0467 × 3 = 14.00%
//   🍀 peso 8 → P₁=0.08→ E=8×0.00051=0.0041 × 4 =  1.64%
//   🐺 peso 3 → P₁=0.03→ E=8×0.000027=0.00022×10 =  0.22%
//   💎 peso 1 → P₁=0.01→ E=8×0.000001=0.000008×20=  0.02%
//                                        TOTAL ≈ 94.35%
//   House Edge = 100% - 94.35% = 5.65% ✓

const G1_WEIGHTS = [
    { id: 'diamond', mult: 20,  weight: 1  },  // 💎
    { id: 'wolf',    mult: 10,  weight: 3  },  // 🐺
    { id: 'clover',  mult: 4,   weight: 8  },  // 🍀
    { id: 'money',   mult: 3,   weight: 18 },  // 💰
    { id: 'cat',     mult: 1.5, weight: 30 },  // 🐱
    { id: 'meat',    mult: 1,   weight: 40 },  // 🥩
];

const G1_HTML = {
    diamond: '<img src="img/diamante_roleta1.webp" alt="💎" class="slot-icon">',
    wolf:    '<img src="img/lobo_roleta1.webp" alt="🐺" class="slot-icon">',
    clover:  '<img src="img/trevo_roleta1.webp" alt="🍀" class="slot-icon">',
    money:   '<img src="img/saco_dinheiro_roleta1.webp" alt="💰" class="slot-icon">',
    cat:     '<img src="img/gato_roleta1.webp" alt="🐱" class="slot-icon">',
    meat:    '<img src="img/carne_roleta1.webp" alt="🥩" class="slot-icon">',
};

// ────────────────────────────────────────────
// PAR SHEET — GAME 2 (Classic Single-Line)
// ────────────────────────────────────────────
// Apenas a linha CENTRAL [3,4,5] paga.
// RTP calculado para 1 payline:
//   💎 peso 1  → 0.001% × 500 =  0.05%
//   7️⃣ peso 3  → 0.0027% × 200 =  0.54%
//   🍉 peso 8  → 0.0512% ×  80 =  4.10%
//   🎰 peso 15 → 0.3375% ×  30 = 10.13%
//   🍋 peso 30 → 2.7000% ×  10 = 27.00%
//   🍒 peso 43 → 7.9507% × 6.5 = 51.68%
//                        TOTAL ≈ 93.49%
//   House Edge = 100% - 93.49% = 6.51% ✓

const G2_WEIGHTS = [
    { id: 'diamond2', mult: 500, weight: 1  },
    { id: 'seven',    mult: 200, weight: 3  },
    { id: 'watermelon', mult: 80,  weight: 8  },
    { id: 'bar',      mult: 30,  weight: 15 },
    { id: 'lemon',    mult: 10,  weight: 30 },
    { id: 'cherry',   mult: 6.5, weight: 43 },
];

const G2_HTML = {
    diamond2:   '<img src="img/diamante_roleta2.webp" alt="💎" class="slot-icon">',
    seven:      '<img src="img/sete_roleta2.webp" alt="7️⃣" class="slot-icon">',
    watermelon: '<img src="img/melancia_roleta2.webp" alt="🍉" class="slot-icon">',
    bar:        '<img src="img/bar_roleta2.webp" alt="🎰" class="slot-icon">',
    lemon:      '<img src="img/limao_roleta2.webp" alt="🍋" class="slot-icon">',
    cherry:     '<img src="img/cereja_roleta2.webp" alt="🍒" class="slot-icon">',
};

// ────────────────────────────────────────────
// PAYLINES (Grade 3×3: indices 0..8)
// ────────────────────────────────────────────
// 0 1 2
// 3 4 5
// 6 7 8
const PAYLINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// ── DOM ELEMENTS ──
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');
const mainWrapper = document.getElementById('main-wrapper');
const balanceDisplays = document.querySelectorAll('.balance-display');

// Game 1
const spinBtn = document.getElementById('spin-btn');
const winOverlay = document.getElementById('win-overlay');
const betInput = document.getElementById('bet-input');
const cells = Array.from({length: 9}, (_, i) => document.getElementById(`cell-${i}`));

// Game 2
const spinBtnG2 = document.getElementById('g2-spin-btn');
const winOverlayG2 = document.getElementById('g2-win-overlay');
const betInputG2 = document.getElementById('g2-bet-input');
const cellsG2 = Array.from({length: 9}, (_, i) => document.getElementById(`g2-cell-${i}`));

// RTP Modal
const rtpBtn = document.getElementById('rtp-btn');
const rtpModal = document.getElementById('rtp-modal');
const rtpCloseBtn = document.getElementById('rtp-close-btn');
const rtpTotalBet = document.getElementById('rtp-total-bet');
const rtpTotalWin = document.getElementById('rtp-total-win');
const rtpSpins = document.getElementById('rtp-spins');
const rtpBalance = document.getElementById('rtp-balance');
const rtpGaugeFill = document.getElementById('rtp-gauge-fill');
const rtpGaugeValue = document.getElementById('rtp-gauge-value');

// ── FUNÇÕES DE SORTEIO PONDERADO ──

function weightedPick(weights) {
    const total = weights.reduce((sum, w) => sum + w.weight, 0);
    let roll = Math.random() * total;
    for (const entry of weights) {
        roll -= entry.weight;
        if (roll <= 0) return entry;
    }
    return weights[weights.length - 1];
}

function generateGridG1() {
    const grid = [];
    for (let i = 0; i < 9; i++) {
        const picked = weightedPick(G1_WEIGHTS);
        grid.push(G1_HTML[picked.id]);
    }
    return grid;
}

function generateGridG2() {
    const grid = [];
    for (let i = 0; i < 9; i++) {
        const picked = weightedPick(G2_WEIGHTS);
        grid.push(G2_HTML[picked.id]);
    }
    return grid;
}

// ── AVALIAÇÃO DAS PAYLINES ──

function evaluateGridG1(grid) {
    let wonLines = [];
    let totalMult = 0;

    PAYLINES.forEach(line => {
        const [a, b, c] = line;
        if (grid[a] === grid[b] && grid[b] === grid[c]) {
            wonLines.push(line);
            // Encontra o multiplicador deste símbolo
            for (const entry of G1_WEIGHTS) {
                if (G1_HTML[entry.id] === grid[a]) {
                    totalMult += entry.mult;
                    break;
                }
            }
        }
    });

    // Full House: todas as 9 células iguais → bônus de +25%
    const isFullHouse = grid.every(val => val === grid[0]);
    if (isFullHouse && totalMult > 0) {
        totalMult *= 1.25;
    }

    return { wonLines, totalMult, isFullHouse };
}

function evaluateGridG2(grid) {
    // Apenas a linha CENTRAL [3,4,5] paga
    const [a, b, c] = [3, 4, 5];
    if (grid[a] === grid[b] && grid[b] === grid[c]) {
        for (const entry of G2_WEIGHTS) {
            if (G2_HTML[entry.id] === grid[a]) {
                return { won: true, mult: entry.mult };
            }
        }
    }
    return { won: false, mult: 0 };
}

// ── UTILITÁRIOS ──

function getBetAmount() {
    let val = parseInt(betInput.value, 10);
    return (isNaN(val) || val <= 0) ? 0 : val;
}

function getBetAmountG2() {
    let val = parseInt(betInputG2.value, 10);
    return (isNaN(val) || val <= 0) ? 0 : val;
}

function formatCurrency(val) {
    return val.toLocaleString('pt-BR');
}

function updatePaytableDisplayG1(bet) {
    G1_WEIGHTS.forEach(entry => {
        const prizeElement = document.getElementById(`prize-${entry.mult}`);
        if (prizeElement) {
            prizeElement.innerText = Math.round(entry.mult * bet).toLocaleString('en-US');
        }
    });
}

function updatePaytableDisplayG2(bet) {
    G2_WEIGHTS.forEach(entry => {
        const prizeElement = document.getElementById(`g2-prize-${entry.mult}`);
        if (prizeElement) {
            prizeElement.innerText = Math.round(entry.mult * bet).toLocaleString('en-US');
        }
    });
}

function updateBalanceDisplay() {
    balanceDisplays.forEach(el => el.innerText = currentBalance.toLocaleString('en-US'));

    // Game 1
    const currentBet = getBetAmount();
    updatePaytableDisplayG1(currentBet);
    spinBtn.disabled = (currentBalance < currentBet || currentBet <= 0 || isSpinning);
    spinBtn.style.opacity = spinBtn.disabled ? '0.5' : '1';

    // Game 2
    const currentBet2 = getBetAmountG2();
    updatePaytableDisplayG2(currentBet2);
    spinBtnG2.disabled = (currentBalance < currentBet2 || currentBet2 <= 0 || isSpinningG2);
    spinBtnG2.style.opacity = spinBtnG2.disabled ? '0.5' : '1';
}

// ── RTP MODAL ──

function updateRTPModal() {
    const totalApostado = sessionTotalBet;
    const totalGanho = sessionTotalWin;
    const totalRodadas = sessionSpins + sessionSpinsG2;

    rtpTotalBet.innerText = totalApostado.toLocaleString('en-US');
    rtpTotalWin.innerText = totalGanho.toLocaleString('en-US');
    rtpSpins.innerText = totalRodadas;
    rtpBalance.innerText = currentBalance.toLocaleString('en-US');

    let rtpPercent = 0;
    if (totalApostado > 0) {
        rtpPercent = (totalGanho / totalApostado) * 100;
    }

    const pct = Math.min(rtpPercent, 200);
    rtpGaugeFill.style.width = Math.min(pct, 100) + '%';
    rtpGaugeValue.innerText = rtpPercent.toFixed(2) + '%';

    // Cor do gauge baseada no RTP
    if (rtpPercent < 80) {
        rtpGaugeFill.style.background = 'linear-gradient(90deg, #ff0040, #ff3333)';
    } else if (rtpPercent < 94) {
        rtpGaugeFill.style.background = 'linear-gradient(90deg, #ff6600, #ffcc00)';
    } else if (rtpPercent < 100) {
        rtpGaugeFill.style.background = 'linear-gradient(90deg, #ffcc00, #00ff88)';
    } else {
        rtpGaugeFill.style.background = 'linear-gradient(90deg, #00ff88, #00d2ff)';
    }
}

rtpBtn.addEventListener('click', () => {
    updateRTPModal();
    rtpModal.classList.add('active');
});

rtpCloseBtn.addEventListener('click', () => {
    rtpModal.classList.remove('active');
});

rtpModal.addEventListener('click', (e) => {
    if (e.target === rtpModal) rtpModal.classList.remove('active');
});

// ── LOGIN ──

function attemptLogin() {
    if (usernameInput.value === '1' && passwordInput.value === '1') {
        loginError.innerText = '';
        loginModal.style.opacity = '0';
        loginModal.style.visibility = 'hidden';
        setTimeout(() => {
            mainWrapper.classList.add('active');
            rtpBtn.classList.add('active');
            currentBalance = INITIAL_BALANCE;
            updateBalanceDisplay();
        }, 300);
    } else {
        loginError.innerText = 'Credenciais inválidas. Acesso negado.';
        const box = document.querySelector('.login-box');
        box.style.transform = 'translateX(10px)';
        setTimeout(() => box.style.transform = 'translateX(-10px)', 100);
        setTimeout(() => box.style.transform = 'translateX(0)', 200);
    }
}

loginBtn.addEventListener('click', attemptLogin);
passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') attemptLogin(); });
usernameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') attemptLogin(); });

betInput.addEventListener('input', updateBalanceDisplay);
betInputG2.addEventListener('input', updateBalanceDisplay);

// ────────────────────────────────────────────
// GAME 1 — SPIN
// ────────────────────────────────────────────

function runReelAnimation(cellsArray, finalGrid, cfg) {
    cellsArray.forEach((c, idx) => {
        let stripHTML = `<div class="reel-strip">`;
        stripHTML += `<div>${finalGrid[idx]}</div>`;
        // 25 frames de "embaralhamento"
        for (let i = 0; i < 25; i++) {
            const rand = cfg === 'g1'
                ? G1_HTML[weightedPick(G1_WEIGHTS).id]
                : G2_HTML[weightedPick(G2_WEIGHTS).id];
            stripHTML += `<div>${rand}</div>`;
        }
        stripHTML += `</div>`;
        c.innerHTML = stripHTML;

        const strip = c.querySelector('.reel-strip');
        strip.style.transform = `translateY(-${25 * 110}px)`;
        strip.style.transition = 'none';

        void strip.offsetWidth; // force reflow

        c.classList.add('cell-blur');

        const col = idx % 3;
        const duration = 1.0 + (col * 0.5); // stagger: 1s, 1.5s, 2s

        strip.style.transition = `transform ${duration}s cubic-bezier(0.15, 1.1, 0.2, 1)`;
        strip.style.transform = `translateY(0)`;

        setTimeout(() => {
            c.classList.remove('cell-blur');
        }, duration * 1000 - 200);
    });
}

spinBtn.addEventListener('click', () => {
    const currentBet = getBetAmount();
    if (isSpinning || currentBalance < currentBet || currentBet <= 0) return;

    // Deduz aposta + tracking RTP
    currentBalance -= currentBet;
    sessionTotalBet += currentBet;
    sessionSpins++;
    updateBalanceDisplay();
    isSpinning = true;
    betInput.disabled = true;

    // Limpa overlay
    winOverlay.classList.remove('show');
    cells.forEach(c => c.classList.remove('win-pulse'));

    // ── PAR SHEET: GERA GRADE PELO SORTEIO PONDERADO ──
    const finalGrid = generateGridG1();

    // Animação
    runReelAnimation(cells, finalGrid, 'g1');

    // Avaliação após animação
    setTimeout(() => {
        const winInfo = evaluateGridG1(finalGrid);

        if (winInfo.wonLines.length > 0) {
            let rawPrize = winInfo.totalMult * currentBet;
            let prize = rawPrize;
            let isBroken = prize % 1 !== 0;
            let bonusValue = 0;

            if (isBroken) {
                prize = Math.ceil(rawPrize);
                bonusValue = prize - rawPrize;
            }

            currentBalance += prize;
            sessionTotalWin += prize;

            // Highlight
            const winningIndices = new Set();
            if (winInfo.isFullHouse) {
                for (let i = 0; i < 9; i++) winningIndices.add(i);
                winOverlay.innerHTML = `🌟 FULL HOUSE! 🌟<br>GANHOU ${formatCurrency(prize)}`;
            } else {
                winInfo.wonLines.forEach(l => l.forEach(idx => winningIndices.add(idx)));
                winOverlay.innerHTML = `GANHOU ${formatCurrency(prize)}!`;
            }

            if (isBroken) {
                winOverlay.innerHTML += `<br><span style="font-size:1.2rem;color:#00d2ff;text-shadow:0 0 10px #00d2ff;">+ Bônus de ${bonusValue.toLocaleString('en-US')}!</span>`;
            }

            winningIndices.forEach(idx => cells[idx].classList.add('win-pulse'));

            setTimeout(() => {
                winOverlay.classList.add('show');
                updateBalanceDisplay();
            }, 200);
        } else {
            updateBalanceDisplay();
        }

        isSpinning = false;
        betInput.disabled = false;
        updateBalanceDisplay();
    }, 2100);
});

// ────────────────────────────────────────────
// GAME 2 — SPIN (Single Payline)
// ────────────────────────────────────────────

spinBtnG2.addEventListener('click', () => {
    const currentBet = getBetAmountG2();
    if (isSpinningG2 || currentBalance < currentBet || currentBet <= 0) return;

    currentBalance -= currentBet;
    sessionTotalBet += currentBet;
    sessionSpinsG2++;
    updateBalanceDisplay();
    isSpinningG2 = true;
    betInputG2.disabled = true;

    winOverlayG2.classList.remove('show');
    cellsG2.forEach(c => c.classList.remove('win-pulse'));

    // ── PAR SHEET: GERA GRADE ──
    const finalGrid = generateGridG2();

    // Animação
    runReelAnimation(cellsG2, finalGrid, 'g2');

    // Avaliação
    setTimeout(() => {
        const result = evaluateGridG2(finalGrid);

        if (result.won) {
            let rawPrize = result.mult * currentBet;
            let prize = rawPrize;
            let isBroken = prize % 1 !== 0;
            let bonusValue = 0;

            if (isBroken) {
                prize = Math.ceil(rawPrize);
                bonusValue = prize - rawPrize;
            }

            currentBalance += prize;
            sessionTotalWin += prize;

            winOverlayG2.innerHTML = `GANHOU ${formatCurrency(prize)}!`;
            if (isBroken) {
                winOverlayG2.innerHTML += `<br><span style="font-size:1.2rem;color:#00d2ff;text-shadow:0 0 10px #00d2ff;">+ Bônus de ${bonusValue.toLocaleString('en-US')}!</span>`;
            }

            cellsG2[3].classList.add('win-pulse');
            cellsG2[4].classList.add('win-pulse');
            cellsG2[5].classList.add('win-pulse');

            setTimeout(() => {
                winOverlayG2.classList.add('show');
                updateBalanceDisplay();
            }, 200);
        } else {
            updateBalanceDisplay();
        }

        isSpinningG2 = false;
        betInputG2.disabled = false;
        updateBalanceDisplay();
    }, 2100);
});
