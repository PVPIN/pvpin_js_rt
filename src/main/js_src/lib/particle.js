'use strict';
exports.particles = {
    HUGE_EXPLOSION : ["hugeexplosion", 0],
    LARGE_EXPLOSION : ["largeexplode", 1],
    FIREWORKS_SPARK : ["fireworksSpark", 2],
    BUBBLE : ["bubble", 3],
    SUSPEND : ["suspend", 4],
    DEPTH_SUSPEND : ["depthSuspend", 5],
    TOWN_AURA : ["townaura", 6],
    CRIT : ["crit", 7],
    MAGIC_CRIT : ["magicCrit", 8],
    MOB_SPELL : ["mobSpell", 9],
    MOB_SPELL_AMBIENT : ["mobSpellAmbient", 10],
    SPELL : ["spell", 11],
    INSTANT_SPELL : ["instantSpell", 12],
    WITCH_MAGIC : ["witchMagic", 13],
    NOTE : ["note", 14],
    PORTAL : ["portal", 15],
    ENCHANTMENT_TABLE : ["enchantmenttable", 16],
    EXPLODE : ["explode", 17],
    FLAME : ["flame", 18],
    LAVA : ["lava", 19],
    FOOTSTEP : ["footstep", 20],
    SPLASH : ["splash", 21],
    LARGE_SMOKE : ["largesmoke", 22],
    CLOUD : ["cloud", 23],
    RED_DUST : ["reddust", 24],
    SNOWBALL_POOF : ["snowballpoof", 25],
    DRIP_WATER : ["dripWater", 26],
    DRIP_LAVA : ["dripLava", 27],
    SNOW_SHOVEL : ["snowshovel", 28],
    SLIME : ["slime", 29],
    HEART : ["heart", 30],
    ANGRY_VILLAGER : ["angryVillager", 31],
    HAPPY_VILLAGER : ["happyVillager", 32]
}

function randomEffect(effects) {
    if (effects[0] instanceof Array)
        return effects[Math.floor(Math.random()*effects.length)];
    return effects;
}

exports.effectManager = new Packages.de.slikey.effectlib.EffectManager(__plugin);

exports.efflib =  Packages.de.slikey.effectlib;
exports.effectCallback = function(effect , dosome) {
effect.callback = new java.lang.Runnable() {
run: function() {
    dosome();
}
};
}


exports.point = function(effects, loc1) {
    if (!loc1 || !effects)
        return;
    playInRange(randomEffect(effects), loc1, 50, 0, 0, 0, 0, 1);
}

exports.line = function(effects, loc1, loc2) {
    if (!loc1 || !loc2)
        return;
    /* set the direction of loc1 toward loc2 */
    loc1.setDirection(
            new org.bukkit.util.Vector(
                loc2.getX() - loc1.getX(), 
                loc2.getY() - loc1.getY(), 
                loc2.getZ() - loc1.getZ()
                )
            );
    var vector = loc1.getDirection();
    while (loc1.distanceSquared(loc2) > 1.0) {
        playInRange(randomEffect(effects), loc1, 50, 0, 0, 0, 0, 1);
        loc1 = loc1.add(vector);
    }
}

exports.circle = function(effects, loc1, degree, loc2) {
    var step = Math.PI / 360;
    radius = Math.abs(radius);
    function particleLoc(t) {
        return [0, 0, 0];   
    }
    for (var t = 0; t < Math.PI *2; t+=step) {
        point = particleLoc(t);
        var loc = new org.bukkit.Location(loc1.getWorld(), point[0], point[1], point[2]);
        playInRange(randomEffect(effects), loc, 50, 0, 0, 0, 0, 1);
    }
}

exports.sphere = function(effects, loc1, radius) {
    var particles = radius * 100;
    for (var i = 0; i < particles; i++) {
        var vector = randomVector().multiply(radius);
        loc1.add(vector);
        playInRange(randomEffect(effects), loc1, 50, 0, 0, 0, 0, 1);
        loc1.subtract(vector);
    }
}

