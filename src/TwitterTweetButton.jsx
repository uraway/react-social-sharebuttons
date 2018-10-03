// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  url?: string,
  text?: string,
  hashtags?: string,
  user?: string,
};

type State = {
  initialized: boolean,
};

export default class TwitterTweetButton extends Component<Props, State> {
  static defaultProps = {
    url: typeof window !== 'undefined' ? window.url : '',
    text: '',
    hashtags: '',
    user: '',
  };

  node = null;

  constructor(props: Props) {
    super(props);
    this.state = { initialized: false };
  }

  componentDidMount() {
    const { initialized } = this.state;
    if (initialized) {
      return;
    }

    if (typeof twttr === 'undefined') {
      const twitterbutton = this.node;
      const twitterscript = document.createElement('script');
      twitterscript.src = '//platform.twitter.com/widgets.js';
      twitterscript.async = true;
      twitterscript.id = 'twitter-wjs';
      if (twitterbutton && twitterbutton.parentNode) twitterbutton.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load();
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { url, text, user, hashtags } = this.props;
    return (
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
    );
  }
}
