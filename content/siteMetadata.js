const siteMetadata = {
  title: 'F1 MEME TOKEN',
  author: 'AytonSenni',
  headerTitle: 'boxbox',
  description: 'BOX BOX BOX, Pit Confirm',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://f1meme.com',
  siteRepo: 'https://github.com/private',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'raikonon@proton.me',
  github: 'https://github.com/unknown',
  twitter: 'https://twitter.com/F1memeBoxbox',
  facebook: 'https://facebook.com/F1memeBoxbox',
  linkedin: 'https://www.linkedin.com/in/F1meme-Boxbox/',
  telegram: 'https://t.me/f1meme',
  steam: 'https://steamcommunity.com/id/F1memeBoxbox/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
