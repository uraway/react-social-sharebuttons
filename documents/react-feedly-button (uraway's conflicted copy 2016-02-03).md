# react-social-sharebuttons(Feedly)
Simple React components for Feedly Button.

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
The button layout. Choose from the followings. (These sample images are twice larger than actual images.)

###### rectangle-volume-big
![](../images/feedly/feedly-follow-rectangle-volume-big_2x.png)

###### rectangle-volume-medium
![](../images/feedly/feedly-follow-rectangle-volume-medium_2x.png)

###### rectangle-flat-small
![](../images/feedly/feedly-follow-rectangle-volume-small_2x.png)

###### rectangle-flat-big
![](../images/feedly/feedly-follow-rectangle-flat-big_2x.png)

###### rectangle-flat-medium
![](../images/feedly/feedly-follow-rectangle-flat-medium_2x.png)

###### rectangle-flat-small
![](../images/feedly/feedly-follow-rectangle-flat-small_2x.png)

###### square-volume
![](../images/feedly/feedly-follow-square-volume_2x.png)

###### square-flat-green
![](../images/feedly/feedly-follow-square-flat-green_2x.png)

###### circle-flat-green
![](../images/feedly/feedly-follow-circle-flat-green_2x.png)

###### logo-green
![](../images/feedly/feedly-follow-logo-green_2x.png)

###### square-flat-black
![](../images/feedly/feedly-follow-square-flat-black_2x.png)

###### circle-flat-black
![](../images/feedly/feedly-follow-circle-flat-black_2x.png)

###### logo-black
![](../images/feedly/feedly-follow-logo-black_2x.png)

###### square-flat-white
![](../images/feedly/feedly-follow-square-flat-white_2x.png)

###### circle-flat-white
![](../images/feedly/feedly-follow-circle-flat-white_2x.png)

###### logo-white
![](../images/feedly/feedly-follow-logo-white_2x.png)

---
MIT licensed
