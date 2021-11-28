const htmlmin = require('html-minifier');
const katex = require('katex');
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {
  config.setUseGitIgnore(false);

  var md = require('markdown-it');
  var implicitFigures = require('markdown-it-implicit-figures');
  config.setLibrary("md", md({ html: true, breaks: true }).use(implicitFigures));

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  // Render katex math
  config.addFilter('latex', content => {
    return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')

      return katex.renderToString(cleanEquation, { throwOnError: false })
    })
  })

  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/resources/');
  config.addPassthroughCopy({
    'src/_includes/assets/css/global.css': './global.css'
  });

  // config.addWatchTarget('./src/scss/*.css');

  // Minify html
  config.addTransform('htmlmin', (content, outputPath) => {
    if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }
    return content
  });

  // Returns a collection of life posts in reverse order
  config.addCollection('lifePosts', collection => {
    return [...collection.getFilteredByGlob('./src/life/*.md')].reverse();
  });

  // Returns a collection of machine learning posts in reverse order
  config.addCollection('mlPosts', collection => {
    return [...collection.getFilteredByGlob('./src/machine-learning/*.md')].reverse();
  });

  // Returns a collection of software engineering posts in reverse order
  config.addCollection('swePosts', collection => {
    return [...collection.getFilteredByGlob('./src/software-engineering/*.md')].reverse();
  });

  config.addCollection('featuredPosts', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/**/*.md')).filter(
      x => x.data.featured
    );
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
