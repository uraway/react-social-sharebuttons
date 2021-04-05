import { FC, useEffect } from 'react';

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
  useEffect(() => {
    let script: HTMLScriptElement;

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
  }, [props]);

  const { user, showCount } = props;

  return (
    <a href={`https://twitter.com/${user}`} className="twitter-follow-button" data-show-count={showCount}>
      Follow @{user}
    </a>
  );
};

TwitterFollowButton.defaultProps = {
  showCount: true,
};

export default TwitterFollowButton;
