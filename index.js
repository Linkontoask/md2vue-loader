const { getOptions } =  require('loader-utils');
const validateOptions = require('schema-utils');
const MarkdownIt = require('markdown-it');
const slugify = require('transliteration').slugify;
const md = new MarkdownIt({
  html: true,
}).use(require('markdown-it-anchor'), {
  slugify: slugify,
  permalink: true
});

const schema = {
  type: 'object',
  properties: {
    rule: {

    }
  }
};

/**
 *
 * @param source
 */
module.exports = function (source) {
  const options = getOptions(this);

  // validateOptions(schema, options, 'Example Loader');

  const output = md.render(source);

  return `
    <template>
      <section class="markdown-body">
        ${output}
      </section>
    </template>
  `;
};
