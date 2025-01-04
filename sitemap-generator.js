const Sitemap = require('react-router-sitemap').default;
const router = require('./src/Router'); // Import your app's router file

new Sitemap(router) // Use the router from your app
  .build('https://flavomap.netlify.app') // Base URL of your app
  .save('./public/sitemap.xml'); // Save the generated sitemap in the public folder
