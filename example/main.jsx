import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton, HatenabookmarkButton, FeedlyButton, GREEButton, LinkedinButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    const linetext = 'LINEで送る';
    const lineimage = '20x20';
    const url = 'http://uraway.hatenablog.com/';
    const feedurl = 'http://uraway.hatenablog.com/feed';
    const feedlylayout = 'logo-green';
    const type = 2;
    const lang = 'en';
    const hatenalayout = "standard-balloon";

    return (
      <div>
        <LinkedinButton counter="none" lang={lang} />
        <FeedlyButton layout={feedlylayout} />
        <HatenabookmarkButton layout={hatenalayout} />
        <LINEButton image={lineimage} />
        <GREEButton type={type} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
