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

var GooglePlusButton = function (_React$Component) {
  _inherits(GooglePlusButton, _React$Component);

  function GooglePlusButton(props) {
    _classCallCheck(this, GooglePlusButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GooglePlusButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(GooglePlusButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      var googlebutton = _reactDom2.default.findDOMNode(this.refs.googlebutton);
      var googlescript = document.createElement('script');
      googlescript.src = 'https://apis.google.com/js/platform.js';
      googlescript.async = 'defer';
      googlebutton.parentNode.appendChild(googlescript);

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
        ref: 'googlebutton',
        className: 'g-plusone',
        'data-annotation': 'inline',
        dataWidth: '300',
        'data-href': this.props.url
      });
    }
  }]);

  return GooglePlusButton;
}(_react2.default.Component);

/*
<!-- head 内か、body 終了タグの直前に次のタグを貼り付けてください。 -->
<script src="https://apis.google.com/js/platform.js" async defer>
  {lang: 'ja'}
</script>

<!-- +1 ボタン を表示したい位置に次のタグを貼り付けてください。 -->
<div class="g-plusone" data-annotation="inline" data-width="300" data-href="http://hatenablog.com"></div>
*/

GooglePlusButton.PropTypes = {
  url: _react2.default.PropTypes.string
};
exports.default = GooglePlusButton;