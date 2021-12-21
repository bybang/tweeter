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


const createTweetElement = (newTweet) => {
  const $tweet = $('<article>').addClass('tweetArticle');
  const tweetHTML = `
  <article class="tweet">
    <header>
      <img src="${newTweet.user.avatars}"> <h4>${newTweet.user.name}</h4>
     <span class="userID"> ${newTweet.user.handle} </span>
    </header>
    <article class="innerTweet">
      <p>${newTweet.content.text}</p>
    </article>
    <footer>
    ${timeago.format(newTweet.created_at)}
      <span>
        <i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>`;
  
  $tweet.append(tweetHTML);
  return $tweet;
}

const renderTweets = function(tweets) {
  const $tweetContainer = $('#tweets-container');
  $tweetContainer.empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet)
    $tweetContainer.prepend($tweet);
  } 
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

renderTweets(data);

const $form = $('#submit-new-tweet');

$form.submit(function(event) {
  console.log(event);
  event.preventDefault();
  const serializedData = $(this).serialize();
  // console.log(serializedData);
})
});