"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
// Const pkg = require("./package.json");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the astounding ${chalk.red(
          "generator-taobao-component"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your component name?",
        default: path.basename(process.cwd()),
        require: true
      },
      {
        type: "input",
        name: "author",
        message: "Your component author?",
        validate: value => (value ? true : `author is required`)
      },
      {
        type: "input",
        name: "description",
        message: "Your component description?",
        default: "a custom component for taobao miniprogram"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const destDir =
      path.basename(process.cwd()) === this.props.name ? "" : this.props.name;
    this.fs.copyTpl(this.templatePath(), this.destinationPath(destDir));
    this.fs.extendJSON(this.destinationPath(destDir, "package.json"), {
      name: this.props.name,
      author: this.props.author,
      description: this.props.description
    });
  }

  install() {
    this.npmInstall(["father"], { "save-dev": true });
  }
};
