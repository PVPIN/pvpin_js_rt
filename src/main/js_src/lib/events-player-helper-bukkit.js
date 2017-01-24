/*********************
## Events Helper Module (bukkit version)
The Events helper module provides a suite of functions - one for each possible event.
For example, the events.blockBreak() function is just a wrapper function which calls events.plon(org.bukkit.event.block.BlockBreakEvent, callback, priority)
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

 * priority - optional - see events.plon() for more information.

***/
exports.pl_weatherChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.weather.WeatherChangeEvent,callback,player,priority);
};
/*********************
### events.lightningStrike()

#### Parameters

 * callback - A function which is called whenever the [weather.LightningStrikeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/LightningStrikeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_lightningStrike = function(callback,player,priority){
  return events.plon(org.bukkit.event.weather.LightningStrikeEvent,callback,player,priority);
};
/*********************
### events.thunderChange()

#### Parameters

 * callback - A function which is called whenever the [weather.ThunderChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/weather/ThunderChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_thunderChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.weather.ThunderChangeEvent,callback,player,priority);
};
/*********************
### events.vehicleMove()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleMoveEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleMove = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleMoveEvent,callback,player,priority);
};
/*********************
### events.vehicleDestroy()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleDestroyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDestroyEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleDestroy = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleDestroyEvent,callback,player,priority);
};
/*********************
### events.vehicleExit()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleExitEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleExit = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleExitEvent,callback,player,priority);
};
/*********************
### events.vehicleEntityCollision()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleEntityCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEntityCollisionEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleEntityCollision = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleEntityCollisionEvent,callback,player,priority);
};
/*********************
### events.vehicleBlockCollision()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleBlockCollisionEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleBlockCollisionEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleBlockCollision = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleBlockCollisionEvent,callback,player,priority);
};
/*********************
### events.vehicleEnter()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleEnterEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleEnter = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleEnterEvent,callback,player,priority);
};
/*********************
### events.vehicleDamage()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleDamageEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleDamage = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleDamageEvent,callback,player,priority);
};
/*********************
### events.vehicleUpdate()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleUpdateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleUpdateEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleUpdate = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleUpdateEvent,callback,player,priority);
};
/*********************
### events.vehicleCreate()

#### Parameters

 * callback - A function which is called whenever the [vehicle.VehicleCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/vehicle/VehicleCreateEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_vehicleCreate = function(callback,player,priority){
  return events.plon(org.bukkit.event.vehicle.VehicleCreateEvent,callback,player,priority);
};
/*********************
### events.paintingBreak()

#### Parameters

 * callback - A function which is called whenever the [painting.PaintingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/painting/PaintingBreakEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_paintingBreak = function(callback,player,priority){
  return events.plon(org.bukkit.event.painting.PaintingBreakEvent,callback,player,priority);
};
/*********************
### events.paintingBreakByEntity()

#### Parameters

 * callback - A function which is called whenever the [painting.PaintingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/painting/PaintingBreakByEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_paintingBreakByEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.painting.PaintingBreakByEntityEvent,callback,player,priority);
};
/*********************
### events.paintingPlace()

#### Parameters

 * callback - A function which is called whenever the [painting.PaintingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/painting/PaintingPlaceEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_paintingPlace = function(callback,player,priority){
  return events.plon(org.bukkit.event.painting.PaintingPlaceEvent,callback,player,priority);
};
/*********************
### events.enchantItem()

#### Parameters

 * callback - A function which is called whenever the [enchantment.EnchantItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/EnchantItemEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_enchantItem = function(callback,player,priority){
  return events.plon(org.bukkit.event.enchantment.EnchantItemEvent,callback,player,priority);
};
/*********************
### events.prepareItemEnchant()

#### Parameters

 * callback - A function which is called whenever the [enchantment.PrepareItemEnchantEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/enchantment/PrepareItemEnchantEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_prepareItemEnchant = function(callback,player,priority){
  return events.plon(org.bukkit.event.enchantment.PrepareItemEnchantEvent,callback,player,priority);
};
/*********************
### events.playerInteractEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInteractEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerInteractEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerInteractEntityEvent,callback,player,priority);
};
/*********************
### events.playerEggThrow()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerEggThrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEggThrowEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerEggThrow = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerEggThrowEvent,callback,player,priority);
};
/*********************
### events.playerUnleashEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerUnleashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnleashEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerUnleashEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerUnleashEntityEvent,callback,player,priority);
};
/*********************
### events.playerInventory()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInventoryEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerInventory = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerInventoryEvent,callback,player,priority);
};
/*********************
### events.playerLevelChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLevelChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerLevelChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerLevelChangeEvent,callback,player,priority);
};
/*********************
### events.playerPortal()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPortalEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerPortal = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerPortalEvent,callback,player,priority);
};
/*********************
### events.playerItemConsume()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemConsumeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemConsumeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerItemConsume = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerItemConsumeEvent,callback,player,priority);
};
/*********************
### events.playerTeleport()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerTeleportEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerTeleport = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerTeleportEvent,callback,player,priority);
};
/*********************
### events.playerBedEnter()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBedEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedEnterEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerBedEnter = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerBedEnterEvent,callback,player,priority);
};
/*********************
### events.playerUnregisterChannel()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerUnregisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerUnregisterChannelEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerUnregisterChannel = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerUnregisterChannelEvent,callback,player,priority);
};
/*********************
### events.playerArmorStandManipulate()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerArmorStandManipulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerArmorStandManipulateEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerArmorStandManipulate = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerArmorStandManipulateEvent,callback,player,priority);
};
/*********************
### events.playerChat()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerChat = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerChatEvent,callback,player,priority);
};
/*********************
### events.playerShearEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerShearEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerShearEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerShearEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerShearEntityEvent,callback,player,priority);
};
/*********************
### events.playerItemDamage()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemDamageEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerItemDamage = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerItemDamageEvent,callback,player,priority);
};
/*********************
### events.asyncPlayerChat()

#### Parameters

 * callback - A function which is called whenever the [player.AsyncPlayerChatEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerChatEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_asyncPlayerChat = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.AsyncPlayerChatEvent,callback,player,priority);
};
/*********************
### events.playerDropItem()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerDropItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerDropItemEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerDropItem = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerDropItemEvent,callback,player,priority);
};
/*********************
### events.playerRegisterChannel()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerRegisterChannelEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRegisterChannelEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerRegisterChannel = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerRegisterChannelEvent,callback,player,priority);
};
/*********************
### events.playerMove()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerMoveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerMoveEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerMove = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerMoveEvent,callback,player,priority);
};
/*********************
### events.playerItemBreak()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemBreakEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerItemBreak = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerItemBreakEvent,callback,player,priority);
};
/*********************
### events.playerBucketEmpty()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBucketEmptyEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketEmptyEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerBucketEmpty = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerBucketEmptyEvent,callback,player,priority);
};
/*********************
### events.playerStatisticIncrement()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerStatisticIncrementEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerStatisticIncrementEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerStatisticIncrement = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerStatisticIncrementEvent,callback,player,priority);
};
/*********************
### events.playerToggleFlight()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerToggleFlightEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleFlightEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerToggleFlight = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerToggleFlightEvent,callback,player,priority);
};
/*********************
### events.playerItemHeld()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerItemHeldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerItemHeldEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerItemHeld = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerItemHeldEvent,callback,player,priority);
};
/*********************
### events.playerAchievementAwarded()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerAchievementAwardedEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAchievementAwardedEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerAchievementAwarded = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerAchievementAwardedEvent,callback,player,priority);
};
/*********************
### events.playerToggleSneak()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerToggleSneakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSneakEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerToggleSneak = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerToggleSneakEvent,callback,player,priority);
};
/*********************
### events.playerExpChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerExpChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerExpChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerExpChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerExpChangeEvent,callback,player,priority);
};
/*********************
### events.playerResourcePackStatus()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerResourcePackStatusEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerResourcePackStatusEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerResourcePackStatus = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerResourcePackStatusEvent,callback,player,priority);
};
/*********************
### events.playerPreLogin()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPreLoginEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerPreLogin = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerPreLoginEvent,callback,player,priority);
};
/*********************
### events.playerJoin()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerJoinEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerJoinEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerJoin = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerJoinEvent,callback,player,priority);
};
/*********************
### events.playerAnimation()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerAnimationEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerAnimationEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerAnimation = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerAnimationEvent,callback,player,priority);
};
/*********************
### events.playerEditBook()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerEditBookEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerEditBookEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerEditBook = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerEditBookEvent,callback,player,priority);
};
/*********************
### events.playerPickupItem()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerPickupItemEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerPickupItem = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerPickupItemEvent,callback,player,priority);
};
/*********************
### events.playerInteractAtEntity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInteractAtEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractAtEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerInteractAtEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerInteractAtEntityEvent,callback,player,priority);
};
/*********************
### events.playerChangedWorld()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChangedWorldEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChangedWorldEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerChangedWorld = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerChangedWorldEvent,callback,player,priority);
};
/*********************
### events.playerFish()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerFishEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerFishEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerFish = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerFishEvent,callback,player,priority);
};
/*********************
### events.playerChatTabComplete()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerChatTabCompleteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerChatTabCompleteEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerChatTabComplete = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerChatTabCompleteEvent,callback,player,priority);
};
/*********************
### events.playerRespawn()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerRespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerRespawnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerRespawn = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerRespawnEvent,callback,player,priority);
};
/*********************
### events.playerBedLeave()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBedLeaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedLeaveEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerBedLeave = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerBedLeaveEvent,callback,player,priority);
};
/*********************
### events.asyncPlayerPreLogin()

#### Parameters

 * callback - A function which is called whenever the [player.AsyncPlayerPreLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/AsyncPlayerPreLoginEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_asyncPlayerPreLogin = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.AsyncPlayerPreLoginEvent,callback,player,priority);
};
/*********************
### events.playerInteract()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerInteractEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerInteract = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerInteractEvent,callback,player,priority);
};
/*********************
### events.playerBucketFill()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerBucketFillEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBucketFillEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerBucketFill = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerBucketFillEvent,callback,player,priority);
};
/*********************
### events.playerVelocity()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerVelocityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerVelocityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerVelocity = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerVelocityEvent,callback,player,priority);
};
/*********************
### events.playerQuit()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerQuitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerQuitEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerQuit = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerQuitEvent,callback,player,priority);
};
/*********************
### events.playerLogin()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerLoginEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerLoginEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerLogin = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerLoginEvent,callback,player,priority);
};
/*********************
### events.playerKick()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerKickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerKickEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerKick = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerKickEvent,callback,player,priority);
};
/*********************
### events.playerToggleSprint()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerToggleSprintEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerToggleSprintEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerToggleSprint = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerToggleSprintEvent,callback,player,priority);
};
/*********************
### events.playerCommandPreprocess()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerCommandPreprocessEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerCommandPreprocessEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerCommandPreprocess = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerCommandPreprocessEvent,callback,player,priority);
};
/*********************
### events.playerGameModeChange()

#### Parameters

 * callback - A function which is called whenever the [player.PlayerGameModeChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerGameModeChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerGameModeChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.player.PlayerGameModeChangeEvent,callback,player,priority);
};
/*********************
### events.furnaceSmelt()

#### Parameters

 * callback - A function which is called whenever the [inventory.FurnaceSmeltEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceSmeltEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_furnaceSmelt = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.FurnaceSmeltEvent,callback,player,priority);
};
/*********************
### events.plonventoryDrag()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryDragEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryDragEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryDrag = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryDragEvent,callback,player,priority);
};
/*********************
### events.craftItem()

#### Parameters

 * callback - A function which is called whenever the [inventory.CraftItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/CraftItemEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_craftItem = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.CraftItemEvent,callback,player,priority);
};
/*********************
### events.furnaceBurn()

#### Parameters

 * callback - A function which is called whenever the [inventory.FurnaceBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceBurnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_furnaceBurn = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.FurnaceBurnEvent,callback,player,priority);
};
/*********************
### events.plonventoryOpen()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryOpenEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryOpenEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryOpen = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryOpenEvent,callback,player,priority);
};
/*********************
### events.plonventoryPickupItem()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryPickupItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryPickupItemEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryPickupItem = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryPickupItemEvent,callback,player,priority);
};
/*********************
### events.plonventoryMoveItem()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryMoveItemEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryMoveItemEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryMoveItem = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryMoveItemEvent,callback,player,priority);
};
/*********************
### events.plonventoryClick()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryClickEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryClickEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryClick = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryClickEvent,callback,player,priority);
};
/*********************
### events.plonventoryClose()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryCloseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCloseEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryClose = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryCloseEvent,callback,player,priority);
};
/*********************
### events.plonventoryCreative()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryCreativeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryCreativeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventoryCreative = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryCreativeEvent,callback,player,priority);
};
/*********************
### events.plonventory()

#### Parameters

 * callback - A function which is called whenever the [inventory.InventoryEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_inventory = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.InventoryEvent,callback,player,priority);
};
/*********************
### events.prepareItemCraft()

#### Parameters

 * callback - A function which is called whenever the [inventory.PrepareItemCraftEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/PrepareItemCraftEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_prepareItemCraft = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.PrepareItemCraftEvent,callback,player,priority);
};
/*********************
### events.furnaceExtract()

#### Parameters

 * callback - A function which is called whenever the [inventory.FurnaceExtractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/FurnaceExtractEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_furnaceExtract = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.FurnaceExtractEvent,callback,player,priority);
};
/*********************
### events.brew()

#### Parameters

 * callback - A function which is called whenever the [inventory.BrewEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/BrewEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_brew = function(callback,player,priority){
  return events.plon(org.bukkit.event.inventory.BrewEvent,callback,player,priority);
};
/*********************
### events.serverCommand()

#### Parameters

 * callback - A function which is called whenever the [server.ServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerCommandEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_serverCommand = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.ServerCommandEvent,callback,player,priority);
};
/*********************
### events.serverListPing()

#### Parameters

 * callback - A function which is called whenever the [server.ServerListPingEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServerListPingEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_serverListPing = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.ServerListPingEvent,callback,player,priority);
};
/*********************
### events.serviceRegister()

#### Parameters

 * callback - A function which is called whenever the [server.ServiceRegisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_serviceRegister = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.ServiceRegisterEvent,callback,player,priority);
};
/*********************
### events.pluginDisable()

#### Parameters

 * callback - A function which is called whenever the [server.PluginDisableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginDisableEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_pluginDisable = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.PluginDisableEvent,callback,player,priority);
};
/*********************
### events.remoteServerCommand()

#### Parameters

 * callback - A function which is called whenever the [server.RemoteServerCommandEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/RemoteServerCommandEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_remoteServerCommand = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.RemoteServerCommandEvent,callback,player,priority);
};
/*********************
### events.mapInitialize()

#### Parameters

 * callback - A function which is called whenever the [server.MapInitializeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/MapInitializeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_mapInitialize = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.MapInitializeEvent,callback,player,priority);
};
/*********************
### events.serviceUnregister()

#### Parameters

 * callback - A function which is called whenever the [server.ServiceUnregisterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_serviceUnregister = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.ServiceUnregisterEvent,callback,player,priority);
};
/*********************
### events.pluginEnable()

#### Parameters

 * callback - A function which is called whenever the [server.PluginEnableEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/PluginEnableEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_pluginEnable = function(callback,player,priority){
  return events.plon(org.bukkit.event.server.PluginEnableEvent,callback,player,priority);
};
/*********************
### events.playerDeath()

#### Parameters

 * callback - A function which is called whenever the [entity.PlayerDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerDeathEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerDeath = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.PlayerDeathEvent,callback,player,priority);
};
/*********************
### events.entityCreatePortal()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCreatePortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCreatePortalEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityCreatePortal = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityCreatePortalEvent,callback,player,priority);
};
/*********************
### events.entityCombust()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCombustEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityCombust = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityCombustEvent,callback,player,priority);
};
/*********************
### events.sheepDyeWool()

#### Parameters

 * callback - A function which is called whenever the [entity.SheepDyeWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepDyeWoolEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_sheepDyeWool = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.SheepDyeWoolEvent,callback,player,priority);
};
/*********************
### events.expBottle()

#### Parameters

 * callback - A function which is called whenever the [entity.ExpBottleEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExpBottleEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_expBottle = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ExpBottleEvent,callback,player,priority);
};
/*********************
### events.entityTame()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTameEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTameEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityTame = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityTameEvent,callback,player,priority);
};
/*********************
### events.projectileLaunch()

#### Parameters

 * callback - A function which is called whenever the [entity.ProjectileLaunchEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileLaunchEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_projectileLaunch = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ProjectileLaunchEvent,callback,player,priority);
};
/*********************
### events.entityDamage()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityDamage = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityDamageEvent,callback,player,priority);
};
/*********************
### events.itemSpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.ItemSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemSpawnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_itemSpawn = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ItemSpawnEvent,callback,player,priority);
};
/*********************
### events.projectileHit()

#### Parameters

 * callback - A function which is called whenever the [entity.ProjectileHitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ProjectileHitEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_projectileHit = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ProjectileHitEvent,callback,player,priority);
};
/*********************
### events.foodLevelChange()

#### Parameters

 * callback - A function which is called whenever the [entity.FoodLevelChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/FoodLevelChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_foodLevelChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.FoodLevelChangeEvent,callback,player,priority);
};
/*********************
### events.itemDespawn()

#### Parameters

 * callback - A function which is called whenever the [entity.ItemDespawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemDespawnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_itemDespawn = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ItemDespawnEvent,callback,player,priority);
};
/*********************
### events.entityPortalEnter()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPortalEnterEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEnterEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityPortalEnter = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityPortalEnterEvent,callback,player,priority);
};
/*********************
### events.entityPortal()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPortalEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityPortal = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityPortalEvent,callback,player,priority);
};
/*********************
### events.entityTarget()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTargetEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityTarget = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityTargetEvent,callback,player,priority);
};
/*********************
### events.entityDeath()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDeathEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDeathEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityDeath = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityDeathEvent,callback,player,priority);
};
/*********************
### events.entitySpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.EntitySpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntitySpawnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entitySpawn = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntitySpawnEvent,callback,player,priority);
};
/*********************
### events.sheepRegrowWool()

#### Parameters

 * callback - A function which is called whenever the [entity.SheepRegrowWoolEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SheepRegrowWoolEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_sheepRegrowWool = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.SheepRegrowWoolEvent,callback,player,priority);
};
/*********************
### events.entityShootBow()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityShootBowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityShootBowEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityShootBow = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityShootBowEvent,callback,player,priority);
};
/*********************
### events.creeperPower()

#### Parameters

 * callback - A function which is called whenever the [entity.CreeperPowerEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreeperPowerEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_creeperPower = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.CreeperPowerEvent,callback,player,priority);
};
/*********************
### events.entityCombustByBlock()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCombustByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByBlockEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityCombustByBlock = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityCombustByBlockEvent,callback,player,priority);
};
/*********************
### events.entityBreakDoor()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityBreakDoorEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityBreakDoorEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityBreakDoor = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityBreakDoorEvent,callback,player,priority);
};
/*********************
### events.entityDamageByEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDamageByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityDamageByEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityDamageByEntityEvent,callback,player,priority);
};
/*********************
### events.entityUnleash()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityUnleashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityUnleashEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityUnleash = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityUnleashEvent,callback,player,priority);
};
/*********************
### events.entityExplode()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityExplodeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityExplode = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityExplodeEvent,callback,player,priority);
};
/*********************
### events.entityInteract()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityInteractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityInteractEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityInteract = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityInteractEvent,callback,player,priority);
};
/*********************
### events.explosionPrime()

#### Parameters

 * callback - A function which is called whenever the [entity.ExplosionPrimeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ExplosionPrimeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_explosionPrime = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ExplosionPrimeEvent,callback,player,priority);
};
/*********************
### events.horseJump()

#### Parameters

 * callback - A function which is called whenever the [entity.HorseJumpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/HorseJumpEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_horseJump = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.HorseJumpEvent,callback,player,priority);
};
/*********************
### events.creatureSpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.CreatureSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreatureSpawnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_creatureSpawn = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.CreatureSpawnEvent,callback,player,priority);
};
/*********************
### events.entityCombustByEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityCombustByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityCombustByEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityCombustByEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityCombustByEntityEvent,callback,player,priority);
};
/*********************
### events.entityDamageByBlock()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityDamageByBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageByBlockEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityDamageByBlock = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityDamageByBlockEvent,callback,player,priority);
};
/*********************
### events.entityTargetLivingEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTargetLivingEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTargetLivingEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityTargetLivingEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityTargetLivingEntityEvent,callback,player,priority);
};
/*********************
### events.entityTeleport()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityTeleportEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityTeleportEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityTeleport = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityTeleportEvent,callback,player,priority);
};
/*********************
### events.playerLeashEntity()

#### Parameters

 * callback - A function which is called whenever the [entity.PlayerLeashEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PlayerLeashEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_playerLeashEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.PlayerLeashEntityEvent,callback,player,priority);
};
/*********************
### events.spawnerSpawn()

#### Parameters

 * callback - A function which is called whenever the [entity.SpawnerSpawnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SpawnerSpawnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_spawnerSpawn = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.SpawnerSpawnEvent,callback,player,priority);
};
/*********************
### events.itemMerge()

#### Parameters

 * callback - A function which is called whenever the [entity.ItemMergeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/ItemMergeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_itemMerge = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.ItemMergeEvent,callback,player,priority);
};
/*********************
### events.slimeSplit()

#### Parameters

 * callback - A function which is called whenever the [entity.SlimeSplitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/SlimeSplitEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_slimeSplit = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.SlimeSplitEvent,callback,player,priority);
};
/*********************
### events.pigZap()

#### Parameters

 * callback - A function which is called whenever the [entity.PigZapEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PigZapEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_pigZap = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.PigZapEvent,callback,player,priority);
};
/*********************
### events.potionSplash()

#### Parameters

 * callback - A function which is called whenever the [entity.PotionSplashEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/PotionSplashEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_potionSplash = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.PotionSplashEvent,callback,player,priority);
};
/*********************
### events.entityChangeBlock()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityChangeBlockEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityChangeBlockEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityChangeBlock = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityChangeBlockEvent,callback,player,priority);
};
/*********************
### events.entityPortalExit()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityPortalExitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityPortalExitEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityPortalExit = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityPortalExitEvent,callback,player,priority);
};
/*********************
### events.entityRegainHealth()

#### Parameters

 * callback - A function which is called whenever the [entity.EntityRegainHealthEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityRegainHealthEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityRegainHealth = function(callback,player,priority){
  return events.plon(org.bukkit.event.entity.EntityRegainHealthEvent,callback,player,priority);
};
/*********************
### events.entityBlockForm()

#### Parameters

 * callback - A function which is called whenever the [block.EntityBlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/EntityBlockFormEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_entityBlockForm = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.EntityBlockFormEvent,callback,player,priority);
};
/*********************
### events.blockSpread()

#### Parameters

 * callback - A function which is called whenever the [block.BlockSpreadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockSpreadEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockSpread = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockSpreadEvent,callback,player,priority);
};
/*********************
### events.blockMultiPlace()

#### Parameters

 * callback - A function which is called whenever the [block.BlockMultiPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockMultiPlaceEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockMultiPlace = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockMultiPlaceEvent,callback,player,priority);
};
/*********************
### events.blockExplode()

#### Parameters

 * callback - A function which is called whenever the [block.BlockExplodeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExplodeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockExplode = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockExplodeEvent,callback,player,priority);
};
/*********************
### events.notePlay()

#### Parameters

 * callback - A function which is called whenever the [block.NotePlayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/NotePlayEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_notePlay = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.NotePlayEvent,callback,player,priority);
};
/*********************
### events.blockFade()

#### Parameters

 * callback - A function which is called whenever the [block.BlockFadeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFadeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockFade = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockFadeEvent,callback,player,priority);
};
/*********************
### events.blockPlace()

#### Parameters

 * callback - A function which is called whenever the [block.BlockPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPlaceEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockPlace = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockPlaceEvent,callback,player,priority);
};
/*********************
### events.blockPhysics()

#### Parameters

 * callback - A function which is called whenever the [block.BlockPhysicsEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPhysicsEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockPhysics = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockPhysicsEvent,callback,player,priority);
};
/*********************
### events.blockIgnite()

#### Parameters

 * callback - A function which is called whenever the [block.BlockIgniteEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockIgniteEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockIgnite = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockIgniteEvent,callback,player,priority);
};
/*********************
### events.blockBreak()

#### Parameters

 * callback - A function which is called whenever the [block.BlockBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBreakEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockBreak = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockBreakEvent,callback,player,priority);
};
/*********************
### events.blockBurn()

#### Parameters

 * callback - A function which is called whenever the [block.BlockBurnEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockBurnEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockBurn = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockBurnEvent,callback,player,priority);
};
/*********************
### events.blockFromTo()

#### Parameters

 * callback - A function which is called whenever the [block.BlockFromToEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFromToEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockFromTo = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockFromToEvent,callback,player,priority);
};
/*********************
### events.blockRedstone()

#### Parameters

 * callback - A function which is called whenever the [block.BlockRedstoneEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockRedstoneEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockRedstone = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockRedstoneEvent,callback,player,priority);
};
/*********************
### events.blockPistonRetract()

#### Parameters

 * callback - A function which is called whenever the [block.BlockPistonRetractEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonRetractEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockPistonRetract = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockPistonRetractEvent,callback,player,priority);
};
/*********************
### events.blockDispense()

#### Parameters

 * callback - A function which is called whenever the [block.BlockDispenseEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDispenseEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockDispense = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockDispenseEvent,callback,player,priority);
};
/*********************
### events.signChange()

#### Parameters

 * callback - A function which is called whenever the [block.SignChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/SignChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_signChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.SignChangeEvent,callback,player,priority);
};
/*********************
### events.blockPistonExtend()

#### Parameters

 * callback - A function which is called whenever the [block.BlockPistonExtendEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockPistonExtendEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockPistonExtend = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockPistonExtendEvent,callback,player,priority);
};
/*********************
### events.blockCanBuild()

#### Parameters

 * callback - A function which is called whenever the [block.BlockCanBuildEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockCanBuildEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockCanBuild = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockCanBuildEvent,callback,player,priority);
};
/*********************
### events.blockGrow()

#### Parameters

 * callback - A function which is called whenever the [block.BlockGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockGrowEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockGrow = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockGrowEvent,callback,player,priority);
};
/*********************
### events.leavesDecay()

#### Parameters

 * callback - A function which is called whenever the [block.LeavesDecayEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/LeavesDecayEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_leavesDecay = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.LeavesDecayEvent,callback,player,priority);
};
/*********************
### events.blockExp()

#### Parameters

 * callback - A function which is called whenever the [block.BlockExpEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockExpEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockExp = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockExpEvent,callback,player,priority);
};
/*********************
### events.blockForm()

#### Parameters

 * callback - A function which is called whenever the [block.BlockFormEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockFormEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockForm = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockFormEvent,callback,player,priority);
};
/*********************
### events.blockDamage()

#### Parameters

 * callback - A function which is called whenever the [block.BlockDamageEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/block/BlockDamageEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_blockDamage = function(callback,player,priority){
  return events.plon(org.bukkit.event.block.BlockDamageEvent,callback,player,priority);
};
/*********************
### events.hangingPlace()

#### Parameters

 * callback - A function which is called whenever the [hanging.HangingPlaceEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingPlaceEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_hangingPlace = function(callback,player,priority){
  return events.plon(org.bukkit.event.hanging.HangingPlaceEvent,callback,player,priority);
};
/*********************
### events.hangingBreakByEntity()

#### Parameters

 * callback - A function which is called whenever the [hanging.HangingBreakByEntityEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakByEntityEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_hangingBreakByEntity = function(callback,player,priority){
  return events.plon(org.bukkit.event.hanging.HangingBreakByEntityEvent,callback,player,priority);
};
/*********************
### events.hangingBreak()

#### Parameters

 * callback - A function which is called whenever the [hanging.HangingBreakEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/hanging/HangingBreakEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_hangingBreak = function(callback,player,priority){
  return events.plon(org.bukkit.event.hanging.HangingBreakEvent,callback,player,priority);
};
/*********************
### events.structureGrow()

#### Parameters

 * callback - A function which is called whenever the [world.StructureGrowEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/StructureGrowEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_structureGrow = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.StructureGrowEvent,callback,player,priority);
};
/*********************
### events.spawnChange()

#### Parameters

 * callback - A function which is called whenever the [world.SpawnChangeEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/SpawnChangeEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_spawnChange = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.SpawnChangeEvent,callback,player,priority);
};
/*********************
### events.worldLoad()

#### Parameters

 * callback - A function which is called whenever the [world.WorldLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldLoadEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_worldLoad = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.WorldLoadEvent,callback,player,priority);
};
/*********************
### events.worldInit()

#### Parameters

 * callback - A function which is called whenever the [world.WorldInitEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldInitEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_worldInit = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.WorldInitEvent,callback,player,priority);
};
/*********************
### events.worldUnload()

#### Parameters

 * callback - A function which is called whenever the [world.WorldUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldUnloadEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_worldUnload = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.WorldUnloadEvent,callback,player,priority);
};
/*********************
### events.worldSave()

#### Parameters

 * callback - A function which is called whenever the [world.WorldSaveEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/WorldSaveEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_worldSave = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.WorldSaveEvent,callback,player,priority);
};
/*********************
### events.chunkUnload()

#### Parameters

 * callback - A function which is called whenever the [world.ChunkUnloadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkUnloadEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_chunkUnload = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.ChunkUnloadEvent,callback,player,priority);
};
/*********************
### events.chunkPopulate()

#### Parameters

 * callback - A function which is called whenever the [world.ChunkPopulateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkPopulateEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_chunkPopulate = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.ChunkPopulateEvent,callback,player,priority);
};
/*********************
### events.portalCreate()

#### Parameters

 * callback - A function which is called whenever the [world.PortalCreateEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/PortalCreateEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_portalCreate = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.PortalCreateEvent,callback,player,priority);
};
/*********************
### events.chunkLoad()


 * callback - A function which is called whenever the [world.ChunkLoadEvent event](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/world/ChunkLoadEvent.html) is fired

 * priority - optional - see events.plon() for more information.

***/
exports.pl_chunkLoad = function(callback,player,priority){
  return events.plon(org.bukkit.event.world.ChunkLoadEvent,callback,player,priority);
};
