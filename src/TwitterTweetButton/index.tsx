import { Component, createRef, RefObject } from 'react';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

type TwitterTweetButtonProps = {
  url?: string;
  text?: string;
  hashtags?: string;
  user?: string;
};

export default class TwitterTweetButton extends Component<TwitterTweetButtonProps> {
  ref: RefObject<HTMLAnchorElement>;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    text: '',
    hashtags: '',
    user: '',
  };

  constructor(props: TwitterTweetButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    if (typeof twttr === 'undefined') {
      const s = document.createElement('script');
      s.src = '//platform.twitter.com/widgets.js';
      s.async = true;
      s.id = 'twitter-wjs';
      if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
    } else {
      twttr.widgets.load();
    }
  }

  render(): JSX.Element {
    const { url, text, user, hashtags } = this.props;
    return (
      <a
        ref={this.ref}
        href="https://twitter.com/share"
        className="twitter-share-button"
        data-url={url}
        data-text={text}
        data-via={user}
        data-hashtags={hashtags}
      >
        Tweet
      </a>
    );
  }
}
