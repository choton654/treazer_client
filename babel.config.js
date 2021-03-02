module.exports = function (api) {
  api.cache(true);

  const presets = ["babel-preset-expo"];
  const plugins = ["@babel/plugin-transform-react-jsx"];
  return {
    presets,
    plugins,
  };
};
