/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
let $tweet /* Your code for creating the tweet element */
// ...
return $tweet;
}

const createTweetElement = (tweetObject) => {
  const tweetHTML = `
  <article class="tweet">
    <header>
      <img src="${tweetObject.user.avatars}"> <h4>${tweetObject.user.name}</h4>
      <span class="userID"> ${tweetObject.user.handle} </span>
    </header>
    <article class="innerTweet">
      <p>${tweetObject.content.text}</p>
    </article>
    <footer>
    ${timeago.format(tweetObject.created_at)}
      <span>
        <i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>`;
  return tweetHTML;
}

renderTweets(data);

});