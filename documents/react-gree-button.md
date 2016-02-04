# react-social-sharebuttons(GREE)
Simple React components for GREE Button.

- [GREE 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/07/000000)

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { GREEButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const url = "http://uraway.hatenablog.com/";
    const type = 1;

    return (
      <GREEButton url={url} type={type} />
    );
  }
}
```

## props

#### url (Required)
The URL you want to share.

#### type (Required, Number)
Choose button layout type from followings.

###### 0
![](http://i.imgur.com/hcYxXQY.png)

###### 1
![](http://i.imgur.com/1gHRrFF.png)

###### 2
![](http://i.imgur.com/ENTedp8.png)

###### 3
![](http://i.imgur.com/QwIw039.png)

###### 4
![](http://i.imgur.com/CFQNkOr.png)



---
MIT licensed
