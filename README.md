# What is this

Generates random number in a given range

# Installation

`npm i genrannum --save`

# Usage

```
const r = require('genrannum');

r(method, n);

r('nomethod', 5) // Math.random() * 5

r('trunc', 5) // Math.trunc(Math.random() * 5)

r('floor', 5) // Math.floor(Math.random() * 5)

r('ceil', 5) // Math.ceil(Math.random() * 5)

r('round', 5) // Math.round(Math.random() * 5)
```
