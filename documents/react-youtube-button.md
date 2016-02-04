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

## props
#### channel (Required)
Channel name or [ID](https://www.youtube.com/account_advanced).

#### layout (Optinal)
The button layout.

###### default
![](http://i.imgur.com/KgwALRf.png)

###### full
![](http://i.imgur.com/TncIZRp.png)

#### theme (Optional)
The button theme is triggered only if layout is set to full.

###### default
![](http://i.imgur.com/TncIZRp.png)

###### dark
![](http://i.imgur.com/bo3sepp.png)

#### count (Optional)
The subscriber count of the channel.
###### default
Shows the count.

###### hidden
Hides the count.

---
MIT licensed
