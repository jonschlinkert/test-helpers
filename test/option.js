/*!
 * test-helpers <https://github.com/jonschlinkert/test-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var helpers = require('..')();

describe('helpers option', function() {
  describe('.option()', function() {
    it('should get and set `options`.', function() {
      helpers();

      helpers.option('a', 'a');
      helpers.option('b', {b: 'b'});
      helpers.option('c', {c: 'c'});
      helpers.option('d', {d: 'd'});

      helpers.option('a').should.eql('a');
      helpers.option('b').should.eql({b: 'b'});
      helpers.option('c').should.eql({c: 'c'});
      helpers.option('d').should.eql({d: 'd'});

      helpers.options.should.eql({
        a: 'a',
        b: {b: 'b'},
        c: {c: 'c'},
        d: {d: 'd'},
        dir: 'test',
        fixtures: 'test/fixtures',
        actual: 'test/actual'
      });
    });

  });

  describe('helpers() function', function() {
    it('should change the test directory.', function() {
      helpers({dir: 'a'});
      helpers.option('dir').should.eql('a');
    });

    it('should change the fixtures directory.', function() {
      helpers({fixtures: 'b'});
      helpers.option('fixtures').should.eql('b');
    });

    it('should change the actual directory.', function() {
      helpers({actual: 'c'});
      helpers.option('actual').should.eql('c');
    });
  });

  describe('helpers.option()', function() {
    it('should set the test directory.', function() {
      helpers.option('dir', 'aaa');
      helpers.option('dir').should.eql('aaa');
    });

    it('should set the fixtures directory.', function() {
      helpers.option('fixtures', 'bbb');
      helpers.option('fixtures').should.eql('bbb');
    });

    it('should set the actual directory.', function() {
      helpers.option('actual', 'ccc');
      helpers.option('actual').should.eql('ccc');
    });
  });
});
