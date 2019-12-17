const { getOptions } =  require('loader-utils');
const validateOptions = require('schema-utils');
const MarkdownIt = require('markdown-it');
const Hljs = require('highlight.js');
const slugify = require('transliteration').slugify;

const schema = {
  type: 'object',
  properties: {
    html: {
      type: "boolean"
    }
  }
};

function mdOption (options = {}) {
  return new MarkdownIt({
    html: options.html,
    highlight: function (str, lang) {
      if (lang && Hljs.getLanguage(lang)) {
        try {
          return Hljs.highlight(lang, str, true).value;
        } catch (e) {}
      }
      return str;
    }
  }).use(require('markdown-it-anchor'), {
    slugify: slugify,
    permalink: options.permalink
  });
}

/**
 * @param source
 * @returns {string}
 */
module.exports = function (source) {
  const options = getOptions(this);

  validateOptions(schema, options);

  const md = mdOption(options);

  const output = md.render(source);

  return `
    <template>
      <section class="markdown-body">
        ${output}
      </section>
    </template>
  `;
};
