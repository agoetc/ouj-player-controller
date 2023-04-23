module.exports = {
  mode: "production",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./main.js",
  output: {
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
