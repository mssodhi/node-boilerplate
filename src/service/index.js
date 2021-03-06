const path = require('path');

require('fs')
  .readdirSync(__dirname)
  .forEach(file => {
    /* If its the current file ignore it */
    if (file === 'index.js') return;

    /* Store module with its name (from filename) */
    module.exports[path.basename(file).split('.')[0]] = require(path.join(
      __dirname,
      file
    ));
  });
