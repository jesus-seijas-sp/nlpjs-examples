const uppers = (session, context, params) => {
  if (params) {
    const variableName = typeof params === 'string' ? params : params[0];
    if (variableName) {
      context[variableName] = (context[variableName] || '').toUpperCase();
    }
  }
};

module.exports = {
  uppers,
}