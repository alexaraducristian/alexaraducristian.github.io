// src/data/navigation.ts
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const headerData = {
  links: [
    { text: '🏠 Acasă', href: `${base}/` },
    { text: '☀️ Energie Verde', href: `${base}/energie-verde` },
    { text: '📄 Prezentare', href: `${base}/prezentare` },
    { text: '📂 Portofoliu', href: `${base}/portofoliu` },
    { text: '📚 Ghid Practic', href: `${base}/articole` },
    { text: '❓ FAQ', href: `${base}/intrebari-frecvente` },
    { text: '📞 Contact', href: `${base}/contact` },
  ],
};