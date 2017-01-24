/*global Java, exports, org, __plugin */
var bkEventPriority = org.bukkit.event.EventPriority,
    bkEventExecutor = org.bukkit.plugin.EventExecutor,
    bkRegisteredListener = org.bukkit.plugin.RegisteredListener,
    bkEventPackage = 'org.bukkit.event.';

var nashorn = (typeof Java != 'undefined');

function getHandlerListForEventType(eventType) {
    var result = null;
    var clazz = null;
    if (nashorn) {

        //Nashorn doesn't like when getHandlerList is in a superclass of your event
        //so to avoid this problem, call getHandlerList using java.lang.reflect
        //methods
        clazz = eventType['class'];
        result = clazz.getMethod("getHandlerList").invoke(null);

    } else {
        result = eventType.getHandlerList();
    }

    return result;
}

exports.on = function (/* Java Class */
                       eventType,
                       /* function( registeredListener, event) */
                       handler,
                       /* (optional) String (HIGH, HIGHEST, LOW, LOWEST, NORMAL, MONITOR), */
                       priority) {
    var handlerList,
        regd,
        eventExecutor;

    if (typeof priority == 'undefined') {
        priority = bkEventPriority.HIGHEST;
    } else {
        priority = bkEventPriority[priority.toUpperCase().trim()];
    }
    handlerList = getHandlerListForEventType(eventType);

    var result = {};
    eventExecutor = new bkEventExecutor({
        execute: function (l, evt) {
            function cancel() {
                if (evt instanceof org.bukkit.event.Cancellable) {
                    evt.setCancelled(true);
                }
            }

            /*
             let handlers use this.cancel() to cancel the current event
             or this.unregister() to unregister from future events.
             */
            var bound = {};
            for (var i in result) {
                bound[i] = result[i];
            }
            bound.cancel = cancel;
            handler.call(bound, evt, cancel);
        }
    });

    regd = new bkRegisteredListener(__plugin, eventExecutor, priority, __plugin, true);
    handlerList.register(regd);
    result.unregister = function () {
        handlerList.unregister(regd);
    };
    return result;
};

exports.plon = function (/* Java Class */
                         eventType,
                         /* function( registeredListener, event) */
                         handler,
                         /* (optional) String (HIGH, HIGHEST, LOW, LOWEST, NORMAL, MONITOR), */
                         player, priority) {
    var handlerList,
        regd,
        eventExecutor;

    var funHandler = function (event) {
        handler(event);
    };


    if (typeof priority == 'undefined') {
        priority = bkEventPriority.HIGHEST;
    } else {
        priority = bkEventPriority[priority.toUpperCase().trim()];
    }
    handlerList = getHandlerListForEventType(eventType);

    var result = {};
    eventExecutor = new bkEventExecutor({
        execute: function (l, evt) {
            function cancel() {
                if (evt instanceof org.bukkit.event.Cancellable) {
                    evt.setCancelled(true);
                }
            }

            /*
             let handlers use this.cancel() to cancel the current event
             or this.unregister() to unregister from future events.
             */
            var bound = {};
            for (var i in result) {
                bound[i] = result[i];
            }
            bound.cancel = cancel;
            funHandler.call(bound, evt, cancel);
        }
    });

    regd = new bkRegisteredListener(__plugin, eventExecutor, priority, __plugin, false);
    handlerList.register(regd);
    result.unregister = function () {
        handlerList.unregister(regd);
    };

    var urgng = result.unregister;

    if (player && global.playerevents) {
        if (!global.playerevents[player.name]) {
            global.playerevents[player.name] = [];
        }
        global.playerevents[player.name].push(urgng);
    }
    return result;
};
