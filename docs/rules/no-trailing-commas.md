# disallow trailing commas in array/object literals (es/no-trailing-commas)

This rule reports ES5 trailing commas in array/object literals as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-trailing-commas: error */
var a = [1, 2,]
var b = { x: 1, y: 2, }
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.0/lib/rules/no-trailing-commas.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.0/tests/lib/rules/no-trailing-commas.js)
