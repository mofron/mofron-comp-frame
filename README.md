# mofron-comp-frame
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

frame component for [mofron](https://mofron.github.io/mofron/).

# Install

```:bash
npm install mofron mofron-comp-frame
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

| Simple<br>Param | Parameter Name     | Type                               |    Description                         |
|:---------------:|:-------------------|:-----------------------------------|:---------------------------------------|
|                 | mainColor          | string(color)/array(r,g,b)         | background color                       |
|                 | accentColor        | string(color)/array(r,g,b)         | border color                           |
|                 | radius             | string(size)                       | radius effect value                    |
|                 | shadow             | string(size)                       | shadow effect value                    |
|       ◯         | width              | string(size)                       | frame width                            |
|                 | height             | string(size)                       | frame height                           |
