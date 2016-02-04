# react-social-sharebuttons(Feedly)
Simple React components for Feedly Button.

- [Feedly Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/06/000000)

## Install
```
npm install --save react-social-sharebuttons
```

## Example
```javascript
import { FeedlyButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    let feedurl = "http://uraway.hatenablog.com/";
    let layout = "logo-green";

    return (
      <FeedlyButton feedurl={feedurl} layout={layout} />
    );
  }
}
```

## props

#### feedurl (Required)

The Feed URL you want users to subscribe. See more [info.](http://feedly.uservoice.com/knowledgebase/articles/206805-what-is-my-feed-url-)

#### layout (Default is rectangle-volume-big)
The button layout. Choose from the following. (These sample images are twice larger than actual images.)

###### rectangle-volume-big
![](http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png)

###### rectangle-volume-medium
![](http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png)

###### rectangle-volume-small-small
![](http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-small_2x.png)

###### rectangle-flat-big
![](http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png)

###### rectangle-flat-medium
![](http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.pn)

###### rectangle-flat-small
![](http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png)

###### square-volume
![](http://s3.feedly.com/img/follows/feedly-follow-square-volume_2x.png)

###### square-flat-green
![](http://s3.feedly.com/img/follows/feedly-follow-square-flat-green_2x.png)

###### circle-flat-green
![](http://s3.feedly.com/img/follows/feedly-follow-circle-flat-green_2x.png)

###### logo-green
![](http://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png)

###### square-flat-black
![](http://s3.feedly.com/img/follows/feedly-follow-square-flat-black_2x.png)

###### circle-flat-black
![](http://s3.feedly.com/img/follows/feedly-follow-circle-flat-black_2x.png)

###### logo-black
![](http://s3.feedly.com/img/follows/feedly-follow-logo-black_2x.png)

###### square-flat-white
![](http://s3.feedly.com/img/follows/feedly-follow-square-flat-white_2x.png)

###### circle-flat-white
![](http://s3.feedly.com/img/follows/feedly-follow-circle-flat-white_2x.png)

###### logo-white
![](http://s3.feedly.com/img/follows/feedly-follow-logo-white_2x.png)

---
MIT licensed
