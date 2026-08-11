module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://alfamotors.pl', 'https://www.alfamotors.pl'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
