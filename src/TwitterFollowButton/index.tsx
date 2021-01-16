import { Component, createRef, RefObject } from 'react';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

type TwitterFollowButtonProps = {
  user: string;
  showCount?: boolean;
};

export default class TwitterFollowButton extends Component<TwitterFollowButtonProps> {
  ref: RefObject<HTMLAnchorElement>;

  static defaultProps = {
    showCount: true,
  };

  constructor(props: TwitterFollowButtonProps) {
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
    const { user, showCount } = this.props;
    return (
      <a
        ref={this.ref}
        href={`https://twitter.com/${user}`}
        className="twitter-follow-button"
        data-show-count={showCount}
      >
        Follow @{user}
      </a>
    );
  }
}
