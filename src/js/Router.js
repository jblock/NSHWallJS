Robowall.Router = Backbone.Router.extend({
  routes: {
    '': 'root'
  },
  initialize: function() {
    Robowall.log('Router init');
    Robowall.app.events.t('router:init:end');
  },
  root: function() {
    Robowall.app.root();
  }
});