// @flow
import React, { Component } from 'react';

type Props = {
  color?: 'blue' | 'white' | 'black',
  notes?: 'none' | 'top' | 'right',
};

export default class TumblrPostButton extends Component<Props> {
  node = null;

  static defaultProps = {
    color: 'blue',
    notes: 'none',
  };

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://secure.assets.tumblr.com/share-button.js';
    s.id = 'tumblr-js';
    if (this.node && this.node.parentNode) this.node.parentNode.appendChild(s);
  }

  render() {
    const { color, notes } = this.props;
    return (
      <div>
        <a
          ref={(node) => (this.node = node)}
          className="tumblr-share-button"
          data-color={color}
          data-notes={notes}
          href="https://embed.tumblr.com/share"
        >
          Tumber Post Button
        </a>
      </div>
    );
  }
}
