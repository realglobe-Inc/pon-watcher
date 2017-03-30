/**
 * File watcher for pon
 * @module pon-watcher
 */

'use strict'

const create = require('./create')
const PonWatcher = require('./pon_watcher')

let lib = create.bind(this)

Object.assign(lib, PonWatcher, {
  create,
  PonWatcher
})

module.exports = lib
