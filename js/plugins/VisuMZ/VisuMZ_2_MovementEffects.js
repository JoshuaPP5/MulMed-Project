//=============================================================================
// VisuStella MZ - Movement Effects
// VisuMZ_2_MovementEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_MovementEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MovementEffects = VisuMZ.MovementEffects || {};
VisuMZ.MovementEffects.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.08] [MovementEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Movement_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Movement in RPG Maker MZ can be kind of dull. There's next to no way of
 * interacting with the map. This plugin adds various means of doing so to add
 * more life to the environment. Dust Clouds can kick up when running around.
 * Footprints can be left in the sand. Footsteps can be heard making different
 * sounds based on the flooring. Added movement abilities like Smart Blink,
 * Smart Jump, and Smart Rush allow players more fun traversal options. And to
 * top it off, a smooth scrolling camera will ease in the screen to focus on
 * the player character instead of being locked-on firmly. Motion blurs and
 * motion trails are also made available to further emphasize movement.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Dust Clouds can kick up off the ground whenever characters run, giving the
 *   player a better understanding of what's going on.
 * * Dust Clouds can be customized, using images or generated with different
 *   colors. These settings can be altered mid-game as well.
 * * Footprints can appear when stepping over specific tiles marked by declared
 *   terrain tags or regions. This can be used over imprintable terrain like
 *   dirt, sand, or snow.
 * * Footprints can be modified in how they appear with custom images or with
 *   generated images. These modifications will be based on the sprite sheet
 *   frame used to generate them for accuracy.
 * * Footstep sounds can be added to give player feedback whenever the player
 *   character or events move on the screen.
 * * Apply different footstep sounds to different tiles on the map marked by
 *   either regions or terrain tags.
 * * Footsteps coming from events can have a distance factor applied to them,
 *   making them sound softer the further away they are and playing on specific
 *   sides of a stereo speaker.
 * * Motion Blur effects can be used to create more impactful scenes. Apply
 *   them to any character on the map screen be it the player character,
 *   followers, or events via Plugin Command!
 * * Motion Trails can added to emphasize movement. These are also inherently a
 *   part of the new movement abilities.
 * * Newly added movement abilities that pay attention to the terrain and any
 *   implemented restrictions. These abilities include Smart Blink, Smart Jump,
 *   and Smart Rush.
 * * Directional Movement Speed Modifiers can be adjusted globally to make
 *   characters move faster or slower in certain directions. This can be used
 *   to create an illusion that it's harder to move against the wind in a storm
 *   than with.
 * * Smart Blink is a new movement ability that can be activated via Plugin
 *   Command! The player teleports forward a set distance, ignoring any walls
 *   and/or obstacles in between unless restrictions prohibit the player from
 *   doing so.
 * * Smart Jump is a new movement ability that can be activated via Plugin
 *   Command! The player jumps forward a distance as long as it does not
 *   interfere with obstacles. It can scale past pits and small gaps in height.
 *   Height maps can also be declared for some verticality on the map.
 * * Smart Rush is a new movement ability that can be activated via Plugin
 *   Command! The player charges forward extremely fast, possibly colliding
 *   with events, and possibly creating new interactions with its switch
 *   toggling nature.
 * * Smooth Camera is an added feature to smoothly adjust the camera as the
 *   player traverses across the game's maps. The scrolling speed goes slower
 *   or faster depending if the player is walking or dashing.
 * * Plugin Commands allow you to adjust Smooth Camera settings midway through
 *   the game.
 * * Map notetags can forcefully enable or disable Smooth Camera.
 * * Players that find certain effects added through this plugin annoying (such
 *   as footprints, footsteps, smooth camera, etc) can have them turned off via
 *   the Options menu.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_EventsMoveCore
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Dust Cloud-Related Notetags ===
 * 
 * ---
 * 
 * <Force Dust Cloud>
 * 
 * - Used for: Map Notetags
 * - Forces Dust Clouds to be kicked up whenever characters are dashing
 *   regardless of whatever settings are found in the Plugin Parameters for
 *   this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Dust Clouds in the options menu, then
 *   this setting will be turned off.
 * 
 * ---
 *
 * <No Dust Cloud>
 *
 * - Used for: Map Notetags
 * - This disables Dust Clouds from being kicked up whenever characters are
 *   dashing regardless of whatever settings are found in the Plugin Parameters
 *   for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 *
 * ---
 * 
 * === Footprints-Related Notetags ===
 * 
 * ---
 * 
 * <Footprint Region: x>
 * <Footprint Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which regions will have visible footprints when characters
 *   walk over those areas.
 * - Replace 'x' with a number (0 to 255) representing the region used to mark
 *   tiles that can have footprints.
 * - Insert multiple 'x' values to add multiple regions.
 * - If this notetag is used, ignore the default settings found in the
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <No Footprint Region: x>
 * <No Footprint Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which regions CANNOT have footprints when characters walk
 *   over those areas.
 * - This is primarily used to offset the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) representing the region used to mark
 *   tiles that CANNOT have footprints.
 * - Insert multiple 'x' values to add multiple regions.
 * 
 * ---
 * 
 * <Region x Footprint Opacity: y>
 * 
 * - Used for: Map Notetags
 * - This changes the opacity of the footprints that spawn in region 'x' to
 *   have an opacity value of 'y' instead of the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) to indicate which region is being
 *   modified.
 * - Replace 'y' with a number (0 to 255) to represent the starting opacity
 *   value of the footprints made in that region.
 * 
 * ---
 * 
 * <Region x Footprint Duration: y>
 * 
 * - Used for: Map Notetags
 * - This changes the duration of the footprints that spawn in region 'x' to
 *   have a duration time of 'y' instead of the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) to indicate which region is being
 *   modified.
 * - Replace 'y' with a number in frames to represent the starting duration
 *   time of the footprints made in that region.
 * 
 * ---
 * 
 * <Footprint Terrain Tag: x>
 * <Footprint Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which terrain tag marked tiles will have visible footprints
 *   when characters walk over those areas.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag used to
 *   mark tiles that can have footprints.
 * - Insert multiple 'x' values to add multiple terrain tags.
 * - If this notetag is used, ignore the default settings found in the
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <No Footprint Terrain Tag: x>
 * <No Footprint Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which terrain tag marked tiles CANNOT have footprints when
 *   characters walk over those areas.
 * - This is primarily used to offset the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag used to
 *   mark tiles that CANNOT have footprints.
 * - Insert multiple 'x' values to add multiple terrain tags.
 * 
 * ---
 * 
 * <Terrain Tag x Footprint Opacity: y>
 * 
 * - Used for: Map Notetags
 * - This changes the opacity of the footprints that spawn in tiles with
 *   terrain tag 'x' to have an opacity value of 'y' instead of the default
 *   settings found in the Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) to indicate which terrain tag is being
 *   modified.
 * - Replace 'y' with a number (0 to 255) to represent the starting opacity
 *   value of the footprints made in that tile.
 * 
 * ---
 * 
 * <Terrain Tag x Footprint Duration: y>
 * 
 * - Used for: Map Notetags
 * - This changes the duration of the footprints that spawn in tiles with
 *   terrain tag 'x' to have a duration time of 'y' instead of the default
 *   settings found in the Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) to indicate which terrain tag is being
 *   modified.
 * - Replace 'y' with a number in frames to represent the starting duration
 *   time of the footprints made in that tile.
 * 
 * ---
 * 
 * <Disable Footprints>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Prevents the character from being able to leave behind footprints.
 * 
 * ---
 * 
 * <Footprint d Pattern p Filename: filename>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Allows you to set a specific image to be used in place of a generated
 *   footprint for 'd' direction 'p' pattern.
 * - Using this will bypass any settings made for generated footprints.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Examples:
 *   - <Footprint Down Pattern 0 Filename: FootprintDownA>
 *   - <Footprint Left Pattern 2 Filename: FootprintLeftB>
 *   - <Footprint Right Pattern 0 Filename: FootprintRightA>
 * 
 * ---
 * 
 * <Footprint d Pattern p Width: x>
 * <Footprint d Pattern p Height: y>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For non-image generated footprints, these notetags let you set the width
 *   and/or height of the footprint for 'd' direction and 'p' pattern.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' with a number representing the width of footprint in pixels.
 * - Replace 'y' with a number representing the height of footprint in pixels.
 * - Examples:
 *   - <Footprint Down Pattern 0 Width: 6>
 *   - <Footprint Left Pattern 2 Height: 4>
 * 
 * ---
 * 
 * <Footprint d Pattern p Offset: +x, +x>
 * <Footprint d Pattern p Offset: -x, -x>
 * <Footprint d Pattern p Offset: +x, -x>
 * <Footprint d Pattern p Offset: -x, +x>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For non-image generated footprints, these notetags let you set the offsets
 *   X and Y of the footprint for 'd' direction and 'p' pattern.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the footprint's x and y coordinates by.
 * - Examples:
 *   - <Footprint Up Pattern 0 Width: +4, +2>
 *   - <Footprint Right Pattern 2 Height: -6, -4>
 * 
 * ---
 * 
 * === Footsteps-Related Notetags ===
 * 
 * ---
 * 
 * <Force Footsteps>
 *
 * - Used for: Map Notetags
 * - Forces footstep sounds to be played whenever characters are walking on the
 *   screen, regardless of the settings found in the Plugin Parameters for the
 *   particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Footstep Sounds in the options menu, then
 *   this setting will be turned off.
 * 
 * ---
 * 
 * <No Footsteps>
 *
 * - Used for: Map Notetags
 * - Prevents footstep sounds from being played whenever characters are walking
 *   on the screen, regardless of the settings found in the Plugin Parameters
 *   for the particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * 
 * ---
 * 
 * <Region x Footstep Sound: filename>
 * <Region x Footstep Sound: filename, volume>
 * <Region x Footstep Sound: filename, volume, pitch>
 * <Region x Footstep Sound: filename, volume, pitch, pan>
 * 
 * - Used for: Map Notetags
 * - Causes a different sound effect to be played in place of the default
 *   footstep sound if a character walks on a map tile marked by region 'x'.
 * - Replace 'x' with a number (0-255) representing the region.
 * - Replace 'volume' with a number (0 to 100) representing the volume.
 * - Replace 'pitch' with a number (50 to 150) representing the pitch.
 * - Replace 'pan' with a number (-100 to 100) representing the pan.
 * - If 'volume', 'pitch', or 'pan' aren't present, then the values used for
 *   them will be based off the default settings in the Plugin Parameters.
 * - This will take priority over any terrain tags with unique footstep sounds.
 * 
 * ---
 * 
 * <No Region x Footsteps>
 * 
 * - Used for: Map Notetags
 * - No sound effects will be played when a character walks over a map tile
 *   marked by region 'x'.
 * - Replace 'x' with a number (0-255) representing the region.
 * 
 * ---
 * 
 * <Terrain Tag x Footsteps: filename>
 * <Terrain Tag x Footsteps: filename, volume>
 * <Terrain Tag x Footsteps: filename, volume, pitch>
 * <Terrain Tag x Footsteps: filename, volume, pitch, pan>
 * 
 * - Used for: Tileset Notetags
 * - Causes a different sound effect to be played in place of the default
 *   footstep sound if a character walks on a map tile with terrain tag 'x'.
 * - Replace 'x' with a number (0-7) representing the terrain tag.
 * - Replace 'volume' with a number (0 to 100) representing the volume.
 * - Replace 'pitch' with a number (50 to 150) representing the pitch.
 * - Replace 'pan' with a number (-100 to 100) representing the pan.
 * - If 'volume', 'pitch', or 'pan' aren't present, then the values used for
 *   them will be based off the default settings in the Plugin Parameters.
 * - This will have LESS priority than any regions with unique footstep sounds.
 * 
 * ---
 * 
 * <No Terrain Tag x Footsteps>
 * 
 * - Used for: Tileset Notetags
 * - No sound effects will be played when a character walks over a map tile
 *   marked by terrain tag 'x'.
 * - Replace 'x' with a number (0-7) representing the terrain tag.
 * 
 * ---
 * 
 * <Enable Footsteps>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - If actor or event footstep sounds are normally disabled, this will enable
 *   them when moving.
 * - Footstep sounds coming from actors will be given priority to the party
 *   leader first before anyone else.
 * 
 * ---
 * 
 * <Disable Footsteps>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - If actor or event footstep sounds are normally enabled, this will disable
 *   them when moving.
 * 
 * ---
 * 
 * <Footsteps Volume: x%>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Changes the volume for any footstep sounds made by this actor/event.
 * - Replace 'x' with a number (0 to 100) representing the percentile modifier,
 *   a multiplicative rate from the usual footstep volume.
 * 
 * ---
 * 
 * <Footsteps Pitch: x%>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Changes the pitch for any footstep sounds made by this actor/event.
 * - Replace 'x' with a number (0 to 100) representing the percentile modifier,
 *   a multiplicative rate from the usual footstep pitch.
 * 
 * ---
 * 
 * <Footsteps Frame: x>
 * <Footsteps Frames: x, x, x>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For those using the "Sound by Frame?" Plugin Parameter, this will cause
 *   the footstep sounds to trigger whenever the sprite changes to the listed
 *   frame(s) in order to match up the sound with the image of the sprite
 *   stepping on the ground.
 * - This will override the setting found in the Plugin Parameters for this
 *   specific actor or event.
 * - Replace 'x' with a number representing the frame. Frames start at 0 and
 *   increase by 1 going left to right.
 * 
 * ---
 * 
 * === Smart Blink-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Blink>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Blink from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Blink Non-Land Region: x>
 * <Smart Blink Non-Land Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can blink onto.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Land Terrain Tags: x>
 * <Smart Blink Non-Land Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can blink onto.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Pass Region: x>
 * <Smart Blink Non-Pass Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot pass.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to teleport past it or on it.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Pass Terrain Tags: x>
 * <Smart Blink Non-Pass Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to teleport past it or on it.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * === Smart Jump-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Jump>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Jump from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Jump Non-Land Region: x>
 * <Smart Jump Non-Land Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can jump onto.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Land Terrain Tags: x>
 * <Smart Jump Non-Land Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can jump onto.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass Region: x>
 * <Smart Jump Non-Pass Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot pass.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to leap past it or on it.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass Terrain Tags: x>
 * <Smart Jump Non-Pass Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to leap past it or on it.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Height-Based Regions: x, x>
 * <Smart Jump Height-Based Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Allows you to assign certain tiles to be marked as a specific height for
 *   Smart Jump to interact with.
 * - Replace 'x' with a number (0 to 255) representing the region ID to use as
 *   a height marker.
 *   - Insert multiple numbers to mark more regions.
 * - Height-Based Region interactions work as follows:
 *   - Players can jump from a height-based region to another height-based
 *     region of the same or lower value as long as that region is listed, too.
 *     - Regions listed: 10, 13, 15.
 *     - ie. The player can jump from Region 15 to 15.
 *     - ie. The player can jump from Region 15 to 13.
 *     - ie. The player can jump from Region 15 to 10.
 *     - ie. The player CANNOT jump from Region 13 to 15.
 *     - ie. The player CANNOT jump from Region 10 to 13.
 *     - ie. The player CANNOT jump from Region 10 to 15.
 *   - The lowest value number in the list is considered a "ledge" and the
 *     lowest possible level.
 *   - Players can jump in and out of the lowest level regions into non-height
 *     marked regions.
 *   - If the player is jumping towards the up, left, right directions, they
 *     cannot jump directly into a "ledge" region unless they are adjacent to
 *     the marked tile. A distance greater than 1 tile apart cannot be and the
 *     jump will be cut short.
 *   - If the player is jumping upward towards a "ledge", the player will jump
 *     directly onto the next available tile.
 *   - If the player is jumping towards the left or right directions into a
 *     "ledge" region, the player will "fall" a tile distance equal to the
 *     difference from the region height they're jumping from.
 *     - Regions listed: 10, 13, 15.
 *     - If the player is on Region 15 and jumps into a ledge (10), the player
 *       will drop 5 tiles downward.
 *     - If the player is on Region 13 and jumps into a ledge (10), the player
 *       will drop 3 tiles downward.
 *   - If the player is jumping downward towards a "ledge", the player will
 *     jump the full distance.
 *   - Examples:
 *     - <Smart Jump Height-Based Regions: 10, 13, 15>
 *       - Region 10 will be considered the "ledge" region.
 * 
 * Keep in mind that despite the fact that there is Height-Based Region support
 * for Smart Jump, maps in RPG Maker MZ are still inherently 2D. Therefore, not
 * everything will look correct for every jump-related scenario involving
 * region heights. You may need to make adjustments to maps that work best for
 * the limited 2D nature of mapping in order to adhere to what Height-Based
 * Region support can handle.
 * 
 * ---
 * 
 * <Smart Jump Non-Land>
 * 
 * - Used for: Event Notetags or Event Page Comment Tags
 * - Prevents the player from being able to land on this event.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass>
 * <Illegal Jump>
 * 
 * - Used for: Event Notetags or Event Page Comment Tags
 * - Prevents the player from being able to leap past this event or on it.
 * 
 * ---
 * 
 * === Smart Rush-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Rush>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Rush from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Rush Non-Crash Region: x>
 * <Smart Rush Non-Crash Region: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Prevents a screen shake crash effect when crashing into tiles marked by
 *   'x' region(s) after using a Smart Rush.
 * - This is primarily used for tiles such as water tiles so that it doesn't
 *   look like there's an invisible wall where the player is crashing into.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-crashable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 * 
 * ---
 * 
 * <Smart Rush Non-Crash Terrain Tag: x>
 * <Smart Rush Non-Crash Terrain Tag: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Prevents a screen shake crash effect when crashing into tiles marked by
 *   'x' terrain tag(s) after using a Smart Rush.
 * - This is primarily used for tiles such as water tiles so that it doesn't
 *   look like there's an invisible wall where the player is crashing into.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-crashable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific tileset.
 * 
 * ---
 * 
 * === Smooth Camera-Related Notetags ===
 * 
 * ---
 *
 * <Force Smooth Camera>
 *
 * - Used for: Map Notetags
 * - This forcefully enables Smooth Camera scrolling regardless of whatever
 *   settings are found in the Plugin Parameters for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Smooth Camera scrolling in the options
 *   menu, then this setting will be turned off.
 *
 * ---
 *
 * <No Smooth Camera>
 *
 * - Used for: Map Notetags
 * - This disables Smooth Camera scrolling regardless of whatever settings are
 *   found in the Plugin Parameters for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Dust Clouds Plugin Commands ===
 * 
 * ---
 * 
 * DUST CLOUDS: Enable/Disable
 * - Enable or Disable the Dust Clouds from spawning when dashing.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables Dust Clouds.
 * 
 * ---
 * 
 * DUST CLOUDS: Change Settings
 * - Alter the existing Dust Clouds settings.
 * 
 *   Appearance:
 * 
 *     Filename:
 *     - Filename of the Dust Cloud. Leave empty if using none.
 * 
 *     Color:
 *     - Color of the dust cloud in #rrggbb format.
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the max radius of this dust cloud?
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *     Fullness:
 *     - What is the fullness level (0.0 to 1.0)?
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *   Animation:
 * 
 *     Duration:
 *     - How many frames will a dust cloud remain on screen?
 * 
 *     Starting Opacity:
 *     - What is the starting opacity (0-255)?
 *     - Dust cloud opacity will gradually go to 0.
 * 
 *     Starting Scale:
 *     - What is the starting scale (0.0 to 1.0)?
 *     - Dust cloud scale will gradually go to 1.0.
 * 
 * ---
 * 
 * === Footprints and Footsteps Plugin Commands ===
 * 
 * ---
 * 
 * FOOTPRINTS: Enable/Disable
 * - Enable or Disable footprint marks from being made.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables footprint marks.
 * 
 * ---
 * 
 * FOOTSTEPS: Enable/Disable
 * - Enable or Disable footstep sounds from being played.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables footstep sounds.
 * 
 * ---
 * 
 * === Motion Blur Plugin Commands ===
 * 
 * ---
 * 
 * MOTION BLUR: Player
 * - Plays a Motion Blur on the player sprite.
 * - Requires Pixi JS Filters!
 * 
 *   Apply to Followers?:
 *   - Apply this motion blur effect to followers, too?
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * MOTION BLUR: Follower(s)
 * - Plays a Motion Blur on the follower sprite(s).
 * - Requires Pixi JS Filters!
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * MOTION BLUR: Event(s)
 * - Plays a Motion Blur on event sprite(s).
 * - Requires Pixi JS Filters!
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Index values start at 0.
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * === Motion Trail Plugin Commands ===
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Player?
 * - Change Motion Trail settings for the player.
 * - This does NOT enable them. You must do that separately.
 * 
 *   Apply to Followers?:
 *   - Apply this change to followers, too?
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Follower(s)?
 * - Change Motion Trail settings for the follower(s).
 * - This does NOT enable them. You must do that separately.
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Event(s)?
 * - Change Motion Trail settings for the event(s).
 * - This does NOT enable them. You must do that separately.
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Player
 * - Immediately create a motion trail sprite for the player in the player's
 *   current position.
 * 
 *   Apply to Followers?:
 *   - Apply this effect to followers, too?
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Follower(s)
 * - Immediately create a motion trail sprite for the follower(s) in the
 *   follower(s)'s current position.
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Event(s)
 * - Immediately create a motion trail sprite for the event(s) in the
 *   event(s)'s current position.
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Player?
 * - Enables/disables Motion Trails for player sprite.
 * 
 *   Apply to Followers?:
 *   - Apply this change to followers, too?
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Follower(s)?
 * - Enables/disables Motion Trails for follower sprite(s).
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Event(s)?
 * - Enables/disables Motion Trails for event sprite(s).
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * === Smart Movement Plugin Commands ===
 * 
 * ---
 * 
 * SMART: Directional Move Speed Modifier
 * - Global!
 * - These settings allow you to adjust the movement speed modifiers when
 *   characters are facing certain directions.
 * - This can be used to help give a better illusion that in a storm (or such),
 *   it is harder to move against the wind than with.
 * 
 *   Standard Directions:
 * 
 *     Down Speed:
 *     Left Speed:
 *     Right Speed:
 *     Up Speed:
 *     - What is the movement speed modifier for this direction?
 *     - These affect all characters, from players to followers to events.
 *     - Moving slower goes down 1 speed level.
 *     - Moving faster goes up 1 speed level.
 * 
 *   Diagonal Directions:
 * 
 *     Lower Left:
 *     Lower Right:
 *     Upper Left:
 *     Upper Right:
 *     - What is the movement speed modifier for this direction?
 *     - These affect all characters, from players to followers to events.
 *     - Moving slower goes down 1 speed level.
 *     - Moving faster goes up 1 speed level.
 * 
 * ---
 * 
 * SMART: Smart Blink X Tiles
 * - Player uses "Smart Blink" to teleport forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will the player teleport forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Blink is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *   Restrictions:
 * 
 *     Non-Land Regions:
 *     - Which regions forbid Smart Blink from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Land Terrain Tags:
 *     - Which tags forbid Smart Blink from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Regions:
 *     - Which regions will block Smart Blink from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Terrain Tags:
 *     - Which tags will block Smart Blink from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Blink?
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 * ---
 * 
 * SMART: Smart Jump X Tiles
 * - Player uses "Smart Jump" to leap forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will the player jump forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Jump is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *   Restrictions:
 * 
 *     Non-Land Regions:
 *     - Which regions forbid Smart Jump from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Land Terrain Tags:
 *     - Which tags forbid Smart Jump from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Regions:
 *     - Which regions will block Smart Jump from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Terrain Tags:
 *     - Which tags will block Smart Jump from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Jump?
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 * ---
 * 
 * SMART: Smart Rush X Tiles
 * - Player uses "Smart Rush" to rush forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will player charge forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Rush is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Switch(es):
 *     - Which Switch(es) will turn ON during Smart Rush?
 *     - This Switch(es) will also turn OFF after.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Rush?
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *     Speed Rate:
 *     - How much faster is "Smart Rush" compared to Dashing?
 *     - You may use JavaScript code.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 * ---
 * 
 * Motion Trail Settings
 * - These are sub-settings found for Smart Blink, Smart Jump, and Smart Rush.
 * 
 *   General:
 * 
 *     Override?:
 *     - Override Motion Trail settings temporarily?
 *     - Otherwise, use current player Motion Trail settings.
 * 
 *   Settings:
 * 
 *     Delay:
 *     - How many frames to delay by when creating a motion trail?
 *     - The higher the delay, the less after images there are.
 * 
 *     Duration:
 *     - How many frames should the motion trail last?
 *     - What do you want to be its duration?
 * 
 *     Hue:
 *     - What do you want to be the hue for the motion trail?
 * 
 *     Starting Opacity:
 *     - What starting opacity value do you want for the motion trail?
 *     - Opacity values decrease over time.
 * 
 *     Tone:
 *     - What tone do you want for the motion trail?
 *     - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * SMART: Wait for Smart Blink
 * - Waits for player to finish Smart Blinking before continuing.
 * 
 * ---
 * 
 * SMART: Wait for Smart Jump
 * - Waits for player to finish Smart Jumping before continuing.
 * 
 * ---
 * 
 * SMART: Wait for Smart Rush
 * - Waits for player to finish Smart Rushing before continuing.
 * 
 * ---
 * 
 * === Smooth Camera Plugin Commands ===
 * 
 * ---
 *
 * SMOOTH CAMERA: Enable/Disable
 * - Enable or Disable the Smooth Camera.
 *
 *   Enable/Disable?:
 *   - Enables or Disables Smooth Camera.
 *
 * ---
 *
 * SMOOTH CAMERA: Speed Change
 * - Change the scrolling speed for the Smooth Camera.
 *
 *   Walk Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *   Dash Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Dust Cloud Settings
 * ============================================================================
 *
 * Dust Clouds can appear when the player (or any character) is dashing. The
 * spawned dust clouds have some randomness to them so not all of them are the
 * same size and scale. You can use images for custom dust clouds or use plugin
 * generated dust clouds for those who don't have custom images to use.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Are Dust Clouds enabled by default?
 * 
 * ---
 * 
 * Appearance:
 * 
 *   Filename:
 *   - Filename of the Dust Cloud. Leave empty if using none.
 * 
 *   Color:
 *   - Color of the dust cloud in #rrggbb format.
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the max radius of this dust cloud?
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 *   Fullness:
 *   - What is the fullness level (0.0 to 1.0)?
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Animation:
 * 
 *   Duration:
 *   - How many frames will a dust cloud remain on screen?
 * 
 *   Starting Opacity:
 *   - What is the starting opacity (0-255)?
 *   - Dust cloud opacity will gradually go to 0.
 * 
 *   Starting Scale:
 *   - What is the starting scale (0.0 to 1.0)?
 *   - Dust cloud scale will gradually go to 1.0.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Footprint Mark Settings
 * ============================================================================
 *
 * Footprint marks can appear on certain tiles probably marked by specific
 * regions and/or terrain tags. They will not appear normally unless you change
 * up the settings.
 *
 * ---
 *
 * General
 * 
 *   Default Enabled?:
 *   - Are footprint marks enabled by default?
 *
 * ---
 *
 * Appearance
 * 
 *   Opacity:
 *   - What is the starting opacity of the footprint?
 * 
 *   Duration:
 *   - How many frames will footprints remain on the screen
 *     before disappearing?
 * 
 *   Follower Variance:
 *   - What variance should followers have for their footprints?
 *   - This is to avoid them all stepping in the same place.
 *
 * ---
 *
 * Map Defaults
 * 
 *   Regions:
 *   - Which Regions will have footprints appear by default?
 * 
 *   Terrain Tags:
 *   - Which terrain tags will have footprints appear by default?
 *
 * ---
 *
 * Standard Directions
 * 
 *   Down:
 *   Left:
 *   Right:
 *   Up:
 *   - Settings used for footprints when facing moving direction.
 *   - For normal sprite sheets: 0 is left, 1 is center, 2 is right.
 *
 * ---
 *
 * Diagonal Directions
 * 
 *   Lower Left:
 *   Lower Right:
 *   Upper Left:
 *   Upper Right:
 *   - Settings used for footprints when facing moving direction.
 *   - For normal sprite sheets: 0 is left, 1 is center, 2 is right.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Footstep Sounds Settings
 * ============================================================================
 *
 * The following plugin parameters are used to modify the footstep sounds that
 * are played whenever characters move.
 *
 * ---
 *
 * General
 * 
 *   Default Enabled?:
 *   - Are footstep sounds enabled by default?
 * 
 *   Sound by Frame?:
 *   - Play footstep sounds at certain sprite frames or with each tile step?
 *   - For those who want the Yanfly Engine Plugins timing, set this to false.
 *   - On the flipside, setting it to true will cause footstep sounds to occur
 *     whenever the sprite sets its foot down (assuming you setup the frames
 *     correctly with the plugin parameter below).
 * 
 *     Audible Frame(s):
 *     - Which sprite sheet "frames" will play a sound?
 *     - Sprite sheet Frames start at 0.
 * 
 *   Walk Animation Modifier:
 *   - What is the rate at which animations play for walking?
 *   - This is to ensure the sound effects synch up.
 * 
 *   Dash Animation Modifier:
 *   - What is the rate at which animations play for dashing?
 *   - This is to ensure the sound effects synch up.
 *
 * ---
 *
 * Default Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Distance
 * 
 *   Volume Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use a decimal value.
 * 
 *   Pan Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use an integer value.
 *
 * ---
 *
 * Actor Modifiers
 * 
 *   Enabled for Actors?:
 *   - Are footstep sounds enabled for actors by default?
 * 
 *   Volume Modifier:
 *   - Volume modifier rate for actors.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Pitch modifier rate for actors.
 *   - Use a decimal value.
 *
 * ---
 *
 * Event Modifiers
 * 
 *   Enabled for Events?:
 *   - Are footstep sounds enabled for events by default?
 * 
 *   Volume Modifier:
 *   - Volume modifier rate for events.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Pitch modifier rate for events.
 *   - Use a decimal value.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Blink Settings
 * ============================================================================
 *
 * Smart Blink is a Plugin Command launched action. The action will cause the
 * player to teleport forward (up to) a measured distance, bypassing any
 * obstacles and/or walls inbetween. If the Plugin Command is placed at the end
 * of the event list, then the player is able to trigger any other events on
 * the tile that the player has landed on.
 * 
 * Smart Blinking can be customized to not ignore all obstacles and/or walls.
 * In fact, through clever usage of Regions and/or Terrain Tags, game devs can
 * create areas that the player cannot teleport past (resulting in a barrier)
 * or a place that players cannot land on top of (such as rooftops). These
 * restrictions can be made on a global scale, on a map-basis, tileset-basis,
 * or even by Plugin Command-basis.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Blinks.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Blink?:
 *   - Allow diagonal Smart Blinking?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Blink is able to cover.
 * 
 *   Floor to Ceiling?:
 *   - Allow blinking from floor to ceiling tiles?
 * 
 * ---
 *
 * Visual
 * 
 *   Blur Duration:
 *   - Requires PixiJS Filters!
 *   - How long will the motion blur last?
 * 
 *   Blur Angle Offset:
 *   - Requires PixiJS Filters!
 *   - Offset the motion blur angle by this many degrees.
 *   - Otherwise, the motion blur angle is equal to the direction the player is
 *     facing while blinking.
 *
 * ---
 *
 * Restrictions
 * 
 *   Non-Land Regions:
 *   - Which regions forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Land Terrain Tags:
 *   - Which tags forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Regions:
 *   - Which regions will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Terrain Tags:
 *   - Which tags will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Jump Settings
 * ============================================================================
 *
 * Smart Jump is a Plugin Command launched action. The action will cause the
 * player to jump forward (up to) a measured distance, bypassing any obstacles
 * and/or walls inbetween. If the Plugin Command is placed at the end of the
 * event list, then the player is able to trigger any other events on the tile
 * that the player has landed on.
 * 
 * Smart Jumping can be customized to not ignore all obstacles and/or walls.
 * In fact, through clever usage of Regions and/or Terrain Tags, game devs can
 * create areas that the player cannot jump past (resulting in a barrier)
 * or a place that players cannot land on top of (such as rooftops). These
 * restrictions can be made on a global scale, on a map-basis, tileset-basis,
 * or even by Plugin Command-basis.
 * 
 * Smart Jump also has height based interactions, allowing the player to jump
 * from equal height "regions" to another, such as scaling a cliff. Players can
 * also jump from higher regions to lower regions (as long as both are marked
 * as Height-Based Regions). Here are how Height-Based Regions interact:
 * 
 *   - Players can jump from a height-based region to another height-based
 *     region of the same or lower value as long as that region is listed, too.
 *     - Regions listed: 10, 13, 15.
 *     - ie. The player can jump from Region 15 to 15.
 *     - ie. The player can jump from Region 15 to 13.
 *     - ie. The player can jump from Region 15 to 10.
 *     - ie. The player CANNOT jump from Region 13 to 15.
 *     - ie. The player CANNOT jump from Region 10 to 13.
 *     - ie. The player CANNOT jump from Region 10 to 15.
 * 
 *   - The lowest value number in the list is considered a "ledge" and the
 *     lowest possible level.
 * 
 *   - Players can jump in and out of the lowest level regions into non-height
 *     marked regions.
 * 
 *   - If the player is jumping towards the up, left, right directions, they
 *     cannot jump directly into a "ledge" region unless they are adjacent to
 *     the marked tile. A distance greater than 1 tile apart cannot be and the
 *     jump will be cut short.
 * 
 *   - If the player is jumping upward towards a "ledge", the player will jump
 *     directly onto the next available tile.
 * 
 *   - If the player is jumping towards the left or right directions into a
 *     "ledge" region, the player will "fall" a tile distance equal to the
 *     difference from the region height they're jumping from.
 *     - Regions listed: 10, 13, 15.
 *     - If the player is on Region 15 and jumps into a ledge (10), the player
 *       will drop 5 tiles downward.
 *     - If the player is on Region 13 and jumps into a ledge (10), the player
 *       will drop 3 tiles downward.
 * 
 *   - If the player is jumping downward towards a "ledge", the player will
 *     jump the full distance.
 * 
 * Keep in mind that despite the fact that there is Height-Based Region support
 * for Smart Jump, maps in RPG Maker MZ are still inherently 2D. Therefore, not
 * everything will look correct for every jump-related scenario involving
 * region heights. You may need to make adjustments to maps that work best for
 * the limited 2D nature of mapping in order to adhere to what Height-Based
 * Region support can handle.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * When Smart Jumping, the player cannot jump from a floor tile to a ceiling
 * tiles (the top tiles of A4 tiles). The player also cannot jump over them to
 * reach the other side of the ceiling tile onto a floor tile.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Blinks.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Jump?:
 *   - Allow diagonal Smart Jumping?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Jump is able to cover.
 * 
 *   Height-Based Regions:
 *   - Determine which regions are height-based.
 *   - The lowest value region will be a "ledge".
 * 
 * ---
 *
 * Restrictions
 * 
 *   Non-Land Regions:
 *   - Which regions forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Land Terrain Tags:
 *   - Which tags forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Regions:
 *   - Which regions will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Terrain Tags:
 *   - Which tags will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Rush Settings
 * ============================================================================
 *
 * Smart Rush is a Plugin Command launched action. The action will cause the
 * player to rush forward at faster (normally) than dash speed. If the Plugin
 * Command is placed at the end of the event list, then the player is able to
 * collide with other events, possibly triggering them.
 * 
 * While rushing forward, any switches listed in the Plugin Command will be
 * turned to the ON position, then OFF position once the rushing is finished.
 * This means that any events that the player collides with can have a unique
 * interaction from being rushed into. Examples include making objects fall
 * from trees, breaking down locked doors, or smashing apart rubble.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * When Smart Rushing into walls, solid objects, or events with a priority type
 * as "Same As Characters", the screen can shake when crashing. This does not
 * apply when crashing into water tiles.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Rushes.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Rush?:
 *   - Allow diagonal Smart Rushing?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Rush is able to cover.
 *
 * Visual
 * 
 *   Blur Duration:
 *   - Requires PixiJS Filters!
 *   - How long will the motion blur last?
 * 
 *   Blur Angle Offset:
 *   - Requires PixiJS Filters!
 *   - Offset the motion blur angle by this many degrees.
 *   - Otherwise, the motion blur angle is equal to the direction the player is
 *     rushing at.
 *
 * ---
 *
 * Crash Shake
 * 
 *   Enable Crash Shake?:
 *   - Cause the screen to shake after crashing into an entity?
 *   - Entities can be walls or events.
 * 
 *   Power Rate:
 *   - The power modifier for the screen shake upon crashing into something.
 * 
 *   Speed Rate:
 *   - The speed modifier for the screen shake upon crashing into something.
 * 
 *   Shaking Duration:
 *   - How many frames will the screen shake last after crashing into
 *     something?
 *
 * ---
 * 
 * Non-Crash
 * 
 *   Regions:
 *   - When crashing into these region-marked tiles, do not shake the screen.
 *   - This is primarily used for tiles such as water tiles so that it doesn't
 *     look like there's an invisible wall where the player is crashing into.
 * 
 *   Terrain Tags:
 *   - When crashing into these terrain tagged tiles, do not shake the screen.
 *   - This is primarily used for tiles such as water tiles so that it doesn't
 *     look like there's an invisible wall where the player is crashing into.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smooth Camera Scrolling Settings
 * ============================================================================
 *
 * Adjust the settings for smooth camera scrolling while the player moves.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Is the Smooth Camera enabled by default?
 *
 *   Walk Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *   Dash Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters control the settings you see in the Options menu.
 * These are for players who might be bothered by some of the various features
 * found in the plugin and will grant them the ability to turn them on/off.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Is the Smooth Camera enabled by default?
 * 
 * ---
 *
 * Dust Cloud:
 * 
 *   Add Option?:
 *   - Add the 'Dust Clouds' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * Smooth Camera:
 * 
 *   Add Option?:
 *   - Add the 'Smooth Scroll' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.08: October 27, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: September 1, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevented some notetags from being used. Fix by Arisu.
 * 
 * Version 1.06: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a crash that prevented some settings from being able to be read
 *    properly. Fix made by Irina.
 * 
 * Version 1.05: August 4, 2022
 * * Compatibility Update!
 * ** Special effects now work better with zoom.
 * * Feature Update!
 * ** Scroll-linked parallax images will now work better with Smooth Scroll.
 * 
 * Version 1.04: July 7, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Smart Blink > Mechanics > Floor to Ceiling?
 * **** Allow blinking from floor to ceiling tiles?
 * 
 * Version 1.03: June 30, 2022
 * * Bug Fixes!
 * ** Followers will no longer cause footstep sounds while in a vehicle.
 *    Fix made by Irina.
 * * Documentation Update
 * ** Added to: Plugin Parameters: Smart Rush Settings
 * *** When Smart Rushing into walls, solid objects, or events with a priority
 *     type as "Same As Characters", the screen can shake when crashing. This
 *     does not apply when crashing into water tiles.
 * ** Added to: Plugin Parameters: Smart Jump Settings
 * *** When Smart Jumping, the player cannot jump from a floor tile to a
 *     ceiling tiles (the top tiles of A4 tiles). The player also cannot jump
 *     over them to reach the other side of the ceiling tile onto a floor tile.
 * * Feature Update!
 * ** Smart Rush will no longer play a crash animation when targeting a water
 *    tile. Update made by Irina.
 * ** Smart Jump will no longer be able to jump over ceiling tiles if the
 *    player character is on a floor tile. Update made by Irina.
 * ** Smart Jump will no longer be able to jump onto ceiling tiles if the
 *    player character is on a floor tile. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: June 23, 2022
 * * Feature Update!
 * ** Smart Jump, Smart Rush, and Smart Blink are now temporarily disabled
 *    while followers are in the middle of gathering to reduce errors. Update
 *    made by Olivia.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** <Terrain Tag x Footsteps: filename> notetag should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.00 Official Release Date: April 4, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DustCloud
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_DustCloud
 * @text Category - Dust Clouds
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DustCloudEnableDisable
 * @text DUST CLOUDS: Enable/Disable
 * @desc Enable or Disable the Dust Clouds from spawning when dashing.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Dust Clouds ON
 * @off Dust Clouds OFF
 * @desc Enables or Disables Dust Clouds.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DustCloudChangeSettings
 * @text DUST CLOUDS: Change Settings
 * @desc Alter the existing Dust Clouds settings.
 * 
 * @arg Appearance
 * 
 * @arg filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the Dust Cloud. Leave empty if using none.
 * @default 
 *
 * @arg color:str
 * @text Color
 * @parent Appearance
 * @desc Color of the dust cloud in #rrggbb format.
 * For generated dust clouds only. Ignore if using image.
 * @default #ffffff
 *
 * @arg radius:num
 * @text Radius
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the max radius of this dust cloud?
 * For generated dust clouds only. Ignore if using image.
 * @default 24
 *
 * @arg fullness:num
 * @text Fullness
 * @parent Appearance
 * @desc What is the fullness level (0.0 to 1.0)?
 * For generated dust clouds only. Ignore if using image.
 * @default 0.20
 * 
 * @arg Animation
 *
 * @arg wholeDuration:num
 * @text Duration
 * @parent Animation
 * @type number
 * @min 1
 * @desc How many frames will a dust cloud remain on screen?
 * @default 20
 *
 * @arg startOpacity:num
 * @text Starting Opacity
 * @parent Animation
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity (0-255)?
 * Dust cloud opacity will gradually go to 0.
 * @default 192
 *
 * @arg startScale:num
 * @text Starting Scale
 * @parent Animation
 * @desc What is the starting scale (0.0 to 1.0)?
 * Dust cloud scale will gradually go to 1.0.
 * @default 0.2
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Footprints
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Footprints
 * @text Category - Footprints & Footsteps
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FootprintsEnableDisable
 * @text FOOTPRINTS: Enable/Disable
 * @desc Enable or Disable footprint marks from being made.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Footprint Marks ON
 * @off Footprint Marks OFF
 * @desc Enables or Disables footprint marks.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FootstepsEnableDisable
 * @text FOOTSTEPS: Enable/Disable
 * @desc Enable or Disable footstep sounds from being played.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Enables or Disables footstep sounds.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MotionBlur
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_MotionBlur
 * @text Category - Motion Blur
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurPlayer
 * @text MOTION BLUR: Player
 * @desc Plays a Motion Blur on the player sprite.
 * Requires Pixi JS Filters!
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this motion blur effect to followers, too?
 * @default true
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurFollower
 * @text MOTION BLUR: Follower(s)
 * @desc Plays a Motion Blur on the follower sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurEvent
 * @text MOTION BLUR: Event(s)
 * @desc Plays a Motion Blur on event sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MotionTrails
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_MotionTrails
 * @text Category - Motion Trails
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangePlayer
 * @text MOTION TRAIL: Change Settings For Player?
 * @desc Change Motion Trail settings for the player.
 * This does NOT enable them. You must do that separately.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this change to followers, too?
 * @default true
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 360
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangeFollower
 * @text MOTION TRAIL: Change Settings For Follower(s)?
 * @desc Change Motion Trail settings for follower(s).
 * This does NOT enable them. You must do that separately.
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 360
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangeEvent
 * @text MOTION TRAIL: Change Settings For Event(s)?
 * @desc Change Motion Trail settings for event(s).
 * This does NOT enable them. You must do that separately.
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 360
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForPlayer
 * @text MOTION TRAIL: Create For Player
 * @desc Immediately create a motion trail sprite for the player
 * in the player's current position.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this effect to followers, too?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForFollower
 * @text MOTION TRAIL: Create For Follower(s)
 * @desc Immediately create a motion trail sprite for the follower(s)
 * in the follower(s)'s current position.
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to target.
 * Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForEvent
 * @text MOTION TRAIL: Create For Event(s)
 * @desc Immediately create a motion trail sprite for the event(s)
 * in the event(s)'s current position.
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to target.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnablePlayer
 * @text MOTION TRAIL: Enable For Player?
 * @desc Enables/disables Motion Trails for player sprite.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this change to followers, too?
 * @default true
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnableFollower
 * @text MOTION TRAIL: Enable For Follower(s)?
 * @desc Plays a Motion Blur on the follower sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnableEvent
 * @text MOTION TRAIL: Enable For Event(s)?
 * @desc Plays a Motion Blur on event sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SmartMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_SmartMove
 * @text Category - Smart Movements
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartDirMoveSpeedMod
 * @text SMART: Directional Move Speed Modifier
 * @desc Global! These settings allow you to adjust the movement speed
 * modifiers when characters are facing certain directions.
 * 
 * @arg Standard
 * @text Standard Directions
 *
 * @arg dir2:str
 * @text Down Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir4:str
 * @text Left Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir6:str
 * @text Right Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir8:str
 * @text Up Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 * 
 * @arg Diagonal
 * @text Diagonal Directions
 *
 * @arg dir1:str
 * @text Lower Left Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir3:str
 * @text Lower Right Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir7:str
 * @text Upper Left Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir9:str
 * @text Upper Right Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartBlinkDistance
 * @text SMART: Smart Blink X Tiles
 * @desc Player uses "Smart Blink" to teleport forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will the player teleport forward?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Blink is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 * 
 * @arg Restrict
 * @text Restrictions
 *
 * @arg NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Blink from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Blink from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Blink from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Blink from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Blink?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"4","duration:num":"60","hue:num":"0","opacityStart:num":"255","tone:eval":"[0, 192, 192, 128]"}
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Blink.
 * @default Flash2
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Blink.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Blink.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Blink.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartJumpDistance
 * @text SMART: Smart Jump X Tiles
 * @desc Player uses "Smart Jump" to leap forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will the player jump forward?
 * You may use JavaScript code.
 * @default 2
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Jump is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 * 
 * @arg Restrict
 * @text Restrictions
 *
 * @arg NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Jump from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Jump from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Jump from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Jump from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Jump?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"4","duration:num":"30","hue:num":"0","opacityStart:num":"128","tone:eval":"[0, 0, 0, 0]"}
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Jump.
 * @default Jump1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Jump.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Jump.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Jump.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartRushDistance
 * @text SMART: Smart Rush X Tiles
 * @desc Player uses "Smart Rush" to rush forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will player charge forward?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Rush is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 *
 * @arg Switches:arraynum
 * @text Switch(es)
 * @parent Mechanics
 * @type switch[]
 * @desc Which Switch(es) will turn ON during Smart Rush?
 * This Switch(es) will also turn OFF after.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Rush?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"1","duration:num":"30","hue:num":"0","opacityStart:num":"128","tone:eval":"[192, 0, 192, 128]"}
 *
 * @arg SpeedRate:eval
 * @text Speed Rate
 * @parent Visual
 * @desc How much faster is "Smart Rush" compared to Dashing?
 * You may use JavaScript code.
 * @default 1.50
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Rush.
 * @default Wind1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Rush.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Rush.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Rush.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartBlink
 * @text SMART: Wait for Smart Blink
 * @desc Waits for player to finish Smart Blinking before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartJump
 * @text SMART: Wait for Smart Jump
 * @desc Waits for player to finish Smart Jumping before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartRush
 * @text SMART: Wait for Smart Rush
 * @desc Waits for player to finish Smart Rushing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SmoothCamera
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_SmoothCamera
 * @text Category - Smooth Camera
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmoothCameraEnableDisable
 * @text SMOOTH CAMERA: Enable/Disable
 * @desc Enable or Disable the Smooth Camera.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Smooth Camera ON
 * @off Smooth Camera OFF
 * @desc Enables or Disables Smooth Camera.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmoothCameraSpeedChange
 * @text SMOOTH CAMERA: Speed Change
 * @desc Change the scrolling speed for the Smooth Camera.
 *
 * @arg WalkSpeed
 * @text Walking Speed
 *
 * @arg HorzWalk:num
 * @text Horizontal Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @arg VertWalk:num
 * @text Vertical Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @arg DashSpeed
 * @text Dashing Speed
 *
 * @arg HorzDash:num
 * @text Horizontal Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @arg VertDash:num
 * @text Vertical Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MovementEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DustCloud:struct
 * @text Dust Cloud Settings
 * @type struct<DustCloud>
 * @desc Adjust the settings for kicked up dust clouds whenever a character is dashing.
 * @default {"Default":"","Enabled:eval":"true","Appearance":"","filename:str":"","color:str":"#ffffff","radius:num":"24","fullness:num":"0.20","Animation":"","wholeDuration:num":"20","startOpacity:num":"192","startScale:num":"0.2"}
 *
 * @param Footprints:struct
 * @text Footprint Marks Settings
 * @type struct<Footprints>
 * @desc Adjust the settings for footprint marks whenever characters walk on the map.
 * @default {"General":"","Enabled:eval":"true","Appearance":"","startOpacity:num":"64","wholeDuration:num":"600","followerVariance:num":"4","MapDefaults":"","DefaultRegions:arraynum":"[]","DefaultTerrainTags:arraynum":"[]","StandardDirections":"","dir2:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-4\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+4\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir4:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-6\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-6\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir6:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+6\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+6\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir8:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+4\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-4\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","DiagonalDirections":"","dir1:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir3:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir7:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir9:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}"}
 *
 * @param Footsteps:struct
 * @text Footstep Sounds Settings
 * @type struct<Footsteps>
 * @desc Adjust the settings for the sounds footsteps make whenever characters walk on the map.
 * @default {"General":"","Enabled:eval":"true","SoundByFrame:eval":"true","Frames:arraynum":"[\"0\",\"2\"]","FrameDashModifier:num":"1.5","Default":"","name:str":"Blow2","volume:num":"10","pitch:num":"120","pan:num":"0","Distance":"","distanceVolumeModifier:num":"-0.50","distancePitchModifier:num":"-0.00","distancePanModifier:num":"5","Actor":"","actorEnabled:eval":"true","actorVolumeModifier:num":"1.00","actorPitchModifier:num":"1.00","Event":"","eventEnabled:eval":"true","eventVolumeModifier:num":"1.00","eventPitchModifier:num":"1.00"}
 *
 * @param SmartBlink:struct
 * @text Smart Blink Settings
 * @type struct<SmartBlink>
 * @desc Settings involving the Smart Blink movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","Visual":"","BlurDuration:num":"30","AngleOffset:num":"-15","Restrict":"","NonLandableRegions:arraynum":"[]","NonLandableTerrainTags:arraynum":"[]","NonPassableRegions:arraynum":"[]","NonPassableTerrainTags:arraynum":"[]"}
 *
 * @param SmartJump:struct
 * @text Smart Jump Settings
 * @type struct<SmartJump>
 * @desc Settings involving the Smart Jump movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","HeightBasedRegions:arraynum":"[]","Restrict":"","NonLandableRegions:arraynum":"[]","NonLandableTerrainTags:arraynum":"[]","NonPassableRegions:arraynum":"[]","NonPassableTerrainTags:arraynum":"[]"}
 *
 * @param SmartRush:struct
 * @text Smart Rush Settings
 * @type struct<SmartRush>
 * @desc Settings involving the Smart Rush movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","Visual":"","BlurDuration:num":"30","AngleOffset:num":"15","Shake":"","Enable:eval":"true","ShakePowerRate:num":"3.0","ShakeSpeedRate:num":"3.0","ShakeDuration:num":"20","NonCrash":"","NonCrashRegions:arraynum":"[]","NonCrashTerrainTags:arraynum":"[]"}
 *
 * @param SmoothCamera:struct
 * @text Smooth Camera Scrolling
 * @type struct<SmoothCamera>
 * @desc Adjust the settings for smooth camera scrolling while the player moves.
 * @default {"Default":"","Enabled:eval":"true","WalkSpeed":"","HorzWalk:num":"24","VertWalk:num":"24","DashSpeed":"","HorzDash:num":"16","VertDash:num":"16"}
 *
 * @param Options:struct
 * @text Options Menu Settings
 * @type struct<Options>
 * @desc Options settings for this plugin's various features.
 * @default {"Options":"","AdjustRect:eval":"true","DustCloud":"","AddDustCloud:eval":"true","DustCloudName:str":"Dust Clouds","Footprints":"","AddFootprints:eval":"true","FootprintsName:str":"Footprint Marks","Footsteps":"","AddFootsteps:eval":"true","FootstepsName:str":"Footstep Sounds","SmoothCamera":"","AddSmoothCamera:eval":"true","SmoothCameraName:str":"Smooth Scroll"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Dust Cloud Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DustCloud:
 *
 * @param Default
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent Default
 * @type boolean
 * @on Dust Clouds ON
 * @off Dust Clouds OFF
 * @desc Are Dust Clouds enabled by default?
 * @default true
 * 
 * @param Appearance
 * 
 * @param filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the Dust Cloud. Leave empty if using none.
 * @default 
 *
 * @param color:str
 * @text Color
 * @parent Appearance
 * @desc Color of the dust cloud in #rrggbb format.
 * For generated dust clouds only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the max radius of this dust cloud?
 * For generated dust clouds only. Ignore if using image.
 * @default 24
 *
 * @param fullness:num
 * @text Fullness
 * @parent Appearance
 * @desc What is the fullness level (0.0 to 1.0)?
 * For generated dust clouds only. Ignore if using image.
 * @default 0.20
 * 
 * @param Animation
 *
 * @param wholeDuration:num
 * @text Duration
 * @parent Animation
 * @type number
 * @min 1
 * @desc How many frames will a dust cloud remain on screen?
 * @default 20
 *
 * @param startOpacity:num
 * @text Starting Opacity
 * @parent Animation
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity (0-255)?
 * Dust cloud opacity will gradually go to 0.
 * @default 192
 *
 * @param startScale:num
 * @text Starting Scale
 * @parent Animation
 * @desc What is the starting scale (0.0 to 1.0)?
 * Dust cloud scale will gradually go to 1.0.
 * @default 0.2
 *
 */
/* ----------------------------------------------------------------------------
 * Footprints Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Footprints:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent General
 * @type boolean
 * @on Footprint Marks ON
 * @off Footprint Marks OFF
 * @desc Are footprint marks enabled by default?
 * @default true
 *
 * @param Appearance
 *
 * @param startOpacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity of the footprint?
 * @default 64
 *
 * @param wholeDuration:num
 * @text Duration
 * @parent Appearance
 * @type number
 * @desc How many frames will footprints remain on the screen before disappearing?
 * @default 600
 *
 * @param followerVariance:num
 * @text Follower Variance
 * @parent Appearance
 * @type number
 * @desc What variance should followers have for their footprints?
 * This is to avoid them all stepping in the same place.
 * @default 4
 * 
 * @param MapDefaults
 * @text Map Defaults
 *
 * @param DefaultRegions:arraynum
 * @text Regions
 * @parent MapDefaults
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which Regions will have footprints appear by default?
 * @default []
 *
 * @param DefaultTerrainTags:arraynum
 * @text Terrain Tags
 * @parent MapDefaults
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which terrain tags will have footprints appear by default?
 * @default []
 * 
 * @param StandardDirections
 * @text Standard Directions
 * 
 * @param dir2:struct
 * @text Down
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"-4\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"+4\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir4:struct
 * @text Left
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"-6\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"-6\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir6:struct
 * @text Right
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"+6\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"+6\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir8:struct
 * @text Up
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"+4\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"-4\",\"offsetY:num\":\"-4\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param DiagonalDirections
 * @text Diagonal Directions
 * 
 * @param dir1:struct
 * @text Lower Left
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir3:struct
 * @text Lower Right
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir7:struct
 * @text Upper Left
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir9:struct
 * @text Upper Right
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 *
 */
/* ----------------------------------------------------------------------------
 * Footprint Pattern Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FootprintPattern:
 * 
 * @param pattern0:struct
 * @text Pattern 0 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern1:struct
 * @text Pattern 1 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern2:struct
 * @text Pattern 2 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern3:struct
 * @text Pattern 3 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern4:struct
 * @text Pattern 4 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern5:struct
 * @text Pattern 5 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern6:struct
 * @text Pattern 6 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern7:struct
 * @text Pattern 7 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern8:struct
 * @text Pattern 8 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern9:struct
 * @text Pattern 9 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern10:struct
 * @text Pattern 10 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Footprint Pattern Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FootprintPatternData:
 *
 * @param Appearance
 *
 * @param filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a footprint for this data.
 * If used, ignore generated footprint settings.
 * @default 
 *
 * @param Generated
 *
 * @param width:num
 * @text Width
 * @parent Generated
 * @type number
 * @desc What is the width of this footprint?
 * Ignore if using an image.
 * @default 0
 *
 * @param height:num
 * @text Height
 * @parent Generated
 * @type number
 * @desc What is the height of this footprint?
 * Ignore if using an image.
 * @default 0
 *
 * @param Offsets
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offsets
 * @desc Offset the X position of this footprint.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offsets
 * @desc Offset the Y position of this footprint.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Footsteps Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Footsteps:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent General
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled by default?
 * @default true
 *
 * @param SoundByFrame:eval
 * @text Sound by Frame?
 * @parent General
 * @type boolean
 * @on Sounds by Frames
 * @off Sounds by Steps
 * @desc Play footstep sounds at certain sprite frames or with each tile step?
 * @default true
 *
 * @param Frames:arraynum
 * @text Audible Frame(s)
 * @parent SoundByFrame:eval
 * @type number[]
 * @desc Which sprite sheet "frames" will play a sound?
 * Sprite sheet Frames start at 0.
 * @default ["0","2"]
 *
 * @param FrameWalkModifier:num
 * @text Walk Ani Modifier
 * @parent General
 * @desc What is the rate at which animations play for walking?
 * This is to ensure the sound effects synch up.
 * @default 1.0
 *
 * @param FrameDashModifier:num
 * @text Dash Ani Modifier
 * @parent General
 * @desc What is the rate at which animations play for dashing?
 * This is to ensure the sound effects synch up.
 * @default 1.5
 *
 * @param Default
 * @text Default Sound
 * 
 * @param name:str
 * @text Filename
 * @parent Default
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Blow2
 *
 * @param volume:num
 * @text Volume
 * @parent Default
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 10
 *
 * @param pitch:num
 * @text Pitch
 * @parent Default
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @parent Default
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Distance
 *
 * @param distanceVolumeModifier:num
 * @text Volume Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use a decimal value.
 * @default -0.50
 *
 * @param distancePitchModifier:num
 * @text Pitch Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use a decimal value.
 * @default -0.00
 *
 * @param distancePanModifier:num
 * @text Pan Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use an integer value.
 * @default 5
 *
 * @param Actor
 * @text Actor Modifiers
 *
 * @param actorEnabled:eval
 * @text Enabled for Actors?
 * @parent Actor
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled for actors by default?
 * @default true
 *
 * @param actorVolumeModifier:num
 * @text Volume Modifier
 * @parent Actor
 * @desc Volume modifier rate for actors.
 * Use a decimal value.
 * @default 1.00
 *
 * @param actorPitchModifier:num
 * @text Pitch Modifier
 * @parent Actor
 * @desc Pitch modifier rate for actors.
 * Use a decimal value.
 * @default 1.00
 *
 * @param Event
 * @text Event Modifiers
 *
 * @param eventEnabled:eval
 * @text Enabled for Events?
 * @parent Event
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled for events by default?
 * @default true
 *
 * @param eventVolumeModifier:num
 * @text Volume Modifier
 * @parent Event
 * @desc Volume modifier rate for events.
 * Use a decimal value.
 * @default 1.00
 *
 * @param eventPitchModifier:num
 * @text Pitch Modifier
 * @parent Event
 * @desc Pitch modifier rate for events.
 * Use a decimal value.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Blink Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartBlink:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Blink?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Blinking?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param floorToCeiling:eval
 * @text Floor to Ceiling?
 * @parent Mechanics
 * @type boolean
 * @on Allow
 * @off Forbidden
 * @desc Allow blinking from floor to ceiling tiles?
 * @default false
 * 
 * @param Visual
 *
 * @param BlurDuration:num
 * @text Blur Duration
 * @parent Visual
 * @type number
 * @min 1
 * @desc Requires PixiJS Filters! How long will the motion blur last?
 * @default 30
 *
 * @param AngleOffset:num
 * @text Blur Angle Offset
 * @parent Visual
 * @desc Requires PixiJS Filters! Offset the motion blur angle by this many degrees.
 * @default -15
 * 
 * @param Restrict
 * @text Restrictions
 *
 * @param NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Blink from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Blink from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Blink from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Blink from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Jump Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartJump:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Jump?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Jumping?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param HeightBasedRegions:arraynum
 * @text Height-Based Regions
 * @parent Mechanics
 * @type number[]
 * @min 0
 * @max 255
 * @desc Determine which regions are height-based.
 * The lowest value region will be a "ledge".
 * @default []
 * 
 * @param Restrict
 * @text Restrictions
 *
 * @param NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Jump from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Jump from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Jump from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Jump from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Rush Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartRush:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Rush?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Rush?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param Visual
 *
 * @param BlurDuration:num
 * @text Blur Duration
 * @parent Visual
 * @type number
 * @min 1
 * @desc Requires PixiJS Filters! How long will the motion blur last?
 * @default 30
 *
 * @param AngleOffset:num
 * @text Blur Angle Offset
 * @parent Visual
 * @desc Requires PixiJS Filters! Offset the motion blur angle by this many degrees.
 * @default 15
 *
 * @param Shake
 * @text Crash Shake
 *
 * @param Enable:eval
 * @text Enable Crash Shake?
 * @parent Shake
 * @type boolean
 * @on Enable Crash Shake
 * @off Disable Crash Shake
 * @desc Cause the screen to shake after crashing into an entity?
 * @default true
 *
 * @param ShakePowerRate:num
 * @text Power Rate
 * @parent Shake
 * @desc The power modifier for the screen shake upon crashing into something.
 * @default 3.0
 *
 * @param ShakeSpeedRate:num
 * @text Speed Rate
 * @parent Shake
 * @desc The speed modifier for the screen shake upon crashing into something.
 * @default 3.0
 *
 * @param ShakeDuration:num
 * @text Shaking Duration
 * @parent Shake
 * @type number
 * @min 1
 * @desc How many frames will the screen shake last after crashing into something?
 * @default 20
 *
 * @param NonCrash
 * @text Non-Crash
 *
 * @param NonCrashRegions:arraynum
 * @text Regions
 * @parent NonCrash
 * @type number[]
 * @min 1
 * @max 255
 * @desc When crashing into these region-marked tiles, do not shake the screen.
 * @default []
 *
 * @param NonCrashTerrainTags:arraynum
 * @text Terrain Tags
 * @parent NonCrash
 * @type number[]
 * @min 1
 * @max 7
 * @desc When crashing into these terrain tagged tiles, do not shake the screen.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smooth Camera Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmoothCamera:
 *
 * @param Default
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent Default
 * @type boolean
 * @on Smooth Camera ON
 * @off Smooth Camera OFF
 * @desc Is the Smooth Camera enabled by default?
 * @default true
 *
 * @param WalkSpeed
 * @text Walking Speed
 *
 * @param HorzWalk:num
 * @text Horizontal Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @param VertWalk:num
 * @text Vertical Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @param DashSpeed
 * @text Dashing Speed
 *
 * @param HorzDash:num
 * @text Horizontal Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @param VertDash:num
 * @text Vertical Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param DustCloud
 * @text Dust Cloud
 *
 * @param AddDustCloud:eval
 * @text Add Option?
 * @parent DustCloud
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Dust Clouds' option to the Options menu?
 * @default true
 *
 * @param DustCloudName:str
 * @text Option Name
 * @parent DustCloud
 * @desc Command name of the option.
 * @default Dust Clouds
 *
 * @param Footprints
 * @text Footprint Marks
 *
 * @param AddFootprints:eval
 * @text Add Option?
 * @parent Footprints
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Footprint Marks' option to the Options menu?
 * @default true
 *
 * @param FootprintsName:str
 * @text Option Name
 * @parent Footprints
 * @desc Command name of the option.
 * @default Footprint Marks
 *
 * @param Footsteps
 * @text Footstep Sounds
 *
 * @param AddFootsteps:eval
 * @text Add Option?
 * @parent Footsteps
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Footstep Sounds' option to the Options menu?
 * @default true
 *
 * @param FootstepsName:str
 * @text Option Name
 * @parent Footsteps
 * @desc Command name of the option.
 * @default Footstep Sounds
 *
 * @param SmoothCamera
 * @text Smooth Camera
 *
 * @param AddSmoothCamera:eval
 * @text Add Option?
 * @parent SmoothCamera
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Smooth Scroll' option to the Options menu?
 * @default true
 *
 * @param SmoothCameraName:str
 * @text Option Name
 * @parent SmoothCamera
 * @desc Command name of the option.
 * @default Smooth Scroll
 *
 */
/* ----------------------------------------------------------------------------
 * Motion Trail Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MotionTrail:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Override?
 * @parent General
 * @type boolean
 * @on Override Settings
 * @off Don't Override Settings
 * @desc Override Motion Trail settings temporarily?
 * @default true
 *
 * @param Settings
 *
 * @param delay:num
 * @text Delay
 * @parent Settings
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @param duration:num
 * @text Duration
 * @parent Settings
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @param hue:num
 * @text Hue
 * @parent Settings
 * @type number
 * @min 0
 * @max 360
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @param opacityStart:num
 * @text Starting Opacity
 * @parent Settings
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @param tone:eval
 * @text Tone
 * @parent Settings
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 */
//=============================================================================

const _0x327db2=_0x13f5;(function(_0x3ddd2d,_0x3397db){const _0x5fb988=_0x13f5,_0x554b91=_0x3ddd2d();while(!![]){try{const _0x2f5304=-parseInt(_0x5fb988(0x405))/0x1*(-parseInt(_0x5fb988(0x3a8))/0x2)+parseInt(_0x5fb988(0x323))/0x3*(parseInt(_0x5fb988(0x1e5))/0x4)+-parseInt(_0x5fb988(0x268))/0x5+-parseInt(_0x5fb988(0x3ba))/0x6+-parseInt(_0x5fb988(0x19a))/0x7+-parseInt(_0x5fb988(0x1b3))/0x8*(parseInt(_0x5fb988(0x361))/0x9)+-parseInt(_0x5fb988(0x16d))/0xa*(-parseInt(_0x5fb988(0x3bb))/0xb);if(_0x2f5304===_0x3397db)break;else _0x554b91['push'](_0x554b91['shift']());}catch(_0x221894){_0x554b91['push'](_0x554b91['shift']());}}}(_0x33e9,0xe7104));function _0x13f5(_0x21f160,_0x94a7d){const _0x33e980=_0x33e9();return _0x13f5=function(_0x13f56c,_0x40d4e8){_0x13f56c=_0x13f56c-0x148;let _0x355086=_0x33e980[_0x13f56c];return _0x355086;},_0x13f5(_0x21f160,_0x94a7d);}var label='MovementEffects',tier=tier||0x0,dependencies=[_0x327db2(0x459),_0x327db2(0x38f)],pluginData=$plugins[_0x327db2(0x3d4)](function(_0x25d8ff){const _0x3c5351=_0x327db2;return _0x25d8ff['status']&&_0x25d8ff[_0x3c5351(0x2c8)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x327db2(0x1b2)]=VisuMZ[label][_0x327db2(0x1b2)]||{},VisuMZ['ConvertParams']=function(_0x2e2a45,_0x17d75c){const _0x1d4c87=_0x327db2;for(const _0x159457 in _0x17d75c){if('TjjnW'!=='DcprN'){if(_0x159457[_0x1d4c87(0x2a8)](/(.*):(.*)/i)){if('mSLtk'===_0x1d4c87(0x153))return!![];else{const _0xfef0a4=String(RegExp['$1']),_0x3f82b8=String(RegExp['$2'])[_0x1d4c87(0x42c)]()[_0x1d4c87(0x3f8)]();let _0x417041,_0x2dc3cb,_0x207961;switch(_0x3f82b8){case _0x1d4c87(0x1e0):_0x417041=_0x17d75c[_0x159457]!==''?Number(_0x17d75c[_0x159457]):0x0;break;case _0x1d4c87(0x32b):_0x2dc3cb=_0x17d75c[_0x159457]!==''?JSON['parse'](_0x17d75c[_0x159457]):[],_0x417041=_0x2dc3cb[_0x1d4c87(0x386)](_0x2363b5=>Number(_0x2363b5));break;case _0x1d4c87(0x3a9):_0x417041=_0x17d75c[_0x159457]!==''?eval(_0x17d75c[_0x159457]):null;break;case _0x1d4c87(0x314):_0x2dc3cb=_0x17d75c[_0x159457]!==''?JSON[_0x1d4c87(0x223)](_0x17d75c[_0x159457]):[],_0x417041=_0x2dc3cb['map'](_0x397570=>eval(_0x397570));break;case'JSON':_0x417041=_0x17d75c[_0x159457]!==''?JSON[_0x1d4c87(0x223)](_0x17d75c[_0x159457]):'';break;case _0x1d4c87(0x350):_0x2dc3cb=_0x17d75c[_0x159457]!==''?JSON[_0x1d4c87(0x223)](_0x17d75c[_0x159457]):[],_0x417041=_0x2dc3cb[_0x1d4c87(0x386)](_0x42c1ee=>JSON['parse'](_0x42c1ee));break;case'FUNC':_0x417041=_0x17d75c[_0x159457]!==''?new Function(JSON['parse'](_0x17d75c[_0x159457])):new Function(_0x1d4c87(0x44a));break;case'ARRAYFUNC':_0x2dc3cb=_0x17d75c[_0x159457]!==''?JSON['parse'](_0x17d75c[_0x159457]):[],_0x417041=_0x2dc3cb[_0x1d4c87(0x386)](_0x5d6e8d=>new Function(JSON[_0x1d4c87(0x223)](_0x5d6e8d)));break;case'STR':_0x417041=_0x17d75c[_0x159457]!==''?String(_0x17d75c[_0x159457]):'';break;case _0x1d4c87(0x45c):_0x2dc3cb=_0x17d75c[_0x159457]!==''?JSON[_0x1d4c87(0x223)](_0x17d75c[_0x159457]):[],_0x417041=_0x2dc3cb[_0x1d4c87(0x386)](_0x1c494f=>String(_0x1c494f));break;case _0x1d4c87(0x2be):_0x207961=_0x17d75c[_0x159457]!==''?JSON[_0x1d4c87(0x223)](_0x17d75c[_0x159457]):{},_0x417041=VisuMZ[_0x1d4c87(0x295)]({},_0x207961);break;case _0x1d4c87(0x448):_0x2dc3cb=_0x17d75c[_0x159457]!==''?JSON[_0x1d4c87(0x223)](_0x17d75c[_0x159457]):[],_0x417041=_0x2dc3cb[_0x1d4c87(0x386)](_0x33caff=>VisuMZ['ConvertParams']({},JSON[_0x1d4c87(0x223)](_0x33caff)));break;default:continue;}_0x2e2a45[_0xfef0a4]=_0x417041;}}}else this[_0x1d4c87(0x420)]['enabled']=![];}return _0x2e2a45;},(_0x1ac842=>{const _0x2c4f57=_0x327db2,_0x39a60c=_0x1ac842[_0x2c4f57(0x230)];for(const _0x445717 of dependencies){if(_0x2c4f57(0x446)===_0x2c4f57(0x29d)){const _0x152225=_0x4b68b2['MovementEffects'][_0x2c4f57(0x1b2)][_0x2c4f57(0x288)];this['_footprintsData']={'enabled':!![],'dir1':_0x37bb48[_0x2c4f57(0x223)](_0x17b474[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x180)])),'dir2':_0x1a9ebf[_0x2c4f57(0x223)](_0x71dc57[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x2c6)])),'dir3':_0x5df569[_0x2c4f57(0x223)](_0x2d4cd3[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x399)])),'dir4':_0x3e43b0[_0x2c4f57(0x223)](_0x4d9430[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x199)])),'dir6':_0x1f6866[_0x2c4f57(0x223)](_0x5dc283[_0x2c4f57(0x2b4)](_0x152225['dir6'])),'dir7':_0x3a250e[_0x2c4f57(0x223)](_0x2d51fd[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x1c3)])),'dir8':_0x4ea8f0[_0x2c4f57(0x223)](_0x14e0d3[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x3a0)])),'dir9':_0x1f2fe4[_0x2c4f57(0x223)](_0x28331f[_0x2c4f57(0x2b4)](_0x152225[_0x2c4f57(0x381)]))};}else{if(!Imported[_0x445717]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x2c4f57(0x3c4)](_0x39a60c,_0x445717)),SceneManager['exit']();break;}}}const _0x4f4390=_0x1ac842[_0x2c4f57(0x2c8)];if(_0x4f4390['match'](/\[Version[ ](.*?)\]/i)){if(_0x2c4f57(0x3ae)===_0x2c4f57(0x3ae)){const _0x3a51b4=Number(RegExp['$1']);_0x3a51b4!==VisuMZ[label][_0x2c4f57(0x407)]&&('KWtnH'==='KWtnH'?(alert(_0x2c4f57(0x3e8)[_0x2c4f57(0x3c4)](_0x39a60c,_0x3a51b4)),SceneManager[_0x2c4f57(0x20e)]()):(_0x23cd98[_0x2c4f57(0x300)][_0x2c4f57(0x1b9)][_0x2c4f57(0x35f)](this),this[_0x2c4f57(0x3fc)]()));}else this[_0x2c4f57(0x14a)]();}if(_0x4f4390[_0x2c4f57(0x2a8)](/\[Tier[ ](\d+)\]/i)){if(_0x2c4f57(0x3e1)===_0x2c4f57(0x3e1)){const _0x2776db=Number(RegExp['$1']);if(_0x2776db<tier)alert(_0x2c4f57(0x334)[_0x2c4f57(0x3c4)](_0x39a60c,_0x2776db,tier)),SceneManager[_0x2c4f57(0x20e)]();else{if(_0x2c4f57(0x356)===_0x2c4f57(0x356))tier=Math[_0x2c4f57(0x43c)](_0x2776db,tier);else return _0x1c9886['leader']()?_0x5abfa8[_0x2c4f57(0x297)]()[_0x2c4f57(0x285)]():_0xcae0b5['prototype'][_0x2c4f57(0x285)][_0x2c4f57(0x35f)](this);}}else this[_0x2c4f57(0x378)]=_0x5842b7['MovementEffects'][_0x2c4f57(0x1b2)][_0x2c4f57(0x288)][_0x2c4f57(0x3a7)];}VisuMZ[_0x2c4f57(0x295)](VisuMZ[label]['Settings'],_0x1ac842[_0x2c4f57(0x462)]);})(pluginData),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],'DustCloudEnableDisable',_0x1c0d36=>{const _0x3076f7=_0x327db2;VisuMZ[_0x3076f7(0x295)](_0x1c0d36,_0x1c0d36);const _0x224e6a=_0x1c0d36['Enable'];$gameSystem['dustCloudData']()[_0x3076f7(0x321)]=_0x224e6a;}),PluginManager[_0x327db2(0x1f9)](pluginData['name'],'DustCloudChangeSettings',_0x5e95b1=>{const _0xf295eb=_0x327db2;VisuMZ[_0xf295eb(0x295)](_0x5e95b1,_0x5e95b1);const _0xd77e5d=JsonEx[_0xf295eb(0x429)](_0x5e95b1);_0xd77e5d[_0xf295eb(0x321)]=$gameSystem[_0xf295eb(0x1a4)](),$gameSystem[_0xf295eb(0x3c3)](_0xd77e5d);}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x3a4),_0x124d30=>{const _0x2a6ad3=_0x327db2;VisuMZ[_0x2a6ad3(0x295)](_0x124d30,_0x124d30);const _0x238c52=_0x124d30[_0x2a6ad3(0x184)];$gameSystem[_0x2a6ad3(0x2e1)](_0x238c52);}),PluginManager['registerCommand'](pluginData[_0x327db2(0x230)],_0x327db2(0x3e5),_0x435638=>{const _0x1e9c7e=_0x327db2;VisuMZ[_0x1e9c7e(0x295)](_0x435638,_0x435638);const _0x1e295d=_0x435638[_0x1e9c7e(0x184)];$gameSystem[_0x1e9c7e(0x18a)](_0x1e295d);}),PluginManager[_0x327db2(0x1f9)](pluginData['name'],_0x327db2(0x408),_0x30d3c8=>{const _0x2193c9=_0x327db2;if(!SceneManager[_0x2193c9(0x332)]())return;const _0x3e9afb=SceneManager[_0x2193c9(0x294)][_0x2193c9(0x349)];if(!_0x3e9afb)return;VisuMZ[_0x2193c9(0x295)](_0x30d3c8,_0x30d3c8);const _0x332529=_0x30d3c8['Duration']||0x1,_0x129b9c=_0x30d3c8['AngleOffset']||0x0;let _0x673266=[$gamePlayer];_0x30d3c8[_0x2193c9(0x221)]&&('KhDJa'!=='KhDJa'?this['createSmartBlinkMotionTrailSprite']():_0x673266=_0x673266['concat']($gamePlayer[_0x2193c9(0x2da)]()[_0x2193c9(0x24a)]()));for(const _0x24b946 of _0x673266){if(_0x2193c9(0x3e4)!==_0x2193c9(0x182)){if(!_0x24b946)continue;const _0x3928ef=_0x3e9afb[_0x2193c9(0x3b4)](_0x24b946);_0x3928ef&&_0x3928ef['startMotionBlurEffect'](_0x332529,_0x129b9c);}else{let _0xf0887b=_0x444050['MovementEffects'][_0x2193c9(0x393)](this[_0x2193c9(0x169)]);_0xf0887b+=_0x9826f3;const _0x27461a=this[_0x2193c9(0x15c)][_0x2193c9(0x397)](0x0,0x1e);_0x4bf5c2[_0x2193c9(0x162)]['x']=_0x27461a*_0x54157c[_0x2193c9(0x42b)](_0xf0887b*_0x23b5e7['PI']/0xb4),_0x21627e[_0x2193c9(0x162)]['y']=-_0x27461a*_0x20ef5d[_0x2193c9(0x38d)](_0xf0887b*_0x52b088['PI']/0xb4);}}}),PluginManager['registerCommand'](pluginData[_0x327db2(0x230)],_0x327db2(0x3ec),_0x30f430=>{const _0x512ee0=_0x327db2;if(!SceneManager[_0x512ee0(0x332)]())return;const _0x2490d4=SceneManager[_0x512ee0(0x294)]['_spriteset'];if(!_0x2490d4)return;VisuMZ[_0x512ee0(0x295)](_0x30f430,_0x30f430);const _0x2ce7d6=_0x30f430[_0x512ee0(0x2d9)]||0x1,_0x5a095b=_0x30f430[_0x512ee0(0x36e)]||0x0,_0x50ac48=_0x30f430['Index'];let _0x52cfab=_0x50ac48[_0x512ee0(0x386)](_0x438c65=>$gamePlayer['followers']()['follower'](_0x438c65));for(const _0x329dae of _0x52cfab){if(!_0x329dae)continue;const _0x44abf7=_0x2490d4[_0x512ee0(0x3b4)](_0x329dae);if(_0x44abf7){if(_0x512ee0(0x278)===_0x512ee0(0x278))_0x44abf7['startMotionBlurEffect'](_0x2ce7d6,_0x5a095b);else{if(_0x529961!=='')_0x104f1d+='\x0a';_0x57b47f+=_0x2852f9['parameters'][0x0];}}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],'MotionBlurEvent',_0x211452=>{const _0x21fa86=_0x327db2;if(!SceneManager['isSceneMap']())return;const _0x156b6c=SceneManager[_0x21fa86(0x294)][_0x21fa86(0x349)];if(!_0x156b6c)return;VisuMZ[_0x21fa86(0x295)](_0x211452,_0x211452);const _0x4aa06e=_0x211452[_0x21fa86(0x2d9)]||0x1,_0x4d5cbe=_0x211452[_0x21fa86(0x36e)]||0x0,_0x2bf267=_0x211452['EventID'],_0x5aad3a=$gameTemp['getLastPluginCommandInterpreter']();let _0xe54539=_0x2bf267[_0x21fa86(0x386)](_0x41a69d=>$gameMap[_0x21fa86(0x1fd)](_0x41a69d||_0x5aad3a[_0x21fa86(0x44f)]()));for(const _0x43a4e9 of _0xe54539){if(!_0x43a4e9)continue;const _0x70ef89=_0x156b6c[_0x21fa86(0x3b4)](_0x43a4e9);_0x70ef89&&(_0x21fa86(0x16b)!=='azVJn'?_0x12e87d[_0x4e2b94]=_0x422ffb[_0x4fb9a2]:_0x70ef89[_0x21fa86(0x37d)](_0x4aa06e,_0x4d5cbe));}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],'MotionTrailCreateForPlayer',_0x5085ad=>{const _0x3fd961=_0x327db2;if(!SceneManager['isSceneMap']())return;const _0x39409c=SceneManager[_0x3fd961(0x294)][_0x3fd961(0x349)];if(!_0x39409c)return;VisuMZ['ConvertParams'](_0x5085ad,_0x5085ad);let _0x3c20b3=[$gamePlayer];if(_0x5085ad[_0x3fd961(0x221)]){if(_0x3fd961(0x411)!==_0x3fd961(0x208))_0x3c20b3=_0x3c20b3[_0x3fd961(0x250)]($gamePlayer[_0x3fd961(0x2da)]()['data']());else{if(this[_0x3fd961(0x33a)]===_0x27e3f6)this[_0x3fd961(0x198)]();this[_0x3fd961(0x33a)]=_0x505d42['makeDeepCopy'](_0x26dde4);}}for(const _0x45bb15 of _0x3c20b3){if(_0x3fd961(0x348)!==_0x3fd961(0x348))return _0x137ba6[_0x3fd961(0x1f7)]();else{if(!_0x45bb15)continue;const _0xc955d4=_0x39409c[_0x3fd961(0x3b4)](_0x45bb15);_0xc955d4&&_0xc955d4[_0x3fd961(0x44e)]();}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x2a5),_0x2050f7=>{const _0x242403=_0x327db2;if(!SceneManager[_0x242403(0x332)]())return;const _0x3d107d=SceneManager[_0x242403(0x294)][_0x242403(0x349)];if(!_0x3d107d)return;VisuMZ[_0x242403(0x295)](_0x2050f7,_0x2050f7);const _0x4ccf13=_0x2050f7[_0x242403(0x206)];let _0x4449ed=_0x4ccf13[_0x242403(0x386)](_0x544ebd=>$gamePlayer[_0x242403(0x2da)]()[_0x242403(0x275)](_0x544ebd));for(const _0x500786 of _0x4449ed){if(!_0x500786)continue;const _0x46a0b4=_0x3d107d[_0x242403(0x3b4)](_0x500786);if(_0x46a0b4){if('ljqPN'===_0x242403(0x306)){if(this[_0x242403(0x378)]===_0x4724e3)this[_0x242403(0x45e)]();return this[_0x242403(0x378)];}else _0x46a0b4[_0x242403(0x44e)]();}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x200),_0x3721d2=>{const _0x73fccc=_0x327db2;if(!SceneManager[_0x73fccc(0x332)]())return;const _0x43c26a=SceneManager[_0x73fccc(0x294)]['_spriteset'];if(!_0x43c26a)return;VisuMZ['ConvertParams'](_0x3721d2,_0x3721d2);const _0x46d9b8=_0x3721d2[_0x73fccc(0x445)],_0xa1c618=$gameTemp[_0x73fccc(0x3ef)]();let _0x41c77c=_0x46d9b8[_0x73fccc(0x386)](_0xf1392e=>$gameMap[_0x73fccc(0x1fd)](_0xf1392e||_0xa1c618[_0x73fccc(0x44f)]()));for(const _0xc1579c of _0x41c77c){if(_0x73fccc(0x207)!==_0x73fccc(0x207)){const _0x41d124=new _0x5073d3(this,this[_0x73fccc(0x169)]),_0x182888=_0x8caa58[_0x73fccc(0x294)][_0x73fccc(0x349)];_0x182888[_0x73fccc(0x2bc)][_0x73fccc(0x322)](_0x41d124),this[_0x73fccc(0x43f)]=this['_character'][_0x73fccc(0x1c5)],this[_0x73fccc(0x2f4)]=this[_0x73fccc(0x169)][_0x73fccc(0x358)];const _0x2e7314=_0x182888[_0x73fccc(0x3f7)];_0x2e7314[_0x73fccc(0x45f)](_0x41d124);}else{if(!_0xc1579c)continue;const _0x32149b=_0x43c26a['findTargetSprite'](_0xc1579c);_0x32149b&&(_0x73fccc(0x37a)===_0x73fccc(0x328)?this[_0x73fccc(0x39c)]&&this[_0x73fccc(0x39c)]--:_0x32149b[_0x73fccc(0x44e)]());}}}),PluginManager['registerCommand'](pluginData['name'],_0x327db2(0x32e),_0x56939c=>{const _0x54d19d=_0x327db2;if(!SceneManager['isSceneMap']())return;VisuMZ['ConvertParams'](_0x56939c,_0x56939c);const _0x511383=_0x56939c[_0x54d19d(0x184)],_0x2de35d=_0x56939c[_0x54d19d(0x1aa)];let _0x1f9b83=[$gamePlayer];if(_0x56939c[_0x54d19d(0x221)]){if(_0x54d19d(0x18e)!==_0x54d19d(0x18e)){let _0x25b501=_0xa5977[_0x54d19d(0x300)][_0x54d19d(0x3f3)][_0x54d19d(0x35f)](this);return this[_0x54d19d(0x18c)]()&&(_0x25b501*=_0x1a253b['zoomScale']()),_0x25b501;}else _0x1f9b83=_0x1f9b83[_0x54d19d(0x250)]($gamePlayer[_0x54d19d(0x2da)]()[_0x54d19d(0x24a)]());}for(const _0xcddee9 of _0x1f9b83){if(_0x54d19d(0x2cd)!==_0x54d19d(0x2cd))this[_0x54d19d(0x255)]();else{if(!_0xcddee9)continue;_0xcddee9[_0x54d19d(0x3cc)](_0x511383,_0x2de35d);}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x2d1),_0xa2386d=>{const _0x5354f3=_0x327db2;if(!SceneManager[_0x5354f3(0x332)]())return;VisuMZ[_0x5354f3(0x295)](_0xa2386d,_0xa2386d);const _0x49e52a=_0xa2386d['Enable'],_0x26f28c=_0xa2386d['ImmediateCreate'],_0x326757=_0xa2386d['Index'];let _0x46c077=_0x326757[_0x5354f3(0x386)](_0x3a7e59=>$gamePlayer[_0x5354f3(0x2da)]()[_0x5354f3(0x275)](_0x3a7e59));for(const _0x2ff0b6 of _0x46c077){if(!_0x2ff0b6)continue;_0x2ff0b6[_0x5354f3(0x3cc)](_0x49e52a,_0x26f28c);}}),PluginManager['registerCommand'](pluginData[_0x327db2(0x230)],_0x327db2(0x359),_0x1baa60=>{const _0x4f159c=_0x327db2;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x4f159c(0x295)](_0x1baa60,_0x1baa60);const _0x36e1d6=_0x1baa60[_0x4f159c(0x184)],_0x4b260c=_0x1baa60[_0x4f159c(0x1aa)],_0x484fc3=_0x1baa60[_0x4f159c(0x445)],_0x468c1b=$gameTemp['getLastPluginCommandInterpreter']();let _0x25aa0b=_0x484fc3['map'](_0x2c0dca=>$gameMap[_0x4f159c(0x1fd)](_0x2c0dca||_0x468c1b[_0x4f159c(0x44f)]()));for(const _0x1300e6 of _0x25aa0b){if(_0x4f159c(0x1a5)===_0x4f159c(0x1a5)){if(!_0x1300e6)continue;_0x1300e6['enableMotionTrails'](_0x36e1d6,_0x4b260c);}else return this[_0x4f159c(0x1a7)]()?this['actor']()['footstepsData']():_0x10c94c[_0x4f159c(0x22e)][_0x4f159c(0x37c)]['call'](this);}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x14b),_0x46b8fc=>{const _0x365e63=_0x327db2;if(!SceneManager[_0x365e63(0x332)]())return;VisuMZ[_0x365e63(0x295)](_0x46b8fc,_0x46b8fc);const _0xfbee1d={'enabled':![],'delay':_0x46b8fc[_0x365e63(0x402)]||0x1,'duration':_0x46b8fc[_0x365e63(0x2e2)]||0x1,'hue':_0x46b8fc['hue']||0x0,'opacityStart':_0x46b8fc[_0x365e63(0x1a0)]||0x0,'tone':_0x46b8fc[_0x365e63(0x384)]||[0x0,0x0,0x0,0x0]};let _0x3c58f4=[$gamePlayer];if(_0x46b8fc['ApplyFollowers']){if(_0x365e63(0x32f)!==_0x365e63(0x32f)){const _0x372f69=_0x2f2157[_0x365e63(0x300)][_0x365e63(0x1b2)]['Footprints']['followerVariance']||0x0;this[_0x365e63(0x189)]=_0x39ba42[_0x365e63(0x172)](_0x372f69+0x1)+_0x2a0ece[_0x365e63(0x172)](_0x372f69+0x1)-_0x372f69,this[_0x365e63(0x406)]=_0x1a1df3[_0x365e63(0x172)](_0x372f69+0x1)+_0x4c0081['randomInt'](_0x372f69+0x1)-_0x372f69;}else _0x3c58f4=_0x3c58f4[_0x365e63(0x250)]($gamePlayer[_0x365e63(0x2da)]()[_0x365e63(0x24a)]());}for(const _0x37bcc3 of _0x3c58f4){if(_0x365e63(0x465)!=='ClsIN')this['_footprintsData'][_0x365e63(0x321)]=!![];else{if(!_0x37bcc3)continue;_0x37bcc3[_0x365e63(0x42a)](_0xfbee1d);}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],'MotionTrailSettingsChangeFollower',_0x4595fb=>{const _0x121eec=_0x327db2;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x121eec(0x295)](_0x4595fb,_0x4595fb);const _0x54381e={'enabled':![],'delay':_0x4595fb[_0x121eec(0x402)]||0x1,'duration':_0x4595fb[_0x121eec(0x2e2)]||0x1,'hue':_0x4595fb[_0x121eec(0x36c)]||0x0,'opacityStart':_0x4595fb[_0x121eec(0x1a0)]||0x0,'tone':_0x4595fb[_0x121eec(0x384)]||[0x0,0x0,0x0,0x0]},_0x2a994e=_0x4595fb[_0x121eec(0x206)];let _0x12d863=_0x2a994e[_0x121eec(0x386)](_0x205e1c=>$gamePlayer[_0x121eec(0x2da)]()[_0x121eec(0x275)](_0x205e1c));for(const _0x4a6168 of _0x12d863){if(_0x121eec(0x25b)!=='bAVxF'){if(!_0x4a6168)continue;_0x4a6168[_0x121eec(0x42a)](_0x54381e);}else{if(!_0x37ea03['isSmartRushEnabled']())return![];if(this['_smartRushCooldown'])return![];if(this[_0x121eec(0x452)]())return![];if(this[_0x121eec(0x464)]())return![];if(this[_0x121eec(0x395)]())return![];if(this[_0x121eec(0x23e)]())return![];const _0x2ba820=_0x59ee12[_0x121eec(0x300)][_0x121eec(0x1b2)][_0x121eec(0x261)],_0x2a3c04=this[_0x121eec(0x2e5)](_0x2ba820);return this[_0x121eec(0x1c2)](this['x'],this['y'],_0x2a3c04);}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],'MotionTrailSettingsChangeEvent',_0xdb709e=>{const _0x3b9401=_0x327db2;if(!SceneManager[_0x3b9401(0x332)]())return;VisuMZ[_0x3b9401(0x295)](_0xdb709e,_0xdb709e);const _0x38c682={'enabled':![],'delay':_0xdb709e['delay']||0x1,'duration':_0xdb709e[_0x3b9401(0x2e2)]||0x1,'hue':_0xdb709e[_0x3b9401(0x36c)]||0x0,'opacityStart':_0xdb709e[_0x3b9401(0x1a0)]||0x0,'tone':_0xdb709e[_0x3b9401(0x384)]||[0x0,0x0,0x0,0x0]},_0x2c74e7=_0xdb709e[_0x3b9401(0x445)],_0x470200=$gameTemp[_0x3b9401(0x3ef)]();let _0xed33e9=_0x2c74e7[_0x3b9401(0x386)](_0x26faff=>$gameMap[_0x3b9401(0x1fd)](_0x26faff||_0x470200[_0x3b9401(0x44f)]()));for(const _0x384e33 of _0xed33e9){if(!_0x384e33)continue;_0x384e33[_0x3b9401(0x42a)](_0x38c682);}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x417),_0x3ffd22=>{const _0x5f3fa0=_0x327db2;if(!SceneManager[_0x5f3fa0(0x332)]())return;VisuMZ['ConvertParams'](_0x3ffd22,_0x3ffd22);const _0x3e89a8={'slower':-0x1,'normal':0x0,'faster':0x1};for(let _0x4447ca=0x1;_0x4447ca<0xa;_0x4447ca++){if(_0x5f3fa0(0x1a3)===_0x5f3fa0(0x34e))_0x2898fe=_0xf9fe29[_0x5f3fa0(0x250)](_0x2e482d[_0x5f3fa0(0x2da)]()[_0x5f3fa0(0x24a)]());else{if(_0x4447ca===0x5)continue;const _0x239e5d=_0x5f3fa0(0x248)[_0x5f3fa0(0x3c4)](_0x4447ca),_0x834130=(_0x3ffd22[_0x239e5d]||_0x5f3fa0(0x3d6))[_0x5f3fa0(0x174)]()[_0x5f3fa0(0x3f8)](),_0x293c3c=_0x3e89a8[_0x834130]||0x0;$gameSystem[_0x5f3fa0(0x17d)](_0x4447ca,_0x293c3c);}}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x236),_0xabd43b=>{const _0x45198c=_0x327db2;if(!SceneManager[_0x45198c(0x332)]())return;VisuMZ[_0x45198c(0x295)](_0xabd43b,_0xabd43b);const _0x40facf=_0xabd43b['Distance']||0x1,_0x4947f1=_0xabd43b[_0x45198c(0x454)]||0x1,_0x3d03fb=_0xabd43b[_0x45198c(0x430)]||0x0,_0x3e2c6d={'NonLandableRegions':_0xabd43b[_0x45198c(0x34f)][_0x45198c(0x27b)](),'NonLandableTerrainTags':_0xabd43b[_0x45198c(0x44d)][_0x45198c(0x27b)](),'NonPassableRegions':_0xabd43b['NonPassableRegions'][_0x45198c(0x27b)](),'NonPassableTerrainTags':_0xabd43b['NonPassableTerrainTags'][_0x45198c(0x27b)]()},_0xb98544=_0xabd43b['AnimationID']||0x0,_0x5497ff=_0xabd43b[_0x45198c(0x1bc)]||{'enabled':![]},_0x285b52={'name':_0xabd43b[_0x45198c(0x263)]||'','volume':_0xabd43b[_0x45198c(0x3e6)]||0x0,'pitch':_0xabd43b[_0x45198c(0x351)]||0x0,'pan':_0xabd43b['sfxPan']||0x0};if($gamePlayer['smartBlink'](_0x40facf,_0x4947f1,_0x3e2c6d,_0x5497ff)){if('jXegl'==='jXegl')_0x285b52[_0x45198c(0x230)]!==''&&AudioManager[_0x45198c(0x1d1)](_0x285b52),_0xb98544>0x0&&$gameTemp[_0x45198c(0x16c)]([$gamePlayer],_0xb98544),_0x3d03fb>0x0&&SceneManager[_0x45198c(0x294)]['playOnceParallelInterpreter'](_0x3d03fb);else return this[_0x45198c(0x1a7)]()?this['actor']()[_0x45198c(0x285)]():_0x5edde9['prototype'][_0x45198c(0x285)][_0x45198c(0x35f)](this);}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x309),_0x1c6d8c=>{const _0x2f2fff=_0x327db2;if(!SceneManager[_0x2f2fff(0x332)]())return;VisuMZ[_0x2f2fff(0x295)](_0x1c6d8c,_0x1c6d8c);const _0x91e8c5=_0x1c6d8c[_0x2f2fff(0x42f)]||0x1,_0x17570a=_0x1c6d8c[_0x2f2fff(0x454)]||0x1,_0x2e71f9=_0x1c6d8c[_0x2f2fff(0x430)]||0x0,_0x462bd3={'NonLandableRegions':_0x1c6d8c['NonLandableRegions'][_0x2f2fff(0x27b)](),'NonLandableTerrainTags':_0x1c6d8c[_0x2f2fff(0x44d)][_0x2f2fff(0x27b)](),'NonPassableRegions':_0x1c6d8c[_0x2f2fff(0x1cf)][_0x2f2fff(0x27b)](),'NonPassableTerrainTags':_0x1c6d8c[_0x2f2fff(0x283)]['clone']()},_0x3fa72a=_0x1c6d8c[_0x2f2fff(0x1b6)]||0x0,_0x25cb07=_0x1c6d8c[_0x2f2fff(0x1bc)]||{'enabled':![]},_0x9e1e={'name':_0x1c6d8c[_0x2f2fff(0x263)]||'','volume':_0x1c6d8c[_0x2f2fff(0x3e6)]||0x0,'pitch':_0x1c6d8c[_0x2f2fff(0x351)]||0x0,'pan':_0x1c6d8c['sfxPan']||0x0};if($gamePlayer[_0x2f2fff(0x1d2)](_0x91e8c5,_0x17570a,_0x462bd3,_0x25cb07)){if('gppoy'===_0x2f2fff(0x1b5)){if(_0x9e1e[_0x2f2fff(0x230)]!==''){if(_0x2f2fff(0x289)==='dtGiI')AudioManager[_0x2f2fff(0x1d1)](_0x9e1e);else return![];}_0x3fa72a>0x0&&(_0x2f2fff(0x2c0)!==_0x2f2fff(0x2c0)?this[_0x2f2fff(0x460)]['nonLand']=!![]:$gameTemp['requestAnimation']([$gamePlayer],_0x3fa72a)),_0x2e71f9>0x0&&SceneManager['_scene'][_0x2f2fff(0x2d3)](_0x2e71f9);}else{let _0x362ec6=_0x2a9178[_0x2f2fff(0x300)]['Scene_Options_maxCommands'][_0x2f2fff(0x35f)](this);const _0x4dda6c=_0x314a47[_0x2f2fff(0x300)]['Settings'][_0x2f2fff(0x444)];if(_0x4dda6c[_0x2f2fff(0x2e6)]&&_0x4dda6c['AddDustCloud'])_0x362ec6++;if(_0x4dda6c['AdjustRect']&&_0x4dda6c[_0x2f2fff(0x150)])_0x362ec6++;if(_0x4dda6c[_0x2f2fff(0x2e6)]&&_0x4dda6c['AddFootsteps'])_0x362ec6++;if(_0x4dda6c['AdjustRect']&&_0x4dda6c[_0x2f2fff(0x231)])_0x362ec6++;return _0x362ec6;}}}),PluginManager[_0x327db2(0x1f9)](pluginData['name'],_0x327db2(0x3c5),_0x48c272=>{const _0x5187b4=_0x327db2;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x5187b4(0x295)](_0x48c272,_0x48c272);const _0x1d1837=_0x48c272[_0x5187b4(0x42f)]||0x1,_0x3c32fa=_0x48c272[_0x5187b4(0x454)]||0x1,_0x5d3bed=_0x48c272[_0x5187b4(0x430)]||0x0,_0x3044ed=_0x48c272['Switches']||[],_0x56555d=_0x48c272[_0x5187b4(0x3fe)]||0x1,_0x2860b1=_0x48c272['AnimationID']||0x0,_0xd9ceaf=_0x48c272[_0x5187b4(0x1bc)]||{'enabled':![]},_0x240641={'name':_0x48c272[_0x5187b4(0x263)]||'','volume':_0x48c272[_0x5187b4(0x3e6)]||0x0,'pitch':_0x48c272[_0x5187b4(0x351)]||0x0,'pan':_0x48c272[_0x5187b4(0x177)]||0x0};if($gamePlayer[_0x5187b4(0x1e6)](_0x1d1837,_0x3c32fa,_0x3044ed,_0x56555d,_0xd9ceaf)){if(_0x5187b4(0x3ac)!==_0x5187b4(0x1d0)){_0x240641['name']!==''&&AudioManager[_0x5187b4(0x1d1)](_0x240641);_0x2860b1>0x0&&$gameTemp[_0x5187b4(0x16c)]([$gamePlayer],_0x2860b1);if(_0x5d3bed>0x0){if(_0x5187b4(0x424)===_0x5187b4(0x424))SceneManager['_scene']['playOnceParallelInterpreter'](_0x5d3bed);else{if(this[_0x5187b4(0x345)]===_0xa7b537)this[_0x5187b4(0x38c)]();return this[_0x5187b4(0x345)][_0x5187b4(0x321)];}}}else _0x4d530d[_0x5187b4(0x300)][_0x5187b4(0x258)][_0x5187b4(0x35f)](this),this[_0x5187b4(0x272)]();}}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x31e),_0x28f99b=>{const _0x40e511=_0x327db2;if(!SceneManager[_0x40e511(0x332)]())return;const _0x2049d0=$gameTemp[_0x40e511(0x3ef)]();_0x2049d0['setWaitMode']('smartBlink');}),PluginManager['registerCommand'](pluginData[_0x327db2(0x230)],_0x327db2(0x21f),_0x4a33ea=>{const _0x2ccd8f=_0x327db2;if(!SceneManager[_0x2ccd8f(0x332)]())return;const _0x50694d=$gameTemp[_0x2ccd8f(0x3ef)]();_0x50694d[_0x2ccd8f(0x394)](_0x2ccd8f(0x1d2));}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x377),_0x4e0666=>{const _0x5c8dbe=_0x327db2;if(!SceneManager[_0x5c8dbe(0x332)]())return;const _0x215297=$gameTemp[_0x5c8dbe(0x3ef)]();_0x215297[_0x5c8dbe(0x394)](_0x5c8dbe(0x1e6));}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x1dd),_0x138071=>{const _0x107d58=_0x327db2;VisuMZ[_0x107d58(0x295)](_0x138071,_0x138071);const _0x166c9f=_0x138071[_0x107d58(0x184)];$gameSystem[_0x107d58(0x287)](_0x166c9f);}),PluginManager[_0x327db2(0x1f9)](pluginData[_0x327db2(0x230)],_0x327db2(0x2ed),_0x33ad2c=>{const _0xb2aea1=_0x327db2;VisuMZ[_0xb2aea1(0x295)](_0x33ad2c,_0x33ad2c),$gameSystem[_0xb2aea1(0x251)](_0x33ad2c[_0xb2aea1(0x370)],![],![]),$gameSystem['setSmoothCameraSpeed'](_0x33ad2c['VertWalk'],!![],![]),$gameSystem[_0xb2aea1(0x251)](_0x33ad2c[_0xb2aea1(0x228)],![],!![]),$gameSystem[_0xb2aea1(0x251)](_0x33ad2c[_0xb2aea1(0x42d)],!![],!![]);}),VisuMZ[_0x327db2(0x300)]['RegExp']={'CatchAll':/(?:SMOOTH|DASH|FOOT|REGION|TERRAIN|SMART|JUMP)/i,'ForceSmooth':/<FORCE SMOOTH (?:CAMERA|SCROLL)>/i,'NoSmooth':/<(?:NO|DISABLE) SMOOTH (?:CAMERA|SCROLL)>/i,'ForceDustCloud':/<FORCE (?:DASH|DUST) (?:CLOUD|CLOUDS)>/i,'NoDustCloud':/<(?:NO|DISABLE) (?:DASH|DUST) (?:CLOUD|CLOUDS)>/i,'ForceFootsteps':/<FORCE (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'NoFootsteps':/<(?:NO|DISABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'RegionFootstepSfx':/<REGION (\d+) FOOTSTEP SOUND:[ ](.*)>/gi,'NoRegionFootstepSfx':/<(?:NO|DISABLE) REGION (\d+) FOOTSTEP SOUND>/gi,'FootprintRegions':/<FOOTPRINT (?:REGION|REGIONS):[ ](.*?)>/i,'NonFootprintRegions':/<(?:NO|DISABLE) FOOTPRINT (?:REGION|REGIONS):[ ](.*?)>/i,'RegionFootprintOpacity':/<REGION (\d+) FOOTPRINT OPACITY:[ ](\d+)>/gi,'RegionFootprintDuration':/<REGION (\d+) FOOTPRINT DURATION:[ ](\d+)>/gi,'NoSmartRush':/<(?:NO|DISABLE) SMART RUSH>/i,'SmartRushAntiCrashRegions':/<SMART RUSH NON-CRASH (?:REGION|REGIONS):[ ](.*?)>/i,'NoSmartBlink':/<(?:NO|DISABLE) SMART BLINK>/i,'SmartBlinkNonLandRegions':/<SMART BLINK NON-LAND (?:REGION|REGIONS):[ ](.*?)>/i,'SmartBlinkNonPassRegions':/<SMART BLINK NON-PASS (?:REGION|REGIONS):[ ](.*?)>/i,'NoSmartJump':/<(?:NO|DISABLE) SMART JUMP>/i,'SmartJumpNonLandRegions':/<SMART JUMP NON-LAND (?:REGION|REGIONS):[ ](.*?)>/i,'SmartJumpNonPassRegions':/<SMART JUMP NON-PASS (?:REGION|REGIONS):[ ](.*?)>/i,'SmartJumpHeightBasedRegions':/<SMART JUMP HEIGHT-BASED (?:REGION|REGIONS):[ ](.*?)>/i,'TerrainTagFootstepSfx':/<TERRAIN TAG (\d+) (?:FOOTSTEP SOUND|FOOTSTEPS):[ ](.*)>/gi,'NoTerrainTagFootstepSfx':/<(?:NO|DISABLE) TERRAIN TAG (\d+) (?:FOOTSTEP SOUND|FOOTSTEPS)>/gi,'FootprintTerrainTags':/<FOOTPRINT TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'NonFootprintTerrainTags':/<(?:NO|DISABLE) FOOTPRINT TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'TerrainTagFootprintOpacity':/<TERRAIN TAG (\d+) FOOTPRINT OPACITY:[ ](\d+)>/gi,'TerrainTagFootprintDuration':/<TERRAIN TAG (\d+) FOOTPRINT DURATION:[ ](\d+)>/gi,'SmartRushAntiCrashTerrainTags':/<SMART RUSH NON-CRASH TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartBlinkNonLandTerrainTags':/<SMART BLINK NON-LAND TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartBlinkNonPassTerrainTags':/<SMART BLINK NON-PASS TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartJumpNonLandTerrainTags':/<SMART JUMP NON-LAND TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartJumpNonPassTerrainTags':/<SMART JUMP NON-PASS TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'YesFootstepsEvent':/<(?:ALLOW|ENABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'NoFootstepsEvent':/<(?:NO|DISABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'FootstepsVolRate':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) VOLUME:[ ](\d+)([%％])>/i,'FootstepsPitchRate':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) PITCH:[ ](\d+)([%％])>/i,'FootstepsFrames':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) (?:FRAME|FRAMES):[ ](.*?)>/i,'YesFootprintsEvent':/<(?:ALLOW|ENABLE) FOOTPRINTS>/i,'NoFootprintsEvent':/<(?:NO|DISABLE) FOOTPRINTS>/i,'FootprintsFilename':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) FILENAME:[ ](.*?)>/gi,'FootprintsWidth':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) WIDTH:[ ](\d+)>/gi,'FootprintsHeight':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) HEIGHT:[ ](\d+)>/gi,'FootprintsOffset':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) OFFSET:[ ](.*?)>/gi,'SmartJumpNonLandEvent':/<(?:SMART JUMP NON-LAND|ILLEGAL JUMP)>/i,'SmartJumpNonPassEvent':/<(?:SMART JUMP NON-PASS|ILLEGAL JUMP)>/i},VisuMZ[_0x327db2(0x300)][_0x327db2(0x159)]=[_0x327db2(0x2b1),_0x327db2(0x36f),_0x327db2(0x28b),_0x327db2(0x21c)],((()=>{const _0x435676=_0x327db2;for(const _0x20f2e2 of VisuMZ[_0x435676(0x300)][_0x435676(0x159)]){ConfigManager[_0x20f2e2]=!![];}})()),VisuMZ[_0x327db2(0x300)]['ConfigManager_makeData']=ConfigManager['makeData'],ConfigManager[_0x327db2(0x3c2)]=function(){const _0x17cdbe=_0x327db2,_0x5550b5=VisuMZ[_0x17cdbe(0x300)]['ConfigManager_makeData'][_0x17cdbe(0x35f)](this);for(const _0x33f7f4 of VisuMZ['MovementEffects'][_0x17cdbe(0x159)]){_0x5550b5[_0x33f7f4]=this[_0x33f7f4];}return _0x5550b5;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x362)]=ConfigManager[_0x327db2(0x1fc)],ConfigManager[_0x327db2(0x1fc)]=function(_0x1f309b){const _0x4f100b=_0x327db2;VisuMZ[_0x4f100b(0x300)][_0x4f100b(0x362)][_0x4f100b(0x35f)](this,_0x1f309b);for(const _0x2b2d57 of VisuMZ['MovementEffects'][_0x4f100b(0x159)]){if(_0x4f100b(0x1eb)===_0x4f100b(0x3f0)){const _0x5423b5=_0x113f58[_0x4f100b(0x300)]['RegExp'],_0x17a71d=_0x57e310[_0x4f100b(0x341)]||'';if(_0x17a71d['match'](_0x5423b5[_0x4f100b(0x2bd)]))return!![];else{if(_0x17a71d['match'](_0x5423b5[_0x4f100b(0x210)]))return![];}}else this[_0x4f100b(0x419)](_0x1f309b,_0x2b2d57,!![]);}},TextManager[_0x327db2(0x2d4)]={'DustCloud':VisuMZ[_0x327db2(0x300)]['Settings'][_0x327db2(0x444)][_0x327db2(0x3f2)],'Footprints':VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)][_0x327db2(0x444)][_0x327db2(0x368)],'Footsteps':VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)][_0x327db2(0x444)][_0x327db2(0x186)],'SmoothCamera':VisuMZ['MovementEffects'][_0x327db2(0x1b2)][_0x327db2(0x444)]['SmoothCameraName']},VisuMZ[_0x327db2(0x300)][_0x327db2(0x3eb)]=Scene_Options[_0x327db2(0x22e)][_0x327db2(0x2e0)],Scene_Options['prototype'][_0x327db2(0x2e0)]=function(){const _0x1921c7=_0x327db2;let _0x2c2b21=VisuMZ[_0x1921c7(0x300)][_0x1921c7(0x3eb)][_0x1921c7(0x35f)](this);const _0x395718=VisuMZ['MovementEffects'][_0x1921c7(0x1b2)][_0x1921c7(0x444)];if(_0x395718[_0x1921c7(0x2e6)]&&_0x395718[_0x1921c7(0x3d0)])_0x2c2b21++;if(_0x395718[_0x1921c7(0x2e6)]&&_0x395718[_0x1921c7(0x150)])_0x2c2b21++;if(_0x395718[_0x1921c7(0x2e6)]&&_0x395718['AddFootsteps'])_0x2c2b21++;if(_0x395718[_0x1921c7(0x2e6)]&&_0x395718[_0x1921c7(0x231)])_0x2c2b21++;return _0x2c2b21;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x22b)]=Window_Options[_0x327db2(0x22e)][_0x327db2(0x441)],Window_Options['prototype'][_0x327db2(0x441)]=function(){const _0x39827b=_0x327db2;VisuMZ[_0x39827b(0x300)][_0x39827b(0x22b)][_0x39827b(0x35f)](this),this[_0x39827b(0x211)]();},Window_Options[_0x327db2(0x22e)][_0x327db2(0x211)]=function(){const _0x3e3db6=_0x327db2;VisuMZ[_0x3e3db6(0x300)][_0x3e3db6(0x1b2)][_0x3e3db6(0x444)][_0x3e3db6(0x3d0)]&&this[_0x3e3db6(0x17b)]();if(VisuMZ[_0x3e3db6(0x300)][_0x3e3db6(0x1b2)][_0x3e3db6(0x444)]['AddFootprints']){if(_0x3e3db6(0x357)!==_0x3e3db6(0x281))this[_0x3e3db6(0x335)]();else return!![];}VisuMZ[_0x3e3db6(0x300)][_0x3e3db6(0x1b2)][_0x3e3db6(0x444)][_0x3e3db6(0x240)]&&this[_0x3e3db6(0x1b7)](),VisuMZ[_0x3e3db6(0x300)]['Settings'][_0x3e3db6(0x444)]['AddSmoothCamera']&&this[_0x3e3db6(0x34a)]();},Window_Options['prototype'][_0x327db2(0x17b)]=function(){const _0x259c64=_0x327db2,_0x17e563=TextManager[_0x259c64(0x2d4)][_0x259c64(0x3c6)],_0x237b2c=_0x259c64(0x2b1);this[_0x259c64(0x3d1)](_0x17e563,_0x237b2c);},Window_Options[_0x327db2(0x22e)][_0x327db2(0x335)]=function(){const _0x19da5f=_0x327db2,_0x471750=TextManager[_0x19da5f(0x2d4)][_0x19da5f(0x288)],_0x5ef7a4=_0x19da5f(0x36f);this[_0x19da5f(0x3d1)](_0x471750,_0x5ef7a4);},Window_Options[_0x327db2(0x22e)]['addMovementEffectsFootstepsCommand']=function(){const _0x97fac2=_0x327db2,_0x87d35a=TextManager['MovementEffectsOptions'][_0x97fac2(0x265)],_0xfe7a7=_0x97fac2(0x28b);this[_0x97fac2(0x3d1)](_0x87d35a,_0xfe7a7);},Window_Options[_0x327db2(0x22e)][_0x327db2(0x34a)]=function(){const _0x32b751=_0x327db2,_0x5c2e9c=TextManager[_0x32b751(0x2d4)][_0x32b751(0x2cc)],_0x3ee952=_0x32b751(0x21c);this[_0x32b751(0x3d1)](_0x5c2e9c,_0x3ee952);},ImageManager['generatedFootprintBitmap']=function(){const _0x410fea=_0x327db2;if(this[_0x410fea(0x2ba)])return this[_0x410fea(0x2ba)];const _0x3c8003=0x64,_0x3fa30d=0x64,_0x45585d=new Bitmap(_0x3c8003,_0x3fa30d);return _0x45585d[_0x410fea(0x389)]=0xff,_0x45585d[_0x410fea(0x37b)](0x32,0x32,0x32,_0x410fea(0x43d)),_0x45585d[_0x410fea(0x28a)]=![],this[_0x410fea(0x2ba)]=_0x45585d,this[_0x410fea(0x2ba)];},SoundManager['playFootsteps']=function(_0xe3d624){const _0x44ef04=_0x327db2,_0x21c563=VisuMZ['MovementEffects']['Settings'][_0x44ef04(0x265)],_0x1d08d0={'name':_0x21c563[_0x44ef04(0x230)]??_0x44ef04(0x2bf),'volume':_0x21c563[_0x44ef04(0x14c)]??0xa,'pitch':_0x21c563[_0x44ef04(0x32a)]??0x78,'pan':_0x21c563['pan']??0x0};$gameMap[_0x44ef04(0x249)](_0x1d08d0,_0xe3d624);if(_0x1d08d0==='')return;VisuMZ[_0x44ef04(0x300)][_0x44ef04(0x149)](_0x1d08d0,_0xe3d624),AudioManager[_0x44ef04(0x1d1)](_0x1d08d0);},VisuMZ['MovementEffects'][_0x327db2(0x149)]=function(_0x4b2d16,_0x193ad4){const _0x189f0a=_0x327db2;if(!_0x4b2d16)return;if(!_0x193ad4)return;if(_0x193ad4[_0x189f0a(0x33f)]===Game_Event){const _0x39098c=VisuMZ[_0x189f0a(0x300)]['Settings'][_0x189f0a(0x265)],_0x59ae98=$gamePlayer[_0x189f0a(0x19f)](_0x193ad4['x']),_0x3fb671=$gamePlayer[_0x189f0a(0x363)](_0x193ad4['y']),_0x307925=Math[_0x189f0a(0x333)](_0x59ae98)+Math['abs'](_0x3fb671);_0x307925>0x0&&(_0x4b2d16[_0x189f0a(0x14c)]+=_0x307925*_0x39098c[_0x189f0a(0x428)],_0x4b2d16[_0x189f0a(0x32a)]+=_0x307925*_0x39098c[_0x189f0a(0x2e4)]);if(_0x59ae98!==0x0){if('SCwVW'!==_0x189f0a(0x3c7))_0x4b2d16['pan']-=_0x59ae98*_0x39098c['distancePanModifier'];else return![];}}const _0x3a0c11=_0x193ad4[_0x189f0a(0x37c)]();if(_0x3a0c11){if('UHYgY'!==_0x189f0a(0x25d)){if(this[_0x189f0a(0x276)]())return;this['_smartJumpMode']=![];if(this[_0x189f0a(0x35a)]()){let _0x1f038f=_0x2c81f5[_0x189f0a(0x43c)](_0x322945[_0x189f0a(0x1ab)](this[_0x189f0a(0x439)]/0x2),0x1);while(_0x1f038f--)this[_0x189f0a(0x19e)]();}if(this[_0x189f0a(0x238)]())this[_0x189f0a(0x33d)]();_0x610990(this[_0x189f0a(0x25a)][_0x189f0a(0x164)](this,[0x1,0x2]),0x32);}else _0x4b2d16[_0x189f0a(0x14c)]*=_0x3a0c11['volumeRate']??0x1,_0x4b2d16[_0x189f0a(0x32a)]*=_0x3a0c11[_0x189f0a(0x3d7)]??0x1;}_0x4b2d16[_0x189f0a(0x14c)]=Math[_0x189f0a(0x43c)](0x0,_0x4b2d16[_0x189f0a(0x14c)]),_0x4b2d16[_0x189f0a(0x32a)]=Math[_0x189f0a(0x43c)](0x0,_0x4b2d16[_0x189f0a(0x32a)]),_0x4b2d16[_0x189f0a(0x3ad)]=_0x4b2d16['pan']['clamp'](-0x64,0x64);},TextManager['parseDirectionText']=function(_0x2e853a){const _0x18034d=_0x327db2;_0x2e853a=_0x2e853a['toLowerCase']()['trim']();switch(_0x2e853a){case _0x18034d(0x43e):return 0x2;case _0x18034d(0x3d8):return 0x4;case _0x18034d(0x34d):return 0x6;case'up':return 0x8;case _0x18034d(0x269):return 0x1;case _0x18034d(0x1ac):return 0x3;case _0x18034d(0x311):return 0x7;case'upper\x20right':return 0x9;}return Number(_0x2e853a)||0x0;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x325)]=BattleManager['startBattle'],BattleManager[_0x327db2(0x3be)]=function(){const _0x5ca411=_0x327db2;VisuMZ['MovementEffects'][_0x5ca411(0x325)]['call'](this),$gamePlayer&&$gamePlayer[_0x5ca411(0x34c)]();},VisuMZ[_0x327db2(0x300)][_0x327db2(0x1bd)]=Game_System[_0x327db2(0x22e)][_0x327db2(0x241)],Game_System[_0x327db2(0x22e)][_0x327db2(0x241)]=function(){const _0x11de31=_0x327db2;VisuMZ[_0x11de31(0x300)][_0x11de31(0x1bd)]['call'](this),this[_0x11de31(0x38c)](),this[_0x11de31(0x198)](),this[_0x11de31(0x3b1)](),this[_0x11de31(0x45e)](),this[_0x11de31(0x3b7)]();},Game_System['prototype'][_0x327db2(0x38c)]=function(){const _0x14fcf3=_0x327db2,_0x30e20d=VisuMZ[_0x14fcf3(0x300)]['Settings'][_0x14fcf3(0x2cc)];this[_0x14fcf3(0x345)]={'enabled':_0x30e20d[_0x14fcf3(0x3a7)],'horzWalk':_0x30e20d[_0x14fcf3(0x370)][_0x14fcf3(0x397)](0x1,0x30),'vertWalk':_0x30e20d[_0x14fcf3(0x2c5)][_0x14fcf3(0x397)](0x1,0x30),'horzDash':_0x30e20d[_0x14fcf3(0x228)][_0x14fcf3(0x397)](0x1,0x30),'vertDash':_0x30e20d[_0x14fcf3(0x42d)][_0x14fcf3(0x397)](0x1,0x30)};},Game_System[_0x327db2(0x22e)]['isSmoothCameraEnabled']=function(){const _0x5298bd=_0x327db2;if(this[_0x5298bd(0x345)]===undefined)this['initMovementEffectsSmoothCamera']();return this[_0x5298bd(0x345)][_0x5298bd(0x321)];},Game_System[_0x327db2(0x22e)][_0x327db2(0x287)]=function(_0x253ff0){const _0x1d2074=_0x327db2;if(this[_0x1d2074(0x345)]===undefined)this[_0x1d2074(0x38c)]();this[_0x1d2074(0x345)][_0x1d2074(0x321)]=_0x253ff0;},Game_System['prototype'][_0x327db2(0x423)]=function(_0x3da66c,_0x133f02){const _0x2943b6=_0x327db2;if(this[_0x2943b6(0x345)]===undefined)this[_0x2943b6(0x38c)]();const _0x32f6e4=(_0x3da66c?_0x2943b6(0x2ce):_0x2943b6(0x2df))+(_0x133f02?_0x2943b6(0x2b7):'Walk');return this[_0x2943b6(0x345)][_0x32f6e4]['clamp'](0x1,0x30);},Game_System[_0x327db2(0x22e)][_0x327db2(0x251)]=function(_0x352f56,_0x298d47,_0x518d52){const _0x31f791=_0x327db2;if(this[_0x31f791(0x345)]===undefined)this[_0x31f791(0x38c)]();const _0x56d181=(_0x298d47?'vert':_0x31f791(0x2df))+(_0x518d52?_0x31f791(0x2b7):_0x31f791(0x1d3));this['_smoothCamera'][_0x56d181]=_0x352f56[_0x31f791(0x397)](0x1,0x30);},Game_System[_0x327db2(0x22e)][_0x327db2(0x198)]=function(){const _0x2a5250=_0x327db2,_0x1d6f5f=VisuMZ[_0x2a5250(0x300)][_0x2a5250(0x1b2)][_0x2a5250(0x3c6)];this[_0x2a5250(0x33a)]={'enabled':_0x1d6f5f['Enabled'],'filename':_0x1d6f5f['filename']||'','color':_0x1d6f5f[_0x2a5250(0x313)]||_0x2a5250(0x18b),'radius':_0x1d6f5f[_0x2a5250(0x319)]||0x18,'fullness':_0x1d6f5f[_0x2a5250(0x373)]||0x0,'wholeDuration':_0x1d6f5f[_0x2a5250(0x427)]||0x14,'startOpacity':_0x1d6f5f[_0x2a5250(0x3b2)]||0xc0,'startScale':_0x1d6f5f[_0x2a5250(0x27e)]||0.2};},Game_System[_0x327db2(0x22e)][_0x327db2(0x3ab)]=function(){const _0x51be48=_0x327db2;if(this[_0x51be48(0x33a)]===undefined)this[_0x51be48(0x198)]();return this[_0x51be48(0x33a)];},Game_System['prototype'][_0x327db2(0x3c3)]=function(_0x1a0548){const _0x59f10c=_0x327db2;if(this['_dustCloud']===undefined)this['initMovementEffectsDustCloud']();this['_dustCloud']=JsonEx[_0x59f10c(0x429)](_0x1a0548);},Game_System[_0x327db2(0x22e)]['canShowDustCloud']=function(){return this['dustCloudData']()['enabled'];},Game_System[_0x327db2(0x22e)][_0x327db2(0x3b1)]=function(){const _0x114b06=_0x327db2;this[_0x114b06(0x392)]=VisuMZ[_0x114b06(0x300)][_0x114b06(0x1b2)]['Footsteps'][_0x114b06(0x3a7)];},Game_System['prototype'][_0x327db2(0x238)]=function(){const _0x91ee71=_0x327db2;if(this[_0x91ee71(0x392)]===undefined)this[_0x91ee71(0x3b1)]();return this[_0x91ee71(0x392)];},Game_System[_0x327db2(0x22e)][_0x327db2(0x18a)]=function(_0x17f62e){const _0x520fb3=_0x327db2;if(this[_0x520fb3(0x392)]===undefined)this[_0x520fb3(0x3b1)]();this[_0x520fb3(0x392)]=_0x17f62e;},Game_System[_0x327db2(0x22e)][_0x327db2(0x45e)]=function(){const _0x4234fe=_0x327db2;this['_footprintMarksEnabled']=VisuMZ['MovementEffects'][_0x4234fe(0x1b2)]['Footprints'][_0x4234fe(0x3a7)];},Game_System[_0x327db2(0x22e)][_0x327db2(0x181)]=function(){const _0x26acf2=_0x327db2;if(this[_0x26acf2(0x378)]===undefined)this[_0x26acf2(0x45e)]();return this[_0x26acf2(0x378)];},Game_System[_0x327db2(0x22e)]['setFootprintsEnabled']=function(_0x5c3e0c){const _0x48bfc9=_0x327db2;if(this[_0x48bfc9(0x378)]===undefined)this[_0x48bfc9(0x45e)]();this[_0x48bfc9(0x378)]=_0x5c3e0c;},Game_System[_0x327db2(0x22e)][_0x327db2(0x3b7)]=function(){const _0x41e16b=_0x327db2;this[_0x41e16b(0x369)]={'dir1':0x0,'dir2':0x0,'dir3':0x0,'dir4':0x0,'dir6':0x0,'dir7':0x0,'dir8':0x0,'dir9':0x0};},Game_System['prototype'][_0x327db2(0x45a)]=function(_0xf71bc3){const _0x12fd69=_0x327db2;if(this['_dirMoveSpeedMod']===undefined)this['initMovementEffectsDirMoveSpeedMod']();const _0x341c8a=_0x12fd69(0x248)[_0x12fd69(0x3c4)](_0xf71bc3);return this[_0x12fd69(0x369)][_0x341c8a]||0x0;},Game_System['prototype']['setDirMoveSpeedMod']=function(_0x176c1e,_0x1f2ce0){const _0x3f06ff=_0x327db2;if(this[_0x3f06ff(0x369)]===undefined)this[_0x3f06ff(0x3b7)]();const _0x3472c9=_0x3f06ff(0x248)[_0x3f06ff(0x3c4)](_0x176c1e);this['_dirMoveSpeedMod'][_0x3472c9]=_0x1f2ce0||0x0;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x160)]=Game_Picture[_0x327db2(0x22e)][_0x327db2(0x1a1)],Game_Picture['prototype'][_0x327db2(0x1a1)]=function(){return![];},Game_Picture[_0x327db2(0x22e)][_0x327db2(0x18c)]=function(){const _0x179971=_0x327db2;return VisuMZ[_0x179971(0x300)][_0x179971(0x160)][_0x179971(0x35f)](this);},VisuMZ[_0x327db2(0x300)]['Game_Picture_x']=Game_Picture['prototype']['x'],Game_Picture[_0x327db2(0x22e)]['x']=function(){const _0x1b1f21=_0x327db2;let _0x211841=VisuMZ[_0x1b1f21(0x300)]['Game_Picture_x']['call'](this);return this['isTrueMapScrollLinked']()&&(_0x211841*=$gameScreen[_0x1b1f21(0x38e)]()),_0x211841;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x2b6)]=Game_Picture[_0x327db2(0x22e)]['y'],Game_Picture[_0x327db2(0x22e)]['y']=function(){const _0x2eec9d=_0x327db2;let _0x47aa81=VisuMZ[_0x2eec9d(0x300)]['Game_Picture_y'][_0x2eec9d(0x35f)](this);return this['isTrueMapScrollLinked']()&&(_0x47aa81*=$gameScreen['zoomScale']()),_0x47aa81;},VisuMZ['MovementEffects']['Game_Picture_scaleX']=Game_Picture['prototype'][_0x327db2(0x220)],Game_Picture['prototype']['scaleX']=function(){const _0x111196=_0x327db2;let _0x2b4dda=VisuMZ['MovementEffects']['Game_Picture_scaleX'][_0x111196(0x35f)](this);if(this[_0x111196(0x18c)]()){if(_0x111196(0x234)!==_0x111196(0x234))return this[_0x111196(0x2aa)]===_0x3606c2&&this[_0x111196(0x255)](),this[_0x111196(0x2aa)];else _0x2b4dda*=$gameScreen['zoomScale']();}return _0x2b4dda;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x264)]=Game_Picture['prototype']['scaleY'],Game_Picture[_0x327db2(0x22e)][_0x327db2(0x226)]=function(){const _0x14a404=_0x327db2;let _0x4b42c5=VisuMZ['MovementEffects']['Game_Picture_scaleY'][_0x14a404(0x35f)](this);return this['isTrueMapScrollLinked']()&&(_0x14a404(0x271)!==_0x14a404(0x271)?this[_0x14a404(0x279)]():_0x4b42c5*=$gameScreen['zoomScale']()),_0x4b42c5;},Game_Actor[_0x327db2(0x22e)]['footstepsData']=function(){const _0xde59c0=_0x327db2;if(this['_footsteps']===undefined)this[_0xde59c0(0x380)]();return this[_0xde59c0(0x2aa)];},Game_Actor[_0x327db2(0x22e)][_0x327db2(0x380)]=function(){const _0x4872d9=_0x327db2;this[_0x4872d9(0x391)]();const _0x20fae7=this[_0x4872d9(0x1a7)]()[_0x4872d9(0x341)]||'';Game_Event[_0x4872d9(0x22e)][_0x4872d9(0x3b6)][_0x4872d9(0x35f)](this,_0x20fae7);},Game_Actor['prototype']['initMovementEffectsVariables']=function(){const _0x54c340=_0x327db2;{const _0xbda687=VisuMZ[_0x54c340(0x300)]['Settings']['Footsteps'];this[_0x54c340(0x2aa)]={'enabled':_0xbda687['actorEnabled'],'volumeRate':_0xbda687[_0x54c340(0x16a)],'pitchRate':_0xbda687['actorPitchModifier'],'soundFrames':_0xbda687[_0x54c340(0x41a)][_0x54c340(0x27b)]()};}{const _0x5dd635=VisuMZ[_0x54c340(0x300)][_0x54c340(0x1b2)][_0x54c340(0x288)];this[_0x54c340(0x3b3)]={'enabled':!![],'dir1':JSON[_0x54c340(0x223)](JSON[_0x54c340(0x2b4)](_0x5dd635[_0x54c340(0x180)])),'dir2':JSON['parse'](JSON['stringify'](_0x5dd635[_0x54c340(0x2c6)])),'dir3':JSON[_0x54c340(0x223)](JSON['stringify'](_0x5dd635[_0x54c340(0x399)])),'dir4':JSON['parse'](JSON[_0x54c340(0x2b4)](_0x5dd635[_0x54c340(0x199)])),'dir6':JSON['parse'](JSON[_0x54c340(0x2b4)](_0x5dd635[_0x54c340(0x1c1)])),'dir7':JSON['parse'](JSON[_0x54c340(0x2b4)](_0x5dd635[_0x54c340(0x1c3)])),'dir8':JSON['parse'](JSON[_0x54c340(0x2b4)](_0x5dd635['dir8'])),'dir9':JSON['parse'](JSON[_0x54c340(0x2b4)](_0x5dd635[_0x54c340(0x381)]))};}},Game_Actor[_0x327db2(0x22e)][_0x327db2(0x285)]=function(){const _0x4ff90b=_0x327db2;if(this['_footprintsData']===undefined)this[_0x4ff90b(0x380)]();return this[_0x4ff90b(0x3b3)];},VisuMZ[_0x327db2(0x300)]['Game_Map_setup']=Game_Map['prototype'][_0x327db2(0x1e4)],Game_Map[_0x327db2(0x22e)][_0x327db2(0x1e4)]=function(_0x23315c){const _0x4c5225=_0x327db2;VisuMZ[_0x4c5225(0x300)][_0x4c5225(0x31b)][_0x4c5225(0x35f)](this,_0x23315c),this['setupRegionTerrainTagFootstepSounds'](),this[_0x4c5225(0x383)](),this[_0x4c5225(0x41c)](),this[_0x4c5225(0x19d)]();},VisuMZ[_0x327db2(0x300)][_0x327db2(0x435)]=Game_Map[_0x327db2(0x22e)][_0x327db2(0x229)],Game_Map['prototype'][_0x327db2(0x229)]=function(_0x3813f5){const _0x19b755=_0x327db2;VisuMZ['MovementEffects']['Game_Map_changeTileset'][_0x19b755(0x35f)](this,_0x3813f5),this[_0x19b755(0x1f8)](),this[_0x19b755(0x383)](),this[_0x19b755(0x41c)](),this[_0x19b755(0x19d)]();},Game_Map[_0x327db2(0x22e)][_0x327db2(0x1c9)]=function(_0x16c6bc,_0x21a501){const _0x16a1a0=_0x327db2,_0x2f72a9=[0x50,0x51,0x52,0x53,0x54,0x55,0x56,0x57];_0x2f72a9[_0x16a1a0(0x322)](0x60,0x61,0x62,0x63,0x64,0x65,0x66,0x67),_0x2f72a9[_0x16a1a0(0x322)](0x70,0x71,0x72,0x73,0x74,0x75,0x76,0x77);for(let _0xef221a=0x0;_0xef221a<0x5;_0xef221a++){if(_0x16a1a0(0x1cc)!==_0x16a1a0(0x1cc)){let _0x196e65=_0x584d09[_0x16a1a0(0x300)][_0x16a1a0(0x21e)]['call'](this);if(this[_0x16a1a0(0x33e)]()){const _0x5499fb=_0x3e6a79[_0x16a1a0(0x300)][_0x16a1a0(0x1b2)]['Footsteps'][_0x16a1a0(0x286)]??1.5;_0x196e65=_0x136b52['ceil'](_0x196e65/_0x3790d1[_0x16a1a0(0x43c)](_0x5499fb,0x1));if(this[_0x16a1a0(0x433)]()){const _0x1c6ae2=_0x302ad4[_0x16a1a0(0x300)][_0x16a1a0(0x1b2)][_0x16a1a0(0x265)]['FrameDashModifier']??1.5;_0x196e65=_0x3489b9[_0x16a1a0(0x1ab)](_0x196e65/_0x56d844['max'](_0x1c6ae2,0x1));}}return _0x196e65;}else{const _0x484c67=$gameMap[_0x16a1a0(0x273)](_0x16c6bc,_0x21a501,_0xef221a);if(_0x2f72a9[_0x16a1a0(0x26f)](_0x484c67))return!![];}}return![];},Game_Map['prototype']['isUsingSmoothCamera']=function(){const _0x29d883=_0x327db2;if(!ConfigManager[_0x29d883(0x21c)])return![];if($dataMap){const _0x7ae65a=VisuMZ[_0x29d883(0x300)][_0x29d883(0x254)],_0x5d1b09=$dataMap[_0x29d883(0x341)]||'';if(_0x5d1b09[_0x29d883(0x2a8)](_0x7ae65a['ForceSmooth'])){if(_0x29d883(0x20b)!=='gohOL')return!![];else{const _0xcb1b30=this[_0x29d883(0x169)]['x'],_0x1e3459=this[_0x29d883(0x169)]['y'];this[_0x29d883(0x32d)]=_0x17dba6[_0x29d883(0x367)](_0xcb1b30,_0x1e3459);}}else{if(_0x5d1b09['match'](_0x7ae65a[_0x29d883(0x210)]))return![];}}return $gameSystem['isSmoothCameraEnabled']();},VisuMZ['MovementEffects'][_0x327db2(0x33c)]=Game_Map['prototype'][_0x327db2(0x1ee)],Game_Map[_0x327db2(0x22e)][_0x327db2(0x1ee)]=function(){const _0x3cb642=_0x327db2;let _0xfd7ec0=VisuMZ['MovementEffects'][_0x3cb642(0x33c)][_0x3cb642(0x35f)](this);if(this[_0x3cb642(0x1fe)])_0xfd7ec0=Math[_0x3cb642(0x165)](_0xfd7ec0);return _0xfd7ec0;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x15b)]=Game_Map[_0x327db2(0x22e)]['parallaxOy'],Game_Map[_0x327db2(0x22e)][_0x327db2(0x38a)]=function(){const _0x2d1864=_0x327db2;let _0xf28cd=VisuMZ[_0x2d1864(0x300)][_0x2d1864(0x15b)][_0x2d1864(0x35f)](this);if(this[_0x2d1864(0x1fe)])_0xf28cd=Math[_0x2d1864(0x165)](_0xf28cd);return _0xf28cd;},Game_Map[_0x327db2(0x22e)][_0x327db2(0x1a4)]=function(){const _0x522b17=_0x327db2;if(!ConfigManager[_0x522b17(0x2b1)])return![];if($dataMap){const _0x3dd599=VisuMZ[_0x522b17(0x300)][_0x522b17(0x254)],_0x24dc59=$dataMap[_0x522b17(0x341)]||'';if(_0x24dc59[_0x522b17(0x2a8)](_0x3dd599['ForceDustCloud'])){if(_0x522b17(0x260)==='JHdCc')return!![];else{const _0x100046=_0x5dd483-_0x56653e,_0x16f2a3=_0x2eec65*_0x32e4f9,_0x55ec19=_0x100046/(_0x16f2a3||0.01);_0x4435aa[_0x522b17(0x291)](_0x55ec19);}}else{if(_0x24dc59[_0x522b17(0x2a8)](_0x3dd599[_0x522b17(0x167)])){if(_0x522b17(0x2f9)!==_0x522b17(0x3f1))return![];else{if(!_0x47de44['isSmartJumpEnabled']())return![];if(this[_0x522b17(0x1db)])return![];if(this[_0x522b17(0x452)]())return![];if(this[_0x522b17(0x464)]())return![];if(this[_0x522b17(0x395)]())return![];if(this[_0x522b17(0x23e)]())return![];return!![];}}}}return $gameSystem['canShowDustCloud']();},Game_Map[_0x327db2(0x22e)][_0x327db2(0x238)]=function(){const _0x16f53b=_0x327db2;if(!ConfigManager['footsteps'])return![];if($dataMap){const _0x1ba253=VisuMZ[_0x16f53b(0x300)][_0x16f53b(0x254)],_0x59d9fd=$dataMap[_0x16f53b(0x341)]||'';if(_0x59d9fd[_0x16f53b(0x2a8)](_0x1ba253['ForceFootsteps']))return!![];else{if(_0x59d9fd[_0x16f53b(0x2a8)](_0x1ba253[_0x16f53b(0x375)]))return![];}}return $gameSystem[_0x16f53b(0x238)]();},Game_Map[_0x327db2(0x22e)][_0x327db2(0x1f8)]=function(){const _0x2485f6=_0x327db2;this['initRegionTerrainTagFootstepSounds'](),this['parseRegionBasedFootstepSounds'](),this[_0x2485f6(0x155)]();},Game_Map['prototype'][_0x327db2(0x201)]=function(){const _0x3e5796=_0x327db2;this['_regionFootstepSounds']={},this[_0x3e5796(0x431)]={};},Game_Map['prototype'][_0x327db2(0x331)]=function(){const _0xa42402=_0x327db2;if(!$dataMap)return;const _0xa53176=VisuMZ[_0xa42402(0x300)]['Settings'][_0xa42402(0x265)],_0x30d2cc=VisuMZ[_0xa42402(0x300)][_0xa42402(0x254)],_0x572cf5=$dataMap[_0xa42402(0x341)]||'',_0x13ce11=_0x572cf5['match'](_0x30d2cc[_0xa42402(0x1ff)]);if(_0x13ce11)for(const _0x4b4b7b of _0x13ce11){_0x4b4b7b[_0xa42402(0x2a8)](_0x30d2cc['RegionFootstepSfx']);const _0x3d2939=Number(RegExp['$1'])[_0xa42402(0x397)](0x0,0xff),_0x337045=String(RegExp['$2'])['split'](',')[_0xa42402(0x386)](_0x32a729=>_0x32a729[_0xa42402(0x3f8)]());this[_0xa42402(0x3bc)][_0x3d2939]={'name':_0x337045[0x0]||'','volume':Number(_0x337045[0x1]??_0xa53176['volume']),'pitch':Number(_0x337045[0x2]??_0xa53176['pitch']),'pan':Number(_0x337045[0x3]??_0xa53176['pan'])};}const _0x4be612=_0x572cf5[_0xa42402(0x2a8)](_0x30d2cc[_0xa42402(0x225)]);if(_0x4be612){if(_0xa42402(0x202)!==_0xa42402(0x17c))for(const _0x2a6bb5 of _0x4be612){if('WLeDz'!=='PSTPc'){_0x2a6bb5['match'](_0x30d2cc['NoRegionFootstepSfx']);const _0x33d6d1=Number(RegExp['$1'])[_0xa42402(0x397)](0x0,0xff);this['_regionFootstepSounds'][_0x33d6d1]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}else _0x443a17['createMotionTrailSprite']();}else _0x3867c6[_0xa42402(0x37d)](_0x4936e0,_0x42d85d);}},Game_Map['prototype'][_0x327db2(0x155)]=function(){const _0x1d9584=_0x327db2;if(!this[_0x1d9584(0x27a)]())return;const _0x5c1d13=VisuMZ['MovementEffects'][_0x1d9584(0x1b2)][_0x1d9584(0x265)],_0x5e585a=VisuMZ[_0x1d9584(0x300)][_0x1d9584(0x254)],_0x33c3aa=this[_0x1d9584(0x27a)]()['note']||'',_0x3c8d1f=_0x33c3aa[_0x1d9584(0x2a8)](_0x5e585a[_0x1d9584(0x1e8)]);if(_0x3c8d1f)for(const _0x1d6f8c of _0x3c8d1f){if(_0x1d9584(0x28c)===_0x1d9584(0x353)){_0x214e41=_0x16280a['substring'](0x1)[_0x1d9584(0x376)]('');_0x488ae9[_0x1d9584(0x3d3)]===0x3&&(_0x581f0b=[_0x103464[0x0],_0x3db466[0x0],_0x25756f[0x1],_0x4bd155[0x1],_0x142f34[0x2],_0x276e85[0x2]]);while(_0x564841[_0x1d9584(0x3d3)]>0x6)_0x4ece85[_0x1d9584(0x191)]();return _0x5b9ace='0x'+_0x1381d6[_0x1d9584(0x396)](''),'rgba('+[(_0x4e4100>>0x10&0xff)[_0x1d9584(0x397)](0x0,0xff),(_0x3fa5d1>>0x8&0xff)[_0x1d9584(0x397)](0x0,0xff),(_0x1b9281&0xff)['clamp'](0x0,0xff)][_0x1d9584(0x396)](',')+','+_0x16cf66[_0x1d9584(0x397)](0x0,0x1)+')';}else{_0x1d6f8c[_0x1d9584(0x2a8)](_0x5e585a[_0x1d9584(0x1e8)]);const _0x141b57=Number(RegExp['$1'])[_0x1d9584(0x397)](0x0,0xff),_0xdc6bdb=String(RegExp['$2'])['split'](',')[_0x1d9584(0x386)](_0x2bfa08=>_0x2bfa08['trim']());this[_0x1d9584(0x431)][_0x141b57]={'name':_0xdc6bdb[0x0]||'','volume':Number(_0xdc6bdb[0x1]??_0x5c1d13[_0x1d9584(0x14c)]),'pitch':Number(_0xdc6bdb[0x2]??_0x5c1d13[_0x1d9584(0x32a)]),'pan':Number(_0xdc6bdb[0x3]??_0x5c1d13[_0x1d9584(0x3ad)])};}}const _0x6ad8e=_0x33c3aa['match'](_0x5e585a[_0x1d9584(0x344)]);if(_0x6ad8e)for(const _0x1d34f4 of _0x6ad8e){_0x1d34f4[_0x1d9584(0x2a8)](_0x5e585a[_0x1d9584(0x344)]);const _0x24338d=Number(RegExp['$1'])[_0x1d9584(0x397)](0x0,0x7);this['_terrainTagFootstepSounds'][_0x24338d]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}},Game_Map[_0x327db2(0x22e)]['applyFootstepSoundTileChanges']=function(_0x46b3d,_0x1a5aff){const _0x2e5ab9=_0x327db2;if(!_0x46b3d)return;if(!_0x1a5aff)return;if(this['_regionFootstepSounds']===undefined||this['_terrainTagFootstepSounds']===undefined){if(_0x2e5ab9(0x2de)!==_0x2e5ab9(0x171))this['setupRegionTerrainTagFootstepSounds']();else return this[_0x2e5ab9(0x2a3)]['opacity'][_0x2e5ab9(0x3db)][_0x346f73];}const _0x3c91d6=_0x1a5aff['x'],_0x188aaa=_0x1a5aff['y'],_0x2d782c=this[_0x2e5ab9(0x455)](_0x3c91d6,_0x188aaa),_0x508567=this['terrainTag'](_0x3c91d6,_0x188aaa),_0x4a2496=['name','volume','pitch',_0x2e5ab9(0x3ad)];if(this['_terrainTagFootstepSounds'][_0x508567]){if('DIoji'!==_0x2e5ab9(0x259)){const _0x2f6a5b=this[_0x2e5ab9(0x431)][_0x508567];for(const _0x360e38 of _0x4a2496){if(_0x2e5ab9(0x270)!==_0x2e5ab9(0x270))return!![];else _0x46b3d[_0x360e38]=_0x2f6a5b[_0x360e38];}}else for(const _0x35e368 of _0x47068c){_0x35e368[_0x2e5ab9(0x2a8)](_0x245e85[_0xfeb4d4]);const _0x5aed33=_0x26b192['$1'],_0xb9c203=_0x4d2802['$2'],_0x56d210=_0x3be369['$3'],_0x1fb149=_0x2e5ab9(0x248)[_0x2e5ab9(0x3c4)](_0x4a0ebd['parseDirectionText'](_0x5aed33)),_0x362625='pattern%1'[_0x2e5ab9(0x3c4)](_0x50211b(_0xb9c203)||0x0),_0x4b43c0=_0x56d210['split'](',')[_0x2e5ab9(0x386)](_0x273339=>_0x94c6a3(_0x273339)||0x0);this[_0x2e5ab9(0x3b3)][_0x1fb149][_0x362625][_0x2e5ab9(0x34b)]=_0x4b43c0[0x0]||0x0,this[_0x2e5ab9(0x3b3)][_0x1fb149][_0x362625][_0x2e5ab9(0x194)]=_0x4b43c0[0x1]||0x0;}}if(this['_regionFootstepSounds'][_0x2d782c]){const _0x54575a=this[_0x2e5ab9(0x3bc)][_0x2d782c];for(const _0x3feea5 of _0x4a2496){if(_0x2e5ab9(0x450)!==_0x2e5ab9(0x450)){const _0x176516=_0x1d76ee-_0x6ab36f,_0x5ec501=_0x5942df*_0x1aa719,_0x495922=_0x176516/(_0x5ec501||0.01);_0x29726b[_0x2e5ab9(0x364)](_0x495922);}else _0x46b3d[_0x3feea5]=_0x54575a[_0x3feea5];}}},Game_Map[_0x327db2(0x22e)][_0x327db2(0x181)]=function(_0x1a9162,_0x2fc411){const _0x2b97a=_0x327db2;if(!ConfigManager['footprints'])return![];if(!$gameSystem['canMakeFootprints']())return![];if(this[_0x2b97a(0x2a3)]===undefined)this[_0x2b97a(0x383)]();const _0x1d7f50=this[_0x2b97a(0x455)](_0x1a9162,_0x2fc411),_0x23b344=this[_0x2b97a(0x410)](_0x1a9162,_0x2fc411);if(this['_footprints']['forbidden']['regions']['includes'](_0x1d7f50))return![];if(this[_0x2b97a(0x2a3)][_0x2b97a(0x245)][_0x2b97a(0x1f2)][_0x2b97a(0x26f)](_0x23b344))return![];if(this[_0x2b97a(0x2a3)][_0x2b97a(0x30c)][_0x2b97a(0x3db)]['includes'](_0x1d7f50))return!![];if(this[_0x2b97a(0x2a3)][_0x2b97a(0x30c)][_0x2b97a(0x1f2)][_0x2b97a(0x26f)](_0x23b344))return!![];return![];},Game_Map[_0x327db2(0x22e)]['setupRegionTerrainTagFootprints']=function(){const _0x4e0372=_0x327db2;this[_0x4e0372(0x442)](),this[_0x4e0372(0x3ea)](),this['parseTerrainTagBasedFootprints']();},Game_Map['prototype']['initRegionTerrainTagFootprints']=function(){const _0x4d6591=_0x327db2,_0x15dfa8=VisuMZ[_0x4d6591(0x300)][_0x4d6591(0x1b2)][_0x4d6591(0x288)];this[_0x4d6591(0x2a3)]={'allowed':{'regions':_0x15dfa8[_0x4d6591(0x37f)][_0x4d6591(0x27b)](),'terrainTags':_0x15dfa8[_0x4d6591(0x1a9)][_0x4d6591(0x27b)]()},'forbidden':{'regions':[],'terrainTags':[]},'opacity':{'regions':{},'terrainTags':{}},'duration':{'regions':{},'terrainTags':{}}};},Game_Map[_0x327db2(0x22e)][_0x327db2(0x3ea)]=function(){const _0xe7f63c=_0x327db2;if(!$dataMap)return;if(this['_footprints']===undefined)this[_0xe7f63c(0x383)]();const _0x2d961d=VisuMZ['MovementEffects'][_0xe7f63c(0x254)],_0x475fa2=$dataMap[_0xe7f63c(0x341)]||'';if(_0x475fa2[_0xe7f63c(0x2a8)](_0x2d961d[_0xe7f63c(0x2a2)])){if(_0xe7f63c(0x31f)===_0xe7f63c(0x31f))this[_0xe7f63c(0x2a3)][_0xe7f63c(0x30c)]['regions']=RegExp['$1'][_0xe7f63c(0x376)](',')['map'](_0x7cb7bd=>(Number(_0x7cb7bd)||0x0)[_0xe7f63c(0x397)](0x0,0xff));else{if(this['_smoothCamera']===_0x5e26c6)this[_0xe7f63c(0x38c)]();this['_smoothCamera']['enabled']=_0x5a6b69;}}if(_0x475fa2[_0xe7f63c(0x2a8)](_0x2d961d[_0xe7f63c(0x40f)])){if(_0xe7f63c(0x336)!=='HMNjO')this[_0xe7f63c(0x2a3)][_0xe7f63c(0x245)][_0xe7f63c(0x3db)]=RegExp['$1'][_0xe7f63c(0x376)](',')[_0xe7f63c(0x386)](_0x56ccbc=>(Number(_0x56ccbc)||0x0)[_0xe7f63c(0x397)](0x0,0xff));else{const _0x1aac0f=this[_0xe7f63c(0x455)](_0x240a34,_0x51c029),_0x138603=this[_0xe7f63c(0x410)](_0x2e7e71,_0x174403);if(this[_0xe7f63c(0x28e)]===_0x2e561b)this['setupRegionTerrainTagSmartBlink']();if(this[_0xe7f63c(0x28e)][_0xe7f63c(0x1cf)][_0xe7f63c(0x26f)](_0x1aac0f))return!![];if(this[_0xe7f63c(0x28e)]['NonPassableTerrainTags'][_0xe7f63c(0x26f)](_0x138603))return!![];return![];}}const _0x5deb59=_0x475fa2[_0xe7f63c(0x2a8)](_0x2d961d[_0xe7f63c(0x2ac)]);if(_0x5deb59)for(const _0x18cea6 of _0x5deb59){_0x18cea6[_0xe7f63c(0x2a8)](_0x2d961d[_0xe7f63c(0x2ac)]);const _0x11b825=Number(RegExp['$1'])[_0xe7f63c(0x397)](0x0,0xff),_0x4c64c7=Number(RegExp['$2'])['clamp'](0x0,0xff);this[_0xe7f63c(0x2a3)][_0xe7f63c(0x217)][_0xe7f63c(0x3db)][_0x11b825]=_0x4c64c7;}const _0x9896b1=_0x475fa2['match'](_0x2d961d[_0xe7f63c(0x1b0)]);if(_0x9896b1){if(_0xe7f63c(0x2f1)!=='kYPNm')_0x1a4e2f=_0x4f6892[_0xe7f63c(0x43c)](_0x47dfdb,_0x28cf4e);else for(const _0x55b5a7 of _0x9896b1){_0x55b5a7[_0xe7f63c(0x2a8)](_0x2d961d['RegionFootprintDuration']);const _0x38b475=Number(RegExp['$1'])[_0xe7f63c(0x397)](0x0,0xff),_0x41d932=Math[_0xe7f63c(0x43c)](0x1,Number(RegExp['$2']));this[_0xe7f63c(0x2a3)][_0xe7f63c(0x2e2)][_0xe7f63c(0x3db)][_0x38b475]=_0x41d932;}}},Game_Map[_0x327db2(0x22e)][_0x327db2(0x17e)]=function(){const _0x32c69b=_0x327db2;if(!this[_0x32c69b(0x27a)]())return;if(this[_0x32c69b(0x2a3)]===undefined)this[_0x32c69b(0x383)]();const _0x564b9f=VisuMZ[_0x32c69b(0x300)][_0x32c69b(0x254)],_0xfd0b70=this[_0x32c69b(0x27a)]()[_0x32c69b(0x341)]||'';_0xfd0b70[_0x32c69b(0x2a8)](_0x564b9f['FootprintTerrainTags'])&&(this['_footprints'][_0x32c69b(0x30c)][_0x32c69b(0x1f2)]=RegExp['$1'][_0x32c69b(0x376)](',')[_0x32c69b(0x386)](_0x44f095=>(Number(_0x44f095)||0x0)[_0x32c69b(0x397)](0x0,0x7)));if(_0xfd0b70[_0x32c69b(0x2a8)](_0x564b9f[_0x32c69b(0x425)])){if(_0x32c69b(0x2cb)!=='YCBvf'){if(!this[_0x32c69b(0x277)]())return;if(!this[_0x32c69b(0x303)]())return;const _0x372ac9=this[_0x32c69b(0x169)][_0x32c69b(0x43a)](),_0x36d54f=_0x372ac9['delay']||0x1;_0x37b545['frameCount']%_0x36d54f===0x0&&this[_0x32c69b(0x44e)]();}else this[_0x32c69b(0x2a3)]['forbidden'][_0x32c69b(0x1f2)]=RegExp['$1'][_0x32c69b(0x376)](',')['map'](_0x23305b=>(Number(_0x23305b)||0x0)[_0x32c69b(0x397)](0x0,0x7));}const _0x262d55=_0xfd0b70[_0x32c69b(0x2a8)](_0x564b9f[_0x32c69b(0x352)]);if(_0x262d55)for(const _0x2beacc of _0x262d55){_0x2beacc['match'](_0x564b9f[_0x32c69b(0x352)]);const _0x1d4f07=Number(RegExp['$1'])[_0x32c69b(0x397)](0x0,0xff),_0x289773=Number(RegExp['$2'])[_0x32c69b(0x397)](0x0,0xff);this[_0x32c69b(0x2a3)][_0x32c69b(0x217)][_0x32c69b(0x1f2)][_0x1d4f07]=_0x289773;}const _0x32f57f=_0xfd0b70[_0x32c69b(0x2a8)](_0x564b9f[_0x32c69b(0x2fd)]);if(_0x32f57f)for(const _0x2d341e of _0x32f57f){_0x2d341e['match'](_0x564b9f['TerrainTagFootprintDuration']);const _0x198fc3=Number(RegExp['$1'])[_0x32c69b(0x397)](0x0,0xff),_0x1e57e8=Math[_0x32c69b(0x43c)](0x1,Number(RegExp['$2']));this['_footprints'][_0x32c69b(0x2e2)][_0x32c69b(0x1f2)][_0x198fc3]=_0x1e57e8;}},Game_Map[_0x327db2(0x22e)][_0x327db2(0x2cf)]=function(_0x5a64d8,_0x55349f){const _0x483040=_0x327db2;if(this[_0x483040(0x2a3)]===undefined)this[_0x483040(0x383)]();const _0x24dcea=VisuMZ[_0x483040(0x300)][_0x483040(0x1b2)][_0x483040(0x288)],_0x565cfe=this[_0x483040(0x455)](_0x5a64d8,_0x55349f),_0x5c541e=this[_0x483040(0x410)](_0x5a64d8,_0x55349f);if(this[_0x483040(0x2a3)][_0x483040(0x217)][_0x483040(0x3db)][_0x565cfe]!==undefined)return this[_0x483040(0x2a3)][_0x483040(0x217)][_0x483040(0x3db)][_0x565cfe];else{if(this['_footprints'][_0x483040(0x217)][_0x483040(0x1f2)][_0x5c541e]!==undefined)return this[_0x483040(0x2a3)][_0x483040(0x217)][_0x483040(0x1f2)][_0x5c541e];}return _0x24dcea[_0x483040(0x3b2)];},Game_Map[_0x327db2(0x22e)]['footprintDurationAtXy']=function(_0x44a67d,_0x2f541d){const _0x1a289c=_0x327db2;if(this[_0x1a289c(0x2a3)]===undefined)this['setupRegionTerrainTagFootprints']();const _0x34f9d5=VisuMZ[_0x1a289c(0x300)]['Settings']['Footprints'],_0x4f3db2=this[_0x1a289c(0x455)](_0x44a67d,_0x2f541d),_0x5093b2=this[_0x1a289c(0x410)](_0x44a67d,_0x2f541d);if(this[_0x1a289c(0x2a3)][_0x1a289c(0x2e2)][_0x1a289c(0x3db)][_0x4f3db2]!==undefined)return this[_0x1a289c(0x2a3)]['duration'][_0x1a289c(0x3db)][_0x4f3db2];else{if(this[_0x1a289c(0x2a3)][_0x1a289c(0x2e2)][_0x1a289c(0x1f2)][_0x5093b2]!==undefined)return this[_0x1a289c(0x2a3)]['duration'][_0x1a289c(0x1f2)][_0x5093b2];}return _0x34f9d5[_0x1a289c(0x427)];},Game_Map['prototype'][_0x327db2(0x41c)]=function(){const _0x3ba786=_0x327db2;this[_0x3ba786(0x14d)](),this['parseRegionBasedSmartRush'](),this[_0x3ba786(0x301)]();},Game_Map[_0x327db2(0x22e)][_0x327db2(0x14d)]=function(){const _0x493dfd=_0x327db2,_0x22269f=VisuMZ[_0x493dfd(0x300)]['Settings'][_0x493dfd(0x261)];this['_smartRush']={'enabled':!![],'NonCrashRegions':(_0x22269f['NonCrashRegions']||[])['clone'](),'NonCrashTerrainTags':(_0x22269f[_0x493dfd(0x154)]||[])['clone']()};},Game_Map[_0x327db2(0x22e)][_0x327db2(0x1d7)]=function(){const _0x199e9d=_0x327db2,_0x19215a=VisuMZ[_0x199e9d(0x300)][_0x199e9d(0x254)],_0x5b34fc=$dataMap[_0x199e9d(0x341)]||'';_0x5b34fc[_0x199e9d(0x2a8)](_0x19215a[_0x199e9d(0x463)])&&(this[_0x199e9d(0x2f5)][_0x199e9d(0x321)]=![]),_0x5b34fc['match'](_0x19215a[_0x199e9d(0x298)])&&(this['_smartRush']['NonCrashRegions']=RegExp['$1'][_0x199e9d(0x376)](',')[_0x199e9d(0x386)](_0x5dcb21=>(Number(_0x5dcb21)||0x0)['clamp'](0x0,0xff)));},Game_Map[_0x327db2(0x22e)]['parseTerrainTagBasedSmartRush']=function(){const _0x2d0b22=_0x327db2,_0x2f7c3c=VisuMZ['MovementEffects'][_0x2d0b22(0x254)];if(!this[_0x2d0b22(0x27a)]())return;const _0x4bec28=this[_0x2d0b22(0x27a)]()['note']||'';_0x4bec28[_0x2d0b22(0x2a8)](_0x2f7c3c['SmartRushAntiCrashTerrainTags'])&&(_0x2d0b22(0x1f0)===_0x2d0b22(0x1f0)?this[_0x2d0b22(0x2f5)]['NonCrashTerrainTags']=RegExp['$1'][_0x2d0b22(0x376)](',')['map'](_0x580375=>(Number(_0x580375)||0x0)[_0x2d0b22(0x397)](0x0,0x7)):(_0x1b3a66[_0x2d0b22(0x230)]!==''&&_0x2ca25c['playSe'](_0xbd3c4e),_0x559004>0x0&&_0x530534[_0x2d0b22(0x16c)]([_0x30271a],_0x467c6f),_0x57ec0f>0x0&&_0x403551[_0x2d0b22(0x294)][_0x2d0b22(0x2d3)](_0x300ece)));},Game_Map[_0x327db2(0x22e)][_0x327db2(0x2f6)]=function(){const _0x201c88=_0x327db2;if(this['_smartRush']===undefined)this[_0x201c88(0x41c)]();return this['_smartRush'][_0x201c88(0x321)];},Game_Map['prototype']['isSmartRushCrashShakeTile']=function(_0x40daa9,_0x5f2922,_0xb45b1c){const _0x5a5e73=_0x327db2,_0x3c3018=this[_0x5a5e73(0x371)](_0x40daa9,_0xb45b1c),_0x5bf4f6=this[_0x5a5e73(0x3b5)](_0x5f2922,_0xb45b1c);if($gameMap[_0x5a5e73(0x152)](_0x3c3018,_0x5bf4f6,0x200))return![];if($gameMap['checkPassage'](_0x3c3018,_0x5bf4f6,0x400))return![];if(_0x3c3018<0x0||_0x3c3018>=this[_0x5a5e73(0x3de)]())return![];if(_0x5bf4f6<0x0||_0x5bf4f6>=this[_0x5a5e73(0x438)]())return![];const _0x3801ff=this[_0x5a5e73(0x455)](_0x3c3018,_0x5bf4f6);if(this[_0x5a5e73(0x2f5)][_0x5a5e73(0x168)][_0x5a5e73(0x26f)](_0x3801ff))return![];const _0x1944e8=this[_0x5a5e73(0x410)](_0x3c3018,_0x5bf4f6);if(this[_0x5a5e73(0x2f5)]['NonCrashTerrainTags'][_0x5a5e73(0x26f)](_0x1944e8))return![];return Game_Player['SMART_RUSH_SHAKE_ENABLED'];},Game_Map[_0x327db2(0x22e)][_0x327db2(0x19d)]=function(){this['initRegionTerrainTagSmartBlink'](),this['parseRegionBasedSmartBlink'](),this['parseTerrainTagBasedSmartBlink']();},Game_Map['prototype'][_0x327db2(0x161)]=function(){const _0x32136a=_0x327db2,_0x2607e2=VisuMZ[_0x32136a(0x300)][_0x32136a(0x1b2)][_0x32136a(0x1d5)];this['_smartBlink']={'enabled':!![],'NonLandableRegions':(_0x2607e2[_0x32136a(0x34f)]||[])[_0x32136a(0x27b)](),'NonLandableTerrainTags':(_0x2607e2[_0x32136a(0x44d)]||[])[_0x32136a(0x27b)](),'NonPassableRegions':(_0x2607e2['NonPassableRegions']||[])['clone'](),'NonPassableTerrainTags':(_0x2607e2[_0x32136a(0x283)]||[])[_0x32136a(0x27b)]()};},Game_Map['prototype']['parseRegionBasedSmartBlink']=function(){const _0x1cfc8c=_0x327db2,_0x5b7bb2=VisuMZ[_0x1cfc8c(0x300)][_0x1cfc8c(0x254)],_0x2a242b=$dataMap['note']||'';_0x2a242b['match'](_0x5b7bb2[_0x1cfc8c(0x2c9)])&&(this[_0x1cfc8c(0x28e)]['enabled']=![]),_0x2a242b[_0x1cfc8c(0x2a8)](_0x5b7bb2['SmartBlinkNonLandRegions'])&&(_0x1cfc8c(0x2e3)===_0x1cfc8c(0x36b)?_0x408a94*=_0x1007d5[_0x1cfc8c(0x38e)]():this[_0x1cfc8c(0x28e)][_0x1cfc8c(0x34f)]=RegExp['$1'][_0x1cfc8c(0x376)](',')[_0x1cfc8c(0x386)](_0x4d3d06=>(Number(_0x4d3d06)||0x0)[_0x1cfc8c(0x397)](0x0,0xff))),_0x2a242b['match'](_0x5b7bb2[_0x1cfc8c(0x440)])&&(this[_0x1cfc8c(0x28e)]['NonPassableRegions']=RegExp['$1']['split'](',')[_0x1cfc8c(0x386)](_0x116706=>(Number(_0x116706)||0x0)[_0x1cfc8c(0x397)](0x0,0xff)));},Game_Map['prototype'][_0x327db2(0x355)]=function(){const _0x432083=_0x327db2,_0x2cbc5a=VisuMZ[_0x432083(0x300)][_0x432083(0x254)];if(!this['tileset']())return;const _0x3a78b7=this[_0x432083(0x27a)]()[_0x432083(0x341)]||'';_0x3a78b7[_0x432083(0x2a8)](_0x2cbc5a[_0x432083(0x372)])&&(this[_0x432083(0x28e)][_0x432083(0x44d)]=RegExp['$1'][_0x432083(0x376)](',')[_0x432083(0x386)](_0x3e0a03=>(Number(_0x3e0a03)||0x0)[_0x432083(0x397)](0x0,0x7)));if(_0x3a78b7[_0x432083(0x2a8)](_0x2cbc5a['SmartBlinkNonPassTerrainTags'])){if(_0x432083(0x1ef)!=='PBvSU'){const _0x53d3a7=this[_0x432083(0x40c)];if(_0x53d3a7[_0x432083(0x2dd)]!=='')this[_0x432083(0x3e0)]=_0x50f4f5['loadPicture'](_0x53d3a7[_0x432083(0x2dd)]);else{const _0x219e83=_0x53d3a7[_0x432083(0x319)],_0x3061b7=_0x219e83*0x2,_0x454637=new _0x565524(_0x3061b7,_0x3061b7),_0x44c3ba=_0x53d3a7['color'],_0x1456cf=_0x53d3a7[_0x432083(0x373)];_0x454637['drawDustCloud'](_0x219e83,_0x44c3ba,_0x1456cf),this[_0x432083(0x3e0)]=_0x454637;}}else this[_0x432083(0x28e)][_0x432083(0x283)]=RegExp['$1']['split'](',')[_0x432083(0x386)](_0x8b94a7=>(Number(_0x8b94a7)||0x0)[_0x432083(0x397)](0x0,0x7));}},Game_Map[_0x327db2(0x22e)]['isSmartBlinkEnabled']=function(){const _0x53dc43=_0x327db2;if(this[_0x53dc43(0x28e)]===undefined)this[_0x53dc43(0x19d)]();return this[_0x53dc43(0x28e)][_0x53dc43(0x321)];},Game_Map[_0x327db2(0x22e)][_0x327db2(0x340)]=function(_0x4e1634,_0x584c70){const _0x43e01f=_0x327db2,_0x125e18=this[_0x43e01f(0x455)](_0x4e1634,_0x584c70),_0x182f0e=this[_0x43e01f(0x410)](_0x4e1634,_0x584c70);if(this[_0x43e01f(0x28e)]===undefined)this['setupRegionTerrainTagSmartBlink']();if(this[_0x43e01f(0x28e)]['NonPassableRegions'][_0x43e01f(0x26f)](_0x125e18))return!![];if(this[_0x43e01f(0x28e)][_0x43e01f(0x283)][_0x43e01f(0x26f)](_0x182f0e))return!![];return![];},Game_Map[_0x327db2(0x22e)][_0x327db2(0x17f)]=function(_0x15ccf0,_0x3d1df6){const _0xe81f7b=_0x327db2,_0x7e1132=this[_0xe81f7b(0x455)](_0x15ccf0,_0x3d1df6),_0x4005c1=this[_0xe81f7b(0x410)](_0x15ccf0,_0x3d1df6);if(this[_0xe81f7b(0x28e)]===undefined)this['setupRegionTerrainTagSmartBlink']();if(this[_0xe81f7b(0x28e)][_0xe81f7b(0x34f)][_0xe81f7b(0x26f)](_0x7e1132))return!![];if(this[_0xe81f7b(0x28e)]['NonLandableTerrainTags'][_0xe81f7b(0x26f)](_0x4005c1))return!![];return![];},Game_Map[_0x327db2(0x22e)][_0x327db2(0x36a)]=function(){const _0x6072a0=_0x327db2;this['initRegionTerrainTagSmartJump'](),this['parseRegionBasedSmartJump'](),this[_0x6072a0(0x1de)]();},Game_Map['prototype'][_0x327db2(0x44b)]=function(){const _0x151e11=_0x327db2,_0xd1bee0=VisuMZ['MovementEffects']['Settings'][_0x151e11(0x204)];this[_0x151e11(0x420)]={'enabled':!![],'HeightBasedRegions':(_0xd1bee0['HeightBasedRegions']||[])[_0x151e11(0x27b)](),'NonLandableRegions':(_0xd1bee0[_0x151e11(0x34f)]||[])[_0x151e11(0x27b)](),'NonLandableTerrainTags':(_0xd1bee0[_0x151e11(0x44d)]||[])[_0x151e11(0x27b)](),'NonPassableRegions':(_0xd1bee0[_0x151e11(0x1cf)]||[])[_0x151e11(0x27b)](),'NonPassableTerrainTags':(_0xd1bee0['NonPassableTerrainTags']||[])['clone']()};},Game_Map[_0x327db2(0x22e)][_0x327db2(0x1a6)]=function(){const _0x4f1968=_0x327db2,_0x189e6f=VisuMZ['MovementEffects'][_0x4f1968(0x254)],_0x527f2f=$dataMap['note']||'';if(_0x527f2f[_0x4f1968(0x2a8)](_0x189e6f[_0x4f1968(0x39d)])){if(_0x4f1968(0x307)!=='Qyjuk'){const _0x72f321=this[_0x4f1968(0x203)](),_0x153776=((this[_0x4f1968(0x170)]-0x1)*0x2)[_0x4f1968(0x397)](0.25,0.85),_0x4ece11=((this[_0x4f1968(0x170)]-0x1)*1.5)[_0x4f1968(0x397)](0.15,0.3);if([0x1,0x4,0x7][_0x4f1968(0x26f)](_0x72f321))this[_0x4f1968(0x1c5)]-=_0x153776;if([0x3,0x6,0x9][_0x4f1968(0x26f)](_0x72f321))this['_realX']+=_0x153776;if([0x7,0x8,0x9][_0x4f1968(0x26f)](_0x72f321))this[_0x4f1968(0x358)]-=_0x153776;if([0x1,0x2,0x3][_0x4f1968(0x26f)](_0x72f321))this['_realY']+=_0x4ece11;}else this[_0x4f1968(0x420)][_0x4f1968(0x321)]=![];}if(_0x527f2f[_0x4f1968(0x2a8)](_0x189e6f[_0x4f1968(0x21b)])){if('HavmP'===_0x4f1968(0x316)){if(this[_0x4f1968(0x420)]===_0x524073)this[_0x4f1968(0x36a)]();return this[_0x4f1968(0x420)][_0x4f1968(0x197)][_0x4f1968(0x26f)](_0x4deb57);}else this['_smartJump']['LedgeJumpRegion']=Number(RegExp['$1'])['clamp'](0x0,0xff);}_0x527f2f[_0x4f1968(0x2a8)](_0x189e6f[_0x4f1968(0x329)])&&(this['_smartJump'][_0x4f1968(0x197)]=RegExp['$1'][_0x4f1968(0x376)](',')[_0x4f1968(0x386)](_0x139f99=>(Number(_0x139f99)||0x0)[_0x4f1968(0x397)](0x0,0xff)),this[_0x4f1968(0x420)][_0x4f1968(0x197)][_0x4f1968(0x43b)]());if(_0x527f2f['match'](_0x189e6f['SmartJumpNonLandRegions'])){if('kLkJK'!==_0x4f1968(0x247)){const _0x492fb7=_0x104b0f['radius'],_0x4f1f7c=_0x492fb7*0x2,_0x3c5915=new _0x2005a0(_0x4f1f7c,_0x4f1f7c),_0x5ac0ce=_0x1d483c[_0x4f1968(0x313)],_0x368d1a=_0x3d51f7['fullness'];_0x3c5915['drawDustCloud'](_0x492fb7,_0x5ac0ce,_0x368d1a),this[_0x4f1968(0x3e0)]=_0x3c5915;}else this[_0x4f1968(0x420)][_0x4f1968(0x34f)]=RegExp['$1'][_0x4f1968(0x376)](',')[_0x4f1968(0x386)](_0x2b2b85=>(Number(_0x2b2b85)||0x0)[_0x4f1968(0x397)](0x0,0xff));}_0x527f2f['match'](_0x189e6f[_0x4f1968(0x22c)])&&(this[_0x4f1968(0x420)][_0x4f1968(0x1cf)]=RegExp['$1'][_0x4f1968(0x376)](',')['map'](_0x2d06bc=>(Number(_0x2d06bc)||0x0)[_0x4f1968(0x397)](0x0,0xff)));},Game_Map[_0x327db2(0x22e)]['parseTerrainTagBasedSmartJump']=function(){const _0x3448ae=_0x327db2,_0x117af9=VisuMZ[_0x3448ae(0x300)][_0x3448ae(0x254)];if(!this[_0x3448ae(0x27a)]())return;const _0x8de1fc=this['tileset']()[_0x3448ae(0x341)]||'';if(_0x8de1fc[_0x3448ae(0x2a8)](_0x117af9[_0x3448ae(0x327)])){if(_0x3448ae(0x1ca)===_0x3448ae(0x338))return![];else this['_smartJump'][_0x3448ae(0x44d)]=RegExp['$1'][_0x3448ae(0x376)](',')[_0x3448ae(0x386)](_0x5a7e6c=>(Number(_0x5a7e6c)||0x0)[_0x3448ae(0x397)](0x0,0x7));}if(_0x8de1fc[_0x3448ae(0x2a8)](_0x117af9[_0x3448ae(0x436)])){if(_0x3448ae(0x2b3)!==_0x3448ae(0x2b3))return this[_0x3448ae(0x233)]||{'enabled':![]};else this[_0x3448ae(0x420)][_0x3448ae(0x283)]=RegExp['$1'][_0x3448ae(0x376)](',')[_0x3448ae(0x386)](_0x4ef6d6=>(Number(_0x4ef6d6)||0x0)[_0x3448ae(0x397)](0x0,0x7));}},Game_Map[_0x327db2(0x22e)]['isSmartJumpEnabled']=function(){const _0x3d16b8=_0x327db2;if(this[_0x3d16b8(0x420)]===undefined)this[_0x3d16b8(0x36a)]();return this[_0x3d16b8(0x420)][_0x3d16b8(0x321)];},Game_Map[_0x327db2(0x22e)]['isTileSmartHeightJumpRegion']=function(_0xfe3f8a,_0xeb7900){const _0x22972a=_0x327db2;if(this[_0x22972a(0x420)]===undefined)this['setupRegionTerrainTagSmartJump']();const _0x3d4c32=this[_0x22972a(0x455)](_0xfe3f8a,_0xeb7900);return this[_0x22972a(0x187)](_0x3d4c32);;},Game_Map['prototype'][_0x327db2(0x23b)]=function(_0xc36bce){const _0x4153ec=_0x327db2;if(this[_0x4153ec(0x420)]===undefined)this[_0x4153ec(0x36a)]();const _0x42c0ab=this[_0x4153ec(0x420)][_0x4153ec(0x197)][_0x4153ec(0x22d)](_0xc36bce);return _0x42c0ab===0x0;},Game_Map[_0x327db2(0x22e)][_0x327db2(0x187)]=function(_0x121534){const _0x9a5719=_0x327db2;if(this['_smartJump']===undefined)this[_0x9a5719(0x36a)]();return this[_0x9a5719(0x420)]['HeightBasedRegions'][_0x9a5719(0x26f)](_0x121534);},Game_Map['prototype'][_0x327db2(0x14f)]=function(_0x1d1fe6,_0x4a470a,_0x3dfcd2){const _0x24a320=_0x327db2,_0x10f171=$gamePlayer[_0x24a320(0x455)](),_0x58c1f4=this[_0x24a320(0x455)](_0x1d1fe6,_0x4a470a);if(this[_0x24a320(0x187)](_0x10f171)){const _0xa79d35=$gamePlayer['direction']();if(this['isSmartJumpRegionLowestHeight'](_0x10f171)&&this[_0x24a320(0x23b)](_0x58c1f4))return!![];if(_0xa79d35!==0x2&&this['isSmartJumpRegionLowestHeight'](_0x58c1f4)){if(_0x3dfcd2>=0x1)return![];}if(this[_0x24a320(0x187)](_0x58c1f4))return _0x10f171>=_0x58c1f4;else{const _0x476a53=this[_0x24a320(0x420)][_0x24a320(0x197)][_0x24a320(0x22d)](_0x10f171);return _0x476a53<=0x0;}}if(this['isHeightBasedRegion'](_0x58c1f4)){const _0x4e28ee=this['_smartJump']['HeightBasedRegions'][_0x24a320(0x22d)](_0x58c1f4);return _0x4e28ee<=0x0;}else return!![];},Game_Map['prototype'][_0x327db2(0x1d9)]=function(_0x5e8894,_0x51e7a6){const _0x352da8=_0x327db2,_0x3eb4eb=this[_0x352da8(0x455)](_0x5e8894,_0x51e7a6),_0x1d744c=this[_0x352da8(0x410)](_0x5e8894,_0x51e7a6);if(this[_0x352da8(0x420)]===undefined)this['setupRegionTerrainTagSmartJump']();if(this[_0x352da8(0x420)][_0x352da8(0x1cf)][_0x352da8(0x26f)](_0x3eb4eb))return!![];if(this[_0x352da8(0x420)]['NonPassableTerrainTags']['includes'](_0x1d744c))return!![];const _0x4d5fda=this[_0x352da8(0x1c6)](_0x5e8894,_0x51e7a6);for(const _0x567612 of _0x4d5fda){if(!_0x567612)continue;if(_0x567612[_0x352da8(0x387)])continue;if(_0x567612[_0x352da8(0x27f)]())return!![];}return![];},Game_Map[_0x327db2(0x22e)][_0x327db2(0x2f7)]=function(_0x215010,_0x142290){const _0x2b40ad=_0x327db2,_0x117096=this[_0x2b40ad(0x455)](_0x215010,_0x142290),_0x1fe9ff=this['terrainTag'](_0x215010,_0x142290);if(this[_0x2b40ad(0x420)]===undefined)this[_0x2b40ad(0x36a)]();if(this[_0x2b40ad(0x420)][_0x2b40ad(0x34f)][_0x2b40ad(0x26f)](_0x117096))return!![];if(this[_0x2b40ad(0x420)]['NonLandableTerrainTags'][_0x2b40ad(0x26f)](_0x1fe9ff))return!![];const _0xdaeaa8=this[_0x2b40ad(0x1c6)](_0x215010,_0x142290);for(const _0x1a5660 of _0xdaeaa8){if(_0x2b40ad(0x1f1)!==_0x2b40ad(0x1f1))this[_0x2b40ad(0x257)]--;else{if(!_0x1a5660)continue;if(_0x1a5660[_0x2b40ad(0x387)])continue;if(_0x1a5660[_0x2b40ad(0x458)]())return!![];}}return![];},VisuMZ[_0x327db2(0x300)][_0x327db2(0x1bb)]=Game_CharacterBase['prototype']['initMembers'],Game_CharacterBase['prototype'][_0x327db2(0x23a)]=function(){const _0x1a0830=_0x327db2;VisuMZ['MovementEffects'][_0x1a0830(0x1bb)][_0x1a0830(0x35f)](this),this[_0x1a0830(0x215)]();},VisuMZ['MovementEffects'][_0x327db2(0x24e)]=Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x1a2)],Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x1a2)]=function(){const _0x4234a1=_0x327db2;VisuMZ[_0x4234a1(0x300)][_0x4234a1(0x24e)][_0x4234a1(0x35f)](this);if(this[_0x4234a1(0x35a)]())this[_0x4234a1(0x19e)]();if(!this[_0x4234a1(0x2d8)]()&&this[_0x4234a1(0x238)]()){if('rrjwR'!==_0x4234a1(0x39a))this[_0x4234a1(0x33d)]();else return this[_0x4234a1(0x15a)]=!![],this[_0x4234a1(0x22a)]=this[_0x4234a1(0x1c5)],this[_0x4234a1(0x3a5)]=this[_0x4234a1(0x358)],![];}},VisuMZ['MovementEffects'][_0x327db2(0x346)]=Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x16e)],Game_CharacterBase['prototype']['updatePattern']=function(){const _0x40e508=_0x327db2;VisuMZ[_0x40e508(0x300)]['Game_CharacterBase_updatePattern']['call'](this);if(this[_0x40e508(0x1ad)]>0x0)return;if(this['meetFootprintFrames']()&&this['canMakeFootprints']()){if(_0x40e508(0x212)!==_0x40e508(0x23c))this[_0x40e508(0x282)]();else{const _0x283bc1=_0x28b288[_0x40e508(0x294)]['_spriteset'];if(_0x283bc1)_0x283bc1['createFootprintForTarget'](this);}}this[_0x40e508(0x26e)]()&&this[_0x40e508(0x238)]()&&this[_0x40e508(0x33d)]();},Game_CharacterBase['prototype'][_0x327db2(0x35a)]=function(){const _0x593c82=_0x327db2;if(this['constructor']===Game_Follower&&!this[_0x593c82(0x29c)]())return![];if(this[_0x593c82(0x33f)]===Game_Player&&this[_0x593c82(0x183)]())return![];if(!this[_0x593c82(0x433)]())return![];if(this[_0x593c82(0x395)]())return![];return $gameMap[_0x593c82(0x1a4)]();},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x19e)]=function(){const _0x34d58a=_0x327db2,_0x1ce527=SceneManager[_0x34d58a(0x294)][_0x34d58a(0x349)];if(_0x1ce527)_0x1ce527[_0x34d58a(0x3e2)](this);},Game_CharacterBase[_0x327db2(0x22e)]['isPlayFootstepSoundsByFrame']=function(){const _0x4cde7b=_0x327db2;return VisuMZ[_0x4cde7b(0x300)][_0x4cde7b(0x1b2)]['Footsteps'][_0x4cde7b(0x266)];},VisuMZ['MovementEffects'][_0x327db2(0x21e)]=Game_CharacterBase['prototype'][_0x327db2(0x1ed)],Game_CharacterBase[_0x327db2(0x22e)]['animationWait']=function(){const _0x4ef863=_0x327db2;let _0x11c2d9=VisuMZ['MovementEffects'][_0x4ef863(0x21e)][_0x4ef863(0x35f)](this);if(this['isMoving']()){const _0x7fcd72=VisuMZ[_0x4ef863(0x300)]['Settings'][_0x4ef863(0x265)][_0x4ef863(0x286)]??1.5;_0x11c2d9=Math[_0x4ef863(0x1ab)](_0x11c2d9/Math['max'](_0x7fcd72,0x1));if(this[_0x4ef863(0x433)]()){const _0x321e27=VisuMZ[_0x4ef863(0x300)][_0x4ef863(0x1b2)][_0x4ef863(0x265)]['FrameDashModifier']??1.5;_0x11c2d9=Math[_0x4ef863(0x1ab)](_0x11c2d9/Math[_0x4ef863(0x43c)](_0x321e27,0x1));}}return _0x11c2d9;},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x26e)]=function(){const _0x25e496=_0x327db2;if(!this['isPlayFootstepSoundsByFrame']())return![];if(this[_0x25e496(0x310)]()&&!this[_0x25e496(0x33e)]())return![];if(this[_0x25e496(0x276)]())return![];if(this[_0x25e496(0x21d)]())return![];const _0x25fb2a=this[_0x25e496(0x37c)]()[_0x25e496(0x3fa)]??[];if(_0x25fb2a[_0x25e496(0x3d3)]<=0x0)return!![];return _0x25fb2a[_0x25e496(0x26f)](this[_0x25e496(0x315)]());},Game_CharacterBase['prototype']['canMakeFootstepSounds']=function(){const _0x31d795=_0x327db2;if(this['constructor']===Game_Follower&&!this[_0x31d795(0x29c)]())return![];if(this['constructor']===Game_Player&&this['isInVehicle']())return![];if(this[_0x31d795(0x33f)]===Game_Follower&&$gamePlayer[_0x31d795(0x183)]())return![];if(this[_0x31d795(0x395)]())return![];return this[_0x31d795(0x37c)]()[_0x31d795(0x321)]&&$gameMap['canMakeFootstepSounds']();},Game_Vehicle['prototype'][_0x327db2(0x238)]=function(){return![];},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x33d)]=function(){const _0x1a94c3=_0x327db2;SoundManager[_0x1a94c3(0x28f)](this);},Game_CharacterBase['prototype']['footstepsData']=function(){return{'enabled':!![],'volumeRate':0x1,'pitchRate':0x1};},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x2c1)]=function(){const _0x1dc3f9=_0x327db2;if(this[_0x1dc3f9(0x310)]()&&!this['isMoving']())return![];if(this[_0x1dc3f9(0x276)]())return![];if(this[_0x1dc3f9(0x21d)]())return![];const _0x47c1a6=_0x1dc3f9(0x248)['format'](this[_0x1dc3f9(0x176)]),_0x379985=_0x1dc3f9(0x30b)[_0x1dc3f9(0x3c4)](this[_0x1dc3f9(0x315)]()),_0x57bea9=this['footprintsData']();if(_0x57bea9[_0x47c1a6]){if(_0x1dc3f9(0x239)===_0x1dc3f9(0x239)){if(_0x57bea9[_0x47c1a6][_0x379985]){if(_0x1dc3f9(0x227)!==_0x1dc3f9(0x227))this[_0x1dc3f9(0x2f5)][_0x1dc3f9(0x321)]=![];else{if(_0x57bea9[_0x47c1a6][_0x379985][_0x1dc3f9(0x2dd)]!=='')return!![];if(_0x57bea9[_0x47c1a6][_0x379985][_0x1dc3f9(0x3de)]>0x0)return!![];if(_0x57bea9[_0x47c1a6][_0x379985][_0x1dc3f9(0x438)]>0x0)return!![];}}}else{const _0x5b2b87=_0x51aa5a[_0x1dc3f9(0x294)]['_spriteset'];if(_0x5b2b87){const _0x17d441=this[_0x1dc3f9(0x2da)]()[_0x1dc3f9(0x1f5)](),_0x594dfd=[this]['concat'](_0x17d441);for(const _0x56f525 of _0x594dfd){const _0x13478c=_0x5b2b87[_0x1dc3f9(0x3b4)](_0x56f525);if(_0x13478c){const _0x320e7b=_0x355cf0[_0x1dc3f9(0x324)],_0x374f5b=_0x472551[_0x1dc3f9(0x3df)];_0x13478c['startMotionBlurEffect'](_0x320e7b,_0x374f5b);}}}}}return![];},Game_CharacterBase['prototype'][_0x327db2(0x181)]=function(){const _0x175f25=_0x327db2;if(this[_0x175f25(0x33f)]===Game_Follower&&!this[_0x175f25(0x29c)]())return![];if(this[_0x175f25(0x33f)]===Game_Player&&this['isInVehicle']())return![];if(this[_0x175f25(0x395)]())return![];const _0x5f55a3=this['x'],_0x50a649=this['y'];return this[_0x175f25(0x285)]()[_0x175f25(0x321)]&&$gameMap[_0x175f25(0x181)](_0x5f55a3,_0x50a649);},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x285)]=function(){const _0x290a46=_0x327db2,_0x178ef2=VisuMZ[_0x290a46(0x300)][_0x290a46(0x1b2)][_0x290a46(0x288)];return{'enabled':!![],'dir1':_0x178ef2[_0x290a46(0x180)],'dir2':_0x178ef2[_0x290a46(0x2c6)],'dir3':_0x178ef2[_0x290a46(0x399)],'dir4':_0x178ef2[_0x290a46(0x199)],'dir6':_0x178ef2['dir6'],'dir7':_0x178ef2['dir7'],'dir8':_0x178ef2[_0x290a46(0x3a0)],'dir9':_0x178ef2[_0x290a46(0x381)]};},Game_CharacterBase['prototype']['createFootprint']=function(){const _0x3e99f1=_0x327db2,_0x2592ef=SceneManager[_0x3e99f1(0x294)][_0x3e99f1(0x349)];if(_0x2592ef)_0x2592ef[_0x3e99f1(0x2ca)](this);},Game_CharacterBase['prototype'][_0x327db2(0x215)]=function(){this['_motionTrailSettings']={'enabled':![],'delay':0x4,'duration':0x1e,'hue':0x0,'opacityStart':0x80,'tone':[0x0,0x0,0x0,0x0]};},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x43a)]=function(){const _0x4ab0a7=_0x327db2;if(this[_0x4ab0a7(0x339)]===undefined)this['initMovementEffectsMotionTrails']();return this[_0x4ab0a7(0x339)];},Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x3cc)]=function(_0x253c59,_0x2530fd){const _0x481b9a=_0x327db2;this[_0x481b9a(0x43a)]()[_0x481b9a(0x321)]=_0x253c59;if(!SceneManager[_0x481b9a(0x332)]())return;if(!_0x253c59)return;if(!_0x2530fd)return;const _0x2bc728=SceneManager['_scene'][_0x481b9a(0x349)];if(_0x2bc728){const _0x582ba9=_0x2bc728[_0x481b9a(0x3b4)](this);_0x582ba9&&_0x582ba9[_0x481b9a(0x44e)]();}},Game_CharacterBase['prototype'][_0x327db2(0x42a)]=function(_0x3a7b6c,_0x1b760d){const _0x23bf7c=_0x327db2,_0x3a4bde=this['motionTrailData']()[_0x23bf7c(0x321)];this[_0x23bf7c(0x339)]=JsonEx[_0x23bf7c(0x429)](_0x3a7b6c);if(_0x1b760d)return;this[_0x23bf7c(0x339)][_0x23bf7c(0x321)]=_0x3a4bde;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b9)]=Game_Player['prototype'][_0x327db2(0x3cb)],Game_Player[_0x327db2(0x22e)][_0x327db2(0x3cb)]=function(){const _0x5ed877=_0x327db2;if(this['isSmartRushing']()){if(_0x5ed877(0x2a7)!==_0x5ed877(0x1e2))this[_0x5ed877(0x14a)]();else return _0x29e0fa>=_0x38a2e4;}else this['isSmartJumping']()?this['updateSmartJumpState']():(VisuMZ[_0x5ed877(0x300)][_0x5ed877(0x1b9)][_0x5ed877(0x35f)](this),this[_0x5ed877(0x3fc)]());},Game_Player['prototype']['updateSmartMovementCooldowns']=function(){const _0x53033b=_0x327db2;this[_0x53033b(0x2a1)](),this[_0x53033b(0x27d)](),this[_0x53033b(0x3f6)]();},VisuMZ[_0x327db2(0x300)]['Game_Player_updateScroll']=Game_Player['prototype'][_0x327db2(0x2b2)],Game_Player[_0x327db2(0x22e)][_0x327db2(0x2b2)]=function(_0x1bdfa2,_0x24800d){const _0x594be8=_0x327db2;this['canSmoothScroll']()?this[_0x594be8(0x2fb)](_0x1bdfa2,_0x24800d):VisuMZ[_0x594be8(0x300)][_0x594be8(0x284)][_0x594be8(0x35f)](this,_0x1bdfa2,_0x24800d);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x2f3)]=function(){const _0x44310d=_0x327db2;if(!$gameMap[_0x44310d(0x437)]())return![];if($gameMap[_0x44310d(0x1b1)]()){if(_0x44310d(0x24c)!=='xTuet')return this['_wasEventScrolling']=!![],this['_lastSmoothScrollX']=this[_0x44310d(0x1c5)],this[_0x44310d(0x3a5)]=this[_0x44310d(0x358)],![];else{if(this[_0x44310d(0x310)]()&&!this[_0x44310d(0x33e)]())return![];if(this['isJumping']())return![];if(this[_0x44310d(0x21d)]())return![];const _0x2342a0=_0x44310d(0x248)[_0x44310d(0x3c4)](this[_0x44310d(0x176)]),_0x46c0d5=_0x44310d(0x30b)[_0x44310d(0x3c4)](this[_0x44310d(0x315)]()),_0x2b187f=this[_0x44310d(0x285)]();if(_0x2b187f[_0x2342a0]){if(_0x2b187f[_0x2342a0][_0x46c0d5]){if(_0x2b187f[_0x2342a0][_0x46c0d5][_0x44310d(0x2dd)]!=='')return!![];if(_0x2b187f[_0x2342a0][_0x46c0d5][_0x44310d(0x3de)]>0x0)return!![];if(_0x2b187f[_0x2342a0][_0x46c0d5][_0x44310d(0x438)]>0x0)return!![];}}return![];}}if(this[_0x44310d(0x15a)]){if(_0x44310d(0x28d)==='QAFST')return(this[_0x44310d(0x22a)]!==this[_0x44310d(0x1c5)]||this[_0x44310d(0x3a5)]!==this['_realY'])&&(_0x44310d(0x213)!==_0x44310d(0x3e9)?(this['_wasEventScrolling']=![],this[_0x44310d(0x22a)]=this[_0x44310d(0x1c5)],this[_0x44310d(0x3a5)]=this[_0x44310d(0x358)]):_0x1bd1c6[_0x44310d(0x294)][_0x44310d(0x2d3)](_0x16c2e3)),!this[_0x44310d(0x15a)];else{const _0x55bc92=_0x44310d(0x3c1),_0x4ba831=_0x23dc8[_0x44310d(0x2a8)](_0x241f85[_0x55bc92]);if(_0x4ba831)for(const _0x2f922 of _0x4ba831){_0x2f922[_0x44310d(0x2a8)](_0x4081aa[_0x55bc92]);const _0x18946f=_0x23e903['$1'],_0x31b4ef=_0x115e86['$2'],_0x31a9be=_0x115607['$3'],_0x1cbbbb=_0x44310d(0x248)[_0x44310d(0x3c4)](_0x490d0b[_0x44310d(0x302)](_0x18946f)),_0x20197d=_0x44310d(0x30b)[_0x44310d(0x3c4)](_0x8cf93e(_0x31b4ef)||0x0);this[_0x44310d(0x3b3)][_0x1cbbbb][_0x20197d][_0x44310d(0x2dd)]=_0x206d4d(_0x31a9be)[_0x44310d(0x3f8)]();}}}return!![];},Game_Player[_0x327db2(0x22e)]['updateScrollSmoothCamera']=function(_0x4ec35a,_0x330244){const _0x58ccee=_0x327db2,_0x3cd27d=this['centerX'](),_0x55f04c=this[_0x58ccee(0x216)](),_0x59a708=this[_0x58ccee(0x2eb)](),_0x45d1fc=this[_0x58ccee(0x3b9)](),_0x50e93c=this[_0x58ccee(0x433)]()||this['isInAirship'](),_0x323095=$gameSystem[_0x58ccee(0x423)](![],_0x50e93c),_0x58ef44=$gameSystem[_0x58ccee(0x423)](!![],_0x50e93c),_0x2010db=VisuMZ[_0x58ccee(0x300)][_0x58ccee(0x312)]();if(_0x59a708<_0x3cd27d){if(_0x58ccee(0x3f4)!==_0x58ccee(0x3f9)){const _0xafe12c=_0x3cd27d-_0x59a708,_0x31ee76=_0x323095*_0x2010db,_0x22be12=_0xafe12c/(_0x31ee76||0.01);$gameMap['scrollLeft'](_0x22be12);}else{if(this['_cached_GeneratedFootprint_Image'])return this[_0x58ccee(0x2ba)];const _0x951b73=0x64,_0x9b8c71=0x64,_0x5e2e49=new _0x47913a(_0x951b73,_0x9b8c71);return _0x5e2e49[_0x58ccee(0x389)]=0xff,_0x5e2e49[_0x58ccee(0x37b)](0x32,0x32,0x32,_0x58ccee(0x43d)),_0x5e2e49['_customModified']=![],this[_0x58ccee(0x2ba)]=_0x5e2e49,this[_0x58ccee(0x2ba)];}}if(_0x59a708>_0x3cd27d){const _0x45e1d0=_0x59a708-_0x3cd27d,_0x1f86c5=_0x323095*_0x2010db,_0x6c3f7f=_0x45e1d0/(_0x1f86c5||0.01);$gameMap['scrollRight'](_0x6c3f7f);}if(_0x45d1fc>_0x55f04c){const _0x1dbde8=_0x45d1fc-_0x55f04c,_0x19ce3c=_0x58ef44*_0x2010db,_0x13fe02=_0x1dbde8/(_0x19ce3c||0.01);$gameMap[_0x58ccee(0x2d5)](_0x13fe02);}if(_0x45d1fc<_0x55f04c){if('QRQpU'===_0x58ccee(0x1cb)){const _0x5a79ad=_0x55f04c-_0x45d1fc,_0x571a69=_0x58ef44*_0x2010db,_0x8c7052=_0x5a79ad/(_0x571a69||0.01);$gameMap['scrollUp'](_0x8c7052);}else _0x5aea9c['prototype'][_0x58ccee(0x151)][_0x58ccee(0x35f)](this),this['updatePosition']();}},VisuMZ[_0x327db2(0x300)]['mRadialArcConstant']=function(){return 1.0017453;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x337)]=Game_CharacterBase[_0x327db2(0x22e)]['updateAnimationCount'],Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x354)]=function(){const _0x495258=_0x327db2;VisuMZ['MovementEffects'][_0x495258(0x337)]['call'](this),this[_0x495258(0x257)]&&this[_0x495258(0x257)]--;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x33d)]=function(){const _0x291d60=_0x327db2;Game_Character['prototype'][_0x291d60(0x33d)]['call'](this),this[_0x291d60(0x257)]=0x3c;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x37c)]=function(){const _0x1504be=_0x327db2;return $gameParty[_0x1504be(0x297)]()?$gameParty[_0x1504be(0x297)]()[_0x1504be(0x37c)]():Game_Character[_0x1504be(0x22e)]['footstepsData']['call'](this);},Game_Player[_0x327db2(0x22e)]['footprintsData']=function(){const _0x3ab597=_0x327db2;return $gameParty['leader']()?$gameParty[_0x3ab597(0x297)]()[_0x3ab597(0x285)]():Game_Character[_0x3ab597(0x22e)][_0x3ab597(0x285)][_0x3ab597(0x35f)](this);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x452)]=function(){const _0x505c4f=_0x327db2;return this[_0x505c4f(0x16f)]()||this[_0x505c4f(0x3dd)]();},Game_Player[_0x327db2(0x22e)][_0x327db2(0x464)]=function(){const _0x3887cb=_0x327db2;if(this[_0x3887cb(0x276)]())return!![];if(this['isInVehicle']())return!![];if(this[_0x3887cb(0x21d)]())return!![];return![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x3aa)]=function(_0x218c25){const _0x17d3ad=_0x327db2;if(!_0x218c25)return;if(_0x218c25[_0x17d3ad(0x14e)])return;const _0x53107b=this[_0x17d3ad(0x2e5)](_0x218c25);this[_0x17d3ad(0x26d)](_0x53107b);},Game_Player[_0x327db2(0x22e)]['getStraightenDiagonalDirection']=function(_0x236ba1){const _0x31640c=_0x327db2;if(!_0x236ba1)return this[_0x31640c(0x203)]();if(_0x236ba1[_0x31640c(0x14e)])return this[_0x31640c(0x203)]();const _0x3320e6=this[_0x31640c(0x196)](this['direction'](),_0x236ba1);return _0x3320e6;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x196)]=function(_0x3de10e,_0x4d5bd9){const _0x3e94c9=_0x327db2;if(!_0x4d5bd9)return _0x3de10e;if(_0x4d5bd9[_0x3e94c9(0x14e)])return _0x3de10e;if(_0x3de10e===0x1)return 0x4;if(_0x3de10e===0x3)return 0x6;if(_0x3de10e===0x7)return 0x4;if(_0x3de10e===0x9)return 0x6;return _0x3de10e;},Game_Player[_0x327db2(0x3c0)]=VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)][_0x327db2(0x261)][_0x327db2(0x36e)]||0x0,Game_Player[_0x327db2(0x18f)]=VisuMZ['MovementEffects'][_0x327db2(0x1b2)]['SmartRush']['BlurDuration']||0x1,Game_Player['SMART_RUSH_SHAKE_ENABLED']=VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)]['SmartRush'][_0x327db2(0x184)]||![],Game_Player[_0x327db2(0x232)]=VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)][_0x327db2(0x261)][_0x327db2(0x1c0)]||0x1,Game_Player['SMART_RUSH_SHAKE_SPEED_RATE']=VisuMZ['MovementEffects']['Settings'][_0x327db2(0x261)][_0x327db2(0x39e)]||0x1,Game_Player[_0x327db2(0x1e1)]=VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)]['SmartRush'][_0x327db2(0x253)]||0x1,Game_Player[_0x327db2(0x22e)][_0x327db2(0x1e6)]=function(_0x323e00,_0x58cfc2,_0x206623,_0x12e97d,_0x1707b3){const _0x1f99e3=_0x327db2;if(!this[_0x1f99e3(0x39b)]())return![];const _0x18140b=VisuMZ['MovementEffects'][_0x1f99e3(0x1b2)][_0x1f99e3(0x261)];return this[_0x1f99e3(0x3aa)](_0x18140b),this[_0x1f99e3(0x173)]=_0x323e00,this['_smartRushCooldown']=_0x58cfc2||0x1,this[_0x1f99e3(0x175)]=(_0x206623||[])[_0x1f99e3(0x27b)](),this[_0x1f99e3(0x170)]=_0x12e97d||1.5,this['_smartRushMotionTrailData']=JsonEx['makeDeepCopy'](_0x1707b3),this[_0x1f99e3(0x403)](!![]),!![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x39b)]=function(){const _0x67cf32=_0x327db2;if(!$gameMap[_0x67cf32(0x2f6)]())return![];if(this[_0x67cf32(0x39c)])return![];if(this[_0x67cf32(0x452)]())return![];if(this['isSmartMoveNonViableState']())return![];if(this[_0x67cf32(0x395)]())return![];if(this['areFollowersGathering']())return![];const _0x399884=VisuMZ['MovementEffects'][_0x67cf32(0x1b2)][_0x67cf32(0x261)],_0x3c7d27=this[_0x67cf32(0x2e5)](_0x399884);return this[_0x67cf32(0x1c2)](this['x'],this['y'],_0x3c7d27);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x16f)]=function(){const _0x4df56b=_0x327db2;return this[_0x4df56b(0x173)]!==undefined&&this[_0x4df56b(0x173)]>0x0;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x219)]=Game_Player['prototype'][_0x327db2(0x433)],Game_Player[_0x327db2(0x22e)]['isDashing']=function(){const _0x3a45a6=_0x327db2;if(this[_0x3a45a6(0x16f)]())return!![];return VisuMZ[_0x3a45a6(0x300)][_0x3a45a6(0x219)][_0x3a45a6(0x35f)](this);},VisuMZ[_0x327db2(0x300)]['Game_CharacterBase_realMoveSpeed']=Game_CharacterBase[_0x327db2(0x22e)][_0x327db2(0x379)],Game_CharacterBase[_0x327db2(0x22e)]['realMoveSpeed']=function(){const _0x24573b=_0x327db2;if(!this[_0x24573b(0x33e)]())return VisuMZ[_0x24573b(0x300)]['Game_CharacterBase_realMoveSpeed'][_0x24573b(0x35f)](this);let _0x5986c7=VisuMZ[_0x24573b(0x300)]['Game_CharacterBase_realMoveSpeed'][_0x24573b(0x35f)](this);_0x5986c7+=$gameSystem[_0x24573b(0x45a)](this[_0x24573b(0x176)])*0x1;if(this===$gamePlayer&&this[_0x24573b(0x16f)]()){if('gjEfP'===_0x24573b(0x1ba))return _0x22fc06[_0x24573b(0x3cf)]&&_0x1e897b[_0x24573b(0x2c8)]['includes']('['+_0x100315+']');else _0x5986c7*=this['_smartRushSpeedRate']||1.5;}return Math[_0x24573b(0x43c)](0x1,_0x5986c7);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x14a)]=function(){const _0x1b3121=_0x327db2;if(this[_0x1b3121(0x33e)]())return;if(this[_0x1b3121(0x276)]())return;this[_0x1b3121(0x35b)](this[_0x1b3121(0x203)]());if(this[_0x1b3121(0x457)]())this['_smartRushMode']=this[_0x1b3121(0x173)]||0x1,this[_0x1b3121(0x173)]--;else{if('AesTs'!==_0x1b3121(0x3a2))return!![];else this[_0x1b3121(0x1e7)]()&&('ILUvO'===_0x1b3121(0x421)?($gameScreen['startSmartRushCrashShake'](this[_0x1b3121(0x173)]),this['startSmartRushCrashWalkBack']()):_0x36bf5b[_0x730119]=this[_0x17c5ab]),this['_smartRushMode']=0x0;}this[_0x1b3121(0x21d)]()&&(_0x1b3121(0x195)!==_0x1b3121(0x195)?this[_0x1b3121(0x1f8)]():this[_0x1b3121(0x173)]=0x0),this[_0x1b3121(0x173)]<=0x0&&setTimeout(this[_0x1b3121(0x403)][_0x1b3121(0x164)](this,![]),0x32);},Game_Player['prototype'][_0x327db2(0x34c)]=function(){const _0x9ae090=_0x327db2;this[_0x9ae090(0x173)]=0x0,setTimeout(this['setSmartRushSwitch'][_0x9ae090(0x164)](this,![]),0x32);},Game_Screen[_0x327db2(0x22e)][_0x327db2(0x15d)]=function(_0x401b78){const _0x64d280=_0x327db2,_0x11e418=(_0x401b78*Game_Player[_0x64d280(0x232)])[_0x64d280(0x397)](0x1,0x9),_0x3b9634=(_0x401b78*Game_Player[_0x64d280(0x2ea)])[_0x64d280(0x397)](0x1,0x9);this[_0x64d280(0x412)](_0x11e418,_0x3b9634,Game_Player[_0x64d280(0x1e1)]);},Game_Player[_0x327db2(0x22e)]['startSmartRushCrashWalkBack']=function(){const _0x2313af=_0x327db2,_0x4147d2=this[_0x2313af(0x203)](),_0x3daae3=((this[_0x2313af(0x170)]-0x1)*0x2)[_0x2313af(0x397)](0.25,0.85),_0x4e6d65=((this['_smartRushSpeedRate']-0x1)*1.5)['clamp'](0.15,0.3);if([0x1,0x4,0x7][_0x2313af(0x26f)](_0x4147d2))this[_0x2313af(0x1c5)]-=_0x3daae3;if([0x3,0x6,0x9]['includes'](_0x4147d2))this[_0x2313af(0x1c5)]+=_0x3daae3;if([0x7,0x8,0x9]['includes'](_0x4147d2))this[_0x2313af(0x358)]-=_0x3daae3;if([0x1,0x2,0x3][_0x2313af(0x26f)](_0x4147d2))this['_realY']+=_0x4e6d65;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x1e7)]=function(){const _0x2a8bd5=_0x327db2;if(!Game_Player[_0x2a8bd5(0x1f3)])return![];const _0x53d340=this['direction'](),_0xe5ce3c=this['x'],_0x8d81e8=this['y'];return $gameMap[_0x2a8bd5(0x41e)](_0xe5ce3c,_0x8d81e8,_0x53d340);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x2a1)]=function(){const _0x2226df=_0x327db2;this[_0x2226df(0x39c)]&&this[_0x2226df(0x39c)]--;},Game_Player['prototype'][_0x327db2(0x403)]=function(_0x3b19be){const _0x22704b=_0x327db2;this['_smartRushSwitches']=this[_0x22704b(0x175)]||[];for(const _0x412ba4 of this[_0x22704b(0x175)]){if(_0x22704b(0x25f)===_0x22704b(0x25f))$gameSwitches['setValue'](_0x412ba4,_0x3b19be);else{const _0x320eae=_0x305f11[_0x22704b(0x1af)](),_0xeed05c=(_0x320eae-0x1)/_0x320eae;this['anchor']['x']=this[_0x22704b(0x20d)][_0x22704b(0x409)]['x'],this[_0x22704b(0x409)]['y']=this['_baseSprite'][_0x22704b(0x409)]['y'],this[_0x22704b(0x217)]=this[_0x22704b(0x20d)][_0x22704b(0x217)],this['scale']['x']=this[_0x22704b(0x20d)][_0x22704b(0x330)]['x'],this[_0x22704b(0x330)]['y']=this[_0x22704b(0x20d)][_0x22704b(0x330)]['y'],this['x']=this[_0x22704b(0x20d)]['x'],this['y']=this[_0x22704b(0x20d)]['y'],this['z']=this[_0x22704b(0x20d)]['z'],this['_realX']=this[_0x22704b(0x169)]['_realX'],this[_0x22704b(0x358)]=this[_0x22704b(0x169)][_0x22704b(0x358)],this[_0x22704b(0x190)]=this[_0x22704b(0x169)][_0x22704b(0x2d0)](),this['_jumpHeight']=this['_character'][_0x22704b(0x2e8)]();}}!_0x3b19be&&(this['_smartRushMode']=0x0);},VisuMZ['MovementEffects'][_0x327db2(0x1c4)]=Game_Player[_0x327db2(0x22e)]['reserveTransfer'],Game_Player['prototype']['reserveTransfer']=function(_0x3d5da5,_0x3f3618,_0x1c4e61,_0x33957a,_0x4a65e7){const _0x404db6=_0x327db2;VisuMZ[_0x404db6(0x300)][_0x404db6(0x1c4)][_0x404db6(0x35f)](this,_0x3d5da5,_0x3f3618,_0x1c4e61,_0x33957a,_0x4a65e7),this['endSmartRush']();},Game_Player[_0x327db2(0x324)]=VisuMZ[_0x327db2(0x300)]['Settings'][_0x327db2(0x1d5)][_0x327db2(0x2f2)],Game_Player[_0x327db2(0x3df)]=VisuMZ['MovementEffects'][_0x327db2(0x1b2)]['SmartBlink'][_0x327db2(0x36e)],Game_Player[_0x327db2(0x292)]=VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b2)][_0x327db2(0x1d5)][_0x327db2(0x2ee)]??![],Game_Player[_0x327db2(0x22e)][_0x327db2(0x360)]=function(_0x561a36,_0x5a2c6e,_0x3e79d5,_0x5d353b){const _0x32e9ab=_0x327db2;_0x3e79d5=_0x3e79d5||{'NonLandableRegions':[],'NonLandableTerrainTags':[],'NonPassableRegions':[],'NonPassableTerrainTags':[]},this[_0x32e9ab(0x26a)]=JsonEx['makeDeepCopy'](_0x3e79d5),_0x561a36=this['measureSmartBlinkDistance'](_0x561a36||0x1);if(!this[_0x32e9ab(0x3ee)](_0x561a36))return![];const _0x41cd5a=VisuMZ[_0x32e9ab(0x300)][_0x32e9ab(0x1b2)][_0x32e9ab(0x1d5)];return this[_0x32e9ab(0x3aa)](_0x41cd5a),this[_0x32e9ab(0x426)]=_0x561a36||0x1,this[_0x32e9ab(0x41f)]=_0x5a2c6e||0x1,this[_0x32e9ab(0x262)]=JsonEx[_0x32e9ab(0x429)](_0x5d353b),this[_0x32e9ab(0x1df)](_0x561a36),!![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x1d8)]=function(_0x4ab245){const _0xbc8431=_0x327db2,_0xa11910=this[_0xbc8431(0x26a)],_0xb42e1e=this[_0xbc8431(0x203)](),_0x4fe8df=VisuMZ[_0xbc8431(0x300)][_0xbc8431(0x1b2)][_0xbc8431(0x1d5)];this[_0xbc8431(0x3aa)](_0x4fe8df);const _0x304a61=this[_0xbc8431(0x203)]();let _0x1479d0=0x0,_0x15f9fe=this['x'],_0x5ef62f=this['y'],_0x4adf1f=0x0,_0x55d918=0x0;if([0x1,0x4,0x7][_0xbc8431(0x26f)](_0x304a61))_0x4adf1f=-0x1;if([0x3,0x6,0x9][_0xbc8431(0x26f)](_0x304a61))_0x4adf1f=0x1;if([0x7,0x8,0x9][_0xbc8431(0x26f)](_0x304a61))_0x55d918=-0x1;if([0x1,0x2,0x3][_0xbc8431(0x26f)](_0x304a61))_0x55d918=0x1;for(let _0x19de77=0x1;_0x19de77<=_0x4ab245;_0x19de77++){_0x15f9fe+=_0x4adf1f,_0x5ef62f+=_0x55d918;if(this[_0xbc8431(0x40d)](_0x15f9fe,_0x5ef62f)){if(_0xbc8431(0x21a)==='FYVNn'){const _0x72d228=this[_0xbc8431(0x43a)]()['enabled'];this[_0xbc8431(0x339)]=_0x152c6e['makeDeepCopy'](_0x574661);if(_0xa90551)return;this[_0xbc8431(0x339)][_0xbc8431(0x321)]=_0x72d228;}else break;}if(this[_0xbc8431(0x24f)](_0x15f9fe,_0x5ef62f)){if(_0xbc8431(0x237)!==_0xbc8431(0x237)){const _0x5e3a78=_0xf1e8c2['MovementEffects'][_0xbc8431(0x254)],_0x3f25ca=_0xc5f872[_0xbc8431(0x341)]||'';_0x3f25ca[_0xbc8431(0x2a8)](_0x5e3a78[_0xbc8431(0x463)])&&(this['_smartRush']['enabled']=![]),_0x3f25ca[_0xbc8431(0x2a8)](_0x5e3a78[_0xbc8431(0x298)])&&(this[_0xbc8431(0x2f5)]['NonCrashRegions']=_0x93e893['$1'][_0xbc8431(0x376)](',')['map'](_0x24dc0d=>(_0x11df67(_0x24dc0d)||0x0)[_0xbc8431(0x397)](0x0,0xff)));}else{_0x1479d0=_0x19de77;continue;}}const _0x3a8f0f=$gameMap['regionId'](_0x15f9fe,_0x5ef62f),_0x3bbb2c=$gameMap[_0xbc8431(0x410)](_0x15f9fe,_0x5ef62f);if(_0xa11910[_0xbc8431(0x1cf)][_0xbc8431(0x26f)](_0x3a8f0f))break;if(_0xa11910[_0xbc8431(0x283)]['includes'](_0x3bbb2c))break;if($gameMap[_0xbc8431(0x340)](_0x15f9fe,_0x5ef62f))break;if(_0xa11910['NonLandableRegions'][_0xbc8431(0x26f)](_0x3a8f0f))continue;if(_0xa11910[_0xbc8431(0x44d)][_0xbc8431(0x26f)](_0x3bbb2c))continue;if($gameMap[_0xbc8431(0x17f)](_0x15f9fe,_0x5ef62f))continue;if(!$gameMap[_0xbc8431(0x166)](_0x15f9fe,_0x5ef62f))continue;if(this[_0xbc8431(0x33b)](_0x15f9fe,_0x5ef62f))continue;if(!$gameMap[_0xbc8431(0x451)](_0x15f9fe,_0x5ef62f))continue;if(!Game_Player[_0xbc8431(0x292)]){if(_0xbc8431(0x3dc)!==_0xbc8431(0x3dc))_0x44843b[_0xbc8431(0x300)][_0xbc8431(0x1b8)]['call'](this),this['createDustCloudBasics'](),this[_0xbc8431(0x347)](),this[_0xbc8431(0x1ea)]();else{if(!$gameMap[_0xbc8431(0x1c9)](this['x'],this['y'])&&$gameMap[_0xbc8431(0x1c9)](_0x15f9fe,_0x5ef62f)){if('vqbMn'!=='qSFyC')continue;else for(const _0x282463 of _0x5608dd){_0x282463[_0xbc8431(0x2a8)](_0x36d0b4[_0x5d4351]);const _0x5abf88=_0x50f51a['$1'],_0x421d26=_0x58d341['$2'],_0x38514c=_0x28a4cf['$3'],_0x401d33=_0xbc8431(0x248)[_0xbc8431(0x3c4)](_0x159b2a[_0xbc8431(0x302)](_0x5abf88)),_0x5905fb=_0xbc8431(0x30b)[_0xbc8431(0x3c4)](_0x4d27b6(_0x421d26)||0x0);this[_0xbc8431(0x3b3)][_0x401d33][_0x5905fb][_0xbc8431(0x2dd)]=_0x255377(_0x38514c)[_0xbc8431(0x3f8)]();}}}}_0x1479d0=_0x19de77;}return this[_0xbc8431(0x26d)](_0xb42e1e),_0x1479d0;},Game_Player['prototype'][_0x327db2(0x40d)]=function(_0x3f6a9e,_0x53fc63){return![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x24f)]=function(_0x4a0e8c,_0x49473c){return![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x3ee)]=function(_0x3fcb86){const _0x594089=_0x327db2;if(!$gameMap[_0x594089(0x1da)]())return![];if(this[_0x594089(0x41f)])return![];if(this[_0x594089(0x452)]())return![];if(this['isSmartMoveNonViableState']())return![];if(this[_0x594089(0x395)]())return![];if(this[_0x594089(0x23e)]())return![];return _0x3fcb86>=0x1;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x1df)]=function(){const _0x5210f5=_0x327db2,_0x1eac77=this['_smartBlinkDistance'],_0x593047=this[_0x5210f5(0x203)]();let _0x2e463c=this['x'],_0x17475e=this['y'];if([0x1,0x4,0x7][_0x5210f5(0x26f)](_0x593047))_0x2e463c+=-_0x1eac77;if([0x3,0x6,0x9][_0x5210f5(0x26f)](_0x593047))_0x2e463c+=_0x1eac77;if([0x7,0x8,0x9][_0x5210f5(0x26f)](_0x593047))_0x17475e+=-_0x1eac77;if([0x1,0x2,0x3][_0x5210f5(0x26f)](_0x593047))_0x17475e+=_0x1eac77;this[_0x5210f5(0x1f7)]()[_0x5210f5(0x321)]&&this[_0x5210f5(0x2a9)]();Game_Character['prototype'][_0x5210f5(0x158)][_0x5210f5(0x35f)](this,_0x2e463c,_0x17475e),this[_0x5210f5(0x214)][_0x5210f5(0x35c)](_0x2e463c,_0x17475e,this[_0x5210f5(0x203)]());if(!$gameMap[_0x5210f5(0x437)]())this[_0x5210f5(0x2ff)](_0x2e463c,_0x17475e);this[_0x5210f5(0x3da)](),setTimeout(this['checkEventTriggerHere']['bind'](this,[0x1,0x2]),0x32);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x3da)]=function(){const _0x356af7=_0x327db2,_0x2d6e43=SceneManager[_0x356af7(0x294)][_0x356af7(0x349)];if(_0x2d6e43){const _0x27b6da=this[_0x356af7(0x2da)]()[_0x356af7(0x1f5)](),_0xe604e5=[this]['concat'](_0x27b6da);for(const _0x1cbd68 of _0xe604e5){if('iaOwD'!==_0x356af7(0x40e))return this['isSmartRushing']()||this[_0x356af7(0x3dd)]();else{const _0x1fe211=_0x2d6e43['findTargetSprite'](_0x1cbd68);if(_0x1fe211){if(_0x356af7(0x3d5)===_0x356af7(0x3d5)){const _0x4f0924=Game_Player['SMART_BLINK_FILTER_DURATION'],_0x2c99b8=Game_Player[_0x356af7(0x3df)];_0x1fe211[_0x356af7(0x37d)](_0x4f0924,_0x2c99b8);}else{if(this[_0x356af7(0x28e)]===_0x528e68)this[_0x356af7(0x19d)]();return this[_0x356af7(0x28e)][_0x356af7(0x321)];}}}}}},Game_Player[_0x327db2(0x22e)][_0x327db2(0x27d)]=function(){const _0x19ef2b=_0x327db2;if(this['_smartBlinkCooldown']){if(_0x19ef2b(0x390)===_0x19ef2b(0x414))return this[_0x19ef2b(0x2a3)]['duration']['regions'][_0x1a0ce3];else this[_0x19ef2b(0x41f)]--;}},Game_Player[_0x327db2(0x22e)][_0x327db2(0x1d2)]=function(_0x463056,_0x527042,_0x4466f4,_0x1b2651){const _0x462547=_0x327db2;_0x4466f4=_0x4466f4||{'NonLandableRegions':[],'NonLandableTerrainTags':[],'NonPassableRegions':[],'NonPassableTerrainTags':[]},this[_0x462547(0x1ec)]=JsonEx[_0x462547(0x429)](_0x4466f4);if(!this[_0x462547(0x2b8)]())return![];const _0x4cdde6=VisuMZ[_0x462547(0x300)][_0x462547(0x1b2)][_0x462547(0x204)];return this[_0x462547(0x3aa)](_0x4cdde6),_0x463056=this[_0x462547(0x2ad)](_0x463056),this['_smartJumpMode']=!![],this['_smartJumpCooldown']=_0x527042||0x1,this[_0x462547(0x233)]=JsonEx[_0x462547(0x429)](_0x1b2651),this['startSmartJump'](_0x463056),!![];},Game_Player[_0x327db2(0x22e)]['canSmartJump']=function(){const _0x2f8f61=_0x327db2;if(!$gameMap[_0x2f8f61(0x3fb)]())return![];if(this[_0x2f8f61(0x1db)])return![];if(this['isSmartMoving']())return![];if(this[_0x2f8f61(0x464)]())return![];if(this[_0x2f8f61(0x395)]())return![];if(this[_0x2f8f61(0x23e)]())return![];return!![];},Game_Player[_0x327db2(0x22e)]['isSmartJumping']=function(){const _0x15ff37=_0x327db2;return this[_0x15ff37(0x1d4)];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x2ad)]=function(_0x4a2759){const _0x3c7ee1=_0x327db2,_0xbb5ac1=this[_0x3c7ee1(0x1ec)],_0x565033=this[_0x3c7ee1(0x203)]();let _0x550d63=0x0,_0x456862=this['x'],_0x52fdfb=this['y'],_0x950ba=0x0,_0x2a5e8c=0x0;if([0x1,0x4,0x7]['includes'](_0x565033))_0x950ba=-0x1;if([0x3,0x6,0x9][_0x3c7ee1(0x26f)](_0x565033))_0x950ba=0x1;if([0x7,0x8,0x9][_0x3c7ee1(0x26f)](_0x565033))_0x2a5e8c=-0x1;if([0x1,0x2,0x3][_0x3c7ee1(0x26f)](_0x565033))_0x2a5e8c=0x1;for(let _0x144a65=0x1;_0x144a65<=_0x4a2759;_0x144a65++){_0x456862+=_0x950ba,_0x52fdfb+=_0x2a5e8c;if(this[_0x3c7ee1(0x15f)](_0x456862,_0x52fdfb))break;if(this[_0x3c7ee1(0x156)](_0x456862,_0x52fdfb)){_0x550d63=_0x144a65;continue;}if($gameMap[_0x3c7ee1(0x3b8)](_0x456862,_0x52fdfb))break;const _0x26e532=$gameMap['regionId'](_0x456862,_0x52fdfb),_0x25e2aa=$gameMap['terrainTag'](_0x456862,_0x52fdfb);if(_0xbb5ac1[_0x3c7ee1(0x1cf)][_0x3c7ee1(0x26f)](_0x26e532))break;if(_0xbb5ac1['NonPassableTerrainTags']['includes'](_0x25e2aa))break;if($gameMap['isTileSmartJumpNonPassable'](_0x456862,_0x52fdfb))break;if(_0xbb5ac1['NonLandableRegions'][_0x3c7ee1(0x26f)](_0x26e532))continue;if(_0xbb5ac1[_0x3c7ee1(0x44d)][_0x3c7ee1(0x26f)](_0x25e2aa))continue;if($gameMap[_0x3c7ee1(0x2f7)](_0x456862,_0x52fdfb))continue;if(!$gameMap[_0x3c7ee1(0x166)](_0x456862,_0x52fdfb))continue;if(this[_0x3c7ee1(0x33b)](_0x456862,_0x52fdfb))continue;if(!$gameMap[_0x3c7ee1(0x451)](_0x456862,_0x52fdfb))continue;if(!$gameMap[_0x3c7ee1(0x14f)](_0x456862,_0x52fdfb,_0x550d63))continue;_0x550d63=_0x144a65;}return _0x550d63;},Game_Player['prototype'][_0x327db2(0x15f)]=function(_0x59a494,_0x4a71df){const _0x37696b=_0x327db2;if(!$gameMap[_0x37696b(0x1c9)](this['x'],this['y'])&&$gameMap[_0x37696b(0x1c9)](_0x59a494,_0x4a71df)){if(_0x37696b(0x30f)===_0x37696b(0x1cd)){if(!_0x4f09bc)return;if(_0x3325e1[_0x37696b(0x14e)])return;const _0x4e9585=this[_0x37696b(0x2e5)](_0x3d62b9);this[_0x37696b(0x26d)](_0x4e9585);}else return!![];}return![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x156)]=function(_0x2ec27f,_0x5b8aec){const _0x44a6d4=_0x327db2;if(!$gameMap[_0x44a6d4(0x1c9)](this['x'],this['y'])&&$gameMap[_0x44a6d4(0x1c9)](_0x2ec27f,_0x5b8aec))return![];return![];},Game_Player[_0x327db2(0x22e)][_0x327db2(0x20f)]=function(_0x51706c){const _0xdf1dae=_0x327db2,_0x193e99=this['direction']();let _0x5e327c=0x0,_0x2991f0=0x0;if([0x1,0x4,0x7]['includes'](_0x193e99))_0x5e327c+=-_0x51706c;if([0x3,0x6,0x9]['includes'](_0x193e99))_0x5e327c+=_0x51706c;if([0x7,0x8,0x9][_0xdf1dae(0x26f)](_0x193e99))_0x2991f0+=-_0x51706c;if([0x1,0x2,0x3][_0xdf1dae(0x26f)](_0x193e99))_0x2991f0+=_0x51706c;_0x2991f0=this[_0xdf1dae(0x1e3)](_0x5e327c,_0x2991f0);const _0x1bcfff=this[_0xdf1dae(0x203)]();this[_0xdf1dae(0x1b4)](_0x5e327c,_0x2991f0),this[_0xdf1dae(0x26d)](_0x1bcfff);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x1e3)]=function(_0x52797a,_0x274119){const _0x582c1f=_0x327db2;if(!$gameMap['isTileSmartHeightJumpRegion'](this['x'],this['y']))return _0x274119;if($gameMap[_0x582c1f(0x23b)](this['x'],this['y']))return _0x274119;let _0x12ba1d=this['x']+_0x52797a,_0x267b37=this['y']+_0x274119;if(!$gameMap[_0x582c1f(0x2a0)](_0x12ba1d,_0x267b37))return _0x274119;const _0x538ea4=this[_0x582c1f(0x455)]();if($gameMap[_0x582c1f(0x23b)](_0x538ea4))return _0x274119;let _0x29d085=$gameMap[_0x582c1f(0x455)](_0x12ba1d,_0x267b37);if(!$gameMap[_0x582c1f(0x23b)](_0x29d085))return _0x274119;const _0x3744cf=this['direction']();if(_0x3744cf===0x2)return _0x274119;if(_0x3744cf===0x8)return _0x274119;_0x274119+=_0x538ea4-_0x29d085;for(;;){const _0x280b96=_0x12ba1d,_0x286304=this['y']+_0x274119,_0x53b3dc=$gameMap[_0x582c1f(0x455)](_0x280b96,_0x286304);if($gameMap['isTileSmartHeightJumpRegion'](_0x280b96,_0x286304)&&!$gameMap[_0x582c1f(0x23b)](_0x53b3dc)){if(_0x582c1f(0x235)!==_0x582c1f(0x25c)){_0x274119--;continue;}else _0x14bb61[_0x582c1f(0x300)][_0x582c1f(0x284)][_0x582c1f(0x35f)](this,_0xc94977,_0x28f85e);}if($gameMap[_0x582c1f(0x451)](_0x280b96,_0x286304))break;_0x274119--;if(_0x274119<=0x0)break;}return _0x274119;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x279)]=function(){const _0x615b99=_0x327db2;if(this[_0x615b99(0x276)]())return;this[_0x615b99(0x1d4)]=![];if(this[_0x615b99(0x35a)]()){if('vFyQB'!==_0x615b99(0x342)){let _0x239c49=_0xb574f6[_0x615b99(0x300)][_0x615b99(0x33c)][_0x615b99(0x35f)](this);if(this['_parallaxZero'])_0x239c49=_0xcbebad[_0x615b99(0x165)](_0x239c49);return _0x239c49;}else{let _0x4b62df=Math[_0x615b99(0x43c)](Math['ceil'](this[_0x615b99(0x439)]/0x2),0x1);while(_0x4b62df--)this[_0x615b99(0x19e)]();}}if(this[_0x615b99(0x238)]())this['playFootstepSound']();setTimeout(this[_0x615b99(0x25a)]['bind'](this,[0x1,0x2]),0x32);},Game_Player[_0x327db2(0x22e)]['updateSmartJumpCooldown']=function(){const _0x586ee0=_0x327db2;this[_0x586ee0(0x1db)]&&this[_0x586ee0(0x1db)]--;},Game_Player[_0x327db2(0x22e)][_0x327db2(0x1f7)]=function(){const _0x157742=_0x327db2;return this[_0x157742(0x262)]||{'enabled':![]};},Game_Player[_0x327db2(0x22e)][_0x327db2(0x15e)]=function(){const _0x4516aa=_0x327db2;return this[_0x4516aa(0x233)]||{'enabled':![]};},Game_Player['prototype'][_0x327db2(0x36d)]=function(){const _0x5b22e=_0x327db2;return this[_0x5b22e(0x185)]||{'enabled':![]};},Game_Player[_0x327db2(0x22e)]['motionTrailData']=function(){const _0x125028=_0x327db2;if(this[_0x125028(0x16f)]()&&this['smartRushMotionTrailData']()[_0x125028(0x321)]){if(_0x125028(0x35e)===_0x125028(0x326))this[_0x125028(0x41f)]&&this[_0x125028(0x41f)]--;else return this[_0x125028(0x36d)]();}else{if(this[_0x125028(0x3dd)]()&&this[_0x125028(0x15e)]()[_0x125028(0x321)]){if('tZDLq'!==_0x125028(0x40a)){const _0x165629=_0x55fe31[_0x125028(0x300)]['Settings'][_0x125028(0x3c6)];this[_0x125028(0x33a)]={'enabled':_0x165629[_0x125028(0x3a7)],'filename':_0x165629[_0x125028(0x2dd)]||'','color':_0x165629[_0x125028(0x313)]||_0x125028(0x18b),'radius':_0x165629['radius']||0x18,'fullness':_0x165629[_0x125028(0x373)]||0x0,'wholeDuration':_0x165629[_0x125028(0x427)]||0x14,'startOpacity':_0x165629[_0x125028(0x3b2)]||0xc0,'startScale':_0x165629[_0x125028(0x27e)]||0.2};}else return this[_0x125028(0x15e)]();}}return Game_Character[_0x125028(0x22e)]['motionTrailData']['call'](this);},Game_Player[_0x327db2(0x22e)][_0x327db2(0x2a9)]=function(){const _0x2a54cf=_0x327db2,_0xe1fba8=SceneManager[_0x2a54cf(0x294)][_0x2a54cf(0x349)];if(!_0xe1fba8)return;const _0x25abc9=[this]['concat'](this[_0x2a54cf(0x2da)]()[_0x2a54cf(0x24a)]());for(const _0x39e8ad of _0x25abc9){if(!_0x39e8ad)continue;oldData=JSON[_0x2a54cf(0x223)](JSON[_0x2a54cf(0x2b4)](_0x39e8ad[_0x2a54cf(0x339)]||{'enabled':![]})),_0x39e8ad[_0x2a54cf(0x42a)](this['smartBlinkMotionTrailData']());const _0x4eaf2f=_0xe1fba8['findTargetSprite'](_0x39e8ad);if(_0x4eaf2f){if(_0x2a54cf(0x179)!==_0x2a54cf(0x24b))_0x4eaf2f['createMotionTrailSprite']();else{this[_0x2a54cf(0x175)]=this[_0x2a54cf(0x175)]||[];for(const _0x569030 of this[_0x2a54cf(0x175)]){_0x46eab2[_0x2a54cf(0x400)](_0x569030,_0x3350ce);}!_0x2e45fa&&(this[_0x2a54cf(0x173)]=0x0);}}_0x39e8ad[_0x2a54cf(0x42a)](oldData);}},VisuMZ[_0x327db2(0x300)][_0x327db2(0x44c)]=Game_Follower['prototype']['initialize'],Game_Follower[_0x327db2(0x22e)]['initialize']=function(_0x28cd02){const _0x291368=_0x327db2;VisuMZ[_0x291368(0x300)][_0x291368(0x44c)][_0x291368(0x35f)](this,_0x28cd02),this['randomizeAnimationCount']();},VisuMZ['MovementEffects'][_0x327db2(0x258)]=Game_CharacterBase[_0x327db2(0x22e)]['straighten'],Game_CharacterBase[_0x327db2(0x22e)]['straighten']=function(){const _0xd32d7d=_0x327db2;VisuMZ[_0xd32d7d(0x300)][_0xd32d7d(0x258)]['call'](this),this[_0xd32d7d(0x272)]();},Game_CharacterBase['prototype'][_0x327db2(0x272)]=function(){},Game_Follower[_0x327db2(0x22e)][_0x327db2(0x272)]=function(){const _0xaf3704=_0x327db2;this[_0xaf3704(0x1be)]=Math[_0xaf3704(0x172)](0xd);},Game_Follower['prototype'][_0x327db2(0x33d)]=function(){const _0x43dd1c=_0x327db2;if($gamePlayer[_0x43dd1c(0x257)])return;Game_Character[_0x43dd1c(0x22e)][_0x43dd1c(0x33d)][_0x43dd1c(0x35f)](this);},Game_Follower['prototype'][_0x327db2(0x37c)]=function(){const _0x47bb29=_0x327db2;return this[_0x47bb29(0x1a7)]()?this[_0x47bb29(0x1a7)]()[_0x47bb29(0x37c)]():Game_Character['prototype']['footstepsData'][_0x47bb29(0x35f)](this);},Game_Follower[_0x327db2(0x22e)]['footprintsData']=function(){const _0x1d9e07=_0x327db2;return this['actor']()?this[_0x1d9e07(0x1a7)]()[_0x1d9e07(0x285)]():Game_Character[_0x1d9e07(0x22e)]['footprintsData'][_0x1d9e07(0x35f)](this);},Game_Follower[_0x327db2(0x22e)][_0x327db2(0x1f7)]=function(){const _0x334c1a=_0x327db2;return $gamePlayer[_0x334c1a(0x1f7)]();},Game_Follower['prototype'][_0x327db2(0x15e)]=function(){const _0xc5e655=_0x327db2;return $gamePlayer[_0xc5e655(0x15e)]();},Game_Follower[_0x327db2(0x22e)][_0x327db2(0x36d)]=function(){const _0x37c2a0=_0x327db2;return $gamePlayer[_0x37c2a0(0x36d)]();},Game_Follower[_0x327db2(0x22e)][_0x327db2(0x43a)]=function(){const _0x101fab=_0x327db2;if($gamePlayer['isSmartRushing']()&&this['smartRushMotionTrailData']()[_0x101fab(0x321)])return this[_0x101fab(0x36d)]();else{if($gamePlayer[_0x101fab(0x3dd)]()&&this[_0x101fab(0x15e)]()[_0x101fab(0x321)])return this[_0x101fab(0x15e)]();}return Game_Character[_0x101fab(0x22e)][_0x101fab(0x43a)][_0x101fab(0x35f)](this);},VisuMZ[_0x327db2(0x300)]['Game_Event_clearPageSettings']=Game_Event[_0x327db2(0x22e)][_0x327db2(0x304)],Game_Event[_0x327db2(0x22e)][_0x327db2(0x304)]=function(){const _0x50f560=_0x327db2;VisuMZ[_0x50f560(0x300)][_0x50f560(0x2ae)][_0x50f560(0x35f)](this),this['initMovementEffectsVariables']();},VisuMZ[_0x327db2(0x300)][_0x327db2(0x2bb)]=Game_Event['prototype'][_0x327db2(0x1c8)],Game_Event[_0x327db2(0x22e)][_0x327db2(0x1c8)]=function(){const _0xdf3c80=_0x327db2;VisuMZ['MovementEffects']['Game_Event_setupPageSettings']['call'](this),this[_0xdf3c80(0x255)]();},Game_Event[_0x327db2(0x22e)][_0x327db2(0x255)]=function(){const _0x42f4ae=_0x327db2;if(!this[_0x42f4ae(0x1fd)]())return;this[_0x42f4ae(0x391)](),this[_0x42f4ae(0x380)](),this[_0x42f4ae(0x1bf)]();},Game_Event[_0x327db2(0x22e)][_0x327db2(0x380)]=function(){const _0x2f6e1f=_0x327db2,_0x3ac5ff=this['event']()['note'];if(_0x3ac5ff==='')return;this[_0x2f6e1f(0x3b6)](_0x3ac5ff);},Game_Event[_0x327db2(0x22e)][_0x327db2(0x1bf)]=function(){const _0x156666=_0x327db2;if(!this[_0x156666(0x318)]())return;const _0x44b5e9=this['list']();let _0x1bc50f='';for(const _0x39ca6e of _0x44b5e9){if('OoqGl'!==_0x156666(0x19c)){if(this[_0x156666(0x420)]===_0x3ca2c3)this[_0x156666(0x36a)]();return this[_0x156666(0x420)]['enabled'];}else{if([0x6c,0x198][_0x156666(0x26f)](_0x39ca6e[_0x156666(0x374)])){if(_0x1bc50f!=='')_0x1bc50f+='\x0a';_0x1bc50f+=_0x39ca6e[_0x156666(0x462)][0x0];}}}this['checkMovementEffectsStringTags'](_0x1bc50f);},Game_Event[_0x327db2(0x22e)][_0x327db2(0x391)]=function(){const _0x483cad=_0x327db2;{if(_0x483cad(0x188)===_0x483cad(0x188)){const _0x15cf70=VisuMZ[_0x483cad(0x300)][_0x483cad(0x1b2)][_0x483cad(0x265)];this[_0x483cad(0x2aa)]={'enabled':_0x15cf70['eventEnabled'],'volumeRate':_0x15cf70[_0x483cad(0x244)],'pitchRate':_0x15cf70[_0x483cad(0x398)],'soundFrames':_0x15cf70[_0x483cad(0x41a)][_0x483cad(0x27b)]()};}else{_0x3c1220[_0x483cad(0x300)]['ConfigManager_applyData'][_0x483cad(0x35f)](this,_0x33a3ab);for(const _0xae4036 of _0x50d85d[_0x483cad(0x300)][_0x483cad(0x159)]){this[_0x483cad(0x419)](_0x5b2069,_0xae4036,!![]);}}}{if(_0x483cad(0x25e)!==_0x483cad(0x30a)){const _0x579c58=VisuMZ['MovementEffects']['Settings']['Footprints'];this['_footprintsData']={'enabled':!![],'dir1':JSON[_0x483cad(0x223)](JSON[_0x483cad(0x2b4)](_0x579c58[_0x483cad(0x180)])),'dir2':JSON[_0x483cad(0x223)](JSON['stringify'](_0x579c58['dir2'])),'dir3':JSON[_0x483cad(0x223)](JSON[_0x483cad(0x2b4)](_0x579c58['dir3'])),'dir4':JSON[_0x483cad(0x223)](JSON[_0x483cad(0x2b4)](_0x579c58[_0x483cad(0x199)])),'dir6':JSON[_0x483cad(0x223)](JSON[_0x483cad(0x2b4)](_0x579c58[_0x483cad(0x1c1)])),'dir7':JSON['parse'](JSON[_0x483cad(0x2b4)](_0x579c58[_0x483cad(0x1c3)])),'dir8':JSON[_0x483cad(0x223)](JSON[_0x483cad(0x2b4)](_0x579c58[_0x483cad(0x3a0)])),'dir9':JSON[_0x483cad(0x223)](JSON[_0x483cad(0x2b4)](_0x579c58['dir9']))};}else{const _0x92d723=_0x365041['tileWidth'](),_0x35e713=_0x503ee9[_0x483cad(0x1af)]();this['x']=_0x19251a[_0x483cad(0x165)](_0x33e0bc['adjustX'](this[_0x483cad(0x1c5)])*_0x92d723+_0x92d723/0x2),this['x']+=this[_0x483cad(0x285)]()[_0x483cad(0x34b)]+this['_followerOffsetX'],this['y']=_0x49e890[_0x483cad(0x165)](_0x2f6d6c[_0x483cad(0x3f5)](this[_0x483cad(0x358)])*_0x35e713+_0x35e713),this['y']+=this['footprintsData']()[_0x483cad(0x194)]+this[_0x483cad(0x406)],this['y']-=this[_0x483cad(0x190)];}}this['_smartJumpRestriction']={'nonLand':![],'nonPass':![]};},Game_Event['prototype'][_0x327db2(0x3b6)]=function(_0xd79378){const _0x2cf05b=_0x327db2,_0x378a98=VisuMZ[_0x2cf05b(0x300)][_0x2cf05b(0x254)];if(!_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x2cf05b(0x2a4)]))return;if(_0xd79378[_0x2cf05b(0x2a8)](_0x378a98['YesFootstepsEvent']))this['_footsteps'][_0x2cf05b(0x321)]=!![];else{if(_0xd79378[_0x2cf05b(0x2a8)](_0x378a98['NoFootstepsEvent'])){if('nGyUR'!=='nGyUR'){const _0x105cc7=_0x177d38['findTargetSprite'](this);_0x105cc7&&_0x105cc7[_0x2cf05b(0x44e)]();}else this[_0x2cf05b(0x2aa)][_0x2cf05b(0x321)]=![];}}if(_0xd79378[_0x2cf05b(0x2a8)](_0x378a98['FootstepsVolRate'])){if('KCluz'!=='wGWGP')this[_0x2cf05b(0x2aa)]['volumeRate']=Number(RegExp['$1'])*0.01;else return![];}if(_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x2cf05b(0x222)])){if(_0x2cf05b(0x205)!==_0x2cf05b(0x343))this[_0x2cf05b(0x2aa)][_0x2cf05b(0x3d7)]=Number(RegExp['$1'])*0.01;else{_0x4634f9=_0x46ac2a[_0x2cf05b(0x174)]()[_0x2cf05b(0x3f8)]();switch(_0x5b9554){case'down':return 0x2;case _0x2cf05b(0x3d8):return 0x4;case _0x2cf05b(0x34d):return 0x6;case'up':return 0x8;case'lower\x20left':return 0x1;case'lower\x20right':return 0x3;case'upper\x20left':return 0x7;case _0x2cf05b(0x3d9):return 0x9;}return _0x1b0541(_0x59a1cb)||0x0;}}_0xd79378[_0x2cf05b(0x2a8)](_0x378a98['FootstepsFrames'])&&(this[_0x2cf05b(0x2aa)]['soundFrames']=String(RegExp['$1'])[_0x2cf05b(0x376)](',')['map'](_0x52ce8b=>Number(_0x52ce8b)||0x0));if(_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x2cf05b(0x1ce)]))this[_0x2cf05b(0x3b3)]['enabled']=!![];else{if(_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x2cf05b(0x3e7)])){if(_0x2cf05b(0x45b)!=='nPnuT'){const _0x2e0b88=_0x1a8e79(_0xe20bd6['$1']);_0x2e0b88!==_0x23b7fc[_0x39d910]['version']&&(_0x1ec0ab(_0x2cf05b(0x3e8)[_0x2cf05b(0x3c4)](_0x14478c,_0x2e0b88)),_0x59b821[_0x2cf05b(0x20e)]());}else this[_0x2cf05b(0x3b3)]['enabled']=![];}}{if(_0x2cf05b(0x2fe)!==_0x2cf05b(0x2fe)){if(_0x13df43>=0x1)return![];}else{const _0x24e433='FootprintsFilename',_0x5099c7=_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x24e433]);if(_0x5099c7)for(const _0xfca620 of _0x5099c7){if(_0x2cf05b(0x22f)==='IDoIj')this[_0x2cf05b(0x2a3)]['allowed']['regions']=_0x35a445['$1'][_0x2cf05b(0x376)](',')[_0x2cf05b(0x386)](_0x4f3d57=>(_0x1fdc49(_0x4f3d57)||0x0)['clamp'](0x0,0xff));else{_0xfca620[_0x2cf05b(0x2a8)](_0x378a98[_0x24e433]);const _0x51b4cb=RegExp['$1'],_0x1289d3=RegExp['$2'],_0x4937ea=RegExp['$3'],_0x5fd333=_0x2cf05b(0x248)[_0x2cf05b(0x3c4)](TextManager[_0x2cf05b(0x302)](_0x51b4cb)),_0x381d21=_0x2cf05b(0x30b)['format'](Number(_0x1289d3)||0x0);this[_0x2cf05b(0x3b3)][_0x5fd333][_0x381d21][_0x2cf05b(0x2dd)]=String(_0x4937ea)[_0x2cf05b(0x3f8)]();}}}}{if(_0x2cf05b(0x3ce)==='ufEbx'){const _0xf51a3b=_0x2cf05b(0x3af),_0x3d2880=_0xd79378['match'](_0x378a98[_0xf51a3b]);if(_0x3d2880){if(_0x2cf05b(0x18d)!==_0x2cf05b(0x274))for(const _0x45b4a9 of _0x3d2880){_0x45b4a9[_0x2cf05b(0x2a8)](_0x378a98[_0xf51a3b]);const _0x5d87b4=RegExp['$1'],_0x2529a9=RegExp['$2'],_0x74d58=RegExp['$3'],_0x2b452e=_0x2cf05b(0x248)[_0x2cf05b(0x3c4)](TextManager[_0x2cf05b(0x302)](_0x5d87b4)),_0x330e27='pattern%1'[_0x2cf05b(0x3c4)](Number(_0x2529a9)||0x0);this[_0x2cf05b(0x3b3)][_0x2b452e][_0x330e27]['width']=Number(_0x74d58)||0x1;}else{let _0x39f600=_0x236839[_0x2cf05b(0x300)][_0x2cf05b(0x242)][_0x2cf05b(0x35f)](this);return this[_0x2cf05b(0x18c)]()&&(_0x39f600*=_0x50e682['zoomScale']()),_0x39f600;}}}else _0x175b97[_0x2cf05b(0x300)][_0x2cf05b(0x456)][_0x2cf05b(0x35f)](this,_0x51ce12);}{if(_0x2cf05b(0x453)!==_0x2cf05b(0x453))return(this[_0x2cf05b(0x22a)]!==this[_0x2cf05b(0x1c5)]||this['_lastSmoothScrollY']!==this[_0x2cf05b(0x358)])&&(this['_wasEventScrolling']=![],this['_lastSmoothScrollX']=this[_0x2cf05b(0x1c5)],this[_0x2cf05b(0x3a5)]=this[_0x2cf05b(0x358)]),!this[_0x2cf05b(0x15a)];else{const _0x5ef360=_0x2cf05b(0x382),_0x225d14=_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x5ef360]);if(_0x225d14)for(const _0x4cfd89 of _0x225d14){if(_0x2cf05b(0x317)!==_0x2cf05b(0x317))this[_0x2cf05b(0x3f7)][_0x2cf05b(0x3c8)](_0x1de1af),this[_0x2cf05b(0x3a1)]['remove'](_0x119b1d);else{_0x4cfd89[_0x2cf05b(0x2a8)](_0x378a98[_0x5ef360]);const _0xae9e09=RegExp['$1'],_0x5a2755=RegExp['$2'],_0x743590=RegExp['$3'],_0x361542=_0x2cf05b(0x248)[_0x2cf05b(0x3c4)](TextManager[_0x2cf05b(0x302)](_0xae9e09)),_0xc0183d=_0x2cf05b(0x30b)[_0x2cf05b(0x3c4)](Number(_0x5a2755)||0x0);this[_0x2cf05b(0x3b3)][_0x361542][_0xc0183d][_0x2cf05b(0x438)]=Number(_0x743590)||0x1;}}}}{if(_0x2cf05b(0x23d)!==_0x2cf05b(0x447)){const _0x376a91=_0x2cf05b(0x23f),_0x2201b9=_0xd79378[_0x2cf05b(0x2a8)](_0x378a98[_0x376a91]);if(_0x2201b9)for(const _0x254e09 of _0x2201b9){_0x254e09[_0x2cf05b(0x2a8)](_0x378a98[_0x376a91]);const _0x31ac9d=RegExp['$1'],_0x3581b5=RegExp['$2'],_0x5df74f=RegExp['$3'],_0x120a45=_0x2cf05b(0x248)[_0x2cf05b(0x3c4)](TextManager[_0x2cf05b(0x302)](_0x31ac9d)),_0x31daf1=_0x2cf05b(0x30b)[_0x2cf05b(0x3c4)](Number(_0x3581b5)||0x0),_0x34afd4=_0x5df74f[_0x2cf05b(0x376)](',')['map'](_0xea4530=>Number(_0xea4530)||0x0);this[_0x2cf05b(0x3b3)][_0x120a45][_0x31daf1]['offsetX']=_0x34afd4[0x0]||0x0,this[_0x2cf05b(0x3b3)][_0x120a45][_0x31daf1]['offsetY']=_0x34afd4[0x1]||0x0;}}else this['_smartJumpCooldown']&&this[_0x2cf05b(0x1db)]--;}_0xd79378['match'](_0x378a98['SmartJumpNonLandEvent'])&&(this[_0x2cf05b(0x460)][_0x2cf05b(0x1a8)]=!![]),_0xd79378['match'](_0x378a98[_0x2cf05b(0x224)])&&(this[_0x2cf05b(0x460)][_0x2cf05b(0x35d)]=!![]);},Game_Event['prototype']['footstepsData']=function(){const _0xa6ec9e=_0x327db2;return this[_0xa6ec9e(0x2aa)]===undefined&&this[_0xa6ec9e(0x255)](),this[_0xa6ec9e(0x2aa)];},Game_Event['prototype'][_0x327db2(0x285)]=function(){const _0x362a7c=_0x327db2;if(this['_footprintsData']===undefined){if('WxXtm'===_0x362a7c(0x192))this[_0x362a7c(0x255)]();else{if(!_0x4d0250['SMART_RUSH_SHAKE_ENABLED'])return![];const _0x1876fd=this[_0x362a7c(0x203)](),_0x16f180=this['x'],_0x3430d5=this['y'];return _0x557880[_0x362a7c(0x41e)](_0x16f180,_0x3430d5,_0x1876fd);}}return this[_0x362a7c(0x3b3)];},Game_Event[_0x327db2(0x22e)][_0x327db2(0x458)]=function(){const _0x1eeb66=_0x327db2;if(this[_0x1eeb66(0x460)]===undefined)this[_0x1eeb66(0x255)]();return this['_smartJumpRestriction']['nonLand'];},Game_Event[_0x327db2(0x22e)][_0x327db2(0x27f)]=function(){const _0x41c8cd=_0x327db2;if(this[_0x41c8cd(0x460)]===undefined)this[_0x41c8cd(0x255)]();return this['_smartJumpRestriction']['nonPass'];},VisuMZ[_0x327db2(0x300)][_0x327db2(0x3ff)]=Game_Interpreter[_0x327db2(0x22e)][_0x327db2(0x404)],Game_Interpreter[_0x327db2(0x22e)][_0x327db2(0x404)]=function(){const _0x534d62=_0x327db2;if(this[_0x534d62(0x39f)]===_0x534d62(0x360)){if('oxAFm'==='oxAFm'){if($gamePlayer[_0x534d62(0x365)]())return!![];this[_0x534d62(0x39f)]='';}else this[_0x534d62(0x413)]();}else{if(this[_0x534d62(0x39f)]==='smartJump'){if(_0x534d62(0x209)===_0x534d62(0x388)){const _0x106310=_0x5a78b7['MovementEffectsOptions'][_0x534d62(0x2cc)],_0x3ab38f=_0x534d62(0x21c);this[_0x534d62(0x3d1)](_0x106310,_0x3ab38f);}else{if($gamePlayer[_0x534d62(0x3dd)]()){if(_0x534d62(0x2b5)!==_0x534d62(0x2b5)){const _0x1bf6a4=_0x325224[_0x534d62(0x273)](_0x3b090e,_0x46312e,_0x5ee447);if(_0x48e1b9[_0x534d62(0x26f)](_0x1bf6a4))return!![];}else return!![];}this[_0x534d62(0x39f)]='';}}else{if(this[_0x534d62(0x39f)]===_0x534d62(0x1e6)){if(_0x534d62(0x280)===_0x534d62(0x41b))for(const _0x87a4cb of _0x4e7522){_0x87a4cb[_0x534d62(0x2a8)](_0xb0465f[_0x534d62(0x2fd)]);const _0x544096=_0x532a00(_0x3397cc['$1'])[_0x534d62(0x397)](0x0,0xff),_0x3ea3d7=_0x25cfdd[_0x534d62(0x43c)](0x1,_0x1e5fe7(_0x1ba727['$2']));this[_0x534d62(0x2a3)][_0x534d62(0x2e2)]['terrainTags'][_0x544096]=_0x3ea3d7;}else{if($gamePlayer[_0x534d62(0x16f)]())return!![];this[_0x534d62(0x39f)]='';}}}}return VisuMZ['MovementEffects'][_0x534d62(0x3ff)]['call'](this);},VisuMZ['MovementEffects'][_0x327db2(0x456)]=Sprite_Character[_0x327db2(0x22e)][_0x327db2(0x241)],Sprite_Character[_0x327db2(0x22e)][_0x327db2(0x241)]=function(_0x1aa55e){const _0x523c0e=_0x327db2;VisuMZ[_0x523c0e(0x300)][_0x523c0e(0x456)][_0x523c0e(0x35f)](this,_0x1aa55e);},VisuMZ['MovementEffects'][_0x327db2(0x252)]=Sprite_Character[_0x327db2(0x22e)]['update'],Sprite_Character[_0x327db2(0x22e)][_0x327db2(0x151)]=function(){const _0x10c8b8=_0x327db2;VisuMZ['MovementEffects'][_0x10c8b8(0x252)]['call'](this),this[_0x10c8b8(0x422)](),this[_0x10c8b8(0x2e9)]();},Sprite_Character['prototype']['createMotionBlurMovementEffectsFilter']=function(){const _0xf2feef=_0x327db2;if(!PIXI['filters'][_0xf2feef(0x2c7)])return;if(this[_0xf2feef(0x45d)])return;this[_0xf2feef(0x45d)]=new PIXI[(_0xf2feef(0x243))][(_0xf2feef(0x2c7))](),this[_0xf2feef(0x15c)]=0x0,this[_0xf2feef(0x26b)]=0x0,this[_0xf2feef(0x243)]=this[_0xf2feef(0x243)]||[],this[_0xf2feef(0x243)]['push'](this[_0xf2feef(0x45d)]);},Sprite_Character['prototype'][_0x327db2(0x37d)]=function(_0x3a8479,_0x13b4bf){const _0x196c1d=_0x327db2;!this['_motionBlurMovementEffectsFilter']&&(_0x196c1d(0x1c7)===_0x196c1d(0x1c7)?this[_0x196c1d(0x3bd)]():this[_0x196c1d(0x28e)][_0x196c1d(0x44d)]=_0x400da5['$1']['split'](',')['map'](_0x2266a0=>(_0x81cf50(_0x2266a0)||0x0)[_0x196c1d(0x397)](0x0,0x7)));if(!this[_0x196c1d(0x45d)])return;this[_0x196c1d(0x15c)]=_0x3a8479,this[_0x196c1d(0x26b)]=_0x13b4bf;},Sprite_Character['prototype'][_0x327db2(0x31c)]=function(){const _0x1ec928=_0x327db2;if(!this[_0x1ec928(0x169)])return![];if(this[_0x1ec928(0x169)]!==$gamePlayer&&this[_0x1ec928(0x169)][_0x1ec928(0x33f)]!==Game_Follower)return![];return $gamePlayer[_0x1ec928(0x16f)]();},Sprite_Character[_0x327db2(0x22e)]['updateMotionBlurEffectFilter']=function(){const _0x1356e8=_0x327db2;let _0x3d3afa=this[_0x1356e8(0x26b)];if(this['isPlayerSmartRushing']()){if(_0x1356e8(0x1f4)===_0x1356e8(0x461)){const _0x23692b=_0x316367[_0x1356e8(0x300)]['Settings'][_0x1356e8(0x265)];this[_0x1356e8(0x2aa)]={'enabled':_0x23692b['eventEnabled'],'volumeRate':_0x23692b[_0x1356e8(0x244)],'pitchRate':_0x23692b[_0x1356e8(0x398)],'soundFrames':_0x23692b[_0x1356e8(0x41a)][_0x1356e8(0x27b)]()};}else this['_motionBlurMovementEffectsDuration']=Game_Player[_0x1356e8(0x18f)],_0x3d3afa=Game_Player['SMART_RUSH_FILTER_ANGLE_OFFSET'];}if(this[_0x1356e8(0x15c)]===undefined)return;if(this[_0x1356e8(0x15c)]<=0x0)return;!this[_0x1356e8(0x45d)]&&this[_0x1356e8(0x3bd)]();if(!this[_0x1356e8(0x45d)])return;const _0x398dbb=this['_motionBlurMovementEffectsFilter'];if(this[_0x1356e8(0x15c)]-->0x0){if(_0x1356e8(0x415)!==_0x1356e8(0x37e)){let _0x4d70e9=VisuMZ[_0x1356e8(0x300)]['GetDirAngle'](this[_0x1356e8(0x169)]);_0x4d70e9+=_0x3d3afa;const _0x4a40b1=this[_0x1356e8(0x15c)][_0x1356e8(0x397)](0x0,0x1e);_0x398dbb[_0x1356e8(0x162)]['x']=_0x4a40b1*Math['cos'](_0x4d70e9*Math['PI']/0xb4),_0x398dbb[_0x1356e8(0x162)]['y']=-_0x4a40b1*Math[_0x1356e8(0x38d)](_0x4d70e9*Math['PI']/0xb4);}else this['_footstepSoundsEnabled']=_0x35e1d6[_0x1356e8(0x300)][_0x1356e8(0x1b2)]['Footsteps']['Enabled'];}else _0x398dbb[_0x1356e8(0x162)]['x']=0x0,_0x398dbb['velocity']['y']=0x0,this[_0x1356e8(0x26b)]=0x0;},VisuMZ[_0x327db2(0x300)]['GetDirAngle']=function(_0x5a2d5d){if(!_0x5a2d5d)return 0x2d;const _0x23eee7=_0x5a2d5d['direction']();if(_0x23eee7===0x6)return 0x0;if(_0x23eee7===0x9)return 0x2d;if(_0x23eee7===0x8)return 0x5a;if(_0x23eee7===0x7)return 0x87;if(_0x23eee7===0x4)return 0xb4;if(_0x23eee7===0x1)return 0xe1;if(_0x23eee7===0x2)return 0x10e;if(_0x23eee7===0x3)return 0x13b;return 0x2d;},Sprite_Character['prototype']['canShowMotionTrails']=function(){const _0x5dcac1=_0x327db2;if(!SceneManager[_0x5dcac1(0x294)])return![];if(!SceneManager[_0x5dcac1(0x294)]['_spriteset'])return![];if(this[_0x5dcac1(0x33f)]!==Sprite_Character)return![];if(!this['_character'])return![];if(this[_0x5dcac1(0x169)][_0x5dcac1(0x387)])return![];if(!this[_0x5dcac1(0x3e3)])return![];if(this[_0x5dcac1(0x217)]<=0x0)return![];if(!this[_0x5dcac1(0x40b)])return![];if(!this['bitmap'])return![];if(this['_frame'][_0x5dcac1(0x3de)]===this[_0x5dcac1(0x17a)][_0x5dcac1(0x3de)])return![];if(this['_motionTrailLastRealX']===this['_character']['_realX']&&this[_0x5dcac1(0x2f4)]===this['_character'][_0x5dcac1(0x358)])return![];return!![];},Sprite_Character[_0x327db2(0x22e)]['areMotionTrailsEnabled']=function(){const _0x444890=_0x327db2;if(!this['_character'])return![];return this['_character'][_0x444890(0x43a)]()[_0x444890(0x321)];},Sprite_Character[_0x327db2(0x22e)]['updateMovementEffectsMotionTrails']=function(){const _0x59dc51=_0x327db2;if(!this[_0x59dc51(0x277)]())return;if(!this[_0x59dc51(0x303)]())return;const _0x273acd=this[_0x59dc51(0x169)][_0x59dc51(0x43a)](),_0x27c30f=_0x273acd[_0x59dc51(0x402)]||0x1;if(Graphics[_0x59dc51(0x320)]%_0x27c30f===0x0){if(_0x59dc51(0x20a)===_0x59dc51(0x443)){this[_0x59dc51(0x391)]();const _0x21fa68=this[_0x59dc51(0x1a7)]()[_0x59dc51(0x341)]||'';_0x2e86ec['prototype'][_0x59dc51(0x3b6)][_0x59dc51(0x35f)](this,_0x21fa68);}else this[_0x59dc51(0x44e)]();}},Sprite_Character[_0x327db2(0x22e)][_0x327db2(0x44e)]=function(){const _0x14dd5d=_0x327db2,_0x582b3b=new Sprite_MapMotionTrail(this,this['_character']),_0x28b392=SceneManager[_0x14dd5d(0x294)][_0x14dd5d(0x349)];_0x28b392[_0x14dd5d(0x2bc)][_0x14dd5d(0x322)](_0x582b3b),this[_0x14dd5d(0x43f)]=this['_character'][_0x14dd5d(0x1c5)],this[_0x14dd5d(0x2f4)]=this[_0x14dd5d(0x169)][_0x14dd5d(0x358)];const _0x321372=_0x28b392[_0x14dd5d(0x3f7)];_0x321372[_0x14dd5d(0x45f)](_0x582b3b);};function Sprite_Footprint(){const _0xb27b4b=_0x327db2;this[_0xb27b4b(0x241)](...arguments);}Sprite_Footprint[_0x327db2(0x22e)]=Object[_0x327db2(0x2f8)](Sprite['prototype']),Sprite_Footprint['prototype'][_0x327db2(0x33f)]=Sprite_Footprint,Sprite_Footprint[_0x327db2(0x22e)]['initialize']=function(_0xfc3fe7){const _0x316b43=_0x327db2;this[_0x316b43(0x169)]=_0xfc3fe7,Sprite[_0x316b43(0x22e)][_0x316b43(0x241)][_0x316b43(0x35f)](this),this['initMembers'](),this[_0x316b43(0x3a6)](),this[_0x316b43(0x2b9)](),this['setupDuration'](),this[_0x316b43(0x296)]();},Sprite_Footprint['prototype'][_0x327db2(0x23a)]=function(){const _0x167f64=_0x327db2;this['anchor']['x']=0.5,this[_0x167f64(0x409)]['y']=0x1,this['z']=0x0,this[_0x167f64(0x1c5)]=this[_0x167f64(0x169)][_0x167f64(0x1c5)],this[_0x167f64(0x358)]=this['_character'][_0x167f64(0x358)],this[_0x167f64(0x176)]=this[_0x167f64(0x169)]['_direction'],this[_0x167f64(0x193)]=this[_0x167f64(0x169)][_0x167f64(0x315)](),this[_0x167f64(0x190)]=this['_character'][_0x167f64(0x2d0)](),this[_0x167f64(0x189)]=0x0,this[_0x167f64(0x406)]=0x0;if(this[_0x167f64(0x169)]['constructor']===Game_Follower){if(_0x167f64(0x24d)!==_0x167f64(0x24d)){const _0x5d5334=_0x5e9033[_0x167f64(0x2d4)][_0x167f64(0x3c6)],_0x408532=_0x167f64(0x2b1);this[_0x167f64(0x3d1)](_0x5d5334,_0x408532);}else{const _0x2597e1=VisuMZ[_0x167f64(0x300)][_0x167f64(0x1b2)][_0x167f64(0x288)][_0x167f64(0x3a3)]||0x0;this[_0x167f64(0x189)]=Math['randomInt'](_0x2597e1+0x1)+Math[_0x167f64(0x172)](_0x2597e1+0x1)-_0x2597e1,this[_0x167f64(0x406)]=Math[_0x167f64(0x172)](_0x2597e1+0x1)+Math[_0x167f64(0x172)](_0x2597e1+0x1)-_0x2597e1;}}},Sprite_Footprint[_0x327db2(0x22e)][_0x327db2(0x285)]=function(){const _0x5a2f9e=_0x327db2,_0x2913af='dir%1'['format'](this[_0x5a2f9e(0x176)]),_0x529271=_0x5a2f9e(0x30b)['format'](this[_0x5a2f9e(0x193)]),_0x3c076c=this[_0x5a2f9e(0x169)][_0x5a2f9e(0x285)]();return _0x3c076c[_0x2913af][_0x529271];},Sprite_Footprint[_0x327db2(0x22e)]['createBitmap']=function(){const _0x57852f=_0x327db2,_0x2468bc=this[_0x57852f(0x285)]();_0x2468bc[_0x57852f(0x2dd)]!==''?(this[_0x57852f(0x17a)]=ImageManager[_0x57852f(0x1dc)](_0x2468bc[_0x57852f(0x2dd)]),this['blendMode']=0x0):(this[_0x57852f(0x17a)]=ImageManager[_0x57852f(0x26c)](),this[_0x57852f(0x330)]['x']=_0x2468bc[_0x57852f(0x3de)]*0.01,this['scale']['y']=_0x2468bc[_0x57852f(0x438)]*0.01,this[_0x57852f(0x3c9)]=0x2);},Sprite_Footprint[_0x327db2(0x22e)][_0x327db2(0x2b9)]=function(){const _0x1e993f=_0x327db2,_0x55e0a3=this[_0x1e993f(0x169)]['x'],_0x1b8a3=this[_0x1e993f(0x169)]['y'];this['opacity']=$gameMap[_0x1e993f(0x2cf)](_0x55e0a3,_0x1b8a3);},Sprite_Footprint[_0x327db2(0x22e)][_0x327db2(0x1e9)]=function(){const _0x36850c=_0x327db2,_0x166f8f=this[_0x36850c(0x169)]['x'],_0x3fd666=this[_0x36850c(0x169)]['y'];this[_0x36850c(0x32d)]=$gameMap[_0x36850c(0x367)](_0x166f8f,_0x3fd666);},Sprite_Footprint['prototype']['update']=function(){const _0x1b516d=_0x327db2;Sprite['prototype']['update']['call'](this),this[_0x1b516d(0x296)]();},Sprite_Footprint[_0x327db2(0x22e)][_0x327db2(0x296)]=function(){const _0x4495fd=_0x327db2,_0x24cdff=$gameMap[_0x4495fd(0x299)](),_0x14b830=$gameMap[_0x4495fd(0x1af)]();this['x']=Math['floor']($gameMap['adjustX'](this['_realX'])*_0x24cdff+_0x24cdff/0x2),this['x']+=this[_0x4495fd(0x285)]()[_0x4495fd(0x34b)]+this['_followerOffsetX'],this['y']=Math[_0x4495fd(0x165)]($gameMap['adjustY'](this[_0x4495fd(0x358)])*_0x14b830+_0x14b830),this['y']+=this[_0x4495fd(0x285)]()[_0x4495fd(0x194)]+this['_followerOffsetY'],this['y']-=this[_0x4495fd(0x190)];};function Sprite_MapMotionTrail(){this['initialize'](...arguments);}Sprite_MapMotionTrail[_0x327db2(0x22e)]=Object[_0x327db2(0x2f8)](Sprite['prototype']),Sprite_MapMotionTrail['prototype']['constructor']=Sprite_MapMotionTrail,Sprite_MapMotionTrail[_0x327db2(0x22e)]['initialize']=function(_0x2e1566,_0x58f86a){const _0xe8ee08=_0x327db2;this[_0xe8ee08(0x20d)]=_0x2e1566,this[_0xe8ee08(0x169)]=_0x58f86a,Sprite[_0xe8ee08(0x22e)][_0xe8ee08(0x241)][_0xe8ee08(0x35f)](this),this[_0xe8ee08(0x2db)](),this[_0xe8ee08(0x2c4)](),this[_0xe8ee08(0x2ec)](),this['attachIconSprite'](),this[_0xe8ee08(0x29b)]=!![];},Sprite_MapMotionTrail[_0x327db2(0x22e)][_0x327db2(0x2db)]=function(){const _0x57dd11=_0x327db2,_0x448508=$gameMap[_0x57dd11(0x1af)](),_0x4142d7=(_0x448508-0x1)/_0x448508;this['anchor']['x']=this[_0x57dd11(0x20d)][_0x57dd11(0x409)]['x'],this['anchor']['y']=this[_0x57dd11(0x20d)][_0x57dd11(0x409)]['y'],this['opacity']=this['_baseSprite']['opacity'],this[_0x57dd11(0x330)]['x']=this[_0x57dd11(0x20d)][_0x57dd11(0x330)]['x'],this[_0x57dd11(0x330)]['y']=this[_0x57dd11(0x20d)][_0x57dd11(0x330)]['y'],this['x']=this[_0x57dd11(0x20d)]['x'],this['y']=this[_0x57dd11(0x20d)]['y'],this['z']=this[_0x57dd11(0x20d)]['z'],this[_0x57dd11(0x1c5)]=this['_character']['_realX'],this[_0x57dd11(0x358)]=this[_0x57dd11(0x169)][_0x57dd11(0x358)],this[_0x57dd11(0x190)]=this[_0x57dd11(0x169)][_0x57dd11(0x2d0)](),this[_0x57dd11(0x29e)]=this[_0x57dd11(0x169)][_0x57dd11(0x2e8)]();},Sprite_MapMotionTrail[_0x327db2(0x22e)][_0x327db2(0x2c4)]=function(){const _0x123764=_0x327db2;this['bitmap']=this[_0x123764(0x20d)]['bitmap'];const _0x2410c4=this['_baseSprite'][_0x123764(0x1f6)];this[_0x123764(0x20d)][_0x123764(0x1f6)]=0x0,this['_baseSprite']['updateCharacterFrame'](),this[_0x123764(0x40b)]=JSON[_0x123764(0x223)](JSON[_0x123764(0x2b4)](this[_0x123764(0x20d)][_0x123764(0x40b)])),this[_0x123764(0x20d)][_0x123764(0x1f6)]=_0x2410c4,this['_baseSprite'][_0x123764(0x3cd)](),this[_0x123764(0x3ca)]();},Sprite_MapMotionTrail['prototype'][_0x327db2(0x43a)]=function(){return this['_character']['motionTrailData']();},Sprite_MapMotionTrail[_0x327db2(0x22e)][_0x327db2(0x2ec)]=function(){const _0x23c291=_0x327db2,_0x181f7c=this[_0x23c291(0x43a)]();this[_0x23c291(0x32d)]=_0x181f7c['duration']||0x1,this[_0x23c291(0x27c)](_0x181f7c['hue']),this['setColorTone'](_0x181f7c[_0x23c291(0x384)]),this[_0x23c291(0x305)]=(_0x181f7c['opacityStart']/0xff)[_0x23c291(0x397)](0x0,0x1),this['opacity']=(this['opacity']*this['_opacityRate'])[_0x23c291(0x397)](0x0,0xff);},Sprite_MapMotionTrail[_0x327db2(0x22e)]['attachIconSprite']=function(){const _0x5293a8=_0x327db2;this['createIconSprite'](),this[_0x5293a8(0x1fa)]();},Sprite_MapMotionTrail[_0x327db2(0x22e)][_0x327db2(0x2c3)]=function(){const _0x28bc9b=_0x327db2;this[_0x28bc9b(0x30d)]=new Sprite(),this[_0x28bc9b(0x30d)][_0x28bc9b(0x17a)]=ImageManager[_0x28bc9b(0x366)](_0x28bc9b(0x290)),this[_0x28bc9b(0x30d)][_0x28bc9b(0x17a)][_0x28bc9b(0x20c)]=![],this[_0x28bc9b(0x30d)][_0x28bc9b(0x409)]['x']=0.5,this[_0x28bc9b(0x30d)][_0x28bc9b(0x409)]['y']=0x1,this[_0x28bc9b(0x45f)](this[_0x28bc9b(0x30d)]);},Sprite_MapMotionTrail[_0x327db2(0x22e)][_0x327db2(0x1fa)]=function(){const _0xe8d3a2=_0x327db2,_0x53e087=this[_0xe8d3a2(0x30d)],_0x2abb9c=this[_0xe8d3a2(0x20d)][_0xe8d3a2(0x30d)];_0x53e087['x']=_0x2abb9c['x'],_0x53e087['y']=_0x2abb9c['y'],_0x53e087[_0xe8d3a2(0x40b)]=JSON[_0xe8d3a2(0x223)](JSON[_0xe8d3a2(0x2b4)](_0x2abb9c[_0xe8d3a2(0x40b)])),_0x53e087[_0xe8d3a2(0x3ca)]();},Sprite_MapMotionTrail[_0x327db2(0x22e)][_0x327db2(0x151)]=function(){const _0xf3a2f8=_0x327db2;Sprite['prototype'][_0xf3a2f8(0x151)][_0xf3a2f8(0x35f)](this),this[_0xf3a2f8(0x29b)]&&(this[_0xf3a2f8(0x2ab)](),this[_0xf3a2f8(0x296)]());},Sprite_MapMotionTrail['prototype'][_0x327db2(0x2ab)]=function(){const _0x1c33af=_0x327db2;if(this['_duration']<=0x0)return;const _0x1fbf36=this[_0x1c33af(0x32d)];this[_0x1c33af(0x217)]=(this[_0x1c33af(0x217)]*(_0x1fbf36-0x1)+0x0)/_0x1fbf36,this[_0x1c33af(0x32d)]--,this[_0x1c33af(0x32d)]<=0x0&&(this[_0x1c33af(0x217)]=0x0);},Sprite_MapMotionTrail['prototype'][_0x327db2(0x296)]=function(){const _0x230a2c=_0x327db2,_0x250357=$gameMap[_0x230a2c(0x299)](),_0x409dd8=$gameMap[_0x230a2c(0x1af)]();this['x']=Math[_0x230a2c(0x165)]($gameMap['adjustX'](this[_0x230a2c(0x1c5)])*_0x250357+_0x250357/0x2),this['y']=Math['floor']($gameMap[_0x230a2c(0x3f5)](this[_0x230a2c(0x358)])*_0x409dd8+_0x409dd8),this['y']-=this[_0x230a2c(0x190)]+this['_jumpHeight']+0.001;},VisuMZ[_0x327db2(0x300)][_0x327db2(0x1b8)]=Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x157)],Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x157)]=function(){const _0x13f4ac=_0x327db2;VisuMZ[_0x13f4ac(0x300)][_0x13f4ac(0x1b8)][_0x13f4ac(0x35f)](this),this['createDustCloudBasics'](),this['createFootprintBasics'](),this[_0x13f4ac(0x1ea)]();},VisuMZ[_0x327db2(0x300)][_0x327db2(0x385)]=Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x151)],Spriteset_Map['prototype'][_0x327db2(0x151)]=function(){const _0x2070be=_0x327db2;VisuMZ[_0x2070be(0x300)][_0x2070be(0x385)][_0x2070be(0x35f)](this),this[_0x2070be(0x2d7)](),this['updateFootprints'](),this['updateMotionTrailSprites']();},VisuMZ[_0x327db2(0x300)][_0x327db2(0x29a)]=Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x2e7)],Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x2e7)]=function(){const _0x1a4168=_0x327db2;VisuMZ[_0x1a4168(0x300)][_0x1a4168(0x29a)][_0x1a4168(0x35f)](this),this[_0x1a4168(0x3f7)][_0x1a4168(0x31a)]['x']=Math['ceil'](this[_0x1a4168(0x3f7)][_0x1a4168(0x31a)]['x']),this['_tilemap']['origin']['y']=Math[_0x1a4168(0x1ab)](this[_0x1a4168(0x3f7)][_0x1a4168(0x31a)]['y']),this[_0x1a4168(0x31d)]();},Spriteset_Map[_0x327db2(0x22e)]['updateSmoothScrollingContainer']=function(){const _0x1332c4=_0x327db2;if(!this[_0x1332c4(0x148)])return;const _0x34926e=this[_0x1332c4(0x148)][_0x1332c4(0x3b0)];for(const _0x541b52 of _0x34926e){if('vnCcD'==='JUIBW')this[_0x1332c4(0x2f5)][_0x1332c4(0x168)]=_0x428994['$1'][_0x1332c4(0x376)](',')['map'](_0x511c7c=>(_0x5583bd(_0x511c7c)||0x0)[_0x1332c4(0x397)](0x0,0xff));else{if(!_0x541b52)continue;if(!_0x541b52[_0x1332c4(0x2b0)]())continue;if(!_0x541b52[_0x1332c4(0x2b0)]()[_0x1332c4(0x18c)]())continue;_0x541b52[_0x1332c4(0x296)]();}}},VisuMZ[_0x327db2(0x300)]['Sprite_Picture_updatePosition']=Sprite_Picture['prototype'][_0x327db2(0x296)],Sprite_Picture['prototype'][_0x327db2(0x296)]=function(){const _0x1e82ca=_0x327db2;VisuMZ[_0x1e82ca(0x300)][_0x1e82ca(0x2af)]['call'](this),this[_0x1e82ca(0x2b0)]()[_0x1e82ca(0x18c)]()&&this[_0x1e82ca(0x413)]();},Sprite_Picture['prototype']['updateScrollLinkedPosition']=function(){const _0x1a04b6=_0x327db2;if(!SceneManager[_0x1a04b6(0x294)])return;if(!SceneManager[_0x1a04b6(0x294)][_0x1a04b6(0x349)])return;const _0x3bd36a=SceneManager[_0x1a04b6(0x294)][_0x1a04b6(0x349)][_0x1a04b6(0x3f7)];if(!_0x3bd36a)return;this['x']-=Math['floor'](_0x3bd36a[_0x1a04b6(0x31a)]['x']*$gameScreen[_0x1a04b6(0x38e)]()),this['y']-=Math['floor'](_0x3bd36a[_0x1a04b6(0x31a)]['y']*$gameScreen[_0x1a04b6(0x38e)]());},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x3fd)]=function(){const _0xfa2063=_0x327db2;this[_0xfa2063(0x416)]=this['_dustCloudSprites']||[];const _0x26d129=$gameSystem[_0xfa2063(0x3ab)]();this[_0xfa2063(0x40c)]=JSON[_0xfa2063(0x223)](JSON[_0xfa2063(0x2b4)](_0x26d129)),this[_0xfa2063(0x41d)]();},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x1d6)]=function(){const _0xacd9a9=_0x327db2;if(!this[_0xacd9a9(0x40c)])this[_0xacd9a9(0x3fd)]();else{if('TDhZV'===_0xacd9a9(0x293)){const _0x5563e1=$gameSystem[_0xacd9a9(0x3ab)]();JSON[_0xacd9a9(0x2b4)](this[_0xacd9a9(0x40c)])!==JSON[_0xacd9a9(0x2b4)](_0x5563e1)&&this['createDustCloudBasics']();}else _0x6339f6[_0xacd9a9(0x300)][_0xacd9a9(0x325)][_0xacd9a9(0x35f)](this),_0x3ea01a&&_0xf34a7[_0xacd9a9(0x34c)]();}},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x41d)]=function(){const _0x2fb84f=_0x327db2,_0x2b97a6=this[_0x2fb84f(0x40c)];if(_0x2b97a6[_0x2fb84f(0x2dd)]!=='')_0x2fb84f(0x2ef)===_0x2fb84f(0x2fa)?this[_0x2fb84f(0x2f3)]()?this[_0x2fb84f(0x2fb)](_0x2cfe2b,_0x559c1c):_0x4c7a24[_0x2fb84f(0x300)][_0x2fb84f(0x284)][_0x2fb84f(0x35f)](this,_0x518f43,_0x23cfa3):this[_0x2fb84f(0x3e0)]=ImageManager[_0x2fb84f(0x1dc)](_0x2b97a6[_0x2fb84f(0x2dd)]);else{if(_0x2fb84f(0x256)!==_0x2fb84f(0x2fc)){const _0x4bb795=_0x2b97a6[_0x2fb84f(0x319)],_0x454320=_0x4bb795*0x2,_0x3f2398=new Bitmap(_0x454320,_0x454320),_0x5ca4ff=_0x2b97a6[_0x2fb84f(0x313)],_0x46ac84=_0x2b97a6[_0x2fb84f(0x373)];_0x3f2398[_0x2fb84f(0x3ed)](_0x4bb795,_0x5ca4ff,_0x46ac84),this[_0x2fb84f(0x3e0)]=_0x3f2398;}else{const _0x17ffea=(_0x33db2e*_0xa296dc[_0x2fb84f(0x232)])[_0x2fb84f(0x397)](0x1,0x9),_0x1ac016=(_0x1b7a35*_0x455a73[_0x2fb84f(0x2ea)])[_0x2fb84f(0x397)](0x1,0x9);this[_0x2fb84f(0x412)](_0x17ffea,_0x1ac016,_0x41ede9[_0x2fb84f(0x1e1)]);}}},Bitmap[_0x327db2(0x22e)][_0x327db2(0x3ed)]=function(_0x4ac939,_0x1ed2c7,_0x34fb1a){const _0x2709e9=_0x327db2;_0x34fb1a=_0x34fb1a['clamp'](0x0,0x1);const _0x57f6c7=this[_0x2709e9(0x449)],_0x4f07dc=0x168*(Math['PI']/0xb4),_0x2f6592=_0x4ac939*0x2,_0x3ef5e0=_0x57f6c7[_0x2709e9(0x178)](_0x4ac939,_0x4ac939,0x0,_0x4ac939,_0x4ac939,_0x4ac939),_0x48445a=ColorManager['hexToRgba'](_0x1ed2c7,0x1),_0x518b20=ColorManager['hexToRgba'](_0x1ed2c7,0x0);_0x3ef5e0[_0x2709e9(0x3bf)](0x0,_0x48445a),_0x3ef5e0[_0x2709e9(0x3bf)](_0x34fb1a,_0x48445a),_0x3ef5e0[_0x2709e9(0x3bf)](0x1,_0x518b20),_0x57f6c7[_0x2709e9(0x163)](),_0x57f6c7[_0x2709e9(0x38b)]=_0x3ef5e0,_0x57f6c7['beginPath'](),_0x57f6c7[_0x2709e9(0x42e)](_0x4ac939,_0x4ac939),_0x57f6c7[_0x2709e9(0x19b)](_0x2f6592,_0x4ac939),_0x57f6c7[_0x2709e9(0x434)](_0x4ac939,_0x4ac939,_0x4ac939,0x0,_0x4f07dc),_0x57f6c7[_0x2709e9(0x19b)](_0x4ac939,_0x4ac939),_0x57f6c7[_0x2709e9(0x29f)](),_0x57f6c7[_0x2709e9(0x32c)](),this[_0x2709e9(0x1ae)][_0x2709e9(0x151)]();},ColorManager['hexToRgba']=function(_0x262075,_0x52f83f){const _0x195c9a=_0x327db2;let _0x2ef542='';if(/^#([A-Fa-f0-9]{3}){1,2}$/['test'](_0x262075)){if(_0x195c9a(0x2a6)===_0x195c9a(0x1fb)){const _0x3f15e9=_0x20cb4c[_0x195c9a(0x300)][_0x195c9a(0x1b2)]['Footsteps']['FrameDashModifier']??1.5;_0x53772d=_0x2536ff['ceil'](_0x5a2daa/_0x44457e['max'](_0x3f15e9,0x1));}else{_0x2ef542=_0x262075[_0x195c9a(0x2dc)](0x1)[_0x195c9a(0x376)]('');_0x2ef542[_0x195c9a(0x3d3)]===0x3&&(_0x2ef542=[_0x2ef542[0x0],_0x2ef542[0x0],_0x2ef542[0x1],_0x2ef542[0x1],_0x2ef542[0x2],_0x2ef542[0x2]]);while(_0x2ef542['length']>0x6)_0x2ef542['pop']();return _0x2ef542='0x'+_0x2ef542['join'](''),_0x195c9a(0x418)+[(_0x2ef542>>0x10&0xff)['clamp'](0x0,0xff),(_0x2ef542>>0x8&0xff)[_0x195c9a(0x397)](0x0,0xff),(_0x2ef542&0xff)[_0x195c9a(0x397)](0x0,0xff)][_0x195c9a(0x396)](',')+','+_0x52f83f[_0x195c9a(0x397)](0x0,0x1)+')';}}else return _0x195c9a(0x30e);},Spriteset_Map['prototype']['createDustCloudForTarget']=function(_0xb927cf){const _0x1b84b4=_0x327db2,_0x1d519b=this['findTargetSprite'](_0xb927cf);if(!_0x1d519b)return;this[_0x1b84b4(0x1d6)]();const _0x5c4882=this[_0x1b84b4(0x40c)],_0x3e32dd=_0x5c4882['startScale'],_0x12f91b=new Sprite();_0x12f91b[_0x1b84b4(0x17a)]=this[_0x1b84b4(0x3e0)],_0x12f91b['opacity']=_0x5c4882[_0x1b84b4(0x3b2)],_0x12f91b['_duration']=_0x5c4882[_0x1b84b4(0x427)],_0x12f91b[_0x1b84b4(0x409)]['x']=0.5,_0x12f91b['anchor']['y']=0x1,_0x12f91b[_0x1b84b4(0x330)]['x']=(Math[_0x1b84b4(0x432)]()*_0x3e32dd)[_0x1b84b4(0x397)](0.01,0.99),_0x12f91b[_0x1b84b4(0x330)]['y']=(Math['random']()*_0x3e32dd)['clamp'](0.01,0.99),_0x12f91b[_0x1b84b4(0x401)]=0x1-(Math[_0x1b84b4(0x432)]()*_0x3e32dd*0x2)['clamp'](0x0,0.8),_0x12f91b[_0x1b84b4(0x218)]=0x1-(Math['random']()*_0x3e32dd*0x2)['clamp'](0x0,0.8);const _0x303863=0.25,_0x567838=0.05;_0x12f91b[_0x1b84b4(0x1c5)]=_0xb927cf[_0x1b84b4(0x1c5)]+Math[_0x1b84b4(0x432)]()*_0x303863+Math[_0x1b84b4(0x432)]()*_0x303863-_0x303863,_0x12f91b[_0x1b84b4(0x358)]=_0xb927cf[_0x1b84b4(0x358)]+Math['random']()*_0x567838+Math['random']()*_0x567838-_0x567838,_0x12f91b['z']=0x3,this[_0x1b84b4(0x416)][_0x1b84b4(0x322)](_0x12f91b),this['_tilemap'][_0x1b84b4(0x45f)](_0x12f91b);},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x2d7)]=function(){const _0x4ceee3=_0x327db2,_0x4f04a4=[];for(const _0x3fe7d0 of this[_0x4ceee3(0x416)]){if(!_0x3fe7d0)continue;this['updateDustCloudSprite'](_0x3fe7d0);if(_0x3fe7d0[_0x4ceee3(0x32d)]<=0x0)_0x4f04a4['push'](_0x3fe7d0);}for(const _0x11c77f of _0x4f04a4){if('kBkGj'!=='VtMDF')this[_0x4ceee3(0x3f7)][_0x4ceee3(0x3c8)](_0x11c77f),this[_0x4ceee3(0x416)][_0x4ceee3(0x2d2)](_0x11c77f);else{this[_0x4ceee3(0x409)]['x']=0.5,this[_0x4ceee3(0x409)]['y']=0x1,this['z']=0x0,this[_0x4ceee3(0x1c5)]=this[_0x4ceee3(0x169)][_0x4ceee3(0x1c5)],this[_0x4ceee3(0x358)]=this[_0x4ceee3(0x169)][_0x4ceee3(0x358)],this[_0x4ceee3(0x176)]=this[_0x4ceee3(0x169)]['_direction'],this[_0x4ceee3(0x193)]=this[_0x4ceee3(0x169)][_0x4ceee3(0x315)](),this[_0x4ceee3(0x190)]=this[_0x4ceee3(0x169)][_0x4ceee3(0x2d0)](),this[_0x4ceee3(0x189)]=0x0,this[_0x4ceee3(0x406)]=0x0;if(this[_0x4ceee3(0x169)][_0x4ceee3(0x33f)]===_0x1e13b3){const _0xa4ce33=_0x4d652f[_0x4ceee3(0x300)]['Settings'][_0x4ceee3(0x288)][_0x4ceee3(0x3a3)]||0x0;this[_0x4ceee3(0x189)]=_0x427fd5[_0x4ceee3(0x172)](_0xa4ce33+0x1)+_0x4151ee[_0x4ceee3(0x172)](_0xa4ce33+0x1)-_0xa4ce33,this[_0x4ceee3(0x406)]=_0x4a4faa[_0x4ceee3(0x172)](_0xa4ce33+0x1)+_0x5c6f35[_0x4ceee3(0x172)](_0xa4ce33+0x1)-_0xa4ce33;}}}},Spriteset_Map[_0x327db2(0x22e)]['updateDustCloudSprite']=function(_0x98d474){const _0x2a92e4=_0x327db2,_0x13f9fd=_0x98d474['_duration'],_0x47095b=$gameMap[_0x2a92e4(0x299)](),_0x39e2f4=$gameMap[_0x2a92e4(0x1af)]();_0x98d474['x']=Math[_0x2a92e4(0x165)]($gameMap[_0x2a92e4(0x267)](_0x98d474['_realX'])*_0x47095b+_0x47095b/0x2),_0x98d474['y']=Math[_0x2a92e4(0x165)]($gameMap[_0x2a92e4(0x3f5)](_0x98d474[_0x2a92e4(0x358)])*_0x39e2f4+_0x39e2f4),_0x98d474[_0x2a92e4(0x330)]['x']=(_0x98d474[_0x2a92e4(0x330)]['x']*(_0x13f9fd-0x1)+_0x98d474['_targetScaleX'])/_0x13f9fd,_0x98d474[_0x2a92e4(0x330)]['y']=(_0x98d474[_0x2a92e4(0x330)]['y']*(_0x13f9fd-0x1)+_0x98d474['_targetScaleY'])/_0x13f9fd,_0x98d474[_0x2a92e4(0x217)]=_0x98d474[_0x2a92e4(0x217)]*(_0x13f9fd-0x1)/_0x13f9fd,_0x98d474[_0x2a92e4(0x32d)]--;},Spriteset_Map['prototype'][_0x327db2(0x347)]=function(){const _0xe426f4=_0x327db2;this[_0xe426f4(0x3a1)]=this['_footprintSprites']||[];},Spriteset_Map['prototype'][_0x327db2(0x2ca)]=function(_0x332ed7){const _0x4c4041=_0x327db2,_0xbe2fa1=this[_0x4c4041(0x3b4)](_0x332ed7);if(!_0xbe2fa1)return;const _0x13a7bb=new Sprite_Footprint(_0x332ed7);this['_footprintSprites']['push'](_0x13a7bb),this[_0x4c4041(0x3f7)][_0x4c4041(0x45f)](_0x13a7bb);},Spriteset_Map['prototype'][_0x327db2(0x2d6)]=function(){const _0x348a6e=_0x327db2,_0x2baaca=[];for(const _0x53b5d7 of this[_0x348a6e(0x3a1)]){if(_0x348a6e(0x246)!==_0x348a6e(0x2c2)){if(!_0x53b5d7)continue;this[_0x348a6e(0x3d2)](_0x53b5d7);if(_0x53b5d7[_0x348a6e(0x32d)]<=0x0)_0x2baaca[_0x348a6e(0x322)](_0x53b5d7);}else return this[_0x348a6e(0x36d)]();}for(const _0x4ed8c3 of _0x2baaca){this['_tilemap'][_0x348a6e(0x3c8)](_0x4ed8c3),this[_0x348a6e(0x3a1)][_0x348a6e(0x2d2)](_0x4ed8c3);}},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x3d2)]=function(_0x35dd95){const _0x3dfa2e=_0x327db2,_0x5a5243=_0x35dd95[_0x3dfa2e(0x32d)];_0x35dd95[_0x3dfa2e(0x217)]=_0x35dd95[_0x3dfa2e(0x217)]*(_0x5a5243-0x1)/_0x5a5243,_0x35dd95[_0x3dfa2e(0x32d)]--;},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x1ea)]=function(){const _0x57d283=_0x327db2;this[_0x57d283(0x2bc)]=[],this['_motionTrailExpiredSprites']=[];},Spriteset_Map[_0x327db2(0x22e)][_0x327db2(0x308)]=function(){const _0x11ae39=_0x327db2;if(!this[_0x11ae39(0x2bc)])return;for(const _0x559396 of this[_0x11ae39(0x2f0)]){if(!_0x559396)continue;this[_0x11ae39(0x2f0)][_0x11ae39(0x2d2)](_0x559396),this[_0x11ae39(0x3f7)][_0x11ae39(0x3c8)](_0x559396);}for(const _0x5e1436 of this[_0x11ae39(0x2bc)]){if(!_0x5e1436)continue;if(_0x5e1436[_0x11ae39(0x217)]>0x0)continue;this[_0x11ae39(0x2bc)][_0x11ae39(0x2d2)](_0x5e1436),this['_motionTrailExpiredSprites'][_0x11ae39(0x322)](_0x5e1436);}};function _0x33e9(){const _0x28b22c=['delay','setSmartRushSwitch','updateWaitMode','461oizETD','_followerOffsetY','version','MotionBlurPlayer','anchor','tZDLq','_frame','_dustCloudData','isTileSmartBlinkBreakable','iaOwD','NonFootprintRegions','terrainTag','yvJhl','startShake','updateScrollLinkedPosition','BZPtF','VEACt','_dustCloudSprites','SmartDirMoveSpeedMod','rgba(','readFlag','Frames','kgFjx','setupRegionTerrainTagSmartRush','createDustCloudBitmap','isSmartRushCrashShakeTile','_smartBlinkCooldown','_smartJump','ILUvO','updateMotionBlurEffectFilter','getSmoothCameraSpeed','XzdOS','NonFootprintTerrainTags','_smartBlinkDistance','wholeDuration','distanceVolumeModifier','makeDeepCopy','setMotionTrailSettings','cos','toUpperCase','VertDash','moveTo','Distance','OnSuccessCommonEventID','_terrainTagFootstepSounds','random','isDashing','arc','Game_Map_changeTileset','SmartJumpNonPassTerrainTags','isUsingSmoothCamera','height','_jumpPeak','motionTrailData','sort','max','#000000','down','_motionTrailLastRealX','SmartBlinkNonPassRegions','addGeneralOptions','initRegionTerrainTagFootprints','ybISm','Options','EventID','aCAzi','OtsRF','ARRAYSTRUCT','context','return\x200','initRegionTerrainTagSmartJump','Game_Follower_initialize','NonLandableTerrainTags','createMotionTrailSprite','eventId','BeHTg','isPassableByAnyDirection','isSmartMoving','iRRVo','Cooldown','regionId','Sprite_Character_initialize','isMovementSucceeded','notSmartJumpLandable','VisuMZ_0_CoreEngine','getDirMoveSpeedMod','nPnuT','ARRAYSTR','_motionBlurMovementEffectsFilter','initMovementEffectsFootprintMarks','addChild','_smartJumpRestriction','Pirtr','parameters','NoSmartRush','isSmartMoveNonViableState','ClsIN','_pictureContainer','ApplyFootstepSfxModifiers','moveBySmartRush','MotionTrailSettingsChangePlayer','volume','initRegionTerrainTagSmartRush','allowDiagonal','meetsSmartJumpHeightConditions','AddFootprints','update','checkPassage','hpuig','NonCrashTerrainTags','parseTerrainTagBasedFootstepSounds','isTileSmartJumpCompatible','createLowerLayer','locate','ConfigKeys','_wasEventScrolling','Game_Map_parallaxOy','_motionBlurMovementEffectsDuration','startSmartRushCrashShake','smartJumpMotionTrailData','isTileSmartJumpBreakable','Game_Picture_isMapScrollLinked','initRegionTerrainTagSmartBlink','velocity','save','bind','floor','isValid','NoDustCloud','NonCrashRegions','_character','actorVolumeModifier','azVJn','requestAnimation','5540690wqyYDn','updatePattern','isSmartRushing','_smartRushSpeedRate','DJFUx','randomInt','_smartRushMode','toLowerCase','_smartRushSwitches','_direction','sfxPan','createRadialGradient','VDiVg','bitmap','addMovementEffectsDustCloudCommand','gpLqj','setDirMoveSpeedMod','parseTerrainTagBasedFootprints','isTileSmartBlinkNonLandable','dir1','canMakeFootprints','MSmXt','isInVehicle','Enable','_smartRushMotionTrailData','FootstepsName','isHeightBasedRegion','LDVGo','_followerOffsetX','setFootstepSoundsEnabled','#ffffff','isTrueMapScrollLinked','IoAfP','ARbgf','SMART_RUSH_FILTER_DURATION','_shiftY','pop','WxXtm','_pattern','offsetY','Rmsxn','straightenDiagonal','HeightBasedRegions','initMovementEffectsDustCloud','dir4','8881474EGtMUo','lineTo','OoqGl','setupRegionTerrainTagSmartBlink','createDustCloud','deltaXFrom','opacityStart','isMapScrollLinked','increaseSteps','VcVcf','canShowDustCloud','OvSjn','parseRegionBasedSmartJump','actor','nonLand','DefaultTerrainTags','ImmediateCreate','ceil','lower\x20right','_stopCount','_baseTexture','tileHeight','RegionFootprintDuration','isScrolling','Settings','96xITSZq','jump','gppoy','AnimationID','addMovementEffectsFootstepsCommand','Spriteset_Map_createLowerLayer','Game_Player_moveByInput','cVAHk','Game_CharacterBase_initMembers','MotionTrail','Game_System_initialize','_animationCount','setupMovementEffectsCommentTags','ShakePowerRate','dir6','canPass','dir7','Game_Player_reserveTransfer','_realX','eventsXy','bgeHj','setupPageSettings','isCeilingTile','Poxgg','QRQpU','WJGyB','XMyKN','YesFootprintsEvent','NonPassableRegions','jFIJc','playSe','smartJump','Walk','_smartJumpMode','SmartBlink','checkDustCloudChanges','parseRegionBasedSmartRush','measureSmartBlinkDistance','isTileSmartJumpNonPassable','isSmartBlinkEnabled','_smartJumpCooldown','loadPicture','SmoothCameraEnableDisable','parseTerrainTagBasedSmartJump','smartBlinkRelocate','NUM','SMART_RUSH_SHAKE_DURATION','mglsq','processSmartJumpHeightFactor','setup','149956dixYYD','smartRush','isSmartRushCrashShake','TerrainTagFootstepSfx','setupDuration','createMotionTrailContainers','iWMPi','_smartJumpRestrictions','animationWait','parallaxOx','PBvSU','ribqX','jDrQY','terrainTags','SMART_RUSH_SHAKE_ENABLED','XBZkP','visibleFollowers','_bushDepth','smartBlinkMotionTrailData','setupRegionTerrainTagFootstepSounds','registerCommand','setupIconSprite','qnwqX','applyData','event','_parallaxZero','RegionFootstepSfx','MotionTrailCreateForEvent','initRegionTerrainTagFootstepSounds','gMPGc','direction','SmartJump','PzxGo','Index','NunRN','Ltdif','kGkIZ','oKkIy','TjHwA','smooth','_baseSprite','exit','startSmartJump','NoSmooth','addMovementEffectsOptionCommands','zbuBB','MtDjq','_followers','initMovementEffectsMotionTrails','centerY','opacity','_targetScaleY','Game_Player_isDashing','dvRms','SmartJumpLedgeRegion','smoothCamera','isOnLadder','Game_CharacterBase_animationWait','SmartMoveWaitForSmartJump','scaleX','ApplyFollowers','FootstepsPitchRate','parse','SmartJumpNonPassEvent','NoRegionFootstepSfx','scaleY','LhzUo','HorzDash','changeTileset','_lastSmoothScrollX','Window_Options_addGeneralOptions','SmartJumpNonPassRegions','indexOf','prototype','aMKny','name','AddSmoothCamera','SMART_RUSH_SHAKE_POWER_RATE','_smartJumpMotionTrailData','mCaZt','qntib','SmartBlinkDistance','ywlSN','canMakeFootstepSounds','NBoFq','initMembers','isSmartJumpRegionLowestHeight','OSxWE','ayxGY','areFollowersGathering','FootprintsOffset','AddFootsteps','initialize','Game_Picture_x','filters','eventVolumeModifier','forbidden','voeqm','kLkJK','dir%1','applyFootstepSoundTileChanges','data','sVSgc','EXbxn','DjpCd','Game_CharacterBase_increaseSteps','isTileSmartBlinkCompatible','concat','setSmoothCameraSpeed','Sprite_Character_update','ShakeDuration','RegExp','setupMovementEffectsVariables','gGALd','_footstepCooldownDuration','Game_CharacterBase_straighten','YwUjx','checkEventTriggerHere','ffKWu','HuvkS','UHYgY','WOwfA','aDUEj','JHdCc','SmartRush','_smartBlinkMotionTrailData','sfxName','Game_Picture_scaleY','Footsteps','SoundByFrame','adjustX','4314880hRzQMh','lower\x20left','_smartBlinkRestrictions','_motionBlurMovementEffectsAngleOffset','generatedFootprintBitmap','setDirection','meetFootstepFrames','includes','pPvsK','zgLiY','randomizeAnimationCount','autotileType','KnESo','follower','isJumping','canShowMotionTrails','JrNXn','updateSmartJumpState','tileset','clone','setHue','updateSmartBlinkCooldown','startScale','notSmartJumpPassable','jaOUL','cViEl','createFootprint','NonPassableTerrainTags','Game_Player_updateScroll','footprintsData','FrameWalkModifier','setSmoothCameraEnabled','Footprints','dtGiI','_customModified','footsteps','rQoml','QAFST','_smartBlink','playFootsteps','IconSet','scrollUp','SMART_BLINK_FLOOR_TO_CEILING','TDhZV','_scene','ConvertParams','updatePosition','leader','SmartRushAntiCrashRegions','tileWidth','Spriteset_Map_updateTilemap','_ready','isVisible','fswpH','_jumpHeight','fill','isTileSmartHeightJumpRegion','updateSmartRushCooldown','FootprintRegions','_footprints','CatchAll','MotionTrailCreateForFollower','ucTob','CBxBe','match','createSmartBlinkMotionTrailSprite','_footsteps','updateOpacity','RegionFootprintOpacity','measureSmartJumpDistance','Game_Event_clearPageSettings','Sprite_Picture_updatePosition','picture','dustCloud','updateScroll','AAtLt','stringify','bCIPS','Game_Picture_y','Dash','canSmartJump','setupOpacity','_cached_GeneratedFootprint_Image','Game_Event_setupPageSettings','_motionTrailSprites','ForceSmooth','STRUCT','Blow2','fHkGp','meetFootprintFrames','NauhV','createIconSprite','copyBitmapFrame','VertWalk','dir2','MotionBlurFilter','description','NoSmartBlink','createFootprintForTarget','YCBvf','SmoothCamera','fSeFh','vert','footprintOpacityAtXy','shiftY','MotionTrailEnableFollower','remove','playOnceParallelInterpreter','MovementEffectsOptions','scrollDown','updateFootprints','updateDustClouds','isPlayFootstepSoundsByFrame','Duration','followers','copyBasicProperties','substring','filename','zefJi','horz','maxCommands','setFootprintsEnabled','duration','bTOFD','distancePitchModifier','getStraightenDiagonalDirection','AdjustRect','updateTilemap','jumpHeight','updateMovementEffectsMotionTrails','SMART_RUSH_SHAKE_SPEED_RATE','scrolledX','applyMotionTrailData','SmoothCameraSpeedChange','floorToCeiling','uuvXT','_motionTrailExpiredSprites','kYPNm','BlurDuration','canSmoothScroll','_motionTrailLastRealY','_smartRush','isSmartRushEnabled','isTileSmartJumpNonLandable','create','JkQvC','AdIFr','updateScrollSmoothCamera','UnHlL','TerrainTagFootprintDuration','otRBn','center','MovementEffects','parseTerrainTagBasedSmartRush','parseDirectionText','areMotionTrailsEnabled','clearPageSettings','_opacityRate','cZbJS','Qyjuk','updateMotionTrailSprites','SmartJumpDistance','FgZvq','pattern%1','allowed','_eventIconSprite','rgba(0,0,0,0)','NTPOF','hasStepAnime','upper\x20left','mRadialArcConstant','color','ARRAYEVAL','pattern','CyREZ','Qzaco','page','radius','origin','Game_Map_setup','isPlayerSmartRushing','updateSmoothScrollingContainer','SmartMoveWaitForSmartBlink','zUEnm','frameCount','enabled','push','51iSPVDW','SMART_BLINK_FILTER_DURATION','BattleManager_startBattle','adKCe','SmartJumpNonLandTerrainTags','eWtit','SmartJumpHeightBasedRegions','pitch','ARRAYNUM','restore','_duration','MotionTrailEnablePlayer','iUwFQ','scale','parseRegionBasedFootstepSounds','isSceneMap','abs','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','addMovementEffectsFootprintsCommand','mPbJb','Game_CharacterBase_updateAnimationCount','PQyTu','_motionTrailSettings','_dustCloud','isCollidedWithCharacters','Game_Map_parallaxOx','playFootstepSound','isMoving','constructor','isTileSmartBlinkNonPassable','note','vFyQB','MZrIS','NoTerrainTagFootstepSfx','_smoothCamera','Game_CharacterBase_updatePattern','createFootprintBasics','iUlLk','_spriteset','addMovementEffectsSmoothCameraCommand','offsetX','endSmartRush','right','SzWfj','NonLandableRegions','ARRAYJSON','sfxPitch','TerrainTagFootprintOpacity','jzEUh','updateAnimationCount','parseTerrainTagBasedSmartBlink','xDJWP','kCBpL','_realY','MotionTrailEnableEvent','canCreateDustCloud','executeMove','synchronize','nonPass','vRHGL','call','smartBlink','700452icEJPB','ConfigManager_applyData','deltaYFrom','scrollRight','isAnimationPlaying','loadSystem','footprintDurationAtXy','FootprintsName','_dirMoveSpeedMod','setupRegionTerrainTagSmartJump','Qbtdk','hue','smartRushMotionTrailData','AngleOffset','footprints','HorzWalk','roundXWithDirection','SmartBlinkNonLandTerrainTags','fullness','code','NoFootsteps','split','SmartMoveWaitForSmartRush','_footprintMarksEnabled','realMoveSpeed','lKXpb','drawCircle','footstepsData','startMotionBlurEffect','KpstU','DefaultRegions','setupMovementEffectsNotetags','dir9','FootprintsHeight','setupRegionTerrainTagFootprints','tone','Spriteset_Map_update','map','_erased','cAAMM','paintOpacity','parallaxOy','fillStyle','initMovementEffectsSmoothCamera','sin','zoomScale','VisuMZ_1_EventsMoveCore','qmzJv','initMovementEffectsVariables','_footstepSoundsEnabled','GetDirAngle','setWaitMode','isTransparent','join','clamp','eventPitchModifier','dir3','JiyEs','canSmartRush','_smartRushCooldown','NoSmartJump','ShakeSpeedRate','_waitMode','dir8','_footprintSprites','AesTs','followerVariance','FootprintsEnableDisable','_lastSmoothScrollY','createBitmap','Enabled','7854ckBFnY','EVAL','straightenFacedDirection','dustCloudData','FCxTb','pan','zMkew','FootprintsWidth','children','initMovementEffectsFootstepSounds','startOpacity','_footprintsData','findTargetSprite','roundYWithDirection','checkMovementEffectsStringTags','initMovementEffectsDirMoveSpeedMod','isLadder','scrolledY','586422okdJAx','33jDBdgR','_regionFootstepSounds','createMotionBlurMovementEffectsFilter','startBattle','addColorStop','SMART_RUSH_FILTER_ANGLE_OFFSET','FootprintsFilename','makeData','setDustCloudData','format','SmartRushDistance','DustCloud','yYCaT','removeChild','blendMode','_refresh','moveByInput','enableMotionTrails','updateCharacterFrame','ufEbx','status','AddDustCloud','addCommand','updateFootprintSprite','length','filter','fnVMt','normal','pitchRate','left','upper\x20right','playSmartBlinkFilterEffect','regions','qDdHf','isSmartJumping','width','SMART_BLINK_FILTER_ANGLE_OFFSET','_dustCloudBitmap','icjMY','createDustCloudForTarget','visible','AjpEd','FootstepsEnableDisable','sfxVolume','NoFootprintsEvent','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','hvrrd','parseRegionBasedFootprints','Scene_Options_maxCommands','MotionBlurFollower','drawDustCloud','canSmartBlink','getLastPluginCommandInterpreter','JDxom','eorcx','DustCloudName','Game_Picture_scaleX','dFcyU','adjustY','updateSmartJumpCooldown','_tilemap','trim','JhHkM','soundFrames','isSmartJumpEnabled','updateSmartMovementCooldowns','createDustCloudBasics','SpeedRate','Game_Interpreter_updateWaitMode','setValue','_targetScaleX'];_0x33e9=function(){return _0x28b22c;};return _0x33e9();}