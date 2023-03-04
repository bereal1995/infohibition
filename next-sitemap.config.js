/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://infohibition.bereal95.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${
        process.env.SITE_URL || 'https://infohibition.bereal95.com'
      }/server-sitemap-index.xml`,
    ],
  },
};
