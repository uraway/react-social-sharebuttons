// @flow
import React from 'react';

type Props = {
  user: string,
  repo: string,
  size?: 'large' | 'small',
  count?: boolean,
};

export default function GithubButton({ user, repo, size = 'small', count = true, ...others }: Props) {
  return (
    <iframe
      title="github-btn"
      src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&count=${String(count)}&size=${size}&type=star`}
      frameBorder="0"
      scrolling="0"
      width="160px"
      height="30px"
      {...others}
    />
  );
}

GithubButton.defaultProps = {
  count: 'true',
  size: 'small',
};
