import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GithubButton extends Component {
  render() {
    return (
      <iframe
        title="github-btn"
        src={`https://ghbtns.com/github-btn.html?user=${this.props.user}&repo=${this.props.repo}&type=${this.props.type}&count=${this.props.count}&size=${this.props.size}`}
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    );
  }
}

GithubButton.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  type: PropTypes.string,
  count: PropTypes.string,
  size: PropTypes.string
};

GithubButton.defaultProps = {
  type: 'star',
  count: 'true',
  size: 'small'
};
