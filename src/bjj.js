import React from 'react';
import './HerokuSplash.css';

const HerokuSplash = () => {
  return (
    <div className="heroku-splash-container">
      <div className="heroku-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#FFFFFF">
          <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 2.4c7.4 0 13.6 6.2 13.6 13.6S23.4 29.6 16 29.6 2.4 23.4 2.4 16 8.6 2.4 16 2.4zm-2.8 6.4v6.4l-3.2-3.2v8.4h1.6v-4.8l3.2 3.2V8.8h-1.6zm5.6 0c-1.6 0-2.8 1.2-2.8 2.8v8.4c0 1.6 1.2 2.8 2.8 2.8s2.8-1.2 2.8-2.8v-2.4h-1.6v2.4c0 .8-.8 1.6-1.6 1.6s-1.6-.8-1.6-1.6v-8.4c0-.8.8-1.6 1.6-1.6s1.6.8 1.6 1.6v.8h1.6v-.8c0-1.6-1.2-2.8-2.8-2.8z"/>
        </svg>
      </div>
      <div className="heroku-text">There's nothing here, yet.</div>
      <button className="heroku-button">Build something amazing</button>
      <div className="heroku-footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#FFFFFF">
          <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 2.4c7.4 0 13.6 6.2 13.6 13.6S23.4 29.6 16 29.6 2.4 23.4 2.4 16 8.6 2.4 16 2.4zm-2.8 6.4v6.4l-3.2-3.2v8.4h1.6v-4.8l3.2 3.2V8.8h-1.6zm5.6 0c-1.6 0-2.8 1.2-2.8 2.8v8.4c0 1.6 1.2 2.8 2.8 2.8s2.8-1.2 2.8-2.8v-2.4h-1.6v2.4c0 .8-.8 1.6-1.6 1.6s-1.6-.8-1.6-1.6v-8.4c0-.8.8-1.6 1.6-1.6s1.6.8 1.6 1.6v.8h1.6v-.8c0-1.6-1.2-2.8-2.8-2.8z"/>
        </svg>
      </div>
    </div>
  );
};

export default HerokuSplash;

