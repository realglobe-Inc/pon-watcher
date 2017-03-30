/**
 * Create a PonWatcher instance
 * @function create
 * @param {...*} args
 * @returns {PonWatcher}
 */
'use strict'

const PonWatcher = require('./pon_watcher')

/** @lends create */
function create (...args) {
  return new PonWatcher(...args)
}

module.exports = create
