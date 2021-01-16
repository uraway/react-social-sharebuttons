import { Component, createRef, RefObject } from 'react';

type YouTubeButtonProps = {
  channel: string;
  layout?: 'none' | 'full';
  theme?: 'none' | 'dark';
  count?: 'show' | 'hidden';
};

export default class YouTubeButton extends Component<YouTubeButtonProps> {
  static defaultProps = { layout: 'none', theme: 'none', count: 'show' };

  ref: RefObject<HTMLDivElement>;

  constructor(props: YouTubeButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    const s = document.createElement('script');
    s.src = 'https://apis.google.com/js/platform.js';
    if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
  }

  render(): JSX.Element {
    const { channel, layout, theme, count } = this.props;
    return (
      <div
        ref={this.ref}
        className="g-ytsubscribe"
        data-channel={channel}
        data-layout={layout}
        data-theme={theme}
        data-count={count}
      />
    );
  }
}
