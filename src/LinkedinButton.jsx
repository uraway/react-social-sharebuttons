// @flow
import React, { Component } from 'react';

type Props = {
  url?: string,
  counter?: 'top' | 'right',
  lang?: string,
};

type State = {
  initialized: boolean,
};

export default class LinkedinButton extends Component<Props, State> {
  node = null;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.url : '',
    counter: '',
    lang: 'ja',
  };

  constructor(props: Props) {
    super(props);
    this.state = { initialized: false };
  }

  componentDidMount() {
    const { lang } = this.props;
    const { initialized } = this.state;
    if (initialized) {
      return;
    }

    if (window.IN) delete window.IN;
    const linkedinbutton = this.node;
    const linkedinscript = document.createElement('script');
    linkedinscript.src = '//platform.linkedin.com/in.js';
    linkedinscript.type = 'text/javascript';
    if (lang) linkedinscript.lang = lang;
    if (linkedinbutton && linkedinbutton.parentNode) linkedinbutton.parentNode.appendChild(linkedinscript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { url, counter } = this.props;
    return <script ref={(node) => (this.node = node)} type="IN/Share" data-url={url} data-counter={counter} />;
  }
}
