Robowall.Events = {
  t: function(event_name, options) {
    if (options == null) {
      options = {};
    }
    Robowall.log(6, "EVENT Triggered '" + event_name + "'", options);
    return this.trigger(event_name, options);
  }
};