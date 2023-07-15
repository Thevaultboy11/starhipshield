import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';


export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink(),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ type: 'primary', text: 'Free Penetration Test', href: '/book-a-meeting' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `    
    Starship Shield · All rights reserved.
  `,
};