import { Component, createRef, RefObject } from 'react';

export type HatenaBookmarkButtonProps = {
  url?: string;
  title?: string;
  layout?: 'basic-label-counter' | 'touch-counter' | 'vertical-large';
};

export default class HatenaBookmarkButton extends Component<HatenaBookmarkButtonProps> {
  ref: RefObject<HTMLAnchorElement>;

  static defaultProps = { url: typeof window !== 'undefined' ? window.location.href : '', layout: '', title: '' };

  constructor(props: HatenaBookmarkButtonProps) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount(): void {
    const s = document.createElement('script');
    s.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    s.type = 'text/javascript';
    if (this.ref.current?.parentNode) this.ref.current.parentNode.appendChild(s);
  }

  render(): JSX.Element {
    const { url, title, layout, ...others } = this.props;
    return (
      <div>
        <a
          ref={this.ref}
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
