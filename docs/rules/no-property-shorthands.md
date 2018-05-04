# disallow property shorthands (es/no-property-shorthands)

This rule reports ES2015 property shorthands as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
let obj = {
    a,
    b() {}
}
```

## 📚 References

- [Rule source](../../lib/rules/no-property-shorthands.js)
- [Test source](../../tests/lib/rules/no-property-shorthands.js)
