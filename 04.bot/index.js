const { dockStart } = require('@nlpjs/basic');

(async () => {
  const dock = await dockStart();
  const bot = dock.get('bot');
  bot.registerAction('uppers', (session, context, params) => {
    const variableName = params && params[0] ? params[0] : undefined;
    if (variableName) {
      context[variableName] = (context[variableName] || '').toUpperCase();
    }
  });
})();