# react-social-sharebuttons(Facebook)
Simple React components for Facebook Button.

- [Facebook Button 日本語ドキュメント/website]()

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { FacebookButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const url = 'http://uraway.hatenablog.com';
    const layout = 'box_count';

    return (
      <FacebookButton url={url} showFaces={false} />
    );
  }
}
```

Add the following props as you wish.

Option|Description
---|---
`url`| The URL to share: `window.location` by default
`layout`| Choose the layout: `standard` by default, `box_count`, `button_count` or `button`
`action`| Choose the button action: `like` by default or `recommended`
`showFaces`| If it is enabled, users can see their friends' faces
`share`| If it is enabled, the share button also appears

## Sample
###### layout: button_count, share: true

![](http://i.imgur.com/UMQZojI.png)

###### layout: standard
![](http://i.imgur.com/i07brf4.png)

###### layout: button_count
![](http://i.imgur.com/awc38iK.png)

###### action: recommended
![](http://i.imgur.com/G5OwIdN.png)



---
MIT licensed
