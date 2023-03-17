const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://jenson.neuraltalks.io';
const devUrl = 'http://localhost:8081';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

module.exports = {
  siteName: 'jenson.neuraltalks.io',
  author: 'Son Nguyen',
  environment,
  isProd,
  base: {
    site: baseUrl,
  },
  tracking: {
    gtag: 'G-EBPFJRPY24',
  },
};
