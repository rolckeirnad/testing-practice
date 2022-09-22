# TOP - Testing Practice
In this assignment we put in practice some test-driven development examples using `Jest`.
```
npm install -D jest
```

We use the ES6 syntax to use `import` instead of `require`, so one of our dependencies is `@babel/preset-env`.
```
npm i -D @babel/preset-env
```
We create a configuration file called `.babelrc` in the project's root:
```json
{ "presets": ["@babel/preset-env"] }
```