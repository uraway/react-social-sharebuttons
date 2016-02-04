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

var FacebookButton = function (_React$Component) {
  _inherits(FacebookButton, _React$Component);

  function FacebookButton(props) {
    _classCallCheck(this, FacebookButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FacebookButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(FacebookButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      if (typeof FB === 'undefined') {
        var facebookbutton = _reactDom2.default.findDOMNode(this.refs.facebookbutton);
        var facebookscript = document.createElement('script');
        facebookscript.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
        facebookscript.id = 'facebook-jssdk';
        facebookbutton.parentNode.appendChild(facebookscript);
      } else {
        FB.XFBML.parse();
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
      return _react2.default.createElement('div', {
        ref: 'facebookbutton',
        className: 'fb-like',
        'data-href': this.props.url,
        'data-layout': this.props.layout,
        'data-action': this.props.action,
        'data-show-faces': this.props.showFaces,
        'data-share': this.props.share
      });
    }
  }]);

  return FacebookButton;
}(_react2.default.Component);

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

FacebookButton.PropTypes = {
  url: _react2.default.PropTypes.string,
  layout: _react2.default.PropTypes.string,
  action: _react2.default.PropTypes.string,
  showFaces: _react2.default.PropTypes.bool,
  share: _react2.default.PropTypes.bool
};
exports.default = FacebookButton;