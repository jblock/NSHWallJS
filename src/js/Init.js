Robowall.app = new Robowall.App;

Robowall.app.events.on('router:init:end', function() {
  return Backbone.history.start({
    pushState: true
  });
});

Robowall.app.init();

$(function() {
  return Robowall.app.events.t('dom:onload');
});