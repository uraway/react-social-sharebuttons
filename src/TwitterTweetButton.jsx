// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  url?: string,
  text?: string,
  hashtags?: string,
  user?: string,
};

export default class TwitterTweetButton extends Component<Props> {
  node = null;

  componentDidMount() {
    if (typeof twttr === 'undefined') {
      const s = document.createElement('script');
      s.src = '//platform.twitter.com/widgets.js';
      s.async = true;
      s.id = 'twitter-wjs';
      if (this.node && this.node.parentNode) this.node.parentNode.appendChild(s);
    } else {
      twttr.widgets.load();
    }
  }

  render() {
    const { url, text, user, hashtags } = this.props;
    return (
      <div>
        <a
          ref={(node) => (this.node = node)}
          href="https://twitter.com/share"
          className="twitter-share-button"
          data-url={url}
          data-text={text}
          data-via={user}
          data-hashtags={hashtags}
        >
          Tweet
        </a>
      </div>
    );
  }
}

TwitterTweetButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.url : '',
  text: '',
  hashtags: '',
  user: '',
};
