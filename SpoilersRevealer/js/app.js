$('.spoiler').on('click', 'button', function(event) {
  // console.log(event.target);
    // show spoiler text
    // $('.spoiler span').show();
    $(this).prev().show();
    // hide the reveal spoiler button
    $(this).hide();
});
const $button = $('<button>Reveal Spoiler</button>');
$('.spoiler').append($button);
// hide the spoiler text
$('.spoiler span').hide();
// when button is pressed
