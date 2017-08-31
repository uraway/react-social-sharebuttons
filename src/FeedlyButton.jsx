import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedlyButton extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      layout: '',
      width: '56px',
      height: '131px',
    });
  }

  componentDidMount() {
    this.layoutSet();
  }

  layoutSet() {
    if (this.props.layout === 'rectangle-volume-big') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png',
        height: '56px',
        width: '131px',
      });
    } else if (this.props.layout === 'rectangle-volume-medium') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png',
        height: '28px',
        width: '71px',
      });
    } else if (this.props.layout === 'rectangle-volume-small') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-small_2x.png',
        height: '20px',
        width: '66px',
      });
    } else if (this.props.layout === 'rectangle-flat-big') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png',
        height: '28px',
        width: '71px',
      });
    } else if (this.props.layout === 'rectangle-flat-medium') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.png',
        height: '28px',
        width: '71px',
      });
    } else if (this.props.layout === 'rectangle-flat-small') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png',
        height: '20px',
        width: '66px',
      });
    } else if (this.props.layout === 'square-volume') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-volume_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'flat-green') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-green_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'circle-flat-green') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-green_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'logo-green') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'square-flat-black') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-black_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'circle-flat-black') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-black_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'logo-black') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-logo-black_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'square-flat-white') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-white_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'circle-flat-white') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-white_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.layout === 'logo-white') {
      this.setState({
        layout: 'http://s3.feedly.com/img/follows/feedly-follow-logo-white_2x.png',
        height: '28px',
        width: '28px',
      });
    }
  }

  render() {
    return (
      <a href={`http://cloud.feedly.com/#subscription%2Ffeed%2F${encodeURIComponent(this.props.feedurl)}`} target="blank">
        <img src={this.state.layout} alt="follow us in feedly" style={{ width: this.state.width, height: this.state.height }} />
      </a>
    );
  }
}

FeedlyButton.propTypes = {
  feedurl: PropTypes.string.isRequired,
  layout: PropTypes.string,
};

FeedlyButton.defaultProps = {
  layout: 'rectangle-volume-small'
};

/*
encoded
http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Furaway.hatenablog.com%2Ffeed
http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Furaway.hatenablog.com%2Ffeed
decoded
http://cloud.feedly.com/#subscription/feed/http://uraway.hatenablog.com/feed
*/
