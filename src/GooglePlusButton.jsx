import React from 'react';
import ReactDOM from 'react-dom';

export default class GooglePlusButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const googlebutton = ReactDOM.findDOMNode(this.refs.googlebutton);
    const googlescript = document.createElement('script');
    googlescript.src = 'https://apis.google.com/js/platform.js';
    googlescript.async = 'defer';
    googlebutton.parentNode.appendChild(googlescript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  static PropTypes = {
    url: React.PropTypes.string,
  };

  render() {
    return (
      <div
        ref="googlebutton"
        className="g-plusone"
        data-annotation="inline"
        dataWidth="300"
        data-href={this.props.url}
      />
    );
  }
}


/*
<!-- head 内か、body 終了タグの直前に次のタグを貼り付けてください。 -->
<script src="https://apis.google.com/js/platform.js" async defer>
  {lang: 'ja'}
</script>

<!-- +1 ボタン を表示したい位置に次のタグを貼り付けてください。 -->
<div class="g-plusone" data-annotation="inline" data-width="300" data-href="http://hatenablog.com"></div>
*/
