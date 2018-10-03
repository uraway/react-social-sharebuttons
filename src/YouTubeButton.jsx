// @flow
import React, { Component } from 'react';

type Props = {
  channel: string,
  layout?: 'none' | 'full',
  theme?: 'none' | 'dark',
  count?: 'show' | 'hidden',
};

type State = {
  initialized: boolean,
};

export default class YouTubeButton extends Component<Props, State> {
  static defaultProps = { layout: 'none', theme: 'none', count: 'show' };

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

    const youtubebutton = this.node;
    const youtubescript = document.createElement('script');
    youtubescript.src = 'https://apis.google.com/js/platform.js';
    if (youtubebutton && youtubebutton.parentNode) youtubebutton.parentNode.appendChild(youtubescript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { channel, layout, theme, count } = this.props;
    return (
      <div
        ref={(node) => (this.node = node)}
        className="g-ytsubscribe"
        data-channel={channel}
        data-layout={layout}
        data-theme={theme}
        data-count={count}
      />
    );
  }
}
