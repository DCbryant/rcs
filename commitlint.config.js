// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "@commitlint/config-conventional", // 符合 Angular团队规范
    // "cz"
  ],
  rules: {
    "type-enum": [2, "always", [
      "feat",
      "fix",
      "config",
      "refactor",
      "pref",
      "docs",
      "chore",
      "style",
      "revert"
    ]],
  }
};
