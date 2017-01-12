import React from 'react';
import ReactDOM from 'react-dom';

import {
  LINEButton,
  HatenabookmarkButton,
  FeedlyButton,
  GREEButton,
  LinkedinButton,
  TumblrPostButton,
  TumblrFollowButton,
  FacebookButton,
  TwitterTweetButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterTweetToButton,
  PocketButton,
  YouTubeButton,
  GithubButton,
} from '../lib/main';

class App extends React.Component {
  render() {
    return (
      <ul>
        <ol><LINEButton /></ol>
        <ol><HatenabookmarkButton /></ol>
        <ol><FeedlyButton feedurl="http://uraway.hatenablog.com/feed" /></ol>
        <ol><GREEButton /></ol>
        <ol><LinkedinButton /></ol>
        <ol><TumblrPostButton /></ol>
        <ol><TumblrFollowButton tumblelog="uraway" /></ol>
        <ol><FacebookButton /></ol>
        <ol><TwitterTweetButton text="awesome text" /></ol>
        <ol><TwitterTweetToButton user="uraway_" text="awesome text" /></ol>
        <ol><TwitterHashtagButton hashtag="React" /></ol>
        <ol><TwitterFollowButton user="uraway_" /></ol>
        <ol><PocketButton /></ol>
        <ol><YouTubeButton channel="GoogleDevelopers" /></ol>
        <ol><GithubButton user="uraway" repo="react-social-sharebuttons" /></ol>
      </ul>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
