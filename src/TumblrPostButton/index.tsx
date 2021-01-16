import { Component, createRef, RefObject } from 'react';

export type TumblrPostButtonProps = {
  color?: 'blue' | 'white' | 'black';
  notes?: 'none' | 'top' | 'right';
};

export default class TumblrPostButton extends Component<TumblrPostButtonProps> {
  ref: RefObject<HTMLAnchorElement>;

  static defaultProps = {
    color: 'blue',
    notes: 'none',
  };

  constructor(props: TumblrPostButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    const s = document.createElement('script');
    s.src = 'https://secure.assets.tumblr.com/share-button.js';
    s.id = 'tumblr-js';
    if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
  }

  render(): JSX.Element {
    const { color, notes } = this.props;
    return (
      <a
        ref={this.ref}
        className="tumblr-share-button"
        data-color={color}
        data-notes={notes}
        href="https://embed.tumblr.com/share"
      >
        Tumber Post Button
      </a>
    );
  }
}
