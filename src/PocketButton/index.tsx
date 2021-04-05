import { FC, useEffect } from 'react';

export type PocketButtonProps = {
  count?: 'horizontal' | 'vertical' | 'none';
};

const PocketButton: FC<PocketButtonProps> = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
    script.async = true;
    script.id = 'pocket-btn-js';
    document.getElementsByTagName('head')[0]?.appendChild(script);

    return () => script?.remove();
  }, []);
  const { count, ...others } = props;
  return (
    <a data-pocket-label="pocket" data-pocket-count={count} className="pocket-btn" data-lang="en" {...others}>
      Pocket
    </a>
  );
};

export default PocketButton;
