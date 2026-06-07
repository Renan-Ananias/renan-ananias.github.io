/**
 * ContactSection.js — Formulário de contato + socials
 */
import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from '../components/Icons.js';
import { useLanguage } from '../contexts/LanguageContext.js';

export function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const subject = encodeURIComponent(formData.subject || 'Project inquiry');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:ananias.renan@gmail.com?subject=${subject}&body=${body}`;
      setStatus('opening');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: t.contact.socials.email, href: 'mailto:ananias.renan@gmail.com', color: 'text-[#00ff88]' },
    { icon: Linkedin, label: t.contact.socials.linkedin, href: '#', color: 'text-[#00d9ff]' },
    { icon: Github, label: t.contact.socials.github, href: 'https://github.com/Renan-Ananias', color: 'text-[#00ff88]' },
    { icon: Twitter, label: t.contact.socials.twitter, href: '#', color: 'text-[#00d9ff]' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative z-20 pt-24 pb-16 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-glow-pulse">
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-[#0a0e27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>

              {status === 'opening' && (
                <p className="text-[#00ff88] text-sm text-center">{t.contact.openingClient}</p>
              )}
              {status === 'error' && (
                <p className="text-[#ff4444] text-sm text-center">{t.contact.failed}</p>
              )}
            </form>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold section-title-base section-title-wave mb-6">{t.contact.connectWithMe}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg hover:border-[#00ff88]/60 hover:bg-[#1a1f3a]/80 transition-all group"
                      >
                        <Icon className={`w-6 h-6 ${social.color} group-hover:scale-125 transition-transform`} />
                        <span className="text-gray-300 group-hover:text-[#00ff88] transition-colors">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold section-title-base section-title-wave mb-4">{t.contact.responseTime}</h3>
                <p className="text-gray-300 mb-4">
                  {t.contact.responseTimeDesc}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
                  <span className="text-[#00ff88]">{t.contact.available}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
