import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FacebookButton extends Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof FB === 'undefined') {
      const facebookbutton = this.node;
      const facebookscript = document.createElement('script');
      facebookscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
      facebookscript.id = 'facebook-jssdk';
      facebookbutton.parentNode.appendChild(facebookscript);
    } else {
      FB.XFBML.parse(); // eslint-disable-line
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    return (
      <div
        ref={node => this.node = node}
        className="fb-like"
        data-href={this.props.url}
        data-layout={this.props.layout}
        data-action={this.props.action}
        data-show-faces={this.props.showFaces}
        data-share={this.props.share}
      />
    );
  }
}

FacebookButton.propTypes = {
  url: PropTypes.string,
  layout: PropTypes.string,
  action: PropTypes.string,
  showFaces: PropTypes.bool,
  share: PropTypes.bool,
};

FacebookButton.defaultProps = {
  url: (typeof window !== 'undefined' ? window.url : ''),
  layout: '',
  action: '',
  showFaces: false,
  share: false
};

/*
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
 */
