import React, { PropTypes } from 'react';

export default class TwitterTweetToButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof twttr === 'undefined') {
      const twitterbutton = this.node;
      const twitterscript = document.createElement('script');
      twitterscript.src = '//platform.twitter.com/widgets.js';
      twitterscript.async = true;
      twitterscript.id = 'twitter-wjs';
      twitterbutton.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load(); // eslint-disable-line
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    return (
      <a
        ref={node => this.node = node}
        href={`https://twitter.com/intent/tweet?screen_name=${this.props.user}&text=${this.props.text}`}
        className="twitter-mention-button"
      >
        Tweet to {this.props.user}
      </a>
    );
  }
}

TwitterTweetToButton.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string,
};

TwitterTweetToButton.defaultProps = {
  text: ''
};

/*
<a href="https://twitter.com/intent/tweet?screen_name=uraway_&text=text" class="twitter-mention-button">Tweet to @uraway_</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
*/
