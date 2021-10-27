# ${pluginName}

[PostAPL] plugin ${description}.

[PostAPL]: https://github.com/postapl/postapl

## Input

```json
/* Input example */
{
  "type": "APL",
  "version": "1.7",
  "settings": {},
  "theme": "dark",
  "import": [],
  "resources": [],
  "styles": {},
  "onMount": [],
  "graphics": {},
  "commands": {},
  "layouts": {},
  "mainTemplate": {
    "parameters": [
      "payload"
    ],
    "items": [
      {
        "type": "Container",
        "width": "100vw",
        "height": "100vh",
        "data": [],
        "items": [
          {
            "type": "Frame",
            "backgroundColor": "white",
            "height": "100%",
            "width": "100%",
            "item": {}
          }
        ]
      }
    ]
  }
}
```

## Output

```json
/* Output example */
{
  "type": "APL",
  "version": "1.7",
  "settings": {},
  "theme": "dark",
  "import": [],
  "resources": [],
  "styles": {},
  "onMount": [],
  "graphics": {},
  "commands": {},
  "layouts": {},
  "mainTemplate": {
    "parameters": [
      "payload"
    ],
    "items": [
      {
        "type": "Container",
        "width": "100vw",
        "height": "100vh",
        "data": [],
        "items": [
          {
            "type": "Frame",
            "backgroundColor": "white",
            "height": "100%",
            "width": "100%",
            "item": {}
          }
        ]
      }
    ]
  }
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postapl ${pluginName}
```

**Step 2:** Use:

```js
'use strict'

const { postapl } = require('postapl');
const thePlugin = require('${pluginName}');
const fs = require('fs');

fs.readFile('src/screen.json', (err, apl) => {
  postapl([thePlugin])
    .process(apl, { from: 'src/screen.json', to: 'dest/screen.json' })
    .then(result => {
      fs.writeFile(result.opts.to, result.apl, () => true)
    })
});
```


## Options

* `key` - description

[official docs]: https://github.com/postapl/postapl#usage
