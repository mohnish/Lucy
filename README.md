# Lucy

>Lucy helps your users become power users of your application by means of the
Power Bar and also by offering helpful shortcuts

## Features

* Speech recognition
* Natural Language Processing
* Hotkeys

## Installation

1. Add `<script src="/path/to/lucy.js"></script>` right before the closing `body` tag.
2. Add the following code anywhere in your code:

```html
<div id="lucy-power-bar" class="hide">
  <input type="text" name="lucy-power-bar" value="" placeholder="What can I do?">
</div>
```

## Usage

To use the speech module,

```js
const lucy = new Lucy();
console.log(await lucy.listen());
```

## Skills

Lucy can be taught new skills and these can be shared. A skill is a simple string to callback mapping. This enables Lucy to learn new skills by means of keywords.
