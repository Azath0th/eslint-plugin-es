(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{318:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-es",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/eslint-plugin-es.svg",alt:"npm version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://www.npmtrends.com/eslint-plugin-es",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/eslint-plugin-es.svg",alt:"Downloads/month"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/mysticatea/eslint-plugin-es",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/mysticatea/eslint-plugin-es.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codecov.io/gh/mysticatea/eslint-plugin-es",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/mysticatea/eslint-plugin-es/branch/master/graph/badge.svg",alt:"Coverage Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://david-dm.org/mysticatea/eslint-plugin-es",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://david-dm.org/mysticatea/eslint-plugin-es.svg",alt:"Dependency Status"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("ESLint rules which disallow each ECMAScript syntax.")]),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/eslint/espree#readme",target:"_blank",rel:"noopener noreferrer"}},[t._v("Espree"),s("OutboundLink")],1),t._v(", the default parser of "),s("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),s("OutboundLink")],1),t._v(", has supported "),s("code",[t._v("ecmaVersion")]),t._v(" option.\nHowever, it doesn't support to enable each syntactic feature individually.\nThis plugin lets us disable each syntactic feature individually.\nSo we can enable arbitrary syntactic features with the combination of "),s("code",[t._v("ecmaVersion")]),t._v(" and this plugin.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("This plugin provides the following configs.")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guide","aria-hidden":"true"}},[this._v("#")]),this._v(" Guide")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"🏁-goal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🏁-goal","aria-hidden":"true"}},[this._v("#")]),this._v(" 🏁 Goal")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"💿-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#💿-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" 💿 Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install --save-dev eslint eslint-plugin-es\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Requirements")]),t._v(" "),s("ul",[s("li",[t._v("Node.js "),s("code",[t._v("6.5.0")]),t._v(" or newer.")]),t._v(" "),s("li",[t._v("ESLint "),s("code",[t._v("4.19.1")]),t._v(" or newer.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"📖-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📖-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Configure your "),e("code",[this._v(".eslintrc.*")]),this._v(" file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, to enable only Rest/Spread Properties in ES2018, as similar to legacy "),e("code",[this._v("experimentalObjectRestSpread")]),this._v(" option:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parserOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ecmaVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-async-iteration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-malformed-template-literals"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-regexp-lookbehind-assertions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-regexp-named-capture-groups"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-regexp-s-flag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-regexp-unicode-property-escapes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"presets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#presets","aria-hidden":"true"}},[this._v("#")]),this._v(" Presets")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Config ID")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("plugin:es/no-2018")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("enable all rules which disallow ES2018 syntax.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("plugin:es/no-2017")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("enable all rules which disallow ES2017 syntax.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("plugin:es/no-2016")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("enable all rules which disallow ES2016 syntax.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("plugin:es/no-2015")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("enable all rules which disallow ES2015 syntax.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("plugin:es/no-5")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("enable all rules which disallow ES5 syntax.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parserOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ecmaVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:es/no-2018"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es/no-rest-spread-properties"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);