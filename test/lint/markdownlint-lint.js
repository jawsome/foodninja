'use strict'

const markdown = require('markdownlint')

module.exports = {
  lint: function (files, callback) {
    // files is an array of absolute-path filenames
    markdown({ files: files }, function (err, res) {
      var result = err || ((res || '').toString())
      callback(result)
    })
  }
}
