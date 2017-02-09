const parseString = require('xml2js').parseString;

module.exports = function svgPathLoader(source) {
  // Let webpack know this is file cacheable
  if (this.cacheable) {
    this.cacheable();
  }

  const callback = this.async();

  // Parse the XML / SVG file
  parseString(source, (err, result) => {
    if (err) {
      return callback(err);
    }

    // Get the first path
    const path = result.svg.path[0].$.d;

    // Export as JS
    return callback(null, `module.exports = '${path}';`);
  });
};
