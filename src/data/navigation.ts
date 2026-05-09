// src/data/navigation.ts
const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // Removes trailing slash if present

export const headerData = {
  links: [
    { text: 'Acasă', href: `${base}/` },
    { text: 'Servicii', href: `${base}/servicii` },
    { text: 'Portofoliu', href: `${base}/portofoliu` },
    { text: 'Contact', href: `${base}/contact` },
  ],
};