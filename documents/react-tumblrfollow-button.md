# react-social-sharebuttons(TumblrFollow)
Simple React components for TumblrFollow Button.

- [TumblrFollow Button 日本語ドキュメント/website]()

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
      <TumblrFollowButton tumblelog="staff" />
    );
  }
}
```

## props

#### color (Default is blue)

####### blue
![](http://i.imgur.com/iB9ReCq.png)

###### white
![](http://i.imgur.com/s1T1FZ1.png)

###### black
![](http://i.imgur.com/lQHx9Kp.png)

#### tumblelog (Required)
The blog you want users to follow.

---
MIT licensed
