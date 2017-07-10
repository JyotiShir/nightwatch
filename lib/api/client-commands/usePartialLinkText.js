var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

/**
 * Sets the locate strategy for selectors to `partial link text`, therefore every following selector needs to be specified as partial link text.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *     .usePartialLinkText() // every selector now must be partial link text
 *     .click('link');
 * };
 * ```
 *
 * @method usePartialLinkText
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

function Command() {
  this.strategy = 'partial link text';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;
