/**
 * Test case for ponWatcher.
 * Runs with mocha.
 */
'use strict'

const PonWatcher = require('../lib/pon_watcher.js')
const { ok } = require('assert')
const co = require('co')

describe('pon-watcher', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon watcher', () => co(function * () {
    let watcher = new PonWatcher({})
    let close = yield watcher.watch(__filename)
    close()
  }))
})

/* global describe, before, after, it */
