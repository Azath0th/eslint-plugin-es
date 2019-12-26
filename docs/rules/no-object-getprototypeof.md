# disallow the `Object.getPrototypeOf` method (es/no-object-getprototypeof)

This rule reports ES5 `Object.getPrototypeOf` method as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-object-getprototypeof: error */
var proto = Object.getPrototypeOf(obj)
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v2.0.0/lib/rules/no-object-getprototypeof.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v2.0.0/tests/lib/rules/no-object-getprototypeof.js)
