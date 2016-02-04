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

var TumblrFollowButton = function (_Component) {
  _inherits(TumblrFollowButton, _Component);

  function TumblrFollowButton(props) {
    _classCallCheck(this, TumblrFollowButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TumblrFollowButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(TumblrFollowButton, [{
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
      return _react2.default.createElement("iframe", {
        ref: "tumblrfollowbutton",
        className: "btn",
        frameBorder: "0",
        border: "0",
        scrolling: "no",
        allowTransparency: "true",
        height: "20",
        width: "65",
        src: 'https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=' + this.props.tumblelog + '&amp;color=' + this.props.color
      });
    }
  }]);

  return TumblrFollowButton;
}(_react.Component);
/*
<iframe class="btn" frameborder="0" border="0" scrolling="no" allowtransparency="true" height="20" width="65" src="https://platform.tumblr.com/v2/follow_button.html?type=follow&amp;tumblelog=staff&amp;color=blue"></iframe>
*/

TumblrFollowButton.PropTypes = {
  color: _react.PropTypes.string,
  tumblelog: _react.PropTypes.string
};
exports.default = TumblrFollowButton;