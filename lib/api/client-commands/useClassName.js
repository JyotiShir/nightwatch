var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

/**
 * Sets the locate strategy for selectors to `class name`, therefore every following selector needs to be specified as class name.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *     .useClassName() // every selector now must be class name
 *     .verify.elementPresent('wrapper');
 * };
 * ```
 *
 * @method useClassName
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

function Command() {
  this.strategy = 'class name';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;
