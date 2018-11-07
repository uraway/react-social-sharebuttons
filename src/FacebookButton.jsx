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

export default class FacebookButton extends Component<Props> {
  node = null;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.url : '',
    layout: 'standard',
    action: 'like',
    showFaces: false,
    share: false,
  };

  componentDidMount() {
    if (typeof FB === 'undefined') {
      const s = document.createElement('script');
      s.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
      s.id = 'facebook-jssdk';
      if (this.node !== null && this.node.parentNode) this.node.parentNode.appendChild(s);
    } else {
      FB.XFBML.parse();
    }
  }

  render() {
    const { url, layout, action, showFaces, share, ...others } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}
