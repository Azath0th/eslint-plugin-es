# disallow the `Promise` class (es/no-promise)

This rule reports ES2015 `Promise` class as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-promise: error */
let p = new Promise()
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.2/lib/rules/no-promise.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.2/tests/lib/rules/no-promise.js)
