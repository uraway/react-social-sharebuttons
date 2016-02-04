import React, { Component, PropTypes } from 'react';

export default class TumblrFollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  static PropTypes = {
    color: PropTypes.string,
    tumblelog: PropTypes.string,
  };

  render() {
    return (
      <iframe
        ref="tumblrfollowbutton"
        className="btn"
        frameBorder="0"
        border="0"
        scrolling="no"
        allowTransparency="true"
        height="20"
        width="65"
        src={'https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=' + this.props.tumblelog + '&amp;color=' + this.props.color}
      />
    );
  }
}
/*
<iframe class="btn" frameborder="0" border="0" scrolling="no" allowtransparency="true" height="20" width="65" src="https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=staff&amp;color=blue"></iframe>
*/
