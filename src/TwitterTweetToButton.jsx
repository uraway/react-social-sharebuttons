// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  user: string,
  text?: string,
};

export default class TwitterTweetToButton extends Component<Props> {
  static defaultProps = { text: '' };

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
    const { user, text } = this.props;
    return (
      <div>
        <a
          ref={(node) => (this.node = node)}
          href={`https://twitter.com/intent/tweet?screen_name=${user}&text=${text || ''}`}
          className="twitter-mention-button"
        >
          Tweet to {user}
        </a>
      </div>
    );
  }
}
