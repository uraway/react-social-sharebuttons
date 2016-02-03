import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton, HatenabookmarkButton, FeedlyButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    let linetext = 'LINEで送る';
    let lineimage = '20x20';
    let url = 'http://uraway.hatenablog.com/';
    let feedurl = 'http://uraway.hatenablog.com/feed';
    let feedlylayout = 'logo-green';
    return (
      <div>
        <FeedlyButton feedurl={feedurl} layout={feedlylayout} />
        <HatenabookmarkButton />
        <LINEButton text={linetext} image={lineimage} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
