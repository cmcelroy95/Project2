(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Main entry point */

var project = require('./project');

$.get('/beers', function(projects){
  $('body').html(project.list(projects));
});

},{"./project":3}],2:[function(require,module,exports){
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



},{}],3:[function(require,module,exports){
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

function loadProject(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send(null);

  xhr.onreadystatechange = function() {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        console.log(xhr.responseText); // 'This is the returned text.'
        var project = JSON.parse(xhr.responseText);
        var wrapper = document.createElement('div');
        var name = document.createElement('h1');
        var image = document.createElement('img');
        name.innerHTML = project.name;
        image.src = project.imageSrc;
        wrapper.appendChild(name);
        wrapper.appendChild(image);
        document.body.
        document.body.appendChild(wrapper);
      } else {
        console.log('Error: ' + xhr.status); // An error occurred during the request.
      }
    }
  }
}

},{"./form":2}]},{},[1]);
