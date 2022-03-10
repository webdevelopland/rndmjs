# rndmjs
## v1.3.0 ( last update: 10 mar 2022 )
Random functions

### Install
npm
```javascript
npm install rndmjs
```

Node.js
```javascript
const rndmjs = require('rndmjs');
// or
const { rand, randstr, ... } = require('rndmjs');
```

Typescript
```typescript
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
Simple random function
```javascript
let r1 = rand(1,10); // 2
let r2 = rand(1,10); // 1
let r3 = rand(1,10); // 10
let r4 = rand(1,10); // 7
```

### randcolor()
Get a random hex color
```javascript
let color = randcolor();
```

### randstr()
Get a random string
```javascript
let str1 = randstr(12); // iei6nbarrq4j
let str2 = randstr(12); // e97u4cf1aqop
let str3 = randstr(22); // npsc876eort5jgp34jrdpg
```

### randstr64()
Get a random string with 64 symbals dict
```javascript
let str = randstr64(22); // VdsYDLAL_pTfNUIBxZMW52
```

### randtext()
Get random text (without numerals)
```javascript
let text = randtext(22); // dgqfihmyuukygcrxqbxruo
```

### randCustomString()
Get a random string with specific dict
```javascript
let dict = ['x', 'y', 'z'];
let str = randCustomString(dict, 5); // zyyxz
```

### randvalue()
Get a random value of an array
```javascript
let array = [1, 2, 3, 4, 5];;
let value1 = randvalue(array); // 3
let value2 = randvalue(array); // 5
```

### shuffle()
Randomize order of an array
```javascript
let array = [1, 2, 3, 4, 5];
shuffle(dict1);
// [3, 5, 1, 4, 2]
```

### generatePassword()
Generate a password from several dicts.  
At least one char from each dict guaranteed will be in the final password
```javascript
let dict1 = ['x', 'y', 'z'];
let dict2 = ['1', '2', '3', '4', '5'];
let value1 = generatePassword(2, dict1, dict2); // 5z
let value2 = generatePassword(10, dict1, dict2); // zy454y33yx
```

### rndmjs dicts
Available dicts by default
```javascript
// alphabet - [a-z]
// Alphabet - [A-Z]
// numerals - [0-9]
// special - symbols: !@#$...
// dict16 - [0-9,a-f]
// dict36 - [0-9,a-z]
// dict64 - [0-9,a-z,A-Z,-,_]

const { alphabet } = require('rndmjs');
```
