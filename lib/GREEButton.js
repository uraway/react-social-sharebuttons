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

var GREEButton = function (_React$Component) {
  _inherits(GREEButton, _React$Component);

  function GREEButton(props) {
    _classCallCheck(this, GREEButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GREEButton).call(this, props));
  }

  _createClass(GREEButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('iframe', {
        src: 'http://share.gree.jp/share?url=' + encodeURIComponent(this.props.url) + '&type=' + this.props.type + '&height=20',
        scrolling: 'no',
        frameBorder: '0',
        marginWidth: '0',
        marginHeight: '0',
        allowTransparency: true,
        style: { border: 'none', overflow: 'hidden', width: '80px', height: '20px' }
      });
    }
  }]);

  return GREEButton;
}(_react2.default.Component);
/* encodeURIComponent */

GREEButton.PropTypes = {
  url: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.number.isRequired
};
exports.default = GREEButton;