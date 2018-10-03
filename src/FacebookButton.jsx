// @flow
import React, { Component } from 'react';

declare var FB: any;

type Props = {
  url?: string,
  layout?: 'standard' | 'box_count' | 'button_count' | 'button',
  action?: 'like' | 'recommended',
  showFaces?: boolean,
  share?: boolean,
};

type State = {
  initialized: boolean,
};

export default class FacebookButton extends Component<Props, State> {
  node = null;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.url : '',
    layout: '',
    action: '',
    showFaces: false,
    share: false,
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

    if (typeof FB === 'undefined' && this.node !== null) {
      const facebookbutton = this.node;
      const facebookscript = document.createElement('script');
      facebookscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
      facebookscript.id = 'facebook-jssdk';
      if (facebookbutton.parentNode) facebookbutton.parentNode.appendChild(facebookscript);
    } else {
      FB.XFBML.parse(); // eslint-disable-line
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { url, layout, action, showFaces, share, ...others } = this.props;
    return (
      <div
        ref={(node) => (this.node = node)}
        className="fb-like"
        data-href={url}
        data-layout={layout}
        data-action={action}
        data-show-faces={showFaces}
        data-share={share}
        {...others}
      />
    );
  }
}
