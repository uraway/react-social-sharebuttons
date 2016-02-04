import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class YouTubeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const youtubebutton = ReactDOM.findDOMNode(this.refs.youtubebutton);
    const youtubescript = document.createElement('script');
    youtubescript.src = 'https://apis.google.com/js/platform.js';
    youtubebutton.parentNode.appendChild(youtubescript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  static PropTypes = {
    channel: PropTypes.string.isRequired,
    layout: PropTypes.string,
    theme: PropTypes.string,
    count: PropTypes.string,
  };

  render() {
    return (
      <div
        ref="youtubebutton"
        className="g-ytsubscribe"
        data-channel={this.props.channel}
        data-layout={this.props.layout}
        data-theme={this.props.theme}
        data-count={this.props.count}
      />
    );
  }
}
