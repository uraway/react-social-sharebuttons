import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton, HatenabookmarkButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    let text = 'LINEで送る';
    let image = '20x20';
    return (
      <div>
        <HatenabookmarkButton />
        <LINEButton text={text} image={image} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
