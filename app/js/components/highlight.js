import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.min.css'
import CopyButtonPlugin from 'highlightjs-copy'
import 'highlightjs-copy/dist/highlightjs-copy.min.css'

window.hljs = hljs

import('highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js').then(() => {
  hljs.addPlugin(new CopyButtonPlugin({ autohide: false }))
  hljs.highlightAll()
  hljs.initLineNumbersOnLoad()
});



