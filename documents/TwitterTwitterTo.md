# react-social-sharebuttons(TwitterTweetTo)
Simple React components for TwitterTweetTo Button.

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { TwitterTweetToButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    return (
      <TwitterTweetToButton user="uraway_" text="awesome text"/>
    );
  }
}
```

## Required props
You must declare a value for the following props.

Option|Description
------|-----
`user`| The twitter username to tweet to

## Optional props

Add the following props as you wish.

Option|Description
---|---
`text`|The tweet text to share: none by default
