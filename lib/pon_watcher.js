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
   * @param {Object} [options={}] - Optional settings
   * @param {string} [options.cwd=process.cwd()] - Current working directory
   * @returns {Promise.<function>} Close function
   */
  watch (filename, handler, options = {}) {
    let { cwd = process.cwd() } = options
    return co(function * () {
      let close = yield awatch(filename, handler, { cwd })
      return close
    })
  }
}

module.exports = PonWatcher
