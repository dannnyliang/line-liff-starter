module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    liff: true,
  },
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};