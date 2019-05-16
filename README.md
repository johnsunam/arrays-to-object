# arrays-to-object
Node modules that can be used to for generating new object where we need to pass two different array as parameter in which first array will be used as key and second array will taken as value.

# usage

First, install package using:
  > npm install --save array-object-converter

# using in code
```
const { convertArraysToObject } = require('array-object-converter');

let objectResult = convertArraysToObject(['name', 'address'], ['john', 'itahari']);

console.log(objectResult);

// should console {"name": "john", "address": "itahari"}

```