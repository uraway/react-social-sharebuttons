# react-social-sharebuttons(TumblrPost)
Simple React components for TumblrPost Button.

- [TumblrPost Button 日本語ドキュメント/website]()

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { TumblrPostButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    return (
      <TumblrPostButton notes={notes} color={color} />
    );
  }
}
```


## Optional props

Add the following props as you wish.

Option|Description
---|---
`color`| Change color of the button: `blue` by default, `white` or `black`
`notes`| Change count style of the button: none by default, `top` or `right`


---
MIT licensed
