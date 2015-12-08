'use strict';
var yeoman = require('yeoman-generator');

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
		}];

		this.prompt(prompts, function(props) {
			this.props = props;
			done();
		}.bind(this));
	},

	writing: function() {
		this.template('**/*', '', this.props);
		this.copy('.gitignore', '');
		this.copy('.travis.yml', '');
	},

	install: function() {
		this.installDependencies({
			bower: false
		});
	}
});
