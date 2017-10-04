exports.command = function (text) {
  const client = this;
  client
    .useXpath()
    .click(`//*[contains(text(), '${text}')]`)
    .useCss();
  return this;
};
