'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'text',
      name: 'name',
      message: 'name',
      default: 'hubot-script'
    },{
      type: 'text',
      name: 'description',
      message: 'description'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    //this.fs.copy(
    //  this.templatePath('**/*'),
    //  this.destinationPath()
    //);

    this.template('**/*', '', this.props);

  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
