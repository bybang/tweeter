/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

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
};

const renderTweets = function(tweets) {
  const $tweetContainer = $('#tweets-container');
  $tweetContainer.empty();
  for (const tweet of tweets) { // loops through tweets
    const $tweet = createTweetElement(tweet) // calls createTweetElement for each tweet
    $tweetContainer.prepend($tweet); // takes return value and appends it to the tweets container
  }
};

const $form = $('#submit-new-tweet');

$form.submit(function(event) {
  event.preventDefault();
  const serializedData = $(this).serialize();

  const $tweetText = $('#tweet-text').val();
  if ($tweetText === "") {
    alert("There's no input! Please enter the text here")
  };
  if ($tweetText.length > 140) {
    alert("Limit exceeded! Please enter under 140 characters")
  };

  $.post('/tweets', serializedData)
  // loadTweets();
});

const loadTweets = () => {
  $.ajax({
    url:'/tweets',
    method: 'GET',
    dataType: 'JSON',
  })
  .then(function(tweets) {
    renderTweets(tweets);
  })
};

loadTweets();

});