/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

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

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});