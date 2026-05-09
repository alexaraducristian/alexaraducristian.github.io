// src/data/navigation.ts
const base = import.meta.env.BASE_URL;

// Funcție pentru a evita dublarea slash-urilor (//)
const cleanPath = (path: string) => {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${b}${path}`;
};

export const headerData = {
  links: [
    { text: '🏠 Acasă', href: cleanPath('/') },
    { text: '☀️ Energie Verde', href: cleanPath('/energie-verde') },
    { text: '📄 Prezentare', href: cleanPath('/prezentare') },
    { text: '📂 Portofoliu', href: cleanPath('/portofoliu') },
    { text: '📞 Contact', href: cleanPath('/contact') },
  ],
};