'use strict'

const markdown = require('markdownlint')

module.exports = {
  lint: function (files, callback) {
    // files is an array of absolute-path filenames
    markdown({ files: files }, callback)
  }
}
