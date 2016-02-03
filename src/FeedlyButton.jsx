import React from 'react';

export default class FeedlyButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png',
      width: '56px',
      height: '131px',
    });
  }

  componentDidMount() {
    this.imageSet();
  }

  static PropTypes = {
    feedurl: React.PropTypes.string,
    image: React.PropTypes.string,
  };

  imageSet() {
    if (this.props.image === 'rectangle-volume-big') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png',
        height: '56px',
        width: '131px',
      });
    } else if (this.props.image === 'rectangle-volume-medium') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png',
        height: '28px',
        width: '71px',
      });
    } else if (this.props.image === 'rectangle-volume-small') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-small_2x.png',
        height: '20px',
        width: '66px',
      });
    } else if (this.props.image === 'rectangle-flat-big') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png',
        height: '28px',
        width: '71px',
      });
    } else if (this.props.image === 'rectangle-flat-medium') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.png',
        height: '28px',
        width: '71px',
      });
    } else if (this.props.image === 'rectangle-flat-small') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png',
        height: '20px',
        width: '66px',
      });
    } else if (this.props.image === 'square-volume') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-square-volume_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'flat-green') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-green_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'circle-flat-green') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-green_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'logo-green') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'square-flat-black') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-black_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'circle-flat-black') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-black_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'logo-black') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-logo-black_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'square-flat-white') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-white_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'circle-flat-white') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-white_2x.png',
        height: '28px',
        width: '28px',
      });
    } else if (this.props.image === 'logo-white') {
      this.setState({
        image: 'http://s3.feedly.com/img/follows/feedly-follow-logo-white_2x.png',
        height: '28px',
        width: '28px',
      });

    }
  }

  render() {
    return (
      <a href={'http://cloud.feedly.com/#subscription%2Ffeed%2F' + encodeURIComponent(this.props.feedurl)} target="blank">
        <img src={this.state.image} alt="follow us in feedly" style={{ width:this.state.width, height:this.state.height }}/>
      </a>
    );
  }

}

/*
encoded
http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Furaway.hatenablog.com%2Ffeed
http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Furaway.hatenablog.com%2Ffeed
decoded
http://cloud.feedly.com/#subscription/feed/http://uraway.hatenablog.com/feed
*/
