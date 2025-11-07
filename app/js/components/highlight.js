// import hljs from 'highlight.js';
// import 'highlight.js/styles/a11y-dark.min.css'
// import CopyButtonPlugin from 'highlightjs-copy'
// import 'highlightjs-copy/dist/highlightjs-copy.min.css'

// hljs.addPlugin(new CopyButtonPlugin({
// 	autohide: false,
// }))


// hljs.highlightAll()

import Prism from 'prismjs';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';

Prism.highlightAll()
