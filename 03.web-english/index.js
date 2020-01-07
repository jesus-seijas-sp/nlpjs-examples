const { containerBootstrap } = require('@nlpjs/core');
const { Nlp } = require('@nlpjs/nlp');
const { LangEn } = require('@nlpjs/lang-en');
const { fs } = require('@nlpjs/request-rn');

const conf = {
  settings: {
    nlp: {
      languages: ['en'],
      trainByDomain: false,
      threshold: 0.5,
      corpora: [
        'https://raw.githubusercontent.com/axa-group/nlp.js/master/examples/06-huge-ner/corpus.json'
      ]
    },
    ner: {
      threshold: 1
    }
  }
}

async function main() {
  const container = await containerBootstrap(conf);
  container.register('fs', fs);
  container.use(Nlp);
  container.use(LangEn);
  const nlp = container.get('nlp');
  await nlp.start();
  await nlp.loadOrTrain();
  const result = await nlp.process('who are you');
  console.log(result);
}

main();