# disallow property shorthands (es/no-property-shorthands)

This rule reports ES2015 property shorthands as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-property-shorthands: error */
let obj = {
    a,
    b() {}
}
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.1/lib/rules/no-property-shorthands.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.1/tests/lib/rules/no-property-shorthands.js)
