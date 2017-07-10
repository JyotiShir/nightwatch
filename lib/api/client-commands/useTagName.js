var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

/**
 * Sets the locate strategy for selectors to `tag name`, therefore every following selector needs to be specified as tag name.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *     .useTagName() // every selector now must be tag name
 *     .submit('form');
 * };
 * ```
 *
 * @method useTagName
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

function Command() {
  this.strategy = 'tag name';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;
