/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

module.exports = {
  ...nextTranslate(),
  devIndicators: {
    buildActivity: false,
  },
};
// module.exports = nextConfig;
