import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LinkedinButton extends Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const linkedinbutton = this.node;
    const linkedinscript = document.createElement('script');
    linkedinscript.src = '//platform.linkedin.com/in.js';
    linkedinscript.type = 'text/javascript';
    this.langSet(linkedinscript);
    linkedinbutton.parentNode.appendChild(linkedinscript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  langSet(linkedinscript) {
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

  render() {
    return (
      <script
        ref={node => this.node = node}
        type="IN/Share"
        data-url={this.props.url}
        data-counter={this.props.counter}
      />
    );
  }
}

LinkedinButton.propTypes = {
  url: PropTypes.string,
  counter: PropTypes.string,
  lang: PropTypes.string,
};

LinkedinButton.defaultProps = {
  url: (typeof window !== 'undefined' ? window.url : ''),
  counter: '',
  lang: 'ja'
};
