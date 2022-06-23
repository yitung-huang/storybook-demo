const path = require("path");
const moduleAlias = require("module-alias");

const alias = {
  "@storybookDemo": path.resolve(__dirname, "./src")
};

Object.entries(alias).forEach(([aliasName, aliasPath]) => {
  moduleAlias.addAlias(aliasName, aliasPath);
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localIdentName: "[local]-[hash:base64:3]",
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias,
    extensions: [".js", ".jsx", ".scss"]
  }
};

console.log(module.exports);
