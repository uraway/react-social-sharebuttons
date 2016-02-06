import React from 'react';

export default class GithubButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe
        src="https://ghbtns.com/github-btn.html?user=uraway&repo=react-social-sharebuttons&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    );
  }
}
