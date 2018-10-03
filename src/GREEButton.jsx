// @flow
import React from 'react';

type Props = {
  url?: string,
  type?: 0 | 1 | 2 | 3 | 4,
  height?: number,
};

export default function GREEButton({ url = '', type, height, ...others }: Props) {
  return (
    <iframe
      title="gree-button"
      src={`http://share.gree.jp/share?url=${encodeURIComponent(url)}&type=${String(type)}&height=${String(height)}`}
      scrolling="no"
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      style={{ border: 'none', overflow: 'hidden', width: '80px', height: '20px' }}
      {...others}
    />
  );
}

GREEButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.url : '',
  type: 0,
  height: 20,
};
