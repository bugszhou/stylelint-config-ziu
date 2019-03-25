
module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "unit-whitelist": [
      "em",
      "rpx",
      "rem",
      "%",
      "s"
    ],
    "unit-no-unknown": [
      true,
      {
        "ignoreUnits": [
          "rpx"
        ]
      }
    ],
  },
};
