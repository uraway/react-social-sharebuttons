import React from 'react';

export default class HatenabookmarkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const hatenabutton = this.node;
    const hatenascript = document.createElement('script');
    hatenascript.src = 'https://b.st-hatena.com/js/bookmark_button.js';
    hatenascript.type = 'text/javascript';
    hatenabutton.parentNode.appendChild(hatenascript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    return (
      <a
        ref={node => this.node = node}
        href={`http://b.hatena.ne.jp/entry/${this.props.url}`}
        className="hatena-bookmark-button"
        data-hatena-bookmark-title={this.props.title}
        data-hatena-bookmark-layout={this.props.layout}
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          style={{ width: 20, height: 20, border: 'none' }}
        />
      </a>
    );
  }
}

HatenabookmarkButton.propTypes = {
  url: React.PropTypes.string,
  layout: React.PropTypes.string,
  title: React.PropTypes.string,
};

HatenabookmarkButton.defaultProps = {
  url: (typeof window !== 'undefined' ? window.url : ''),
  layout: '',
  title: ''
};
