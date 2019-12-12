// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  hashtag: string,
  text?: string,
};

export default class TwitterHashtagButton extends Component<Props> {
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
    const { hashtag, text } = this.props;
    return (
      <div>
        <a
          ref={(node) => (this.node = node)}
          href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&text=${text || ''}`}
          className="twitter-hashtag-button"
        >
          Tweet {hashtag}
        </a>
      </div>
    );
  }
}

TwitterHashtagButton.defaultProps = {
  text: '',
};
