// Shu faylni to'ldiring — sahifadagi barcha shaxsiy ma'lumotlar shu yerdan keladi.
export const config = {
  // Ismingiz (yoki brend nomingiz). "Nega aynan men" bo'limida ko'rinadi.
  NAME: '{NAME}',

  // Tajriba ko'rsatkichi, masalan: "5 yildan beri" yoki "30+ loyiha".
  YEARS_OR_PROJECTS: '{YEARS_OR_PROJECTS}',

  // Bog'lanish uchun telefon raqami, masalan: +998 90 123 45 67
  PHONE: '{PHONE}',

  // Telegram orqali yozish havolasi, masalan: https://t.me/username
  TELEGRAM_URL: 'TELEGRAM_URL',

  // Jonli demo salon havolasi
  DEMO_URL: 'DEMO_URL',

  // Portfolio bo'limidagi ishlar. Har biriga nom, bitta qisqa tavsif va skrinshot yo'lini kiriting.
  // Skrinshotni public/portfolio/ papkasiga qo'yib, shu yerga "/portfolio/fayl-nomi.jpg" deb yozing.
  PORTFOLIO_ITEMS: [
    {
      name: '{PORTFOLIO_ITEM_1_NAME}',
      description: '{PORTFOLIO_ITEM_1_DESCRIPTION}',
      image: null,
    },
    {
      name: '{PORTFOLIO_ITEM_2_NAME}',
      description: '{PORTFOLIO_ITEM_2_DESCRIPTION}',
      image: null,
    },
    {
      name: '{PORTFOLIO_ITEM_3_NAME}',
      description: '{PORTFOLIO_ITEM_3_DESCRIPTION}',
      image: null,
    },
  ],
}
