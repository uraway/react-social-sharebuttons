import { Component, createRef, RefObject } from 'react';

export type PocketButtonProps = {
  count?: 'horizontal' | 'vertical' | 'none';
};

export default class PocketButton extends Component<PocketButtonProps> {
  ref: RefObject<HTMLAnchorElement>;

  static defaultProps = {
    count: '',
  };

  constructor(props: PocketButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    const s = document.createElement('script');
    s.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
    s.async = true;
    s.id = 'pocket-btn-js';
    if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
  }

  render(): JSX.Element {
    const { count, ...others } = this.props;
    return (
      <a
        ref={this.ref}
        data-pocket-label="pocket"
        data-pocket-count={count}
        className="pocket-btn"
        data-lang="en"
        {...others}
      >
        Pocket
      </a>
    );
  }
}
