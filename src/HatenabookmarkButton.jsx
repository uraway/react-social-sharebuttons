// @flow
import React, { Component } from 'react';

type Props = {
  url?: string,
  title?: string,
  layout?: 'default' | 'simple-balloon' | 'standard-balloon',
};

type State = {
  initialized: boolean,
};

export default class HatenabookmarkButton extends Component<Props, State> {
  node = null;

  static defaultProps = { url: typeof window !== 'undefined' ? window.url : '', layout: '', title: '' };

  constructor(props: Props) {
    super(props);
    this.state = { initialized: false };
  }

  componentDidMount() {
    const { initialized } = this.state;
    if (initialized) {
      return;
    }

    const hatenabutton = this.node;
    const hatenascript = document.createElement('script');
    hatenascript.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    hatenascript.type = 'text/javascript';
    if (hatenabutton !== null && hatenabutton.parentNode) {
      hatenabutton.parentNode.appendChild(hatenascript);
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { url, title, layout, ...others } = this.props;
    return (
      <a
        ref={(node) => (this.node = node)}
        href={`http://b.hatena.ne.jp/entry/${url || ''}`}
        className="hatena-bookmark-button"
        data-hatena-bookmark-title={title}
        data-hatena-bookmark-layout={layout}
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          style={{ width: 20, height: 20, border: 'none' }}
          {...others}
        />
      </a>
    );
  }
}
