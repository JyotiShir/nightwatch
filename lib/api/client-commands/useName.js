var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

/**
 * Sets the locate strategy for selectors to `name`, therefore every following selector needs to be specified as name.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *     .useName() // every selector now must be name
 *     .setValue('text', 'nightwatch');
 * };
 * ```
 *
 * @method useName
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

function Command() {
  this.strategy = 'name';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;
