import { FC } from 'react';
import { useLayoutEffectOnce } from '../utils';

export type LinkedInButtonProps = {
  url?: string;
  counter?: 'top' | 'right';
  lang?: string;
};

declare let window: Window & { IN: unknown };

const LinkedInButton: FC<LinkedInButtonProps> = (props) => {
  const { lang, url, counter } = props;

  useLayoutEffectOnce(() => {
    if (window.IN) delete window.IN;
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.type = 'text/javascript';
    if (lang) script.lang = lang;
    document.getElementsByTagName('head')[0]?.appendChild(script);

    return () => script?.remove();
  });

  return (
    <div>
      <script type="IN/Share" data-url={url} data-counter={counter} />
    </div>
  );
};

LinkedInButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.location.href : '',
  counter: 'right',
  lang: 'ja',
};

export default LinkedInButton;
