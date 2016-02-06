# react-social-sharebuttons(HatenaBookmark)
Simple React components for HatenaBookmark Button.

- [Hatenabookmark Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/05/000000)

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { HatenabookmarkButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    let url = "https://github.com";
    let layout = "simple-balloon";

    return (
      <HatenabookmarkButton url={url} layout={layout} />
    );
  }
}
```


## Optional props

Add the following props as you wish.

Option|Description
---|---
`url`| The URL to bookmark: `window.location` by default
`title`| The title to display when bookmarked: none by default
`layout`| The button layout: none by default, `simple-balloon` or `standard-balloon`

## Sample

###### layout: default
![](http://i.imgur.com/AuKmG2o.png)

###### layout: simple-balloon
![](http://i.imgur.com/0fHSBhG.png)

###### layout: standard-balloon
![](http://i.imgur.com/2166oFC.png)

---
MIT licensed
