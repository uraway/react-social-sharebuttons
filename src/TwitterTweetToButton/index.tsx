import { Component, createRef, RefObject } from 'react';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

type TwitterTweetToButtonProps = {
  user: string;
  text?: string;
};

export default class TwitterTweetToButton extends Component<TwitterTweetToButtonProps> {
  static defaultProps = { text: '' };

  ref: RefObject<HTMLAnchorElement>;

  constructor(props: TwitterTweetToButtonProps) {
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
    const { user, text } = this.props;
    return (
      <a
        ref={this.ref}
        href={`https://twitter.com/intent/tweet?screen_name=${user}&text=${text || ''}`}
        className="twitter-mention-button"
      >
        Tweet to {user}
      </a>
    );
  }
}
