// @flow
import React, { Component } from 'react';

type Props = {
  color?: 'blue' | 'white' | 'black',
  notes?: 'none' | 'top' | 'right',
};

type State = {
  initialized: boolean,
};

export default class TumblrPostButton extends Component<Props, State> {
  node = null;

  static defaultProps = {
    color: 'blue',
    notes: 'none',
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

    const tumblrbutton = this.node;
    const tumblrscript = document.createElement('script');
    tumblrscript.src = 'https://secure.assets.tumblr.com/share-button.js';
    tumblrscript.id = 'tumblr-js';
    if (tumblrbutton && tumblrbutton.parentNode) tumblrbutton.parentNode.appendChild(tumblrscript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { color, notes } = this.props;
    return (
      <a
        ref={(node) => (this.node = node)}
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
