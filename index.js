const { getOptions } =  require('loader-utils');
const validateOptions = require('schema-utils');
const MarkdownIt = require('markdown-it');
const VueLoader = require('vue-loader');
const md = new MarkdownIt();

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
