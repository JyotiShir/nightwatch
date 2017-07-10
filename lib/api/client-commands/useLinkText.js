var util = require('util');
var locateStrategy = require('./_locateStrategy.js');

/**
 * Sets the locate strategy for selectors to `link text`, therefore every following selector needs to be specified as link text.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *     .useLinkText() // every selector now must be link text
 *     .click('Go!');
 * };
 * ```
 *
 * @method useLinkText
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

function Command() {
  this.strategy = 'link text';
  locateStrategy.call(this);
}

util.inherits(Command, locateStrategy);

module.exports = Command;
