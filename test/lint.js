'use strict'

const tap = require('tap')
const fs = require('fs')
const path = require('path')

const lint = [
  {
    name: 'standard-markdown',
    entry: require('./lint/standard-markdown-lint').lint
  },
  {
    name: 'markdownlint',
    entry: require('./lint/markdownlint-lint').lint
  }
]

const mdpattern = /\/[a-z-.]+\.md$/

fs.readdir(path.join(__dirname, '/../examples/'), function (er, dirlist) {
  const files = dirlist.map(function (file) {
    return path.join(path.join(__dirname, '/../examples/'), file)
  })

  if (er) {
    throw er
  }

  tap.test('examples directory', function (t) {
    t.match(files, mdpattern, 'filenames')
    t.end()
  })

  tap.test('lint examples', function (t) {
    for (var i = 0; i < lint.length; i++) {
      t.test(lint[i]['name'], function (child) {
        lint[i]['entry'](files, function (err, res) {
          child.error(err)
          child.end()
        })
      })
    }
    t.end()
  })
})

fs.readdir(path.join(__dirname, '/../recipes/'), function (er, dirlist) {
  const files = dirlist.map(function (file) {
    return path.join(path.join(__dirname, '/../recipes/'), file)
  })

  if (er) {
    throw er
  }

  tap.test('recipes directory', function (t) {
    t.match(files, mdpattern, 'filenames')
    t.end()
  })

  tap.test('lint recipes', function (t) {
    for (var i = 0; i < lint.length; i++) {
      t.test(lint[i]['name'], function (child) {
        lint[i]['entry'](files, function (err, res) {
          child.error(err)
          child.end()
        })
      })
    }
    t.end()
  })
})
