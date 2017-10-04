module.exports = {
  'Github Repositories Navigation' : function (browser) {
    browser
      .url('https://github.com/alexpanov')
      .waitForElementVisible('nav.underline-nav', 1000)
      .clickLinkContainingText('Repositories')
      .waitForElementPresent('#user-repositories-list', 1000)
      .assert.containsText('#user-repositories-list', 'nightwatch-starter')
      .end();
  }
};
