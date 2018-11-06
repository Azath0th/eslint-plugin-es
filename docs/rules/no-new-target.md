# disallow `new.target` meta property (es/no-new-target)

This rule reports ES2015 `new.target` meta property as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-new-target: error */
class A {
    constructor() {
        doSomething(new.target)
    }
}
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.2/lib/rules/no-new-target.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.3.2/tests/lib/rules/no-new-target.js)
