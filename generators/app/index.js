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
			'name': 'license',
			message: 'licence',
			'default': 'MIT'
		}];

		this.prompt(prompts, function(props) {
			this.props = props;
			done();
		}.bind(this));
	},

	writing: function() {

		var data = assign({}, this.props, {
			author_name: user.git.name(),
			author_email: user.git.email(),
			author_username: user.github.username(),
			repository: 'https://github.com/' + user.github.username() + '/' + this.props.name
		});

		this.template('package.json', 'package.json', data);

		this.copy('.gitignore', '.gitignore');
		this.copy('.npmignore', '.npmignore');
		this.copy('.travis.yml', '.travis.yml');
		this.copy('webpack.config.js', 'webpack.config.js');

		this.copy('src/index.js', 'src/index.js');
		this.copy('test/index.js', 'test/index.js');

		if (this.props.license === 'MIT') {
			this.copy('license/MIT.txt', 'LICENSE');
		}
	},

	install: function() {
		this.installDependencies({
			bower: false
		});
	}
});
