import React from 'react';

export default class GithubButton extends React.Component {
  constructor(props) {
    super(props);
  }

  static PropTypes = {
    user: React.PropTypes.string.isRequired,
    repo: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
    count: React.PropTypes.bool,
    size: React.PropTypes.string,
  };

  render() {
    return (
      <iframe
        src={"https://ghbtns.com/github-btn.html?user=" + this.props.user + "&repo=" + this.props.repo + "&type=" + this.props.type + "&count=" + this.props.count + "&size=" + this.props.size}
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    );
  }
}
