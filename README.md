# mofron-comp-frame
Base of Frame Component for mofron

# sample
please see [here](https://github.com/simpart/mofron) about an overview of mofron

```javascript
let Mof   = require('mofron');
let Frame = require('mofron-comp-frame');
/* display frame sample */
new Frame({
    param   : [150,300],
    color   : new Mof.Color(173,216,230),
    shadow  : 25,
    radius  : 10,
    visible : true
});
```
