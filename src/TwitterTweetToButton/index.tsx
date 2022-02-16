import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

export type TwitterTweetToButtonProps = {
  user: string;
  text?: string;
};

const TwitterTweetToButton: FC<TwitterTweetToButtonProps> = (props) => {
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

  const { user, text } = props;
  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?screen_name=${user}&text=${text || ''}`}
        className="twitter-mention-button"
      >
        Tweet to {user}
      </a>
    </div>
  );
};

export default TwitterTweetToButton;
