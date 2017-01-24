'use strict';

var Drone = require('drone'),
  utils = require('utils'),
  blocks = require('blocks');


var _movements = [{}, {}, {}, {}];
// east
_movements[0].right = function(x, y, z, n) {
  z += n;

  return [x, y, z];
};
_movements[0].left = function(x, y, z, n) {
  z -= n;
  return [x, y, z];
};
_movements[0].fwd = function(x, y, z, n) {
  x += n;
  return [x, y, z];
};
_movements[0].back = function(x, y, z, n) {
  x -= n;
  return [x, y, z];
};
// south
_movements[1].right = _movements[0].back;
_movements[1].left = _movements[0].fwd;
_movements[1].fwd = _movements[0].right;
_movements[1].back = _movements[0].left;
// west
_movements[2].right = _movements[0].left;
_movements[2].left = _movements[0].right;
_movements[2].fwd = _movements[0].back;
_movements[2].back = _movements[0].fwd;
// north
_movements[3].right = _movements[0].fwd;
_movements[3].left = _movements[0].back;
_movements[3].fwd = _movements[0].left;
_movements[3].back = _movements[0].right;


function right(player, block, n) {
  if (typeof n == 'undefined') {
    n = 1;
  }
  var loc = player.location;
  var dir = Drone.getDirFromRotation(loc);
  var world = loc.world;
  var pos = _movements[dir].right(loc.x, loc.y, loc.z, n);

  var metadata = getBlockIdAndMeta(block,dir);
  putBlock(pos[0], pos[1], pos[2], metadata[0], metadata[1], world, false);
}

function left(player, block, n) {
  if (typeof n == 'undefined') {
    n = 1;
  }
  var loc = player.location;

  var dir = Drone.getDirFromRotation(loc);
  var world = loc.world;
  var pos = _movements[dir].left(loc.x, loc.y, loc.z, n);
  var metadata = getBlockIdAndMeta(block,dir);
  putBlock(pos[0], pos[1], pos[2], metadata[0], metadata[1], world, false);
}

function fwd(player, block, n) {
  if (typeof n == 'undefined') {
    n = 1;
  }
  var loc = player.location;

  var dir = Drone.getDirFromRotation(loc);
  var world = loc.world;
  var pos = _movements[dir].fwd(loc.x, loc.y, loc.z, n);
  var metadata = getBlockIdAndMeta(block,dir);
  putBlock(pos[0], pos[1], pos[2], metadata[0], metadata[1], world, false);
}

function back(player, block, n) {
  if (typeof n == 'undefined') {
    n = 1;
  }

  var loc = player.location;

  var dir = Drone.getDirFromRotation(loc);
  var world = loc.world;
  var pos = _movements[dir].back(loc.x, loc.y, loc.z, n);
  var metadata = getBlockIdAndMeta(block,dir);
  putBlock(pos[0], pos[1], pos[2], metadata[0], metadata[1], world, false);
}

function up(player, block, n) {
  if (typeof n == 'undefined') {
    n = 1;
  }

  var loc = player.location;
  var x = loc.x;
  var y = loc.y;
  var z = loc.z;
  var dir = Drone.getDirFromRotation(loc);
  var world = loc.world;
  y += n;
  var metadata = getBlockIdAndMeta(block,dir);
  putBlock(x, y, z, metadata[0], metadata[1], world, false);
}

function down(player, block, n) {
  if (typeof n == 'undefined') {
    n = 1;
  }

  var loc = player.location;
  var x = loc.x;
  var y = loc.y;
  var z = loc.z;
  var dir = Drone.getDirFromRotation(loc);
  var world = loc.world;
  y -= n;

  var metadata = getBlockIdAndMeta(block,dir);
  putBlock(x, y, z, metadata[0], metadata[1], world, false);
}

function getBlockIdAndMeta(b,dir) {
  var defaultMeta = 0,
    i = 0,
    bs,
    md,
    sp;
  if (typeof b === 'number' || /^[0-9]+$/.test(b)) {
    // wph 20130414 - use sensible defaults for certain blocks e.g. stairs
    // should face the drone.
    if (blocks.isStair(b)) {
      defaultMeta = Drone.PLAYER_STAIRS_FACING[dir % 4];
    } else {
      switch (b) {
        case blocks.sign:
        case blocks.ladder:
          // bug: furnace, chest, dispenser don't always use the right metadata
        case blocks.furnace:
        case blocks.furnace_burning:
        case blocks.chest:
        case blocks.enderchest:
        case blocks.dispenser:
          defaultMeta = Drone.PLAYER_SIGN_FACING[dir % 4];
          break;
        case blocks.sign_post:
          defaultMeta = (12 + ((dir + 2) * 4)) % 16;
           break;
      }
    }
    return [b, defaultMeta];
  }
  if (typeof b === 'string') {
    bs = b;
    sp = bs.indexOf(':');
    if (sp == -1) {
      b = parseInt(bs);
      return [b, defaultMeta];
    }
    b = parseInt(bs.substring(0, sp));
    md = parseInt(bs.substring(sp + 1, bs.length));
    return [b, md];
  }
  if (b.id) {
    // wph 20141230 we are dealing with an object
    var blockInfo = b;
    var metadata = {};
    for (i in b) {
      if (i !== 'id')
        metadata[i] = b[i];
    }
    return [b.id, metadata];
  }
}

function putBlock(x, y, z, blockId, metadata, world, update) {
  if (typeof metadata == 'undefined') {
    metadata = 0;
  }
  var block = world.getBlockAt(x, y, z);

  if (__plugin.canary) {
    var BlockType = Packages.net.canarymod.api.world.blocks.BlockType;
    block.type = BlockType.fromId(blockId);
    var applyProperties = require('blockhelper').applyProperties;
    applyProperties(block, metadata);
    if (typeof update === 'undefined') {
      update = true;
    }
    if (update) {
      block.update();
    }
  }
  if (__plugin.bukkit) {
     block.setTypeIdAndData(blockId, metadata, false);
    block.data = metadata;
  }
  return block;
}

function dPutBlock(loc, block) {
  var x = Math.floor(loc.x);
  var y = Math.floor(loc.y);
  var z = Math.floor(loc.z);
  var world = loc.world;
  var dir = Drone.getDirFromRotation(loc);
  var metadata = getBlockIdAndMeta(block,dir);
  return putBlock(x, y, z, metadata[0], metadata[1], world, false);
}



exports.putBlock = dPutBlock;
exports.down = down;
exports.right = right;
exports.left = left;
exports.fwd = fwd;
exports.up = up;
exports.back = back;
