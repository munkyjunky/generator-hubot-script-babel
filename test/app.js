'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-hubot-script-babel:app', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../generators/app'))
			.withPrompts({
				name: 'script-test',
				description: 'script description',
				license: 'MIT'
			})
			.withOptions({
				githubUsername: 'test-github-user'
			})
			.on('end', done);
	});

	it('creates files', function() {
		assert.file([
			'package.json',
			'webpack.config.js',
			'test/index.js',
			'src/index.js',
			'.gitignore',
			'.npmignore',
			'.travis.yml',
			'.eslintrc',
			'LICENSE'
		]);
	});
});
