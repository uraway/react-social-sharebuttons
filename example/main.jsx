import React, { Component } from 'react';
import { render } from 'react-dom';

import {
  LINEButton,
  HatenabookmarkButton,
  FeedlyButton,
  LinkedinButton,
  TumblrPostButton,
  FacebookButton,
  TwitterTweetButton,
  PocketButton,
  YouTubeButton,
} from '../lib/main';

function App() {
  return (
    <ul>
      <ol>
        <LINEButton />
      </ol>
      <ol>
        <HatenabookmarkButton />
      </ol>
      <ol>
        <FeedlyButton feedurl="http://uraway.hatenablog.com/feed" />
      </ol>
      <ol>
        <LinkedinButton />
      </ol>
      <ol>
        <TumblrPostButton />
      </ol>
      <ol>
        <FacebookButton />
      </ol>
      <ol>
        <TwitterTweetButton text="awesome text" />
      </ol>
      <ol>
        <PocketButton />
      </ol>
      <ol>
        <YouTubeButton channel="GoogleDevelopers" />
      </ol>
    </ul>
  );
}

render(<App />, document.getElementById('content'));
