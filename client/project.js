var form = require('./form');

module.exports = {
  list
};

function list(projects){
  var body = $('<div>').addClass('body');
  var list = $('<ul>').addClass('list'); //fix this
  projects.forEach(function(project){
    var link = $('<a>')
      .text(project.name)
      .attr('href', 'beers/' + project.id)
      .on('click', function(e){
        e.preventDefault();
        loadProject('/beers/' + project.id);
      })
     .appendTo(list);
   });
  list.appendTo(body);
  form.createForm().appendTo(body);
  return body;
}
