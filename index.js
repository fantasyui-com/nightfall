const fs = require('fs');
const core = require('gogh');

const options = {
  database: __dirname + '/style.json'
}

module.exports = {
  metadata: JSON.parse(fs.readFileSync(__dirname+'/package.json').toString()),
  render: core.render,
  css: (pattern)=>core.css(pattern, options),
  raw: (pattern)=>core.css(pattern, options),
};
