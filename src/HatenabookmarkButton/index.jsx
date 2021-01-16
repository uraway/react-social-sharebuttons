// @flow
import React, { Component } from 'react';

type Props = {
  url?: string,
  title?: string,
  layout?: 'default' | 'simple-balloon' | 'standard-balloon',
};

export default class HatenaBookmarkButton extends Component<Props> {
  node = null;

  static defaultProps = { url: typeof window !== 'undefined' ? window.url : '', layout: '', title: '' };

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    s.type = 'text/javascript';
    if (this.node !== null && this.node.parentNode) {
      this.node.parentNode.appendChild(s);
    }
  }

  render() {
    const { url, title, layout, ...others } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}
