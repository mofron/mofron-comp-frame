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
<setting>
    <tag load="mofron-comp-frame">Frame</tag>
</setting>

<Frame size=(2rem,1.5rem) color="#f0e6fa"></Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | mainColor | mixed (color) | string: background color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |
| | accentColor | mixed (color) | string: border color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | radius | string (size) | radius effect value |
| | shadow | string (size) | shadow value |
| | borderWidth | string(size) | top border width |
| | | string(size) | right border width |
| | | string(size) | bottom border width |
| | | string(size) | left border width |
| ◯  | width | string (size) | frame width |
| | | key-value | style option |
| ◯  | height | string (size) | frame height |
| | | key-value | style option |

