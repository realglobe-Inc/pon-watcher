'use strict'

const ponWatcher = require('pon-watcher')

async function tryExample () {
  let watcher = ponWatcher({})

  let close = await watcher.watch('src/**/*.jsx', (event, filename) => {
    /* ... */
  })
  process.on('beforeExit', () => {
    close()
  })
}

tryExample().catch((err) => console.error(err))