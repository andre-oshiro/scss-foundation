const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, '_replace.scss');
sassTrue.runSass({ file: sassFile }, describe, it);
