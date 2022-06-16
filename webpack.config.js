const { resolve } = require("path");

module.exports = {
  entry: ["babel-polyfill", "./client/app"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./client"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};








// module.exports = {
//     entry: ["babel-polyfill", "./client/app.js"],
//     output: {
//         //path: path.join(__dirname, 'public'),
//         path: __dirname,
//         filename: './public/bundle.js'
//     },
//     module: {
//         rules: [
//            {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//            }, 
//            {
//             test: /\.css$/,
//             use: [
//                  'style-loader',
//                  'css-loader'
//             ]
//           }
//         ]
//     },
//     mode: "development",
//     devtool: 'source-map',
//     resolve: {
//       extensions: [".js", ".jsx"],
//     },
  








//   devServer: {
  //     static: {
  //       directory: path.join(__dirname, 'public')
  //     },
  //     compress: true,
  //     port: 3000,  
  //  }  
//}