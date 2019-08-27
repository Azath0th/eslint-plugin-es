# disallow the `Math.clz32` method (es/no-math-clz32)

This rule reports ES2015 `Math.clz32` method as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-math-clz32: error */
const n = Math.clz32(value)
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.4.1/lib/rules/no-math-clz32.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.4.1/tests/lib/rules/no-math-clz32.js)
