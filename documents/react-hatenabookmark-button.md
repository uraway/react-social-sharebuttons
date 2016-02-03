# react-hatenabookmark-button
Simple React components for HatenaBookmark Button.

[日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/01/123326)

## Install
```
npm install --save react-social-sharebutton
```

## Example
```javascript
import { HatenabookmarkButton } from 'react-social-sharebutton';

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

#### url

The URL you want to share. The default value is the URL of the page where you put the button on.

#### title
The title which display when the page is bookmarked.

#### layout
The button layout. Choose from the followings.

###### default
![](http://i.imgur.com/AuKmG2o.png)

###### simple-balloon
![](http://i.imgur.com/0fHSBhG.png)

###### standard-balloon
![](http://i.imgur.com/2166oFC.png)

---
MIT licensed
