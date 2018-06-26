# disallow the `Reflect` class (es/no-reflect)

This rule reports ES2015 `Reflect` class as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-reflect: error */
let value = Reflect.get(obj, key)
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.0/lib/rules/no-reflect.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.0/tests/lib/rules/no-reflect.js)
