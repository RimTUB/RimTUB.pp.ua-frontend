// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/core'
import yaml from 'highlight.js/lib/languages/yaml'
import shell from 'highlight.js/lib/languages/shell'
import 'highlight.js/styles/default.min.css'
import CopyButtonPlugin from "highlightjs-copy"
import 'highlightjs-copy/dist/highlightjs-copy.min.css'

hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('shell', shell)

hljs.addPlugin(new CopyButtonPlugin({
	autohide: false,
}))

hljs.highlightAll()