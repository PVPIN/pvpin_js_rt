/*********************
## Events Helper Module (canary version)
The Events helper module provides a suite of functions - one for each possible event.
For example, the events.blockDestroy() function is just a wrapper function which calls events.on(net.canarymod.hook.player.BlockDestroyHook, callback, priority)
This module is a convenience wrapper for easily adding new event handling functions in Javascript. 
At the in-game or server-console prompt, players/admins can type `events.` and use TAB completion 
to choose from any of the approx. 160 different event types to listen to.

### Usage

    events.blockDestroy( function( event ) { 
      echo( event.player, 'You broke a block!'); 
    });

The crucial difference is that the events module now has functions for each of the built-in events. The functions are accessible via TAB-completion so will help beginning programmers to explore the events at the server console window.

***/
/*********************
### events.minecartActivate()

#### Parameters 

 * callback - A function which is called whenever the [entity.MinecartActivateHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/MinecartActivateHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.minecartActivate = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.MinecartActivateHook,callback,priority);
};
/*********************
### events.villagerTradeUnlock()

#### Parameters 

 * callback - A function which is called whenever the [entity.VillagerTradeUnlockHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VillagerTradeUnlockHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.villagerTradeUnlock = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VillagerTradeUnlockHook,callback,priority);
};
/*********************
### events.mobTarget()

#### Parameters 

 * callback - A function which is called whenever the [entity.MobTargetHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/MobTargetHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.mobTarget = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.MobTargetHook,callback,priority);
};
/*********************
### events.chickenLayEgg()

#### Parameters 

 * callback - A function which is called whenever the [entity.ChickenLayEggHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/ChickenLayEggHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chickenLayEgg = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.ChickenLayEggHook,callback,priority);
};
/*********************
### events.potionEffectFinish()

#### Parameters 

 * callback - A function which is called whenever the [entity.PotionEffectFinishHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/PotionEffectFinishHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.potionEffectFinish = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.PotionEffectFinishHook,callback,priority);
};
/*********************
### events.entityMove()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityMoveHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntityMoveHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityMove = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntityMoveHook,callback,priority);
};
/*********************
### events.hangingEntityDestroy()

#### Parameters 

 * callback - A function which is called whenever the [entity.HangingEntityDestroyHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/HangingEntityDestroyHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.hangingEntityDestroy = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.HangingEntityDestroyHook,callback,priority);
};
/*********************
### events.vehicleCollision()

#### Parameters 

 * callback - A function which is called whenever the [entity.VehicleCollisionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VehicleCollisionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleCollision = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VehicleCollisionHook,callback,priority);
};
/*********************
### events.potionEffectApplied()

#### Parameters 

 * callback - A function which is called whenever the [entity.PotionEffectAppliedHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/PotionEffectAppliedHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.potionEffectApplied = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.PotionEffectAppliedHook,callback,priority);
};
/*********************
### events.vehicleDestroy()

#### Parameters 

 * callback - A function which is called whenever the [entity.VehicleDestroyHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VehicleDestroyHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleDestroy = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VehicleDestroyHook,callback,priority);
};
/*********************
### events.vehicleEnter()

#### Parameters 

 * callback - A function which is called whenever the [entity.VehicleEnterHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VehicleEnterHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleEnter = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VehicleEnterHook,callback,priority);
};
/*********************
### events.damage()

#### Parameters 

 * callback - A function which is called whenever the [entity.DamageHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/DamageHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.damage = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.DamageHook,callback,priority);
};
/*********************
### events.entityMount()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityMountHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntityMountHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityMount = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntityMountHook,callback,priority);
};
/*********************
### events.slimeSplit()

#### Parameters 

 * callback - A function which is called whenever the [entity.SlimeSplitHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/SlimeSplitHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.slimeSplit = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.SlimeSplitHook,callback,priority);
};
/*********************
### events.endermanDropBlock()

#### Parameters 

 * callback - A function which is called whenever the [entity.EndermanDropBlockHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EndermanDropBlockHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.endermanDropBlock = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EndermanDropBlockHook,callback,priority);
};
/*********************
### events.itemTouchGround()

#### Parameters 

 * callback - A function which is called whenever the [entity.ItemTouchGroundHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/ItemTouchGroundHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemTouchGround = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.ItemTouchGroundHook,callback,priority);
};
/*********************
### events.entitySpawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntitySpawnHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntitySpawnHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entitySpawn = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntitySpawnHook,callback,priority);
};
/*********************
### events.endermanPickupBlock()

#### Parameters 

 * callback - A function which is called whenever the [entity.EndermanPickupBlockHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EndermanPickupBlockHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.endermanPickupBlock = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EndermanPickupBlockHook,callback,priority);
};
/*********************
### events.vehicleDamage()

#### Parameters 

 * callback - A function which is called whenever the [entity.VehicleDamageHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VehicleDamageHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleDamage = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VehicleDamageHook,callback,priority);
};
/*********************
### events.entityLightningStruck()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityLightningStruckHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntityLightningStruckHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityLightningStruck = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntityLightningStruckHook,callback,priority);
};
/*********************
### events.entityDespawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityDespawnHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntityDespawnHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityDespawn = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntityDespawnHook,callback,priority);
};
/*********************
### events.vehicleMove()

#### Parameters 

 * callback - A function which is called whenever the [entity.VehicleMoveHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VehicleMoveHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleMove = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VehicleMoveHook,callback,priority);
};
/*********************
### events.projectileHit()

#### Parameters 

 * callback - A function which is called whenever the [entity.ProjectileHitHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/ProjectileHitHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.projectileHit = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.ProjectileHitHook,callback,priority);
};
/*********************
### events.entityDeath()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityDeathHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntityDeathHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityDeath = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntityDeathHook,callback,priority);
};
/*********************
### events.entityTame()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityTameHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/EntityTameHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityTame = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.EntityTameHook,callback,priority);
};
/*********************
### events.vehicleExit()

#### Parameters 

 * callback - A function which is called whenever the [entity.VehicleExitHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/VehicleExitHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleExit = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.VehicleExitHook,callback,priority);
};
/*********************
### events.dimensionSwitch()

#### Parameters 

 * callback - A function which is called whenever the [entity.DimensionSwitchHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/entity/DimensionSwitchHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.dimensionSwitch = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.entity.DimensionSwitchHook,callback,priority);
};
/*********************
### events.foodLevel()

#### Parameters 

 * callback - A function which is called whenever the [player.FoodLevelHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/FoodLevelHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.foodLevel = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.FoodLevelHook,callback,priority);
};
/*********************
### events.bookEdit()

#### Parameters 

 * callback - A function which is called whenever the [player.BookEditHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BookEditHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.bookEdit = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BookEditHook,callback,priority);
};
/*********************
### events.eat()

#### Parameters 

 * callback - A function which is called whenever the [player.EatHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/EatHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.eat = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.EatHook,callback,priority);
};
/*********************
### events.playerList()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerListHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerListHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerList = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerListHook,callback,priority);
};
/*********************
### events.playerIdle()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerIdleHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerIdleHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerIdle = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerIdleHook,callback,priority);
};
/*********************
### events.enchant()

#### Parameters 

 * callback - A function which is called whenever the [player.EnchantHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/EnchantHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.enchant = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.EnchantHook,callback,priority);
};
/*********************
### events.playerArmSwing()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerArmSwingHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerArmSwingHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerArmSwing = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerArmSwingHook,callback,priority);
};
/*********************
### events.teleport()

#### Parameters 

 * callback - A function which is called whenever the [player.TeleportHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/TeleportHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.teleport = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.TeleportHook,callback,priority);
};
/*********************
### events.anvilUse()

#### Parameters 

 * callback - A function which is called whenever the [player.AnvilUseHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/AnvilUseHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.anvilUse = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.AnvilUseHook,callback,priority);
};
/*********************
### events.portalUse()

#### Parameters 

 * callback - A function which is called whenever the [player.PortalUseHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PortalUseHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.portalUse = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PortalUseHook,callback,priority);
};
/*********************
### events.foodSaturation()

#### Parameters 

 * callback - A function which is called whenever the [player.FoodSaturationHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/FoodSaturationHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.foodSaturation = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.FoodSaturationHook,callback,priority);
};
/*********************
### events.connection()

#### Parameters 

 * callback - A function which is called whenever the [player.ConnectionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ConnectionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.connection = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ConnectionHook,callback,priority);
};
/*********************
### events.playerRespawned()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerRespawnedHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerRespawnedHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerRespawned = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerRespawnedHook,callback,priority);
};
/*********************
### events.armorBroken()

#### Parameters 

 * callback - A function which is called whenever the [player.ArmorBrokenHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ArmorBrokenHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.armorBroken = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ArmorBrokenHook,callback,priority);
};
/*********************
### events.levelUp()

#### Parameters 

 * callback - A function which is called whenever the [player.LevelUpHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/LevelUpHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.levelUp = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.LevelUpHook,callback,priority);
};
/*********************
### events.blockRightClick()

#### Parameters 

 * callback - A function which is called whenever the [player.BlockRightClickHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BlockRightClickHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockRightClick = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BlockRightClickHook,callback,priority);
};
/*********************
### events.itemDrop()

#### Parameters 

 * callback - A function which is called whenever the [player.ItemDropHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ItemDropHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemDrop = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ItemDropHook,callback,priority);
};
/*********************
### events.itemFrameRotate()

#### Parameters 

 * callback - A function which is called whenever the [player.ItemFrameRotateHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ItemFrameRotateHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemFrameRotate = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ItemFrameRotateHook,callback,priority);
};
/*********************
### events.playerRespawning()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerRespawningHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerRespawningHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerRespawning = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerRespawningHook,callback,priority);
};
/*********************
### events.craft()

#### Parameters 

 * callback - A function which is called whenever the [player.CraftHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/CraftHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.craft = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.CraftHook,callback,priority);
};
/*********************
### events.experience()

#### Parameters 

 * callback - A function which is called whenever the [player.ExperienceHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ExperienceHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.experience = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ExperienceHook,callback,priority);
};
/*********************
### events.signChange()

#### Parameters 

 * callback - A function which is called whenever the [player.SignChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/SignChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.signChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.SignChangeHook,callback,priority);
};
/*********************
### events.healthChange()

#### Parameters 

 * callback - A function which is called whenever the [player.HealthChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/HealthChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.healthChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.HealthChangeHook,callback,priority);
};
/*********************
### events.disconnection()

#### Parameters 

 * callback - A function which is called whenever the [player.DisconnectionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/DisconnectionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.disconnection = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.DisconnectionHook,callback,priority);
};
/*********************
### events.gameModeChange()

#### Parameters 

 * callback - A function which is called whenever the [player.GameModeChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/GameModeChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.gameModeChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.GameModeChangeHook,callback,priority);
};
/*********************
### events.preConnection()

#### Parameters 

 * callback - A function which is called whenever the [player.PreConnectionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PreConnectionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.preConnection = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PreConnectionHook,callback,priority);
};
/*********************
### events.villagerTrade()

#### Parameters 

 * callback - A function which is called whenever the [player.VillagerTradeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/VillagerTradeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.villagerTrade = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.VillagerTradeHook,callback,priority);
};
/*********************
### events.returnFromIdle()

#### Parameters 

 * callback - A function which is called whenever the [player.ReturnFromIdleHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ReturnFromIdleHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.returnFromIdle = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ReturnFromIdleHook,callback,priority);
};
/*********************
### events.armorStandModify()

#### Parameters 

 * callback - A function which is called whenever the [player.ArmorStandModifyHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ArmorStandModifyHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.armorStandModify = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ArmorStandModifyHook,callback,priority);
};
/*********************
### events.slotClick()

#### Parameters 

 * callback - A function which is called whenever the [player.SlotClickHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/SlotClickHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.slotClick = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.SlotClickHook,callback,priority);
};
/*********************
### events.itemFrameSetItem()

#### Parameters 

 * callback - A function which is called whenever the [player.ItemFrameSetItemHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ItemFrameSetItemHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemFrameSetItem = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ItemFrameSetItemHook,callback,priority);
};
/*********************
### events.entityRightClick()

#### Parameters 

 * callback - A function which is called whenever the [player.EntityRightClickHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/EntityRightClickHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityRightClick = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.EntityRightClickHook,callback,priority);
};
/*********************
### events.foodExhaustion()

#### Parameters 

 * callback - A function which is called whenever the [player.FoodExhaustionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/FoodExhaustionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.foodExhaustion = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.FoodExhaustionHook,callback,priority);
};
/*********************
### events.chat()

#### Parameters 

 * callback - A function which is called whenever the [player.ChatHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ChatHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chat = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ChatHook,callback,priority);
};
/*********************
### events.itemPickup()

#### Parameters 

 * callback - A function which is called whenever the [player.ItemPickupHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ItemPickupHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemPickup = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ItemPickupHook,callback,priority);
};
/*********************
### events.bedExit()

#### Parameters 

 * callback - A function which is called whenever the [player.BedExitHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BedExitHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.bedExit = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BedExitHook,callback,priority);
};
/*********************
### events.blockPlace()

#### Parameters 

 * callback - A function which is called whenever the [player.BlockPlaceHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BlockPlaceHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockPlace = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BlockPlaceHook,callback,priority);
};
/*********************
### events.heldItemChange()

#### Parameters 

 * callback - A function which is called whenever the [player.HeldItemChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/HeldItemChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.heldItemChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.HeldItemChangeHook,callback,priority);
};
/*********************
### events.toolBroken()

#### Parameters 

 * callback - A function which is called whenever the [player.ToolBrokenHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ToolBrokenHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.toolBroken = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ToolBrokenHook,callback,priority);
};
/*********************
### events.kick()

#### Parameters 

 * callback - A function which is called whenever the [player.KickHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/KickHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.kick = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.KickHook,callback,priority);
};
/*********************
### events.playerDeath()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerDeathHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerDeathHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerDeath = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerDeathHook,callback,priority);
};
/*********************
### events.blockLeftClick()

#### Parameters 

 * callback - A function which is called whenever the [player.BlockLeftClickHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BlockLeftClickHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockLeftClick = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BlockLeftClickHook,callback,priority);
};
/*********************
### events.blockDestroy()

#### Parameters 

 * callback - A function which is called whenever the [player.BlockDestroyHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BlockDestroyHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockDestroy = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BlockDestroyHook,callback,priority);
};
/*********************
### events.bedEnter()

#### Parameters 

 * callback - A function which is called whenever the [player.BedEnterHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BedEnterHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.bedEnter = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BedEnterHook,callback,priority);
};
/*********************
### events.signShow()

#### Parameters 

 * callback - A function which is called whenever the [player.SignShowHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/SignShowHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.signShow = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.SignShowHook,callback,priority);
};
/*********************
### events.inventory()

#### Parameters 

 * callback - A function which is called whenever the [player.InventoryHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/InventoryHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventory = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.InventoryHook,callback,priority);
};
/*********************
### events.playerMove()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerMoveHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/PlayerMoveHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerMove = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.PlayerMoveHook,callback,priority);
};
/*********************
### events.itemUse()

#### Parameters 

 * callback - A function which is called whenever the [player.ItemUseHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/ItemUseHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemUse = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.ItemUseHook,callback,priority);
};
/*********************
### events.ban()

#### Parameters 

 * callback - A function which is called whenever the [player.BanHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/BanHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.ban = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.BanHook,callback,priority);
};
/*********************
### events.statGained()

#### Parameters 

 * callback - A function which is called whenever the [player.StatGainedHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/player/StatGainedHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.statGained = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.player.StatGainedHook,callback,priority);
};
/*********************
### events.smeltBegin()

#### Parameters 

 * callback - A function which is called whenever the [world.SmeltBeginHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/SmeltBeginHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.smeltBegin = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.SmeltBeginHook,callback,priority);
};
/*********************
### events.treeGrow()

#### Parameters 

 * callback - A function which is called whenever the [world.TreeGrowHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/TreeGrowHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.treeGrow = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.TreeGrowHook,callback,priority);
};
/*********************
### events.chunkCreated()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkCreatedHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/ChunkCreatedHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkCreated = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.ChunkCreatedHook,callback,priority);
};
/*********************
### events.liquidDestroy()

#### Parameters 

 * callback - A function which is called whenever the [world.LiquidDestroyHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/LiquidDestroyHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.liquidDestroy = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.LiquidDestroyHook,callback,priority);
};
/*********************
### events.chunkLoaded()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkLoadedHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/ChunkLoadedHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkLoaded = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.ChunkLoadedHook,callback,priority);
};
/*********************
### events.pistonRetract()

#### Parameters 

 * callback - A function which is called whenever the [world.PistonRetractHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/PistonRetractHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pistonRetract = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.PistonRetractHook,callback,priority);
};
/*********************
### events.smelt()

#### Parameters 

 * callback - A function which is called whenever the [world.SmeltHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/SmeltHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.smelt = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.SmeltHook,callback,priority);
};
/*********************
### events.blockUpdate()

#### Parameters 

 * callback - A function which is called whenever the [world.BlockUpdateHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/BlockUpdateHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockUpdate = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.BlockUpdateHook,callback,priority);
};
/*********************
### events.portalDestroy()

#### Parameters 

 * callback - A function which is called whenever the [world.PortalDestroyHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/PortalDestroyHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.portalDestroy = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.PortalDestroyHook,callback,priority);
};
/*********************
### events.ignition()

#### Parameters 

 * callback - A function which is called whenever the [world.IgnitionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/IgnitionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.ignition = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.IgnitionHook,callback,priority);
};
/*********************
### events.redstoneChange()

#### Parameters 

 * callback - A function which is called whenever the [world.RedstoneChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/RedstoneChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.redstoneChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.RedstoneChangeHook,callback,priority);
};
/*********************
### events.weatherChange()

#### Parameters 

 * callback - A function which is called whenever the [world.WeatherChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/WeatherChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.weatherChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.WeatherChangeHook,callback,priority);
};
/*********************
### events.chunkCreation()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkCreationHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/ChunkCreationHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkCreation = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.ChunkCreationHook,callback,priority);
};
/*********************
### events.hopperTransfer()

#### Parameters 

 * callback - A function which is called whenever the [world.HopperTransferHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/HopperTransferHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.hopperTransfer = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.HopperTransferHook,callback,priority);
};
/*********************
### events.chunkUnload()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkUnloadHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/ChunkUnloadHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkUnload = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.ChunkUnloadHook,callback,priority);
};
/*********************
### events.blockGrow()

#### Parameters 

 * callback - A function which is called whenever the [world.BlockGrowHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/BlockGrowHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockGrow = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.BlockGrowHook,callback,priority);
};
/*********************
### events.dispense()

#### Parameters 

 * callback - A function which is called whenever the [world.DispenseHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/DispenseHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.dispense = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.DispenseHook,callback,priority);
};
/*********************
### events.blockDropXp()

#### Parameters 

 * callback - A function which is called whenever the [world.BlockDropXpHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/BlockDropXpHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockDropXp = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.BlockDropXpHook,callback,priority);
};
/*********************
### events.fireworkExplode()

#### Parameters 

 * callback - A function which is called whenever the [world.FireworkExplodeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/FireworkExplodeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.fireworkExplode = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.FireworkExplodeHook,callback,priority);
};
/*********************
### events.leafDecay()

#### Parameters 

 * callback - A function which is called whenever the [world.LeafDecayHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/LeafDecayHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.leafDecay = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.LeafDecayHook,callback,priority);
};
/*********************
### events.pistonExtend()

#### Parameters 

 * callback - A function which is called whenever the [world.PistonExtendHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/PistonExtendHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pistonExtend = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.PistonExtendHook,callback,priority);
};
/*********************
### events.noteBlockPlay()

#### Parameters 

 * callback - A function which is called whenever the [world.NoteBlockPlayHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/NoteBlockPlayHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.noteBlockPlay = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.NoteBlockPlayHook,callback,priority);
};
/*********************
### events.lightningStrike()

#### Parameters 

 * callback - A function which is called whenever the [world.LightningStrikeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/LightningStrikeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.lightningStrike = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.LightningStrikeHook,callback,priority);
};
/*********************
### events.decorate()

#### Parameters 

 * callback - A function which is called whenever the [world.DecorateHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/DecorateHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.decorate = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.DecorateHook,callback,priority);
};
/*********************
### events.explosion()

#### Parameters 

 * callback - A function which is called whenever the [world.ExplosionHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/ExplosionHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.explosion = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.ExplosionHook,callback,priority);
};
/*********************
### events.tNTActivate()

#### Parameters 

 * callback - A function which is called whenever the [world.TNTActivateHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/TNTActivateHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.tNTActivate = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.TNTActivateHook,callback,priority);
};
/*********************
### events.timeChange()

#### Parameters 

 * callback - A function which is called whenever the [world.TimeChangeHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/TimeChangeHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.timeChange = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.TimeChangeHook,callback,priority);
};
/*********************
### events.flow()

#### Parameters 

 * callback - A function which is called whenever the [world.FlowHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/FlowHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.flow = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.FlowHook,callback,priority);
};
/*********************
### events.portalCreate()

#### Parameters 

 * callback - A function which is called whenever the [world.PortalCreateHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/PortalCreateHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.portalCreate = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.PortalCreateHook,callback,priority);
};
/*********************
### events.blockPhysics()

#### Parameters 

 * callback - A function which is called whenever the [world.BlockPhysicsHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/world/BlockPhysicsHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockPhysics = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.world.BlockPhysicsHook,callback,priority);
};
/*********************
### events.playerCommand()

#### Parameters 

 * callback - A function which is called whenever the [command.PlayerCommandHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/command/PlayerCommandHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerCommand = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.command.PlayerCommandHook,callback,priority);
};
/*********************
### events.consoleCommand()

#### Parameters 

 * callback - A function which is called whenever the [command.ConsoleCommandHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/command/ConsoleCommandHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.consoleCommand = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.command.ConsoleCommandHook,callback,priority);
};
/*********************
### events.commandBlockCommand()

#### Parameters 

 * callback - A function which is called whenever the [command.CommandBlockCommandHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/command/CommandBlockCommandHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.commandBlockCommand = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.command.CommandBlockCommandHook,callback,priority);
};
/*********************
### events.loadWorld()

#### Parameters 

 * callback - A function which is called whenever the [system.LoadWorldHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/LoadWorldHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.loadWorld = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.LoadWorldHook,callback,priority);
};
/*********************
### events.permissionCheck()

#### Parameters 

 * callback - A function which is called whenever the [system.PermissionCheckHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/PermissionCheckHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.permissionCheck = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.PermissionCheckHook,callback,priority);
};
/*********************
### events.serverGuiStart()

#### Parameters 

 * callback - A function which is called whenever the [system.ServerGuiStartHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/ServerGuiStartHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serverGuiStart = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.ServerGuiStartHook,callback,priority);
};
/*********************
### events.unloadWorld()

#### Parameters 

 * callback - A function which is called whenever the [system.UnloadWorldHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/UnloadWorldHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.unloadWorld = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.UnloadWorldHook,callback,priority);
};
/*********************
### events.pluginDisable()

#### Parameters 

 * callback - A function which is called whenever the [system.PluginDisableHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/PluginDisableHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pluginDisable = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.PluginDisableHook,callback,priority);
};
/*********************
### events.pluginEnable()

#### Parameters 

 * callback - A function which is called whenever the [system.PluginEnableHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/PluginEnableHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pluginEnable = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.PluginEnableHook,callback,priority);
};
/*********************
### events.serverTick()

#### Parameters 

 * callback - A function which is called whenever the [system.ServerTickHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/ServerTickHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serverTick = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.ServerTickHook,callback,priority);
};
/*********************
### events.serverListPing()

#### Parameters 

 * callback - A function which is called whenever the [system.ServerListPingHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/ServerListPingHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serverListPing = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.ServerListPingHook,callback,priority);
};
/*********************
### events.serverShutdown()

#### Parameters 

 * callback - A function which is called whenever the [system.ServerShutdownHook event](https://ci.visualillusionsent.net/job/CanaryLib/javadoc/net/canarymod/hook/system/ServerShutdownHook.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serverShutdown = function(callback,priority){ 
  return events.on(Packages.net.canarymod.hook.system.ServerShutdownHook,callback,priority);
};
