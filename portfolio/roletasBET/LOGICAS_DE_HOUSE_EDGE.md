# LÓGICAS DE HOUSE EDGE — "A BANCA SEMPRE GANHA"

> Documento de referência sobre técnicas e algoritmos para garantir que a banca (casa) tenha vantagem matemática sobre o jogador no longo prazo em jogos de azar do tipo slot machine / caça-níqueis.

---

## SUMÁRIO

1. [LÓGICA ATUAL DO PROJETO (Cyber Neon Slots)](#1-lógica-atual-do-projeto-cyber-neon-slots)
2. [FUNDAMENTOS TEÓRICOS](#2-fundamentos-teóricos)
3. [MÉTODO 1 — RTP FIXO COM SORTEIO PONDERADO (PAR SHEET)](#3-método-1--rtp-fixo-com-sorteio-ponderado-par-sheet)
4. [MÉTODO 2 — REEL STRIPS COM VIRTUAL REEL MAPPING (PESOS POR ROLO)](#4-método-2--reel-strips-com-virtual-reel-mapping-pesos-por-rolo)
5. [MÉTODO 3 — BALANCE DYNAMIC ADJUSTMENT (DDA PARA CASSINO)](#5-método-3--balance-dynamic-adjustment-dda-para-cassino)
6. [MÉTODO 4 — LOSS DISGUISED AS WINS (LDW) + NEAR MISS](#6-método-4--loss-disguised-as-wins-ldw--near-miss)
7. [MÉTODO 5 — MONTE CARLO SIMULATION + OTIMIZAÇÃO (VNS/SIMULATED ANNEALING)](#7-método-5--monte-carlo-simulation--otimização-vnssimulated-annealing)
8. [MÉTODO 6 — DYNAMIC BALANCE TRACKING (PATENTE WALKER DIGITAL)](#8-método-6--dynamic-balance-tracking-patente-walker-digital)
9. [MÉTODO 7 — TWO-PHASE REEL OPTIMIZER (SIMULATED ANNEALING)](#9-método-7--two-phase-reel-optimizer-simulated-annealing)
10. [MÉTODO 8 — MULTI-RTP CONFIG (VERSÕES APROVADAS)](#10-método-8--multi-rtp-config-versões-aprovadas)
11. [COMPARAÇÃO ENTRE OS MÉTODOS](#11-comparação-entre-os-métodos)
12. [REFERÊNCIAS E FONTES](#12-referências-e-fontes)

---

## 1. LÓGICA ATUAL DO PROJETO (Cyber Neon Slots)

### Como funciona hoje

O jogo usa um **sorteio prévio por categorias** com probabilidades fixas definidas no código:

#### Game 1 — Multi-Line System
```
Categorias de sorteio:
┌──────────┬──────────┬─────────────────────────────────────┐
│ Categoria │ Chance   │ Comportamento                       │
├──────────┼──────────┼─────────────────────────────────────┤
│ lose     │ 65%      │ Gera grade sem nenhuma linha ven-   │
│          │          │ cedora (com 40% de near-miss)       │
│ common   │ 25%      │ 1-2 linhas de símbolos comuns       │
│          │          │ (trevo💰gato🥩) — sem símbolos altos │
│ high     │ 8%       │ 1+ linhas de 💎 ou 🐺                │
│ full     │ 2%       │ Grade inteira com o mesmo símbolo   │
│          │          │ (Full House = +25% bônus)           │
└──────────┴──────────┴─────────────────────────────────────┘
```

#### Game 2 — Classic Single-Line
```
┌──────────┬──────────┬─────────────────────────────────────┐
│ Categoria │ Chance   │ Comportamento                       │
├──────────┼──────────┼─────────────────────────────────────┤
│ lose     │ 60%      │ Linha central NÃO tem 3 iguais      │
│ basic    │ 20%      │ 🍒 ou 🍋 na linha central            │
│ medium   │ 13%      │ 🍉 ou 🎰 na linha central            │
│ high     │ 6%       │ 7️⃣ na linha central                  │
│ jackpot  │ 1%       │ 💎 na linha central                  │
└──────────┴──────────┴─────────────────────────────────────┘
```

### Problemas da lógica atual

1. **Sem RTP definido** — não há um cálculo de Return to Player. As probabilidades são arbitrárias.
2. **House edge não é calculado** — a vantagem da casa não é mensurável nem controlada.
3. **Categorias manuais** — o sistema de categorias é frágil e não escala.
4. **Near-miss quebrado** — a lógica de near-miss do Game 1 estava com bug (já corrigido).
5. **Saldo infinito** — o saldo inicial é 100.000 mas não há controle de quando o jogador perdeu tudo, nem um RTP que garanta que a banca sempre ganhe no longo prazo.
6. **Vantagem da casa não garantida** — as categorias foram definidas, mas não há garantia matemática de que a banca recupere o dinheiro no longo prazo.

### Cálculo aproximado do House Edge atual (para referência)

Com base nos multiplicadores de cada categoria e assumindo aposta de 10.000:

| Categoria | Chance | Mult médio | Retorno médio (créditos) |
|-----------|--------|------------|--------------------------|
| lose | 65% | 0 | 0 |
| common | 25% | ~4.3× (média 1.5 a 10) | ~10.750 |
| high | 8% | ~37.5× (média 25 a 50) | ~30.000 |
| full | 2% | ~30.6× (50*1.25*~0.49) | ~6.125 |

**Retorno total estimado por spin: ~46.875 créditos** para aposta de 10.000 → **RTP ~468%** — a banca perde!

Isso mostra que a lógica atual foi feita para **demonstração/vitórias fáceis**, não para um jogo real.

---

## 2. FUNDAMENTOS TEÓRICOS

### Conceitos-chave

| Conceito | Definição | Fórmula |
|----------|-----------|---------|
| **RTP** (Return to Player) | % do total apostado que o jogo devolve aos jogadores no longo prazo | `RTP = (Total Pago / Total Apostado) × 100` |
| **House Edge** (Vantagem da Casa) | % de lucro da banca sobre o total apostado | `House Edge = 100% - RTP` |
| **Hit Frequency** | % de giros que resultam em alguma vitória | `Hit Rate = (Giros Vencedores / Total Giros) × 100` |
| **Volatility** (Variância) | Medida de dispersão dos resultados | `σ² = Σ[P(x) × x²] - μ²` |
| **Cycle** | Número total de combinações possíveis | `Cycle = Π (stops_por_rolo)` |

### Regra de ouro da indústria

> **Para todo jogo de azar comercial: RTP < 100% → House Edge > 0%**
>
> Um RTP típico de slot machines varia entre 85% e 98%.
> Quanto menor o RTP, maior a vantagem da casa.
> Cassinos online regulados operam com RTP entre 94% e 97%.

### Como o RTP é distribuído

```
RTP_total = RTP_base + RTP_bonus

Onde:
  RTP_base  = Σ [Probabilidade(combinação) × Pagamento(combinação)]
  RTP_bonus = P(trigger) × EV(bonus)
```

---

## 3. MÉTODO 1 — RTP FIXO COM SORTEIO PONDERADO (PAR SHEET)

### Descrição

O método mais comum e regulamentado. Define-se um **RTP alvo** (ex: 95%) e constrói-se uma **tabela de pagamentos** (pay table) com probabilidades ajustadas para que a soma de `probabilidade × pagamento` de todas as combinações possíveis seja exatamente o RTP desejado.

### Como implementar

```
RTP_alvo = 0.95 (95%)
House Edge = 5%

Para cada combinação vencedora C:
    RTP_contribuição(C) = Probabilidade(C) × Multiplicador(C)
    
RTP_total = Σ RTP_contribuição(C) para todo C

Ajustar probabilidades até RTP_total = RTP_alvo
```

### Exemplo prático (3 símbolos em grade 3×3)

```
Símbolos: 💎(50×), 🐺(25×), 🍀(10×), 💰(5×), 🐱(3×), 🥩(1.5×), ❌(perde)

Total de combinações: 7^9 = 40.353.607

Para RTP = 95%:
  Soma(P(c) × mult(c)) = 0.95

Uma possível distribuição (valores ilustrativos):
  💎 3 iguais:    P = 0.001%, mult = 50×  → contrib = 0.05%
  🐺 3 iguais:    P = 0.005%, mult = 25×  → contrib = 0.125%
  🍀 3 iguais:    P = 0.02%,  mult = 10×  → contrib = 0.2%
  💰 3 iguais:    P = 0.05%,  mult = 5×   → contrib = 0.25%
  🐱 3 iguais:    P = 0.1%,   mult = 3×   → contrib = 0.3%
  🥩 3 iguais:    P = 0.2%,   mult = 1.5× → contrib = 0.3%
  Duas linhas:    P = 5%,     mult = 2×   → contrib = 10%
  Uma linha baixa: P = 25%,   mult = 1×   → contrib = 25%
  Nada:           P = 69.624%             → contrib = 0%
  
  RTP_total ≈ 36.225% → precisa ajustar (aumentar frequência ou pagamentos)

Após iterações, ajusta-se até bater 95%.
```

### Vantagens
- ✅ Mais regulamentado e auditável
- ✅ Matematicamente sólido
- ✅ Fácil de calcular e documentar (PAR Sheet)
- ✅ House edge garantido no longo prazo

### Desvantagens
- ❌ Requer cálculo exaustivo de combinações
- ❌ Menos flexível para ajustes dinâmicos
- ❌ Pode parecer "injusto" em sessões curtas

---

## 4. MÉTODO 2 — REEL STRIPS COM VIRTUAL REEL MAPPING (PESOS POR ROLO)

### Descrição

Cada rolo (coluna) tem uma **fita virtual** com N posições, onde cada posição contém um símbolo. Símbolos de alto valor têm **menos ocorrências** na fita. O RNG sorteia uma posição em cada fita (rolo) independentemente.

### Como implementar

```
Rolo 1: [💎,🐺,🍀,💰,🐱,🥩,❌,❌,❌,❌]  (10 posições)
Rolo 2: [💎,🐺,🍀,💰,🐱,🥩,❌,❌,❌,❌,❌,❌]  (12 posições)
Rolo 3: [💎,🐺,🍀,💰,🐱,🥩,❌,❌,❌,❌,❌,❌,❌,❌]  (14 posições)

Probabilidade de 💎-💎-💎 na linha central:
  = (1/10) × (1/12) × (1/14) = 1/1680 ≈ 0.0595%

Para calcular o RTP:
  RTP = Σ [P(combinação) × mult(combinação)]
  
Ajustar o número de ocorrências de cada símbolo em cada rolo até bater o RTP alvo.
```

### Exemplo de configuração

```
RTP_alvo = 95%
Cada rolo tem 20 posições virtuais:

         Rolo 1  Rolo 2  Rolo 3
💎          1       1       1
🐺          1       1       2
🍀          2       2       2
💰          2       2       3
🐱          3       3       2
🥩          3       3       3
❌          8       8       7
         ─────   ─────   ─────
Total:     20      20      20

Cycle = 20 × 20 × 20 = 8.000 combinações possíveis na linha central
Dá para enumerar todas e calcular o RTP exato.
```

### Vantagens
- ✅ Método padrão da indústria (Wizard of Odds, PAR Sheets)
- ✅ Fácil de entender e implementar
- ✅ Virtual reels permitem ajuste fino de probabilidades
- ✅ Near-miss ocorre naturalmente pela distribuição dos símbolos

### Desvantagens
- ❌ Requer cálculo de todas as combinações para RTP exato
- ❌ Menos dinâmico (muda-se a fita, não a lógica em tempo real)

---

## 5. MÉTODO 3 — BALANCE DYNAMIC ADJUSTMENT (DDA PARA CASSINO)

### Descrição

O sistema monitora o **saldo do jogador** em tempo real e ajusta as probabilidades de vitória dinamicamente para garantir que a banca sempre recupere o dinheiro no longo prazo. Inspirado em Dynamic Difficulty Adjustment (DDA) de jogos eletrônicos.

### Como implementar

```
Saldo_inicial = 100.000
Saldo_atual = 100.000
RTP_alvo = 0.90 (90%)  — a casa fica com 10%

A cada spin:
  total_apostado += bet
  lucro_esperado = total_apostado * (1 - RTP_alvo)
  saldo_ideal = saldo_inicial - lucro_esperado

  difference = saldo_atual - saldo_ideal

  if difference > 0:
    // Jogador está "ganhando" mais que o esperado → apertar as chances
    usar categoria de perda mais agressiva
    reduzir frequência de vitórias
  else:
    // Jogador está "perdendo" mais que o esperado → dar mais vitórias pequenas
    aumentar frequência de vitórias baixas
    manter vitórias altas muito raras
```

### Exemplo de ajuste dinâmico

```
Diferença (créditos) | Ajuste nas probabilidades
> 20.000            | lose 85%, common 13%, high 1.9%, full 0.1%
10.000 a 20.000     | lose 75%, common 20%, high 4.5%, full 0.5%
0 a 10.000          | lose 65%, common 25%, high 8%, full 2%   (padrão)
-10.000 a 0         | lose 55%, common 30%, high 12%, full 3%
-20.000 a -10.000   | lose 45%, common 35%, high 16%, full 4%
< -20.000           | lose 35%, common 38%, high 20%, full 7%
```

### Vantagens
- ✅ Garante que a banca sempre ganhe no longo prazo
- ✅ Adaptável ao comportamento do jogador
- ✅ Mantém o jogador "engajado" (não perde tudo rápido demais)
- ✅ Pode ser combinado com outros métodos

### Desvantagens
- ❌ Pode ser considerado antiético ou ilegal em jurisdições reguladas
- ❌ Requer monitoramento contínuo do estado do jogador
- ❌ Mais complexo de implementar e testar

---

## 6. MÉTODO 4 — LOSS DISGUISED AS WINS (LDW) + NEAR MISS

### Descrição

Técnica psicológica que combina dois efeitos comprovados:

1. **Near Miss** — mostrar 2 símbolos iguais e 1 diferente (quase ganhou). Estudos mostram que near-misses em ~30% dos spins maximizam a persistência do jogador.
2. **Loss Disguised as Wins (LDW)** — vitórias menores que o valor apostado, mas com efeitos visuais/sonoros de vitória. Faz o jogador sentir que está ganhando quando na verdade está perdendo.

### Como implementar

```
Aposta: 10.000 por giro

Combinações de LDW:
  - 1 linha de 🥩-🥩-🥩: paga 15.000 → "vitória" de 5.000 líquido? 
    NÃO! Na verdade é uma vitória de 15.000 mas o jogador apostou 10.000.
    Lucro real: 5.000 (50% de retorno — ainda é loss disfarçado se 
    considerarmos o total de linhas/não acertar o suficiente)

  - Na prática: se o jogador aposta 10.000 e ganha 8.000 em linhas
    dispersas, ele "ganhou" mas perdeu 2.000 no total.

Efeitos:
  - Tocar som de vitória
  - Animar células com brilho
  - Mostrar "GANHOU 8.000!" em vez de "PERDEU 2.000"
```

### Near Miss técnico

```
Grade 3×3:
  [💎] [💎] [🐺]  → near miss (2/3 diamantes)
  [🐱] [💰] [🍀]  → 
  [🥩] [❌] [💎]  →

O jogador vê 2 diamantes e pensa "quase!", mas é uma perda completa.

Para maximizar near-misses:
  - Usar virtual reel mapping com alta densidade de blanks adjacentes
    a símbolos de alto valor (técnica de clustering)
  - 2 símbolos altos em posições adjacentes mas sem completar a linha
```

### Vantagens
- ✅ Comprovadamente aumenta o tempo de jogo (mais apostas = mais receita)
- ✅ O jogador sente que está ganhando mesmo quando perde
- ✅ Legal na maioria das jurisdições (não altera o resultado, só a apresentação)

### Desvantagens
- ❌ Questões éticas levantadas por estudos acadêmicos
- ❌ Pode ser considerado predatório em algumas jurisdições
- ❌ Requer design cuidadoso de UI/UX

---

## 7. MÉTODO 5 — MONTE CARLO SIMULATION + OTIMIZAÇÃO (VNS/SIMULATED ANNEALING)

### Descrição

Usa simulações de milhões de giros para calcular o RTP real e, em seguida, algoritmos de otimização (Variable Neighborhood Search, Simulated Annealing) para ajustar os pesos dos símbolos nos rolos até atingir o RTP desejado.

### Como implementar

```
1. Definir RTP alvo (ex: 95%)
2. Criar distribuição inicial de símbolos nos rolos
3. Simular N milhões de giros (Monte Carlo)
4. Calcular RTP observado
5. Se RTP observado ≠ RTP alvo:
   a. Aplicar operador de movimento (RMS ou RMC)
   b. Re-simular
   c. Aceitar ou rejeitar mudança com base na melhoria
6. Repetir até convergência

Operadores de movimento:
  - RMS (Replace Maximum Symbol): substitui símbolo de alto pagamento
    por um de baixo pagamento em um rolo
  - RMC (Replace Maximum Combination): substitui uma combinação de alto
    pagamento por uma de baixo
```

### Exemplo com código conceitual

```javascript
function otimizarRTP(alvo, iteracoes) {
    let pesos = distribuicaoInicial();
    let melhorRTP = 0;
    
    for (let i = 0; i < iteracoes; i++) {
        const rtp = simularMonteCarlo(pesos, 100000);
        const erro = Math.abs(rtp - alvo);
        
        if (erro < 0.001) return pesos; // Convergiu
        
        // Tenta um movimento RMS
        const novoPesos = rmsOperator(pesos);
        const novoRTP = simularMonteCarlo(novoPesos, 100000);
        
        if (Math.abs(novoRTP - alvo) < erro) {
            pesos = novoPesos;
        }
    }
    return pesos;
}
```

### Vantagens
- ✅ Precisão ajustável (mais simulações = mais preciso)
- ✅ Automatizado — não requer ajuste manual
- ✅ Método científico e publicável

### Desvantagens
- ❌ Computacionalmente intensivo
- ❌ Pode convergir para ótimos locais
- ❌ Complexidade de implementação

---

## 8. MÉTODO 6 — DYNAMIC BALANCE TRACKING (PATENTE WALKER DIGITAL)

### Descrição

Baseado na patente US 6,520,856 (Walker Digital). O sistema mantém um **controle do "saldo esperado"** do jogador com base no RTP alvo. Se o jogador está muito acima do esperado, o sistema gera **resultados artificiais** para trazer de volta à média.

### Como implementar

```
Saldo_inicial = 100.000
Total_apostado = 0
RTP_alvo = 0.92 (92%)

A cada spin com aposta bet:
  total_apostado += bet
  saldo_esperado = saldo_inicial - total_apostado * (1 - RTP_alvo)
  // Ex: após 50.000 em apostas, saldo_esperado = 100.000 - 50.000*0.08 = 96.000
  
  saldo_atual = saldo_real_do_jogador
  desvio = saldo_atual - saldo_esperado
  
  if desvio > 0:
    // Jogador está ganhando demais
    // Gerar giro com perda garantida
    resultado = gerarResultado("lose_forcado")
  else if desvio < -limiar:
    // Jogador está perdendo demais, dar uma "vitória de consolo"
    resultado = gerarResultado("win_pequeno_forcado")
  else:
    // Dentro do esperado, usar RNG normal
    resultado = gerarResultado("normal")
```

### Patente US 6,520,856 — Pontos-chave

- O jogador pode customizar parâmetros (odds, payout, aposta)
- O sistema ajusta automaticamente **outros parâmetros** para manter o house edge constante
- Usa a equação: `house_edge = f(jackpot, wagered, probability)`
- Qualquer alteração do jogador em um parâmetro resulta em ajuste compensatório em outro

### Vantagens
- ✅ Garantia matemática de house edge
- ✅ Patenteada e testada
- ✅ Pode ser combinada com customização do jogador
- ✅ Mantém a experiência do jogador equilibrada

### Desvantagens
- ❌ Patenteada (pode haver restrições legais)
- ❌ Questões regulatórias em algumas jurisdições
- ❌ Resultados "artificiais" podem ser detectados por auditores

---

## 9. MÉTODO 7 — TWO-PHASE REEL OPTIMIZER (SIMULATED ANNEALING)

### Descrição

Implementado no repositório `highnet/lucky-slots-v3` (TypeScript). Usa um otimizador em duas fases para projetar tanto os **layouts dos rolos** quanto os **multiplicadores de pagamento** para atingir um RTP alvo E uma taxa de acerto (hit-rate) alvo simultaneamente.

### Como implementar

```
Fase 1 — Layout dos Rolos (Simulated Annealing):
  - Redistribui símbolos de forma desigual entre os rolos
  - Reduz a probabilidade de combinações entre rolos (cross-reel match)
  - Operadores de movimento:
    * swap: troca dois símbolos de posição no mesmo rolo
    * replace: substitui um símbolo por outro
    * shift: move um símbolo de um rolo para outro

Fase 2 — Escalonamento dos Multiplicadores:
  - Ajusta os multiplicadores para cima ou para baixo
  - Operador global: escala TODOS os multiplicadores por um fator comum
  - Operador local: ajusta um multiplicador de cada vez (refinamento fino)

Após cada modificação:
  - Executa simulação Monte Carlo (100k+ giros)
  - Calcula RTP e hit-rate
  - Aceita ou rejeita com base na melhoria em direção ao alvo
```

### Exemplo conceitual

```javascript
class ReelOptimizer {
    constructor(targetRTP, targetHitRate) {
        this.targetRTP = targetRTP;       // 0.95
        this.targetHitRate = targetHitRate; // 0.30
    }

    optimize(reels, multipliers) {
        // Fase 1: Otimizar rolos
        for (let i = 0; i < 1000; i++) {
            const newReels = this.swapRandomSymbols(reels);
            const result = this.simulate(newReels, multipliers);
            if (this.improvement(result)) reels = newReels;
        }
        
        // Fase 2: Escalonar multiplicadores
        for (let i = 0; i < 500; i++) {
            const factor = 1 + (Math.random() - 0.5) * 0.1;
            const newMult = multipliers.map(m => m * factor);
            const result = this.simulate(reels, newMult);
            if (this.improvement(result)) multipliers = newMult;
        }
        
        return { reels, multipliers };
    }
}
```

### Vantagens
- ✅ Otimiza múltiplos objetivos simultaneamente (RTP + hit-rate)
- ✅ Abordagem automatizada e cientificamente sólida
- ✅ Código aberto disponível para referência

### Desvantagens
- ❌ Complexidade computacional alta
- ❌ Requer engenharia de software sofisticada
- ❌ Pode exigir ajustes manuais finos

---

## 10. MÉTODO 8 — MULTI-RTP CONFIG (VERSÕES APROVADAS)

### Descrição

O jogo possui **múltiplas configurações de RTP predefinidas** (ex: 94%, 96%, 97%) que podem ser selecionadas pelo operador. Cada configuração altera os pesos dos símbolos, a tabela de pagamentos ou a frequência de bônus.

### Como implementar

```
Config A — RTP 94% (House Edge 6%):
  lose: 70%, common: 22%, high: 7%, full: 1%

Config B — RTP 96% (House Edge 4%):
  lose: 65%, common: 25%, high: 8%, full: 2%

Config C — RTP 97% (House Edge 3%):
  lose: 60%, common: 28%, high: 9.5%, full: 2.5%

Diferenças típicas entre versões:
  - Versão de baixo RTP (94%): 
    * Símbolos altos 20% menos frequentes
    * Multiplicadores 10% menores
    * Bônus mais raros
    
  - Versão de alto RTP (97%):
    * Símbolos baixos mais frequentes
    * Mais perto de 1:1 nas linhas de base
    * Bônus ligeiramente mais frequentes
```

### Exemplo de implementação

```javascript
const RTP_CONFIGS = {
    '94': {
        name: 'Config A (Low)',
        houseEdge: 0.06,
        rtp: 0.94,
        weights: {
            lose: 0.70, common: 0.22, high: 0.07, full: 0.01
        },
        multipliers: {
            diamante: 45, lobo: 22, trevo: 9, dinheiro: 4.5, gato: 2.5, carne: 1.3
        }
    },
    '96': {
        name: 'Config B (Default)',
        houseEdge: 0.04,
        rtp: 0.96,
        weights: {
            lose: 0.65, common: 0.25, high: 0.08, full: 0.02
        },
        multipliers: {
            diamante: 50, lobo: 25, trevo: 10, dinheiro: 5, gato: 3, carne: 1.5
        }
    },
    '97': {
        name: 'Config C (High)',
        houseEdge: 0.03,
        rtp: 0.97,
        weights: {
            lose: 0.60, common: 0.28, high: 0.095, full: 0.025
        },
        multipliers: {
            diamante: 52, lobo: 27, trevo: 11, dinheiro: 5.5, gato: 3.5, carne: 2
        }
    }
};
```

### Vantagens
- ✅ Simples de implementar
- ✅ Regulamentação aprova este modelo
- ✅ Permite que o operador escolha o nível de house edge
- ✅ Cada versão é auditável separadamente

### Desvantagens
- ❌ Requer múltiplas configurações de jogo
- ❌ Cada versão precisa ser certificada separadamente
- ❌ O jogador pode escolher a versão de RTP mais alto

---

## 11. COMPARAÇÃO ENTRE OS MÉTODOS

| Método | House Edge Garantido | Complexidade | Regulamentação | Justiça Percebida | Manutenção |
|--------|:---:|:---:|:---:|:---:|:---:|
| **1 — RTP Fixo (PAR Sheet)** | ✅ Sim | Média | ✅ Aprovada | Alta | Baixa |
| **2 — Reel Strips com Pesos** | ✅ Sim | Média | ✅ Aprovada | Alta | Baixa |
| **3 — Balance Dynamic (DDA)** | ✅ Sim | Alta | ⚠️ Questionável | Média | Alta |
| **4 — LDW + Near Miss** | ⚠️ Parcial | Baixa | ✅ Aprovada | Média (enganosa) | Baixa |
| **5 — Monte Carlo + VNS** | ✅ Sim | Muito Alta | ✅ Aprovada | Alta | Média |
| **6 — Dynamic Balance Tracking** | ✅ Sim | Alta | ⚠️ Patenteada | Média | Alta |
| **7 — Two-Phase Optimizer** | ✅ Sim | Muito Alta | ✅ Aprovada | Alta | Média |
| **8 — Multi-RTP Config** | ✅ Sim | Baixa | ✅ Aprovada | Alta | Baixa |

### Recomendação para este projeto

Para o **Cyber Neon Slots**, a combinação mais pragmática seria:

```
Método escolhido: 1 + 4 (PAR Sheet + LDW/Near Miss)

Justificativa:
  - Método 1 (RTP Fixo): define matematicamente o house edge, fácil de auditar
  - Método 4 (LDW + Near Miss): mantém o jogador engajado e aumenta o tempo de jogo
  - Implementação evolui naturalmente do código atual (categorias de sorteio)
```

### Ou, para máxima garantia de house edge:

```
Método escolhido: 3 + 8 (Dynamic Adjustment + Multi-RTP)

Justificativa:
  - Método 3: garante que a banca sempre recupere o dinheiro em tempo real
  - Método 8: permite múltiplos níveis de RTP para diferentes operadores/mercados
  - Ideal para um jogo que será distribuído para diferentes cassinos
```

---

## 12. REFERÊNCIAS E FONTES

### Artigos Acadêmicos
- Harrigan, K. A. (2007). *Slot machine structural characteristics: Distorted player views of payback percentages*.
- Harrigan, K. A., & Dixon, M. (2009). *PAR Sheets, probabilities, and slot machine play: Implications for problem and non-problem gambling*. Journal of Gambling Issues.
- Dixon, M. J., Harrigan, K. A., Sandhu, R., Collins, K., & Fugelsang, J. A. (2010). *Losses disguised as wins in modern multi-line video slot machines*. Addiction.
- Kassinove, J. I., & Schare, M. L. (2001). *Effects of the "near miss" and the "big win" at persistence in slot machine gambling*. Psychology of Addictive Behaviors.
- Barboianu, C. (2021). *Slot Machine RTP Optimization Using Variable Neighborhood Search*. Journal of Mathematics.

### Patentes
- US 6,520,856 — *Gaming device and method of operation thereof* (Walker Digital)
- US 2009/0088252 — *Gaming system and method configured to change the odds of a player obtaining a winning game outcome*
- US 2025/0087049 — *Methods and systems for conducting games of chance*

### Repositórios e Ferramentas
- [highnet/lucky-slots-v3](https://github.com/highnet/lucky-slots-v3) — Slot engine com otimizador two-phase
- [sta-ger/pokie](https://github.com/sta-ger/pokie) — Framework de slot machine server-side
- [nuxy/slot-machine-gen](https://github.com/nuxy/slot-machine-gen) — Slot machine com pesos configuráveis
- [sams-chw/Slot-Game-RTP](https://github.com/sams-chw/Slot-Game-RTP) — Cálculo de RTP em Python

### Portais Técnicos
- [Neon Royale — Slot Math](https://neon-royale.com/dev/slot-math/) — Série completa sobre matemática de slots
- [SlotDecoded](https://slotdecoded.com/) — Modelos matemáticos de slot machines
- [Chips & Truths](https://chipsandtruths.com/) — Artigos sobre RNG, RTP e house edge
- [Wizard of Odds — Slot Machines](https://wizardofodds.com/) — Probabilidades e análises
- [GLI-11 / GLI-19](https://gaminglabs.com/) — Padrões de certificação de jogos

---

## 13. O QUE AS BETS BRASILEIRAS USAM ATUALMENTE (2026)

### Contexto Regulatório

O Brasil aprovou o **marco regulatório das apostas de quota fixa** (Lei **14.790/2023**), regulamentado pela **SPA/MF** (Secretaria de Prêmios e Apostas do Ministério da Fazenda). Desde **1º de janeiro de 2025**, toda operadora precisa de licença federal para atuar legalmente.

**Principais regras da Portaria SPA/MF nº 1.207/2024:**
- ✅ **RTP mínimo obrigatório: 85%** — todo jogo deve pagar no mínimo 85% do valor apostado aos jogadores no longo prazo
- ✅ **RNG certificado** — o gerador de números aleatórios precisa ser auditado por laboratórios independentes credenciados pela SPA/MF
- ✅ **Exibição obrigatória do RTP** — a arte gráfica deve mostrar o RTP de cada jogo sem o jogador precisar iniciar a sessão
- ✅ **Tabela de pagamentos visível** — todas as combinações e prêmios disponíveis
- ✅ **Probabilidade do maior prêmio**: mínimo 1 em 100 milhões de jogadas
- ✅ **Jogos de quota fixa**: o multiplicador é definido no momento da aposta
- ⛔ **Proibido**: resultados artificiais para compensar saldo do jogador

### Quem domina o mercado

Os **3 maiores provedores** que abastecem as bets brasileiras:

| Provedor | Market Share no BR | RTP típico | Jogos famosos |
|----------|:------------------:|:----------:|---------------|
| **Pragmatic Play** | ~60% dos slots | 94% a 97,5% | Fortune Tiger, Gates of Olympus, Sweet Bonanza, Big Bass Bonanza |
| **PG Soft** | ~20% | 96% a 97,44% | Fortune Dragon, Legend of Hou Yi, Ninja vs Samurai |
| **NetEnt / Play'n GO** | ~10% | 96% a 99% | Mega Joker (99,07%), Book of Dead |

> Slots representam **mais de 93% da participação dos usuários** nas plataformas brasileiras (fonte: IBJR).

### Método predominante: PAR SHEET + REEL STRIPS + MULTI-RTP

**As bets brasileiras usam a combinação dos Métodos 1 + 2 + 8:**

```
MÉTODO USADO NO BRASIL = PAR Sheet + Reel Strips + Multi-RTP Config
                          (Método 1)   (Método 2)     (Método 8)
```

#### Como funciona na prática

```
1. PROVEDOR (ex: Pragmatic Play) desenvolve o jogo:
   ┌─────────────────────────────────────────────┐
   │ Define a matemática:                        │
   │  - Reel strips (peso de cada símbolo)       │
   │  - Pay table (multiplicadores)              │
   │  - RTP alvo (ex: 96,5%)                    │
   │  - Volatilidade (baixa/média/alta)          │
   │  - Simula milhões de rodadas (Monte Carlo)  │
   └─────────────────────────────────────────────┘
                      │
                      ▼
   2. LABORATÓRIO CERTIFICADO (ex: GLI, BMM, iTech Labs):
   ┌─────────────────────────────────────────────┐
   │ Audita e certifica:                         │
   │  - RNG é realmente aleatório                │
   │  - RTP declarado é alcançado                │
   │  - Código não tem manipulação               │
   └─────────────────────────────────────────────┘
                      │
                      ▼
   3. OPERADORA (ex: Betano, Bet365, PixBet):
   ┌─────────────────────────────────────────────┐
   │ Escolhe a configuração de RTP:              │
   │  - Versão A: RTP 94% (house edge 6%)        │
   │  - Versão B: RTP 96% (house edge 4%) ← mais │
   │  - Versão C: RTP 97% (house edge 3%)   comum│
   │  (o operador NÃO pode alterar o RNG)        │
   └─────────────────────────────────────────────┘
                      │
                      ▼
   4. JOGADOR APOSTA:
   ┌─────────────────────────────────────────────┐
   │ RNG → sorteia posição nos reel strips       │
   │ → determina símbolos visíveis               │
   │ → avalia paylines → paga ou não             │
   │ Lei dos Grandes Números: com milhões de     │
   │ giros, o RTP converge para o valor teórico  │
   └─────────────────────────────────────────────┘
```

### RTP dos jogos mais populares no Brasil (2026)

| Jogo | Provedor | RTP | Volatilidade |
|------|----------|:---:|:------------:|
| Fortune Tiger | PG Soft | 96,81% | Média |
| Gates of Olympus | Pragmatic Play | 96,50% | Alta |
| Sweet Bonanza | Pragmatic Play | 96,49% | Média-Alta |
| Big Bass Bonanza | Pragmatic Play | 96,71% | Média |
| Fortune Ox | PG Soft | 96,77% | Média |
| Spaceman | Pragmatic Play | 96,50% | Média |
| Aviator | Spribe | 97,00% | Alta |
| Sugar Rush 1000 | Pragmatic Play | 94,50% | Muito Alta |
| Mega Joker | NetEnt | 99,07% | Baixa |
| Book of Dead | Play'n GO | 96,21% | Alta |

**Média do mercado brasileiro: RTP ~95% → House Edge ~5%**

### O que as bets brasileiras NÃO usam (proibido ou impraticável)

| Método | Usa no BR? | Motivo |
|--------|:----------:|--------|
| **Balance Dynamic (DDA)** | ❌ | Proibido pela regulamentação — RNG precisa ser aleatório de verdade, sem ajuste por saldo |
| **Dynamic Balance Tracking** | ❌ | Patenteado + anti-regulatório — gerar resultados artificiais é ilegal no Brasil |
| **Resultados forçados** | ❌ | A Portaria SPA/MF exige que o resultado seja determinado por RNG, não por decisão do operador |
| **Near Miss programado** | ⚠️ | É permitido se fizer parte do modelo matemático (ex: virtual reel mapping), mas não pode ser um algoritmo separado que "decide" quase-acertar |

### Resumo para o projeto Cyber Neon Slots

```
O que as bets brasileiras usam de verdade:
  ┌──────────────────────────────────────────────┐
  │  PAR SHEET (RTP fixo certificado)            │
  │  + REEL STRIPS (pesos por símbolo/rolo)      │
  │  + MULTI-RTP CONFIG (várias versões)         │
  │  + RNG auditado por laboratório independente │
  │  + House Edge = 100% - RTP (típico: 3% a 6%)│
  └──────────────────────────────────────────────┘

House edge TÍPICO do mercado brasileiro: 3% a 6%
RTP mínimo LEGAL no Brasil: 85%
RTP PRATICADO (média provedores): 94% a 97,5%
```

> **Fonte**: Lei 14.790/2023, Portaria SPA/MF nº 1.207/2024, reportagens Folha de S.Paulo (jun/2026), Dados IBJR, portais técnicos de iGaming.

---

> **Nota**: Este documento foi gerado em 11/06/2026 como material de estudo e referência para o projeto Cyber Neon Slots. As implementações devem sempre respeitar as leis e regulamentações locais de jogos de azar.
