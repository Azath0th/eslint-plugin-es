# disallow accessor properties (es/no-accessor-properties)

This rule reports ES5 accessor properties as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
var a = {
    get a() {},
    set a(value) {}
}
class A {
    get a() {}
    set a(value) {}
}
```

## 📚 References

- [Rule source](../../lib/rules/no-accessor-properties.js)
- [Test source](../../tests/lib/rules/no-accessor-properties.js)
