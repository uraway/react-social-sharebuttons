# react-social-sharebuttons

Simple React components for Social Share Buttons.

![](http://i.imgur.com/uYVBG5W.png)

```javascript
import { LinkedinButton, FeedlyButton, HatenabookmarkButton, LINEButton, GREEButton } from 'react-social-sharebuttons';

class App extends React.Component {
  render() {
    const url = 'http://uraway.hatenablog.com/';

    const linkedincounter = "none";
    const lang = 'en';

    const feedurl = 'http://uraway.hatenablog.com/feed';
    const feedlylayout = 'logo-green';

    const hatenalayout = "standard-balloon";

    const linetext = 'LINEで送る';
    const lineimage = '20x20';

    const greetype = 2;

    return (
      <div>
        <LinkedinButton counter={linkedincounter} lang={lang} />
        <FeedlyButton feedurl={feedurl} layout={feedlylayout} />
        <HatenabookmarkButton layout={hatenalayout} />
        <LINEButton image={lineimage} />
        <GREEButton type={greetype} url={url} />
      </div>
    );
  }
}

```

### Install
```
$ npm install --save react-social-sharebuttons
```

### Documents

- [Linkedin](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-Linkedin-button.md)
- [Linkedin 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/08/000000)

- [Feedly](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-feedly-button.md)
- [Feedly 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/06/000000)

- [Hatena Bookmark](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-hatenabookmark-button.md)
- [Hatena Bookmark 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/05/000000)

- [LINE](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-line-button.md)
- [LINE 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/04/000000)

- [GREE](https://github.com/uraway/react-social-sharebuttons/blob/master/documents/react-gree-button.md)
- [GREE 日本語ドキュメント/website](http://uraway.hatenablog.com/entry/2016/02/07/000000)

-----
MIT licensed
