'use strict';
var yeoman = require('yeoman-generator');
var assign = require('object-assign');
var user = require('yeoman-generator/lib/actions/user');

module.exports = yeoman.generators.Base.extend({
	prompting: function() {
		var done = this.async();

		var prompts = [{
			type: 'text',
			name: 'name',
			message: 'name',
			'default': 'hubot-script'
		}, {
			type: 'text',
			name: 'description',
			message: 'description'
		}, {
			type: 'text',
			name: 'license',
			message: 'licence',
			'default': 'MIT'
		}];

		this.prompt(prompts, function(props) {
			this.props = props;
			done();
		}.bind(this));
	},

	writing: function() {

		var done = this.async();
		var self = this;

		var getUsername = function() {
			return new Promise(function(resolve) {
				if (self.options.githubUsername) {
					resolve(self.options.githubUsername);
				} else {
					user.github.username(function(err, username) {
						resolve(username);
					});
				}
			});
		};

		getUsername()
			.then(function(username) {

				var data = assign({}, self.props, {
					authorName: user.git.name(),
					authorEmail: user.git.email(),
					authorUsername: username,
					repository: 'https://github.com/' + username + '/' + self.props.name
				});

				self.template('package.json', 'package.json', data);
				self.template('README.md', 'README.md', data);

				self.copy('.gitignore', '.gitignore');
				self.copy('.npmignore', '.npmignore');
				self.copy('.travis.yml', '.travis.yml');
				self.copy('.eslintrc', '.eslintrc');
				self.copy('webpack.config.js', 'webpack.config.js');

				self.copy('src/index.js', 'src/index.js');
				self.copy('test/index.js', 'test/index.js');

				try {
					// Try copy the file if it exists, else catch the error silently
					self.copy('license/' + self.props.license + '.txt', 'LICENSE');
				} catch (e) {
					console.log('NO licence file found for', self.props.license, 'license!');
				}

				done();

			});

	},

	install: function() {
		this.installDependencies({
			bower: false
		});
	}
});
