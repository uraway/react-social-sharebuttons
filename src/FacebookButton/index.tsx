import { Component, createRef, RefObject } from 'react';

declare let FB: {
  XFBML: {
    parse: () => void;
  };
};

export type FacebookButtonProps = {
  url?: string;
  layout?: 'standard' | 'box_count' | 'button_count' | 'button';
  action?: 'like' | 'recommended';
  showFaces?: boolean;
  share?: boolean;
};

export default class FacebookButton extends Component<FacebookButtonProps> {
  ref: RefObject<HTMLDivElement>;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    layout: 'standard',
    action: 'like',
    showFaces: false,
    share: false,
  };

  constructor(props: FacebookButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    if (typeof FB === 'undefined') {
      const s = document.createElement('script');
      s.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
      s.id = 'facebook-jssdk';
      if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
    } else {
      FB.XFBML.parse();
    }
  }

  render(): JSX.Element {
    const { url, layout, action, showFaces, share, ...others } = this.props;
    return (
      <div
        ref={this.ref}
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
