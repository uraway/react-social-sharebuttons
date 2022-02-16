import { FC, useEffect } from 'react';

declare let window: Window & { Hatena: unknown };

export type HatenaBookmarkButtonProps = {
  url?: string;
  title?: string;
  layout?: 'basic-label-counter' | 'touch-counter' | 'vertical-large';
};

const HatenaBookmarkButton: FC<HatenaBookmarkButtonProps> = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0]?.appendChild(script);
  }, []);

  const { url, title, layout, ...others } = props;

  return (
    <div>
      <a
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
};

HatenaBookmarkButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.location.href : '',
  layout: 'basic-label-counter',
  title: '',
};

export default HatenaBookmarkButton;
