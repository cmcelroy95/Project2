"use strict";
console.log("in migration");
module.exports = function(db) {
db.serialize(function(){
    db.run("CREATE TABLE beers (id INTEGER PRIMARY KEY, name TEXT, description TEXT, imgName TEXT)");
  });
  }
