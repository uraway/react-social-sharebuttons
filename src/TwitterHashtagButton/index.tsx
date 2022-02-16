import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

export type TwitterHashtagButtonProps = {
  hashtag: string;
  text?: string;
};

const TwitterHashtagButton: FC<TwitterHashtagButtonProps> = (props) => {
  useLayoutEffectOnce(() => {
    let script: HTMLScriptElement | undefined;

    if (typeof twttr === 'undefined') {
      script = document.createElement('script');
      script.src = '//platform.twitter.com/widgets.js';
      script.async = true;
      script.id = 'twitter-wjs';
      document.getElementsByTagName('head')[0]?.appendChild(script);
    } else {
      twttr.widgets.load();
    }

    return () => script?.remove();
  });
  const { hashtag, text } = props;
  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&text=${text || ''}`}
        className="twitter-hashtag-button"
      >
        Tweet {hashtag}
      </a>
    </div>
  );
};

export default TwitterHashtagButton;
