# rndmjs
## v1.1.1 ( last update: 30 dec 2017 )
Random functions

### Install
npm
```javascript
npm install rndmjs --save
```

Node.js
```javascript
const rndmjs = require('rndmjs');
// or
const { rand, randstr, ... } = require('rndmjs');
```

Typescript
```javascript
import * as rndmjs from 'rndmjs';
// or
import { rand, randstr, ... } from 'rndmjs';
```

Browser
```javascript
<script src='/node_modules/rndmjs/dist/rndmjs-min.js'></script>
<script>
  rndmjs.rand(1,10);
</script>
```

### rand()
More simple random function
```javascript
var r = rand(1,10); // 2
var r = rand(1,10); // 1
var r = rand(1,10); // 10
var r = rand(1,10); // 7
```

### randcolor()
Get random hex color
```javascript
var color = randcolor();
```

### randstr()
Get random string
```javascript
var str = randstr(12); // iei6nbarrq4j
var str = randstr(12); // e97u4cf1aqop
var str = randstr(22); // npsc876eort5jgp34jrdpg
```

### randstr64()
Get random string with 64 symbals dict
```javascript
var str = randstr64(22); // VdsYDLAL_pTfNUIBxZMW52
```

### randtext()
Get random text (without numerals)
```javascript
var text = randtext(22); // dgqfihmyuukygcrxqbxruo
```

### randCustomString()
Get random string with specific dict
```javascript
var dict = ['x','y','z'];
var str = randCustomString(dict, 5); // zyyxz
```

### randvalue()
Get random value of an array
```javascript
var array = [1,2,3,4,5];
var value = randvalue(array); // 3
var value = randvalue(array); // 5
```

### rndmjs dicts
Available dicts by default
```javascript
// alphabet - [a-z]
// Alphabet - [A-Z]
// numerals - [0-9]
// dict16 - [0-9,a-f]
// dict36 - [0-9,a-z]
// dict64 - [0-9,a-z,A-Z,-,_]

const { alphabet } = require('rndmjs');
```
