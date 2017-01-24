var File = java.io.File,
    FileReader = java.io.FileReader,
    BufferedReader = java.io.BufferedReader;
pvpin_achievement = org.bukkit.Achievement;
pvpin_color = org.bukkit.Color;
pvpin_FireworkEffect = org.bukkit.FireworkEffect;
pvpin_Note = org.bukkit.Note;
pvpin_block = org.bukkit.block;
pvpin_Difficulty = org.bukkit.Difficulty;
pvpin_WorldType = org.bukkit.WorldType;
pvpin_WorldEnvironment = org.bukkit.World.Environment;
pvpin_WorldCreator = org.bukkit.WorldCreator;
pvpinkit = org.bukkit.Bukkit;
pvpin_statistic = org.bukkit.Statistic;
pi_scoreboard = org.bukkit.scoreboard;
pvpin_BanList = org.bukkit.BanList;
pvpin_util_EulerAngle = org.bukkit.util.EulerAngle;
pvpin_generator = org.bukkit.generator;
pvpin_command = org.bukkit.command;
pvpin_rotation = org.bukkit.Rotation;
pvpin_SkullType = org.bukkit.SkullType;
pvpin_worldMap = org.bukkit.map;
pvpin_permissions = org.bukkit.permissions;
pvpin_DyeColor = org.bukkit.DyeColor;
pvpin_boss = org.bukkit.boss;
pvpin_material_l = org.bukkit.material;
pvpin_conversations = org.bukkit.conversations;
pvpin_attribute = org.bukkit.attribute;
global.playerevents = {};
global.intervals = {};
bkBukkit = org.bukkit.Bukkit;
var _scoreboard = require('minigames/scoreboard_pvpin');
function clearIntervalsAndEvents(name) {
    clearEvents(name);
    clearIntervals(name);
}
function clearEvents(name) {
    if (global.playerevents[name]) {
        if (global.playerevents[name].length > 0) {
            for (var i = 0; i < global.playerevents[name].length; i++) {
                global.playerevents[name][i]()
            }
            global.playerevents[name] = []
        }
    }
}
function clearIntervals(name) {
    if (global.intervals[name]) {
        if (global.intervals[name].length > 0) {
            for (var i = 0; i < global.intervals[name].length; i++) {
                clearInterval(global.intervals[name][i])
            }
            global.intervals[name] = []
        }
    }
}
var broadcast = function (msg) {
    var players = server.onlinePlayers;
    var player;
    var i;
    for (i = 0; i < players.length; i++) {
        player = players[i];
        player.sendMessage(msg);
    }
}
var player = function (name) {
    if (bkBukkit.getServer().getOnlinePlayers() instanceof java.util.Collection) {
        for (var i = 0; i < bkBukkit.getServer().getOnlinePlayers().size(); i++) {
            if (bkBukkit.getServer().getOnlinePlayers().get(i).name == name)
                return bkBukkit.getServer().getOnlinePlayers().get(i);
        }
    } else {
        for (var i = 0; i < bkBukkit.getServer().getOnlinePlayers().length; i++) {
            if (bkBukkit.getServer().getOnlinePlayers()[i].name == name)
                return bkBukkit.getServer().getOnlinePlayers()[i];
        }
    }
}
var onlinePlayers = function () {
    var players;
    if (bkBukkit.getServer().getOnlinePlayers() instanceof java.util.Collection) {
        players = bkBukkit.getServer().getOnlinePlayers().toArray();

    } else {
        players = bkBukkit.getServer().getOnlinePlayers();
    }
    return javaArray2jsArray(players);
}
var interval = function (player, ref, time) {
    if (player && global.intervals) {
        if (!global.intervals[player.name]) {
            global.intervals[player.name] = [];
        }
        var funHandler = function () {
            ref();
        };
        var intervalId = setInterval(funHandler, time);
        global.intervals[player.name].push(intervalId);
        return intervalId;
    }
}
var pvpin_timeout = function (ref, time) {
    var funHandler = function () {
        ref();
    };
    var intervalId = setTimeout(funHandler, time);
    return intervalId;
}
var pluginCreateCommand = function (name, dosome) {
    var cmd = new pvpin_command.Command(name)
    {
        execute: function (sender, commandLabel, args) {
            dosome(sender, commandLabel, args);
        }
    }
    ;
    return cmd;
}
var pluginCreateCommand = function (name, dosome) {
    var cmd = new pvpin_command.Command(name)
    {
        execute: function (sender, commandLabel, args) {
            dosome(sender, commandLabel, args);
        }
    }
    ;
    return cmd;
}

