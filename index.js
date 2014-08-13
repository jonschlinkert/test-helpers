/*!
 * test-helpers <https://github.com/jonschlinkert/test-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
var util = require('util');
var file = require('fs-utils');
var Options = require('options-cache');
var _ = require('lodash');
var extend = _.extend;


/**
 * Initialize `helpers` with default `options`.
 *
 * ```js
 * var helpers = require('test-helpers')
 * helpers({dir: 'test'})
 * ```
 *
 * @method `helpers`
 * @param {Object} `options` Default options to use.
 * @api public
 */

function helpers (options) {
  extend(helpers, Options.prototype);
  var opts = extend({}, options);

  helpers.option('dir', opts.dir || 'test');
  helpers.option('fixtures', helpers.options.dir + '/fixtures');
  helpers.option('actual', helpers.options.dir + '/actual');
  helpers.config(opts);
  return helpers;
}


/**
 * Cache for storing commonly used options.
 *
 * @type {Object}
 */

helpers.options = helpers.options || {};


/**
 * Extend the options with the given `config`
 * object.
 *
 * ```js
 * helpers.config({a: 'b'})
 * helpers.option('a')
 * // => 'b'
 * ```
 *
 * @method config
 * @param {Object} `config` Object to use for options.
 * @return {helpers} to enable chaining.
 * @api public
 */

helpers.config = function(config) {
  extend(this.options, config);
  return this;
};


helpers.inspect = function(obj) {
  return util.inspect(obj, null, 10);
};


helpers.readFixture = function(name) {
  var dir = path.join(this.options.fixtures, name);
  return file.readFileSync(dir);
};

helpers.writeActual = function(name) {
  var dir = path.join(this.options.actual, name);
  return file.writeFileSync(dir);
};

helpers.writeActualJSON = function(name) {
  var dir = path.join(this.options.actual, name);
  return file.writeJSONSync(dir);
};


module.exports = helpers;