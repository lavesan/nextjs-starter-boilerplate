const withImages        = require('next-images');
const withFonts         = require('next-fonts');
const withPlugins       = require("next-compose-plugins");
const withCSS           = require('@zeit/next-css');
// const withTypescript    = require('@zeit/next-typescript');
const withPWA           = require('next-pwa');

module.exports = withPlugins(
  [
    withCSS,
    withFonts,
    withImages,
    // withTypescript,
    [withPWA, {
      pwa: {
        dest: 'public',
      }
    }]
  ],
  {
    distDir: "./.next",
  },
);
