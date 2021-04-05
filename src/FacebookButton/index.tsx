import { FC, useEffect } from 'react';

declare let FB: {
  XFBML: {
    parse: () => void;
  };
};

export type FacebookButtonProps = {
  url?: string;
  layout?: 'standard' | 'box_count' | 'button_count' | 'button';
  action?: 'like' | 'recommended';
  showFaces?: boolean;
  share?: boolean;
};

const FacebookButton: FC<FacebookButtonProps> = (props) => {
  useEffect(() => {
    let script: HTMLScriptElement;
    if (typeof FB === 'undefined') {
      script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
      script.id = 'facebook-jssdk';
      document.getElementsByTagName('head')[0]?.appendChild(script);
    } else {
      FB.XFBML.parse();
    }

    return () => script?.remove();
  }, [props]);
  const { url, layout, action, showFaces, share, ...others } = props;
  return (
    <div
      className="fb-like"
      data-href={url}
      data-layout={layout}
      data-action={action}
      data-show-faces={showFaces}
      data-share={share}
      {...others}
    />
  );
};

FacebookButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.location.href : '',
  layout: 'standard',
  action: 'like',
  showFaces: false,
  share: false,
};

export default FacebookButton;
