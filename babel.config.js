module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            utils: './src/utils',
            styles: './src/styles',
            assets: './src/assets',
            routes: './src/routes',
            screens: './src/screens',
            components: './src/components',
          },
        },
      ],
    ],
  };
};
