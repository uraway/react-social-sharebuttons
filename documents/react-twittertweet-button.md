# react-social-sharebuttons(TwitterTweet)
Simple React components for TwitterTweet Button.

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { TwitterTweetButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    return (
      <TwitterTweetButton url={url} text={text} />
    );
  }
}
```

## Optional props

Add the following props as you wish.

Option|Description
---|---
`url`|The URL to share: `window.location` by default
`text`|The tweet text to share: none by default
`via`|The tweet via this user: none by default
`hashtags`|The hashtags with the tweet: none by default


---
MIT licensed
