'use strict'

const markdown = require('standard-markdown')

module.exports = {
  lint: function (files, callback) {
    // files is an array of filenames
    markdown.lintFiles(files, callback)
  }
}
