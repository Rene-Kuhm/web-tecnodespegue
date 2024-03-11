import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: getPermalink('/'),
    },

    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        { text: 'Templates', href: getPermalink('/services/web-development') },
        { text: 'Components Tailwindcss', href: getPermalink('/services/seo') },
        { text: 'Components Astro', href: getPermalink('/services/e-commerce') },
        { text: 'Components Nextjs', href: getPermalink('/services/web-design') },
        { text: 'Web Hosting', href: getPermalink('/services/web-hosting') },
      ],
      
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { /*text: 'Features', href: '#'*/ },
        {/* text: 'Security', href: '#' */},
        { text: 'Team', href: '#' },
        {/* text: 'Enterprise', href: '#' */},
        {/* text: 'Customer stories', href: '#' */},
        { text: 'Pricing', href: '#' },
        {/* text: 'Resources', href: '#' */},
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Nextjs', href: '#' },
        { text: 'Astro', href: '#' },
        { text: 'Vscode', href: '#' },
        { text: 'JavaScript', href: '#' },
        { text: 'React', href: '#' },
        { text: 'Tailwindcss', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/REPARO22' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/designrdcastex/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/kuhm.rene/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Rene-Kuhm' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200">René kuhm</a> · All rights reserved.
  `,
};
