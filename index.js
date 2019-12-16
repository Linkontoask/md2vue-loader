const { getOptions } =  require('loader-utils');
const validateOptions = require('schema-utils');
const MarkdownIt = require('markdown-it');
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

  console.log(md.render(source));

  return `export default ${ JSON.stringify(source) }`;
};
