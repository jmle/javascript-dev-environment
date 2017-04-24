import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',   // use sourcemaps
  noInfo: false,    // display all files being bundled
  entry: [          // entry point
    path.resolve(__dirname, 'src/index')    // define entry point using node's __dirname
  ],
  target: 'web',    // could be node or electron or something else
  output: {         // where to create the dev bundle
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'   // name of our bundle
  },
  plugins: [],
  module: {
    loaders: [      // how to handle different type of files
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
