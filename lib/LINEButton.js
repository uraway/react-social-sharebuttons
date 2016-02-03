'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LINEButton = function (_React$Component) {
  _inherits(LINEButton, _React$Component);

  function LINEButton(props) {
    _classCallCheck(this, LINEButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LINEButton).call(this, props));

    _this.state = {
      imageURL: '',
      height: '',
      width: ''
    };
    return _this;
  }

  _createClass(LINEButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.image == '20x20') {
        this.setState({
          imageURL: 'http://i.imgur.com/voMN0NH.png',
          height: 20,
          width: 20
        });
      } else if (this.props.image == '30x30') {
        this.setState({
          imageURL: 'http://i.imgur.com/Lkq9vFO.png',
          height: 30,
          width: 30
        });
      } else if (this.props.image == '36x60') {
        this.setState({
          imageURL: 'http://i.imgur.com/5sEp1TC.png',
          height: 60,
          width: 36
        });
      } else if (this.props.image == '40x40') {
        this.setState({
          imageURL: 'http://i.imgur.com/ZoU91JG.png',
          height: 40,
          width: 40
        });
      } else {
        this.setState({
          imageURL: 'http://i.imgur.com/cfjCxrh.png',
          height: 20,
          width: 82
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { href: 'http://line.me/R/msg/text/?' + encodeURIComponent(this.props.text) },
        _react2.default.createElement('img', {
          src: this.state.imageURL,
          style: { height: this.state.height, width: this.state.width },
          alt: 'LINEで送る' })
      );
    }
  }]);

  return LINEButton;
}(_react2.default.Component);

LINEButton.propTypes = {
  image: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string
};
exports.default = LINEButton;