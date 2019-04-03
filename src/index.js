module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-weapp", "stylelint-config-aliapp", "stylelint-config-swan", "stylelint-config-ttapp"],
  "rules": {
    "unit-whitelist": [
      "vw",
      "vh",
      "in",
      "cm",
      "mm",
      "ex",
      "pt",
      "pc",
      "em",
      "rpx",
      "rem",
      "deg",
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
    "no-eol-whitespace": [
      true,
      {
        ignore: ["empty-lines"]
      }
    ],
  },
};
