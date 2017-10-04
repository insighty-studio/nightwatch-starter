module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://github.com/alexpanov')
      .waitForElementVisible('nav.underline-nav', 1000)
      .clickLinkContainingText('Repositories')
      .waitForElementPresent('#user-repositories-list', 1000)
      .assert.containsText('#user-repositories-list', 'nightwatch-starter')
      .end();
  }
};
