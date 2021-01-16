// @flow
import React, { Component } from 'react';

type Props = {
  url?: string,
  counter?: 'top' | 'right',
  lang?: string,
};

export default class LinkedinButton extends Component<Props> {
  node = null;

  static defaultProps = {
    url: typeof window !== 'undefined' ? window.url : '',
    counter: '',
    lang: 'ja',
  };

  componentDidMount() {
    const { lang } = this.props;

    if (window.IN) delete window.IN;
    const s = document.createElement('script');
    s.src = '//platform.linkedin.com/in.js';
    s.type = 'text/javascript';
    if (lang) s.lang = lang;
    if (this.node && this.node.parentNode) this.node.parentNode.appendChild(s);
  }

  render() {
    const { url, counter } = this.props;
    return (
      <div>
        <script ref={(node) => (this.node = node)} type="IN/Share" data-url={url} data-counter={counter} />
      </div>
    );
  }
}
