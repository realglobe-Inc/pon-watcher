/**
 * Watcher for pon
 * @class PonWatcher
 */
'use strict'

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
  async watch (filename, handler, options = {}) {
    const {cwd = process.cwd()} = options
    const close = await awatch(filename, handler, {cwd})
    return close
  }
}

module.exports = PonWatcher
