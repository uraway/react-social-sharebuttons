# react-social-sharebuttons(Linkedin)
Simple React components for Linkedin Button.

 - [Linkedin Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/08/000000)

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { LinkedinButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render(
    const url = "http://uraway.hatenablog.com";
    const counter = "top";
    return (
      <LinkedinButton url={url} counter={counter} />
    );
  }
}
```


## Optional props

Add the following props as you wish.

Option|Description
---|---
`url`| The URL to share: `window.location` by default
`counter`| Change the counter type of the button: none by default, `top` or `right`

## Sample
###### counter: top
![](http://i.imgur.com/lc1i7Cw.png)

###### counter: right
![](http://i.imgur.com/EE9Nqsn.png)
