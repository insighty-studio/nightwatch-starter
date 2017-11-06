# nightwatch-starter

## About this starter
This starter installs Chromedriver from package.json thus requiring minimal initial setup.

It also comes with an example Nightwatch [command](http://nightwatchjs.org/guide#writing-custom-commands) which can be found [here](tests/commands/clickLinkContainingText.js) to server as an example of code re-use between different fixtures.

## About browser tests
Browser tests are used to make sure that the app works from a very holistic perspective.
It verifies that basic use cases are functional without verifying the underpins of the system.

They are normally run at the very end of the build pipeline when the lower level unit tests have passed.

[`Nightwatch`](http://nightwatchjs.org/gettingstarted) browser tests will use a real browser to execute black box-style assertions.


## Installation
Just run `yarn`.

## Running
Then run `yarn integration-test`.

## Developing
### Writing tests
Tests/fixtures are located in the [`tests/`](tests) folder. Happy coding!

### Changing config
Most of the configuration lives in `nightwatch.conf.js`.
This is the place to define paths, globals like timeouts and such.

## Common pitfalls

### Upgrading
Upgrading usually means bumping `nightwatch`, `selenium-server-standalone-jar`
or `chromedriver`'s version number.

When upgrading `selenium-server-standalone-jar` the new path
to the `.jar` file should be specified in `nightwatch.conf.js`.
Please refer to [this commit](https://github.com/Temagami/Arrowhead/commit/cbb9bce0106240bc33dc1cf2a424c7a832777440) for a how-to example.
Note that the version is specified exactly.
This is done to not break the config when new minor versions are released.

## Credits
Made with :heart: by [Quantum Mob](https://qmo.io)
