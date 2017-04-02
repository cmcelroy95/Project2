"use strict";
console.log("in migration");
module.exports = function(db) {
db.serialize(function(){
    db.run("CREATE TABLE projects (id INTEGER PRIMARY KEY, name TEXT, description TEXT, version TEXT, reposity TEXT, license TEXT)");
    db.run("CREATE TABLE cards (id INTEGER PRIMARY KEY, project_id INTEGER, message TEXT, data TEXT, FOREIGN KEY (project_id) REFERENCES projects(id))");
  });
  }
