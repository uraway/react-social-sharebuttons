import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GREEButton extends Component {
  render() {
    return (
      <iframe
        title="gree-button"
        src={`http://share.gree.jp/share?url=${encodeURIComponent(this.props.url)}&type=${this.props.type}&height=20`}
        scrolling="no"
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        allowTransparency
        style={{ border: 'none', overflow: 'hidden', width: '80px', height: '20px' }}
      />
    );
  }
}

GREEButton.propTypes = {
  url: PropTypes.string,
  type: PropTypes.number,
};

GREEButton.defaultProps = {
  url: (typeof window !== 'undefined' ? window.url : ''),
  type: 0
};
