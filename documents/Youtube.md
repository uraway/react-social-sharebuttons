# react-social-sharebuttons(YouTube)
Simple React components for YouTube Button.

- [YouTube Button 日本語ドキュメント/website]()

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { YouTubeButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    return (
      <YouTubeButton channel="GoogleDevelopers"/>
    );
  }
}
```


## Required props
You must declare a value for the following props.

Option|Description
------|-----
`channel`| YouTube channel or [ID](https://www.youtube.com/account_advanced)

## Optional props

Add the following props as you wish.

Option|Description
---|---
`layout`|Choose the button layout: none by default or `full`
`theme`|Choose the button theme: none by default or `dark`
`count`|Show the subscriber count: `show` by default or `hidden`


## Sample

###### layout: default
![](http://i.imgur.com/KgwALRf.png)

###### layout: full
![](http://i.imgur.com/TncIZRp.png)

###### theme: dark
![](http://i.imgur.com/bo3sepp.png)

---
MIT licensed
