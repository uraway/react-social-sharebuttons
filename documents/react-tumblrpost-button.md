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

## props

#### color (Default is blue)
Choose the button color from the following.

###### blue
![](http://i.imgur.com/CITu5pS.png)

###### white
![](http://i.imgur.com/wXN8ouw.png)

###### black
![](http://i.imgur.com/pnG2EAa.png)

#### notes (Optional)
Choose the count style from the following.

###### none
![](http://i.imgur.com/JDYtTvm.png)

###### right
![](http://i.imgur.com/0r03MDH.png)

###### top
![](http://i.imgur.com/wnK6xhR.png)

---
MIT licensed
