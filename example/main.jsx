import React from 'react';
import ReactDOM from 'react-dom';

import { LINEButton, HatenabookmarkButton, FeedlyButton, GREEButton, LinkedinButton, TumblrPostButton, TumblrFollowButton, FacebookButton, TwitterTweetButton, TwitterFollowButton, TwitterHashtagButton, TwitterTweetToButton, PocketButton, YouTubeButton, GithubButton, GooglePlusButton } from '../lib/main.js';

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
        <ol><GithubButton user="uraway" repo="react-social-sharebuttons" type="star" count /></ol>
        <ol><YouTubeButton channel="GoogleDevelopers"/></ol>
        <ol><PocketButton count="horizontal" /></ol>
        <ol><TwitterTweetToButton user={user} /></ol>
        <ol><TwitterHashtagButton hashtag={hashtag} text={text} /></ol>
        <ol><TwitterFollowButton user={user} showCount /></ol>
        <ol><TwitterTweetButton url={url} text={text} /></ol>
        <ol><FacebookButton url={url} showFaces /></ol>
        <ol><TumblrFollowButton tumblelog="staff" color="white"/></ol>
        <ol><TumblrPostButton notes="top" color="blue" /></ol>
        <ol><LinkedinButton counter="none" /></ol>
        <ol><FeedlyButton layout={feedlylayout} feedurl={feedurl} /></ol>
        <ol><HatenabookmarkButton layout={hatenalayout} /></ol>
        <ol><LINEButton image={lineimage} text={text} /></ol>
        <ol><GREEButton type={2} /></ol>
      </ul>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
