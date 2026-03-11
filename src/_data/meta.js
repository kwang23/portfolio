export const url = process.env.URL || 'http://localhost:8080';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Kevin Wang';
export const siteDescription = 'Kevin Wang';
export const siteType = 'Person'; // schema
export const locale = 'en_US';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Kevin Wang', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'kevin-wang@uiowa.edu', // i.e. hola@lenesaile.com - email of the author
  website: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  fediverse: '' // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
};
export const creator = {
  name: 'Kevin Wang', // i.e. Lene Saile - creator's (developer) name.
  email: 'kevin-wang@uiowa.edu',
  website: '',
  social: ''
};
export const pathToSvgLogo = 'src/assets/svg/misc/pi.svg'; // used for favicon generation
export const themeColor = '#dd4462'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = ''; // fallback/default meta image
export const opengraph_default_alt =
  ""; // alt text for default meta image"
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: [],
    globalIgnore: []
  }
};
export const easteregg = true;
