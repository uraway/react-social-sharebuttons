// @flow
import React, { Component } from 'react';

declare var twttr: any;

type Props = {
  user: string,
  showCount?: boolean,
};

type State = {
  initialized: boolean,
};

export default class TwitterFollowButton extends Component<Props, State> {
  node = null;

  static defaultProps = {
    showCount: true,
  };

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
    const { user, showCount } = this.props;
    return (
      <a
        ref={(node) => (this.node = node)}
        href={`https://twitter.com/${user}`}
        className="twitter-follow-button"
        data-show-count={showCount}
      >
        Follow @{user}
      </a>
    );
  }
}
