import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton, HatenabookmarkButton, FeedlyButton, GREEButton, LinkedinButton, TumblrPostButton, TumblrFollowButton, FacebookButton, TwitterTweetButton, TwitterFollowButton, TwitterHashtagButton, TwitterTweetToButton, PocketButton, YouTubeButton, GitHubButton, GooglePlusButton } from '../lib/main.js';

class App extends React.Component {
  render() {
    const text = 'awesome text';
    const lineimage = '20x20';
    const url = 'http://uraway.hatenablog.com/';
    const feedurl = 'http://uraway.hatenablog.com/feed';
    const feedlylayout = 'logo-green';
    const hatenalayout = 'standard-balloon';
    const user = 'uraway_';
    const hashtag = 'github';

    return (
      <ul>
        <ol><GooglePlusButton /></ol>
        <ol><GitHubButton user="uraway" repo="react-social-sharebuttons"/></ol>
        <ol><YouTubeButton channel="GoogleDevelopers"/></ol>
        <ol><PocketButton /></ol>
        <ol><TwitterTweetButton text={text}/></ol>
        <ol><TwitterTweetToButton user={user} text={text}/></ol>

      </ul>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
