import { Component, createRef, RefObject } from 'react';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

type TwitterHashtagButtonProps = {
  hashtag: string;
  text?: string;
};

export default class TwitterHashtagButton extends Component<TwitterHashtagButtonProps> {
  ref: RefObject<HTMLAnchorElement>;

  static defaultProps = {
    text: '',
  };

  constructor(props: TwitterHashtagButtonProps) {
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
    const { hashtag, text } = this.props;
    return (
      <a
        ref={this.ref}
        href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&text=${text || ''}`}
        className="twitter-hashtag-button"
      >
        Tweet {hashtag}
      </a>
    );
  }
}
