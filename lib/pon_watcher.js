/**
 * Watcher for pon
 * @class PonWatcher
 */
'use strict'

const co = require('co')
const awatch = require('awatch')

/** @lends PonWatcher */
class PonWatcher {

  /**
   * Watch file
   * @param {string} filename - Filename (or glob pattern to watch)
   * @param {function} handler - File watch handler
   * @returns {Promise.<function>} Close function
   */
  watch (filename, handler) {
    return co(function * () {
      let close = yield awatch(filename, handler)
      return close
    })
  }
}

module.exports = PonWatcher
