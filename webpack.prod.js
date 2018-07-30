const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

process.env.BABEL_ENV = "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "drizzle-react-components-plus.js",
    library: "drizzle-react-components-plus",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        options: {
          presets: ["react"],
          plugins: [
            require("babel-plugin-transform-class-properties"),
            require("babel-plugin-transform-object-rest-spread")
          ]
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  externals: ["drizzle", "drizzle-react", "prop-types", "react", "redux"]
};
