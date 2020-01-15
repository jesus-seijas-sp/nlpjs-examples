const { dockStart } = require('@nlpjs/basic');

(async () => {
  const dock = await dockStart();
  const nlp = dock.get('nlp');
  const response = await nlp.process('en', 'Who are you');
  console.log(response);
})();
