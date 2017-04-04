module.exports = {
  createForm
};
function createForm(){
  var button = $('<button>').text('Add Beer').on('click', function() {
    // Add form to the page
    $('body').load('/public/project-form.html', function(){
      // Override default form action
      $('form').on('submit', function(event){
        event.preventDefault();
        var data = new FormData($('form')[0]);
        $.post({
          url: '/beers',
          data: data,
          contentType: 'multipart/form-data',
          processData: false
        });
      });
    });
  });
  return button;
}
