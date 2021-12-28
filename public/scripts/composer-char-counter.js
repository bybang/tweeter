$(document).ready(() => {
  const $form = $('#tweet-text')
  const $counter = $('.counter')

  $form.on('input', function() {
    let inputLength = this.value.length;
    const currentLength = 140 - inputLength;

    $counter.text(currentLength);
    if (currentLength < 0) {
      $counter.addClass('redWarning');
    } else if (currentLength >= 0) {
      $counter.removeClass('redWarning');
    }
  })
});