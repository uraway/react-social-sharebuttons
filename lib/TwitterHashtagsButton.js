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

var TwitterHashtagButton = function (_React$Component) {
  _inherits(TwitterHashtagButton, _React$Component);

  function TwitterHashtagButton(props) {
    _classCallCheck(this, TwitterHashtagButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TwitterHashtagButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(TwitterHashtagButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      if (typeof twttr === 'undefined') {
        var twitterbutton = _reactDom2.default.findDOMNode(this.refs.twitterbutton);
        var twitterscript = document.createElement('script');
        twitterscript.src = '//platform.twitter.com/widgets.js';
        twitterscript.async = true;
        twitterscript.id = 'twitter-wjs';
        twitterbutton.parentNode.appendChild(twitterscript);
      } else {
        twttr.widgets.load();
      }

      this.initialized();
    }
  }, {
    key: 'initialized',
    value: function initialized() {
      this.setState({ initialized: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        {
          href: 'https://twitter.com/intent/tweet?button_hashtag=TwitterStories&text=text',
          'class': 'twitter-hashtag-button',
          'data-related': 'uraway_' },
        'Tweet ',
        this.props.hashtag
      );
    }
  }]);

  return TwitterHashtagButton;
}(_react2.default.Component);

/*
<a href="https://twitter.com/intent/tweet?button_hashtag=TwitterStories&text=text" class="twitter-hashtag-button" data-related="uraway_">Tweet #TwitterStories</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
*/

TwitterHashtagButton.PropTypes = {
  url: _react.PropTypes.string,
  showCount: _react.PropTypes.bool
};
exports.default = TwitterHashtagButton;