var pluginCreateCommandTabComplete = function (name, dosome, tabCompletelist) {
    var cmd = new pvpin_command.Command(name)
    {
        execute: function (sender, commandLabel, args) {
            dosome(sender, commandLabel, args);
        }
    ,
        tabComplete: function (sender, alias, args) {

            if (tabCompletelist instanceof Array) {

                return tabCompletelist;

            }
            else {
                sender.sendMessage('§c错误：自动完成的参数必须是列表');
            }

        }
    }
    ;
    return cmd;
}


var pluginCreateCommandTabCompletes = function (name, dosome, tadosome) {
    var cmd = new pvpin_command.Command(name)
    {
        execute: function (sender, commandLabel, args) {
            dosome(sender, commandLabel, args);
        }
    ,

        tabComplete: function (sender, alias, args) {
            return tadosome(sender, alias, args);
        }
    }
    ;

    return cmd;
}


var getPermissionAttachment = function (player) {
    return player.addAttachment(__plugin);
}

var javaMap2jsMap = function (javaMap) {
    var jsMap = {};
    var i_list = javaMap.keySet().toArray();
    for (var i_index in i_list) {
        var i = i_list[i_index];
        jsMap[i] = javaMap.get(i);
    }
    return jsMap;
}

var javaArray2jsArray = function (javaArray) {
    var jsArray = new Array();

    for (var i_index in javaArray) {
        jsArray.push(javaArray[i_index]);
    }
    return jsArray;
}


exports.pvpin_http = require('http/request');
exports.Spirit = require('drone');
exports.EntityType = require('entities');
exports.pvpin_signs = require('signs');
exports.pvpin_spawn = require('spawn');
exports.pvpin_utils = require('utils');
exports.pvpin_fireworks = require('fireworks');
exports.pvpin_setblock = require('playersetblock');
exports.pvpin_inventory = require('inventory');
exports.pvpin_items = require('items');

exports.pvpin_javaMap2jsMap = javaMap2jsMap;
exports.array2jsArray = javaArray2jsArray;
exports.Array2jsArray = javaArray2jsArray;
exports.pvpin_Map2jsMap = javaMap2jsMap;
exports.pvpin_broadcast = broadcast;
exports.pvpin_player = player;
exports.pvpin_interval = interval;
exports.pvpin_timeout = pvpin_timeout;
exports.pvpin_onlinePlayers = onlinePlayers;
exports.pvpin_clearIntervalsAndEvents = clearIntervalsAndEvents;
exports.pvpin_clearIntervals = clearIntervals;
exports.pvpin_clearEvents = clearEvents;

/**
 * 这些类库的封装只是为了兼容以前的代码，是不必须的。你可以直接使用bukkit的包名。
 */
exports.pvpin_scoreboard = _scoreboard;
exports.pvpin_achievement = pvpin_achievement;
exports.pvpin_generator = pvpin_generator;
exports.pvpin_color = pvpin_color;
exports.pvpin_FireworkEffect = pvpin_FireworkEffect;
exports.pvpin_Note = pvpin_Note;
exports.pvpin_block = pvpin_block;
exports.pvpin_Difficulty = pvpin_Difficulty;
exports.pvpin_WorldType = pvpin_WorldType;
exports.pvpin_WorldCreator = pvpin_WorldCreator;
exports.pvpinkit = pvpinkit;
exports.pi_scoreboard = pi_scoreboard;
exports.pvpin_statistic = pvpin_statistic;
exports.pvpin_BanList = pvpin_BanList;
exports.pvpin_util_EulerAngle = pvpin_util_EulerAngle;
exports.pvpin_command = pvpin_command;
exports.pvpin_rotation = pvpin_rotation;
exports.pvpin_SkullType = pvpin_SkullType;
exports.pvpin_WorldEnvironment = pvpin_WorldEnvironment;
exports.pvpin_worldMap = pvpin_worldMap;
exports.pvpin_permissions = pvpin_permissions;
exports.pluginCreateCommand = pluginCreateCommand;
exports.pluginCreateCommandTabComplete = pluginCreateCommandTabComplete;
exports.pluginCreateCommandTabCompletes = pluginCreateCommandTabCompletes;
exports.getPermissionAttachment = getPermissionAttachment;
exports.pvpin_DyeColor = pvpin_DyeColor;
exports.pvpin_boss = pvpin_boss;
exports.pvpin_material_l = pvpin_material_l;
exports.pvpin_conversations = pvpin_conversations;
exports.pvpin_attribute = pvpin_attribute;