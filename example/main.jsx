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
    const type = 1;
    const lang = 'ar';
    return (
      <div>
        <LinkedinButton lang={lang} />
        <GREEButton url={url} type={type}/>
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
