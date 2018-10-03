// @flow
import React from 'react';

type Props = {
  tumblelog: string,
  color?: 'blue' | 'white' | 'black',
};

export default function TumblrFollowButton({ tumblelog, color = 'blue' }: Props) {
  return (
    <iframe
      title="tumblr-follow-button"
      className="btn"
      frameBorder="0"
      scrolling="no"
      allowTransparency="true"
      height="20"
      width="65"
      src={`https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=${tumblelog}&amp;color=${color}`}
    />
  );
}

TumblrFollowButton.defaultProps = {
  color: 'blue',
};

/*
<iframe class="btn" frameborder="0" border="0" scrolling="no" allowtransparency="true" height="20" width="65" src="https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=staff&amp;color=blue"></iframe>
*/
