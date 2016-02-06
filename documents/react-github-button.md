# react-social-sharebuttons(Github)
Simple React components for GitHub Button.

- [GitHub Button 日本語ドキュメント/website]()

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { GitHubButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const user = 'uraway'
    const repo = 'react-social-sharebuttons'
    return (
      <GitHubButton user={user} repo={repo} />
    );
  }
}
```

## Required props
You must declare a value for each of the following props.

Option|Description
------|-----
`user`| GitHub username
`repo`| GitHub repository

## Optional props

Add the following props as you wish.

Option|Description
---|---
`count`|Show the watchers or forks count: none by default or `true`
`size`|The button size: none by default or `large`
