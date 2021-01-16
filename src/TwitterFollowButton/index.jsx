// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  user: string,
  showCount?: boolean,
};

export default class TwitterFollowButton extends Component<Props> {
  node = null;

  static defaultProps = {
    showCount: true,
  };

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
    const { user, showCount } = this.props;
    return (
      <div>
        <a
          ref={(node) => (this.node = node)}
          href={`https://twitter.com/${user}`}
          className="twitter-follow-button"
          data-show-count={showCount}
        >
          Follow @{user}
        </a>
      </div>
    );
  }
}
