// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  hashtag: string,
  text?: string,
};

type State = {
  initialized: boolean,
};

export default class TwitterHashtagButton extends Component<Props, State> {
  static defaultProps = {
    text: '',
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
    const { hashtag, text } = this.props;
    return (
      <a
        ref={(node) => (this.node = node)}
        href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&text=${text || ''}`}
        className="twitter-hashtag-button"
      >
        Tweet {hashtag}
      </a>
    );
  }
}
