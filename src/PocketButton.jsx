import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class PocketButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    const pocketbutton = ReactDOM.findDOMNode(this.refs.pocketbutton);
    const pocketscript = document.createElement('script');
    pocketscript.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
    pocketscript.async = true;
    pocketscript.id = 'pocket-btn-js';
    pocketbutton.parentNode.appendChild(pocketscript);

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  static PropTypes = { count: PropTypes.string };

  render() {
    return (
      <a
        ref="pocketbutton"
        data-pocket-label="pocket"
        data-pocket-count={this.props.count}
        className="pocket-btn"
        data-lang="en"
      />
    );
  }
}

/*
<script type="text/javascript">!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src="https://widgets.getpocket.com/v1/j/btn.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"pocket-btn-js");</script>
*/
