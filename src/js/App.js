Robowall.App = (function() {
  function App() {}

  App.prototype.debug = 0;

  App.prototype.events = _.extend(Robowall.Events, Backbone.Events);

  App.prototype.init = function() {
    Robowall.log('App init');
    this.events.t('init:start');
    this.events.on('dom:onload', this.dom_onload, this);
    // assign root view here somewhere
    return this.events.on('init:dom:end', function() {
      return this.events.t('init:end');
    }, this);
  };

  App.prototype.dom_onload = function() {
    Robowall.log('DOM loaded, proceeding');
    Robowall.app.dom_exists = true;
    this.events.t('init:dom:start');
    // Render root
    this.router = new Robowall.Router;
    return this.events.t('init:dom:end');
  };

  App.prototype.root = function() {
  	Robowall.log('App Root');
  };

  return App;

})();