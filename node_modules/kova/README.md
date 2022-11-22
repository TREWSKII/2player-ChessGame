[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/kova.svg)](https://travis-ci.org/indatawetrust/kova)

# kova
change the specified key values

#### usage

```js
import kova from 'kova'

const object = {
  a: {
    b: {
      c: {
        d: 'CHANGE ME'
      }
    },
    e: 'CHANGE ME'
  }
}

console.log(kova(object, 'CHANGE ME', 'CHANGED'))

{
  a: {
    b: {
      c: {
        d: 'CHANGED'
      }
    },
    e: 'CHANGED'
  }
}
```
