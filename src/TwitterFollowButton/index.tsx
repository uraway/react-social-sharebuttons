import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

declare let twttr: {
  widgets: {
    load: () => void;
  };
};

export type TwitterFollowButtonProps = {
  user: string;
  showCount?: boolean;
};

const TwitterFollowButton: FC<TwitterFollowButtonProps> = (props) => {
  useLayoutEffectOnce(() => {
    let script: HTMLScriptElement | undefined;

    if (typeof twttr === 'undefined') {
      script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.id = 'twitter-wjs';
      document.getElementsByTagName('head')[0]?.appendChild(script);
    } else {
      twttr.widgets.load();
    }

    return () => script?.remove();
  });

  const { user, showCount } = props;

  return (
    <div>
      <a href={`https://twitter.com/${user}`} className="twitter-follow-button" data-show-count={showCount}>
        Follow @{user}
      </a>
    </div>
  );
};

TwitterFollowButton.defaultProps = {
  showCount: true,
};

export default TwitterFollowButton;
