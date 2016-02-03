import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton, HatenabookmarkButton, FeedlyButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    let text = 'LINEで送る';
    let lineimage = '20x20';
    let url = 'http://uraway.hatenablog.com/';
    let feedurl = 'http://uraway.hatenablog.com/feed';
    let feedlyimage = 'logo-green';
    return (
      <div>
        <FeedlyButton feedurl={feedurl} image={feedlyimage} />
        <HatenabookmarkButton />
        <LINEButton text={text} image={lineimage} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
