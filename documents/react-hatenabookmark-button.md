# react-social-sharebuttons(HatenaBookmark)
Simple React components for HatenaBookmark Button.

- [Hatenabookmark Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/05/000000)

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { HatenabookmarkButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    let url = "https://github.com";
    let layout = "simple-balloon";

    return (
      <HatenabookmarkButton url={url} layout={layout} />
    );
  }
}
```

## props

#### url (Optional)

The URL you want to share. The default value is the URL of the page where you put the button on.

#### title (Optional)
The title which displays when the page is bookmarked.

#### layout
The button layout. Choose from the following.

###### default
![](http://i.imgur.com/AuKmG2o.png)

###### simple-balloon
![](http://i.imgur.com/0fHSBhG.png)

###### standard-balloon
![](http://i.imgur.com/2166oFC.png)

---
MIT licensed
