{
"presets": [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": "41",
            "ie": "10",
          }
        }
      ]
    ],
    "plugins": [
      "istanbul",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
    ]
  }