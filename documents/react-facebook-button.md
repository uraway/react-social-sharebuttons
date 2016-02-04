# react-social-sharebuttons(Facebook)
Simple React components for Facebook Button.

- [Facebook Button 日本語ドキュメント/website]()

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { FacebookButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const url = 'http://uraway.hatenablog.com';
    const layout = 'box_count';

    return (
      <FacebookButton url={url} showFaces={false} />
    );
  }
}
```

## props
#### url (Optional)
You can specify the URL to share. The default value is the URL of the page where you put the button on.

#### layout (Default is standard)
Choose the button layout from following.

###### standard
![](http://i.imgur.com/i07brf4.png)

###### box_count
![](http://i.imgur.com/DeESW5M.png)

###### button_count
![](http://i.imgur.com/awc38iK.png)

###### button
![](http://i.imgur.com/D7B46lj.png)

#### action (Defalt is like)
Choose the button action type from the follwing.

###### like
![](http://i.imgur.com/9tlXeIA.png)

###### recommended
![](http://i.imgur.com/G5OwIdN.png)

#### showFaces (boolean)
If it is enabled users can see their friend's faces.

#### share (boolean)
If it is enabled share button also appear.

![](http://i.imgur.com/UMQZojI.png)


---
MIT licensed
