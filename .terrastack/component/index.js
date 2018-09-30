const path = require("path");
/**
  @typedef PropertiesHash
  @type {object}
  @description Sweet
 */

class Component {
  /**
   * @param  {} id
   * @param  {...PropertiesHash} variables
   */
  constructor(id, variables) {
    this.id = id;
    this.variables = variables;
    this.dependencies = [];
    this.sourceDir = path.join(__dirname, "../..");
  }

  dependsOn(component) {
    this.dependencies.push(component);
  }
}

module.exports = Component;
