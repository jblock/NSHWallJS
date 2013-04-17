var __slice = [].slice;

if (!window.console) {
  window.console = {};
}

if (!console.log) {
  console.log = function() {};
}

if (!console.warn) {
  console.warn = function() {};
}

if (!console.error) {
  console.error = function() {};
}

if (!console.info) {
  console.info = function() {};
}

Robowall.console_output = function() {
  var args, date, level, msg, output_routine, timestamp;

  args = Array.prototype.slice.call(arguments);
  output_routine = args[0];
  args.shift();
  if (!output_routine) {
    return;
  }
  if (args.length > 1) {
    level = parseInt(args[0]);
    if ([0, 1, 2, 3, 4, 5, 6].indexOf(level) > -1) {
      args.shift();
      if (Robowall.app.debug < level) {
        return false;
      }
    }
  }
  if (isNaN(level)) {
    level = 0;
  }
  if (level == null) {
    level = 0;
  }
  date = new Date;
  timestamp = "" + (date.getUTCFullYear()) + "-" + (date.getUTCMonth() + 1) + "-" + (date.getUTCDate()) + "@" + (date.getUTCHours()) + ":" + (date.getUTCMinutes()) + ":" + (date.getUTCSeconds()) + "." + (date.getUTCMilliseconds());
  msg = args[0];
  if (args.length > 1) {
    args.shift();
  } else {
    args = [];
  }
  console[output_routine].apply(console, ["[" + level + ":" + timestamp + "] " + msg].concat(__slice.call(args)));
  return true;
};

Robowall.log = function() {
  return Robowall.console_output.apply(Robowall, ['log'].concat(__slice.call(arguments)));
};

Robowall.info = function() {
  return Robowall.console_output.apply(Robowall, ['info'].concat(__slice.call(arguments)));
};

Robowall.warn = function() {
  return Robowall.console_output.apply(Robowall, ['warn'].concat(__slice.call(arguments)));
};

Robowall.error = function() {
  return Robowall.console_output.apply(Robowall, ['error'].concat(__slice.call(arguments)));
};