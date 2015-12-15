# generator-hubot-script-babel [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A generator for hubot scripts using babel, es2015, and mocha

## Installation

First, install [Yeoman](http://yeoman.io) and generator-hubot-script-babel using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-hubot-script-babel
```

Then generate your new project:

```bash
yo hubot-script-babel
```

## Usage
This is a generator for hubot scripts which are written in ES6 JavaScript, and packaged using webpack. It also provides a basic testing setup for your script, using the mocha, chai, and hubot mock adapter. 

```bash
npm test # run tests
npm publish # publish your script, which will automatically run webpack
npm run build # run webpack to test your code locally
```

When using `npm publish` the included npm prepublish script and .npmignore will webpack your ES6 JavaScript, and exclude any build files from the published package.

## Roadmap
- Stub a unit test for testing HTTP requests to hubot (such as webhooks)
- Add code coverage reporting for tests
- Add README


## License

MIT © [Simon Wears](https://github.com/munkyjunky)


[npm-image]: https://badge.fury.io/js/generator-hubot-script-babel.svg
[npm-url]: https://npmjs.org/package/generator-hubot-script-babel
[travis-image]: https://travis-ci.org/munkyjunky/generator-hubot-script-babel.svg?branch=master
[travis-url]: https://travis-ci.org/munkyjunky/generator-hubot-script-babel
[daviddm-image]: https://david-dm.org/munkyjunky/generator-hubot-script-babel.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/munkyjunky/generator-hubot-script-babel
