var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

/**
 * Sets the locate strategy for selectors to `id`, therefore every following selector needs to be specified as id.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *     .useId() // every selector now must be id
 *     .setValue('password', 'nightwatch');
 * };
 * ```
 *
 * @method useId
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

function Command() {
  this.strategy = 'id';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;
