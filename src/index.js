module.exports = {
  "extends": ["./standard", "stylelint-config-weapp", "stylelint-config-aliapp", "stylelint-config-swan", "stylelint-config-ttapp"],
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "unit-allowed-list": [
      "vw",
      "vh",
      "in",
      "cm",
      "mm",
      "ms",
      "ex",
      "pt",
      "px",
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
