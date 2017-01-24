/*********************
## Events Helper Module (bukkit version)
The Events helper module provides a suite of functions - one for each possible event.
For example, the events.blockBreak() function is just a wrapper function which calls events.on(org.bukkit.event.block.BlockBreakEvent, callback, priority)
This module is a convenience wrapper for easily adding new event handling functions in Javascript. 
At the in-game or server-console prompt, players/admins can type `events.` and use TAB completion 
to choose from any of the approx. 160 different event types to listen to.

### Usage

    events.blockBreak( function( event ) { 
      echo( event.player, 'You broke a block!'); 
    });

The crucial difference is that the events module now has functions for each of the built-in events. The functions are accessible via TAB-completion so will help beginning programmers to explore the events at the server console window.

***/
/*********************
### events.weatherChange()

#### Parameters 

 * callback - A function which is called whenever the [weather.WeatherChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/WeatherChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.weatherChange = function(callback,priority){ 
  return events.on(org.bukkit.event.weather.WeatherChangeEvent,callback,priority);
};
/*********************
### events.lightningStrike()

#### Parameters 

 * callback - A function which is called whenever the [weather.LightningStrikeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/LightningStrikeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.lightningStrike = function(callback,priority){ 
  return events.on(org.bukkit.event.weather.LightningStrikeEvent,callback,priority);
};
/*********************
### events.thunderChange()

#### Parameters 

 * callback - A function which is called whenever the [weather.ThunderChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/ThunderChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.thunderChange = function(callback,priority){ 
  return events.on(org.bukkit.event.weather.ThunderChangeEvent,callback,priority);
};
/*********************
### events.vehicleMove()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleMoveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleMove = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleMoveEvent,callback,priority);
};
/*********************
### events.vehicleDestroy()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleDestroyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDestroyEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleDestroy = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleDestroyEvent,callback,priority);
};
/*********************
### events.vehicleExit()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleExitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleExit = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleExitEvent,callback,priority);
};
/*********************
### events.vehicleEntityCollision()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleEntityCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEntityCollisionEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleEntityCollision = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleEntityCollisionEvent,callback,priority);
};
/*********************
### events.vehicleBlockCollision()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleBlockCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleBlockCollisionEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleBlockCollision = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleBlockCollisionEvent,callback,priority);
};
/*********************
### events.vehicleEnter()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEnterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleEnter = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleEnterEvent,callback,priority);
};
/*********************
### events.vehicleDamage()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleDamage = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleDamageEvent,callback,priority);
};
/*********************
### events.vehicleUpdate()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleUpdateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleUpdateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleUpdate = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleUpdateEvent,callback,priority);
};
/*********************
### events.vehicleCreate()

#### Parameters 

 * callback - A function which is called whenever the [vehicle.VehicleCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleCreateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.vehicleCreate = function(callback,priority){ 
  return events.on(org.bukkit.event.vehicle.VehicleCreateEvent,callback,priority);
};
/*********************
### events.paintingBreak()

#### Parameters 

 * callback - A function which is called whenever the [painting.PaintingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/painting/PaintingBreakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.paintingBreak = function(callback,priority){ 
  return events.on(org.bukkit.event.painting.PaintingBreakEvent,callback,priority);
};
/*********************
### events.paintingBreakByEntity()

#### Parameters 

 * callback - A function which is called whenever the [painting.PaintingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/painting/PaintingBreakByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.paintingBreakByEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.painting.PaintingBreakByEntityEvent,callback,priority);
};
/*********************
### events.paintingPlace()

#### Parameters 

 * callback - A function which is called whenever the [painting.PaintingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/painting/PaintingPlaceEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.paintingPlace = function(callback,priority){ 
  return events.on(org.bukkit.event.painting.PaintingPlaceEvent,callback,priority);
};
/*********************
### events.enchantItem()

#### Parameters 

 * callback - A function which is called whenever the [enchantment.EnchantItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/EnchantItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.enchantItem = function(callback,priority){ 
  return events.on(org.bukkit.event.enchantment.EnchantItemEvent,callback,priority);
};
/*********************
### events.prepareItemEnchant()

#### Parameters 

 * callback - A function which is called whenever the [enchantment.PrepareItemEnchantEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/PrepareItemEnchantEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.prepareItemEnchant = function(callback,priority){ 
  return events.on(org.bukkit.event.enchantment.PrepareItemEnchantEvent,callback,priority);
};
/*********************
### events.playerInteractEntity()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerInteractEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerInteractEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerInteractEntityEvent,callback,priority);
};
/*********************
### events.playerEggThrow()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerEggThrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEggThrowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerEggThrow = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerEggThrowEvent,callback,priority);
};
/*********************
### events.playerUnleashEntity()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerUnleashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnleashEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerUnleashEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerUnleashEntityEvent,callback,priority);
};
/*********************
### events.playerInventory()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerInventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInventoryEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerInventory = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerInventoryEvent,callback,priority);
};
/*********************
### events.playerLevelChange()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLevelChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerLevelChange = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerLevelChangeEvent,callback,priority);
};
/*********************
### events.playerPortal()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPortalEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerPortal = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerPortalEvent,callback,priority);
};
/*********************
### events.playerItemConsume()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerItemConsumeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemConsumeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerItemConsume = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerItemConsumeEvent,callback,priority);
};
/*********************
### events.playerTeleport()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerTeleportEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerTeleport = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerTeleportEvent,callback,priority);
};
/*********************
### events.playerBedEnter()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerBedEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedEnterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerBedEnter = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerBedEnterEvent,callback,priority);
};
/*********************
### events.playerUnregisterChannel()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerUnregisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnregisterChannelEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerUnregisterChannel = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerUnregisterChannelEvent,callback,priority);
};
/*********************
### events.playerArmorStandManipulate()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerArmorStandManipulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerArmorStandManipulateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerArmorStandManipulate = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerArmorStandManipulateEvent,callback,priority);
};
/*********************
### events.playerChat()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerChat = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerChatEvent,callback,priority);
};
/*********************
### events.playerShearEntity()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerShearEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerShearEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerShearEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerShearEntityEvent,callback,priority);
};
/*********************
### events.playerItemDamage()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerItemDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerItemDamage = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerItemDamageEvent,callback,priority);
};
/*********************
### events.asyncPlayerChat()

#### Parameters 

 * callback - A function which is called whenever the [player.AsyncPlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerChatEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.asyncPlayerChat = function(callback,priority){ 
  return events.on(org.bukkit.event.player.AsyncPlayerChatEvent,callback,priority);
};
/*********************
### events.playerDropItem()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerDropItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerDropItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerDropItem = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerDropItemEvent,callback,priority);
};
/*********************
### events.playerRegisterChannel()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerRegisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRegisterChannelEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerRegisterChannel = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerRegisterChannelEvent,callback,priority);
};
/*********************
### events.playerMove()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerMoveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerMove = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerMoveEvent,callback,priority);
};
/*********************
### events.playerItemBreak()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerItemBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemBreakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerItemBreak = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerItemBreakEvent,callback,priority);
};
/*********************
### events.playerBucketEmpty()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerBucketEmptyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketEmptyEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerBucketEmpty = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerBucketEmptyEvent,callback,priority);
};
/*********************
### events.playerStatisticIncrement()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerStatisticIncrementEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerStatisticIncrementEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerStatisticIncrement = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerStatisticIncrementEvent,callback,priority);
};
/*********************
### events.playerToggleFlight()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerToggleFlightEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleFlightEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerToggleFlight = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerToggleFlightEvent,callback,priority);
};
/*********************
### events.playerItemHeld()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerItemHeldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemHeldEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerItemHeld = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerItemHeldEvent,callback,priority);
};
/*********************
### events.playerAchievementAwarded()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerAchievementAwardedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAchievementAwardedEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerAchievementAwarded = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerAchievementAwardedEvent,callback,priority);
};
/*********************
### events.playerToggleSneak()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerToggleSneakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSneakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerToggleSneak = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerToggleSneakEvent,callback,priority);
};
/*********************
### events.playerExpChange()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerExpChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerExpChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerExpChange = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerExpChangeEvent,callback,priority);
};
/*********************
### events.playerResourcePackStatus()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerResourcePackStatusEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerResourcePackStatusEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerResourcePackStatus = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerResourcePackStatusEvent,callback,priority);
};
/*********************
### events.playerPreLogin()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPreLoginEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerPreLogin = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerPreLoginEvent,callback,priority);
};
/*********************
### events.playerJoin()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerJoinEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerJoinEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerJoin = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerJoinEvent,callback,priority);
};
/*********************
### events.playerAnimation()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerAnimationEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAnimationEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerAnimation = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerAnimationEvent,callback,priority);
};
/*********************
### events.playerEditBook()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerEditBookEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEditBookEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerEditBook = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerEditBookEvent,callback,priority);
};
/*********************
### events.playerPickupItem()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerPickupItem = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerPickupItemEvent,callback,priority);
};
/*********************
### events.playerInteractAtEntity()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerInteractAtEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractAtEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerInteractAtEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerInteractAtEntityEvent,callback,priority);
};
/*********************
### events.playerChangedWorld()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerChangedWorldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedWorldEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerChangedWorld = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerChangedWorldEvent,callback,priority);
};
/*********************
### events.playerFish()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerFishEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerFishEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerFish = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerFishEvent,callback,priority);
};
/*********************
### events.playerChatTabComplete()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerChatTabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatTabCompleteEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerChatTabComplete = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerChatTabCompleteEvent,callback,priority);
};
/*********************
### events.playerRespawn()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerRespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRespawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerRespawn = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerRespawnEvent,callback,priority);
};
/*********************
### events.playerBedLeave()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerBedLeaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedLeaveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerBedLeave = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerBedLeaveEvent,callback,priority);
};
/*********************
### events.asyncPlayerPreLogin()

#### Parameters 

 * callback - A function which is called whenever the [player.AsyncPlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerPreLoginEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.asyncPlayerPreLogin = function(callback,priority){ 
  return events.on(org.bukkit.event.player.AsyncPlayerPreLoginEvent,callback,priority);
};
/*********************
### events.playerInteract()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerInteract = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerInteractEvent,callback,priority);
};
/*********************
### events.playerBucketFill()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerBucketFillEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketFillEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerBucketFill = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerBucketFillEvent,callback,priority);
};
/*********************
### events.playerVelocity()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerVelocityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerVelocityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerVelocity = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerVelocityEvent,callback,priority);
};
/*********************
### events.playerQuit()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerQuitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerQuitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerQuit = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerQuitEvent,callback,priority);
};
/*********************
### events.playerLogin()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLoginEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerLogin = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerLoginEvent,callback,priority);
};
/*********************
### events.playerKick()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerKickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerKickEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerKick = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerKickEvent,callback,priority);
};
/*********************
### events.playerToggleSprint()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerToggleSprintEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSprintEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerToggleSprint = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerToggleSprintEvent,callback,priority);
};
/*********************
### events.playerCommandPreprocess()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerCommandPreprocessEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerCommandPreprocessEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerCommandPreprocess = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerCommandPreprocessEvent,callback,priority);
};
/*********************
### events.playerGameModeChange()

#### Parameters 

 * callback - A function which is called whenever the [player.PlayerGameModeChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerGameModeChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerGameModeChange = function(callback,priority){ 
  return events.on(org.bukkit.event.player.PlayerGameModeChangeEvent,callback,priority);
};
/*********************
### events.furnaceSmelt()

#### Parameters 

 * callback - A function which is called whenever the [inventory.FurnaceSmeltEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceSmeltEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.furnaceSmelt = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.FurnaceSmeltEvent,callback,priority);
};
/*********************
### events.inventoryDrag()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryDragEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryDragEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryDrag = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryDragEvent,callback,priority);
};
/*********************
### events.craftItem()

#### Parameters 

 * callback - A function which is called whenever the [inventory.CraftItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/CraftItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.craftItem = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.CraftItemEvent,callback,priority);
};
/*********************
### events.furnaceBurn()

#### Parameters 

 * callback - A function which is called whenever the [inventory.FurnaceBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceBurnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.furnaceBurn = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.FurnaceBurnEvent,callback,priority);
};
/*********************
### events.inventoryOpen()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryOpenEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryOpenEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryOpen = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryOpenEvent,callback,priority);
};
/*********************
### events.inventoryPickupItem()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryPickupItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryPickupItem = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryPickupItemEvent,callback,priority);
};
/*********************
### events.inventoryMoveItem()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryMoveItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryMoveItemEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryMoveItem = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryMoveItemEvent,callback,priority);
};
/*********************
### events.inventoryClick()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryClickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryClickEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryClick = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryClickEvent,callback,priority);
};
/*********************
### events.inventoryClose()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryCloseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCloseEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryClose = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryCloseEvent,callback,priority);
};
/*********************
### events.inventoryCreative()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryCreativeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCreativeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventoryCreative = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryCreativeEvent,callback,priority);
};
/*********************
### events.inventory()

#### Parameters 

 * callback - A function which is called whenever the [inventory.InventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.inventory = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.InventoryEvent,callback,priority);
};
/*********************
### events.prepareItemCraft()

#### Parameters 

 * callback - A function which is called whenever the [inventory.PrepareItemCraftEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareItemCraftEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.prepareItemCraft = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.PrepareItemCraftEvent,callback,priority);
};
/*********************
### events.furnaceExtract()

#### Parameters 

 * callback - A function which is called whenever the [inventory.FurnaceExtractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceExtractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.furnaceExtract = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.FurnaceExtractEvent,callback,priority);
};
/*********************
### events.brew()

#### Parameters 

 * callback - A function which is called whenever the [inventory.BrewEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.brew = function(callback,priority){ 
  return events.on(org.bukkit.event.inventory.BrewEvent,callback,priority);
};
/*********************
### events.serverCommand()

#### Parameters 

 * callback - A function which is called whenever the [server.ServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerCommandEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serverCommand = function(callback,priority){ 
  return events.on(org.bukkit.event.server.ServerCommandEvent,callback,priority);
};
/*********************
### events.serverListPing()

#### Parameters 

 * callback - A function which is called whenever the [server.ServerListPingEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerListPingEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serverListPing = function(callback,priority){ 
  return events.on(org.bukkit.event.server.ServerListPingEvent,callback,priority);
};
/*********************
### events.serviceRegister()

#### Parameters 

 * callback - A function which is called whenever the [server.ServiceRegisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serviceRegister = function(callback,priority){ 
  return events.on(org.bukkit.event.server.ServiceRegisterEvent,callback,priority);
};
/*********************
### events.pluginDisable()

#### Parameters 

 * callback - A function which is called whenever the [server.PluginDisableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginDisableEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pluginDisable = function(callback,priority){ 
  return events.on(org.bukkit.event.server.PluginDisableEvent,callback,priority);
};
/*********************
### events.remoteServerCommand()

#### Parameters 

 * callback - A function which is called whenever the [server.RemoteServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/RemoteServerCommandEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.remoteServerCommand = function(callback,priority){ 
  return events.on(org.bukkit.event.server.RemoteServerCommandEvent,callback,priority);
};
/*********************
### events.mapInitialize()

#### Parameters 

 * callback - A function which is called whenever the [server.MapInitializeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/MapInitializeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.mapInitialize = function(callback,priority){ 
  return events.on(org.bukkit.event.server.MapInitializeEvent,callback,priority);
};
/*********************
### events.serviceUnregister()

#### Parameters 

 * callback - A function which is called whenever the [server.ServiceUnregisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.serviceUnregister = function(callback,priority){ 
  return events.on(org.bukkit.event.server.ServiceUnregisterEvent,callback,priority);
};
/*********************
### events.pluginEnable()

#### Parameters 

 * callback - A function which is called whenever the [server.PluginEnableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginEnableEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pluginEnable = function(callback,priority){ 
  return events.on(org.bukkit.event.server.PluginEnableEvent,callback,priority);
};
/*********************
### events.playerDeath()

#### Parameters 

 * callback - A function which is called whenever the [entity.PlayerDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerDeathEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerDeath = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.PlayerDeathEvent,callback,priority);
};
/*********************
### events.entityCreatePortal()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityCreatePortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCreatePortalEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityCreatePortal = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityCreatePortalEvent,callback,priority);
};
/*********************
### events.entityCombust()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityCombustEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityCombust = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityCombustEvent,callback,priority);
};
/*********************
### events.sheepDyeWool()

#### Parameters 

 * callback - A function which is called whenever the [entity.SheepDyeWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepDyeWoolEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.sheepDyeWool = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.SheepDyeWoolEvent,callback,priority);
};
/*********************
### events.expBottle()

#### Parameters 

 * callback - A function which is called whenever the [entity.ExpBottleEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExpBottleEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.expBottle = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ExpBottleEvent,callback,priority);
};
/*********************
### events.entityTame()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityTameEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTameEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityTame = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityTameEvent,callback,priority);
};
/*********************
### events.projectileLaunch()

#### Parameters 

 * callback - A function which is called whenever the [entity.ProjectileLaunchEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileLaunchEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.projectileLaunch = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ProjectileLaunchEvent,callback,priority);
};
/*********************
### events.entityDamage()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityDamage = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityDamageEvent,callback,priority);
};
/*********************
### events.itemSpawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.ItemSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemSpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemSpawn = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ItemSpawnEvent,callback,priority);
};
/*********************
### events.projectileHit()

#### Parameters 

 * callback - A function which is called whenever the [entity.ProjectileHitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileHitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.projectileHit = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ProjectileHitEvent,callback,priority);
};
/*********************
### events.foodLevelChange()

#### Parameters 

 * callback - A function which is called whenever the [entity.FoodLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FoodLevelChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.foodLevelChange = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.FoodLevelChangeEvent,callback,priority);
};
/*********************
### events.itemDespawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.ItemDespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemDespawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemDespawn = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ItemDespawnEvent,callback,priority);
};
/*********************
### events.entityPortalEnter()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityPortalEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEnterEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityPortalEnter = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityPortalEnterEvent,callback,priority);
};
/*********************
### events.entityPortal()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityPortal = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityPortalEvent,callback,priority);
};
/*********************
### events.entityTarget()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityTargetEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityTarget = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityTargetEvent,callback,priority);
};
/*********************
### events.entityDeath()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDeathEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityDeath = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityDeathEvent,callback,priority);
};
/*********************
### events.entitySpawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntitySpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntitySpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entitySpawn = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntitySpawnEvent,callback,priority);
};
/*********************
### events.sheepRegrowWool()

#### Parameters 

 * callback - A function which is called whenever the [entity.SheepRegrowWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepRegrowWoolEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.sheepRegrowWool = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.SheepRegrowWoolEvent,callback,priority);
};
/*********************
### events.entityShootBow()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityShootBowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityShootBowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityShootBow = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityShootBowEvent,callback,priority);
};
/*********************
### events.creeperPower()

#### Parameters 

 * callback - A function which is called whenever the [entity.CreeperPowerEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreeperPowerEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.creeperPower = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.CreeperPowerEvent,callback,priority);
};
/*********************
### events.entityCombustByBlock()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityCombustByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByBlockEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityCombustByBlock = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityCombustByBlockEvent,callback,priority);
};
/*********************
### events.entityBreakDoor()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityBreakDoorEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreakDoorEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityBreakDoor = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityBreakDoorEvent,callback,priority);
};
/*********************
### events.entityDamageByEntity()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityDamageByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityDamageByEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityDamageByEntityEvent,callback,priority);
};
/*********************
### events.entityUnleash()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityUnleashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityUnleashEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityUnleash = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityUnleashEvent,callback,priority);
};
/*********************
### events.entityExplode()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityExplodeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityExplode = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityExplodeEvent,callback,priority);
};
/*********************
### events.entityInteract()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityInteractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityInteract = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityInteractEvent,callback,priority);
};
/*********************
### events.explosionPrime()

#### Parameters 

 * callback - A function which is called whenever the [entity.ExplosionPrimeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExplosionPrimeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.explosionPrime = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ExplosionPrimeEvent,callback,priority);
};
/*********************
### events.horseJump()

#### Parameters 

 * callback - A function which is called whenever the [entity.HorseJumpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/HorseJumpEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.horseJump = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.HorseJumpEvent,callback,priority);
};
/*********************
### events.creatureSpawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.CreatureSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreatureSpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.creatureSpawn = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.CreatureSpawnEvent,callback,priority);
};
/*********************
### events.entityCombustByEntity()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityCombustByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityCombustByEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityCombustByEntityEvent,callback,priority);
};
/*********************
### events.entityDamageByBlock()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityDamageByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByBlockEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityDamageByBlock = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityDamageByBlockEvent,callback,priority);
};
/*********************
### events.entityTargetLivingEntity()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityTargetLivingEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetLivingEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityTargetLivingEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityTargetLivingEntityEvent,callback,priority);
};
/*********************
### events.entityTeleport()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTeleportEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityTeleport = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityTeleportEvent,callback,priority);
};
/*********************
### events.playerLeashEntity()

#### Parameters 

 * callback - A function which is called whenever the [entity.PlayerLeashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerLeashEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.playerLeashEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.PlayerLeashEntityEvent,callback,priority);
};
/*********************
### events.spawnerSpawn()

#### Parameters 

 * callback - A function which is called whenever the [entity.SpawnerSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SpawnerSpawnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.spawnerSpawn = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.SpawnerSpawnEvent,callback,priority);
};
/*********************
### events.itemMerge()

#### Parameters 

 * callback - A function which is called whenever the [entity.ItemMergeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemMergeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.itemMerge = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.ItemMergeEvent,callback,priority);
};
/*********************
### events.slimeSplit()

#### Parameters 

 * callback - A function which is called whenever the [entity.SlimeSplitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SlimeSplitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.slimeSplit = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.SlimeSplitEvent,callback,priority);
};
/*********************
### events.pigZap()

#### Parameters 

 * callback - A function which is called whenever the [entity.PigZapEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PigZapEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.pigZap = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.PigZapEvent,callback,priority);
};
/*********************
### events.potionSplash()

#### Parameters 

 * callback - A function which is called whenever the [entity.PotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PotionSplashEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.potionSplash = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.PotionSplashEvent,callback,priority);
};
/*********************
### events.entityChangeBlock()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityChangeBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityChangeBlockEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityChangeBlock = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityChangeBlockEvent,callback,priority);
};
/*********************
### events.entityPortalExit()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityPortalExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalExitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityPortalExit = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityPortalExitEvent,callback,priority);
};
/*********************
### events.entityRegainHealth()

#### Parameters 

 * callback - A function which is called whenever the [entity.EntityRegainHealthEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityRegainHealthEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityRegainHealth = function(callback,priority){ 
  return events.on(org.bukkit.event.entity.EntityRegainHealthEvent,callback,priority);
};
/*********************
### events.entityBlockForm()

#### Parameters 

 * callback - A function which is called whenever the [block.EntityBlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/EntityBlockFormEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.entityBlockForm = function(callback,priority){ 
  return events.on(org.bukkit.event.block.EntityBlockFormEvent,callback,priority);
};
/*********************
### events.blockSpread()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockSpreadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockSpreadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockSpread = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockSpreadEvent,callback,priority);
};
/*********************
### events.blockMultiPlace()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockMultiPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockMultiPlaceEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockMultiPlace = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockMultiPlaceEvent,callback,priority);
};
/*********************
### events.blockExplode()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExplodeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockExplode = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockExplodeEvent,callback,priority);
};
/*********************
### events.notePlay()

#### Parameters 

 * callback - A function which is called whenever the [block.NotePlayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/NotePlayEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.notePlay = function(callback,priority){ 
  return events.on(org.bukkit.event.block.NotePlayEvent,callback,priority);
};
/*********************
### events.blockFade()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockFadeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFadeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockFade = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockFadeEvent,callback,priority);
};
/*********************
### events.blockPlace()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPlaceEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockPlace = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockPlaceEvent,callback,priority);
};
/*********************
### events.blockPhysics()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockPhysicsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPhysicsEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockPhysics = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockPhysicsEvent,callback,priority);
};
/*********************
### events.blockIgnite()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockIgniteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockIgniteEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockIgnite = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockIgniteEvent,callback,priority);
};
/*********************
### events.blockBreak()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBreakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockBreak = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockBreakEvent,callback,priority);
};
/*********************
### events.blockBurn()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBurnEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockBurn = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockBurnEvent,callback,priority);
};
/*********************
### events.blockFromTo()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockFromToEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFromToEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockFromTo = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockFromToEvent,callback,priority);
};
/*********************
### events.blockRedstone()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockRedstoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockRedstoneEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockRedstone = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockRedstoneEvent,callback,priority);
};
/*********************
### events.blockPistonRetract()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockPistonRetractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonRetractEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockPistonRetract = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockPistonRetractEvent,callback,priority);
};
/*********************
### events.blockDispense()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockDispenseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDispenseEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockDispense = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockDispenseEvent,callback,priority);
};
/*********************
### events.signChange()

#### Parameters 

 * callback - A function which is called whenever the [block.SignChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/SignChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.signChange = function(callback,priority){ 
  return events.on(org.bukkit.event.block.SignChangeEvent,callback,priority);
};
/*********************
### events.blockPistonExtend()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockPistonExtendEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonExtendEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockPistonExtend = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockPistonExtendEvent,callback,priority);
};
/*********************
### events.blockCanBuild()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockCanBuildEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockCanBuildEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockCanBuild = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockCanBuildEvent,callback,priority);
};
/*********************
### events.blockGrow()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockGrowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockGrow = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockGrowEvent,callback,priority);
};
/*********************
### events.leavesDecay()

#### Parameters 

 * callback - A function which is called whenever the [block.LeavesDecayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/LeavesDecayEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.leavesDecay = function(callback,priority){ 
  return events.on(org.bukkit.event.block.LeavesDecayEvent,callback,priority);
};
/*********************
### events.blockExp()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockExpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExpEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockExp = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockExpEvent,callback,priority);
};
/*********************
### events.blockForm()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFormEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockForm = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockFormEvent,callback,priority);
};
/*********************
### events.blockDamage()

#### Parameters 

 * callback - A function which is called whenever the [block.BlockDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDamageEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.blockDamage = function(callback,priority){ 
  return events.on(org.bukkit.event.block.BlockDamageEvent,callback,priority);
};
/*********************
### events.hangingPlace()

#### Parameters 

 * callback - A function which is called whenever the [hanging.HangingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingPlaceEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.hangingPlace = function(callback,priority){ 
  return events.on(org.bukkit.event.hanging.HangingPlaceEvent,callback,priority);
};
/*********************
### events.hangingBreakByEntity()

#### Parameters 

 * callback - A function which is called whenever the [hanging.HangingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakByEntityEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.hangingBreakByEntity = function(callback,priority){ 
  return events.on(org.bukkit.event.hanging.HangingBreakByEntityEvent,callback,priority);
};
/*********************
### events.hangingBreak()

#### Parameters 

 * callback - A function which is called whenever the [hanging.HangingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.hangingBreak = function(callback,priority){ 
  return events.on(org.bukkit.event.hanging.HangingBreakEvent,callback,priority);
};
/*********************
### events.structureGrow()

#### Parameters 

 * callback - A function which is called whenever the [world.StructureGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/StructureGrowEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.structureGrow = function(callback,priority){ 
  return events.on(org.bukkit.event.world.StructureGrowEvent,callback,priority);
};
/*********************
### events.spawnChange()

#### Parameters 

 * callback - A function which is called whenever the [world.SpawnChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/SpawnChangeEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.spawnChange = function(callback,priority){ 
  return events.on(org.bukkit.event.world.SpawnChangeEvent,callback,priority);
};
/*********************
### events.worldLoad()

#### Parameters 

 * callback - A function which is called whenever the [world.WorldLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldLoadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.worldLoad = function(callback,priority){ 
  return events.on(org.bukkit.event.world.WorldLoadEvent,callback,priority);
};
/*********************
### events.worldInit()

#### Parameters 

 * callback - A function which is called whenever the [world.WorldInitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldInitEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.worldInit = function(callback,priority){ 
  return events.on(org.bukkit.event.world.WorldInitEvent,callback,priority);
};
/*********************
### events.worldUnload()

#### Parameters 

 * callback - A function which is called whenever the [world.WorldUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldUnloadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.worldUnload = function(callback,priority){ 
  return events.on(org.bukkit.event.world.WorldUnloadEvent,callback,priority);
};
/*********************
### events.worldSave()

#### Parameters 

 * callback - A function which is called whenever the [world.WorldSaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldSaveEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.worldSave = function(callback,priority){ 
  return events.on(org.bukkit.event.world.WorldSaveEvent,callback,priority);
};
/*********************
### events.chunkUnload()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkUnloadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkUnload = function(callback,priority){ 
  return events.on(org.bukkit.event.world.ChunkUnloadEvent,callback,priority);
};
/*********************
### events.chunkPopulate()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkPopulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkPopulateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkPopulate = function(callback,priority){ 
  return events.on(org.bukkit.event.world.ChunkPopulateEvent,callback,priority);
};
/*********************
### events.portalCreate()

#### Parameters 

 * callback - A function which is called whenever the [world.PortalCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/PortalCreateEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.portalCreate = function(callback,priority){ 
  return events.on(org.bukkit.event.world.PortalCreateEvent,callback,priority);
};
/*********************
### events.chunkLoad()

#### Parameters 

 * callback - A function which is called whenever the [world.ChunkLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkLoadEvent.html) is fired

 * priority - optional - see events.on() for more information.

***/
exports.chunkLoad = function(callback,priority){ 
  return events.on(org.bukkit.event.world.ChunkLoadEvent,callback,priority);
};
