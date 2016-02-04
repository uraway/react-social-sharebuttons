"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TumblrButton = function (_React$Component) {
  _inherits(TumblrButton, _React$Component);

  function TumblrButton(props) {
    _classCallCheck(this, TumblrButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TumblrButton).call(this, props));

    _this.state = { initialized: true };
    return _this;
  }

  _createClass(TumblrButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      this.initialized();
    }
  }, {
    key: "initialized",
    value: function initialized() {
      this.setState({ initialized: true });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("a", {
        className: "tumblr-share-button",
        "data-color": this.props.color,
        "data-notes": this.props.notes,
        href: "https://embed.tumblr.com/share"
      });
    }
  }]);

  return TumblrButton;
}(_react2.default.Component);
/*
<a class="tumblr-share-button" data-color="blue" data-notes="right" href="https://embed.tumblr.com/share"></a>
<script>!function(d,s,id){var js,ajs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://secure.assets.tumblr.com/share-button.js";ajs.parentNode.insertBefore(js,ajs);}}(document, "script", "tumblr-js");</script>
*/

TumblrButton.PropTypes = {
  layout: _react2.default.PropTypes.string,
  notes: _react2.default.PropTypes.string
};
exports.default = TumblrButton;