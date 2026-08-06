// src/data/navigation.ts
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const headerData = {
  links: [
    { text: '🏠 Acasă', href: `${base}/` },
    { text: '🛠️ Servicii', href: `${base}/servicii/` },
    { text: '☀️ Fotovoltaice', href: `${base}/servicii/panouri-fotovoltaice/` },
    { text: '📂 Portofoliu', href: `${base}/portofoliu/` },
    { text: '📚 Ghid Practic', href: `${base}/articole/` },
    { text: '❓ FAQ', href: `${base}/intrebari-frecvente/` },
    { text: '💰 Prețuri', href: `${base}/preturi/` },
    { text: '📞 Contact', href: `${base}/contact/` },
  ],
};
