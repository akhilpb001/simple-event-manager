/**
 *  eventManager v0.0.1
 */
(function (win){
  var evntHandlers = {},
  eventManager = {
    version: "0.0.1",
    on: function(evnt, callback){
      if(!evntHandlers[evnt]){
        evntHandlers[evnt] = [];
      }
      evntHandlers[evnt].push(callback);
	    return this;
	  },
    off: function(evnt, callback){
      if(evnt !== undefined){
        if(callback !== undefined){
          evntHandlers[evnt].splice(evntHandlers[evnt].indexOf(callback), 1);
        }else{
          delete evntHandlers[evnt];
        }
      }
      return this;
    },
	  trigger: function(evnt){
	    var argmnts = [].slice.call(arguments),
	    args = argmnts.slice(1);
      for(var i = 0; i < evntHandlers[evnt].length; i++){
        evntHandlers[evnt][i].apply(win, args);
      }
	    return this;
	  }
  };
  win.eventManager = eventManager;
})(window);
