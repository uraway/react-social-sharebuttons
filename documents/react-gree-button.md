# react-social-sharebuttons(GREE)
Simple React components for GREE Button.

- [GREE Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/07/000000)

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


## Optional props

Add the following props as you wish.

Option|Description
---|---
`url`| The URL to share
`type`| The button layout type:


#### type (Required, Number)
Choose the button layout type from the following.

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
