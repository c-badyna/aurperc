# anii.life

## Installation
```js
npm i anii.life@latest
```

## Functions
| Name | Description |
| -------- | ----------- |
| `hug` | Get a gif of hugs 0w0 |

## Examples
— 1:
```js
const { Anii } = require('anii.life');
const anii = Anii;

function test() {
  console.log(anii.hug())
}
test();
```
returns:
```js
{
  url: 'https://c.tenor.com/TfIvMiC32_0AAAAS/shintaro-kisaragi-ayano-tateyama.gif'
}
```
  
— 2:
```js
const { Anii } = require('anii.life');
const anii = Anii;

function test() {
  let data = anii.hug();
  console.log(data.url)
}
test();
```
returns:
```
https://c.tenor.com/TfIvMiC32_0AAAAS/shintaro-kisaragi-ayano-tateyama.gif
```
