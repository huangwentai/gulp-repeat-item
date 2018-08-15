'use strict';
var through = require('through2');
var assign = require('object-assign');
var gutil = require('gulp-util');
var pkg = require(process.cwd() + '/package.json');

// plugin name
const PLUGIN_NAME = 'gulp-repeat-item';

// default parameter
var defaults = {
  
};


function gulpRepeatItem() {
  var stream = through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return cb();
    }

    var contents = file.contents.toString();
    // replace
    var regex = new RegExp('<!--(.*)[ ]*@@repeatItem\\(([\\s\\S]*?)\\)[ ]*start-->([\\s\\S]*?)<!--(.*)[ ]*@@repeatItem[ ]*end-->', 'ig')
    
    contents=contents.replace(regex, function (match, $1, $2, $3, $4) {
      var html1='';
          for(var i=0;i<$2;i++){
            html1+=formatData($3,i)
      }
          return html1;
      });

    file.contents = new Buffer(contents);
    this.push(file);

    cb();
  });

  function formatData(data,index){
    var regex3 = new RegExp('@@data([\\s\\S]*?)\\{\\[([\\s\\S]*?)\\]\\}', 'ig');
    var data3=data.replace(regex3, function (match, $1, $2) {
      var arr=eval(`[${$2}]`)
      if($1=='Random'){
        return arr[Math.floor(Math.random()*arr.length)];
      }else{
        return arr[index%arr.length];
      } 
    });

    return data3;
  }

  return stream;
}

module.exports = gulpRepeatItem;
