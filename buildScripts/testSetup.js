// This file isn't transpiled, so must use CommonJS and ES6

// Register Babel to transpile
require("babel-register")();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};