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


## Required props
You must declare a value for following props.

Option|Description
------|-----
`thumblelog`| The tumblelog to share

## Optional props

Add the following props as you wish.

Option|Description
---|---
`color`|Change color of the button: `blue` by `white` or `black`


## Sample

###### color: blue
![](http://i.imgur.com/iB9ReCq.png)

###### color: white
![](http://i.imgur.com/s1T1FZ1.png)

###### color: black
![](http://i.imgur.com/lQHx9Kp.png)


---
MIT licensed
