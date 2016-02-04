import React from 'react';
import ReactDOM from 'react-dom';

export default class FacebookButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof FB === 'undefined') {
      const facebookbutton = ReactDOM.findDOMNode(this.refs.facebookbutton);
      const facebookscript = document.createElement('script');
      facebookscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
      facebookscript.id = 'facebook-jssdk';
      facebookbutton.parentNode.appendChild(facebookscript);
    } else {
      FB.XFBML.parse();
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  static PropTypes = {
    url: React.PropTypes.string,
    layout: React.PropTypes.string,
    action: React.PropTypes.string,
    showFaces: React.PropTypes.bool,
    share: React.PropTypes.bool,
  };

  render() {
    return (
      <div
        ref="facebookbutton"
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
