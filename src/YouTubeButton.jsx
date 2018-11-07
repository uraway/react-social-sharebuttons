// @flow
import React, { Component } from 'react';

type Props = {
  channel: string,
  layout?: 'none' | 'full',
  theme?: 'none' | 'dark',
  count?: 'show' | 'hidden',
};

export default class YouTubeButton extends Component<Props> {
  static defaultProps = { layout: 'none', theme: 'none', count: 'show' };

  node = null;

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://apis.google.com/js/platform.js';
    if (this.node && this.node.parentNode) this.node.parentNode.appendChild(s);
  }

  render() {
    const { channel, layout, theme, count } = this.props;
    return (
      <div>
        <div
          ref={(node) => (this.node = node)}
          className="g-ytsubscribe"
          data-channel={channel}
          data-layout={layout}
          data-theme={theme}
          data-count={count}
        />
      </div>
    );
  }
}
