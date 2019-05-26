// Webpack output config

const path = require('path');

module.exports = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // Enable gzip compression for everything served
    port: 10000,
};
