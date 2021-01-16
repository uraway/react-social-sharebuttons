// @flow
import React, { Component } from 'react';

type Props = {
  count?: 'horizontal' | 'vertical' | 'none',
};

export default class PocketButton extends Component<Props> {
  node = null;

  static defaultProps = {
    count: '',
  };

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
    s.async = true;
    s.id = 'pocket-btn-js';
    if (this.node && this.node.parentNode) this.node.parentNode.appendChild(s);
  }

  render() {
    const { count, ...others } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}
