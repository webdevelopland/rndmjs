# rndmjs
## v1.0.0 ( last update: 22 dec 2017 )
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
Get random string with 64 symbals lib
```javascript
var str = randstr64(22); // VdsYDLAL_pTfNUIBxZMW52
```

### randtext()
Get random text (without numerals)
```javascript
var text = randtext(22); // dgqfihmyuukygcrxqbxruo
```

### randvalue()
Get random value of an array
```javascript
var array = [1,2,3,4,5];
var value = randvalue(array); // 3
var value = randvalue(array); // 5
```
