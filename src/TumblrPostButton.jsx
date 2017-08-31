import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TumblrPostButton extends Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const tumblrbutton = this.node;
    const tumblrscript = document.createElement('script');
    tumblrscript.src = 'https://secure.assets.tumblr.com/share-button.js';
    tumblrscript.id = 'tumblr-js';
    tumblrbutton.parentNode.appendChild(tumblrscript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    return (
      <a
        ref={node => this.node = node}
        className="tumblr-share-button"
        data-color={this.props.color}
        data-notes={this.props.notes}
        href="https://embed.tumblr.com/share"
      >
        Tumber Post Button
      </a>
    );
  }
}

TumblrPostButton.propTypes = {
  color: PropTypes.string,
  notes: PropTypes.string,
};

TumblrPostButton.defaultProps = {
  color: '',
  notes: ''
};

/*
<a class="tumblr-share-button" data-color="blue" data-notes="right" href="https://embed.tumblr.com/share"></a>
<script>!function(d,s,id){var js,ajs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://secure.assets.tumblr.com/share-button.js";ajs.parentNode.insertBefore(js,ajs);}}(document, "script", "tumblr-js");</script>
*/
