#   mofron-comp-frame
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 frame component for mofron

## Feature
 - default size is 1rem × 1rem
 - frame size is includes border size

# Install
```
npm install mofron   mofron-comp-frame
```

# Sample
```html
<require>
    <tag module="mofron-comp-frame">Frame</tag>
</require>

<Frame size="2rem","1.5rem" color="#f0e6fa">
</Frame>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | mainColor | mixed (color) | string: background color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | accentColor | mixed (color) | string: border color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | radius | string (size) | radius effect value |
| | shadow | string (size) | shadow value |
| | width | string (size) | frame width |
| | height | string (size) | frame height |
| | | option | style option |

