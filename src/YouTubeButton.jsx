import React from 'react';

export default class YouTubeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const youtubebutton = this.node;
    const youtubescript = document.createElement('script');
    youtubescript.src = 'https://apis.google.com/js/platform.js';
    youtubebutton.parentNode.appendChild(youtubescript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    return (
      <div
        ref={node => this.node = node}
        className="g-ytsubscribe"
        data-channel={this.props.channel}
        data-layout={this.props.layout}
        data-theme={this.props.theme}
        data-count={this.props.count}
      />
    );
  }
}

YouTubeButton.propTypes = {
  channel: React.PropTypes.string.isRequired,
  layout: React.PropTypes.string,
  theme: React.PropTypes.string,
  count: React.PropTypes.string,
};

YouTubeButton.defaultProps = {
  layout: '',
  theme: '',
  count: ''
};
