'use strict'

const PonWatcher = require('./pon_watcher')

/**
 * Create a PonWatcher instance
 * @function create
 * @param {...*} args
 * @returns {PonWatcher}
 */
function create (...args) {
  return new PonWatcher(...args)
}

module.exports = create
