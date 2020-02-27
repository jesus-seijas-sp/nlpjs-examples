const { dockStart } = require('@nlpjs/basic');

(async () => {
  const dock = await dockStart({ use: ['Basic', 'Qna'] });
  const nlp = dock.get('nlp');
  await nlp.addCorpus({ filename: './qna.tsv', importer: 'qna', locale: 'en' });
  await nlp.train();
  const response = await nlp.process('en', 'Who are you');
  console.log(response);
})();
