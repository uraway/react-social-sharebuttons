import React from 'react';
import ReactDOM from 'react-dom';

export default class LINEButton extends React.Component {
  static propTypes = {
    image: React.PropTypes.string,
    text: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = ({
      imageURL: '',
      height: '',
      width: '',
    });
  }

  componentDidMount() {
    if (this.props.image == '20x20') {
      this.setState({
        imageURL: 'http://i.imgur.com/voMN0NH.png',
        height: 20,
        width: 20,
      });
    } else if (this.props.image == '30x30') {
      this.setState({
        imageURL: 'http://i.imgur.com/Lkq9vFO.png',
        height: 30,
        width: 30,
      });
    } else if (this.props.image == '36x60') {
      this.setState({
        imageURL: 'http://i.imgur.com/5sEp1TC.png',
        height: 60,
        width: 36,
      });
    } else if (this.props.image == '40x40') {
      this.setState({
        imageURL: 'http://i.imgur.com/ZoU91JG.png',
        height: 40,
        width: 40,
      });
    } else {
      this.setState({
        imageURL: 'http://i.imgur.com/cfjCxrh.png',
        height: 20,
        width: 82,
      });
    }
  }

  render() {
    return (
      <a href={'http://line.me/R/msg/text/?' + encodeURIComponent(this.props.text)}>
      <img
        src={this.state.imageURL}
        style={{ height:this.state.height, width:this.state.width }}
        alt="LINEで送る" /></a>
    );
  }
}
