# react-social-sharebuttons

Simple React components for Social Share Buttons.

![](http://i.imgur.com/GqTcqLS.png)

```javascript
import { LINEButton, HatenabookmarkButton, FeedlyButton, GREEButton, LinkedinButton, TumblrPostButton, TumblrFollowButton, FacebookButton, TwitterTweetButton, TwitterFollowButton, TwitterHashtagButton, TwitterTweetToButton, PocketButton, YouTubeButton, GithubButton, GooglePlusButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const text = 'awesome text';
    const lineimage = '20x20';
    const url = 'http://uraway.hatenablog.com/';
    const feedurl = 'http://uraway.hatenablog.com/feed';
    const feedlylayout = 'logo-green';
    const hatenalayout = 'standard-balloon';
    const user = 'uraway_';
    const hashtag = 'github';

    return (
      <ul>
        <ol><GooglePlusButton /></ol>
        <ol><GithubButton user="uraway" repo="react-social-sharebuttons" type="star" count /></ol>
        <ol><YouTubeButton channel="GoogleDevelopers"/></ol>
        <ol><PocketButton /></ol>
        <ol><TwitterTweetToButton user={user} /></ol>
        <ol><TwitterHashtagButton hashtag={hashtag} text={text} /></ol>
        <ol><TwitterFollowButton user={user} showCount /></ol>
        <ol><TwitterTweetButton url={url} text={text} /></ol>
        <ol><FacebookButton url={url} showFaces /></ol>
        <ol><TumblrFollowButton /></ol>
        <ol><TumblrPostButton notes="none" /></ol>
        <ol><LinkedinButton counter="none" /></ol>
        <ol><FeedlyButton layout={feedlylayout} feedurl={feedurl} /></ol>
        <ol><HatenabookmarkButton layout={hatenalayout} /></ol>
        <ol><LINEButton image={lineimage} text={text} /></ol>
        <ol><GREEButton type={2} /></ol>
      </ul>
    );
  }
}
```

### Install
```
$ npm install --save react-social-sharebuttons
```

### Documents

Do you want any other social share buttons? Feel free to contanct with me or open an issue.

- [Facebook Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-facebook-button.md)

- [Feedly Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-feedly-button.md)
- [Feedly Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/06/000000)

- [GREE Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-gree-button.md)
- [GREE Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/07/000000)

- [Hatena Bookmark Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-hatenabookmark-button.md)
- [Hatena Bookmark Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/05/000000)

- [LINE Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-line-button.md)
- [LINE Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/04/000000)

- [Linkedin Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-Linkedin-button.md)
- [Linkedin Button 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/08/000000)

- [TumblrFollow Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-tumblrfollow-button.md)

- [TumblrPost Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-tumblrpost-button.md)

- [Pocket Button](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-pocket-button.md)






### Contribution
<iframe src="https://ghbtns.com/github-btn.html?user=uraway&repo=react-social-sharebuttons&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

-----

This software includes the work that is distributed in the Apache License 2.0

MIT licensed
