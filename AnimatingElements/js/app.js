// $('#flashMessage').hide().slideDown(1000).delay(1000).slideUp();
//
// const title='my first blog post';
// const content='this is my <strong>first</strong> post!';
//
// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);
$('#flashMessage').hide();
$('#previewButton').click(() => {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);
  $('#flashMessage').slideDown(1000).delay(1000).slideUp();
});
