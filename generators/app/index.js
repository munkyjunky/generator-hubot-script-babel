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

		this.template('**/*', '', data);
		this.copy('.gitignore', '');
		this.copy('.npmignore', '');
		this.copy('.travis.yml', '');
	},

	install: function() {
		this.installDependencies({
			bower: false
		});
	}
});
