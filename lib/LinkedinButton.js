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

var LinkedinButton = function (_React$Component) {
  _inherits(LinkedinButton, _React$Component);

  function LinkedinButton(props) {
    _classCallCheck(this, LinkedinButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LinkedinButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(LinkedinButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      var linkedinbutton = _reactDom2.default.findDOMNode(this.refs.linkedinbutton);
      var linkedinscript = document.createElement('script');
      linkedinscript.src = '//platform.linkedin.com/in.js';
      linkedinscript.type = 'text/javascript';
      this.langSet(linkedinscript);
      linkedinbutton.parentNode.appendChild(linkedinscript);

      this.initialized();
    }
  }, {
    key: 'initialized',
    value: function initialized() {
      this.setState({ initialized: true });
    }
  }, {
    key: 'langSet',
    value: function langSet(linkedinscript) {
      if (this.props.lang === 'ar') {
        linkedinscript.text = 'lang: ar_AE';
      } else if (this.props.lang === 'zh_CN') {
        linkedinscript.text = 'lang: zh_CN';
      } else if (this.props.lang === 'zh_TW') {
        linkedinscript.text = 'lang: zh_TW';
      } else if (this.props.lang === 'cs') {
        linkedinscript.text = 'lang: cs_CZ';
      } else if (this.props.lang === 'da') {
        linkedinscript.text = 'lang: da_DK';
      } else if (this.props.lang === 'nl') {
        linkedinscript.text = 'lang: nl_NL';
      } else if (this.props.lang === 'fr') {
        linkedinscript.text = 'lang: fr_FR';
      } else if (this.props.lang === 'de') {
        linkedinscript.text = 'lang: de_DE';
      } else if (this.props.lang === 'in') {
        linkedinscript.text = 'lang: in_ID';
      } else if (this.props.lang === 'it') {
        linkedinscript.text = 'lang: it_IT';
      } else if (this.props.lang === 'ja') {
        linkedinscript.text = 'lang: ja_JP';
      } else if (this.props.lang === 'ko') {
        linkedinscript.text = 'lang: ko_KR';
      } else if (this.props.lang === 'ms') {
        linkedinscript.text = 'lang: ms_MY';
      } else if (this.props.lang === 'no') {
        linkedinscript.text = 'lang: no_NO';
      } else if (this.props.lang === 'pl') {
        linkedinscript.text = 'lang: pl_PL';
      } else if (this.props.lang === 'pt') {
        linkedinscript.text = 'lang: pt_BR';
      } else if (this.props.lang === 'ro') {
        linkedinscript.text = 'lang: ro_RO';
      } else if (this.props.lang === 'ru') {
        linkedinscript.text = 'lang: ru_RU';
      } else if (this.props.lang === 'es') {
        linkedinscript.text = 'lang: es_ES';
      } else if (this.props.lang === 'sv') {
        linkedinscript.text = 'sv_SE';
      } else if (this.props.lang === 'tl') {
        linkedinscript.text = 'lang: tl_PH';
      } else if (this.props.lang === 'th') {
        linkedinscript.text = 'lang: th_TH';
      } else if (this.props.lang === 'tr') {
        linkedinscript.text = 'lang: tr_TR';
      } else {
        linkedinscript.text = 'lang: en_US';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('script', {
        ref: 'linkedinbutton',
        type: 'IN/Share',
        'data-url': this.props.url,
        'data-counter': this.props.counter
      });
    }
  }]);

  return LinkedinButton;
}(_react2.default.Component);

LinkedinButton.PropTypes = {
  url: _react2.default.PropTypes.string,
  counter: _react2.default.PropTypes.string,
  lang: _react2.default.PropTypes.string
};
exports.default = LinkedinButton;