/* Main entry point */

var project = require('./project');

$.get('/beers', function(projects){
  $('body').html(project.list(projects));
});
