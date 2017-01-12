import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

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
      const twitterbutton = ReactDOM.findDOMNode(this.refs.twitterbutton);
      const twitterscript = document.createElement('script');
      twitterscript.src = '//platform.twitter.com/widgets.js';
      twitterscript.async = true;
      twitterscript.id = 'twitter-wjs';
      twitterbutton.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load();
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  static PropTypes = {
    user: PropTypes.string.isRequired,
    text: PropTypes.text,
  };

  render() {
    return (
      <a
        ref="twitterbutton"
        href={'https://twitter.com/intent/tweet?screen_name=' + this.props.user + '&text=' + this.props.text}
        className="twitter-mention-button"
      >
        Tweet to {this.props.user}
      </a>
    );
  }
}

/*
<a href="https://twitter.com/intent/tweet?screen_name=uraway_&text=text" class="twitter-mention-button">Tweet to @uraway_</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
*/