exports.spiral = function(effects, loc1, radius, degree, loc2) {

}

exports.curve = function(effects, loc1, radius, degree, loc2) {

}

exports.play = function(player, effect, loc, offsetX, offsetY, offsetZ, speed, amount) {
    sendPacket(player, createNormalPacket(effect, loc, offsetX, offsetY, offsetZ, speed, amount));
}

function randomVector() {
    return new org.bukkit.util.Vector(Math.random() * 2 -1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
}

function playInRange(effect, loc, range, offsetX, offsetY, offsetZ, speed, amount) { 
    __plugin.playParticle(effect[0], loc);
    /**var packet = createNormalPacket(effect, loc, offsetX, offsetY, offsetZ, speed, amount);
    for each (var p in loc.getWorld().getPlayers()) {
        if (p.getLocation().distance(loc) <= range)
            sendPacket(p, packet);
    }**/
}

function createNormalPacket(effect, loc, offsetX, offsetY, offsetZ, speed, amount) {
    return createPacket(effect[0], loc, offsetX, offsetY, offsetZ, speed, amount);
}

function createPacket(effectName, loc, offsetX, offsetY, offsetZ, speed, amount) {
    try {
        /* amount of particles to play needs to be greater than zero */
        if (amount <= 0)
            amount = 0;
        var packet = ReflectionUtil.getClass("PacketPlayOutWorldParticles");
        ReflectionUtil.setValue(packet, "a", __plugin.flame);
        ReflectionUtil.setValue(packet, "b", java.lang.Float.parseFloat(""+loc.getX())); //might need to be floats
        ReflectionUtil.setValue(packet, "c", java.lang.Float.parseFloat(""+loc.getY()));
        ReflectionUtil.setValue(packet, "d", java.lang.Float.parseFloat(""+loc.getZ()));
        ReflectionUtil.setValue(packet, "e", offsetX);
        ReflectionUtil.setValue(packet, "f", offsetY);
        ReflectionUtil.setValue(packet, "g", offsetZ);
        ReflectionUtil.setValue(packet, "h", speed);
        ReflectionUtil.setValue(packet, "i", amount);
        return packet;

    } catch (e) {
        console.log(e);
    }
}

function sendPacket(player, packet) {
    if (!packet || !player) {
        console.log("NULL ex. packet " + packet + " to player " + player);
        return;
    }
    try {
        var nmsPlayer = ReflectionUtil.getMethod("getHandle", player.getClass(), 0).invoke(player);
        var playerConnection = nmsPlayer.getClass().getField("playerConnection").get(nmsPlayer);
        ReflectionUtil.getMethod("sendPacket", playerConnection.getClass(), 1).invoke(playerConnection, packet);
    } catch (e) {
        console.log(e);
    }
}
var ReflectionUtil = {};
ReflectionUtil.getClass = 
    /* 
     * arguments[0] = String name
     * arguments[1+] = Object... args
     */
    function() {
        var clazz = java.lang.Class.forName(ReflectionUtil.getPackageName() + '.' + arguments[0]);
        var params = (arguments.length - 1) || 0;
        for each (var constructor in clazz.getConstructors()) {
            if (constructor.getParameterTypes().length == params)
                return constructor.newInstance(); //could pass arguments[1:], but we don't need for now.
        }
        return null;
    };
ReflectionUtil.getMethod = 
    
    function(name, clazz, params) {
        for each (var method in clazz.getMethods()) {
            if (method.getName().equals(name) && method.getParameterTypes().length == params)
                return method;
        }
        return null;
    };


ReflectionUtil.setValue =

    function(instance, fieldName, value) {
        var field = instance.getClass().getDeclaredField(fieldName);
        field.setAccessible(true);
        field.set(instance, value);
    };

ReflectionUtil.getPackageName =
    
    function() {
        return "net.minecraft.server." + org.bukkit.Bukkit.getServer().getClass().getPackage().getName().split("\.")[3];
//        return "net.minecraft.server." + org.bukkit.Bukkit.server.class.package.name.substring(23);
    };