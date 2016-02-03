'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedlyButton = function (_React$Component) {
  _inherits(FeedlyButton, _React$Component);

  function FeedlyButton(props) {
    _classCallCheck(this, FeedlyButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FeedlyButton).call(this, props));

    _this.state = {
      layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png',
      width: '56px',
      height: '131px'
    };
    return _this;
  }

  _createClass(FeedlyButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.layoutSet();
    }
  }, {
    key: 'layoutSet',
    value: function layoutSet() {
      if (this.props.layout === 'rectangle-volume-big') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-big_2x.png',
          height: '56px',
          width: '131px'
        });
      } else if (this.props.layout === 'rectangle-volume-medium') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-medium_2x.png',
          height: '28px',
          width: '71px'
        });
      } else if (this.props.layout === 'rectangle-volume-small') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-volume-small_2x.png',
          height: '20px',
          width: '66px'
        });
      } else if (this.props.layout === 'rectangle-flat-big') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png',
          height: '28px',
          width: '71px'
        });
      } else if (this.props.layout === 'rectangle-flat-medium') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-medium_2x.png',
          height: '28px',
          width: '71px'
        });
      } else if (this.props.layout === 'rectangle-flat-small') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png',
          height: '20px',
          width: '66px'
        });
      } else if (this.props.layout === 'square-volume') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-volume_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'flat-green') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-green_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'circle-flat-green') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-green_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'logo-green') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'square-flat-black') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-black_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'circle-flat-black') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-black_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'logo-black') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-logo-black_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'square-flat-white') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-square-flat-white_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'circle-flat-white') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-circle-flat-white_2x.png',
          height: '28px',
          width: '28px'
        });
      } else if (this.props.layout === 'logo-white') {
        this.setState({
          layout: 'http://s3.feedly.com/img/follows/feedly-follow-logo-white_2x.png',
          height: '28px',
          width: '28px'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { href: 'http://cloud.feedly.com/#subscription%2Ffeed%2F' + encodeURIComponent(this.props.feedurl), target: 'blank' },
        _react2.default.createElement('img', { src: this.state.layout, alt: 'follow us in feedly', style: { width: this.state.width, height: this.state.height } })
      );
    }
  }]);

  return FeedlyButton;
}(_react2.default.Component);

/*
encoded
http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Furaway.hatenablog.com%2Ffeed
http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Furaway.hatenablog.com%2Ffeed
decoded
http://cloud.feedly.com/#subscription/feed/http://uraway.hatenablog.com/feed
*/

FeedlyButton.PropTypes = {
  feedurl: _react2.default.PropTypes.string,
  layout: _react2.default.PropTypes.string
};
exports.default = FeedlyButton;