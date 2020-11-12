const { dockStart } = require('@nlpjs/basic');
const { listFilesAbsolute } = require('@nlpjs/core-loader');

(async () => {
  const dock = await dockStart();
  const bot = dock.get('bot');
  const files = listFilesAbsolute('./actions');
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    if (file.endsWith('.js')) {
      const loaded = require(file);
      if (typeof loaded === 'function') {
        bot.registerAction('uppers', loaded);
      } else {
        const keys = Object.keys(loaded);
        for (let i = 0; i < keys.length; i += 1) {
          bot.registerAction(keys[i], loaded[keys[i]]);
        }
      }
    }
  }
})();