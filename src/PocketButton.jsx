// @flow
import React, { Component } from 'react';

type Props = {
  count?: 'horizontal' | 'vertical' | 'none',
};

type State = {
  initialized: boolean,
};

export default class PocketButton extends Component<Props, State> {
  node = null;

  static defaultProps = {
    count: '',
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

    const pocketbutton = this.node;
    const pocketscript = document.createElement('script');
    pocketscript.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
    pocketscript.async = true;
    pocketscript.id = 'pocket-btn-js';
    if (pocketbutton && pocketbutton.parentNode) pocketbutton.parentNode.appendChild(pocketscript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { count, ...others } = this.props;
    return (
      <a
        ref={(node) => (this.node = node)}
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
