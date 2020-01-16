const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
const langenmin = require('@nlpjs/lang-en-min');

window.nlpjs = { ...core, ...nlp, ...langenmin };