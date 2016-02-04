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

var PocketButton = function (_React$Component) {
  _inherits(PocketButton, _React$Component);

  function PocketButton(props) {
    _classCallCheck(this, PocketButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PocketButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(PocketButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      var pocketbutton = _reactDom2.default.findDOMNode(this.refs.pocketbutton);
      var pocketscript = document.createElement('script');
      pocketscript.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
      pocketscript.async = true;
      pocketscript.id = 'pocket-btn-js';
      pocketbutton.parentNode.appendChild(pocketscript);

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
      return _react2.default.createElement('a', {
        ref: 'pocketbutton',
        'data-pocket-label': 'pocket',
        'data-pocket-count': this.props.count,
        className: 'pocket-btn',
        'data-lang': 'en'
      });
    }
  }]);

  return PocketButton;
}(_react2.default.Component);

/*
<script type="text/javascript">!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"pocket-btn-js");</script>
*/

PocketButton.PropTypes = { count: _react.PropTypes.string };
exports.default = PocketButton;