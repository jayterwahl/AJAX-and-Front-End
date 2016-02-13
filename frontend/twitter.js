var followToggle = require("./follow_toggle.js");

window.followToggle = followToggle;

$('document').ready(function(){

  $(".follow-toggle").each(function(el, button){
    new followToggle(button, {});
  });
});
