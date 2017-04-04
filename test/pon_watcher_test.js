/**
 * Test case for ponWatcher.
 * Runs with mocha.
 */
'use strict'

const PonWatcher = require('../lib/pon_watcher.js')
const { ok, equal } = require('assert')
const co = require('co')
const path = require('path')
const asleep = require('asleep')
const writeout = require('writeout')

describe('pon-watcher', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon watcher', () => co(function * () {
    let watcher = new PonWatcher({})
    let filename = `${__dirname}/../tmp/foo/bar.txt`
    yield writeout(`${__dirname}/../tmp/**/*.txt`, 'hoge', { mkdirp: true })
    let close = yield watcher.watch(filename, (e, changed) => {
      if (e === 'change') {
        equal(path.resolve(filename), path.resolve(changed))
      }
    })
    yield asleep(100)
    yield writeout(filename, 'hoge2', { mkdirp: true })
    yield asleep(100)
    yield writeout(filename, 'hoge3', { mkdirp: true })
    yield asleep(100)
    yield writeout(filename, 'hoge4', { mkdirp: true })
    yield asleep(300)
    close()
  }))
})

/* global describe, before, after, it */
