'use strict';

var CITIZENS = server.pluginManager.getPlugin("Citizens");
var NPC_REGISTRY = CITIZENS.getNPCRegistry();
var npcapi = Packages.net.citizensnpcs.api;
var npctrait = Packages.net.citizensnpcs.trait;
global.user_npcs = [
    /* user-spawned NPCs will be added here*/
];
var event = {
    NavigationBeginEvent: Packages.net.citizensnpcs.api.ai.event.NavigationBeginEvent,
    NavigationCancelEvent: Packages.net.citizensnpcs.api.ai.event.NavigationCancelEvent,
    NavigationCompleteEvent: Packages.net.citizensnpcs.api.ai.event.NavigationCompleteEvent,
    NavigationReplaceEvent: Packages.net.citizensnpcs.api.ai.event.NavigationReplaceEvent,
    NavigationStuckEvent: Packages.net.citizensnpcs.api.ai.event.NavigationStuckEvent,
    NPCSpawnEvent: Packages.net.citizensnpcs.api.event.NPCSpawnEvent,
    NPCCollisionEvent: Packages.net.citizensnpcs.api.event.NPCCollisionEvent,
    NPCCombustEvent: Packages.net.citizensnpcs.api.event.NPCCombustEvent,
    NPCCreateEvent: Packages.net.citizensnpcs.api.event.NPCCreateEvent,
    NPCDamageByBlockEvent: Packages.net.citizensnpcs.api.event.NPCDamageByBlockEvent,
    NPCDamageByEntityEvent: Packages.net.citizensnpcs.api.event.NPCDamageByEntityEvent,
    NPCDeathEvent: Packages.net.citizensnpcs.api.event.NPCDeathEvent,
    NPCLeftClickEvent: Packages.net.citizensnpcs.api.event.NPCLeftClickEvent,
    NPCRightClickEvent: Packages.net.citizensnpcs.api.event.NPCRightClickEvent
}
var citizen = function(entityType, name, spawn_loc, invuln) {

    if (!entityType) entityType = org.bukkit.entity.EntityType.PIG;
    if (!name) name = "";
    if (!spawn_loc) spawn_loc = org.bukkit.Bukkit.getWorlds()[0].getSpawnLocation();
    if (typeof invuln == "undefined") invuln = true;

    var npc = NPC_REGISTRY.createNPC(entityType, name);
    var spawn = npc.spawn(spawn_loc);
    if (!spawn) {
        console.log("Could not spawn NPC... " + name);
        return;
    }

    npc.setProtected(invuln); //sets if NPC is invulnerable
    user_npcs.push(npc);
    return npc;
};

var registerNPCEvent = function(npc, func, eventType) {
    var eventHandler = function(event) {
        if (event == null || event.getNPC() != npc)
            return;
        func();
    };
    events.on(eventType, eventHandler);
};

var goalConstructor = function(g) {
    var goal = new Packages.net.citizensnpcs.api.ai.Goal(g);
    return goal;
};

var behaviorGoalConstructor = function(g) {
    var goal = new Packages.net.citizensnpcs.api.ai.Goal(g);
    var behavior = new Packages.net.citizensnpcs.api.ai.tree.Behavior(goal);
    return behavior;
};

var stuckActionConstructor = function(g) {
    var stuckAction = new Packages.net.citizensnpcs.api.ai.StuckAction(g);
    return stuckAction;
};

var attackStrategyConstructor = function(g) {
    var attackStrategy = new Packages.net.citizensnpcs.api.ai.AttackStrategy(g);
    return attackStrategy;
};
// myNPC.getNavigator().getDefaultParameters().attackStrategy(new CreeperAttackStrategy());
// getNavigator().getLocalParameters().stuckAction(giveup);

var destroyAll = function() {
    NPC_REGISTRY.deregisterAll();
}

var storeAll = function() {
    CITIZENS.storeNPCs('a');
}
var Helmets = [298, 302, 306, 310, 314, 91, 86];
var Boots = [301, 305, 309, 313, 317];
var Chestplates = [299, 303, 307, 311, 315];
var Leggings = [300, 304, 308, 312, 316];
var equipNPC = function(npc, hand) {
    var trait = npc.getTrait(npcapi.trait.trait.Equipment.class);
    if (trait == null) return false;
    var slot = 0;
    var type = hand == null ? org.bukkit.Material.AIR : hand.getType();
    // First, determine the slot to edit

    if (Helmets.indexOf(type.getId()) > -1) slot = 1;
    else if (Chestplates.indexOf(type.getId()) > -1) slot = 2;
    else if (Leggings.indexOf(type.getId()) > -1) slot = 3;
    else if (Boots.indexOf(type.getId()) > -1) slot = 4;

    if (type == org.bukkit.Material.AIR) {
        for (var i = 0; i < 5; i++) {
            if (trait.get(i) != null && trait.get(i).getType() != org.bukkit.Material.AIR) {
                trait.set(i, null);
            }
        }
    } else {
        var clone = hand;
        clone.setAmount(1);
        trait.set(slot, clone);
    }
}

var wandergoal = function(npc, xrange, yrange) {
    return npcapi.ai.goals.WanderGoal.createWithNPCAndRange(npc, xrange, yrange);
}

var targetneargoal = function(npc, targets, aggressive, radius) {
    var rset = new java.util.HashSet();
    rset.addAll(targets);
    return npcapi.ai.goals.TargetNearbyEntityGoal.builder(npc).aggressive(aggressive).radius(radius).targets(rset).build();
}

exports.attackStrategyConstructor = attackStrategyConstructor;
exports.goalConstructor = goalConstructor;
exports.wandergoal = wandergoal;
exports.targetneargoal = targetneargoal;
exports.equipNPC = equipNPC;
exports.storeAll = storeAll;
exports.destroyAll = destroyAll;
exports.npctrait = npctrait;
exports.npc = citizen;
exports.npcapi = npcapi;
exports.registerNPCEvent = registerNPCEvent;
exports.event = event;
exports.goal = goalConstructor;