import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class TwitterTweetButton extends React.Component {
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
    url: PropTypes.string,
    text: PropTypes.string,
    via: PropTypes.string,
    hashtags: PropTypes.string,
  };

  render() {
    return (
      <a
        ref="twitterbutton"
        href="https://twitter.com/share"
        className="twitter-share-button"
        data-url={this.props.url}
        data-text={this.props.text}
        data-via={this.props.user}
        data-hashtags={this.props.hashtag}
      >
        Tweet
      </a>
    );
  }
}

/*
<a href="https://twitter.com/share" class="twitter-share-button" data-url="pageurl" data-text="pagetitle" data-via="uraway_" data-size="large" data-hashtags="hashtag" data-dnt="true">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
*/
