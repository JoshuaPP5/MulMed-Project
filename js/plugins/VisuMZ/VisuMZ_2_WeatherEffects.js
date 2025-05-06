//=============================================================================
// VisuStella MZ - Weather Effects
// VisuMZ_2_WeatherEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeatherEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeatherEffects = VisuMZ.WeatherEffects || {};
VisuMZ.WeatherEffects.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.01] [WeatherEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weather_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ didn't come with too many weather effects. Only three: rain,
 * storm, and snow. This plugin will ramp that number up a considerable amount
 * and revise the way the original three weathers look, too. These new weather
 * patterns will help breathe life into your game for various scenarios and/or
 * cutscenes. The added control and customization options mean you can alter
 * their behaviors to your liking.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign multiple weathers up to a max of 20. For maps, there are 10 layers
 *   on top of the map and another 10 layers behind the tilemap (but above the
 *   parallax layer).
 * * Set certain maps to not show any weather through notetags. This allows you
 *   to avoid having to turn on and off your weather settings.
 * * The basic RPG Maker MZ weather patterns (Rain, Storm, and Snow) have been
 *   recreated to look better than before.
 * * Plugin Commands allow for game devs to place the newly added weather types
 *   with intricate levels of customization.
 * * Customization options available for weather patterns include spawn numbers
 *   control, spawn location control, opacity easing, trajectory properties,
 *   coloring options, overlay dimmer control, and more!
 * * There are 10 weather patterns for each of the 8-themed elements, alongside
 *   lots of preset icon-related weather patterns for over 80+ weather pattern
 *   types to choose from.
 * * More basic and easier to use directional flying icon weather patterns of
 *   varying speeds can be used to ease yourself into how weather patterns can
 *   be customized.
 * * Newly added weather patterns come with their own generated sprites.
 *   There's no need to use custom images or such unless you want to. Custom
 *   images can come in the form of icons or pictures. Some generated sprites
 *   include many variances (such as Snowflakes).
 * * Weather layers can now be placed on top of the map or below the map, aka
 *   between the tilemap and parallax layer.
 * * Plugin Commands allow the player to clear multiple weather layers, adjust
 *   the power of multiple weather layers, memorize, and even replay multiple
 *   weather layer patterns in a go.
 * * Up to 20 layers can be used for weather, all of each having different
 *   settings. 10 layers for above the map. 10 layers for below the map. This
 *   can be utilized to create more detailed weather effects than ever before.
 * * Common Events can be linked up with weather patterns, launching parallel
 *   whenever a weather particular respawns, allowing for special effects like
 *   screen flashes and/or playing sounds. This allows devs to match up certain
 *   weather patterns like thunder sounds and flashes with thunder bolts.
 * * A new option "Weather Density" has been added. The amount of weather
 *   sprites on screen can be tuned downward in order to reduce frame drops for
 *   players with weaker computers.
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
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them. Other things listed here are also worthy of
 * mentioning.
 *
 * ---
 *
 * Weather System Overwrite
 * 
 * As one would expect out of a plugin focused around changing weather effects,
 * the whole RPG Maker MZ weather system has been revamped. This means that a
 * lot of the default functions related to weather have been overwritten in
 * order to fulfill the demands of the plugin. Such demands include having more
 * control over the individual weather particles to the way the sprites are
 * handled and how the data persists for their behaviors.
 *
 * ---
 * 
 * Weather Layers
 * 
 * There are now multiple weather layers, allowing you to have multiple weather
 * patterns on simultaneously. Amongst the layers, there are upper and lower
 * layer types, too.
 * 
 * Upper layers are what RPG Maker MZ has, they exist above the tilemap. The
 * lower layers are new and exist below the tilemap but above the parallax
 * layer.
 * 
 * As such, weather effects below the tilemap won't be visible unless you are
 * using transparent tiles. This can be applied to windows or cliff tiles (for
 * some of these, you'll have to modify the tiles yourself). This effect can be
 * used to give a sense of depth, such as transparent windows observing a large
 * blizzard happening outside.
 * 
 * ---
 * 
 * Generated Weather Sprite Graphics
 * 
 * The default generated weather sprite graphics have been overwritten in favor
 * of better looking ones that we've made. Due to a technique that we've
 * created for this plugin, the generated weather sprites will also appear more
 * plentiful while keeping raw sprite counts low.
 * 
 * For those wondering, the "Rain", "Storm", and "Snow" weather types are the
 * default RPG Maker MZ weathers that we have changed. They can be accessed
 * through the usual event commands, or they can be accessed through Plugin
 * Commands.
 * 
 * Accessing these weather patterns through Plugin Commands gives you, the game
 * dev, more control over how they behave compared to the minimal control that
 * the default RPG Maker MZ event commands have.
 * 
 * ---
 * 
 * Custom Icons and Custom Pictures
 * 
 * If you plan on using custom icons or custom pictures, you might find it odd
 * that there is less volume of the weather sprite on the screen compared to
 * the generated graphics. This is due to a custering replication technique we
 * use for the sprite textures that make them appear more plentiful. To remedy
 * this, adjust the weight values for the icon variations and picture
 * variations to be higher than that of the generated sprites.
 * 
 * When designing custom icons and/or custom pictures for weather sprite
 * purposes, design them facing right at "0 degrees". This way, the angle will
 * align better and you can avoid using the "Visual Angle Offset" if you are
 * unfamiliar or troubled by offsets.
 * 
 * ---
 * 
 * RPG Maker MZ Tints
 * 
 * Weather patterns placed on the below tileset layer will be covered by RPG
 * Maker MZ's default tint layer, thus, affected by it. However, there's
 * nothing we can do about that one unlike the darkness overlay provided by the
 * Lighting Effects plugin where there's a workaround. Either you use the
 * Lighting Effects darkness overlay or you play work around tint usage in
 * regards to below tileset layer.
 * 
 * Weather patterns placed above the tileset layer will NOT be affected by RPG
 * Maker MZ's default tint layer nor will it be affected by the darkness
 * overlay from the Lighting Effects plugin. This is because not all effects
 * should be affected by it. If you do want to apply a tint to you, you can do
 * so via the custom settings and apply the tint manually. It's not applied
 * from the getgo because it's more efficient to make the upper weather sprites
 * unaffected first and applied later than the opposite.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Battle Core
 *
 * Those with the Battle Core can have weather effects show up in battle, too.
 * This does not happen without it. This is because the Battle Core has
 * provided the code infrastructure to support battle weather and this plugin
 * ties in with that code infrastructure better.
 *
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Weather Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Hues and tones are expensive to process graphically. Using a lot of hue
 *    and/or tone variations on lots of weather sprites at the same time can
 *    eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *    tone variations, keep the sprite count low by either using lower power
 *    settings or less sprites on the screen.
 * 
 * 2. Yes, this plugin provides 20 layers (10 for upper and 10 for lower), but
 *    that doesn't mean you should use all 20 at the same time at max power. Be
 *    moderate in how many weather layers you use at a time. Just because there
 *    is an option for the player to adjust the weather density doesn't mean it
 *    should be okay to go wild with weather layers.
 * 
 * 3. The majority of the default settings should be safe to use on their own,
 *    but that also suggests that they're used by themselves. You can usually
 *    combine three or four default weather patterns together across different
 *    layers, but do exercise restraint when customizing the settings from
 *    their default values and using more layers at a time.
 * 
 * 4. Avoid having too many sprites on the screen at once. Each weather sprite
 *    adds to the number of processes the game has to keep track of and update
 *    each individual frame. Especially weather patterns with sprites that
 *    alter light or affect it. While the plugin is optimized to allow handling
 *    of a decently large number of sprites within the hundreds, do not go
 *    overboard and use them with modesty.
 * 
 * 5. If you choose to not pre-render generated sprites at the start of the
 *    game, some weather patterns may take a bit of processing power to render
 *    generated sprites on the spot especially if there are a lot of sprites to
 *    work with. The pre-render option is the most ideal to use if you plan on
 *    using generated sprites. If you intend to use mostly icons or custom
 *    pictures, pre-rendering at the start of the game can be turned off.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to absolute limitations.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_LightingEffects
 * 
 * Weather patterns placed on the lower layer will be affected by the darkness
 * overlay that the VisuStella MZ Lighting Effects plugin utilizes. This means
 * that even the supposively "brighter" weather patterns will be dimmed out
 * (such as the Flame Wall or Aurora to name a few). To deal with this, use the
 * Lighting Effects plugin's "Auto-Light Regions" and mark the parallax visible
 * tiles with those said regions.
 * 
 * Weather patterns placed on the upper layer will not be affected by the
 * darkness overlay in order to allow the weather have better contrast in
 * addition to following RPG Maker MZ's decision to not have weather affected
 * by tints either. If you want to tint the upper layer weather, you can add
 * the tint manually through the weather pattern's custom Image Settings and
 * apply a hue.
 * 
 * ---
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
 * === Convenience-Related Notetags ===
 * 
 * ---
 *
 * <No Weather>
 *
 * - Used for: Map Notetags
 * - Sets the map to not show any weather effects regardless of what's actually
 *   being set currently. Weather effects will resume once the player leaves
 *   the map and enters one that does not forbid weather effects.
 * - This is useful for indoor maps when you don't want to turn weather effects
 *   on and off constantly.
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
 * === Basic Plugin Commands ===
 * 
 * ---
 * 
 * BASIC: Adjust Weather Power
 * - Adjusts the power of the target weather layer(s).
 * 
 *   Layer(s):
 *   - Which weather layer(s) do you wish to adjust?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Adjust weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, both are above the battle field.
 * 
 *   Power:
 *   - Adjust power by how much?
 *   - Caps at 1 and 9.
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How many frames to fully adjust the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 * 
 * ---
 *
 * BASIC: Clear Weather
 * - Clears out target weather layer(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to clear?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Clear weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, both are above the battle field.
 *
 *   Duration:
 *   - How many frames to fully clear the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 *
 * ---
 * 
 * BASIC: Memorize Weather
 * - Memorizes the settings for target weather pattern(s) so that you can
 *   reuse it later.
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to save?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Save weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, both are above the battle field.
 * 
 * ---
 * 
 * BASIC: Replay Memorized Weather
 * - Replays target memorized weather pattern(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to replay?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Replay weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, both are above the battle field.
 * 
 *   Duration:
 *   - How many frames to fully replay the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?:
 *   - Wait for weather to completely replay before moving on with the next
 *     event command?
 * 
 * ---
 * 
 * === Weather Pattern-Related Plugin Commands ===
 * 
 * ---
 *
 * Weather Pattern
 * - All weather patterns provided by this plugin use the following format.
 * Yes, all of them. This is to ensure that there is familiarity when modifying
 * one weather pattern and then moving to another and reducing the amount of
 * time needed to fiddle around with each of them. As such, the parameters will
 * affect each weather pattern the same exact way.
 * 
 *   ---
 *
 *   Main Settings:
 *
 *     Power:
 *     - What weather power do you wish to apply?
 *     - Use values between 1 and 9.
 *     - You may use JavaScript code.
 *
 *     Duration:
 *     - How many frames to fully change the weather?
 *     - You may use JavaScript code.
 *
 *     Wait For Completion?:
 *     - Wait for weather to completely change before moving on with the next
 *       event command?
 * 
 *   ---
 * 
 *   Layer Settings
 *
 *     Layer(s):
 *     - Which weather layer(s) do you wish to apply changes?
 *     - Use values between 1 and 10.
 *     - You may use JavaScript code.
 *
 *     Upper/Lower?:
 *     - Play the weather pattern above the tileset or below it?
 *     - You can select "both" to affect both.
 * 
 *   ---
 * 
 *   Customization
 *
 *     Custom Settings:
 *     - Adjust the custom settings involving this weather.
 *     - More information below:
 *
 * ---
 *
 * Custom Settings
 * - Each weather pattern's "Custom Settings" will have each of the following
 * options available to it.
 *
 *   Sprite Settings:
 *   - The general settings involving the weather sprites.
 *
 *   Dimmer Overlay:
 *   - Settings involving the dimmer overlay cast over the screen.
 *
 *   Image Settings:
 *   - Settings for the images used for the weather sprites.
 *   - Weathers with multiple images will be picked at random.
 *
 *   Special Effects:
 *   - Specialized effects that are turned on for specific weather types can
 *     be found here.
 *
 *   Trajectory Settings:
 *   - Settings used to determine the trajectory a weather sprite will take
 *     and how they behave on it.
 *
 * ---
 *
 * Sprite Settings
 * - The general settings involving the weather sprites.
 *
 *   Lifespan:
 *   - Lifespan of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each lifespan value?
 *
 *     Spawn Location X:
 *     - What x location should the weather sprites appear?
 *
 *       Offset X:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: left. Positive: right.
 *
 *     Spawn Location Y:
 *     - What y location should the weather sprites appear?
 *
 *       Offset Y:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: up. Positive: down.
 *
 *     Map Bound?:
 *     - Do the weather sprites move with the map scrolling?
 *
 *   Starting Opacity:
 *   - Starting opacity of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each starting opacity value?
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply for opacity.
 *
 *     Fade In Time:
 *     - How many frames does it take for the sprite to fade in?
 *     - Use 0 to start immediately at full opacity.
 *
 *   Scale:
 *   - What is the scale of the sprite?
 *   - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *     Variance:
 *     - What variance is there to the main scale value?
 *
 *     Ratio X:
 *     Ratio Y:
 *     - What is the ratio of this sprite's scale X/Y?
 *     - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *   Total Sprite Minimum:
 *   - What is the minimum number of sprites on the screen?
 *
 *     Total Per Power:
 *     - Increase the total number of sprites per power by this.
 *     - Lowest power is 1.
 *     - Highest power is 9.
 *
 * ---
 *
 * Dimmer Overlay
 * - Settings involving the dimmer overlay cast over the screen.
 *
 *   Color:
 *   - Dimmer color. This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 *   Opacity Minimum:
 *   - What is the minimum opacity value for the dimmer?
 *
 *     Opacity Per Power:
 *     - What is the total opacity value per power for the dimmer?
 *
 * ---
 *
 * Image Settings
 * - Settings for the images used for the weather sprites.
 * - Weathers with multiple images will be picked at random.
 *
 *   Generated Image?:
 *   - Include the plugin-generated image for this weather type?
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Icon(s):
 *   - Which icons do you wish to include for the images to appear as?
 *   - When using icons, icons are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Picture(s):
 *   - Which pictures do you wish to include for the images to appear as?
 *   - When using pictures, pictures are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the weather sprite?
 *
 *   Hue Variations:
 *   - What hue variations will be randomly selected from?
 *   - Use a value between 0 and 360.
 *
 *   Tone Variations:
 *   - What tone variations will be randomly selected from?
 *   - Format for each: [Red, Green, Blue, Gray]
 * 
 *   *NOTE*
 * 
 *   Hues and tones are expensive to process graphically. Using a lot of hue
 *   and/or tone variations on lots of weather sprites at the same time can
 *   eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *   tone variations, keep the sprite count low by either using lower power
 *   settings or less sprites on the screen.
 *
 * ---
 *
 * Special Effects
 * - Specialized effects that are turned on for specific weather types can
 * be found here.
 *
 *   Allow Visible Player?:
 *   - Make the player more visible by reducing the opacity of nearby weather
 *     sprites?
 *
 *   Flat Fluttering?:
 *   - Is the object flat and flutters in the wind?
 *   - Or does the object have volume and doesn't?
 *
 *   Longevity:
 *   - Weather effects with longevity don't expire until the weather pattern
 *     type is changed.
 *
 *   Hue Sway Range:
 *   - How much should the hue sway back and forth?
 *   - JavaScript code can be used.
 *
 *     Hue Sway Speed:
 *     - What speed does the angle sway?
 *     - Lower is slower.
 *     - Higher is faster.
 *     - JavaScript code can be used.
 *
 *   Respawn Common Event:
 *   - Play a specific Common Event when this event respawns?
 *   - The Common Event will run as a Once Parallel.
 *
 *   Respawn Delay Minimum:
 *   - Is there a delay to the respawn?
 *   - This is how many frames the sprite must wait before respawning.
 *
 *     RNG Delay Per Power:
 *     - How many randomized frames of delay per power must be waited?
 *
 *   Scale In:
 *   - What scale ratio should the sprite spawn in at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale in effect take?
 *     - Scale in will always head towards 1.0.
 *
 *   Scale Out:
 *   - What scale ratio should the sprite despawn out at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale out effect take?
 *     - Scale in will usually head from 1.0.
 *
 *   Custom Finish:
 *
 *     Fireworks Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fireworks explosion?
 *
 *     Sparkle Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fabulous spinning sparkle effect?
 *
 * ---
 *
 * Trajectory Settings
 * - Settings used to determine the trajectory a weather sprite will take
 *   and how they behave on it.
 *
 *   Trajectory Type:
 *   - What trajectory type is used?
 *     - Both Map and Battle
 *       - Straight
 *       - Frozen
 *     - Map Only
 *       - Player-Locked
 *       - Follower-Locked
 *       - Event-Locked
 *     - Battle Only
 *       - Actor-Locked
 *       - Enemy-Locked
 *       - User-Locked
 *       - Target-Locked
 * 
 *     Locked ID/Index:
 *     - For locked trajectories only. Input the follower index.
 *     - Or ID of event, actor, enemy.
 *
 *     Offset X (Locked):
 *     - For locked trajectories only.
 *     - Negative: left. Positive: right.
 *
 *     Offset Y (Locked):
 *     - For locked trajectories only.
 *     - Negative: up. Positive: down.
 *
 *   Speed:
 *   - What speed is the sprite moving at? Lower is slower.
 *   - Higher is faster.
 *   - JavaScript code can be used.
 *
 *     Speed Variance:
 *     - What variance is there to the speed value?
 *
 *   Angle:
 *   - What angle (0 to 360) is the sprite moving toward?
 *   - JavaScript code can be used.
 *
 *     Align Angle?:
 *     - Should the sprite rotate itself according to the angle it is moving at
 *       across the screen?
 *
 *     Angle Variance:
 *     - What variance is there to the base angle?
 *
 *     Visual Angle Offset:
 *     - Offset the visual by this many degrees. Used for images that aren't
 *       made aligned with 0 degrees facing left.
 *
 *     Angle Arc:
 *     - How should the trajectory arc when the sprite moves?
 *     - JavaScript code can be used.
 *
 *     Angle Sway Range:
 *     - How much should the angle sway as the sprite moves?
 *     - JavaScript code can be used.
 *
 *       Angle Sway Speed:
 *       - What speed does the angle sway? Lower is slower.
 *       - Higher is faster.
 *       - JavaScript code can be used.
 *
 *   Spin Speed:
 *   - What speed do the sprites spin?
 *   - JavaScript code can be used.
 *   - Some generated weather pattern sprites use the clustering replication
 *     technique. This allows the weather pattern to appear more full and have
 *     higher volume while keeping sprite counts low. As such, not all weather
 *     patterns will spin the way you expect. This is not a bug.
 *
 *     Spin Speed Variance:
 *     - What variance is there to the spin speed?
 *
 *     Reverse Spin?:
 *     - Can the spin go in the reverse direction?
 *
 *   X Sway Range:
 *   Y Sway Range:
 *   - How much should the X/Y value sway as the sprite moves?
 *   - JavaScript code can be used.
 *
 *     Sway Speed:
 *     - What speed does the sway move? Lower is slower.
 *     - Higher is faster. JavaScript code can be used.
 *
 * ---
 * 
 * === Weather Pattern-Type Plugin Commands ===
 * 
 * Each of the weather patterns below all use the same plugin command structure
 * as listed in the section above. They are separated in various themes to help
 * better organize them and quickly find them. Each weather pattern has their
 * own generated image type that they use.
 * 
 * ---
 * 
 * Fire-Themed
 * 
 *   FIRE: Embers:
 *   - Oh, Ember, you will remember. So warm and tender.
 *   - Embers rise off from the ground upward.
 *
 *   FIRE: Fireflies:
 *   - Take my love, take my land, take me where I cannot stand.
 *   - Fireflies will spawn and float around.
 *
 *   FIRE: Firestorm:
 *   - This is fine.
 *   - Rain fiery bolts of flames from the heavens!
 *
 *   FIRE: Fireworks:
 *   - You just gotta ignite the light and let it shine!
 *   - A shot of fire flies up and blows up into a flower.
 *
 *   FIRE: Flame Haze:
 *   - Flaming Hair Blazing Eyes!
 *   - A fiery smoke clouds the screen!
 *
 *   FIRE: Flame Wall:
 *   - Is it me, or is it hot in here? Oh, it's me.
 *   - A wall of flames appears on the bottom part of the screen.
 *
 *   FIRE: Heat Clouds:
 *   - Fiery conglomerations of clouds.
 *   - Heat clouds scorch the top of the screen.
 *
 *   FIRE: Meteor Shower:
 *   - Clustering wishes will become a new shining star!
 *   - A nonstop swarm of meteors fall in the night sky.
 *
 *   FIRE: Shooting Stars:
 *   - Make a wish! A wholesome one, please.
 *   - Shooting stars appear over the horizon of the night sky.
 *
 *   FIRE: Sunlight Beams:
 *   - Aka crepuscular rays. Makes any day brighter!
 *   - Sun beams shine down from the heavens.
 * 
 * ---
 *
 * Ice-Themed
 *
 *   ICE: Arctic Gleam:
 *   - Oh, erie bluish glow of the arctic.
 *   - Illuminate the frozen land below!
 *
 *   ICE: Aurora Borealis:
 *   - Also known as the Northern Lights.
 *   - Auroras dance across the top of the screen.
 *
 *   ICE: Blizzard:
 *   - Let it go, let it go! Can't hold it back anymore!
 *   - Concentrated snowfall covers the screen.
 *
 *   ICE: Diamond Dust:
 *   - Diamond dust falls from the skies.
 *   - Slightly illuminated ice particles descend from above.
 *
 *   ICE: Glistening Ice:
 *   - Walkin' on thin ice!
 *   - Ice particles sparkle from all around.
 *
 *   ICE: Ice Fog:
 *   - Yo! VIP! Let's Kick it!
 *   - Frozen fog covers the whole screen.
 *
 *   ICE: Sleet:
 *   - Slightly heavier and more solid than snow!
 *   - Frozen ice crystals snow down from above.
 *
 *   ICE: Snow:
 *   - Brace yourselves! Winter is coming!
 *   - Snow falls from the sky and flutters downward.
 *
 *   ICE: Snow Clouds:
 *   - Icy gatherings of clouds ready to deliver snow.
 *   - Snow clouds blanket the top of the screen.
 *
 *   ICE: Snowflakes:
 *   - Snowflake! Snowflake! Little snowflake!
 *   - Generated snowflakes will have random patterns.
 *
 * ---
 *
 * Thunder-Themed
 *
 *   THUNDER: Discharge:
 *   - Danger! Danger! High voltage!
 *   - Electricity discharges from the sides of the screen.
 *
 *   THUNDER: Plasma Bolt:
 *   - A horizontal bolt of electricity! From left to right!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Plasma Surge:
 *   - The windows are becoming stained with a nostalgic color.
 *   - Nonstop plasma bolts flood the screen.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Purple Haze:
 *   - Purple haze all around. Don't know if I'm coming up or down.
 *   - A purple fog blankets the whole screen.
 *
 *   THUNDER: Spider Lightning:
 *   - Nothing to do with spiders.
 *   - Bolts expand outwards from a target.
 *
 *   THUNDER: Static Charge:
 *   - Snap! Crackle! Pop!
 *   - Highly charged target emits static.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Bolt:
 *   - More than just an expensive charging cable. Giant bolt flashes
 *     from above!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Clouds:
 *   - These thunderclouds, oh no, no!
 *   - Thunder-ready clouds fly atop the top of the screen.
 *
 *   THUNDER: Thunder Surge:
 *   - When you walk away, you don't hear me say.
 *   - Nonstop thunder bolts scour the skies.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Ultraviolet Beams:
 *   - Get out some of that SPF 100+!
 *   - (This is NOT real UV Light!)
 *   - Ultraviolet lights are coming from the sky!
 *
 * ---
 *
 * Water-Themed
 *
 *   WATER: Bubbles Rising:
 *   - Let's not burst your bubble!
 *   - Bubbles will rise up towards the top of the screen.
 *
 *   WATER: Cloud Burst:
 *   - A sudden massive deluge of rain!
 *   - A near vertical storm of massive volume.
 *
 *   WATER: Dripping Water:
 *   - Leaky ceilings? It's time to call a plumber.
 *   - Water droplets drip from above.
 *
 *   WATER: Mist:
 *   - Not to be confused with the video game. That has a Y.
 *   - A suspended mist covers the screen.
 *
 *   WATER: Rain:
 *   - Rain, rain, go away! Come again some other day!
 *   - Raindrops will fall from the sky all over the screen.
 *
 *   WATER: Rain Clouds:
 *   - It's raining men! Hallelujah! It's raining men, amen!
 *   - Rain-filled clouds hover menacingly at the top of the screen.
 *
 *   WATER: Rainbow Arch:
 *   - Somewhere over the rainbow~
 *   - A large rainbow arch appears in the corner of the screen.
 *
 *   WATER: Rising Steam:
 *   - Take more photos to train your selfie steam!
 *   - Steam vapor clouds rise from below.
 *
 *   WATER: Soap Bubbles:
 *   - I will try to blow a bubble that will last all day.
 *   - Soap bubbles float and hover around.
 *
 *   WATER: Storm:
 *   - A MIGHTY storm!
 *   - Large and long raindrops fall from the sky creating a storm.
 *
 * ---
 *
 * Earth-Themed
 *
 *   EARTH: Acid Rain:
 *   - Real acid rain doesn't glow in the dark.
 *   - But this one sure does.
 *
 *   EARTH: Crumbling Cave:
 *   - Do NOT grab any suspiciously placed rubies.
 *   - Bits and pieces of the cave ceiling crumble.
 *
 *   EARTH: Dust Clouds:
 *   - Darkened dust covers the surroundings!
 *   - Dust clouds will fill up the screen.
 *
 *   EARTH: Dust Storm:
 *   - Happens in places other than Nashville.
 *   - Darkened dust launches across the screen.
 *
 *   EARTH: House Dust:
 *   - Floating white dust particles with nowhere to go.
 *   - So they'll just make themselves at home.
 *
 *   EARTH: Pollution Clouds:
 *   - Absolutely disgusting colored pollution clouds.
 *   - Pollution clouds cover the top of the screen.
 *
 *   EARTH: Radioactive Beams:
 *   - Alert! Alert! Alert! Nuclear green lights!
 *   - Nuclear green lights irradiate from the clouds.
 *
 *   EARTH: Sand Clouds:
 *   - Straight from the Pyramids of Giza!
 *   - Sand clouds will surround everything!
 *
 *   EARTH: Sandstorm:
 *   - Darude! Sandstorm!
 *   - Sand blasts across the screen from one end to the other.
 *
 *   EARTH: Toxic Gas:
 *   - More toxic than the comments section of social media!
 *   - A foggy green gas blankets the screen.
 *
 * ---
 *
 * Wind-Themed
 *
 *   WIND: Autumn Leaves:
 *   - Red, yellow, orange, brown leaves are falling all around.
 *   - See them dance in the cool, fall air. 
 *
 *   WIND: Balloons:
 *   - You and I in a little toy shop, buy a bag balloons with the money
 *     we've got.
 *
 *   WIND: Cherry Blossoms:
 *   - The emblem of love and good luck.
 *   - Cherry blossom petals flutter down from above.
 *
 *   WIND: Dandelion Seeds:
 *   - Floating on the air. Never seem to care.
 *   - Dandelion seeds will flow up into the air.
 *
 *   WIND: Grassy Gust:
 *   - A gust of wind!
 *   - From right to left, grass flies with it.
 *   - Best when paired with a Tempest.
 *
 *   WIND: Green Leaves:
 *   - Leaf me alone!
 *   - Green leaves fall above, spinning round and round.
 *
 *   WIND: Pollen:
 *   - Bless you! Gesundheit! Salute!
 *   - A cloud of pollen grains travel about the screen.
 *
 *   WIND: Tempest:
 *   - Brought to you by a friendly slime.
 *   - Powerful gusts of wind blast across the screen.
 *
 *   WIND: White Clouds:
 *   - Not the main character from Final Fantasy VII.
 *   - Fluffy white clouds slowly drift across the upper screen.
 *
 *   WIND: Xtreme Speed:
 *   - Gotta go fast! Speedlines whip past!
 *   - Works best below the tileset layer.
 *
 * ---
 *
 * Light-Themed
 *
 *   LIGHT: Confetti:
 *   - Party like it's 1999!
 *   - Confetti of differing shapes drop from the sky.
 *
 *   LIGHT: Lens Flare:
 *   - Relive the amateur days from Photoshop!
 *   - A lens flare descends from the upper corner of the sky!
 *
 *   LIGHT: Light Burst:
 *   - Sometimes also known as Sun Bursts.
 *   - CAUTION: Bright lights!
 *   - Bright white light bursts out from a target.
 *
 *   LIGHT: Light Orbs:
 *   - Show me the light!
 *   - Light orbs fly round and round.
 *
 *   LIGHT: Pastel Brume:
 *   - Cute pastel colors forming a foggy brume.
 *   - Various bright colors cover the screen.
 *
 *   LIGHT: Prism Burst:
 *   - More color than a bag of candy!
 *   - CAUTION: Bright lights!
 *   - Lights of all colors expand out from a target.
 *
 *   LIGHT: Prismatic Gleam:
 *   - Our seven lights spring to the task!
 *   - Colors of all sorts shine from the skies high above.
 *
 *   LIGHT: Rainbow Clouds:
 *   - Colorful clouds dot the heavens.
 *   - Multi-colored clouds slowly drift across the upper screen.
 *
 *   LIGHT: Rainbow Orbs:
 *   - Taste the rainbow!
 *   - Multi-colored rainbow orbs spawn in and float about.
 *
 *   LIGHT: Star Fall:
 *   - You're a star. You're one in a million.
 *   - Stars fall out of the night sky spinning round and round.
 *
 * ---
 *
 * Dark-Themed
 *
 *   DARK: Ash Debris:
 *   - Gotta ketchum all.
 *   - Pieces of ash debris flutter through the air.
 *
 *   DARK: Ashfall:
 *   - But unlike thunder, this didn’t stop. It went on and on.
 *   - Volcanic ash pieces descend from the skies above.
 *
 *   DARK: Blood Rain:
 *   - It's actually a real phenomenon.
 *   - However, it's not really blood.
 *
 *   DARK: Dark Orbs:
 *   - Hello darkness, my old friend.
 *   - Dark orbs circle about the screen.
 *
 *   DARK: Fumes:
 *   - Don't inhale any!
 *   - Dark fume clouds plume from below.
 *
 *   DARK: Moonlight Beams:
 *   - Moonlight is the smuggler's enemy.
 *   - Light the path in the night sky by moonshine.
 *
 *   DARK: Shadow Siphon:
 *   - Drain all of the light! CAUTION: Dark lights!
 *   - Light from around is all drained into one area.
 *
 *   DARK: Smog:
 *   - Smoking is bad, mkay?
 *   - Smokey fog (aka Smog) cover the whole screen.
 *
 *   DARK: Smoke Clouds:
 *   - Accompanied by factories owned by evil corporations.
 *   - Smoke clouds blot out the sun.
 *
 *   DARK: Sootfall:
 *   - Try not to build a snowman out of this.
 *   - Smoke-contaminated snow falls from the sky.
 *
 * ---
 *
 * Icons-Related
 *
 *   SLOW: Flying Icons ↑:
 *   MEDIUM: Flying Icons ↑:
 *   FAST: Flying Icons ↑:
 *   - Icons fly to the top at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↗:
 *   MEDIUM: Flying Icons ↗:
 *   FAST: Flying Icons ↗:
 *   - Icons fly upper right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons →:
 *   MEDIUM: Flying Icons →:
 *   FAST: Flying Icons →:
 *   - Icons fly to the right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↘:
 *   MEDIUM: Flying Icons ↘:
 *   FAST: Flying Icons ↘:
 *   - Icons fly lower right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↓:
 *   MEDIUM: Flying Icons ↓:
 *   FAST: Flying Icons ↓:
 *   - Icons fly to the bottom at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↙:
 *   MEDIUM: Flying Icons ↙:
 *   FAST: Flying Icons ↙:
 *   - Icons fly lower left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ←:
 *   MEDIUM: Flying Icons ←:
 *   FAST: Flying Icons ←:
 *   - Icons fly to the left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↖:
 *   MEDIUM: Flying Icons ↖:
 *   FAST: Flying Icons ↖:
 *   - Icons fly upper left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ●:
 *   MEDIUM: Flying Icons ●:
 *   FAST: Flying Icons ●:
 *   - Icons hover at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Weather Effects plugin. There aren't too many
 * settings to adjust here as the majority of the customization options exist
 * within each weather pattern-related Plugin Command instead. However, the
 * options here allow you to control what the weather patterns do not.
 *
 * ---
 * 
 * General Settings
 * 
 *   Pre-Render Generated?:
 *   - Pre-render generated images for weather patterns?
 *   - This reduces lag for on-demand weather patterns.
 * 
 *     # of Variations:
 *     - How many variations of each rendered weather pattern do you want?
 * 
 *   Smooth Icons?
 *   - Smooth out the icons used for weather sprites?
 *   - Or keep them pixelated?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * There is only one option added through this plugin and it's an option that
 * allows the player to adjust what % of weather sprites are visible on the
 * screen at a time. This is helpful for those who may have weaker computers or
 * those who may find the weather patterns to be a bit intrusive at times.
 * 
 * The number of minimum weather sprites will always be shown. The number of
 * added sprites based on power will be what the weather density value affects.
 * 
 * If you are using the Options Core, the settings found in the Options Core
 * need to be managed instead of these as these will be overwritten in favor of
 * what the Options Core will offer.
 *
 * ---
 * 
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Weather Density' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 * * Aries
 * 
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused any weather effects on layers 9 and 10 to
 *    cancel each other out. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: April 6, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Basic
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Basic
 * @text Category - Basic
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicAdjustWeatherPower
 * @text BASIC: Adjust Weather Power
 * @desc Adjusts the power of the target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to adjust?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Adjust weather layer(s) from the upper or lower layers?
 * @default upper
 * 
 * @arg Power:eval
 * @text Power
 * @desc Adjust power by how much? Caps at 1 and 9.
 * You may use JavaScript code.
 * @default +1
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully adjust the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely adjust before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicClearWeather
 * @text BASIC: Clear Weather
 * @desc Clears out target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to clear?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Clear weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully clear the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely clear before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicMemorizeWeather
 * @text BASIC: Memorize Weather
 * @desc Memorizes the settings for target weather pattern(s) so
 * that you can reuse it later.
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to save?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc save weather layer(s) from the upper or lower layers?
 * @default both
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicReplayMemory
 * @text BASIC: Replay Memorized Weather
 * @desc Replays target memorized weather pattern(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to replay?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Replay weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully replay the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely replay before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Fire
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Fire
 * @text Category - Fire-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Embers
 * @text FIRE: Embers
 * @desc Oh, Ember, you will remember. So warm and tender.
 * Embers rise off from the ground upward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireflies
 * @text FIRE: Fireflies
 * @desc Take my love, take my land, take me where I cannot stand.
 * Fireflies will spawn and float around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Firestorm
 * @text FIRE: Firestorm
 * @desc This is fine.
 * Rain fiery bolts of flames from the heavens!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireworks
 * @text FIRE: Fireworks
 * @desc You just gotta ignite the light and let it shine!
 * A shot of fire flies up and blows up into a flower.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower 70%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"245\",\"opacityVariance:num\":\"10\",\"opacityEasingType:str\":\"InCirc\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[\\\"30\\\",\\\"60\\\",\\\"90\\\",\\\"120\\\",\\\"150\\\",\\\"180\\\",\\\"210\\\",\\\"240\\\",\\\"270\\\",\\\"300\\\",\\\"330\\\"]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"true\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameHaze
 * @text FIRE: Flame Haze
 * @desc Flaming Hair Blazing Eyes!
 * A fiery smoke clouds the screen!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#f26c4f\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameWall
 * @text FIRE: Flame Wall
 * @desc Is it me, or is it hot in here? Oh, it's me.
 * A wall of flames appears on the bottom part of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"lower 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"50\",\"totalPerPower:num\":\"25\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"32\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"32\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_HeatClouds
 * @text FIRE: Heat Clouds
 * @desc Fiery conglomerations of clouds.
 * Heat clouds scorch the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_MeteorShower
 * @text FIRE: Meteor Shower
 * @desc Clustering wishes will become a new shining star!
 * A nonstop swarm of meteors fall in the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.6\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"15\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_ShootingStar
 * @text FIRE: Shooting Stars
 * @desc Make a wish! A wholesome one, please.
 * Shooting stars appear over the horizon of the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_SunBeams
 * @text FIRE: Sunlight Beams
 * @desc Aka crepuscular rays. Makes any day brighter!
 * Sun beams shine down from the heavens.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Ice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Ice
 * @text Category - Ice-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_ArcticBeam
 * @text ICE: Arctic Gleam
 * @desc Oh, erie bluish glow of the arctic.
 * Illuminate the frozen land below!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Aurora
 * @text ICE: Aurora Borealis
 * @desc Also known as the Northern Lights.
 * Auroras dance across the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ccffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Blizzard
 * @text ICE: Blizzard
 * @desc Let it go, let it go! Can't hold it back anymore!
 * Concentrated snowfall covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"200\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#cccccc\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"205\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"12\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_DiamondDust
 * @text ICE: Diamond Dust
 * @desc Diamond dust falls from the skies.
 * Slightly illuminated ice particles descend from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_GlisteningIce
 * @text ICE: Glistening Ice
 * @desc Walkin' on thin ice!
 * Ice particles sparkle from all around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"45\",\"lifespanVariance:num\":\"15\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuad\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_IceFog
 * @text ICE: Ice Fog
 * @desc Yo! VIP! Let's Kick it!
 * Frozen fog covers the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"8\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Sleet
 * @text ICE: Sleet
 * @desc Slightly heavier and more solid than snow!
 * Frozen ice crystals snow down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"140\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"8\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snow
 * @text ICE: Snow
 * @desc Brace yourselves! Winter is coming!
 * Snow falls from the sky and flutters downward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_SnowClouds
 * @text ICE: Snow Clouds
 * @desc Icy gatherings of clouds ready to deliver snow.
 * Snow clouds blanket the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snowflakes
 * @text ICE: Snowflakes
 * @desc Snowflake! Snowflake! Little snowflake!
 * Generated snowflakes will have random patterns.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"220\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"230\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Thunder
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Thunder
 * @text Category - Thunder-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Discharge
 * @text THUNDER: Discharge
 * @desc Danger! Danger! High voltage!
 * Electricity discharges from the sides of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaBolt
 * @text THUNDER: Plasma Bolt
 * @desc A horizontal bolt of electricity! From left to right!
 * Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaSurge
 * @text THUNDER: Plasma Surge
 * @desc The windows are becoming stained with a nostalgic color.
 * Nonstop plasma bolts flood the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PurpleHaze
 * @text THUNDER: Purple Haze
 * @desc Purple haze all around. Don't know if I'm coming up or down.
 * A purple fog blankets the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"96\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#8560a8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_SpiderLightning
 * @text THUNDER: Spider Lightning
 * @desc Nothing to do with spiders.
 * Bolts expand outwards from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-8\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_StaticCharge
 * @text THUNDER: Static Charge
 * @desc Snap! Crackle! Pop!
 * Highly charged target emits static.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.25\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-12\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderbolt
 * @text THUNDER: Thunder Bolt
 * @desc More than just an expensive charging cable. Giant bolt
 * flashes from above! Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderclouds
 * @text THUNDER: Thunder Clouds
 * @desc These thunderclouds, oh no, no!
 * Thunder-ready clouds fly atop the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#605ca8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thundersurge
 * @text THUNDER: Thunder Surge
 * @desc When you walk away, you don't hear me say.
 * Nonstop thunder bolts scour the skies.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_UltravioletBeams
 * @text THUNDER: Ultraviolet Beams
 * @desc Get out some of that SPF 100+! (This is NOT real UV Light!)
 * Ultraviolet lights are coming from the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Water
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Water
 * @text Category - Water-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Bubbles
 * @text WATER: Bubbles Rising
 * @desc Let's not burst your bubble!
 * Bubbles will rise up towards the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00aaaa\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_CloudBurst
 * @text WATER: Cloud Burst
 * @desc A sudden massive deluge of rain!
 * A near vertical storm of massive volume.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#303030\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"8\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"18\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_DrippingWater
 * @text WATER: Dripping Water
 * @desc Leaky ceilings? It's time to call a plumber.
 * Water droplets drip from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"60\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Mist
 * @text WATER: Mist
 * @desc Not to be confused with the video game. That has a Y.
 * A suspended mist covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Rain
 * @text WATER: Rain
 * @desc Rain, rain, go away! Come again some other day!
 * Raindrops will fall from the sky all over the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainClouds
 * @text WATER: Rain Clouds
 * @desc It's raining men! Hallelujah! It's raining men, amen!
 * Rain-filled clouds hover menacingly at the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainbowArch
 * @text WATER: Rainbow Arch
 * @desc Somewhere over the rainbow~
 * A large rainbow arch appears in the corner of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"right border\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower border\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.30\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RisingSteam
 * @text WATER: Rising Steam
 * @desc Take more photos to train your selfie steam!
 * Steam vapor clouds rise from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.5\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_SoapBubbles
 * @text WATER: Soap Bubbles
 * @desc I will try to blow a bubble that will last all day.
 * Soap bubbles float and hover around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"0.0\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.005\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Storm
 * @text WATER: Storm
 * @desc A MIGHTY storm!
 * Large and long raindrops fall from the sky creating a storm.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#404040\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Earth
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Earth
 * @text Category - Earth-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_AcidRain
 * @text EARTH: Acid Rain
 * @desc Real acid rain doesn't glow in the dark.
 * But this one sure does.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c4df9b\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_CrumblingCave
 * @text EARTH: Crumbling Cave
 * @desc Do NOT grab any suspiciously placed rubies.
 * Bits and pieces of the cave ceiling crumble.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"OutQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.00\",\"scaleVariance:num\":\"0.00\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.5\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"8\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"8\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustClouds
 * @text EARTH: Dust Clouds
 * @desc Darkened dust covers the surroundings!
 * Dust clouds will fill up the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"72\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustStorm
 * @text EARTH: Dust Storm
 * @desc Happens in places other than Nashville.
 * Darkened dust launches across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_HouseDust
 * @text EARTH: House Dust
 * @desc Floating white dust particles with nowhere to go.
 * So they'll just make themselves at home.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.0025\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.0025\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_PollutionClouds
 * @text EARTH: Pollution Clouds
 * @desc Absolutely disgusting colored pollution clouds.
 * Pollution clouds cover the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_RadioactiveBeams
 * @text EARTH: Radioactive Beams
 * @desc Alert! Alert! Alert! Nuclear green lights!
 * Nuclear green lights irradiate from the clouds.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#00ff00\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_SandClouds
 * @text EARTH: Sand Clouds
 * @desc Straight from the Pyramids of Giza!
 * Sand clouds will surround everything!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_Sandstorm
 * @text EARTH: Sandstorm
 * @desc Darude! Sandstorm!
 * Sand blasts across the screen from one end to the other.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_ToxicGas
 * @text EARTH: Toxic Gas
 * @desc More toxic than the comments section of social media!
 * A foggy green gas blankets the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"type:str":"straight","lockedOffsetX:eval":"+0","lockedOffsetY:eval":"+0","speed:eval":"1.2","speedVariance:eval":"0.3","angle:eval":"180","alignAngle:eval":"false","angleVariance:eval":"2","angleOffset:eval":"+0","angleArc:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","spinSpeed:eval":"+0","spinSpeedVariance:eval":"0","reverseSpin:eval":"false","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wind
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Wind
 * @text Category - Wind-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_AutumnLeaves
 * @text WIND: Autumn Leaves
 * @desc Red, yellow, orange, brown leaves are falling all around.
 * See them dance in the cool, fall air. 
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Balloons
 * @text WIND: Balloons
 * @desc You and I in a little toy shop,
 * buy a bag balloons with the money we've got.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.5\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"1.5\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"74\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+15\",\"angleArc:eval\":\"0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_CherryBlossoms
 * @text WIND: Cherry Blossoms
 * @desc The emblem of love and good luck.
 * Cherry blossom petals flutter down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_DandelionSeeds
 * @text WIND: Dandelion Seeds
 * @desc Floating on the air. Never seem to care.
 * Dandelion seeds will flow up into the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.15\",\"scaleVariance:num\":\"0.05\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"30\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"-45\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GrassyGust
 * @text WIND: Grassy Gust
 * @desc A gust of wind! From right to left, grass flies with it.
 * Best when paired with a Tempest.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GreenLeaves
 * @text WIND: Green Leaves
 * @desc Leaf me alone!
 * Green leaves fall above, spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InCubic\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.30\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"310\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Pollen
 * @text WIND: Pollen
 * @desc Bless you! Gesundheit! Salute!
 * A cloud of pollen grains travel about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"48\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#fff799\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"15\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"8\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Tempest
 * @text WIND: Tempest
 * @desc Brought to you by a friendly slime.
 * Powerful gusts of wind blast across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.4\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_WhiteClouds
 * @text WIND: White Clouds
 * @desc Not the main character from Final Fantasy VII.
 * Fluffy white clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_XtremeSpeed
 * @text WIND: Xtreme Speed
 * @desc Gotta go fast! Speedlines whip past!
 * Works best below the tileset layer.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"middle screen\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"100\",\"opacityVariance:num\":\"28\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"2.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"2.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"15\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"24\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Light
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Light
 * @text Category - Light-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Confetti
 * @text LIGHT: Confetti
 * @desc Party like it's 1999!
 * Confetti of differing shapes drop from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"40\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LensFlare
 * @text LIGHT: Lens Flare
 * @desc Relive the amateur days from Photoshop!
 * A lens flare descends from the upper corner of the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"left 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"upper 10%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightBurst
 * @text LIGHT: Light Burst
 * @desc Sometimes also known as Sun Bursts. CAUTION: Bright lights!
 * Bright white light bursts out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightOrbs
 * @text LIGHT: Light Orbs
 * @desc Show me the light!
 * Light orbs fly round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PastelBrume
 * @text LIGHT: Pastel Brume
 * @desc Cute pastel colors forming a foggy brume.
 * Various bright colors cover the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBurst
 * @text LIGHT: Prism Burst
 * @desc More color than a bag of candy! CAUTION: Bright lights!
 * Lights of all colors expand out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBeams
 * @text LIGHT: Prismatic Gleam
 * @desc Our seven lights spring to the task!
 * Colors of all sorts shine from the skies high above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowClouds
 * @text LIGHT: Rainbow Clouds
 * @desc Colorful clouds dot the heavens.
 * Multi-colored clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 30%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"32\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowOrbs
 * @text LIGHT: Rainbow Orbs
 * @desc Taste the rainbow!
 * Multi-colored rainbow orbs spawn in and float about.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Stars
 * @text LIGHT: Star Fall
 * @desc You're a star. You're one in a million.
 * Stars fall out of the night sky spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Dark
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Dark
 * @text Category - Dark-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_AshDebris
 * @text DARK: Ash Debris
 * @desc Gotta ketchum all.
 * Pieces of ash debris flutter through the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Ashfall
 * @text DARK: Ashfall
 * @desc But unlike thunder, this didn’t stop. It went on and on.
 * Volcanic ash pieces descend from the skies above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"215\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_BloodRain
 * @text DARK: Blood Rain
 * @desc It's actually a real phenomenon.
 * However, it's not really blood.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#cc0000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_DarkOrbs
 * @text DARK: Dark Orbs
 * @desc Hello darkness, my old friend.
 * Dark orbs circle about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"2\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Fumes
 * @text DARK: Fumes
 * @desc Don't inhale any!
 * Dark fume clouds plume from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.8\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_MoonBeams
 * @text DARK: Moonlight Beams
 * @desc Moonlight is the smuggler's enemy.
 * Light the path in the night sky by moonshine.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#d0bbee\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_ShadowBurst
 * @text DARK: Shadow Siphon
 * @desc Drain all of the light! CAUTION: Dark lights!
 * Light from around is all drained into one area.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"10\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"0.1\",\"scaleOutDuration:eval\":\"20\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeFog
 * @text DARK: Smog
 * @desc Smoking is bad, mkay?
 * Smokey fog (aka Smog) cover the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#222222\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeClouds
 * @text DARK: Smoke Clouds
 * @desc Accompanied by factories owned by evil corporations.
 * Smoke clouds blot out the sun.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Sootfall
 * @text DARK: Sootfall
 * @desc Try not to build a snowman out of this.
 * Smoke-contaminated snow falls from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons1
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons1
 * @text Category - Icons (Slow)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Up
 * @text SLOW: Flying Icons ↑
 * @desc Icons fly to the top at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperRight
 * @text SLOW: Flying Icons ↗
 * @desc Icons fly upper right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Right
 * @text SLOW: Flying Icons →
 * @desc Icons fly to the right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerRight
 * @text SLOW: Flying Icons ↘
 * @desc Icons fly lower right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Down
 * @text SLOW: Flying Icons ↓
 * @desc Icons fly to the bottom at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerLeft
 * @text SLOW: Flying Icons ↙
 * @desc Icons fly lower left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Left
 * @text SLOW: Flying Icons ←
 * @desc Icons fly to the left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperLeft
 * @text SLOW: Flying Icons ↖
 * @desc Icons fly upper left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Mid
 * @text SLOW: Flying Icons ●
 * @desc Icons hover at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"1\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons2
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons2
 * @text Category - Icons (Medium)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Up
 * @text MEDIUM: Flying Icons ↑
 * @desc Icons fly to the top at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperRight
 * @text MEDIUM: Flying Icons ↗
 * @desc Icons fly upper right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Right
 * @text MEDIUM: Flying Icons →
 * @desc Icons fly to the right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerRight
 * @text MEDIUM: Flying Icons ↘
 * @desc Icons fly lower right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Down
 * @text MEDIUM: Flying Icons ↓
 * @desc Icons fly to the bottom at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerLeft
 * @text MEDIUM: Flying Icons ↙
 * @desc Icons fly lower left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Left
 * @text MEDIUM: Flying Icons ←
 * @desc Icons fly to the left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperLeft
 * @text MEDIUM: Flying Icons ↖
 * @desc Icons fly upper left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Mid
 * @text MEDIUM: Flying Icons ●
 * @desc Icons hover at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons3
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons3
 * @text Category - Icons (Fast)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Up
 * @text FAST: Flying Icons ↑
 * @desc Icons fly to the top at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperRight
 * @text FAST: Flying Icons ↗
 * @desc Icons fly upper right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Right
 * @text FAST: Flying Icons →
 * @desc Icons fly to the right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerRight
 * @text FAST: Flying Icons ↘
 * @desc Icons fly lower right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Down
 * @text FAST: Flying Icons ↓
 * @desc Icons fly to the bottom at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerLeft
 * @text FAST: Flying Icons ↙
 * @desc Icons fly lower left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Left
 * @text FAST: Flying Icons ←
 * @desc Icons fly to the left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperLeft
 * @text FAST: Flying Icons ↖
 * @desc Icons fly upper left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Mid
 * @text FAST: Flying Icons ●
 * @desc Icons hover at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"4\",\"ySwaySpeed:eval\":\"0.01\"}"}
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
 * @param WeatherEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General Settings for the Weather Effects plugin.
 * @default {"PreRenderGenImg:eval":"true","RenderVariations:num":"16","SmoothIcons:eval":"true"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options Settings for the Weather Effects plugin.
 * @default {"Options":"","AddWeatherDensityOption:eval":"true","AdjustRect:eval":"true","Name:str":"Weather Density"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param PreRenderGenImg:eval
 * @text Pre-Render Generated?
 * @type boolean
 * @on Pre-render
 * @off Render when needed
 * @desc Pre-render generated images for weather patterns?
 * This reduces lag for on-demand weather patterns.
 * @default true
 *
 * @param RenderVariations:num
 * @text # of Variations
 * @parent PreRenderGenImg:eval
 * @min 1
 * @desc How many variations of each rendered weather pattern do you want?
 * @default 16
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Smooth out the icons used for weather sprites?
 * Or keep them pixelated?
 * @default true
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
 * @param AddWeatherDensityOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Weather Density' option to the Options menu?
 * @default true
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
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Weather Density
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Custom:
 *
 * @param sprite:struct
 * @text Sprite Settings
 * @type struct<Sprite>
 * @desc The general settings involving the weather sprites.
 * @default {"lifespan:num":"60","lifespanVariance:num":"0","spawnLocationX:str":"random","spawnLocationY:str":"random","mapBound:eval":"true","opacity:num":"255","opacityVariance:num":"0","scale:num":"1.0","scaleVariance:num":"0","totalMinimum:num":"20","totalPerPower:num":"5"}
 *
 * @param dimmer:struct
 * @text Dimmer Overlay
 * @type struct<Dimmer>
 * @desc Settings involving the dimmer overlay cast over the screen.
 * @default {"color:str":"#000000","opacityMinimum:num":"0","opacityPerPower:num":"0"}
 *
 * @param image:struct
 * @text Image Settings
 * @type struct<Image>
 * @desc Settings for the images used for the weather sprites.
 * Weathers with multiple images will be picked at random.
 * @default {"generated:eval":"true","generatedWeight:num":"1","icons:arraynum":"[]","iconsWeight:num":"16","pictures:arraystr":"[]","picturesWeight:num":"16","blendMode:num":"0","hueVariations:arraynum":"[]","toneVariations:arrayeval":"[]"}
 *
 * @param flags:struct
 * @text Special Effects
 * @type struct<Flags>
 * @desc Specialized effects that are turned on for specific weather
 * types can be found here.
 * @default {"alwaysVisiblePlayer:eval":"false"}
 *
 * @param trajectory:struct
 * @text Trajectory Settings
 * @type struct<Trajectory>
 * @desc Settings used to determine the trajectory a weather sprite
 * will take and how they behave on it.
 * @default {"type:str":"straight","speed:eval":"1","angle:eval":"0","alignAngle:eval":"true","angleVariance:eval":"0","angleOffset:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 */
/* ----------------------------------------------------------------------------
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param lifespan:num
 * @text Lifespan
 * @desc Lifespan of each weather sprite in frames.
 * @default 60
 *
 * @param lifespanVariance:num
 * @text Variance
 * @parent lifespan:num
 * @desc What variance is there to each lifespan value?
 * @default 0
 *
 * @param spawnLocationX:str
 * @text Spawn Location X
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option left border
 * @option left 10%
 * @option left 20%
 * @option left 30%
 * @option left 40%
 * @option left 50%
 * @option left 60%
 * @option left 70%
 * @option left 80%
 * @option left 90%
 * @option - 
 * @option center screen
 * @option center 10%
 * @option center 20%
 * @option center 30%
 * @option center 40%
 * @option center 50%
 * @option center 60%
 * @option center 70%
 * @option center 80%
 * @option center 90%
 * @option - 
 * @option right border
 * @option right 10%
 * @option right 20%
 * @option right 30%
 * @option right 40%
 * @option right 50%
 * @option right 60%
 * @option right 70%
 * @option right 80%
 * @option right 90%
 * @option - 
 * @option sides border
 * @option sides 10%
 * @option sides 20%
 * @option sides 30%
 * @option sides 40%
 * @option - 
 * @desc What x location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetX:eval
 * @text Offset X
 * @parent spawnLocationX:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param spawnLocationY:str
 * @text Spawn Location Y
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option upper border
 * @option upper 10%
 * @option upper 20%
 * @option upper 30%
 * @option upper 40%
 * @option upper 50%
 * @option upper 60%
 * @option upper 70%
 * @option upper 80%
 * @option upper 90%
 * @option - 
 * @option middle screen
 * @option middle 10%
 * @option middle 20%
 * @option middle 30%
 * @option middle 40%
 * @option middle 50%
 * @option middle 60%
 * @option middle 70%
 * @option middle 80%
 * @option middle 90%
 * @option - 
 * @option - 
 * @option lower border
 * @option lower 10%
 * @option lower 20%
 * @option lower 30%
 * @option lower 40%
 * @option lower 50%
 * @option lower 60%
 * @option lower 70%
 * @option lower 80%
 * @option lower 90%
 * @option - 
 * @option either border
 * @option either 10%
 * @option either 20%
 * @option either 30%
 * @option either 40%
 * @option - 
 * @desc What y location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetY:eval
 * @text Offset Y
 * @parent spawnLocationY:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param mapBound:eval
 * @text Map Bound?
 * @parent spawnLocation:str
 * @type boolean
 * @on Moves with Map
 * @off Screen-Locked
 * @desc Do the weather sprites move with the map scrolling?
 * @default true
 *
 * @param opacity:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Starting opacity of each weather sprite in frames.
 * @default 255
 *
 * @param opacityVariance:num
 * @text Variance
 * @parent opacity:num
 * @desc What variance is there to each starting opacity value?
 * @default 0
 *
 * @param opacityEasingType:str
 * @text Easing Type
 * @parent opacity:num
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply for opacity.
 * @default Linear
 *
 * @param opacityFadeInTime:num
 * @text Fade In Time
 * @parent opacity:num
 * @type number
 * @desc How many frames does it take for the sprite to fade in?
 * Use 0 to start immediately at full opacity.
 * @default 16
 *
 * @param scale:num
 * @text Scale
 * @desc What is the scale of the sprite?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleVariance:num
 * @text Variance
 * @parent scale:num
 * @desc What variance is there to the main scale value?
 * @default 0
 *
 * @param scaleRatioX:num
 * @text Ratio X
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale X?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleRatioY:num
 * @text Ratio Y
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale Y?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param totalMinimum:num
 * @text Total Sprite Minimum
 * @desc What is the minimum number of sprites on the screen?
 * @default 20
 *
 * @param totalPerPower:num
 * @text Total Per Power
 * @parent totalMinimum:num
 * @desc Increase the total number of sprites per power by this.
 * Lowest power is 1. Highest power is 9.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * Dimmer Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dimmer:
 *
 * @param color:str
 * @text Color
 * @desc Dimmer color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param opacityMinimum:num
 * @text Opacity Minimum
 * @parent totalMinimum:num
 * @desc What is the minimum opacity value for the dimmer?
 * @default 0
 *
 * @param opacityPerPower:num
 * @text Opacity Per Power
 * @parent opacityMinimum:num
 * @desc What is the total opacity value per power for the dimmer?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param generated:eval
 * @text Generated Image?
 * @type boolean
 * @on Include
 * @off Exclude
 * @desc Include the plugin-generated image for this weather type?
 * @default true
 *
 * @param generatedWeight:num
 * @text Weight
 * @parent generated:eval
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param icons:arraynum
 * @text Icon(s)
 * @type string[]
 * @desc Which icons do you wish to include for the images to appear as?
 * @default []
 *
 * @param iconsWeight:num
 * @text Weight
 * @parent icons:arraynum
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param pictures:arraystr
 * @text Picture(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Which pictures do you wish to include for the images to appear as?
 * @default []
 *
 * @param picturesWeight:num
 * @text Weight
 * @parent pictures:arraystr
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param blendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the weather sprite?
 * @default 0
 *
 * @param hueVariations:arraynum
 * @text Hue Variations
 * @type number[]
 * @min 0
 * @max 360
 * @desc What hue variations will be randomly selected from?
 * Use a value between 0 and 360.
 * @default ["0"]
 *
 * @param toneVariations:arrayeval
 * @text Tone Variations
 * @type string[]
 * @desc What tone variations will be randomly selected from?
 * Format for each: [Red, Green, Blue, Gray]
 * @default ["[0,0,0,0]"]
 *
 */
/* ----------------------------------------------------------------------------
 * Special Flags Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Flags:
 *
 * @param alwaysVisiblePlayer:eval
 * @text Allow Visible Player?
 * @type boolean
 * @on Visible
 * @off Ignore
 * @desc Make the player more visible by reducing the
 * opacity of nearby weather sprites?
 * @default false
 *
 * @param flatFlutter:eval
 * @text Flat Fluttering?
 * @type boolean
 * @on Object is Flat
 * @off Object has Volume
 * @desc Is the object flat and flutters in the wind?
 * Or does the object have volume and doesn't?
 * @default false
 *
 * @param longevity:eval
 * @text Longevity
 * @type boolean
 * @on Lasts Until Changed
 * @off Normal
 * @desc Weather effects with longevity don't expire until
 * the weather pattern type is changed.
 * @default false
 *
 * @param hueSwayRange:eval
 * @text Hue Sway Range
 * @desc How much should the hue sway back and forth?
 * JavaScript code can be used.
 * @default 0
 *
 * @param hueSwaySpeed:eval
 * @text Hue Sway Speed
 * @parent hueSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param respawnCommonEventID:num
 * @text Respawn Common Event
 * @type common_event
 * @desc Play a specific Common Event when this event respawns?
 * The Common Event will run as a Once Parallel.
 * @default 0
 *
 * @param respawnDelayMin:eval
 * @text Respawn Delay Minimum
 * @desc Is there a delay to the respawn? This is how many
 * frames the sprite must wait before respawning.
 * @default 0
 *
 * @param respawnDelayRngPerPower:eval
 * @text RNG Delay Per Power
 * @parent respawnDelayMin:eval
 * @desc How many randomized frames of delay per power must be waited?
 * @default +0
 *
 * @param scaleIn:eval
 * @text Scale In
 * @desc What scale ratio should the sprite spawn in at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleInDuration:eval
 * @text Duration
 * @parent scaleIn:eval
 * @desc How many frames should the scale in effect take?
 * Scale in will always head towards 1.0.
 * @default 10
 *
 * @param scaleOut:eval
 * @text Scale Out
 * @desc What scale ratio should the sprite despawn out at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleOutDuration:eval
 * @text Duration
 * @parent scaleOut:eval
 * @desc How many frames should the scale out effect take?
 * Scale in will usually head from 1.0.
 * @default 10
 * 
 * @param CustomFinish
 * @text Custom Finish
 *
 * @param fireworksFinish:eval
 * @text Fireworks Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Show me fireworks!
 * @off It's not right!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fireworks explosion?
 * @default false
 *
 * @param sparkleFinish:eval
 * @text Sparkle Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Sparkle YES!
 * @off NO! No Sparkle!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fabulous spinning sparkle effect?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Trajectory Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trajectory:
 *
 * @param type:str
 * @text Trajectory Type
 * @type select
 * @option -
 * @option Straight: Follows the trajectory
 * @value straight
 * @option Frozen: Does not follow a trajectory
 * @value frozen
 * @option -
 * @option Player-Locked: Map only! Center of sprite is locked on player
 * @value player
 * @option Follower-Locked: Map only! Center of sprite is locked on target follower
 * @value follower
 * @option Event-Locked: Map only! Center of sprite is locked on target event
 * @value event
 * @option -
 * @option Actor-Locked: Battle only! Center of sprite is locked on target actor
 * @value actor
 * @option Enemy-Locked: Battle only! Center of sprite is locked on target enemy
 * @value enemy
 * @option User-Locked: Battle only! Center of sprite is locked on current user
 * @value user
 * @option Target-Locked: Battle only! Center of sprite is locked on current target
 * @value target
 * @option -
 * @desc What trajectory type is used?
 * @default straight
 * 
 * @param lockedID:eval
 * @text Locked ID/Index
 * @parent type:str
 * @desc For locked trajectories only. Input the follower index.
 * Or ID of event, actor, enemy.
 * @default 0
 * 
 * @param lockedOffsetX:eval
 * @text Offset X (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param lockedOffsetY:eval
 * @text Offset Y (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param speed:eval
 * @text Speed
 * @desc What speed is the sprite moving at? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 1
 *
 * @param speedVariance:eval
 * @text Speed Variance
 * @parent speed:eval
 * @desc What variance is there to the speed value?
 * @default 0
 *
 * @param angle:eval
 * @text Angle
 * @desc What angle (0 to 360) is the sprite moving toward?
 * JavaScript code can be used.
 * @default 0
 *
 * @param alignAngle:eval
 * @text Align Angle?
 * @parent angle:eval
 * @type boolean
 * @on Rotates to Align
 * @off Does Not Rotate
 * @desc Should the sprite rotate itself according to the angle
 * it is moving at across the screen?
 * @default true
 *
 * @param angleVariance:eval
 * @text Angle Variance
 * @parent angle:eval
 * @desc What variance is there to the base angle?
 * @default 0
 *
 * @param angleOffset:eval
 * @text Visual Angle Offset
 * @parent angle:eval
 * @desc Offset the visual by this many degrees. Used for images
 * that aren't made aligned with 0 degrees facing left.
 * @default +0
 *
 * @param angleArc:eval
 * @text Angle Arc
 * @desc How should the trajectory arc when the sprite moves?
 * JavaScript code can be used.
 * @default +0
 *
 * @param angleSwayRange:eval
 * @text Angle Sway Range
 * @desc How much should the angle sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param angleSwaySpeed:eval
 * @text Angle Sway Speed
 * @parent angleSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param spinSpeed:eval
 * @text Spin Speed
 * @desc What speed do the sprites spin?
 * JavaScript code can be used.
 * @default +0
 *
 * @param spinSpeedVariance:eval
 * @text Spin Speed Variance
 * @parent spinSpeed:eval
 * @desc What variance is there to the spin speed?
 * @default 0
 *
 * @param reverseSpin:eval
 * @text Reverse Spin?
 * @parent spinSpeed:eval
 * @type boolean
 * @on Can Reverse Spin
 * @off No Reverse Spin
 * @desc Can the spin go in the reverse direction?
 * @default false
 *
 * @param xSwayRange:eval
 * @text X Sway Range
 * @desc How much should the X value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param xSwaySpeed:eval
 * @text X Sway Speed
 * @parent xSwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param ySwayRange:eval
 * @text Y Sway Range
 * @desc How much should the Y value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param ySwaySpeed:eval
 * @text Y Sway Speed
 * @parent ySwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 */
//=============================================================================

const _0x502049=_0x3192;function _0x3192(_0x28c7e4,_0x4f3ec7){const _0x36df60=_0x36df();return _0x3192=function(_0x31925c,_0x2124df){_0x31925c=_0x31925c-0x166;let _0x495362=_0x36df60[_0x31925c];return _0x495362;},_0x3192(_0x28c7e4,_0x4f3ec7);}(function(_0xf78468,_0x332dc4){const _0x277192=_0x3192,_0x39cd50=_0xf78468();while(!![]){try{const _0x3039cb=parseInt(_0x277192(0x594))/0x1*(-parseInt(_0x277192(0x522))/0x2)+-parseInt(_0x277192(0x4eb))/0x3+-parseInt(_0x277192(0x306))/0x4*(-parseInt(_0x277192(0x2b0))/0x5)+parseInt(_0x277192(0x561))/0x6+parseInt(_0x277192(0x176))/0x7+-parseInt(_0x277192(0x5c2))/0x8*(-parseInt(_0x277192(0x507))/0x9)+parseInt(_0x277192(0x3fc))/0xa;if(_0x3039cb===_0x332dc4)break;else _0x39cd50['push'](_0x39cd50['shift']());}catch(_0xc48a0f){_0x39cd50['push'](_0x39cd50['shift']());}}}(_0x36df,0x3e16e));var label=_0x502049(0x329),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine'],pluginData=$plugins[_0x502049(0x301)](function(_0x46317b){const _0x4cbf31=_0x502049;return _0x46317b[_0x4cbf31(0x4cf)]&&_0x46317b['description'][_0x4cbf31(0x188)]('['+label+']');})[0x0];VisuMZ[label][_0x502049(0x3b1)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x502049(0x3b3)]=function(_0x3fbee7,_0x2fcc44){const _0x3bca97=_0x502049;for(const _0x5a6be6 in _0x2fcc44){if(_0x3bca97(0x1b6)!=='pOrTD'){if(_0x5a6be6[_0x3bca97(0x268)](/(.*):(.*)/i)){if(_0x3bca97(0x2d4)===_0x3bca97(0x1c1))this[_0x3bca97(0x5eb)]=(this['_scaleInOutRatio']*(_0x9d0c80-0x1)+_0x5a1156)/_0x26d75d;else{const _0x2f8107=String(RegExp['$1']),_0x3d88d7=String(RegExp['$2'])['toUpperCase']()[_0x3bca97(0x491)]();let _0x5649fd,_0x40ca5b,_0x2a2873;switch(_0x3d88d7){case _0x3bca97(0x5b9):_0x5649fd=_0x2fcc44[_0x5a6be6]!==''?Number(_0x2fcc44[_0x5a6be6]):0x0;break;case'ARRAYNUM':_0x40ca5b=_0x2fcc44[_0x5a6be6]!==''?JSON[_0x3bca97(0x42e)](_0x2fcc44[_0x5a6be6]):[],_0x5649fd=_0x40ca5b[_0x3bca97(0x3b4)](_0x253011=>Number(_0x253011));break;case'EVAL':_0x5649fd=_0x2fcc44[_0x5a6be6]!==''?eval(_0x2fcc44[_0x5a6be6]):null;break;case _0x3bca97(0x50c):_0x40ca5b=_0x2fcc44[_0x5a6be6]!==''?JSON[_0x3bca97(0x42e)](_0x2fcc44[_0x5a6be6]):[],_0x5649fd=_0x40ca5b[_0x3bca97(0x3b4)](_0x4fffe4=>eval(_0x4fffe4));break;case'JSON':_0x5649fd=_0x2fcc44[_0x5a6be6]!==''?JSON[_0x3bca97(0x42e)](_0x2fcc44[_0x5a6be6]):'';break;case _0x3bca97(0x4e2):_0x40ca5b=_0x2fcc44[_0x5a6be6]!==''?JSON['parse'](_0x2fcc44[_0x5a6be6]):[],_0x5649fd=_0x40ca5b['map'](_0x21ae02=>JSON[_0x3bca97(0x42e)](_0x21ae02));break;case'FUNC':_0x5649fd=_0x2fcc44[_0x5a6be6]!==''?new Function(JSON[_0x3bca97(0x42e)](_0x2fcc44[_0x5a6be6])):new Function(_0x3bca97(0x376));break;case _0x3bca97(0x246):_0x40ca5b=_0x2fcc44[_0x5a6be6]!==''?JSON[_0x3bca97(0x42e)](_0x2fcc44[_0x5a6be6]):[],_0x5649fd=_0x40ca5b[_0x3bca97(0x3b4)](_0x3610a7=>new Function(JSON[_0x3bca97(0x42e)](_0x3610a7)));break;case'STR':_0x5649fd=_0x2fcc44[_0x5a6be6]!==''?String(_0x2fcc44[_0x5a6be6]):'';break;case _0x3bca97(0x184):_0x40ca5b=_0x2fcc44[_0x5a6be6]!==''?JSON['parse'](_0x2fcc44[_0x5a6be6]):[],_0x5649fd=_0x40ca5b[_0x3bca97(0x3b4)](_0x1ed679=>String(_0x1ed679));break;case'STRUCT':_0x2a2873=_0x2fcc44[_0x5a6be6]!==''?JSON['parse'](_0x2fcc44[_0x5a6be6]):{},_0x5649fd=VisuMZ[_0x3bca97(0x3b3)]({},_0x2a2873);break;case _0x3bca97(0x1ea):_0x40ca5b=_0x2fcc44[_0x5a6be6]!==''?JSON[_0x3bca97(0x42e)](_0x2fcc44[_0x5a6be6]):[],_0x5649fd=_0x40ca5b[_0x3bca97(0x3b4)](_0x56bb68=>VisuMZ[_0x3bca97(0x3b3)]({},JSON[_0x3bca97(0x42e)](_0x56bb68)));break;default:continue;}_0x3fbee7[_0x2f8107]=_0x5649fd;}}}else{if(this[_0x3bca97(0x52f)]&&_0x10db42[_0x3bca97(0x463)]['length']<=0x0){const _0x52026e=this[_0x3bca97(0x52f)];return _0x52026e[_0x25f540[_0x3bca97(0x474)](_0x5dda80[_0x3bca97(0x221)]()*_0x52026e[_0x3bca97(0x19b)])];}const _0x2cc6a4=_0x2ab5be[_0x3bca97(0x463)]['pop'](),_0x2cace5=0.85,_0x4fb323=_0x5c0798['adjustHexColor'](_0x2cc6a4,_0x2cace5),_0x94514c=_0x25141[_0x3bca97(0x1b5)](_0x4fb323,_0x2cace5),_0x3c7c8b=_0x1af02f[_0x3bca97(0x1b5)](_0x94514c,_0x2cace5),_0x55662f=new _0x44d671(0x3e8,0x3e8);_0x55662f['drawCloud'](0x1f4,0x28a,0xaf,_0x3c7c8b,0x10,0x14),_0x55662f[_0x3bca97(0x16a)](0x1f4,0x1f4,0xc8,_0x4fb323,0x40,0x19),_0x55662f[_0x3bca97(0x16a)](0x1f4,0x15e,0xa0,_0x94514c,0x10,0x14),_0x55662f[_0x3bca97(0x5e5)]=![];if(_0x2eba0f[_0x3bca97(0x277)])_0x5d9598[_0x3bca97(0x31a)]('pastelbrume');return this['_cached_WeatherEffects_PastelBrume']=this[_0x3bca97(0x52f)]||[],this[_0x3bca97(0x52f)][_0x3bca97(0x4ac)](_0x55662f),_0x55662f;}}return _0x3fbee7;},(_0x2030c9=>{const _0xc7972e=_0x502049,_0x3b0826=_0x2030c9[_0xc7972e(0x3de)];for(const _0xf2e1ca of dependencies){if(!Imported[_0xf2e1ca]){alert(_0xc7972e(0x1b4)['format'](_0x3b0826,_0xf2e1ca)),SceneManager['exit']();break;}}const _0xc18111=_0x2030c9['description'];if(_0xc18111[_0xc7972e(0x268)](/\[Version[ ](.*?)\]/i)){const _0x1456ab=Number(RegExp['$1']);_0x1456ab!==VisuMZ[label][_0xc7972e(0x2d1)]&&(alert(_0xc7972e(0x28f)[_0xc7972e(0x339)](_0x3b0826,_0x1456ab)),SceneManager[_0xc7972e(0x2d0)]());}if(_0xc18111[_0xc7972e(0x268)](/\[Tier[ ](\d+)\]/i)){if(_0xc7972e(0x18e)!=='bCtTV')_0x264242['ConvertParams'](_0x2548ac,_0x5cf2ec),_0x5e224e[_0xc7972e(0x3bc)]='rainbowclouds',_0x5d1eef[_0xc7972e(0x329)][_0xc7972e(0x417)](_0x2079ec);else{const _0x1bb6d6=Number(RegExp['$1']);_0x1bb6d6<tier?(alert(_0xc7972e(0x2f2)['format'](_0x3b0826,_0x1bb6d6,tier)),SceneManager[_0xc7972e(0x2d0)]()):tier=Math['max'](_0x1bb6d6,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0xc7972e(0x3b1)],_0x2030c9['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0x502049(0x29b),_0x57ec7b=>{const _0x5c7f01=_0x502049;VisuMZ[_0x5c7f01(0x3b3)](_0x57ec7b,_0x57ec7b);const _0x1cc36d=_0x57ec7b[_0x5c7f01(0x47a)][_0x5c7f01(0x3b4)](_0xd1cb0a=>(Number(_0xd1cb0a)||0x1)[_0x5c7f01(0x4df)](0x1,0xa)),_0x391da4=_0x57ec7b[_0x5c7f01(0x51d)],_0x44acf7=_0x57ec7b['Power']||0x0,_0x1d7a19=_0x57ec7b[_0x5c7f01(0x210)]||0x1;for(const _0x567b87 of _0x1cc36d){if(_0x5c7f01(0x55a)!=='BclIm'){const _0x4010ed=_0x25bce6[_0x5c7f01(0x55f)],_0x5e7d05=_0x22b8e1[_0x5c7f01(0x2ab)];_0x3afe67[_0x5c7f01(0x44b)]=(_0x551e60[_0x5c7f01(0x44b)]*(_0x4010ed-0x1)+_0x5e7d05)/_0x4010ed;}else{if([_0x5c7f01(0x5a1),_0x5c7f01(0x560)][_0x5c7f01(0x188)](_0x391da4)){if(_0x5c7f01(0x456)!==_0x5c7f01(0x456)){const _0x44b02a=this['_context'];_0x44b02a['save'](),_0x44b02a[_0x5c7f01(0x552)]=_0xf7b18,_0x44b02a[_0x5c7f01(0x39d)](),_0x44b02a[_0x5c7f01(0x332)](_0x561bd6[0x0],_0x1d58d1[0x1]);for(var _0x201835=0x2;_0x201835<_0x3c1e81['length'];_0x201835+=0x2){_0x44b02a['lineTo'](_0x3086e4[_0x201835],_0x56b78e[_0x201835+0x1]);}_0x44b02a['lineTo'](_0x145242[0x0],_0x11fdb8[0x1]),_0x44b02a[_0x5c7f01(0x423)]=_0x4a3c30,_0x44b02a[_0x5c7f01(0x32b)]=_0x1de75d,_0x3854f2&&_0x44b02a['stroke'](),_0x44b02a[_0x5c7f01(0x18c)]=_0x1f00cd,_0x44b02a['fill'](),_0x44b02a['globalAlpha']=0x1,_0x44b02a[_0x5c7f01(0x36f)]();}else $gameScreen['adjustWeatherLayerPower'](_0x567b87,![],_0x44acf7,_0x1d7a19);}[_0x5c7f01(0x2cd),_0x5c7f01(0x560)]['includes'](_0x391da4)&&$gameScreen[_0x5c7f01(0x4e4)](_0x567b87,!![],_0x44acf7,_0x1d7a19);}}if(_0x57ec7b[_0x5c7f01(0x3a2)]){if(_0x5c7f01(0x3f4)!==_0x5c7f01(0x3f4)){const _0x133ebc=this[_0x5c7f01(0x401)];_0x133ebc[_0x5c7f01(0x260)](),_0x133ebc['translate'](_0x4e4ea5-_0xc8cd7c,_0x2f942a-_0x3a2574);const _0x3dc7e9=0x168*(_0x3d0e5d['PI']/0xb4),_0x366e08=_0x4e70c3[_0x5c7f01(0x592)](0x80),_0x449829=_0x5c7f01(0x355)[_0x5c7f01(0x339)](_0x366e08),_0x381240=_0x5c7f01(0x394)[_0x5c7f01(0x339)](_0x366e08),_0x20e027=_0x5c7f01(0x20c)[_0x5c7f01(0x339)](_0x366e08),_0x4cb69a=_0x5c7f01(0x21a)['format'](_0x366e08),_0xbbe161=_0x5c7f01(0x509)[_0x5c7f01(0x339)](_0x366e08),_0x5615c7=_0x5c7f01(0x367)[_0x5c7f01(0x339)](_0x366e08),_0x36db3a=_0x5c7f01(0x251)['format'](_0x366e08),_0x20d7c8=_0x5c7f01(0x252)[_0x5c7f01(0x339)](_0x366e08),_0x4d7d63=_0x133ebc[_0x5c7f01(0x3f1)](_0x576080,_0x5c7e4e,0xa,_0x335558,_0x954532,_0x527c3d);_0x4d7d63[_0x5c7f01(0x541)](0x0,_0x449829),_0x4d7d63[_0x5c7f01(0x541)](0.15,_0x449829),_0x4d7d63[_0x5c7f01(0x541)](0.25,_0x381240),_0x4d7d63[_0x5c7f01(0x541)](0.3,_0x381240),_0x4d7d63['addColorStop'](0.4,_0x20e027),_0x4d7d63[_0x5c7f01(0x541)](0.45,_0x4cb69a),_0x4d7d63[_0x5c7f01(0x541)](0.5,_0x4cb69a),_0x4d7d63[_0x5c7f01(0x541)](0.55,_0xbbe161),_0x4d7d63[_0x5c7f01(0x541)](0.6,_0x5615c7),_0x4d7d63['addColorStop'](0.65,_0x5615c7),_0x4d7d63['addColorStop'](0.75,_0x36db3a),_0x4d7d63[_0x5c7f01(0x541)](0.85,_0x20d7c8),_0x4d7d63[_0x5c7f01(0x541)](0.95,_0x449829),_0x4d7d63[_0x5c7f01(0x541)](0x1,_0x449829),_0x133ebc[_0x5c7f01(0x552)]=_0x4d7d63,_0x133ebc[_0x5c7f01(0x39d)](),_0x133ebc[_0x5c7f01(0x332)](_0x24bb4c,_0x350332),_0x133ebc[_0x5c7f01(0x4ba)](_0x1c7007,_0xdb7aac),_0x133ebc['arc'](_0x23db98,_0x2b3c57,_0x38d450,0x0,_0x3dc7e9),_0x133ebc[_0x5c7f01(0x4ba)](_0x1dc15c,_0x5770ae),_0x133ebc[_0x5c7f01(0x1c3)](),_0x133ebc[_0x5c7f01(0x36f)](),this[_0x5c7f01(0x267)]['update']();}else{const _0x4e1d32=$gameTemp[_0x5c7f01(0x3f5)]();_0x4e1d32&&_0x4e1d32[_0x5c7f01(0x392)](_0x1d7a19||0x1);}}}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4e8),_0x6fbe2f=>{const _0x1cfab4=_0x502049;VisuMZ[_0x1cfab4(0x3b3)](_0x6fbe2f,_0x6fbe2f);const _0x148c48=_0x6fbe2f['Layer'][_0x1cfab4(0x3b4)](_0x4d5d4e=>(Number(_0x4d5d4e)||0x1)[_0x1cfab4(0x4df)](0x1,0xa)),_0x40deef=_0x6fbe2f[_0x1cfab4(0x51d)],_0x157a40=_0x6fbe2f[_0x1cfab4(0x210)]||0x1;for(const _0x8ae43 of _0x148c48){_0x1cfab4(0x3bb)==='lUQFb'?(['upper',_0x1cfab4(0x560)][_0x1cfab4(0x188)](_0x40deef)&&$gameScreen[_0x1cfab4(0x323)](_0x8ae43,![],_0x157a40),[_0x1cfab4(0x2cd),_0x1cfab4(0x560)][_0x1cfab4(0x188)](_0x40deef)&&$gameScreen[_0x1cfab4(0x323)](_0x8ae43,!![],_0x157a40)):(_0x144fe9[_0x1cfab4(0x3b3)](_0x232d7a,_0x47fb6b),_0x123539[_0x1cfab4(0x3bc)]=_0x1cfab4(0x49c),_0x1b9269[_0x1cfab4(0x329)][_0x1cfab4(0x417)](_0x1989dc));}if(_0x6fbe2f[_0x1cfab4(0x3a2)]){if(_0x1cfab4(0x45e)===_0x1cfab4(0x33f))_0x4d4685['ConvertParams'](_0xc9f2a1,_0xb345d3),_0x44f6ed[_0x1cfab4(0x3bc)]=_0x1cfab4(0x243),_0x1bff29[_0x1cfab4(0x329)]['applyPluginCmdSettings'](_0x1b7f7f);else{const _0x586c71=$gameTemp[_0x1cfab4(0x3f5)]();_0x586c71&&_0x586c71[_0x1cfab4(0x392)](_0x157a40||0x1);}}}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x44d),_0x5c21bf=>{const _0x45f511=_0x502049;VisuMZ['ConvertParams'](_0x5c21bf,_0x5c21bf);const _0x14584c=_0x5c21bf[_0x45f511(0x47a)]['map'](_0x5db8da=>(Number(_0x5db8da)||0x1)[_0x45f511(0x4df)](0x1,0xa)),_0x40cdd4=_0x5c21bf[_0x45f511(0x51d)],_0x1a4d2d=_0x5c21bf[_0x45f511(0x210)]||0x1;for(const _0x36f509 of _0x14584c){'EcJic'==='oJQwB'?this[_0x45f511(0x5eb)]=0x1:([_0x45f511(0x5a1),_0x45f511(0x560)][_0x45f511(0x188)](_0x40cdd4)&&$gameScreen[_0x45f511(0x2ae)](_0x36f509,![]),[_0x45f511(0x2cd),'both'][_0x45f511(0x188)](_0x40cdd4)&&(_0x45f511(0x4e3)==='uipFP'?(this[_0x45f511(0x28b)]=this['type'],this[_0x45f511(0x292)]=_0x1dba6d[_0x45f511(0x592)](this[_0x45f511(0x292)])+0x1):$gameScreen[_0x45f511(0x2ae)](_0x36f509,!![])));}}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x4f1),_0x2c60f7=>{const _0x848825=_0x502049;VisuMZ[_0x848825(0x3b3)](_0x2c60f7,_0x2c60f7);const _0xe4711f=_0x2c60f7[_0x848825(0x47a)]['map'](_0x2b5176=>(Number(_0x2b5176)||0x1)[_0x848825(0x4df)](0x1,0xa)),_0x2f88ba=_0x2c60f7[_0x848825(0x51d)],_0x49eca1=_0x2c60f7[_0x848825(0x210)]||0x1;for(const _0x23165f of _0xe4711f){if(_0x848825(0x25a)==='evrzR')this['getGeneratedWeatherParticle'](_0x1dfd30);else{if([_0x848825(0x5a1),'both'][_0x848825(0x188)](_0x2f88ba)){if(_0x848825(0x1be)===_0x848825(0x1be))$gameScreen[_0x848825(0x59d)](_0x23165f,![],_0x49eca1);else{const _0x4c2073=this[_0x848825(0x16e)](_0x41fbe3,_0x5371fd);_0x4c2073[_0x848825(0x55f)]=_0x58a630||0x1,_0x4c2073[_0x848825(0x2ab)]=(_0x4c2073[_0x848825(0x2ab)]+_0x2a4efa)[_0x848825(0x4df)](0x1,0x9);}}if(['lower',_0x848825(0x560)][_0x848825(0x188)](_0x2f88ba)){if(_0x848825(0x402)!==_0x848825(0x402))return _0x44a87d*(0xb4/_0x524602['PI']);else $gameScreen[_0x848825(0x59d)](_0x23165f,!![],_0x49eca1);}}}if(_0x2c60f7['WaitForCompletion']){const _0x57ee35=$gameTemp['getLastPluginCommandInterpreter']();_0x57ee35&&_0x57ee35[_0x848825(0x392)](_0x49eca1||0x1);}}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x427),_0x21afed=>{const _0x1563dd=_0x502049;VisuMZ[_0x1563dd(0x3b3)](_0x21afed,_0x21afed),_0x21afed[_0x1563dd(0x3bc)]=_0x1563dd(0x59b),VisuMZ[_0x1563dd(0x329)][_0x1563dd(0x417)](_0x21afed);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x5d1),_0x812353=>{const _0x35f944=_0x502049;VisuMZ[_0x35f944(0x3b3)](_0x812353,_0x812353),_0x812353['type']='fireflies',VisuMZ[_0x35f944(0x329)][_0x35f944(0x417)](_0x812353);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Fire_Firestorm',_0x233fd6=>{const _0x52d9e6=_0x502049;VisuMZ['ConvertParams'](_0x233fd6,_0x233fd6),_0x233fd6[_0x52d9e6(0x3bc)]=_0x52d9e6(0x2dd),VisuMZ[_0x52d9e6(0x329)][_0x52d9e6(0x417)](_0x233fd6);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x2bc),_0x509855=>{const _0x4c6009=_0x502049;VisuMZ[_0x4c6009(0x3b3)](_0x509855,_0x509855),_0x509855[_0x4c6009(0x3bc)]='fireworks',VisuMZ[_0x4c6009(0x329)][_0x4c6009(0x417)](_0x509855);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x3c7),_0x347e08=>{const _0x16154a=_0x502049;VisuMZ[_0x16154a(0x3b3)](_0x347e08,_0x347e08),_0x347e08[_0x16154a(0x3bc)]=_0x16154a(0x2db),VisuMZ[_0x16154a(0x329)][_0x16154a(0x417)](_0x347e08);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],'Fire_FlameWall',_0x16d88e=>{const _0x3a7336=_0x502049;VisuMZ[_0x3a7336(0x3b3)](_0x16d88e,_0x16d88e),_0x16d88e[_0x3a7336(0x3bc)]=_0x3a7336(0x25b),VisuMZ[_0x3a7336(0x329)]['applyPluginCmdSettings'](_0x16d88e);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x2b1),_0x42f51d=>{const _0x53da12=_0x502049;VisuMZ[_0x53da12(0x3b3)](_0x42f51d,_0x42f51d),_0x42f51d[_0x53da12(0x3bc)]=_0x53da12(0x34a),VisuMZ[_0x53da12(0x329)]['applyPluginCmdSettings'](_0x42f51d);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x369),_0x1a63fd=>{const _0x497e9d=_0x502049;VisuMZ[_0x497e9d(0x3b3)](_0x1a63fd,_0x1a63fd),_0x1a63fd['type']=_0x497e9d(0x4b8),VisuMZ[_0x497e9d(0x329)][_0x497e9d(0x417)](_0x1a63fd);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x320),_0x3ebdf3=>{const _0x1f5a95=_0x502049;VisuMZ['ConvertParams'](_0x3ebdf3,_0x3ebdf3),_0x3ebdf3[_0x1f5a95(0x3bc)]=_0x1f5a95(0x3c9),VisuMZ[_0x1f5a95(0x329)][_0x1f5a95(0x417)](_0x3ebdf3);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x1c5),_0x3ea5e8=>{const _0x399e32=_0x502049;VisuMZ[_0x399e32(0x3b3)](_0x3ea5e8,_0x3ea5e8),_0x3ea5e8['type']=_0x399e32(0x475),VisuMZ[_0x399e32(0x329)][_0x399e32(0x417)](_0x3ea5e8);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x47b),_0x236a96=>{const _0x464a67=_0x502049;VisuMZ[_0x464a67(0x3b3)](_0x236a96,_0x236a96),_0x236a96[_0x464a67(0x3bc)]=_0x464a67(0x411),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x236a96);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Ice_Aurora',_0x99641f=>{const _0x588cda=_0x502049;VisuMZ[_0x588cda(0x3b3)](_0x99641f,_0x99641f),_0x99641f[_0x588cda(0x3bc)]=_0x588cda(0x58a),VisuMZ[_0x588cda(0x329)][_0x588cda(0x417)](_0x99641f);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x409),_0x434729=>{const _0x3e058c=_0x502049;VisuMZ[_0x3e058c(0x3b3)](_0x434729,_0x434729),_0x434729[_0x3e058c(0x3bc)]=_0x3e058c(0x58b),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x434729);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x420),_0x421d51=>{const _0x2fad95=_0x502049;VisuMZ[_0x2fad95(0x3b3)](_0x421d51,_0x421d51),_0x421d51[_0x2fad95(0x3bc)]=_0x2fad95(0x4c8),VisuMZ[_0x2fad95(0x329)][_0x2fad95(0x417)](_0x421d51);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x371),_0x258647=>{const _0xc4ff88=_0x502049;VisuMZ[_0xc4ff88(0x3b3)](_0x258647,_0x258647),_0x258647[_0xc4ff88(0x3bc)]=_0xc4ff88(0x455),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x258647);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x1fc),_0x2f3ea6=>{const _0x5b993c=_0x502049;VisuMZ['ConvertParams'](_0x2f3ea6,_0x2f3ea6),_0x2f3ea6[_0x5b993c(0x3bc)]=_0x5b993c(0x5d4),VisuMZ['WeatherEffects'][_0x5b993c(0x417)](_0x2f3ea6);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x4d0),_0x457503=>{const _0x15a49e=_0x502049;VisuMZ[_0x15a49e(0x3b3)](_0x457503,_0x457503),_0x457503[_0x15a49e(0x3bc)]=_0x15a49e(0x41b),VisuMZ[_0x15a49e(0x329)]['applyPluginCmdSettings'](_0x457503);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x5a7),_0x29eb06=>{const _0x37928d=_0x502049;VisuMZ[_0x37928d(0x3b3)](_0x29eb06,_0x29eb06),_0x29eb06['type']=_0x37928d(0x45b),VisuMZ[_0x37928d(0x329)][_0x37928d(0x417)](_0x29eb06);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x550),_0x4f35c8=>{const _0xe556a4=_0x502049;VisuMZ['ConvertParams'](_0x4f35c8,_0x4f35c8),_0x4f35c8[_0xe556a4(0x3bc)]=_0xe556a4(0x2ef),VisuMZ[_0xe556a4(0x329)][_0xe556a4(0x417)](_0x4f35c8);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Ice_Snowflakes',_0x204cde=>{const _0x5ed431=_0x502049;VisuMZ[_0x5ed431(0x3b3)](_0x204cde,_0x204cde),_0x204cde[_0x5ed431(0x3bc)]=_0x5ed431(0x381),VisuMZ[_0x5ed431(0x329)][_0x5ed431(0x417)](_0x204cde);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x27e),_0x1b6410=>{const _0x2b0779=_0x502049;VisuMZ['ConvertParams'](_0x1b6410,_0x1b6410),_0x1b6410[_0x2b0779(0x3bc)]=_0x2b0779(0x373),VisuMZ['WeatherEffects'][_0x2b0779(0x417)](_0x1b6410);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Thunder_PlasmaBolt',_0x3dbde7=>{const _0x205dfe=_0x502049;VisuMZ[_0x205dfe(0x3b3)](_0x3dbde7,_0x3dbde7),_0x3dbde7[_0x205dfe(0x3bc)]=_0x205dfe(0x4a2),VisuMZ[_0x205dfe(0x329)][_0x205dfe(0x417)](_0x3dbde7);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Thunder_PlasmaSurge',_0xa55097=>{const _0x3f4065=_0x502049;VisuMZ[_0x3f4065(0x3b3)](_0xa55097,_0xa55097),_0xa55097[_0x3f4065(0x3bc)]=_0x3f4065(0x3b0),VisuMZ[_0x3f4065(0x329)][_0x3f4065(0x417)](_0xa55097);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x356),_0xfc65d=>{const _0x16c2b8=_0x502049;VisuMZ['ConvertParams'](_0xfc65d,_0xfc65d),_0xfc65d[_0x16c2b8(0x3bc)]=_0x16c2b8(0x243),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0xfc65d);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x2bf),_0x16df52=>{const _0x5c1d07=_0x502049;VisuMZ[_0x5c1d07(0x3b3)](_0x16df52,_0x16df52),_0x16df52[_0x5c1d07(0x3bc)]=_0x5c1d07(0x3b6),VisuMZ[_0x5c1d07(0x329)][_0x5c1d07(0x417)](_0x16df52);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x498),_0x101dae=>{const _0x479cba=_0x502049;VisuMZ['ConvertParams'](_0x101dae,_0x101dae),_0x101dae[_0x479cba(0x3bc)]=_0x479cba(0x4d4),VisuMZ[_0x479cba(0x329)][_0x479cba(0x417)](_0x101dae);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x27c),_0x2acfeb=>{const _0x2cb42f=_0x502049;VisuMZ[_0x2cb42f(0x3b3)](_0x2acfeb,_0x2acfeb),_0x2acfeb[_0x2cb42f(0x3bc)]=_0x2cb42f(0x3ea),VisuMZ['WeatherEffects'][_0x2cb42f(0x417)](_0x2acfeb);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x24c),_0x35a6a1=>{const _0x2a5b95=_0x502049;VisuMZ[_0x2a5b95(0x3b3)](_0x35a6a1,_0x35a6a1),_0x35a6a1[_0x2a5b95(0x3bc)]='thunderclouds',VisuMZ[_0x2a5b95(0x329)][_0x2a5b95(0x417)](_0x35a6a1);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x5d5),_0x406d8e=>{const _0x32e53f=_0x502049;VisuMZ[_0x32e53f(0x3b3)](_0x406d8e,_0x406d8e),_0x406d8e[_0x32e53f(0x3bc)]='thundersurge',VisuMZ[_0x32e53f(0x329)][_0x32e53f(0x417)](_0x406d8e);}),PluginManager[_0x502049(0x274)](pluginData['name'],'Thunder_UltravioletBeams',_0x147212=>{const _0x2bba13=_0x502049;VisuMZ[_0x2bba13(0x3b3)](_0x147212,_0x147212),_0x147212[_0x2bba13(0x3bc)]=_0x2bba13(0x2b6),VisuMZ[_0x2bba13(0x329)][_0x2bba13(0x417)](_0x147212);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Water_Bubbles',_0x495bb8=>{const _0x3b713f=_0x502049;VisuMZ['ConvertParams'](_0x495bb8,_0x495bb8),_0x495bb8[_0x3b713f(0x3bc)]='bubbles',VisuMZ[_0x3b713f(0x329)][_0x3b713f(0x417)](_0x495bb8);}),PluginManager['registerCommand'](pluginData['name'],'Water_CloudBurst',_0x526210=>{const _0x86dc60=_0x502049;VisuMZ['ConvertParams'](_0x526210,_0x526210),_0x526210[_0x86dc60(0x3bc)]=_0x86dc60(0x47f),VisuMZ['WeatherEffects'][_0x86dc60(0x417)](_0x526210);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x4f6),_0x4d41d9=>{const _0x5f1fef=_0x502049;VisuMZ[_0x5f1fef(0x3b3)](_0x4d41d9,_0x4d41d9),_0x4d41d9[_0x5f1fef(0x3bc)]=_0x5f1fef(0x5b2),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x4d41d9);}),PluginManager[_0x502049(0x274)](pluginData['name'],'Water_Mist',_0x557b67=>{const _0x405f22=_0x502049;VisuMZ[_0x405f22(0x3b3)](_0x557b67,_0x557b67),_0x557b67[_0x405f22(0x3bc)]=_0x405f22(0x4e5),VisuMZ[_0x405f22(0x329)][_0x405f22(0x417)](_0x557b67);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4c0),_0xf6b6f5=>{const _0x5340ed=_0x502049;VisuMZ[_0x5340ed(0x3b3)](_0xf6b6f5,_0xf6b6f5),_0xf6b6f5[_0x5340ed(0x3bc)]=_0x5340ed(0x365),VisuMZ['WeatherEffects'][_0x5340ed(0x417)](_0xf6b6f5);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Water_RainbowArch',_0x13290f=>{const _0x243d76=_0x502049;VisuMZ[_0x243d76(0x3b3)](_0x13290f,_0x13290f),_0x13290f[_0x243d76(0x3bc)]='rainbowarch',VisuMZ[_0x243d76(0x329)][_0x243d76(0x417)](_0x13290f);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x47c),_0x4da102=>{const _0x56678c=_0x502049;VisuMZ['ConvertParams'](_0x4da102,_0x4da102),_0x4da102[_0x56678c(0x3bc)]=_0x56678c(0x436),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x4da102);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x20f),_0x2a1859=>{const _0x1f7721=_0x502049;VisuMZ['ConvertParams'](_0x2a1859,_0x2a1859),_0x2a1859[_0x1f7721(0x3bc)]=_0x1f7721(0x3f0),VisuMZ['WeatherEffects'][_0x1f7721(0x417)](_0x2a1859);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x1ff),_0x5740a4=>{const _0x12f7b6=_0x502049;VisuMZ[_0x12f7b6(0x3b3)](_0x5740a4,_0x5740a4),_0x5740a4[_0x12f7b6(0x3bc)]=_0x12f7b6(0x20e),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x5740a4);}),PluginManager[_0x502049(0x274)](pluginData['name'],'Water_Storm',_0x166a19=>{const _0x7793e9=_0x502049;VisuMZ['ConvertParams'](_0x166a19,_0x166a19),_0x166a19[_0x7793e9(0x3bc)]='storm',VisuMZ[_0x7793e9(0x329)]['applyPluginCmdSettings'](_0x166a19);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x280),_0x320c7f=>{const _0xa22e0=_0x502049;VisuMZ[_0xa22e0(0x3b3)](_0x320c7f,_0x320c7f),_0x320c7f[_0xa22e0(0x3bc)]=_0xa22e0(0x1a8),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x320c7f);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x45a),_0x488cb4=>{const _0x42c299=_0x502049;VisuMZ[_0x42c299(0x3b3)](_0x488cb4,_0x488cb4),_0x488cb4[_0x42c299(0x3bc)]=_0x42c299(0x40e),VisuMZ[_0x42c299(0x329)][_0x42c299(0x417)](_0x488cb4);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x505),_0x4ad7da=>{const _0xff2119=_0x502049;VisuMZ[_0xff2119(0x3b3)](_0x4ad7da,_0x4ad7da),_0x4ad7da[_0xff2119(0x3bc)]=_0xff2119(0x3fa),VisuMZ[_0xff2119(0x329)][_0xff2119(0x417)](_0x4ad7da);}),PluginManager['registerCommand'](pluginData['name'],_0x502049(0x4e1),_0x5c1402=>{const _0x380497=_0x502049;VisuMZ[_0x380497(0x3b3)](_0x5c1402,_0x5c1402),_0x5c1402[_0x380497(0x3bc)]=_0x380497(0x1c7),VisuMZ[_0x380497(0x329)][_0x380497(0x417)](_0x5c1402);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x39b),_0x8377fa=>{const _0x36008d=_0x502049;VisuMZ[_0x36008d(0x3b3)](_0x8377fa,_0x8377fa),_0x8377fa[_0x36008d(0x3bc)]=_0x36008d(0x24d),VisuMZ['WeatherEffects'][_0x36008d(0x417)](_0x8377fa);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x179),_0x162036=>{const _0x36d3b1=_0x502049;VisuMZ[_0x36d3b1(0x3b3)](_0x162036,_0x162036),_0x162036['type']='pollutionclouds',VisuMZ[_0x36d3b1(0x329)][_0x36d3b1(0x417)](_0x162036);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x331),_0x25ab95=>{const _0x4362e7=_0x502049;VisuMZ[_0x4362e7(0x3b3)](_0x25ab95,_0x25ab95),_0x25ab95[_0x4362e7(0x3bc)]=_0x4362e7(0x2fa),VisuMZ[_0x4362e7(0x329)]['applyPluginCmdSettings'](_0x25ab95);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x23f),_0x1af85a=>{const _0x5cc7b7=_0x502049;VisuMZ[_0x5cc7b7(0x3b3)](_0x1af85a,_0x1af85a),_0x1af85a[_0x5cc7b7(0x3bc)]=_0x5cc7b7(0x42a),VisuMZ[_0x5cc7b7(0x329)][_0x5cc7b7(0x417)](_0x1af85a);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x389),_0x1f3fc5=>{const _0x587ac0=_0x502049;VisuMZ['ConvertParams'](_0x1f3fc5,_0x1f3fc5),_0x1f3fc5[_0x587ac0(0x3bc)]=_0x587ac0(0x413),VisuMZ[_0x587ac0(0x329)][_0x587ac0(0x417)](_0x1f3fc5);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x2ba),_0x2e3802=>{const _0xc990d3=_0x502049;VisuMZ[_0xc990d3(0x3b3)](_0x2e3802,_0x2e3802),_0x2e3802['type']=_0xc990d3(0x5c9),VisuMZ[_0xc990d3(0x329)][_0xc990d3(0x417)](_0x2e3802);}),PluginManager['registerCommand'](pluginData['name'],_0x502049(0x4ef),_0x28edda=>{const _0x1ebc4a=_0x502049;VisuMZ[_0x1ebc4a(0x3b3)](_0x28edda,_0x28edda),_0x28edda[_0x1ebc4a(0x3bc)]=_0x1ebc4a(0x41a),VisuMZ[_0x1ebc4a(0x329)][_0x1ebc4a(0x417)](_0x28edda);}),PluginManager[_0x502049(0x274)](pluginData['name'],'Wind_Balloons',_0x5043e3=>{const _0x48896f=_0x502049;VisuMZ[_0x48896f(0x3b3)](_0x5043e3,_0x5043e3),_0x5043e3['type']=_0x48896f(0x422),VisuMZ[_0x48896f(0x329)][_0x48896f(0x417)](_0x5043e3);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x3a8),_0xbec957=>{const _0xeca4a=_0x502049;VisuMZ[_0xeca4a(0x3b3)](_0xbec957,_0xbec957),_0xbec957[_0xeca4a(0x3bc)]=_0xeca4a(0x4da),VisuMZ[_0xeca4a(0x329)][_0xeca4a(0x417)](_0xbec957);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x198),_0x1bb419=>{const _0x23b826=_0x502049;VisuMZ[_0x23b826(0x3b3)](_0x1bb419,_0x1bb419),_0x1bb419[_0x23b826(0x3bc)]='dandelionseeds',VisuMZ['WeatherEffects'][_0x23b826(0x417)](_0x1bb419);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x22d),_0xcf054f=>{const _0x2617cc=_0x502049;VisuMZ[_0x2617cc(0x3b3)](_0xcf054f,_0xcf054f),_0xcf054f[_0x2617cc(0x3bc)]='grassygust',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0xcf054f);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x4ea),_0x2246c6=>{const _0x102540=_0x502049;VisuMZ[_0x102540(0x3b3)](_0x2246c6,_0x2246c6),_0x2246c6[_0x102540(0x3bc)]=_0x102540(0x425),VisuMZ[_0x102540(0x329)][_0x102540(0x417)](_0x2246c6);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4f9),_0x3c5b5c=>{const _0x32c140=_0x502049;VisuMZ['ConvertParams'](_0x3c5b5c,_0x3c5b5c),_0x3c5b5c[_0x32c140(0x3bc)]='pollen',VisuMZ['WeatherEffects'][_0x32c140(0x417)](_0x3c5b5c);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Wind_Tempest',_0x55e060=>{const _0x4f93f7=_0x502049;VisuMZ[_0x4f93f7(0x3b3)](_0x55e060,_0x55e060),_0x55e060[_0x4f93f7(0x3bc)]=_0x4f93f7(0x4c3),VisuMZ[_0x4f93f7(0x329)][_0x4f93f7(0x417)](_0x55e060);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4b0),_0x26bb5b=>{const _0xc2156f=_0x502049;VisuMZ['ConvertParams'](_0x26bb5b,_0x26bb5b),_0x26bb5b[_0xc2156f(0x3bc)]=_0xc2156f(0x55c),VisuMZ[_0xc2156f(0x329)][_0xc2156f(0x417)](_0x26bb5b);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x261),_0x5b21fa=>{const _0x317245=_0x502049;VisuMZ[_0x317245(0x3b3)](_0x5b21fa,_0x5b21fa),_0x5b21fa[_0x317245(0x3bc)]='xtreme',VisuMZ[_0x317245(0x329)][_0x317245(0x417)](_0x5b21fa);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x577),_0x422ccc=>{const _0x240682=_0x502049;VisuMZ[_0x240682(0x3b3)](_0x422ccc,_0x422ccc),_0x422ccc[_0x240682(0x3bc)]=_0x240682(0x2ff),VisuMZ[_0x240682(0x329)][_0x240682(0x417)](_0x422ccc);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x51c),_0x186690=>{const _0x792807=_0x502049;VisuMZ[_0x792807(0x3b3)](_0x186690,_0x186690),_0x186690[_0x792807(0x3bc)]=_0x792807(0x36c),VisuMZ[_0x792807(0x329)][_0x792807(0x417)](_0x186690);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Light_LightBurst',_0x569195=>{const _0x521b5d=_0x502049;VisuMZ[_0x521b5d(0x3b3)](_0x569195,_0x569195),_0x569195[_0x521b5d(0x3bc)]=_0x521b5d(0x28e),VisuMZ[_0x521b5d(0x329)][_0x521b5d(0x417)](_0x569195);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x23b),_0x352a48=>{const _0x512ac6=_0x502049;VisuMZ[_0x512ac6(0x3b3)](_0x352a48,_0x352a48),_0x352a48[_0x512ac6(0x3bc)]=_0x512ac6(0x49c),VisuMZ[_0x512ac6(0x329)][_0x512ac6(0x417)](_0x352a48);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x1d9),_0x2cc4d8=>{const _0x1f7412=_0x502049;VisuMZ['ConvertParams'](_0x2cc4d8,_0x2cc4d8),_0x2cc4d8[_0x1f7412(0x3bc)]=_0x1f7412(0x32d),VisuMZ[_0x1f7412(0x329)][_0x1f7412(0x417)](_0x2cc4d8);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x3cf),_0x358c9f=>{const _0x28eedd=_0x502049;VisuMZ[_0x28eedd(0x3b3)](_0x358c9f,_0x358c9f),_0x358c9f[_0x28eedd(0x3bc)]='prismburst',VisuMZ[_0x28eedd(0x329)]['applyPluginCmdSettings'](_0x358c9f);}),PluginManager[_0x502049(0x274)](pluginData['name'],'Light_PrismBeams',_0x1ecb60=>{const _0x5a61b5=_0x502049;VisuMZ[_0x5a61b5(0x3b3)](_0x1ecb60,_0x1ecb60),_0x1ecb60[_0x5a61b5(0x3bc)]=_0x5a61b5(0x21e),VisuMZ[_0x5a61b5(0x329)]['applyPluginCmdSettings'](_0x1ecb60);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4b4),_0x316baa=>{const _0xa8d4d3=_0x502049;VisuMZ[_0xa8d4d3(0x3b3)](_0x316baa,_0x316baa),_0x316baa['type']='rainbowclouds',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x316baa);}),PluginManager[_0x502049(0x274)](pluginData['name'],_0x502049(0x4d8),_0x493760=>{const _0x28c3a5=_0x502049;VisuMZ[_0x28c3a5(0x3b3)](_0x493760,_0x493760),_0x493760['type']=_0x28c3a5(0x238),VisuMZ[_0x28c3a5(0x329)][_0x28c3a5(0x417)](_0x493760);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Light_Stars',_0x1d18e2=>{const _0x3b3fff=_0x502049;VisuMZ[_0x3b3fff(0x3b3)](_0x1d18e2,_0x1d18e2),_0x1d18e2['type']=_0x3b3fff(0x4c4),VisuMZ[_0x3b3fff(0x329)][_0x3b3fff(0x417)](_0x1d18e2);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x1f3),_0x23429d=>{const _0x40afaf=_0x502049;VisuMZ[_0x40afaf(0x3b3)](_0x23429d,_0x23429d),_0x23429d[_0x40afaf(0x3bc)]=_0x40afaf(0x216),VisuMZ[_0x40afaf(0x329)][_0x40afaf(0x417)](_0x23429d);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Dark_Ashfall',_0x26e933=>{const _0x2fb4c7=_0x502049;VisuMZ[_0x2fb4c7(0x3b3)](_0x26e933,_0x26e933),_0x26e933[_0x2fb4c7(0x3bc)]='ashfall',VisuMZ['WeatherEffects'][_0x2fb4c7(0x417)](_0x26e933);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Dark_BloodRain',_0x45de11=>{const _0x1a559e=_0x502049;VisuMZ[_0x1a559e(0x3b3)](_0x45de11,_0x45de11),_0x45de11['type']=_0x1a559e(0x203),VisuMZ[_0x1a559e(0x329)][_0x1a559e(0x417)](_0x45de11);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Dark_DarkOrbs',_0x44daa=>{const _0x26e56a=_0x502049;VisuMZ[_0x26e56a(0x3b3)](_0x44daa,_0x44daa),_0x44daa[_0x26e56a(0x3bc)]='darkorbs',VisuMZ['WeatherEffects'][_0x26e56a(0x417)](_0x44daa);}),PluginManager['registerCommand'](pluginData['name'],_0x502049(0x374),_0x395d17=>{const _0x36f526=_0x502049;VisuMZ[_0x36f526(0x3b3)](_0x395d17,_0x395d17),_0x395d17[_0x36f526(0x3bc)]=_0x36f526(0x201),VisuMZ[_0x36f526(0x329)][_0x36f526(0x417)](_0x395d17);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x23d),_0x1b8f70=>{const _0x57bd98=_0x502049;VisuMZ[_0x57bd98(0x3b3)](_0x1b8f70,_0x1b8f70),_0x1b8f70['type']=_0x57bd98(0x1fa),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x1b8f70);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x1a7),_0x17eff2=>{const _0x5ac303=_0x502049;VisuMZ[_0x5ac303(0x3b3)](_0x17eff2,_0x17eff2),_0x17eff2[_0x5ac303(0x3bc)]=_0x5ac303(0x1f7),VisuMZ[_0x5ac303(0x329)]['applyPluginCmdSettings'](_0x17eff2);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x273),_0x4b6905=>{const _0x3b3b3c=_0x502049;VisuMZ['ConvertParams'](_0x4b6905,_0x4b6905),_0x4b6905[_0x3b3b3c(0x3bc)]=_0x3b3b3c(0x287),VisuMZ[_0x3b3b3c(0x329)][_0x3b3b3c(0x417)](_0x4b6905);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x275),_0xb48ad4=>{const _0x9d66ce=_0x502049;VisuMZ[_0x9d66ce(0x3b3)](_0xb48ad4,_0xb48ad4),_0xb48ad4[_0x9d66ce(0x3bc)]='smokecloud',VisuMZ[_0x9d66ce(0x329)][_0x9d66ce(0x417)](_0xb48ad4);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4f2),_0x4be8bf=>{const _0x5d34ec=_0x502049;VisuMZ['ConvertParams'](_0x4be8bf,_0x4be8bf),_0x4be8bf[_0x5d34ec(0x3bc)]=_0x5d34ec(0x311),VisuMZ['WeatherEffects'][_0x5d34ec(0x417)](_0x4be8bf);}),PluginManager['registerCommand'](pluginData['name'],_0x502049(0x495),_0x185360=>{const _0x49598d=_0x502049;VisuMZ['ConvertParams'](_0x185360,_0x185360),_0x185360[_0x49598d(0x3bc)]=_0x49598d(0x20b),VisuMZ[_0x49598d(0x329)][_0x49598d(0x417)](_0x185360);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x5f2),_0x376be4=>{const _0x275052=_0x502049;VisuMZ['ConvertParams'](_0x376be4,_0x376be4),_0x376be4[_0x275052(0x3bc)]='slow_icons_9',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x376be4);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Slow_Icons_Right',_0x357e4f=>{const _0x533b04=_0x502049;VisuMZ[_0x533b04(0x3b3)](_0x357e4f,_0x357e4f),_0x357e4f[_0x533b04(0x3bc)]=_0x533b04(0x1b1),VisuMZ[_0x533b04(0x329)][_0x533b04(0x417)](_0x357e4f);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x43f),_0xa7e246=>{const _0x2cca1a=_0x502049;VisuMZ[_0x2cca1a(0x3b3)](_0xa7e246,_0xa7e246),_0xa7e246[_0x2cca1a(0x3bc)]=_0x2cca1a(0x3e3),VisuMZ[_0x2cca1a(0x329)][_0x2cca1a(0x417)](_0xa7e246);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x3be),_0x13d2a0=>{const _0x4f9e00=_0x502049;VisuMZ[_0x4f9e00(0x3b3)](_0x13d2a0,_0x13d2a0),_0x13d2a0['type']=_0x4f9e00(0x20b),VisuMZ['WeatherEffects'][_0x4f9e00(0x417)](_0x13d2a0);}),PluginManager[_0x502049(0x274)](pluginData['name'],'Slow_Icons_LowerLeft',_0x3f95c4=>{const _0xc48dcf=_0x502049;VisuMZ[_0xc48dcf(0x3b3)](_0x3f95c4,_0x3f95c4),_0x3f95c4[_0xc48dcf(0x3bc)]=_0xc48dcf(0x1c6),VisuMZ[_0xc48dcf(0x329)][_0xc48dcf(0x417)](_0x3f95c4);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4a1),_0x38524a=>{const _0x1d7c23=_0x502049;VisuMZ[_0x1d7c23(0x3b3)](_0x38524a,_0x38524a),_0x38524a[_0x1d7c23(0x3bc)]=_0x1d7c23(0x512),VisuMZ[_0x1d7c23(0x329)][_0x1d7c23(0x417)](_0x38524a);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x5e7),_0x2db260=>{const _0xa23a49=_0x502049;VisuMZ[_0xa23a49(0x3b3)](_0x2db260,_0x2db260),_0x2db260[_0xa23a49(0x3bc)]=_0xa23a49(0x2ad),VisuMZ[_0xa23a49(0x329)][_0xa23a49(0x417)](_0x2db260);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x167),_0x196daa=>{const _0x1f91bb=_0x502049;VisuMZ[_0x1f91bb(0x3b3)](_0x196daa,_0x196daa),_0x196daa[_0x1f91bb(0x3bc)]=_0x1f91bb(0x321),VisuMZ[_0x1f91bb(0x329)][_0x1f91bb(0x417)](_0x196daa);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x45d),_0x2a5789=>{const _0x12d2fa=_0x502049;VisuMZ[_0x12d2fa(0x3b3)](_0x2a5789,_0x2a5789),_0x2a5789[_0x12d2fa(0x3bc)]=_0x12d2fa(0x35e),VisuMZ[_0x12d2fa(0x329)][_0x12d2fa(0x417)](_0x2a5789);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x296),_0xfacd8d=>{const _0x5d7331=_0x502049;VisuMZ[_0x5d7331(0x3b3)](_0xfacd8d,_0xfacd8d),_0xfacd8d['type']=_0x5d7331(0x51f),VisuMZ['WeatherEffects'][_0x5d7331(0x417)](_0xfacd8d);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x341),_0x56e615=>{const _0x165229=_0x502049;VisuMZ[_0x165229(0x3b3)](_0x56e615,_0x56e615),_0x56e615[_0x165229(0x3bc)]='medium_icons_6',VisuMZ[_0x165229(0x329)][_0x165229(0x417)](_0x56e615);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x46a),_0x5a464c=>{const _0x88616a=_0x502049;VisuMZ[_0x88616a(0x3b3)](_0x5a464c,_0x5a464c),_0x5a464c[_0x88616a(0x3bc)]=_0x88616a(0x16d),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x5a464c);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x501),_0x4df6db=>{const _0x4ae378=_0x502049;VisuMZ[_0x4ae378(0x3b3)](_0x4df6db,_0x4df6db),_0x4df6db['type']=_0x4ae378(0x35e),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x4df6db);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x384),_0x49a3fd=>{const _0x3129d1=_0x502049;VisuMZ[_0x3129d1(0x3b3)](_0x49a3fd,_0x49a3fd),_0x49a3fd[_0x3129d1(0x3bc)]=_0x3129d1(0x1a4),VisuMZ[_0x3129d1(0x329)]['applyPluginCmdSettings'](_0x49a3fd);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x506),_0x5238d2=>{const _0xb5e8c3=_0x502049;VisuMZ[_0xb5e8c3(0x3b3)](_0x5238d2,_0x5238d2),_0x5238d2[_0xb5e8c3(0x3bc)]='medium_icons_4',VisuMZ['WeatherEffects'][_0xb5e8c3(0x417)](_0x5238d2);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x57e),_0x8b9f0a=>{const _0xae7e02=_0x502049;VisuMZ[_0xae7e02(0x3b3)](_0x8b9f0a,_0x8b9f0a),_0x8b9f0a[_0xae7e02(0x3bc)]=_0xae7e02(0x1e7),VisuMZ[_0xae7e02(0x329)][_0xae7e02(0x417)](_0x8b9f0a);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x18d),_0x448dde=>{const _0x5b7eaa=_0x502049;VisuMZ['ConvertParams'](_0x448dde,_0x448dde),_0x448dde[_0x5b7eaa(0x3bc)]=_0x5b7eaa(0x4c5),VisuMZ[_0x5b7eaa(0x329)][_0x5b7eaa(0x417)](_0x448dde);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Fast_Icons_Up',_0x148054=>{const _0xcad837=_0x502049;VisuMZ[_0xcad837(0x3b3)](_0x148054,_0x148054),_0x148054[_0xcad837(0x3bc)]=_0xcad837(0x449),VisuMZ[_0xcad837(0x329)]['applyPluginCmdSettings'](_0x148054);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x564),_0x2ac4c6=>{const _0x583885=_0x502049;VisuMZ['ConvertParams'](_0x2ac4c6,_0x2ac4c6),_0x2ac4c6[_0x583885(0x3bc)]='fast_icons_9',VisuMZ[_0x583885(0x329)][_0x583885(0x417)](_0x2ac4c6);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x265),_0x5f56a5=>{const _0x1dc400=_0x502049;VisuMZ['ConvertParams'](_0x5f56a5,_0x5f56a5),_0x5f56a5[_0x1dc400(0x3bc)]='fast_icons_6',VisuMZ[_0x1dc400(0x329)][_0x1dc400(0x417)](_0x5f56a5);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x38a),_0x59f093=>{const _0x1f477a=_0x502049;VisuMZ[_0x1f477a(0x3b3)](_0x59f093,_0x59f093),_0x59f093[_0x1f477a(0x3bc)]='fast_icons_3',VisuMZ[_0x1f477a(0x329)]['applyPluginCmdSettings'](_0x59f093);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x5be),_0x1e7252=>{const _0x50e2f5=_0x502049;VisuMZ[_0x50e2f5(0x3b3)](_0x1e7252,_0x1e7252),_0x1e7252[_0x50e2f5(0x3bc)]=_0x50e2f5(0x449),VisuMZ[_0x50e2f5(0x329)][_0x50e2f5(0x417)](_0x1e7252);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],_0x502049(0x4af),_0x18bca5=>{const _0x316a1e=_0x502049;VisuMZ[_0x316a1e(0x3b3)](_0x18bca5,_0x18bca5),_0x18bca5[_0x316a1e(0x3bc)]='fast_icons_1',VisuMZ[_0x316a1e(0x329)][_0x316a1e(0x417)](_0x18bca5);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x351),_0x51fe2f=>{const _0x349cb7=_0x502049;VisuMZ[_0x349cb7(0x3b3)](_0x51fe2f,_0x51fe2f),_0x51fe2f[_0x349cb7(0x3bc)]='fast_icons_4',VisuMZ[_0x349cb7(0x329)][_0x349cb7(0x417)](_0x51fe2f);}),PluginManager[_0x502049(0x274)](pluginData[_0x502049(0x3de)],'Fast_Icons_UpperLeft',_0x168db3=>{const _0x59e874=_0x502049;VisuMZ[_0x59e874(0x3b3)](_0x168db3,_0x168db3),_0x168db3['type']=_0x59e874(0x180),VisuMZ[_0x59e874(0x329)][_0x59e874(0x417)](_0x168db3);}),PluginManager['registerCommand'](pluginData[_0x502049(0x3de)],_0x502049(0x43d),_0x3e0c7f=>{const _0x2d674f=_0x502049;VisuMZ[_0x2d674f(0x3b3)](_0x3e0c7f,_0x3e0c7f),_0x3e0c7f[_0x2d674f(0x3bc)]=_0x2d674f(0x4c6),VisuMZ[_0x2d674f(0x329)][_0x2d674f(0x417)](_0x3e0c7f);}),VisuMZ['WeatherEffects'][_0x502049(0x598)]={'NoWeather':/<NO WEATHER>/gi},Weather['MAX_LAYERS']=0xa,VisuMZ[_0x502049(0x329)][_0x502049(0x324)]=Weather[_0x502049(0x4ca)][_0x502049(0x48f)],Weather['prototype']['update']=function(){const _0x51a914=_0x502049;this['updateData'](),VisuMZ['WeatherEffects'][_0x51a914(0x324)][_0x51a914(0x24b)](this);},Weather[_0x502049(0x4ca)][_0x502049(0x1e6)]=function(){const _0x549673=_0x502049;this[_0x549673(0x490)]=new Bitmap(0x1,0x1),this['_stormBitmap']=new Bitmap(0x1,0x1),this[_0x549673(0x437)]=new Bitmap(0x1,0x1);},Weather[_0x502049(0x4ca)][_0x502049(0x4b9)]=function(){const _0x2ad915=_0x502049;if(!this[_0x2ad915(0x254)])return;this[_0x2ad915(0x397)](),this['updateDimmerOpacity']();},Weather['prototype'][_0x502049(0x2bd)]=function(){const _0x15e66c=_0x502049,_0x4e68f7=this[_0x15e66c(0x25d)]();while(this[_0x15e66c(0x5ad)][_0x15e66c(0x19b)]<_0x4e68f7)this['_addSprite']();while(this['_sprites'][_0x15e66c(0x19b)]>_0x4e68f7)this[_0x15e66c(0x3b7)]();for(const _0xa10aa0 of this[_0x15e66c(0x5ad)]){_0xa10aa0['update']();}},Weather['prototype'][_0x502049(0x3cb)]=function(){const _0x5419f1=_0x502049,_0x2cb11a=new Sprite_WeatherParticle(this,this[_0x5419f1(0x5ad)][_0x5419f1(0x19b)]);this[_0x5419f1(0x5ad)]['push'](_0x2cb11a),this[_0x5419f1(0x1dc)](_0x2cb11a);},Weather[_0x502049(0x4ca)]['destroy']=function(){},Weather[_0x502049(0x4ca)][_0x502049(0x514)]=function(_0x46be68,_0xdf6bcc){const _0x1bfa18=_0x502049;this[_0x1bfa18(0x3d3)]=_0x46be68,this[_0x1bfa18(0x276)]=_0xdf6bcc||![];},Weather[_0x502049(0x4ca)][_0x502049(0x27b)]=function(){const _0x19fa76=_0x502049;return $gameScreen[_0x19fa76(0x16e)](this['_layerID'],this[_0x19fa76(0x276)]);},Weather[_0x502049(0x4ca)][_0x502049(0x57b)]=function(){const _0x559e3b=_0x502049,_0x1479dd=this[_0x559e3b(0x27b)]();if(!_0x1479dd)return;this[_0x559e3b(0x3bc)]=_0x1479dd[_0x559e3b(0x3bc)],this['power']=_0x1479dd[_0x559e3b(0x44b)],$gameMap&&$gameMap['isNoWeather']()&&(this[_0x559e3b(0x44b)]=0x0);},Weather[_0x502049(0x4ca)][_0x502049(0x228)]=function(){const _0x332aac=_0x502049;if(SceneManager[_0x332aac(0x57f)]())return;this['origin']['x']=$gameMap[_0x332aac(0x1c0)]()*$gameMap['tileWidth'](),this['origin']['y']=$gameMap['displayY']()*$gameMap[_0x332aac(0x294)]();},Weather[_0x502049(0x4ca)]['updateDimmerColor']=function(){const _0x5b4511=_0x502049;if(this[_0x5b4511(0x27b)]()['type']===_0x5b4511(0x3ff))return;if(this[_0x5b4511(0x3dc)]===this[_0x5b4511(0x27b)]()[_0x5b4511(0x289)][_0x5b4511(0x1d5)])return;const _0x231dba=this[_0x5b4511(0x27b)]()['duration'];let _0xf8be53=this['data']()[_0x5b4511(0x289)][_0x5b4511(0x1d5)];this[_0x5b4511(0x3dc)]=_0xf8be53;if(_0x231dba>0x0){const _0x1e4465=[this[_0x5b4511(0x254)][_0x5b4511(0x525)],this[_0x5b4511(0x254)]['_green'],this[_0x5b4511(0x254)][_0x5b4511(0x19e)]],_0x21f6ec=ColorManager[_0x5b4511(0x5df)](_0xf8be53);for(let _0x20bb3d=0x0;_0x20bb3d<0x3;_0x20bb3d++){if(_0x5b4511(0x2e6)!=='ZIOoS')_0x1e4465[_0x20bb3d]=Math[_0x5b4511(0x226)]((_0x1e4465[_0x20bb3d]*(_0x231dba-0x1)+_0x21f6ec[_0x20bb3d])/_0x231dba);else{const _0x2d02cb=_0x584667(_0x27bef9['$1'])*0.01;_0x4f103d+=_0x3186c2[_0x5b4511(0x474)](_0x50f2a3[_0x5b4511(0x313)]*_0x2d02cb);}}this[_0x5b4511(0x3dc)]=ColorManager[_0x5b4511(0x40b)](_0x1e4465);}const _0x56f4df=ColorManager[_0x5b4511(0x5df)](this[_0x5b4511(0x3dc)]);this[_0x5b4511(0x254)][_0x5b4511(0x520)](_0x56f4df[0x0]||0x0,_0x56f4df[0x1]||0x0,_0x56f4df[0x2]||0x0);},Weather[_0x502049(0x4ca)][_0x502049(0x2b5)]=function(){const _0x74b5a1=_0x502049,_0x48bb6b=this[_0x74b5a1(0x27b)]()[_0x74b5a1(0x55f)],_0x452ada=this['data']()[_0x74b5a1(0x289)];let _0x429ccc=_0x452ada[_0x74b5a1(0x510)]+_0x452ada[_0x74b5a1(0x415)]*this[_0x74b5a1(0x27b)]()[_0x74b5a1(0x2ab)];if(this['power']<=0x0)_0x429ccc=0x0;let _0x5cece7=_0x429ccc;if(_0x48bb6b>0x0){if('OErpQ'!==_0x74b5a1(0x1e5)){const _0x30656d=this['_cached_WeatherEffects_Fireworks'];return _0x30656d[_0x404cb0[_0x74b5a1(0x474)](_0x5cdf6c[_0x74b5a1(0x221)]()*_0x30656d[_0x74b5a1(0x19b)])];}else _0x5cece7=(this[_0x74b5a1(0x254)]['opacity']*(_0x48bb6b-0x1)+_0x429ccc)/_0x48bb6b;}if($gameMap&&$gameMap[_0x74b5a1(0x391)]()){if(_0x74b5a1(0x445)!==_0x74b5a1(0x346))_0x5cece7=0x0;else{if(this['_weatherLayers']===_0x8ca956)this[_0x74b5a1(0x199)]();for(let _0x5254f8=0x1;_0x5254f8<=_0x17b8f2[_0x74b5a1(0x5c0)];_0x5254f8++){this['updateWeatherLayer'](_0x5254f8,!![]),this[_0x74b5a1(0x56b)](_0x5254f8,![]);}}}this[_0x74b5a1(0x254)][_0x74b5a1(0x441)]=_0x5cece7;},Weather[_0x502049(0x4ca)][_0x502049(0x25d)]=function(){const _0x37f25d=_0x502049;if($gameMap&&$gameMap[_0x37f25d(0x391)]())return 0x0;if(this[_0x37f25d(0x44b)]<0x1)return 0x0;const _0x95c71c=this[_0x37f25d(0x27b)](),_0x5ed803=_0x95c71c['sprite'][_0x37f25d(0x5af)]||0x0,_0x1d02cb=_0x95c71c[_0x37f25d(0x53e)][_0x37f25d(0x354)]||0x0,_0x187540=(ConfigManager[_0x37f25d(0x19c)]??0x64)/0x64,_0x21cf08=Math[_0x37f25d(0x1fd)](this[_0x37f25d(0x44b)]*_0x1d02cb*_0x187540)+_0x5ed803;return Math[_0x37f25d(0x1fd)](_0x21cf08);},ConfigManager['weatherDensity']=0x64,VisuMZ[_0x502049(0x329)][_0x502049(0x37a)]=ConfigManager[_0x502049(0x312)],ConfigManager[_0x502049(0x312)]=function(){const _0x5bb15a=_0x502049,_0x150e93=VisuMZ[_0x5bb15a(0x329)][_0x5bb15a(0x37a)][_0x5bb15a(0x24b)](this);return _0x150e93[_0x5bb15a(0x19c)]=this[_0x5bb15a(0x19c)],_0x150e93;},VisuMZ['WeatherEffects'][_0x502049(0x175)]=ConfigManager['applyData'],ConfigManager[_0x502049(0x4c9)]=function(_0x3f7f59){const _0xcc840e=_0x502049;VisuMZ['WeatherEffects'][_0xcc840e(0x175)][_0xcc840e(0x24b)](this,_0x3f7f59),'weatherDensity'in _0x3f7f59?this[_0xcc840e(0x19c)]=_0x3f7f59['weatherDensity']:this['weatherDensity']=0x64;},ImageManager['WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES']=VisuMZ[_0x502049(0x329)]['Settings']['General'][_0x502049(0x53d)],ImageManager[_0x502049(0x4e6)]=VisuMZ['WeatherEffects'][_0x502049(0x3b1)][_0x502049(0x57d)][_0x502049(0x554)]||0x10,ImageManager[_0x502049(0x2e2)]=VisuMZ[_0x502049(0x329)]['Settings']['General'][_0x502049(0x3bd)],ImageManager[_0x502049(0x277)]=![],ImageManager[_0x502049(0x26a)]=['🐄','🐕','🐖','🐏','🐑','🐐','🐇','🐎','🐒','🐓','🦆','🐈','🐁','🐀','🦢','🐢'],VisuMZ[_0x502049(0x329)][_0x502049(0x185)]=Scene_Boot[_0x502049(0x4ca)][_0x502049(0x57a)],Scene_Boot['prototype'][_0x502049(0x57a)]=function(){const _0x9bfc0=_0x502049;VisuMZ['WeatherEffects'][_0x9bfc0(0x185)][_0x9bfc0(0x24b)](this),ImageManager['prepareGeneratedWeatherImages']();},ImageManager[_0x502049(0x44a)]=function(){const _0x125d64=_0x502049;if(this['_weatherIcons'])return this['_weatherIcons'];return this[_0x125d64(0x5cd)]=Bitmap[_0x125d64(0x584)](_0x125d64(0x3ce)),this['_weatherIcons'][_0x125d64(0x4ec)]=ImageManager[_0x125d64(0x2e2)],this[_0x125d64(0x5cd)];},ImageManager[_0x502049(0x1de)]=function(){const _0x438a5c=_0x502049;if(!ImageManager['WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES'])return;ImageManager['loadWeatherIcons']();const _0x42ad52=[_0x438a5c(0x3ff)];for(const _0xa2d2b2 of _0x42ad52){this[_0x438a5c(0x174)](_0xa2d2b2);}let _0x5e0e4d=0x0;const _0x4deeeb=[_0x438a5c(0x59b),_0x438a5c(0x352),_0x438a5c(0x2dd),_0x438a5c(0x25b),_0x438a5c(0x34a),_0x438a5c(0x475),_0x438a5c(0x2db),'fireworks',_0x438a5c(0x3c9),'blizzard',_0x438a5c(0x45b),'snowflakes',_0x438a5c(0x2ef),_0x438a5c(0x5d4),'diamonddust',_0x438a5c(0x58a),'arcticbeam',_0x438a5c(0x41b),_0x438a5c(0x4d4),_0x438a5c(0x243),_0x438a5c(0x25e),'ultraviolet',_0x438a5c(0x3b6),_0x438a5c(0x4a2),_0x438a5c(0x3b0),_0x438a5c(0x398),_0x438a5c(0x365),_0x438a5c(0x1af),'rainclouds',_0x438a5c(0x4e5),_0x438a5c(0x5b2),_0x438a5c(0x20e),_0x438a5c(0x5a0),_0x438a5c(0x413),_0x438a5c(0x4fe),_0x438a5c(0x1c7),_0x438a5c(0x3fa),_0x438a5c(0x42a),_0x438a5c(0x40e),'toxicgas',_0x438a5c(0x1a8),_0x438a5c(0x2fa),_0x438a5c(0x24d),_0x438a5c(0x41a),'cherryblossoms',_0x438a5c(0x425),_0x438a5c(0x31c),_0x438a5c(0x55c),'pollen','grassygust',_0x438a5c(0x1e8),_0x438a5c(0x422),_0x438a5c(0x4c4),_0x438a5c(0x32d),_0x438a5c(0x39e),_0x438a5c(0x238),_0x438a5c(0x49c),_0x438a5c(0x2ff),'prismbeams',_0x438a5c(0x36c),_0x438a5c(0x216),'ashfall',_0x438a5c(0x311),_0x438a5c(0x287),_0x438a5c(0x240),_0x438a5c(0x203),_0x438a5c(0x1fa),_0x438a5c(0x4d3),_0x438a5c(0x1f7),'fumes',_0x438a5c(0x316),'fireworksflower',_0x438a5c(0x478)];_0x5e0e4d=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS'];while(_0x5e0e4d--){for(const _0x49b9d0 of _0x4deeeb){this['getGeneratedWeatherParticle'](_0x49b9d0);}}const _0x25043a=[_0x438a5c(0x4d4),_0x438a5c(0x4d4),_0x438a5c(0x58a),_0x438a5c(0x58a),'aurora','aurora',_0x438a5c(0x3c9),_0x438a5c(0x3c9)];_0x5e0e4d=ImageManager[_0x438a5c(0x4e6)];while(_0x5e0e4d--){for(const _0xfcf6f3 of _0x25043a){_0x438a5c(0x5e0)===_0x438a5c(0x5e0)?this[_0x438a5c(0x174)](_0xfcf6f3):(_0x323c68[_0x438a5c(0x3b3)](_0x83a4cb,_0x4f5107),_0x55fa31[_0x438a5c(0x3bc)]=_0x438a5c(0x59b),_0x3d3d5a[_0x438a5c(0x329)][_0x438a5c(0x417)](_0xfb2d0a));}}},ImageManager[_0x502049(0x174)]=function(_0x21db69){const _0x403874=_0x502049;_0x21db69=_0x21db69['toLowerCase']()[_0x403874(0x491)]();switch(_0x21db69){case'none':return this[_0x403874(0x4a5)]();case'rain':return this['weatherEffectsRain']();case _0x403874(0x1af):return this[_0x403874(0x1ce)]();case _0x403874(0x45b):return this[_0x403874(0x26e)]();case _0x403874(0x59b):return this['weatherEffectsEmbers']();case _0x403874(0x2dd):return this[_0x403874(0x53b)]();case'fireflies':return this[_0x403874(0x570)]();case _0x403874(0x25b):return this[_0x403874(0x40f)]();case'heatclouds':return this[_0x403874(0x46c)]();case _0x403874(0x475):return this['weatherEffectsSunBeams']();case'flamehaze':return this[_0x403874(0x5e6)]();case'fireworks':return this[_0x403874(0x48c)]();case _0x403874(0x4b8):case _0x403874(0x3c9):return this['weatherEffectsShootingStars']();case _0x403874(0x58b):return this[_0x403874(0x3c2)]();case _0x403874(0x381):return this[_0x403874(0x32a)]();case _0x403874(0x2ef):return this[_0x403874(0x229)]();case'icefog':return this[_0x403874(0x2d7)]();case _0x403874(0x4c8):return this['weatherEffectsDiamondDust']();case _0x403874(0x58a):return this[_0x403874(0x54e)]();case'arcticbeam':return this[_0x403874(0x362)]();case _0x403874(0x41b):return this['weatherEffectsSleet']();case'glistening':return this[_0x403874(0x499)]();case'thunderbolt':case _0x403874(0x218):case'plasmabolt':case _0x403874(0x3b0):case _0x403874(0x373):return this[_0x403874(0x37f)]();case _0x403874(0x243):return this[_0x403874(0x38c)]();case _0x403874(0x25e):return this[_0x403874(0x1bc)]();case _0x403874(0x2b6):return this['weatherEffectsUltravioletBeams']();case _0x403874(0x3b6):case _0x403874(0x3ea):return this[_0x403874(0x3d5)]();case _0x403874(0x398):return this[_0x403874(0x178)]();case _0x403874(0x436):return this[_0x403874(0x2f0)]();case _0x403874(0x4e5):case _0x403874(0x3f0):return this['weatherEffectsMist']();case _0x403874(0x5b2):return this[_0x403874(0x3c6)]();case _0x403874(0x20e):return this[_0x403874(0x298)]();case'cloudburst':return this[_0x403874(0x5db)]();case _0x403874(0x5a0):return this[_0x403874(0x453)]();case _0x403874(0x413):return this[_0x403874(0x17f)]();case _0x403874(0x4fe):return this['weatherEffectsPollutionClouds']();case _0x403874(0x1c7):return this['weatherEffectsDustStorm']();case _0x403874(0x3fa):return this['weatherEffectsDustClouds']();case _0x403874(0x42a):return this['weatherEffectsSandClouds']();case _0x403874(0x40e):return this[_0x403874(0x327)]();case _0x403874(0x5c9):return this[_0x403874(0x333)]();case _0x403874(0x1a8):return this['weatherEffectsAcidRain']();case _0x403874(0x2fa):return this['weatherEffectsRadioactiveBeams']();case _0x403874(0x24d):return this[_0x403874(0x3e0)]();case _0x403874(0x41a):return this[_0x403874(0x33e)]();case _0x403874(0x4da):return this['weatherEffectsCherryBlossoms']();case'greenleaves':return this['weatherEffectsGreenLeaves']();case'dandelionseeds':return this[_0x403874(0x2a1)]();case _0x403874(0x55c):return this[_0x403874(0x52d)]();case'pollen':return this['weatherEffectsPollen']();case _0x403874(0x4c3):return this[_0x403874(0x279)]();case _0x403874(0x1ec):return this[_0x403874(0x3ef)]();case _0x403874(0x1e8):return this[_0x403874(0x264)]();case _0x403874(0x422):return this['weatherEffectsBalloons']();case _0x403874(0x4c4):return this[_0x403874(0x284)]();case'pastelbrume':return this[_0x403874(0x2da)]();case _0x403874(0x39e):return this[_0x403874(0x5b4)]();case _0x403874(0x238):return this['weatherEffectsRainbowOrbs']();case _0x403874(0x49c):return this[_0x403874(0x1cc)]();case _0x403874(0x2ff):return this['weatherEffectsConfetti']();case _0x403874(0x28e):return this[_0x403874(0x4b7)]();case _0x403874(0x21e):case _0x403874(0x489):return this[_0x403874(0x27a)]();case _0x403874(0x36c):return this[_0x403874(0x248)]();case _0x403874(0x216):return this[_0x403874(0x28d)]();case _0x403874(0x220):return this[_0x403874(0x328)]();case'sootfall':return this[_0x403874(0x42d)]();case _0x403874(0x287):return this['weatherEffectsSmokeFog']();case'darkorbs':return this[_0x403874(0x454)]();case _0x403874(0x203):return this[_0x403874(0x4f8)]();case _0x403874(0x1fa):return this[_0x403874(0x3fe)]();case _0x403874(0x4d3):return this[_0x403874(0x182)]();case _0x403874(0x1f7):return this[_0x403874(0x542)]();case _0x403874(0x201):return this[_0x403874(0x562)]();case _0x403874(0x316):return this[_0x403874(0x499)]();case _0x403874(0x36a):return this['weatherEffectsFireworksFlower']();case _0x403874(0x478):case _0x403874(0x1c6):case'slow_icons_2':case _0x403874(0x3e3):case _0x403874(0x512):case _0x403874(0x321):case _0x403874(0x1b1):case _0x403874(0x2ad):case'slow_icons_8':case _0x403874(0x5ee):case _0x403874(0x590):case _0x403874(0x1a4):case'medium_icons_2':case _0x403874(0x16d):case'medium_icons_4':case _0x403874(0x4c5):case _0x403874(0x39c):case _0x403874(0x1e7):case _0x403874(0x49f):case _0x403874(0x51f):case'medium_icons_0':case'fast_icons_1':case _0x403874(0x449):case'fast_icons_3':case _0x403874(0x35b):case _0x403874(0x4c6):case _0x403874(0x24f):case _0x403874(0x180):case _0x403874(0x462):case _0x403874(0x5d8):case'fast_icons_0':return this[_0x403874(0x5bc)]();default:return this['weatherEffectsSnow']();}},ImageManager[_0x502049(0x3f6)]=function(){const _0x5c27a5=_0x502049;return!this['_tempCanvas']&&('MxCTh'===_0x5c27a5(0x1df)?this[_0x5c27a5(0x418)]=document[_0x5c27a5(0x2a3)](_0x5c27a5(0x404)):(_0x3eef98['WeatherEffects'][_0x5c27a5(0x515)][_0x5c27a5(0x24b)](this,_0x3a5faf),this['setupWeatherEffectNotetags']())),this[_0x5c27a5(0x418)];},ImageManager[_0x502049(0x2d6)]=function(_0x3c15d3,_0x4c4ddf){const _0x5d8993=_0x502049,_0x1b3521=this[_0x5d8993(0x3f6)]();return _0x1b3521[_0x5d8993(0x313)]=_0x3c15d3,_0x1b3521[_0x5d8993(0x3e7)]=_0x4c4ddf,_0x1b3521['getContext']('2d');},ImageManager['weatherEffectsNone']=function(){const _0x5b08c8=_0x502049;if(this['_cached_WeatherEffects_None'])return this[_0x5b08c8(0x4d6)];const _0xc022c1=new Bitmap(0x1,0x1);_0xc022c1[_0x5b08c8(0x5e5)]=![];if(ImageManager[_0x5b08c8(0x277)])console[_0x5b08c8(0x31a)](_0x5b08c8(0x3ff));return this[_0x5b08c8(0x4d6)]=_0xc022c1,this[_0x5b08c8(0x4d6)];},ImageManager[_0x502049(0x4a0)]=function(){const _0x1b07ed=_0x502049;if(this[_0x1b07ed(0x32f)]&&this[_0x1b07ed(0x32f)][_0x1b07ed(0x19b)]>=ImageManager[_0x1b07ed(0x4e6)]){if('YAlww'!==_0x1b07ed(0x1bd)){const _0x4058d2=this[_0x1b07ed(0x32f)];return _0x4058d2[Math[_0x1b07ed(0x474)](Math['random']()*_0x4058d2[_0x1b07ed(0x19b)])];}else return _0x1ce054[_0x1b07ed(0x16e)](this[_0x1b07ed(0x3d3)],this['_lowerLayer']);}const _0x39a9f2=new Bitmap(0x1f4,0x1f4),_0x54e76f='rgba(255,255,255,0)',_0x102a9d=_0x1b07ed(0x48d),_0x11eac4=_0x39a9f2['width'],_0xa3d3ca=_0x39a9f2['height'],_0x5d9aa6=0x3c,_0x1c61dc=_0x5d9aa6/0x2,_0x5f4161=0x2;let _0x2ebfdf=0x10;while(_0x2ebfdf--){const _0x2ef5ad=Math[_0x1b07ed(0x592)](_0x11eac4-_0x5d9aa6)+_0x5d9aa6,_0x1804e1=Math[_0x1b07ed(0x592)](_0xa3d3ca-_0x5f4161)+_0x5f4161;_0x39a9f2['paintOpacity']=Math[_0x1b07ed(0x592)](0x40)+0xc0,_0x39a9f2['gradientFillRect'](_0x2ef5ad,_0x1804e1,_0x1c61dc,0x2,_0x54e76f,_0x102a9d),_0x39a9f2[_0x1b07ed(0x41f)](_0x2ef5ad+_0x1c61dc,_0x1804e1,_0x1c61dc,0x2,_0x102a9d);}_0x39a9f2[_0x1b07ed(0x5e5)]=![];if(ImageManager[_0x1b07ed(0x277)])console[_0x1b07ed(0x31a)](_0x1b07ed(0x365));return this[_0x1b07ed(0x32f)]=this['_cached_WeatherEffects_Rain']||[],this[_0x1b07ed(0x32f)][_0x1b07ed(0x4ac)](_0x39a9f2),_0x39a9f2;},ImageManager[_0x502049(0x1ce)]=function(){const _0x1a0988=_0x502049;if(this[_0x1a0988(0x51a)]&&this[_0x1a0988(0x51a)][_0x1a0988(0x19b)]>=ImageManager[_0x1a0988(0x4e6)]){const _0x24dfba=this[_0x1a0988(0x51a)];return _0x24dfba[Math[_0x1a0988(0x474)](Math[_0x1a0988(0x221)]()*_0x24dfba['length'])];}const _0x39d353=new Bitmap(0x1f4,0x1f4),_0x4ee2ea=_0x1a0988(0x52c),_0x51a96b=_0x1a0988(0x48d),_0x581393=_0x39d353['width'],_0x360bd2=_0x39d353[_0x1a0988(0x3e7)],_0x391609=0x64,_0xf5a1b7=_0x391609/0x2,_0x19fa28=0x2;let _0x36f2cc=0x20;while(_0x36f2cc--){if(_0x1a0988(0x1d1)!==_0x1a0988(0x1d1))_0x294e3b[_0x1a0988(0x3b3)](_0x24ece2,_0xb5777f),_0x538a5a[_0x1a0988(0x3bc)]=_0x1a0988(0x201),_0x304267[_0x1a0988(0x329)][_0x1a0988(0x417)](_0x468fd1);else{const _0x10909b=Math[_0x1a0988(0x592)](_0x581393-_0x391609)+_0x391609,_0x45d336=Math[_0x1a0988(0x592)](_0x360bd2-_0x19fa28)+_0x19fa28;_0x39d353[_0x1a0988(0x34f)]=Math[_0x1a0988(0x592)](0x40)+0xc0,_0x39d353[_0x1a0988(0x295)](_0x10909b,_0x45d336,Math['ceil'](_0xf5a1b7),_0x19fa28,_0x4ee2ea,_0x51a96b),_0x39d353[_0x1a0988(0x41f)](_0x10909b+Math[_0x1a0988(0x1fd)](_0xf5a1b7),_0x45d336,Math['floor'](_0xf5a1b7),_0x19fa28,_0x51a96b);}}_0x39d353[_0x1a0988(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x1a0988(0x1af));return this[_0x1a0988(0x51a)]=this[_0x1a0988(0x51a)]||[],this[_0x1a0988(0x51a)][_0x1a0988(0x4ac)](_0x39d353),_0x39d353;},ImageManager['weatherEffectsSnow']=function(){const _0x469839=_0x502049;if(this[_0x469839(0x4d2)]&&this['_cached_WeatherEffects_Snow']['length']>=ImageManager[_0x469839(0x4e6)]){const _0x4c5742=this['_cached_WeatherEffects_Snow'];return _0x4c5742[Math[_0x469839(0x474)](Math[_0x469839(0x221)]()*_0x4c5742['length'])];}const _0x55b99c=new Bitmap(0x1f4,0x1f4),_0x3121fd=_0x55b99c[_0x469839(0x313)],_0x484dc2=_0x55b99c['height'],_0x202f72=0x5;let _0x5e3eee=0x10;while(_0x5e3eee--){if(_0x469839(0x38d)!==_0x469839(0x197)){const _0x295df3=Math[_0x469839(0x592)](_0x3121fd-_0x202f72*0x2)+_0x202f72,_0x3f62bb=Math[_0x469839(0x592)](_0x484dc2-_0x202f72*0x2)+_0x202f72,_0x26da69=Math[_0x469839(0x592)](_0x202f72)+0x1;_0x55b99c['paintOpacity']=Math['randomInt'](0x40)+0xc0,_0x55b99c[_0x469839(0x432)](_0x295df3,_0x3f62bb,_0x26da69,_0x469839(0x2ca));}else{if(this[_0x469839(0x2ac)]&&this[_0x469839(0x2ac)][_0x469839(0x19b)]>=_0x40a766[_0x469839(0x4e6)]){const _0x337f35=this[_0x469839(0x2ac)];return _0x337f35[_0x5285bd[_0x469839(0x474)](_0x28b997['random']()*_0x337f35[_0x469839(0x19b)])];}const _0x35975b=new _0x10b73a(0x1f4,0x1f4),_0x37b1a7=_0x35975b['width'],_0x70d6b8=_0x35975b[_0x469839(0x3e7)],_0x3f5159=0x8;let _0x6535b=0x20;while(_0x6535b--){const _0x57f771=_0x3bda1e[_0x469839(0x592)](_0x37b1a7-_0x3f5159*0x2)+_0x3f5159,_0x4d4a1c=_0x41f910[_0x469839(0x592)](_0x70d6b8-_0x3f5159*0x2)+_0x3f5159,_0x34e70c=_0x183724[_0x469839(0x592)](_0x3f5159)+0x1;_0x35975b['paintOpacity']=_0x20938d[_0x469839(0x592)](0x40)+0xc0,_0x35975b['drawCircle'](_0x57f771,_0x4d4a1c,_0x34e70c,'white');}_0x35975b[_0x469839(0x5e5)]=![];if(_0x35912e[_0x469839(0x277)])_0x2dc3ad[_0x469839(0x31a)]('blizzard');return this[_0x469839(0x2ac)]=this[_0x469839(0x2ac)]||[],this[_0x469839(0x2ac)][_0x469839(0x4ac)](_0x35975b),_0x35975b;}}_0x55b99c[_0x469839(0x5e5)]=![];if(ImageManager[_0x469839(0x277)])console[_0x469839(0x31a)](_0x469839(0x45b));return this['_cached_WeatherEffects_Snow']=this[_0x469839(0x4d2)]||[],this[_0x469839(0x4d2)][_0x469839(0x4ac)](_0x55b99c),_0x55b99c;},ImageManager[_0x502049(0x3c2)]=function(){const _0x27844a=_0x502049;if(this[_0x27844a(0x2ac)]&&this[_0x27844a(0x2ac)]['length']>=ImageManager[_0x27844a(0x4e6)]){if(_0x27844a(0x5c4)!==_0x27844a(0x5c4)){if(this['_cached_WeatherEffects_CloudBurst']&&this['_cached_WeatherEffects_CloudBurst'][_0x27844a(0x19b)]>=_0x12cf24[_0x27844a(0x4e6)]){const _0x3cffb1=this[_0x27844a(0x5b1)];return _0x3cffb1[_0x28a370['floor'](_0x662984['random']()*_0x3cffb1[_0x27844a(0x19b)])];}const _0x1e2d8a=new _0x5de4fd(0x1f4,0x1f4);let _0x3ec5f7=_0x245469[_0x27844a(0x40b)]([_0xbb52b0[_0x27844a(0x592)](0x20)+0x10,0x18,_0xb20417[_0x27844a(0x592)](0x20)+0x10]),_0x1f631b=_0x169ece[_0x27844a(0x40b)]([_0x3b4efe['randomInt'](0x30)+0x20,0x30,_0x1ae50b[_0x27844a(0x592)](0x30)+0x20]),_0x1ebfb0=_0x51cc1c[_0x27844a(0x40b)]([_0x4dde59[_0x27844a(0x592)](0x40)+0x30,0x60,_0x328c84[_0x27844a(0x592)](0x40)+0x30]);_0x1e2d8a['drawCloud'](0xfa,0x15e,0x4b,_0x3ec5f7,0x10,0x14),_0x1e2d8a[_0x27844a(0x16a)](0xfa,0xfa,0x64,_0x1ebfb0,0x40,0x19),_0x1e2d8a[_0x27844a(0x16a)](0xfa,0xfa,0x3c,_0x1f631b,0x10,0x14);const _0xdf6c2e=_0x27844a(0x52c),_0x406777='rgba(255,255,255,1)',_0x1af26d=_0x1e2d8a[_0x27844a(0x313)],_0x3fe6d8=_0x1e2d8a[_0x27844a(0x3e7)],_0x199163=0x64,_0x50df50=_0x199163/0x2,_0x1ed676=0x2;let _0x8b13fc=0x20;while(_0x8b13fc--){const _0x4086c2=_0x5a31f6[_0x27844a(0x592)](_0x1af26d-_0x199163)+_0x199163,_0x48d2fe=_0x324db7[_0x27844a(0x592)](_0x3fe6d8-_0x1ed676)+_0x1ed676;_0x1e2d8a[_0x27844a(0x34f)]=_0x2850ba[_0x27844a(0x592)](0x40)+0xc0,_0x1e2d8a[_0x27844a(0x295)](_0x4086c2,_0x48d2fe,_0x24c759[_0x27844a(0x1fd)](_0x50df50),_0x1ed676,_0xdf6c2e,_0x406777),_0x1e2d8a[_0x27844a(0x41f)](_0x4086c2+_0x188838[_0x27844a(0x1fd)](_0x50df50),_0x48d2fe,_0x216e30['floor'](_0x50df50),_0x1ed676,_0x406777);}_0x1e2d8a[_0x27844a(0x5e5)]=![];if(_0x5b5705[_0x27844a(0x277)])_0x425c8a[_0x27844a(0x31a)](_0x27844a(0x47f));return this[_0x27844a(0x5b1)]=this[_0x27844a(0x5b1)]||[],this[_0x27844a(0x5b1)][_0x27844a(0x4ac)](_0x1e2d8a),_0x1e2d8a;}else{const _0x4ba8ec=this[_0x27844a(0x2ac)];return _0x4ba8ec[Math[_0x27844a(0x474)](Math['random']()*_0x4ba8ec[_0x27844a(0x19b)])];}}const _0x408ff4=new Bitmap(0x1f4,0x1f4),_0xaf13eb=_0x408ff4[_0x27844a(0x313)],_0x4dffa0=_0x408ff4[_0x27844a(0x3e7)],_0x33a7fe=0x8;let _0x1e1256=0x20;while(_0x1e1256--){const _0x45e427=Math[_0x27844a(0x592)](_0xaf13eb-_0x33a7fe*0x2)+_0x33a7fe,_0x5dd0f7=Math[_0x27844a(0x592)](_0x4dffa0-_0x33a7fe*0x2)+_0x33a7fe,_0xbb7e9=Math[_0x27844a(0x592)](_0x33a7fe)+0x1;_0x408ff4[_0x27844a(0x34f)]=Math[_0x27844a(0x592)](0x40)+0xc0,_0x408ff4[_0x27844a(0x432)](_0x45e427,_0x5dd0f7,_0xbb7e9,_0x27844a(0x2ca));}_0x408ff4[_0x27844a(0x5e5)]=![];if(ImageManager[_0x27844a(0x277)])console[_0x27844a(0x31a)](_0x27844a(0x58b));return this[_0x27844a(0x2ac)]=this[_0x27844a(0x2ac)]||[],this[_0x27844a(0x2ac)][_0x27844a(0x4ac)](_0x408ff4),_0x408ff4;},ImageManager[_0x502049(0x178)]=function(){const _0x30d57a=_0x502049;if(this[_0x30d57a(0x42f)]&&this[_0x30d57a(0x42f)]['length']>=ImageManager[_0x30d57a(0x4e6)]){const _0xd42f88=this[_0x30d57a(0x42f)];return _0xd42f88[Math[_0x30d57a(0x474)](Math[_0x30d57a(0x221)]()*_0xd42f88['length'])];}const _0x167c40=new Bitmap(0x1f4,0x1f4),_0x32406f=_0x167c40[_0x30d57a(0x313)],_0x56e4a7=_0x167c40['height'],_0x3c9f87=0xc;let _0x204768=0x10;while(_0x204768--){const _0xc01215=Math[_0x30d57a(0x592)](_0x32406f-_0x3c9f87*0x2)+_0x3c9f87,_0x51494f=Math[_0x30d57a(0x592)](_0x56e4a7-_0x3c9f87*0x2)+_0x3c9f87,_0x533325=Math[_0x30d57a(0x592)](_0x3c9f87/0x2)+_0x3c9f87/0x2;_0x167c40[_0x30d57a(0x34f)]=Math[_0x30d57a(0x592)](0x40)+0xc0,_0x167c40[_0x30d57a(0x432)](_0xc01215,_0x51494f,_0x533325,_0x30d57a(0x588)),_0x167c40['clearCircle'](_0xc01215,_0x51494f,_0x533325-0x2),_0x167c40[_0x30d57a(0x432)](_0xc01215+_0x533325/0x3,_0x51494f-_0x533325/0x3,_0x533325/0x3,_0x30d57a(0x2ca));}_0x167c40[_0x30d57a(0x5e5)]=![];if(ImageManager[_0x30d57a(0x277)])console[_0x30d57a(0x31a)](_0x30d57a(0x398));return this[_0x30d57a(0x42f)]=this[_0x30d57a(0x42f)]||[],this[_0x30d57a(0x42f)]['push'](_0x167c40),_0x167c40;},ImageManager[_0x502049(0x284)]=function(){const _0x20ccf0=_0x502049;if(this[_0x20ccf0(0x17a)]&&ColorManager[_0x20ccf0(0x4e9)][_0x20ccf0(0x19b)]<=0x0){const _0x149509=this[_0x20ccf0(0x17a)];return _0x149509[Math['floor'](Math['random']()*_0x149509[_0x20ccf0(0x19b)])];}const _0x1e7f2=new Bitmap(0x18,0x18),_0x43fcf7=ColorManager['WEATHER_STAR_COLORS'][_0x20ccf0(0x442)]();_0x1e7f2[_0x20ccf0(0x219)](0xc,0xc,_0x43fcf7,_0x43fcf7,0x5,0xc,0x6),_0x1e7f2[_0x20ccf0(0x5e5)]=![];if(ImageManager[_0x20ccf0(0x277)])console['log'](_0x20ccf0(0x4c4));return this[_0x20ccf0(0x17a)]=this['_cached_WeatherEffects_Stars']||[],this[_0x20ccf0(0x17a)]['push'](_0x1e7f2),_0x1e7f2;},ImageManager[_0x502049(0x32a)]=function(){const _0x1d9217=_0x502049;if(this[_0x1d9217(0x447)]&&this[_0x1d9217(0x447)][_0x1d9217(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x262438=this[_0x1d9217(0x447)];return _0x262438[Math['floor'](Math[_0x1d9217(0x221)]()*_0x262438[_0x1d9217(0x19b)])];}const _0x47cd1c=new Bitmap(0x64,0x64);_0x47cd1c['drawSnowflake'](),_0x47cd1c[_0x1d9217(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x1d9217(0x31a)](_0x1d9217(0x381));return this[_0x1d9217(0x447)]=this[_0x1d9217(0x447)]||[],this[_0x1d9217(0x447)][_0x1d9217(0x4ac)](_0x47cd1c),_0x47cd1c;},ImageManager[_0x502049(0x17f)]=function(){const _0x13747b=_0x502049;if(this[_0x13747b(0x531)]&&this[_0x13747b(0x531)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x13747b(0x266)==='FxMDI')_0x251b70[_0x13747b(0x55f)]--,_0x34e4a5[_0x13747b(0x55f)]===0x0&&_0x253b44['powerTarget']===0x0&&(_0x408697[_0x13747b(0x3bc)]=_0x13747b(0x3ff));else{const _0x234823=this[_0x13747b(0x531)];return _0x234823[Math['floor'](Math[_0x13747b(0x221)]()*_0x234823[_0x13747b(0x19b)])];}}const _0x5ab1ca=ColorManager['WEATHER_EARTH_COLORS']['clone'](),_0x5295aa=1.5,_0x76e63a=ColorManager[_0x13747b(0x1b5)](_0x5ab1ca[Math[_0x13747b(0x474)](Math['random']()*_0x5ab1ca[_0x13747b(0x19b)])],_0x5295aa),_0x159f6f=ColorManager['adjustHexColor'](_0x5ab1ca[Math[_0x13747b(0x474)](Math[_0x13747b(0x221)]()*_0x5ab1ca[_0x13747b(0x19b)])],_0x5295aa),_0x1d874f=ColorManager[_0x13747b(0x1b5)](_0x5ab1ca[Math[_0x13747b(0x474)](Math[_0x13747b(0x221)]()*_0x5ab1ca[_0x13747b(0x19b)])],_0x5295aa),_0x4953ce=new Bitmap(0x1f4,0x1f4);_0x4953ce['drawCloud'](0xfa,0x15e,0x4b,_0x76e63a,0x4,0x14),_0x4953ce[_0x13747b(0x16a)](0xfa,0xfa,0x64,_0x1d874f,0x8,0x19),_0x4953ce[_0x13747b(0x16a)](0xfa,0xfa,0x3c,_0x159f6f,0x4,0x14);const _0x5e5de6=_0x4953ce[_0x13747b(0x313)],_0x241855=_0x4953ce['height'],_0x33961c=0x2;let _0x58b966=0x40;while(_0x58b966--){const _0x4beeb1=Math[_0x13747b(0x592)](_0x5e5de6-_0x33961c*0x2)+_0x33961c,_0x4cd904=Math[_0x13747b(0x592)](_0x241855-_0x33961c*0x2)+_0x33961c;let _0x6d5445=_0x5ab1ca[Math[_0x13747b(0x474)](Math[_0x13747b(0x221)]()*_0x5ab1ca[_0x13747b(0x19b)])];_0x6d5445=ColorManager['adjustHexColor'](_0x6d5445,_0x5295aa);const _0xb1faa9=Math[_0x13747b(0x592)](_0x33961c)+0x1;_0x4953ce[_0x13747b(0x34f)]=Math[_0x13747b(0x592)](0x40)+0xa0,_0x4953ce[_0x13747b(0x432)](_0x4beeb1,_0x4cd904,_0xb1faa9,_0x6d5445);}_0x4953ce[_0x13747b(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x13747b(0x31a)](_0x13747b(0x413));return this[_0x13747b(0x531)]=this[_0x13747b(0x531)]||[],this[_0x13747b(0x531)][_0x13747b(0x4ac)](_0x4953ce),_0x4953ce;},ImageManager[_0x502049(0x1aa)]=function(){const _0x2d6063=_0x502049;if(this[_0x2d6063(0x375)]&&this[_0x2d6063(0x375)][_0x2d6063(0x19b)]>=ImageManager[_0x2d6063(0x4e6)]){const _0xd8570d=this[_0x2d6063(0x375)];return _0xd8570d[Math[_0x2d6063(0x474)](Math[_0x2d6063(0x221)]()*_0xd8570d['length'])];}const _0x241452=new Bitmap(0x1f4,0x1f4),_0x57f827=_0x241452[_0x2d6063(0x313)],_0x5d40d9=_0x241452[_0x2d6063(0x3e7)],_0xb151f8=0x10;let _0x4f711d=0x10;while(_0x4f711d--){if(_0x2d6063(0x3b5)!==_0x2d6063(0x23a)){const _0x2f0004=Math[_0x2d6063(0x592)](_0x57f827-_0xb151f8*0x2)+_0xb151f8,_0x4d816=Math['randomInt'](_0x5d40d9-_0xb151f8*0x2)+_0xb151f8,_0x2572fb=Math[_0x2d6063(0x592)](_0xb151f8/0x2)+0x2,_0x4a481f=ColorManager[_0x2d6063(0x40b)]([0xff,Math[_0x2d6063(0x592)](0x46),0x0]);_0x241452[_0x2d6063(0x34f)]=Math[_0x2d6063(0x592)](0x40),_0x241452[_0x2d6063(0x432)](_0x2f0004,_0x4d816,_0x2572fb,_0x4a481f),_0x241452[_0x2d6063(0x34f)]=Math[_0x2d6063(0x592)](0x40)+0x40,_0x241452[_0x2d6063(0x432)](_0x2f0004,_0x4d816,_0x2572fb/0x2,_0x4a481f),_0x241452['paintOpacity']=Math[_0x2d6063(0x592)](0x40)+0xc0;const _0x21bc97=ColorManager[_0x2d6063(0x40b)]([0xff,Math['randomInt'](0x46)+0xb9,0x0]);_0x241452[_0x2d6063(0x432)](_0x2f0004,_0x4d816,_0x2572fb/0x4,_0x21bc97),_0x241452['drawCircle'](_0x2f0004,_0x4d816,_0x2572fb/0x8,_0x2d6063(0x390));}else this[_0x2d6063(0x1bf)]();}_0x241452[_0x2d6063(0x5e5)]=![];if(ImageManager[_0x2d6063(0x277)])console[_0x2d6063(0x31a)](_0x2d6063(0x59b));return this['_cached_WeatherEffects_Embers']=this['_cached_WeatherEffects_Embers']||[],this[_0x2d6063(0x375)]['push'](_0x241452),_0x241452;},ImageManager['weatherEffectsAshDebris']=function(){const _0x3da4cc=_0x502049;if(this[_0x3da4cc(0x5b8)]&&this[_0x3da4cc(0x5b8)]['length']>=ImageManager[_0x3da4cc(0x4e6)]){if(_0x3da4cc(0x2ee)===_0x3da4cc(0x19a))_0x49604f[_0x3da4cc(0x3b3)](_0x3964be,_0x2bd5be),_0x1d02c2['type']=_0x3da4cc(0x2ad),_0x4e0de[_0x3da4cc(0x329)]['applyPluginCmdSettings'](_0x42b74e);else{const _0x1fd9b0=this[_0x3da4cc(0x5b8)];return _0x1fd9b0[Math[_0x3da4cc(0x474)](Math[_0x3da4cc(0x221)]()*_0x1fd9b0[_0x3da4cc(0x19b)])];}}const _0x35fb23=new Bitmap(0x12,0x12),_0x174685=_0x35fb23[_0x3da4cc(0x313)],_0x4d5a51=_0x35fb23[_0x3da4cc(0x3e7)],_0x2e0a96=_0x174685/0x2-0x2,_0x52a37a=_0x4d5a51/0x2-0x2,_0x317d71=[];_0x317d71[_0x3da4cc(0x4ac)](Math['randomInt'](_0x2e0a96)+0x2,Math[_0x3da4cc(0x592)](_0x52a37a)+0x2),_0x317d71[_0x3da4cc(0x4ac)](_0x174685-Math[_0x3da4cc(0x592)](_0x2e0a96)-0x2,Math[_0x3da4cc(0x592)](_0x52a37a)+0x2),_0x317d71[_0x3da4cc(0x4ac)](_0x174685-Math['randomInt'](_0x2e0a96)-0x2,_0x4d5a51-Math[_0x3da4cc(0x592)](_0x52a37a)-0x2),_0x317d71['push'](Math[_0x3da4cc(0x592)](_0x2e0a96)+0x2,_0x4d5a51-Math['randomInt'](_0x52a37a)-0x2);const _0x442b2d=ColorManager[_0x3da4cc(0x5e9)]['clone'](),_0x4d0def=_0x442b2d[Math[_0x3da4cc(0x474)](Math[_0x3da4cc(0x221)]()*_0x442b2d[_0x3da4cc(0x19b)])];_0x35fb23[_0x3da4cc(0x4cc)](_0x317d71,_0x4d0def,'black',0x2,0xff,![]),_0x35fb23[_0x3da4cc(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3da4cc(0x31a)](_0x3da4cc(0x216));return this[_0x3da4cc(0x5b8)]=this[_0x3da4cc(0x5b8)]||[],this[_0x3da4cc(0x5b8)][_0x3da4cc(0x4ac)](_0x35fb23),_0x35fb23;},ImageManager[_0x502049(0x53b)]=function(){const _0xdb4fd5=_0x502049;if(this['_cached_WeatherEffects_Firestorm']&&this['_cached_WeatherEffects_Firestorm']['length']>=ImageManager[_0xdb4fd5(0x4e6)]){const _0x1937ff=this[_0xdb4fd5(0x5e2)];return _0x1937ff[Math['floor'](Math[_0xdb4fd5(0x221)]()*_0x1937ff[_0xdb4fd5(0x19b)])];}const _0x46da61=new Bitmap(0x1f4,0x1f4),_0x1f06c1=_0x46da61[_0xdb4fd5(0x313)],_0x70627c=_0x46da61[_0xdb4fd5(0x3e7)],_0x5aec68=0xc,_0x33aa0a=0x64;let _0x5bfb42=0x4;while(_0x5bfb42--){if(_0xdb4fd5(0x372)!==_0xdb4fd5(0x372))_0x56af30[_0xdb4fd5(0x3b3)](_0x6d25d5,_0x25dba8),_0x5559fe[_0xdb4fd5(0x3bc)]=_0xdb4fd5(0x411),_0x462622['WeatherEffects'][_0xdb4fd5(0x417)](_0x31d592);else{const _0x85c30d=Math[_0xdb4fd5(0x592)](_0x1f06c1-_0x33aa0a*0x2)+_0x33aa0a*0x1,_0x2bdf6b=Math['randomInt'](_0x70627c-_0x5aec68*0x8)+_0x5aec68*0x4,_0x77cd14=Math[_0xdb4fd5(0x592)](_0x5aec68*0x2/0x5)+_0x5aec68*0x2/0x5,_0x5d990b=Math[_0xdb4fd5(0x592)](_0x33aa0a*0x1/0x3)+_0x33aa0a*0x2/0x3;_0x46da61[_0xdb4fd5(0x1a9)](_0x85c30d,_0x2bdf6b,_0x77cd14,_0x5d990b);}}_0x46da61['_customModified']=![];if(ImageManager[_0xdb4fd5(0x277)])console[_0xdb4fd5(0x31a)](_0xdb4fd5(0x2dd));return this[_0xdb4fd5(0x5e2)]=this['_cached_WeatherEffects_Firestorm']||[],this['_cached_WeatherEffects_Firestorm'][_0xdb4fd5(0x4ac)](_0x46da61),_0x46da61;},ImageManager[_0x502049(0x570)]=function(){const _0x2f9c00=_0x502049;if(this[_0x2f9c00(0x559)]&&this[_0x2f9c00(0x559)][_0x2f9c00(0x19b)]>=ImageManager[_0x2f9c00(0x4e6)]){const _0x146295=this[_0x2f9c00(0x559)];return _0x146295[Math[_0x2f9c00(0x474)](Math[_0x2f9c00(0x221)]()*_0x146295['length'])];}const _0x46ebf3=ColorManager[_0x2f9c00(0x37e)][_0x2f9c00(0x516)](),_0x4014c2=_0x46ebf3[Math[_0x2f9c00(0x474)](Math[_0x2f9c00(0x221)]()*_0x46ebf3[_0x2f9c00(0x19b)])];let _0x11f679=Math[_0x2f9c00(0x592)](0x10)+0x10;if(_0x11f679%0x2!==0x0)_0x11f679+=0x1;const _0x2b882e=new Bitmap(_0x11f679,_0x11f679),_0x4f5cb3=Math[_0x2f9c00(0x474)](_0x11f679/0x2);_0x2b882e[_0x2f9c00(0x3d6)](_0x4f5cb3,_0x4f5cb3,_0x4f5cb3,0x168,_0x4014c2,0x0,0x1,0x0),_0x2b882e[_0x2f9c00(0x41f)](_0x4f5cb3-0x1,_0x4f5cb3-0x1,0x2,0x2,_0x4014c2),_0x2b882e[_0x2f9c00(0x5e5)]=![];if(ImageManager[_0x2f9c00(0x277)])console[_0x2f9c00(0x31a)]('fireflies');return this[_0x2f9c00(0x559)]=this[_0x2f9c00(0x559)]||[],this[_0x2f9c00(0x559)]['push'](_0x2b882e),_0x2b882e;},ImageManager[_0x502049(0x37f)]=function(){const _0x3d0518=_0x502049;if(this[_0x3d0518(0x257)]&&this[_0x3d0518(0x257)][_0x3d0518(0x19b)]>=ImageManager[_0x3d0518(0x4e6)]*0x3){const _0x800985=this[_0x3d0518(0x257)];return _0x800985[Math[_0x3d0518(0x474)](Math[_0x3d0518(0x221)]()*_0x800985[_0x3d0518(0x19b)])];}const _0x3a7285=Math[_0x3d0518(0x574)]($dataSystem[_0x3d0518(0x33a)][_0x3d0518(0x5c3)],$dataSystem[_0x3d0518(0x33a)][_0x3d0518(0x416)])||0x1,_0x424fb0=new Bitmap(_0x3a7285,_0x3a7285);_0x424fb0[_0x3d0518(0x1b3)](),_0x424fb0[_0x3d0518(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3d0518(0x31a)]('thunderbolt');return this[_0x3d0518(0x257)]=this[_0x3d0518(0x257)]||[],this['_cached_WeatherEffects_Thunderbolt'][_0x3d0518(0x4ac)](_0x424fb0),_0x424fb0;},ImageManager[_0x502049(0x42d)]=function(){const _0x52e3f3=_0x502049;if(this[_0x52e3f3(0x544)]&&this[_0x52e3f3(0x544)][_0x52e3f3(0x19b)]>=ImageManager[_0x52e3f3(0x4e6)]){const _0xf03b77=this[_0x52e3f3(0x544)];return _0xf03b77[Math[_0x52e3f3(0x474)](Math[_0x52e3f3(0x221)]()*_0xf03b77[_0x52e3f3(0x19b)])];}const _0x3259fe=ColorManager[_0x52e3f3(0x5e9)]['clone'](),_0x50555c=new Bitmap(0x1f4,0x1f4),_0x10dcb8=_0x50555c[_0x52e3f3(0x313)],_0xef6040=_0x50555c[_0x52e3f3(0x3e7)],_0xb69172=0x5;let _0xe47cf5=0x8;while(_0xe47cf5--){const _0x412a6d=Math['randomInt'](_0x10dcb8-_0xb69172*0x2)+_0xb69172,_0x204aa4=Math[_0x52e3f3(0x592)](_0xef6040-_0xb69172*0x2)+_0xb69172,_0x121c00=Math[_0x52e3f3(0x592)](_0xb69172)+0x1,_0xa5bb68=_0x3259fe[Math['floor'](Math['random']()*_0x3259fe[_0x52e3f3(0x19b)])];_0x50555c[_0x52e3f3(0x34f)]=Math[_0x52e3f3(0x592)](0x40)+0xc0,_0x50555c[_0x52e3f3(0x432)](_0x412a6d,_0x204aa4,_0x121c00,_0xa5bb68);}_0x50555c[_0x52e3f3(0x5e5)]=![];if(ImageManager[_0x52e3f3(0x277)])console[_0x52e3f3(0x31a)](_0x52e3f3(0x311));return this[_0x52e3f3(0x544)]=this[_0x52e3f3(0x544)]||[],this[_0x52e3f3(0x544)]['push'](_0x50555c),_0x50555c;},ImageManager[_0x502049(0x328)]=function(){const _0x390b2b=_0x502049;if(this['_cached_WeatherEffects_Ashfall']&&this[_0x390b2b(0x46b)][_0x390b2b(0x19b)]>=ImageManager[_0x390b2b(0x4e6)]){const _0x59b571=this[_0x390b2b(0x46b)];return _0x59b571[Math[_0x390b2b(0x474)](Math[_0x390b2b(0x221)]()*_0x59b571[_0x390b2b(0x19b)])];}const _0x1f7785=new Bitmap(0x18,0x18),_0x1103f9=_0x1f7785['width'],_0x57dfbe=_0x1f7785[_0x390b2b(0x3e7)],_0x318857=_0x1103f9/0x2-0x2,_0x4f5868=_0x57dfbe/0x2-0x2,_0x1b7cc8=[];_0x1b7cc8[_0x390b2b(0x4ac)](Math['randomInt'](_0x318857)+0x2,Math[_0x390b2b(0x592)](_0x4f5868)+0x2),_0x1b7cc8[_0x390b2b(0x4ac)](_0x1103f9-Math[_0x390b2b(0x592)](_0x318857)-0x2,Math[_0x390b2b(0x592)](_0x4f5868)+0x2),_0x1b7cc8[_0x390b2b(0x4ac)](_0x1103f9-Math[_0x390b2b(0x592)](_0x318857)-0x2,_0x57dfbe-Math[_0x390b2b(0x592)](_0x4f5868)-0x2),_0x1b7cc8[_0x390b2b(0x4ac)](Math['randomInt'](_0x318857)+0x2,_0x57dfbe-Math[_0x390b2b(0x592)](_0x4f5868)-0x2);const _0x3a8261=ColorManager[_0x390b2b(0x5e9)][_0x390b2b(0x516)](),_0x2d300a=_0x3a8261[Math[_0x390b2b(0x474)](Math['random']()*_0x3a8261[_0x390b2b(0x19b)])];_0x1f7785['drawMultiPointPolygon'](_0x1b7cc8,_0x2d300a,'black',0x2,0xff,![]),_0x1f7785[_0x390b2b(0x5e5)]=![];if(ImageManager[_0x390b2b(0x277)])console[_0x390b2b(0x31a)]('ashfall');return this[_0x390b2b(0x46b)]=this[_0x390b2b(0x46b)]||[],this['_cached_WeatherEffects_Ashfall'][_0x390b2b(0x4ac)](_0x1f7785),_0x1f7785;},ImageManager[_0x502049(0x40f)]=function(){const _0x579a03=_0x502049;if(this['_cached_WeatherEffects_FlameWall']&&this[_0x579a03(0x466)][_0x579a03(0x19b)]>=ImageManager[_0x579a03(0x4e6)]){const _0x2031da=this[_0x579a03(0x466)];return _0x2031da[Math[_0x579a03(0x474)](Math[_0x579a03(0x221)]()*_0x2031da[_0x579a03(0x19b)])];}const _0x2c987a=new Bitmap(0x258,0xc8),_0x30946d=_0x2c987a[_0x579a03(0x313)],_0x256e29=_0x2c987a[_0x579a03(0x3e7)],_0x338103=0x40;let _0xd95a4b=0x40;while(_0xd95a4b--){const _0x50c47b=Math[_0x579a03(0x592)](_0x30946d-_0x338103*0x2)+_0x338103,_0x1ec519=Math['randomInt'](_0x256e29-_0x338103*0x2)+_0x338103,_0xd82089=Math[_0x579a03(0x592)](_0x338103/0x2)+0x2,_0x1d9fec=ColorManager[_0x579a03(0x40b)]([0xff,Math[_0x579a03(0x592)](0x46),0x0]);_0x2c987a['paintOpacity']=Math[_0x579a03(0x592)](0x40),_0x2c987a[_0x579a03(0x432)](_0x50c47b,_0x1ec519,_0xd82089,_0x1d9fec),_0x2c987a[_0x579a03(0x34f)]=Math[_0x579a03(0x592)](0x40)+0x40,_0x2c987a[_0x579a03(0x432)](_0x50c47b,_0x1ec519,_0xd82089/0x2,_0x1d9fec),_0x2c987a['paintOpacity']=Math['randomInt'](0x40)+0xc0;const _0x1dfe1d=ColorManager[_0x579a03(0x40b)]([0xff,Math[_0x579a03(0x592)](0x46)+0xb9,0x0]);_0x2c987a[_0x579a03(0x432)](_0x50c47b,_0x1ec519,_0xd82089/0x4,_0x1dfe1d),_0x2c987a['drawCircle'](_0x50c47b,_0x1ec519,_0xd82089/0x8,_0x579a03(0x390)),_0x2c987a[_0x579a03(0x432)](_0x50c47b,_0x1ec519,_0xd82089/0xa,_0x579a03(0x2ca));}_0x2c987a['_customModified']=![];if(ImageManager[_0x579a03(0x277)])console[_0x579a03(0x31a)](_0x579a03(0x25b));return this['_cached_WeatherEffects_FlameWall']=this[_0x579a03(0x466)]||[],this['_cached_WeatherEffects_FlameWall']['push'](_0x2c987a),_0x2c987a;},ImageManager[_0x502049(0x33e)]=function(){const _0x782596=_0x502049;if(this['_cached_WeatherEffects_AutumnLeaves']&&ColorManager['WEATHER_AUTUMN_LEAVES_COLORS']['length']<=0x0){const _0x4f7d3f=this[_0x782596(0x34d)];return _0x4f7d3f[Math[_0x782596(0x474)](Math[_0x782596(0x221)]()*_0x4f7d3f['length'])];}const _0x474db8=ColorManager['WEATHER_AUTUMN_LEAVES_COLORS'][_0x782596(0x442)]();let _0x12323a=ColorManager['hexToArray'](_0x474db8);const _0x28322d=[];while(_0x28322d['length']<0x6){if(_0x782596(0x37c)!==_0x782596(0x2b9)){const _0x52acf2=ColorManager[_0x782596(0x40b)](_0x12323a);_0x28322d[_0x782596(0x4ac)](_0x52acf2),_0x12323a=_0x12323a[_0x782596(0x3b4)](_0xd7a530=>Math['ceil'](_0xd7a530*0.85)[_0x782596(0x4df)](0x0,0xff));}else{const _0x5b302d=this[_0x782596(0x5b3)];return _0x5b302d[_0xb24804[_0x782596(0x474)](_0x3c9982[_0x782596(0x221)]()*_0x5b302d['length'])];}}_0x28322d['reverse'](),_0x28322d[_0x782596(0x4ac)](_0x28322d['shift']()),_0x28322d[_0x782596(0x4ac)](_0x28322d[_0x782596(0x5d3)]());const _0x2eb76c=new Bitmap(0x64,0x60);_0x2eb76c['drawMapleLeaf'](_0x28322d),_0x2eb76c[_0x782596(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x782596(0x31a)](_0x782596(0x41a));return this[_0x782596(0x34d)]=this[_0x782596(0x34d)]||[],this['_cached_WeatherEffects_AutumnLeaves']['push'](_0x2eb76c),_0x2eb76c;},ImageManager['weatherEffectsCherryBlossoms']=function(){const _0x2d2ac0=_0x502049;if(this[_0x2d2ac0(0x342)]&&this[_0x2d2ac0(0x342)]['length']>=ImageManager[_0x2d2ac0(0x4e6)]){const _0x1d2741=this['_cached_WeatherEffects_CherryBlossoms'];return _0x1d2741[Math[_0x2d2ac0(0x474)](Math[_0x2d2ac0(0x221)]()*_0x1d2741[_0x2d2ac0(0x19b)])];}const _0x19ce5d=ColorManager[_0x2d2ac0(0x380)],_0x5420e5=ColorManager['WEATHER_SAKURA2_COLORS'],_0x142ff6=ColorManager[_0x2d2ac0(0x2a5)],_0x54c5c2=_0x19ce5d[Math[_0x2d2ac0(0x474)](Math[_0x2d2ac0(0x221)]()*_0x19ce5d[_0x2d2ac0(0x19b)])],_0x54e78e=_0x5420e5[Math[_0x2d2ac0(0x474)](Math[_0x2d2ac0(0x221)]()*_0x5420e5[_0x2d2ac0(0x19b)])],_0x13f7ff=_0x142ff6[Math[_0x2d2ac0(0x474)](Math[_0x2d2ac0(0x221)]()*_0x142ff6[_0x2d2ac0(0x19b)])],_0x4619f4=new Bitmap(0x34,0x23);_0x4619f4[_0x2d2ac0(0x340)](_0x54c5c2,_0x54e78e,_0x13f7ff),_0x4619f4[_0x2d2ac0(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2d2ac0(0x31a)](_0x2d2ac0(0x4da));return this['_cached_WeatherEffects_CherryBlossoms']=this[_0x2d2ac0(0x342)]||[],this['_cached_WeatherEffects_CherryBlossoms'][_0x2d2ac0(0x4ac)](_0x4619f4),_0x4619f4;},ImageManager[_0x502049(0x235)]=function(){const _0x1836a4=_0x502049;if(this[_0x1836a4(0x3d1)]&&ColorManager['WEATHER_GREEN_LEAVES_COLORS'][_0x1836a4(0x19b)]<=0x0){if(_0x1836a4(0x3ee)!==_0x1836a4(0x1f2)){const _0x22605b=this[_0x1836a4(0x3d1)];return _0x22605b[Math['floor'](Math[_0x1836a4(0x221)]()*_0x22605b[_0x1836a4(0x19b)])];}else{if(this[_0x1836a4(0x51a)]&&this[_0x1836a4(0x51a)][_0x1836a4(0x19b)]>=_0x57db45['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x5b6d37=this[_0x1836a4(0x51a)];return _0x5b6d37[_0x59de4e[_0x1836a4(0x474)](_0x57fee7[_0x1836a4(0x221)]()*_0x5b6d37[_0x1836a4(0x19b)])];}const _0x4776b1=new _0x4edc52(0x1f4,0x1f4),_0x88bab9=_0x1836a4(0x52c),_0x478fdd='rgba(255,255,255,1)',_0x57c463=_0x4776b1[_0x1836a4(0x313)],_0x343f60=_0x4776b1['height'],_0xc1d744=0x64,_0x5593f7=_0xc1d744/0x2,_0x54be63=0x2;let _0x4bb292=0x20;while(_0x4bb292--){const _0x448ecd=_0x20c2ab[_0x1836a4(0x592)](_0x57c463-_0xc1d744)+_0xc1d744,_0x48c9ce=_0x185b18[_0x1836a4(0x592)](_0x343f60-_0x54be63)+_0x54be63;_0x4776b1[_0x1836a4(0x34f)]=_0x332480[_0x1836a4(0x592)](0x40)+0xc0,_0x4776b1[_0x1836a4(0x295)](_0x448ecd,_0x48c9ce,_0x46b216[_0x1836a4(0x1fd)](_0x5593f7),_0x54be63,_0x88bab9,_0x478fdd),_0x4776b1[_0x1836a4(0x41f)](_0x448ecd+_0x1fa1b6[_0x1836a4(0x1fd)](_0x5593f7),_0x48c9ce,_0x5e2f72[_0x1836a4(0x474)](_0x5593f7),_0x54be63,_0x478fdd);}_0x4776b1[_0x1836a4(0x5e5)]=![];if(_0x446802[_0x1836a4(0x277)])_0x4767b8[_0x1836a4(0x31a)](_0x1836a4(0x1af));return this[_0x1836a4(0x51a)]=this[_0x1836a4(0x51a)]||[],this['_cached_WeatherEffects_Storm'][_0x1836a4(0x4ac)](_0x4776b1),_0x4776b1;}}const _0x56fd0d=ColorManager[_0x1836a4(0x326)][_0x1836a4(0x442)]();let _0x42fe76=ColorManager['hexToArray'](_0x56fd0d);const _0x5e439c=[];while(_0x5e439c[_0x1836a4(0x19b)]<0x6){if(_0x1836a4(0x37d)!==_0x1836a4(0x3c5)){const _0xf2fa13=ColorManager[_0x1836a4(0x40b)](_0x42fe76);_0x5e439c['push'](_0xf2fa13),_0x42fe76=_0x42fe76[_0x1836a4(0x3b4)](_0x4165cb=>Math['ceil'](_0x4165cb*0.85)['clamp'](0x0,0xff));}else{if(this[_0x1836a4(0x364)]&&this['_cached_WeatherEffects_Spiderbolt'][_0x1836a4(0x19b)]>=_0x2ebc15['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0xb1796=this[_0x1836a4(0x364)];return _0xb1796[_0x3e70d9[_0x1836a4(0x474)](_0x505de4['random']()*_0xb1796[_0x1836a4(0x19b)])];}const _0x78dee5=_0x2fac9e[_0x1836a4(0x574)](_0xe4584b['advanced']['screenWidth'],_0x5892d1[_0x1836a4(0x33a)][_0x1836a4(0x416)])||0x1,_0x3374b6=new _0x3df31a(_0x78dee5,_0x78dee5),_0x5240a9=_0x1836a4(0x30f);_0x3374b6[_0x1836a4(0x219)](_0x78dee5/0x2,_0x78dee5/0x2,_0x5240a9,_0x5240a9,0x4,0x10,0x4),_0x3374b6['_context'][_0x1836a4(0x2e4)](0.5,0.5),_0x3374b6['_context'][_0x1836a4(0x1e4)](_0x78dee5,_0x78dee5/0x2),_0x3374b6[_0x1836a4(0x1b3)](),_0x3374b6['_customModified']=![];if(_0x36ee9c[_0x1836a4(0x277)])_0x390332[_0x1836a4(0x31a)](_0x1836a4(0x3b6));return this['_cached_WeatherEffects_Spiderbolt']=this['_cached_WeatherEffects_Spiderbolt']||[],this[_0x1836a4(0x364)][_0x1836a4(0x4ac)](_0x3374b6),_0x3374b6;}}_0x5e439c['reverse'](),_0x5e439c[_0x1836a4(0x4ac)](_0x5e439c[_0x1836a4(0x5d3)]()),_0x5e439c[_0x1836a4(0x4ac)](_0x5e439c['shift']());const _0x55c836=new Bitmap(0x64,0x60);_0x55c836[_0x1836a4(0x5ed)](_0x5e439c),_0x55c836[_0x1836a4(0x5e5)]=![];if(ImageManager[_0x1836a4(0x277)])console[_0x1836a4(0x31a)](_0x1836a4(0x425));return this[_0x1836a4(0x3d1)]=this[_0x1836a4(0x3d1)]||[],this[_0x1836a4(0x3d1)][_0x1836a4(0x4ac)](_0x55c836),_0x55c836;},ImageManager[_0x502049(0x2a1)]=function(){const _0x4e701c=_0x502049;if(this[_0x4e701c(0x1d0)]&&this[_0x4e701c(0x1d0)][_0x4e701c(0x19b)]>=ImageManager[_0x4e701c(0x4e6)]){if(_0x4e701c(0x2d5)!==_0x4e701c(0x255)){const _0x27a379=this['_cached_WeatherEffects_DandelionSeeds'];return _0x27a379[Math[_0x4e701c(0x474)](Math[_0x4e701c(0x221)]()*_0x27a379['length'])];}else{if(_0x199fdf[_0x4e701c(0x221)]()<0.5)this['_spinSpeed']*=-0x1;}}const _0x39c089=ColorManager[_0x4e701c(0x5a5)],_0x31cdef=ColorManager['WEATHER_DANDELION2_COLORS'],_0x158a31=ColorManager['WEATHER_DANDELION3_COLORS'],_0xaaaf4a=_0x39c089[Math[_0x4e701c(0x474)](Math[_0x4e701c(0x221)]()*_0x39c089[_0x4e701c(0x19b)])],_0x4c6018=_0x31cdef[Math[_0x4e701c(0x474)](Math[_0x4e701c(0x221)]()*_0x31cdef['length'])],_0x36c085=_0x158a31[Math[_0x4e701c(0x474)](Math['random']()*_0x158a31[_0x4e701c(0x19b)])],_0x29eefa=new Bitmap(0x40,0x64);_0x29eefa[_0x4e701c(0x535)](_0xaaaf4a,_0x4c6018,_0x36c085),_0x29eefa[_0x4e701c(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x4e701c(0x31a)](_0x4e701c(0x31c));return this[_0x4e701c(0x1d0)]=this[_0x4e701c(0x1d0)]||[],this[_0x4e701c(0x1d0)][_0x4e701c(0x4ac)](_0x29eefa),_0x29eefa;},ImageManager[_0x502049(0x52d)]=function(){const _0x885197=_0x502049;if(this['_cached_WeatherEffects_WhiteClouds']&&this['_cached_WeatherEffects_WhiteClouds']['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x2ddbe5=this['_cached_WeatherEffects_WhiteClouds'];return _0x2ddbe5[Math[_0x885197(0x474)](Math[_0x885197(0x221)]()*_0x2ddbe5[_0x885197(0x19b)])];}const _0x2516e1=ColorManager[_0x885197(0x1ca)],_0x3b66fa=ColorManager[_0x885197(0x22e)],_0x48d913=ColorManager[_0x885197(0x529)],_0x312275=_0x2516e1[Math[_0x885197(0x474)](Math[_0x885197(0x221)]()*_0x2516e1['length'])],_0x567abe=_0x3b66fa[Math['floor'](Math[_0x885197(0x221)]()*_0x3b66fa[_0x885197(0x19b)])],_0x1fa5c6=_0x48d913[Math[_0x885197(0x474)](Math[_0x885197(0x221)]()*_0x48d913[_0x885197(0x19b)])],_0xfafec8=new Bitmap(0x1f4,0x1f4);_0xfafec8[_0x885197(0x16a)](0xfa,0x15e,0x4b,_0x312275,0x10,0x14),_0xfafec8[_0x885197(0x16a)](0xfa,0xfa,0x64,_0x1fa5c6,0x40,0x19),_0xfafec8['drawCloud'](0xfa,0xfa,0x3c,_0x567abe,0x10,0x14),_0xfafec8[_0x885197(0x5e5)]=![];if(ImageManager[_0x885197(0x277)])console['log']('smokefog');return this['_cached_WeatherEffects_WhiteClouds']=this['_cached_WeatherEffects_WhiteClouds']||[],this['_cached_WeatherEffects_WhiteClouds']['push'](_0xfafec8),_0xfafec8;},ImageManager[_0x502049(0x48b)]=function(){const _0x1f12f4=_0x502049;if(this[_0x1f12f4(0x482)]&&this[_0x1f12f4(0x482)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x257b84=this[_0x1f12f4(0x482)];return _0x257b84[Math['floor'](Math['random']()*_0x257b84['length'])];}const _0x254b57=ColorManager[_0x1f12f4(0x5e9)],_0x5d5bd3=_0x254b57[0x3],_0x5f51fc=_0x254b57[0x2],_0x5cc874=_0x254b57[0x1],_0x15211c=new Bitmap(0x3e8,0x3e8);_0x15211c[_0x1f12f4(0x16a)](0x1f4,0x28a,0xaf,_0x5d5bd3,0x10,0x14),_0x15211c[_0x1f12f4(0x16a)](0x1f4,0x1f4,0xc8,_0x5cc874,0x40,0x19),_0x15211c[_0x1f12f4(0x16a)](0x1f4,0x15e,0xa0,_0x5f51fc,0x10,0x14),_0x15211c[_0x1f12f4(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x1f12f4(0x31a)](_0x1f12f4(0x287));return this[_0x1f12f4(0x482)]=this[_0x1f12f4(0x482)]||[],this[_0x1f12f4(0x482)]['push'](_0x15211c),_0x15211c;},ImageManager['weatherEffectsPollutionClouds']=function(){const _0x3b87e8=_0x502049;if(this[_0x3b87e8(0x414)]&&this[_0x3b87e8(0x414)][_0x3b87e8(0x19b)]>=ImageManager[_0x3b87e8(0x4e6)]){const _0x182034=this[_0x3b87e8(0x414)];return _0x182034[Math['floor'](Math['random']()*_0x182034['length'])];}const _0x42dc48=ColorManager[_0x3b87e8(0x29f)],_0x7d062f=0.75;let _0x5ec256=ColorManager[_0x3b87e8(0x1b5)](_0x42dc48[Math[_0x3b87e8(0x474)](Math[_0x3b87e8(0x221)]()*_0x42dc48[_0x3b87e8(0x19b)])],_0x7d062f),_0x1433d7=ColorManager[_0x3b87e8(0x1b5)](_0x42dc48[Math[_0x3b87e8(0x474)](Math['random']()*_0x42dc48[_0x3b87e8(0x19b)])],_0x7d062f),_0x34b613=ColorManager[_0x3b87e8(0x1b5)](_0x42dc48[Math['floor'](Math[_0x3b87e8(0x221)]()*_0x42dc48[_0x3b87e8(0x19b)])],_0x7d062f);const _0x394778=new Bitmap(0x1f4,0x1f4);_0x394778[_0x3b87e8(0x16a)](0xfa,0x15e,0x4b,_0x5ec256,0x10,0x14),_0x394778[_0x3b87e8(0x16a)](0xfa,0xfa,0x64,_0x34b613,0x40,0x19),_0x394778['drawCloud'](0xfa,0xfa,0x3c,_0x1433d7,0x10,0x14),_0x394778[_0x3b87e8(0x5e5)]=![];if(ImageManager[_0x3b87e8(0x277)])console[_0x3b87e8(0x31a)](_0x3b87e8(0x4fe));return this[_0x3b87e8(0x414)]=this[_0x3b87e8(0x414)]||[],this[_0x3b87e8(0x414)][_0x3b87e8(0x4ac)](_0x394778),_0x394778;},ImageManager[_0x502049(0x46c)]=function(){const _0x48f48c=_0x502049;if(this['_cached_WeatherEffects_HeatClouds']&&this['_cached_WeatherEffects_HeatClouds'][_0x48f48c(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x48f48c(0x2be)===_0x48f48c(0x2be)){const _0x1c31e4=this[_0x48f48c(0x47e)];return _0x1c31e4[Math[_0x48f48c(0x474)](Math[_0x48f48c(0x221)]()*_0x1c31e4[_0x48f48c(0x19b)])];}else _0x19d5a7[_0x48f48c(0x3b3)](_0x222f6c,_0x61e9d4),_0x1fd239[_0x48f48c(0x3bc)]=_0x48f48c(0x5a0),_0x1aeea3[_0x48f48c(0x329)][_0x48f48c(0x417)](_0x13cd4c);}const _0x379148=ColorManager[_0x48f48c(0x29c)],_0x35867f=0.85;let _0x3546ba=ColorManager[_0x48f48c(0x1b5)](_0x379148[Math[_0x48f48c(0x474)](Math['random']()*_0x379148[_0x48f48c(0x19b)])],_0x35867f),_0x3f3655=ColorManager[_0x48f48c(0x1b5)](_0x379148[Math[_0x48f48c(0x474)](Math[_0x48f48c(0x221)]()*_0x379148['length'])],_0x35867f),_0x555072=ColorManager[_0x48f48c(0x1b5)](_0x379148[Math[_0x48f48c(0x474)](Math[_0x48f48c(0x221)]()*_0x379148['length'])],_0x35867f);const _0x3e2233=new Bitmap(0x1f4,0x1f4);_0x3e2233[_0x48f48c(0x16a)](0xfa,0x15e,0x4b,_0x3546ba,0x10,0x14),_0x3e2233[_0x48f48c(0x16a)](0xfa,0xfa,0x64,_0x555072,0x40,0x19),_0x3e2233[_0x48f48c(0x16a)](0xfa,0xfa,0x3c,_0x3f3655,0x10,0x14),_0x3e2233[_0x48f48c(0x5e5)]=![];if(ImageManager[_0x48f48c(0x277)])console[_0x48f48c(0x31a)](_0x48f48c(0x34a));return this[_0x48f48c(0x47e)]=this[_0x48f48c(0x47e)]||[],this[_0x48f48c(0x47e)][_0x48f48c(0x4ac)](_0x3e2233),_0x3e2233;},ImageManager[_0x502049(0x229)]=function(){const _0xdb68ce=_0x502049;if(this['_cached_WeatherEffects_SnowClouds']&&this[_0xdb68ce(0x305)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0xdb68ce(0x4fc)!==_0xdb68ce(0x4fc)){const _0x42fd9d=_0x207ae4[_0xdb68ce(0x329)][_0xdb68ce(0x22b)](_0x1d1452,_0x1f608f);_0x209ab9[_0xdb68ce(0x1dc)](_0x42fd9d);}else{const _0x416927=this['_cached_WeatherEffects_SnowClouds'];return _0x416927[Math[_0xdb68ce(0x474)](Math[_0xdb68ce(0x221)]()*_0x416927[_0xdb68ce(0x19b)])];}}const _0xb4d6cc=ColorManager[_0xdb68ce(0x49e)],_0x104028=1.2;let _0x38cd85=ColorManager[_0xdb68ce(0x1b5)](_0xb4d6cc[Math[_0xdb68ce(0x474)](Math[_0xdb68ce(0x221)]()*_0xb4d6cc[_0xdb68ce(0x19b)])],_0x104028),_0x3cb056=ColorManager['adjustHexColor'](_0xb4d6cc[Math[_0xdb68ce(0x474)](Math[_0xdb68ce(0x221)]()*_0xb4d6cc['length'])],_0x104028),_0x2d8aad=ColorManager[_0xdb68ce(0x1b5)](_0xb4d6cc[Math[_0xdb68ce(0x474)](Math[_0xdb68ce(0x221)]()*_0xb4d6cc[_0xdb68ce(0x19b)])],_0x104028);const _0x55e84d=new Bitmap(0x1f4,0x1f4);_0x55e84d[_0xdb68ce(0x16a)](0xfa,0x15e,0x4b,_0x38cd85,0x10,0x14),_0x55e84d[_0xdb68ce(0x16a)](0xfa,0xfa,0x64,_0x2d8aad,0x40,0x19),_0x55e84d[_0xdb68ce(0x16a)](0xfa,0xfa,0x3c,_0x3cb056,0x10,0x14),_0x55e84d[_0xdb68ce(0x5e5)]=![];if(ImageManager[_0xdb68ce(0x277)])console[_0xdb68ce(0x31a)](_0xdb68ce(0x2ef));return this[_0xdb68ce(0x305)]=this[_0xdb68ce(0x305)]||[],this[_0xdb68ce(0x305)][_0xdb68ce(0x4ac)](_0x55e84d),_0x55e84d;},ImageManager[_0x502049(0x2d7)]=function(){const _0x596648=_0x502049;if(this[_0x596648(0x5aa)]&&this[_0x596648(0x5aa)][_0x596648(0x19b)]>=ImageManager[_0x596648(0x4e6)]){if(_0x596648(0x575)===_0x596648(0x2c9))_0x491ce0['ConvertParams'](_0x50479e,_0xe71a9e),_0x2e5105[_0x596648(0x3bc)]=_0x596648(0x4d3),_0x20fef0[_0x596648(0x329)][_0x596648(0x417)](_0x148ca0);else{const _0x26fbcd=this['_cached_WeatherEffects_IceFog'];return _0x26fbcd[Math[_0x596648(0x474)](Math[_0x596648(0x221)]()*_0x26fbcd['length'])];}}const _0x2b3ce0=ColorManager[_0x596648(0x49e)],_0x3fb2d2=1.3;let _0x153406=ColorManager[_0x596648(0x1b5)](_0x2b3ce0[Math[_0x596648(0x474)](Math[_0x596648(0x221)]()*_0x2b3ce0[_0x596648(0x19b)])],_0x3fb2d2),_0x212d56=ColorManager[_0x596648(0x1b5)](_0x2b3ce0[Math[_0x596648(0x474)](Math[_0x596648(0x221)]()*_0x2b3ce0[_0x596648(0x19b)])],_0x3fb2d2),_0x3d11f7=ColorManager[_0x596648(0x1b5)](_0x2b3ce0[Math[_0x596648(0x474)](Math[_0x596648(0x221)]()*_0x2b3ce0[_0x596648(0x19b)])],_0x3fb2d2);const _0x4f9eeb=new Bitmap(0x3e8,0x3e8);_0x4f9eeb[_0x596648(0x16a)](0x1f4,0x28a,0xaf,_0x153406,0x10,0x14),_0x4f9eeb[_0x596648(0x16a)](0x1f4,0x1f4,0xc8,_0x3d11f7,0x40,0x19),_0x4f9eeb[_0x596648(0x16a)](0x1f4,0x15e,0xa0,_0x212d56,0x10,0x14),_0x4f9eeb[_0x596648(0x5e5)]=![];if(ImageManager[_0x596648(0x277)])console[_0x596648(0x31a)](_0x596648(0x5d4));return this['_cached_WeatherEffects_IceFog']=this[_0x596648(0x5aa)]||[],this[_0x596648(0x5aa)][_0x596648(0x4ac)](_0x4f9eeb),_0x4f9eeb;},ImageManager['weatherEffectsPurpleHaze']=function(){const _0x2645d5=_0x502049;if(this['_cached_WeatherEffects_PurpleHaze']&&this[_0x2645d5(0x5c7)][_0x2645d5(0x19b)]>=ImageManager[_0x2645d5(0x4e6)]){if(_0x2645d5(0x4a9)!=='EGuEe'){const _0x478224=this[_0x2645d5(0x5c7)];return _0x478224[Math[_0x2645d5(0x474)](Math[_0x2645d5(0x221)]()*_0x478224[_0x2645d5(0x19b)])];}else _0x14fdc9[_0x2645d5(0x3b3)](_0x5add03,_0x2518fc),_0x2b07fd['type']=_0x2645d5(0x21e),_0x4a0d22[_0x2645d5(0x329)]['applyPluginCmdSettings'](_0xa8f834);}let _0x5852ad=ColorManager['arrayToHex']([Math[_0x2645d5(0x592)](0x80)+0x80,0x18,Math[_0x2645d5(0x592)](0x80)+0x80]),_0x2a8c21=ColorManager['arrayToHex']([Math[_0x2645d5(0x592)](0x80)+0x80,0x30,Math[_0x2645d5(0x592)](0x80)+0x80]),_0x5aa6e1=ColorManager['arrayToHex']([Math['randomInt'](0x80)+0x80,0x60,Math['randomInt'](0x80)+0x80]);const _0x579825=new Bitmap(0x3e8,0x3e8);_0x579825['drawCloud'](0x1f4,0x28a,0xaf,_0x5852ad,0x10,0x14),_0x579825['drawCloud'](0x1f4,0x1f4,0xc8,_0x5aa6e1,0x40,0x19),_0x579825[_0x2645d5(0x16a)](0x1f4,0x15e,0xa0,_0x2a8c21,0x10,0x14),_0x579825[_0x2645d5(0x5e5)]=![];if(ImageManager[_0x2645d5(0x277)])console['log'](_0x2645d5(0x243));return this[_0x2645d5(0x5c7)]=this[_0x2645d5(0x5c7)]||[],this[_0x2645d5(0x5c7)]['push'](_0x579825),_0x579825;},ImageManager[_0x502049(0x1bc)]=function(){const _0xcadd97=_0x502049;if(this[_0xcadd97(0x2fb)]&&this[_0xcadd97(0x2fb)][_0xcadd97(0x19b)]>=ImageManager[_0xcadd97(0x4e6)]){const _0x43a305=this[_0xcadd97(0x2fb)];return _0x43a305[Math[_0xcadd97(0x474)](Math[_0xcadd97(0x221)]()*_0x43a305[_0xcadd97(0x19b)])];}let _0x17a951=ColorManager[_0xcadd97(0x40b)]([Math[_0xcadd97(0x592)](0x20)+0x10,0x18,Math[_0xcadd97(0x592)](0x20)+0x10]),_0x3d1b7c=ColorManager['arrayToHex']([Math[_0xcadd97(0x592)](0x30)+0x20,0x30,Math[_0xcadd97(0x592)](0x30)+0x20]),_0x7abdef=ColorManager[_0xcadd97(0x40b)]([Math[_0xcadd97(0x592)](0x40)+0x30,0x60,Math[_0xcadd97(0x592)](0x40)+0x30]);const _0x5d4989=new Bitmap(0x3e8,0x3e8);_0x5d4989[_0xcadd97(0x16a)](0x1f4,0x28a,0xaf,_0x17a951,0x10,0x14),_0x5d4989[_0xcadd97(0x16a)](0x1f4,0x1f4,0xc8,_0x7abdef,0x40,0x19),_0x5d4989[_0xcadd97(0x16a)](0x1f4,0x15e,0xa0,_0x3d1b7c,0x10,0x14),_0x5d4989['_customModified']=![];if(ImageManager[_0xcadd97(0x277)])console[_0xcadd97(0x31a)]('thunderclouds');return this['_cached_WeatherEffects_Thunderclouds']=this[_0xcadd97(0x2fb)]||[],this[_0xcadd97(0x2fb)][_0xcadd97(0x4ac)](_0x5d4989),_0x5d4989;},ImageManager[_0x502049(0x2f0)]=function(){const _0xcedc70=_0x502049;if(this[_0xcedc70(0x396)]&&this[_0xcedc70(0x396)][_0xcedc70(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4fdc35=this[_0xcedc70(0x396)];return _0x4fdc35[Math['floor'](Math[_0xcedc70(0x221)]()*_0x4fdc35[_0xcedc70(0x19b)])];}const _0xa30a0f=Math[_0xcedc70(0x592)](0x20)+0x40,_0x19aff2=Math[_0xcedc70(0x592)](0x20)+0x60,_0x3d4174=Math[_0xcedc70(0x592)](0x20)+0x80;let _0x183ec8=ColorManager[_0xcedc70(0x40b)]([_0xa30a0f,_0xa30a0f,_0xa30a0f]),_0xe08fd8=ColorManager[_0xcedc70(0x40b)]([_0x19aff2,_0x19aff2,_0x19aff2]),_0x40a4ea=ColorManager[_0xcedc70(0x40b)]([_0x3d4174,_0x3d4174,_0x3d4174]);const _0xde597f=new Bitmap(0x1f4,0x1f4);_0xde597f[_0xcedc70(0x16a)](0xfa,0x15e,0x4b,_0x183ec8,0x10,0x14),_0xde597f[_0xcedc70(0x16a)](0xfa,0xfa,0x64,_0x40a4ea,0x40,0x19),_0xde597f[_0xcedc70(0x16a)](0xfa,0xfa,0x3c,_0xe08fd8,0x10,0x14),_0xde597f['_customModified']=![];if(ImageManager[_0xcedc70(0x277)])console[_0xcedc70(0x31a)]('rainclouds');return this[_0xcedc70(0x396)]=this[_0xcedc70(0x396)]||[],this[_0xcedc70(0x396)][_0xcedc70(0x4ac)](_0xde597f),_0xde597f;},ImageManager['weatherEffectsMist']=function(){const _0x45e82d=_0x502049;if(this[_0x45e82d(0x419)]&&this[_0x45e82d(0x419)][_0x45e82d(0x19b)]>=ImageManager[_0x45e82d(0x4e6)]){const _0x1a21c7=this[_0x45e82d(0x419)];return _0x1a21c7[Math[_0x45e82d(0x474)](Math['random']()*_0x1a21c7[_0x45e82d(0x19b)])];}const _0xe6767b=ColorManager[_0x45e82d(0x1ca)],_0x27081a=ColorManager[_0x45e82d(0x22e)],_0xa47a2=ColorManager[_0x45e82d(0x529)],_0x5a72be=_0xe6767b[Math[_0x45e82d(0x474)](Math['random']()*_0xe6767b[_0x45e82d(0x19b)])],_0x187d4a=_0x27081a[Math[_0x45e82d(0x474)](Math[_0x45e82d(0x221)]()*_0x27081a['length'])],_0x176f2c=_0xa47a2[Math[_0x45e82d(0x474)](Math[_0x45e82d(0x221)]()*_0xa47a2[_0x45e82d(0x19b)])],_0x4b6793=new Bitmap(0x3e8,0x3e8);_0x4b6793[_0x45e82d(0x16a)](0x1f4,0x28a,0xaf,_0x5a72be,0x10,0x14),_0x4b6793[_0x45e82d(0x16a)](0x1f4,0x1f4,0xc8,_0x176f2c,0x40,0x19),_0x4b6793['drawCloud'](0x1f4,0x15e,0xa0,_0x187d4a,0x10,0x14),_0x4b6793[_0x45e82d(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x45e82d(0x31a)](_0x45e82d(0x287));return this[_0x45e82d(0x419)]=this[_0x45e82d(0x419)]||[],this[_0x45e82d(0x419)][_0x45e82d(0x4ac)](_0x4b6793),_0x4b6793;},ImageManager[_0x502049(0x5a9)]=function(){const _0x51e448=_0x502049;if(this[_0x51e448(0x177)]&&this[_0x51e448(0x177)][_0x51e448(0x19b)]>=ImageManager[_0x51e448(0x4e6)]){const _0x8e1f5f=this['_cached_WeatherEffects_DustStorm'];return _0x8e1f5f[Math[_0x51e448(0x474)](Math[_0x51e448(0x221)]()*_0x8e1f5f[_0x51e448(0x19b)])];}const _0x7fdc45=ColorManager[_0x51e448(0x29f)][_0x51e448(0x516)](),_0x2b4712=_0x7fdc45[Math[_0x51e448(0x474)](Math[_0x51e448(0x221)]()*_0x7fdc45[_0x51e448(0x19b)])],_0x148447=_0x7fdc45[Math[_0x51e448(0x474)](Math[_0x51e448(0x221)]()*_0x7fdc45[_0x51e448(0x19b)])],_0x4c0e8d=_0x7fdc45[Math[_0x51e448(0x474)](Math['random']()*_0x7fdc45['length'])],_0x198639=new Bitmap(0x1f4,0x1f4);_0x198639[_0x51e448(0x16a)](0xfa,0x15e,0x4b,_0x2b4712,0x6,0x14),_0x198639['drawCloud'](0xfa,0xfa,0x64,_0x4c0e8d,0xc,0x19),_0x198639[_0x51e448(0x16a)](0xfa,0xfa,0x3c,_0x148447,0x6,0x14);const _0x378d81=_0x198639[_0x51e448(0x313)],_0x42f61e=_0x198639[_0x51e448(0x3e7)],_0x31ba34=0x2;let _0x28a747=0x80;while(_0x28a747--){if(_0x51e448(0x518)!==_0x51e448(0x236)){const _0x47d28b=Math[_0x51e448(0x592)](_0x378d81-_0x31ba34*0x2)+_0x31ba34,_0xc481b4=Math[_0x51e448(0x592)](_0x42f61e-_0x31ba34*0x2)+_0x31ba34,_0x15b28e=_0x7fdc45[Math[_0x51e448(0x474)](Math[_0x51e448(0x221)]()*_0x7fdc45[_0x51e448(0x19b)])],_0x4b49cb=Math['randomInt'](_0x31ba34)+0x1;_0x198639[_0x51e448(0x34f)]=Math[_0x51e448(0x592)](0x40)+0xc0,_0x198639[_0x51e448(0x432)](_0x47d28b,_0xc481b4,_0x4b49cb,_0x15b28e);}else _0x3ed880[_0x51e448(0x260)](),_0x439b5d[_0x51e448(0x1e4)](this[_0x51e448(0x40c)]*_0x2b6ec6/(this['_branches']+0x1),0x0),_0x419b59['scale'](0.5,0.5),_0x489a68['save'](),_0x547406[_0x51e448(0x5c5)](this['_flakeAngle']),this['drawSnowflakeLine'](_0x1fafcb+0x1),_0x4cbbc7[_0x51e448(0x36f)](),_0x3b5236['save'](),_0x348b32['rotate'](-this[_0x51e448(0x1f4)]),this[_0x51e448(0x3f8)](_0x4bbd66+0x1),_0x1601aa[_0x51e448(0x36f)](),_0x1dea6e[_0x51e448(0x36f)]();}_0x198639[_0x51e448(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x51e448(0x31a)](_0x51e448(0x1c7));return this[_0x51e448(0x177)]=this[_0x51e448(0x177)]||[],this[_0x51e448(0x177)]['push'](_0x198639),_0x198639;},ImageManager[_0x502049(0x18a)]=function(){const _0x5e7836=_0x502049;if(this['_cached_WeatherEffects_DustClouds']&&this['_cached_WeatherEffects_DustClouds'][_0x5e7836(0x19b)]>=ImageManager[_0x5e7836(0x4e6)]){if(_0x5e7836(0x527)===_0x5e7836(0x527)){const _0x23116d=this[_0x5e7836(0x212)];return _0x23116d[Math[_0x5e7836(0x474)](Math['random']()*_0x23116d['length'])];}else this[_0x5e7836(0x56b)](_0x1d80de,!![]),this['updateWeatherLayer'](_0x4b4a1a,![]);}const _0x3acf96=ColorManager[_0x5e7836(0x29f)][_0x5e7836(0x516)](),_0x10c449=1.5,_0x208256=ColorManager[_0x5e7836(0x1b5)](_0x3acf96[Math[_0x5e7836(0x474)](Math[_0x5e7836(0x221)]()*_0x3acf96['length'])],_0x10c449),_0x477bc1=ColorManager['adjustHexColor'](_0x3acf96[Math[_0x5e7836(0x474)](Math[_0x5e7836(0x221)]()*_0x3acf96[_0x5e7836(0x19b)])],_0x10c449),_0x5d5c79=ColorManager[_0x5e7836(0x1b5)](_0x3acf96[Math[_0x5e7836(0x474)](Math[_0x5e7836(0x221)]()*_0x3acf96[_0x5e7836(0x19b)])],_0x10c449),_0xca8b25=new Bitmap(0x3e8,0x3e8);_0xca8b25[_0x5e7836(0x16a)](0x1f4,0x28a,0xaf,_0x208256,0x10,0x14),_0xca8b25[_0x5e7836(0x16a)](0x1f4,0x1f4,0xc8,_0x5d5c79,0x40,0x19),_0xca8b25[_0x5e7836(0x16a)](0x1f4,0x15e,0xa0,_0x477bc1,0x10,0x14),_0xca8b25['_customModified']=![];if(ImageManager[_0x5e7836(0x277)])console[_0x5e7836(0x31a)]('dustclouds');return this[_0x5e7836(0x212)]=this['_cached_WeatherEffects_DustClouds']||[],this['_cached_WeatherEffects_DustClouds'][_0x5e7836(0x4ac)](_0xca8b25),_0xca8b25;},ImageManager[_0x502049(0x5ab)]=function(){const _0x58cad9=_0x502049;if(this['_cached_WeatherEffects_SandClouds']&&this[_0x58cad9(0x1cb)][_0x58cad9(0x19b)]>=ImageManager[_0x58cad9(0x4e6)]){if(_0x58cad9(0x5a2)!==_0x58cad9(0x1fe)){const _0x409bbf=this[_0x58cad9(0x1cb)];return _0x409bbf[Math['floor'](Math[_0x58cad9(0x221)]()*_0x409bbf['length'])];}else _0x5beda6[_0x58cad9(0x3b3)](_0x2b6e7d,_0x1f5d79),_0x5c04b5['type']=_0x58cad9(0x2ce),_0x43d0fc['WeatherEffects']['applyPluginCmdSettings'](_0x46b05f);}const _0xa0ac09=ColorManager['WEATHER_EARTH_COLORS'][_0x58cad9(0x516)](),_0x2f6643=1.8,_0x2bf941=ColorManager[_0x58cad9(0x1b5)](_0xa0ac09[Math[_0x58cad9(0x474)](Math[_0x58cad9(0x221)]()*_0xa0ac09[_0x58cad9(0x19b)])],_0x2f6643),_0x552fd1=ColorManager['adjustHexColor'](_0xa0ac09[Math[_0x58cad9(0x474)](Math['random']()*_0xa0ac09[_0x58cad9(0x19b)])],_0x2f6643),_0x1cdea2=ColorManager['adjustHexColor'](_0xa0ac09[Math[_0x58cad9(0x474)](Math[_0x58cad9(0x221)]()*_0xa0ac09[_0x58cad9(0x19b)])],_0x2f6643),_0x47e65c=new Bitmap(0x3e8,0x3e8);_0x47e65c[_0x58cad9(0x16a)](0x1f4,0x28a,0xaf,_0x2bf941,0x10,0x14),_0x47e65c[_0x58cad9(0x16a)](0x1f4,0x1f4,0xc8,_0x1cdea2,0x40,0x19),_0x47e65c[_0x58cad9(0x16a)](0x1f4,0x15e,0xa0,_0x552fd1,0x10,0x14),_0x47e65c[_0x58cad9(0x5e5)]=![];if(ImageManager[_0x58cad9(0x277)])console[_0x58cad9(0x31a)](_0x58cad9(0x42a));return this[_0x58cad9(0x1cb)]=this['_cached_WeatherEffects_SandClouds']||[],this[_0x58cad9(0x1cb)][_0x58cad9(0x4ac)](_0x47e65c),_0x47e65c;},ImageManager[_0x502049(0x3f3)]=function(){const _0x39bb01=_0x502049;if(this['_cached_WeatherEffects_Pollen']&&this['_cached_WeatherEffects_Pollen'][_0x39bb01(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x373501=this['_cached_WeatherEffects_Pollen'];return _0x373501[Math[_0x39bb01(0x474)](Math[_0x39bb01(0x221)]()*_0x373501[_0x39bb01(0x19b)])];}const _0x36e74b=ColorManager['WEATHER_POLLEN_COLORS'][_0x39bb01(0x516)](),_0x1e99f5=0.8,_0x144788=ColorManager['adjustHexColor'](_0x36e74b[Math['floor'](Math[_0x39bb01(0x221)]()*_0x36e74b[_0x39bb01(0x19b)])],_0x1e99f5),_0x1f5091=ColorManager[_0x39bb01(0x1b5)](_0x36e74b[Math[_0x39bb01(0x474)](Math['random']()*_0x36e74b[_0x39bb01(0x19b)])],_0x1e99f5),_0x3fe7c1=ColorManager[_0x39bb01(0x1b5)](_0x36e74b[Math[_0x39bb01(0x474)](Math[_0x39bb01(0x221)]()*_0x36e74b['length'])],_0x1e99f5),_0x3b3d86=new Bitmap(0x1f4,0x1f4);_0x3b3d86[_0x39bb01(0x16a)](0xfa,0x15e,0x4b,_0x144788,0x4,0x14),_0x3b3d86[_0x39bb01(0x16a)](0xfa,0xfa,0x64,_0x3fe7c1,0x8,0x19),_0x3b3d86[_0x39bb01(0x16a)](0xfa,0xfa,0x3c,_0x1f5091,0x4,0x14);const _0xe616d3=_0x3b3d86[_0x39bb01(0x313)],_0x529afe=_0x3b3d86[_0x39bb01(0x3e7)],_0x5f19b7=0x2;let _0x1b473c=0x20;while(_0x1b473c--){if('kstun'!=='kstun')_0x3e59f1['adjustWeatherLayerPower'](_0x5d9234,!![],_0xb77a2d,_0x480299);else{const _0x2ee144=Math['randomInt'](_0xe616d3-_0x5f19b7*0x2)+_0x5f19b7,_0x410589=Math[_0x39bb01(0x592)](_0x529afe-_0x5f19b7*0x2)+_0x5f19b7;let _0x20df96=_0x36e74b[Math[_0x39bb01(0x474)](Math[_0x39bb01(0x221)]()*_0x36e74b[_0x39bb01(0x19b)])];_0x20df96=ColorManager['adjustHexColor'](_0x20df96,_0x1e99f5);const _0x49e21f=Math[_0x39bb01(0x592)](_0x5f19b7)+0x1;_0x3b3d86[_0x39bb01(0x34f)]=Math['randomInt'](0x40)+0xa0,_0x3b3d86['drawCircle'](_0x2ee144,_0x410589,_0x49e21f,_0x20df96);}}_0x3b3d86[_0x39bb01(0x5e5)]=![];if(ImageManager[_0x39bb01(0x277)])console[_0x39bb01(0x31a)](_0x39bb01(0x2ce));return this[_0x39bb01(0x200)]=this[_0x39bb01(0x200)]||[],this[_0x39bb01(0x200)]['push'](_0x3b3d86),_0x3b3d86;},ImageManager[_0x502049(0x333)]=function(){const _0x59ef3a=_0x502049;if(this[_0x59ef3a(0x49d)]&&this[_0x59ef3a(0x49d)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if('hbXAe'!==_0x59ef3a(0x20a)){const _0x316188=this[_0x59ef3a(0x49d)];return _0x316188[Math[_0x59ef3a(0x474)](Math[_0x59ef3a(0x221)]()*_0x316188['length'])];}else{const _0x31b035=this['_lifespan'],_0xe2d20c=this['_flags']['scaleOut']??0x1;_0x31b035<=0x1?this[_0x59ef3a(0x5eb)]=_0xe2d20c:this['_scaleInOutRatio']=(this[_0x59ef3a(0x5eb)]*(_0x31b035-0x1)+_0xe2d20c)/_0x31b035;}}const _0x53d72c='#00ff00',_0x3cee51=0.75,_0x159d3b=ColorManager['adjustHexColor'](_0x53d72c,_0x3cee51),_0x565370=ColorManager[_0x59ef3a(0x1b5)](_0x159d3b,_0x3cee51),_0x2f0182=ColorManager[_0x59ef3a(0x1b5)](_0x565370,_0x3cee51),_0x5d6a43=new Bitmap(0x3e8,0x3e8);_0x5d6a43['drawCloud'](0x1f4,0x28a,0xaf,_0x2f0182,0x10,0x14),_0x5d6a43[_0x59ef3a(0x16a)](0x1f4,0x1f4,0xc8,_0x159d3b,0x40,0x19),_0x5d6a43[_0x59ef3a(0x16a)](0x1f4,0x15e,0xa0,_0x565370,0x10,0x14),_0x5d6a43[_0x59ef3a(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x59ef3a(0x5c9));return this[_0x59ef3a(0x49d)]=this[_0x59ef3a(0x49d)]||[],this['_cached_WeatherEffects_ToxicGas'][_0x59ef3a(0x4ac)](_0x5d6a43),_0x5d6a43;},ImageManager[_0x502049(0x2da)]=function(){const _0x3b4864=_0x502049;if(this[_0x3b4864(0x52f)]&&ColorManager[_0x3b4864(0x463)][_0x3b4864(0x19b)]<=0x0){if(_0x3b4864(0x5b5)!==_0x3b4864(0x5ec)){const _0x37dd2b=this[_0x3b4864(0x52f)];return _0x37dd2b[Math[_0x3b4864(0x474)](Math[_0x3b4864(0x221)]()*_0x37dd2b[_0x3b4864(0x19b)])];}else _0x1bd86f[_0x3b4864(0x3b3)](_0x13605c,_0x55dc86),_0x449898['type']='sandclouds',_0x42880b['WeatherEffects'][_0x3b4864(0x417)](_0x2ae489);}const _0x4870ea=ColorManager[_0x3b4864(0x463)][_0x3b4864(0x442)](),_0x1bf90f=0.85,_0x31b240=ColorManager['adjustHexColor'](_0x4870ea,_0x1bf90f),_0x251765=ColorManager[_0x3b4864(0x1b5)](_0x31b240,_0x1bf90f),_0x1cb2a1=ColorManager[_0x3b4864(0x1b5)](_0x251765,_0x1bf90f),_0x1f6ae8=new Bitmap(0x3e8,0x3e8);_0x1f6ae8[_0x3b4864(0x16a)](0x1f4,0x28a,0xaf,_0x1cb2a1,0x10,0x14),_0x1f6ae8[_0x3b4864(0x16a)](0x1f4,0x1f4,0xc8,_0x31b240,0x40,0x19),_0x1f6ae8[_0x3b4864(0x16a)](0x1f4,0x15e,0xa0,_0x251765,0x10,0x14),_0x1f6ae8[_0x3b4864(0x5e5)]=![];if(ImageManager[_0x3b4864(0x277)])console[_0x3b4864(0x31a)](_0x3b4864(0x32d));return this[_0x3b4864(0x52f)]=this['_cached_WeatherEffects_PastelBrume']||[],this[_0x3b4864(0x52f)]['push'](_0x1f6ae8),_0x1f6ae8;},ImageManager['weatherEffectsRainbowClouds']=function(){const _0x3eebce=_0x502049;if(this[_0x3eebce(0x5a6)]&&ColorManager[_0x3eebce(0x3ed)][_0x3eebce(0x19b)]<=0x0){if(_0x3eebce(0x523)===_0x3eebce(0x2b7))_0x503dd9[_0x3eebce(0x53e)][_0x3eebce(0x58e)]=0x24,_0x4d8f26[_0x3eebce(0x53e)][_0x3eebce(0x441)]=0x82,_0x53d52b[_0x3eebce(0x53e)][_0x3eebce(0x170)]=0x1e,_0x1f8cae['sprite'][_0x3eebce(0x5af)]=0x50,_0x874f5['sprite'][_0x3eebce(0x354)]=0x14,(_0x30f723[_0x3eebce(0x289)]['color']='#505050',_0x242526[_0x3eebce(0x289)][_0x3eebce(0x415)]=0x6,_0x170685[_0x3eebce(0x4a6)][_0x3eebce(0x5c6)]=0xc),_0x1b6a91[_0x3eebce(0x4a6)][_0x3eebce(0x4ee)]=0xff,_0x378864[_0x3eebce(0x4a6)][_0x3eebce(0x3a7)]=0x5;else{const _0x1fb3db=this['_cached_WeatherEffects_RainbowClouds'];return _0x1fb3db[Math[_0x3eebce(0x474)](Math['random']()*_0x1fb3db[_0x3eebce(0x19b)])];}}const _0x17a82f=ColorManager[_0x3eebce(0x3ed)][_0x3eebce(0x442)](),_0x438ff3=0.85,_0x2d39a4=ColorManager['adjustHexColor'](_0x17a82f,_0x438ff3),_0x5589dd=ColorManager[_0x3eebce(0x1b5)](_0x2d39a4,_0x438ff3),_0x32d231=ColorManager[_0x3eebce(0x1b5)](_0x5589dd,_0x438ff3),_0x2ce1ea=new Bitmap(0x1f4,0x1f4);_0x2ce1ea[_0x3eebce(0x16a)](0xfa,0x15e,0x4b,_0x32d231,0x10,0x14),_0x2ce1ea[_0x3eebce(0x16a)](0xfa,0xfa,0x64,_0x2d39a4,0x40,0x19),_0x2ce1ea[_0x3eebce(0x16a)](0xfa,0xfa,0x3c,_0x5589dd,0x10,0x14),_0x2ce1ea[_0x3eebce(0x5e5)]=![];if(ImageManager[_0x3eebce(0x277)])console[_0x3eebce(0x31a)](_0x3eebce(0x39e));return this[_0x3eebce(0x5a6)]=this[_0x3eebce(0x5a6)]||[],this[_0x3eebce(0x5a6)][_0x3eebce(0x4ac)](_0x2ce1ea),_0x2ce1ea;},ImageManager['weatherEffectsRainbowOrbs']=function(){const _0x14ba70=_0x502049;if(this[_0x14ba70(0x3a9)]&&ColorManager[_0x14ba70(0x237)][_0x14ba70(0x19b)]<=0x0){const _0x55741f=this['_cached_WeatherEffects_RainbowOrbs'];return _0x55741f[Math[_0x14ba70(0x474)](Math[_0x14ba70(0x221)]()*_0x55741f[_0x14ba70(0x19b)])];}const _0x28e15a=ColorManager[_0x14ba70(0x237)][_0x14ba70(0x442)](),_0x1cb0a6=0x20,_0x3cb22d=new Bitmap(_0x1cb0a6,_0x1cb0a6),_0x27048f=Math[_0x14ba70(0x474)](_0x1cb0a6/0x2);_0x3cb22d[_0x14ba70(0x3d6)](_0x27048f,_0x27048f,_0x27048f,0x168,_0x28e15a,0x0,0x1,0x0),_0x3cb22d['fillRect'](_0x27048f-0x1,_0x27048f-0x1,0x2,0x2,_0x28e15a),_0x3cb22d[_0x14ba70(0x5e5)]=![];if(ImageManager[_0x14ba70(0x277)])console[_0x14ba70(0x31a)](_0x14ba70(0x238));return this[_0x14ba70(0x3a9)]=this[_0x14ba70(0x3a9)]||[],this['_cached_WeatherEffects_RainbowOrbs'][_0x14ba70(0x4ac)](_0x3cb22d),_0x3cb22d;},ImageManager[_0x502049(0x1cc)]=function(){const _0x1e0431=_0x502049;if(this[_0x1e0431(0x435)]&&this[_0x1e0431(0x435)][_0x1e0431(0x19b)]>=ImageManager[_0x1e0431(0x4e6)]){const _0x540651=this[_0x1e0431(0x435)];return _0x540651[Math[_0x1e0431(0x474)](Math[_0x1e0431(0x221)]()*_0x540651['length'])];}const _0x4cea80=ColorManager[_0x1e0431(0x476)],_0x3b81a5=_0x4cea80[Math[_0x1e0431(0x474)](Math[_0x1e0431(0x221)]()*_0x4cea80[_0x1e0431(0x19b)])];let _0x5a986c=Math[_0x1e0431(0x592)](0x10)+0x10;if(_0x5a986c%0x2!==0x0)_0x5a986c+=0x1;const _0x833341=new Bitmap(_0x5a986c,_0x5a986c),_0x56af9f=Math['floor'](_0x5a986c/0x2);_0x833341['drawPolyArc'](_0x56af9f,_0x56af9f,_0x56af9f,0x168,_0x3b81a5,0x0,0x1,0x0),_0x833341[_0x1e0431(0x41f)](_0x56af9f-0x1,_0x56af9f-0x1,0x2,0x2,_0x3b81a5),_0x833341['_customModified']=![];if(ImageManager[_0x1e0431(0x277)])console[_0x1e0431(0x31a)]('lightorbs');return this[_0x1e0431(0x435)]=this[_0x1e0431(0x435)]||[],this[_0x1e0431(0x435)]['push'](_0x833341),_0x833341;},ImageManager[_0x502049(0x454)]=function(){const _0x3c3b29=_0x502049;if(this['_cached_WeatherEffects_DarkOrbs']&&this['_cached_WeatherEffects_DarkOrbs'][_0x3c3b29(0x19b)]>=ImageManager[_0x3c3b29(0x4e6)]){const _0x258121=this['_cached_WeatherEffects_DarkOrbs'];return _0x258121[Math[_0x3c3b29(0x474)](Math['random']()*_0x258121['length'])];}const _0x2650b4=ColorManager[_0x3c3b29(0x4ab)],_0x358e64=_0x2650b4[Math[_0x3c3b29(0x474)](Math['random']()*_0x2650b4[_0x3c3b29(0x19b)])];let _0x3b7f46=Math[_0x3c3b29(0x592)](0x10)+0x10;if(_0x3b7f46%0x2!==0x0)_0x3b7f46+=0x1;const _0x56a4e4=new Bitmap(_0x3b7f46,_0x3b7f46),_0x3cbb8e=Math['floor'](_0x3b7f46/0x2);_0x56a4e4[_0x3c3b29(0x3d6)](_0x3cbb8e,_0x3cbb8e,_0x3cbb8e,0x168,_0x358e64,0x0,0x1,0x0),_0x56a4e4[_0x3c3b29(0x41f)](_0x3cbb8e-0x1,_0x3cbb8e-0x1,0x2,0x2,_0x358e64),_0x56a4e4['_customModified']=![];if(ImageManager[_0x3c3b29(0x277)])console[_0x3c3b29(0x31a)](_0x3c3b29(0x240));return this[_0x3c3b29(0x407)]=this[_0x3c3b29(0x407)]||[],this[_0x3c3b29(0x407)]['push'](_0x56a4e4),_0x56a4e4;},ImageManager[_0x502049(0x553)]=function(){const _0x1659b9=_0x502049;if(this[_0x1659b9(0x52b)]&&this[_0x1659b9(0x52b)][_0x1659b9(0x19b)]>=ImageManager[_0x1659b9(0x4e6)]){const _0x339c19=this[_0x1659b9(0x52b)];return _0x339c19[Math[_0x1659b9(0x474)](Math['random']()*_0x339c19['length'])];}const _0x1d9421=ColorManager['WEATHER_FROST_COLORS'],_0x3f2353=1.3;let _0x429945=ColorManager[_0x1659b9(0x1b5)](_0x1d9421[Math[_0x1659b9(0x474)](Math[_0x1659b9(0x221)]()*_0x1d9421[_0x1659b9(0x19b)])],_0x3f2353),_0xf19b90=ColorManager['adjustHexColor'](_0x1d9421[Math[_0x1659b9(0x474)](Math[_0x1659b9(0x221)]()*_0x1d9421[_0x1659b9(0x19b)])],_0x3f2353),_0x462b7b=ColorManager[_0x1659b9(0x1b5)](_0x1d9421[Math[_0x1659b9(0x474)](Math['random']()*_0x1d9421[_0x1659b9(0x19b)])],_0x3f2353);const _0x3263f0=new Bitmap(0x1f4,0x1f4);_0x3263f0['drawCloud'](0xfa,0x15e,0x4b,_0x429945,0x4,0x14),_0x3263f0[_0x1659b9(0x16a)](0xfa,0xfa,0x64,_0x462b7b,0x8,0x19),_0x3263f0[_0x1659b9(0x16a)](0xfa,0xfa,0x3c,_0xf19b90,0x4,0x14);const _0x1bb089=_0x3263f0[_0x1659b9(0x313)],_0x3f817f=_0x3263f0['height'],_0x158003=0x2;let _0x8f31e9=0x20;while(_0x8f31e9--){const _0x315a4d=Math[_0x1659b9(0x592)](_0x1bb089-_0x158003*0x2)+_0x158003,_0x26282e=Math[_0x1659b9(0x592)](_0x3f817f-_0x158003*0x2)+_0x158003;let _0x18ccab=_0x1d9421[Math[_0x1659b9(0x474)](Math[_0x1659b9(0x221)]()*_0x1d9421[_0x1659b9(0x19b)])];_0x18ccab=ColorManager['adjustHexColor'](_0x18ccab,_0x3f2353);const _0x1daae6=Math[_0x1659b9(0x592)](_0x158003)+0x1;_0x3263f0['paintOpacity']=Math[_0x1659b9(0x592)](0x40)+0xa0,_0x3263f0[_0x1659b9(0x432)](_0x315a4d,_0x26282e,_0x1daae6,_0x18ccab);}const _0x5ec9d4=_0x158003*0x3,_0x4d5935=_0x5ec9d4/0x2;_0x8f31e9=0x8;while(_0x8f31e9--){if(_0x1659b9(0x408)===_0x1659b9(0x408)){const _0x4acb23=Math[_0x1659b9(0x592)](_0x1bb089-_0x5ec9d4*0x2)+_0x5ec9d4,_0x3c1e8e=Math['randomInt'](_0x3f817f-_0x5ec9d4*0x2)+_0x5ec9d4;let _0x4fa1c4=_0x1d9421[Math[_0x1659b9(0x474)](Math['random']()*_0x1d9421['length'])];_0x4fa1c4=ColorManager['adjustHexColor'](_0x4fa1c4,_0x3f2353),_0x3263f0[_0x1659b9(0x34f)]=Math[_0x1659b9(0x592)](0x40)+0xa0,_0x3263f0[_0x1659b9(0x219)](_0x4acb23,_0x3c1e8e,_0x4fa1c4,_0x4fa1c4,0x4,_0x5ec9d4,_0x4d5935);}else{const _0x2392ef=_0x284b26[_0x1659b9(0x592)](_0x4d0529-_0xe8b8ec*0x2)+_0x125837,_0x3d3c41=_0xc2c908[_0x1659b9(0x592)](_0x4a0dae-_0x52371f*0x2)+_0x15fb4e,_0x23d07e=_0x182cbb[_0x1659b9(0x592)](_0x1e3190)+0x1;_0x4ea9ac[_0x1659b9(0x34f)]=_0x56d1f7['randomInt'](0x40)+0xc0,_0x1ceb5d['drawCircle'](_0x2392ef,_0x3d3c41,_0x23d07e,_0x1659b9(0x2ca));}}_0x3263f0[_0x1659b9(0x5e5)]=![];if(ImageManager[_0x1659b9(0x277)])console[_0x1659b9(0x31a)]('diamonddust');return this[_0x1659b9(0x52b)]=this[_0x1659b9(0x52b)]||[],this[_0x1659b9(0x52b)][_0x1659b9(0x4ac)](_0x3263f0),_0x3263f0;},ImageManager[_0x502049(0x327)]=function(){const _0x1cac7f=_0x502049;if(this[_0x1cac7f(0x16f)]&&this[_0x1cac7f(0x16f)][_0x1cac7f(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x27ead1=this['_cached_WeatherEffects_CrumblingCave'];return _0x27ead1[Math[_0x1cac7f(0x474)](Math[_0x1cac7f(0x221)]()*_0x27ead1['length'])];}const _0x25d2fa=ColorManager[_0x1cac7f(0x29f)],_0x530675=_0x25d2fa[Math[_0x1cac7f(0x474)](Math['random']()*_0x25d2fa[_0x1cac7f(0x19b)])],_0x3911d4=_0x25d2fa[Math[_0x1cac7f(0x474)](Math[_0x1cac7f(0x221)]()*_0x25d2fa[_0x1cac7f(0x19b)])],_0x531247=_0x25d2fa[Math[_0x1cac7f(0x474)](Math[_0x1cac7f(0x221)]()*_0x25d2fa[_0x1cac7f(0x19b)])],_0x485a20=new Bitmap(0x1f4,0x1f4);_0x485a20[_0x1cac7f(0x16a)](0xfa,0x15e,0x4b,_0x530675,0x4,0x14),_0x485a20[_0x1cac7f(0x16a)](0xfa,0xfa,0x64,_0x531247,0x8,0x19),_0x485a20[_0x1cac7f(0x16a)](0xfa,0xfa,0x3c,_0x3911d4,0x4,0x14);const _0x10ab0e=_0x485a20['width'],_0x486276=_0x485a20[_0x1cac7f(0x3e7)],_0x8698f0=0x4;let _0x5c0867=0x80;while(_0x5c0867--){const _0x175dc8=Math[_0x1cac7f(0x592)](_0x10ab0e-_0x8698f0*0x2)+_0x8698f0,_0x3aa5d9=Math['randomInt'](_0x486276-_0x8698f0*0x2)+_0x8698f0;let _0x3d712e=_0x25d2fa[Math[_0x1cac7f(0x474)](Math[_0x1cac7f(0x221)]()*_0x25d2fa[_0x1cac7f(0x19b)])];const _0x12a427=Math[_0x1cac7f(0x592)](_0x8698f0)+0x1;_0x485a20[_0x1cac7f(0x34f)]=Math['randomInt'](0x40)+0xa0,_0x485a20['drawCircle'](_0x175dc8,_0x3aa5d9,_0x12a427,_0x3d712e);}_0x485a20['_customModified']=![];if(ImageManager[_0x1cac7f(0x277)])console[_0x1cac7f(0x31a)](_0x1cac7f(0x40e));return this[_0x1cac7f(0x16f)]=this[_0x1cac7f(0x16f)]||[],this[_0x1cac7f(0x16f)][_0x1cac7f(0x4ac)](_0x485a20),_0x485a20;},ImageManager[_0x502049(0x54e)]=function(){const _0x285427=_0x502049;if(this['_cached_WeatherEffects_Aurora']&&this[_0x285427(0x5e4)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x5){const _0x573fc8=this[_0x285427(0x5e4)];return _0x573fc8[Math[_0x285427(0x474)](Math[_0x285427(0x221)]()*_0x573fc8['length'])];}const _0x2d386b=Math['randomInt'](0xc0)+0x40,_0x2e6084=Math[_0x285427(0x592)](0xc0)+0x40,_0x27320b=Math['randomInt'](0xc0)+0x40,_0x1a9e8b=_0x285427(0x519)[_0x285427(0x339)](_0x2d386b,_0x2e6084,_0x27320b),_0x3d4c6f='rgba(%1,\x20%2,\x20%3,\x201)'[_0x285427(0x339)](_0x2d386b,_0x2e6084,_0x27320b),_0x280287=new Bitmap(0x1f4,0x1f4),_0x41891f=_0x280287[_0x285427(0x313)],_0x2056f3=_0x280287['height'],_0x1a9e4f=Math[_0x285427(0x592)](0xf4240),_0x500dcb=Math[_0x285427(0x221)]()*0.03+0.02;for(let _0x1a435e=0x0;_0x1a435e<_0x2056f3;_0x1a435e++){if('qPIsq'!==_0x285427(0x232)){if(this[_0x285427(0x444)]&&this[_0x285427(0x444)][_0x285427(0x19b)]>=_0xba9f39[_0x285427(0x4e6)]){const _0x2e931d=this[_0x285427(0x444)];return _0x2e931d[_0x4dee87[_0x285427(0x474)](_0x3c854b[_0x285427(0x221)]()*_0x2e931d[_0x285427(0x19b)])];}let _0x56a995=_0x151a4e[_0x285427(0x5e9)];const _0xf6ecc9=_0x56a995[_0x228040['floor'](_0x424704[_0x285427(0x221)]()*_0x56a995[_0x285427(0x19b)])];_0x56a995=_0xa0f2bd['WEATHER_EARTH_COLORS'];const _0x3550b2=_0x56a995[_0x120a89[_0x285427(0x474)](_0x1618a2[_0x285427(0x221)]()*_0x56a995['length'])];_0x56a995=_0x1d1445[_0x285427(0x529)];const _0x59e806=_0x56a995[_0x569040[_0x285427(0x474)](_0x448baf['random']()*_0x56a995[_0x285427(0x19b)])],_0x412b23=new _0x400863(0x3e8,0x3e8);_0x412b23[_0x285427(0x16a)](0x1f4,0x258,0xaf,_0xf6ecc9,0x40,0x14),_0x412b23[_0x285427(0x16a)](0x1f4,0x1f4,0xc8,_0x59e806,0x40,0x19),_0x412b23['drawCloud'](0x1f4,0x1c2,0xa0,_0x3550b2,0x40,0x1e),_0x412b23[_0x285427(0x5e5)]=![];if(_0x489653[_0x285427(0x277)])_0x851e8f[_0x285427(0x31a)]('fumes');return this[_0x285427(0x444)]=this[_0x285427(0x444)]||[],this['_cached_WeatherEffects_Fumes'][_0x285427(0x4ac)](_0x412b23),_0x412b23;}else{const _0x2ea053=(_0x1a435e+_0x1a9e4f)*_0x500dcb;let _0x31ec68=_0x41891f-Math[_0x285427(0x474)](Math[_0x285427(0x239)](_0x2ea053)*0xa)-0x28;const _0x1e25b0=_0x1a435e;_0x280287[_0x285427(0x34f)]=(0x1-Math[_0x285427(0x549)](_0x1a435e-_0x2056f3/0x2)/(_0x2056f3/0x2))*0xc0,_0x280287[_0x285427(0x295)](_0x31ec68,_0x1e25b0,Math[_0x285427(0x592)](0x14)+0xa,0x1,_0x3d4c6f,_0x1a9e8b);let _0x722921=Math[_0x285427(0x1fd)](Math[_0x285427(0x524)]((_0x1a435e+_0x1a9e4f)*_0x500dcb)*0x5)+0xa;_0x31ec68-=_0x722921,_0x280287['gradientFillRect'](_0x31ec68,_0x1e25b0,_0x722921,0x1,_0x3d4c6f,_0x3d4c6f),_0x722921=Math[_0x285427(0x1fd)](Math[_0x285427(0x239)]((_0x1a435e+_0x1a9e4f)*_0x500dcb)*0x3c)+0xa0,_0x31ec68-=_0x722921;const _0x25bcce=Math[_0x285427(0x592)](0x3c);_0x31ec68+=_0x25bcce,_0x280287[_0x285427(0x295)](_0x31ec68,_0x1e25b0,_0x722921-_0x25bcce,0x1,_0x1a9e8b,_0x3d4c6f);}}_0x280287['_customModified']=![];if(ImageManager[_0x285427(0x277)])console[_0x285427(0x31a)](_0x285427(0x58a));return this[_0x285427(0x5e4)]=this['_cached_WeatherEffects_Aurora']||[],this[_0x285427(0x5e4)][_0x285427(0x4ac)](_0x280287),_0x280287;},ImageManager[_0x502049(0x1f1)]=function(){const _0x136a30=_0x502049;if(this[_0x136a30(0x207)]&&this['_cached_WeatherEffects_ShootingStars'][_0x136a30(0x19b)]>=ImageManager[_0x136a30(0x4e6)]*0x3){if(_0x136a30(0x30b)!==_0x136a30(0x30a)){const _0x18fc84=this['_cached_WeatherEffects_ShootingStars'];return _0x18fc84[Math[_0x136a30(0x474)](Math[_0x136a30(0x221)]()*_0x18fc84['length'])];}else{if(this[_0x136a30(0x342)]&&this[_0x136a30(0x342)][_0x136a30(0x19b)]>=_0x42ef8c[_0x136a30(0x4e6)]){const _0x42b71d=this['_cached_WeatherEffects_CherryBlossoms'];return _0x42b71d[_0xb2e06e[_0x136a30(0x474)](_0x431d92[_0x136a30(0x221)]()*_0x42b71d[_0x136a30(0x19b)])];}const _0x18a9d5=_0xdf695c[_0x136a30(0x380)],_0x397e49=_0x1badff[_0x136a30(0x39a)],_0x5aed81=_0x5ce9f3['WEATHER_SAKURA3_COLORS'],_0x9c0cc0=_0x18a9d5[_0x4e2ad0[_0x136a30(0x474)](_0x331eba[_0x136a30(0x221)]()*_0x18a9d5[_0x136a30(0x19b)])],_0x1e1140=_0x397e49[_0x1588dc[_0x136a30(0x474)](_0x276f6d['random']()*_0x397e49[_0x136a30(0x19b)])],_0x4b978e=_0x5aed81[_0x3fa7e7[_0x136a30(0x474)](_0x17e7a5[_0x136a30(0x221)]()*_0x5aed81['length'])],_0x1b610e=new _0x27219b(0x34,0x23);_0x1b610e[_0x136a30(0x340)](_0x9c0cc0,_0x1e1140,_0x4b978e),_0x1b610e[_0x136a30(0x5e5)]=![];if(_0x285ffc[_0x136a30(0x277)])_0x3877b9[_0x136a30(0x31a)](_0x136a30(0x4da));return this[_0x136a30(0x342)]=this[_0x136a30(0x342)]||[],this[_0x136a30(0x342)][_0x136a30(0x4ac)](_0x1b610e),_0x1b610e;}}const _0x2e85f5=Math[_0x136a30(0x592)](0x80)+0x80,_0x542907=Math[_0x136a30(0x592)](0x80)+0x80,_0x190b3a=Math[_0x136a30(0x592)](0x80)+0x80,_0x244c80=_0x136a30(0x519)[_0x136a30(0x339)](_0x2e85f5,_0x542907,_0x190b3a),_0x16a3b1=_0x136a30(0x2eb)[_0x136a30(0x339)](_0x2e85f5,_0x542907,_0x190b3a),_0x59b5ce=Math['randomInt'](0x32)+0x32,_0x79e159=0x4,_0x1ed98f=new Bitmap(_0x59b5ce*0x2,_0x79e159);_0x1ed98f[_0x136a30(0x295)](0x0,0x0,_0x59b5ce,_0x79e159,_0x244c80,_0x16a3b1),_0x1ed98f[_0x136a30(0x5e5)]=![];if(ImageManager[_0x136a30(0x277)])console['log']('shootingstars');return this['_cached_WeatherEffects_ShootingStars']=this[_0x136a30(0x207)]||[],this[_0x136a30(0x207)][_0x136a30(0x4ac)](_0x1ed98f),_0x1ed98f;},ImageManager['weatherEffectsSparkle']=function(){const _0x16d408=_0x502049;if(this[_0x16d408(0x1ed)])return this[_0x16d408(0x1ed)];const _0x5e54cc=0x20,_0x18ef48=new Bitmap(_0x5e54cc,_0x5e54cc),_0xd86058=_0x16d408(0x30f);_0x18ef48[_0x16d408(0x219)](_0x5e54cc/0x2,_0x5e54cc/0x2,_0xd86058,_0xd86058,0x4,_0x5e54cc/0x2,_0x5e54cc/0x8),_0x18ef48[_0x16d408(0x5e5)]=![];if(ImageManager[_0x16d408(0x277)])console[_0x16d408(0x31a)](_0x16d408(0x316));return this[_0x16d408(0x1ed)]=_0x18ef48,_0x18ef48;},ImageManager[_0x502049(0x3a0)]=function(){const _0x44de68=_0x502049;if(this[_0x44de68(0x20d)]&&this['_cached_WeatherEffects_AcidRain'][_0x44de68(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x552ae6=this[_0x44de68(0x20d)];return _0x552ae6[Math[_0x44de68(0x474)](Math['random']()*_0x552ae6['length'])];}const _0x59ac4c=new Bitmap(0x1f4,0x1f4),_0x1bb8cc='rgba(128,255,128,0)',_0x31b90f='rgba(128,255,128,1)',_0x26b9f3=_0x59ac4c[_0x44de68(0x313)],_0x2ed7bf=_0x59ac4c[_0x44de68(0x3e7)],_0x4e7f71=0x3c,_0x36057b=_0x4e7f71/0x2,_0x4bd7d8=0x2;let _0x41d537=0x10;while(_0x41d537--){const _0x3b981c=Math['randomInt'](_0x26b9f3-_0x4e7f71)+_0x4e7f71,_0x582b78=Math[_0x44de68(0x592)](_0x2ed7bf-_0x4bd7d8)+_0x4bd7d8;_0x59ac4c[_0x44de68(0x34f)]=Math[_0x44de68(0x592)](0x40)+0xc0,_0x59ac4c[_0x44de68(0x295)](_0x3b981c,_0x582b78,_0x36057b,0x2,_0x1bb8cc,_0x31b90f),_0x59ac4c[_0x44de68(0x41f)](_0x3b981c+_0x36057b,_0x582b78,_0x36057b,0x2,_0x31b90f);}_0x59ac4c[_0x44de68(0x5e5)]=![];if(ImageManager[_0x44de68(0x277)])console[_0x44de68(0x31a)](_0x44de68(0x1a8));return this[_0x44de68(0x20d)]=this[_0x44de68(0x20d)]||[],this[_0x44de68(0x20d)][_0x44de68(0x4ac)](_0x59ac4c),_0x59ac4c;},ImageManager[_0x502049(0x4f8)]=function(){const _0x4dfa46=_0x502049;if(this[_0x4dfa46(0x270)]&&this['_cached_WeatherEffects_BloodRain'][_0x4dfa46(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x22ab3f=this['_cached_WeatherEffects_BloodRain'];return _0x22ab3f[Math['floor'](Math[_0x4dfa46(0x221)]()*_0x22ab3f[_0x4dfa46(0x19b)])];}const _0x136501=new Bitmap(0x1f4,0x1f4),_0x4dcf88=_0x4dfa46(0x23e),_0x475ade='rgba(255,64,64,1)',_0x52f91d=_0x136501[_0x4dfa46(0x313)],_0x3b33ee=_0x136501['height'],_0x59f194=0x64,_0x5d4594=_0x59f194/0x2,_0x202b1e=0x3;let _0x3b51e0=0x10;while(_0x3b51e0--){const _0xe38800=Math[_0x4dfa46(0x592)](_0x52f91d-_0x59f194)+_0x59f194,_0x4a00a7=Math[_0x4dfa46(0x592)](_0x3b33ee-_0x202b1e)+_0x202b1e;_0x136501[_0x4dfa46(0x34f)]=Math[_0x4dfa46(0x592)](0x40)+0xc0,_0x136501['gradientFillRect'](_0xe38800,_0x4a00a7,_0x5d4594,0x2,_0x4dcf88,_0x475ade),_0x136501['fillRect'](_0xe38800+_0x5d4594,_0x4a00a7,_0x5d4594,0x2,_0x475ade);}_0x136501[_0x4dfa46(0x5e5)]=![];if(ImageManager[_0x4dfa46(0x277)])console[_0x4dfa46(0x31a)](_0x4dfa46(0x203));return this[_0x4dfa46(0x270)]=this['_cached_WeatherEffects_BloodRain']||[],this['_cached_WeatherEffects_BloodRain'][_0x4dfa46(0x4ac)](_0x136501),_0x136501;},ImageManager[_0x502049(0x533)]=function(){const _0x5eccd3=_0x502049;if(this[_0x5eccd3(0x3a5)]&&ColorManager[_0x5eccd3(0x463)]['length']<=0x0){const _0x32258e=this[_0x5eccd3(0x3a5)];return _0x32258e[Math[_0x5eccd3(0x474)](Math['random']()*_0x32258e[_0x5eccd3(0x19b)])];}this[_0x5eccd3(0x3a5)]=this['_cached_WeatherEffects_Confetti']||[];const _0x3b6572=ColorManager[_0x5eccd3(0x40d)]['pop'](),_0x2558a2=_0x5eccd3(0x370);{if('QVegV'!=='QVegV'){const _0x2becbe=this[_0x5eccd3(0x482)];return _0x2becbe[_0x3f3405[_0x5eccd3(0x474)](_0x4cd6a2['random']()*_0x2becbe[_0x5eccd3(0x19b)])];}else{const _0x1b0dfb=0x8,_0x4a1823=new Bitmap(_0x1b0dfb*0x2,_0x1b0dfb*0x2);_0x4a1823[_0x5eccd3(0x432)](_0x1b0dfb,_0x1b0dfb,_0x1b0dfb,_0x2558a2),_0x4a1823[_0x5eccd3(0x432)](_0x1b0dfb,_0x1b0dfb,_0x1b0dfb-0x1,_0x3b6572),_0x4a1823[_0x5eccd3(0x5e5)]=![],this[_0x5eccd3(0x3a5)][_0x5eccd3(0x4ac)](_0x4a1823);}}{const _0x43b198=new Bitmap(0x10,0x8);_0x43b198[_0x5eccd3(0x41f)](0x0,0x0,0x10,0x8,_0x2558a2),_0x43b198['fillRect'](0x1,0x1,0xe,0x6,_0x3b6572),_0x43b198['_customModified']=![],this[_0x5eccd3(0x3a5)][_0x5eccd3(0x4ac)](_0x43b198);}const _0x1daf01=new Bitmap(0x10,0x10);_0x1daf01[_0x5eccd3(0x219)](0x8,0x8,_0x2558a2,_0x2558a2,0x5,0x8,0x4),_0x1daf01[_0x5eccd3(0x219)](0x8,0x8,_0x3b6572,_0x3b6572,0x5,0x7,0x3),_0x1daf01[_0x5eccd3(0x5e5)]=![];if(ImageManager[_0x5eccd3(0x277)])console[_0x5eccd3(0x31a)](_0x5eccd3(0x2ff));return this[_0x5eccd3(0x3a5)][_0x5eccd3(0x4ac)](_0x1daf01),_0x1daf01;},ImageManager[_0x502049(0x4b7)]=function(){const _0x817c79=_0x502049;if(this[_0x817c79(0x5b3)]&&ColorManager[_0x817c79(0x190)][_0x817c79(0x19b)]<=0x0){if(_0x817c79(0x172)!=='WvYMJ'){const _0x52b13c=this['_cached_WeatherEffects_SunBeam'];return _0x52b13c[Math[_0x817c79(0x474)](Math[_0x817c79(0x221)]()*_0x52b13c['length'])];}else{const _0x1300bc=this['context'];_0x1300bc['save'](),_0x1300bc[_0x817c79(0x1eb)]=_0x817c79(0x4e7),_0x1300bc[_0x817c79(0x39d)](),_0x1300bc[_0x817c79(0x4dd)](_0x267a55,_0x543a53,_0x5f3216,0x0,0x2*_0x34d204['PI'],![]),_0x1300bc['fill'](),_0x1300bc[_0x817c79(0x36f)](),this[_0x817c79(0x267)][_0x817c79(0x48f)]();}}const _0x4229ea=ColorManager[_0x817c79(0x190)][_0x817c79(0x442)](),_0x1f70b6=new Bitmap(0x3e8,0x3e8),_0x2320a9=_0x1f70b6[_0x817c79(0x313)]/0x2;return _0x1f70b6[_0x817c79(0x3d6)](_0x2320a9,_0x2320a9,_0x2320a9,0x168,_0x4229ea,0x0,0x1,0x0),_0x1f70b6[_0x817c79(0x5e5)]=![],this['_cached_WeatherEffects_SunBeam']=this[_0x817c79(0x5b3)]||[],this[_0x817c79(0x5b3)][_0x817c79(0x4ac)](_0x1f70b6),_0x1f70b6;},ImageManager[_0x502049(0x27a)]=function(){const _0xd5276b=_0x502049;if(this[_0xd5276b(0x2ed)]&&ColorManager[_0xd5276b(0x308)][_0xd5276b(0x19b)]<=0x0){if(_0xd5276b(0x1fb)!=='FoOUx'){const _0x43d2f1=this[_0xd5276b(0x2ed)];return _0x43d2f1[Math[_0xd5276b(0x474)](Math[_0xd5276b(0x221)]()*_0x43d2f1[_0xd5276b(0x19b)])];}else{const _0x4f6687=this['_cached_WeatherEffects_DarkOrbs'];return _0x4f6687[_0x237047[_0xd5276b(0x474)](_0x2ffd0a[_0xd5276b(0x221)]()*_0x4f6687[_0xd5276b(0x19b)])];}}const _0x2647df=ColorManager[_0xd5276b(0x308)][_0xd5276b(0x442)](),_0x596a72=new Bitmap(0x3e8,0x3e8),_0x52f769=_0x596a72['width']/0x2;return _0x596a72['drawPolyArc'](_0x52f769,_0x52f769,_0x52f769,0x168,_0x2647df,0x0,0x1,0x0),_0x596a72[_0xd5276b(0x5e5)]=![],this[_0xd5276b(0x2ed)]=this[_0xd5276b(0x2ed)]||[],this[_0xd5276b(0x2ed)][_0xd5276b(0x4ac)](_0x596a72),_0x596a72;},ImageManager[_0x502049(0x362)]=function(){const _0x1b4b63=_0x502049;if(this[_0x1b4b63(0x50b)]&&ColorManager[_0x1b4b63(0x27f)][_0x1b4b63(0x19b)]<=0x0){const _0x28500b=this[_0x1b4b63(0x50b)];return _0x28500b[Math[_0x1b4b63(0x474)](Math[_0x1b4b63(0x221)]()*_0x28500b['length'])];}let _0x11704d=ColorManager['WEATHER_ARCTIC_BEAM_COLORS']['pop']();_0x11704d=ColorManager['adjustHexColor'](_0x11704d,1.2);const _0x5193d3=new Bitmap(0x3e8,0x3e8),_0x184cff=_0x5193d3[_0x1b4b63(0x313)]/0x2;return _0x5193d3[_0x1b4b63(0x3d6)](_0x184cff,_0x184cff,_0x184cff,0x168,_0x11704d,0x0,0x1,0x0),_0x5193d3[_0x1b4b63(0x5e5)]=![],this[_0x1b4b63(0x50b)]=this['_cached_WeatherEffects_ArcticBeams']||[],this[_0x1b4b63(0x50b)]['push'](_0x5193d3),_0x5193d3;},ImageManager[_0x502049(0x248)]=function(){const _0x265316=_0x502049;if(this[_0x265316(0x434)]&&this[_0x265316(0x434)][_0x265316(0x19b)]>=ImageManager[_0x265316(0x4e6)]){const _0x354246=this[_0x265316(0x434)];return _0x354246[Math[_0x265316(0x474)](Math[_0x265316(0x221)]()*_0x354246[_0x265316(0x19b)])];}const _0x28f453=Math[_0x265316(0x574)]($dataSystem[_0x265316(0x33a)][_0x265316(0x5c3)],$dataSystem[_0x265316(0x33a)][_0x265316(0x416)])||0x1,_0x545df8=Math[_0x265316(0x4fd)](_0x28f453*_0x28f453+_0x28f453*_0x28f453),_0x297b91=Math[_0x265316(0x592)](_0x545df8*0x1/0x3)+_0x545df8*0x2/0x3,_0x298434=Math[_0x265316(0x592)](0xc8)+0x64,_0x2a9dce=new Bitmap(_0x297b91,_0x298434*0x2);_0x2a9dce[_0x265316(0x41f)](0x0,0x0,_0x297b91,_0x297b91,_0x265316(0x370));const _0x510702=_0x2a9dce['width']/0x2,_0x55372f=_0x2a9dce[_0x265316(0x3e7)],_0x172ab6=_0x510702-_0x298434,_0x45f847=_0x55372f/0x2;let _0x196ff3=Math['randomInt'](0xa)+0x6;const _0x34880c=_0x172ab6/_0x196ff3;for(let _0x3fd30=0x0;_0x3fd30<_0x196ff3;_0x3fd30++){if(Math[_0x265316(0x221)]()<0.4-_0x3fd30*0.04)continue;let _0xa1fbfe=Math[_0x265316(0x592)](_0x298434*(_0x3fd30*0.75)/_0x196ff3)+_0x298434*0x1/_0x196ff3;const _0x3ac6bf=_0x510702+_0x3fd30*_0x34880c;_0x2a9dce[_0x265316(0x34f)]=Math[_0x265316(0x592)](0x40)+0xc0,_0x2a9dce[_0x265316(0x576)](_0x3ac6bf,_0x45f847,_0xa1fbfe);}const _0x49837b=_0x297b91-_0x298434;_0x2a9dce[_0x265316(0x34f)]=Math[_0x265316(0x592)](0x10)+0x10,_0x2a9dce[_0x265316(0x3d4)](_0x49837b,_0x45f847,_0x298434),_0x2a9dce['_customModified']=![];if(ImageManager[_0x265316(0x277)])console[_0x265316(0x31a)]('lensflare');return this[_0x265316(0x434)]=this[_0x265316(0x434)]||[],this[_0x265316(0x434)][_0x265316(0x4ac)](_0x2a9dce),_0x2a9dce;},ImageManager[_0x502049(0x3fe)]=function(){const _0x4eef6b=_0x502049;if(this[_0x4eef6b(0x2e9)]&&ColorManager['WEATHER_MOON_BEAM_COLORS'][_0x4eef6b(0x19b)]<=0x0){if('sAuYe'==='pQBIH')_0x43a0e7[_0x4eef6b(0x3b3)](_0x1e5e4f,_0x1db11a),_0x2b8bc2['type']=_0x4eef6b(0x31c),_0xc8254f[_0x4eef6b(0x329)][_0x4eef6b(0x417)](_0x1f3965);else{const _0x3a344c=this[_0x4eef6b(0x2e9)];return _0x3a344c[Math[_0x4eef6b(0x474)](Math['random']()*_0x3a344c[_0x4eef6b(0x19b)])];}}let _0x1b3aa4=ColorManager[_0x4eef6b(0x587)][_0x4eef6b(0x442)]();_0x1b3aa4=ColorManager[_0x4eef6b(0x1b5)](_0x1b3aa4,1.2);const _0x7a785e=new Bitmap(0x3e8,0x3e8),_0x55c920=_0x7a785e[_0x4eef6b(0x313)]/0x2;return _0x7a785e[_0x4eef6b(0x3d6)](_0x55c920,_0x55c920,_0x55c920,0x168,_0x1b3aa4,0x0,0x1,0x0),_0x7a785e[_0x4eef6b(0x5e5)]=![],this[_0x4eef6b(0x2e9)]=this[_0x4eef6b(0x2e9)]||[],this[_0x4eef6b(0x2e9)][_0x4eef6b(0x4ac)](_0x7a785e),_0x7a785e;},ImageManager[_0x502049(0x443)]=function(){const _0xcb188d=_0x502049;if(this[_0xcb188d(0x428)]&&ColorManager[_0xcb188d(0x1ee)][_0xcb188d(0x19b)]<=0x0){if(_0xcb188d(0x568)!==_0xcb188d(0x26f)){const _0x2db264=this[_0xcb188d(0x428)];return _0x2db264[Math[_0xcb188d(0x474)](Math['random']()*_0x2db264[_0xcb188d(0x19b)])];}else _0x43b15b['WeatherEffects']['Game_Screen_clearWeather'][_0xcb188d(0x24b)](this),this[_0xcb188d(0x199)]();}const _0x4a396a=ColorManager[_0xcb188d(0x1ee)][_0xcb188d(0x442)](),_0x2f73c1=new Bitmap(0x3e8,0x3e8),_0x50731e=_0x2f73c1[_0xcb188d(0x313)]/0x2;return _0x2f73c1[_0xcb188d(0x3d6)](_0x50731e,_0x50731e,_0x50731e,0x168,_0x4a396a,0x0,0x1,0x0),_0x2f73c1[_0xcb188d(0x5e5)]=![],this[_0xcb188d(0x428)]=this['_cached_WeatherEffects_UvBeam']||[],this[_0xcb188d(0x428)][_0xcb188d(0x4ac)](_0x2f73c1),_0x2f73c1;},ImageManager['weatherEffectsRadioactiveBeams']=function(){const _0x215df8=_0x502049;if(this[_0x215df8(0x350)]&&ColorManager[_0x215df8(0x4aa)][_0x215df8(0x19b)]<=0x0){const _0x21aac7=this[_0x215df8(0x350)];return _0x21aac7[Math[_0x215df8(0x474)](Math[_0x215df8(0x221)]()*_0x21aac7[_0x215df8(0x19b)])];}const _0x56b6e1=ColorManager[_0x215df8(0x4aa)][_0x215df8(0x442)](),_0x4319f7=new Bitmap(0x3e8,0x3e8),_0x148c38=_0x4319f7[_0x215df8(0x313)]/0x2;return _0x4319f7[_0x215df8(0x3d6)](_0x148c38,_0x148c38,_0x148c38,0x168,_0x56b6e1,0x0,0x1,0x0),_0x4319f7[_0x215df8(0x5e5)]=![],this[_0x215df8(0x350)]=this['_cached_WeatherEffects_RadioactiveBeam']||[],this[_0x215df8(0x350)][_0x215df8(0x4ac)](_0x4319f7),_0x4319f7;},ImageManager['weatherEffectsHouseDust']=function(){const _0x140348=_0x502049;if(this[_0x140348(0x1b8)]&&this[_0x140348(0x1b8)][_0x140348(0x19b)]>=ImageManager[_0x140348(0x4e6)]){const _0x5bfe1f=this[_0x140348(0x1b8)];return _0x5bfe1f[Math[_0x140348(0x474)](Math[_0x140348(0x221)]()*_0x5bfe1f[_0x140348(0x19b)])];}const _0x581df5=new Bitmap(0x1f4,0x1f4),_0x22e5cb=_0x581df5[_0x140348(0x313)],_0x45a8b7=_0x581df5[_0x140348(0x3e7)],_0x2eb4be=ColorManager[_0x140348(0x529)][_0x140348(0x516)](),_0x208b49=1.5,_0x3671e5=0x1;let _0x47f0ed=0x20;while(_0x47f0ed--){const _0x18eb05=Math[_0x140348(0x592)](_0x22e5cb-_0x3671e5*0x2)+_0x3671e5,_0x140d85=Math[_0x140348(0x592)](_0x45a8b7-_0x3671e5*0x2)+_0x3671e5;let _0x35c645=_0x2eb4be[Math['floor'](Math[_0x140348(0x221)]()*_0x2eb4be['length'])];_0x35c645=ColorManager[_0x140348(0x1b5)](_0x35c645,_0x208b49);const _0x100b8b=Math[_0x140348(0x592)](_0x3671e5)+0x1;_0x581df5[_0x140348(0x34f)]=Math['randomInt'](0x40)+0xa0,_0x581df5[_0x140348(0x432)](_0x18eb05,_0x140d85,_0x100b8b,_0x35c645);}_0x581df5[_0x140348(0x5e5)]=![];if(ImageManager[_0x140348(0x277)])console[_0x140348(0x31a)](_0x140348(0x24d));return this[_0x140348(0x1b8)]=this[_0x140348(0x1b8)]||[],this[_0x140348(0x1b8)]['push'](_0x581df5),_0x581df5;},ImageManager[_0x502049(0x5e6)]=function(){const _0x231cda=_0x502049;if(this['_cached_WeatherEffects_FlameHaze']&&this[_0x231cda(0x403)][_0x231cda(0x19b)]>=ImageManager[_0x231cda(0x4e6)]){if('SbLZQ'==='Ehfry'){const _0x5097d5=[];for(var _0x4462a1=0x0;_0x4462a1<_0x586216[_0x231cda(0x19b)]-0x1;_0x4462a1++){var _0x44d367=_0x427530[_0x4462a1],_0x2006fd=_0x2866a4[_0x4462a1+0x1],_0x358456=(_0x44d367['y']+_0x2006fd['y'])/0x2,_0x3279fd=_0x358456+(_0x371fbf[_0x231cda(0x221)]()*0x2-0x1)*_0x55f126;_0x5097d5['push'](_0x44d367,{'x':(_0x44d367['x']+_0x2006fd['x'])/0x2,'y':_0x3279fd});}_0x5097d5['push'](_0x419f4f['pop']()),_0x420ed9=_0x5097d5,_0x2193fd/=_0x1a8e2b,_0x24afba/=0x2;}else{const _0x4a8ed9=this[_0x231cda(0x403)];return _0x4a8ed9[Math[_0x231cda(0x474)](Math['random']()*_0x4a8ed9[_0x231cda(0x19b)])];}}const _0x3ba853=ColorManager['WEATHER_FLAME_COLORS'][_0x231cda(0x516)](),_0x3eb126=_0x3ba853[Math[_0x231cda(0x474)](Math['random']()*_0x3ba853['length'])];_0x3ba853[_0x231cda(0x556)](_0x3eb126);const _0x1eb515=_0x3ba853[Math[_0x231cda(0x474)](Math[_0x231cda(0x221)]()*_0x3ba853[_0x231cda(0x19b)])];_0x3ba853[_0x231cda(0x556)](_0x1eb515);const _0x4dfe02=_0x3ba853[Math[_0x231cda(0x474)](Math[_0x231cda(0x221)]()*_0x3ba853[_0x231cda(0x19b)])];_0x3ba853[_0x231cda(0x556)](_0x4dfe02);const _0x2c974d=new Bitmap(0x3e8,0x3e8);_0x2c974d['drawCloud'](0x1f4,0x28a,0xaf,_0x4dfe02,0x10,0x14),_0x2c974d[_0x231cda(0x16a)](0x1f4,0x1f4,0xc8,_0x3eb126,0x40,0x19),_0x2c974d[_0x231cda(0x16a)](0x1f4,0x15e,0xa0,_0x1eb515,0x10,0x14),_0x2c974d[_0x231cda(0x5e5)]=![];if(ImageManager[_0x231cda(0x277)])console[_0x231cda(0x31a)](_0x231cda(0x2db));return this['_cached_WeatherEffects_FlameHaze']=this[_0x231cda(0x403)]||[],this[_0x231cda(0x403)][_0x231cda(0x4ac)](_0x2c974d),_0x2c974d;},ImageManager[_0x502049(0x3d5)]=function(){const _0x4e2df7=_0x502049;if(this[_0x4e2df7(0x364)]&&this[_0x4e2df7(0x364)]['length']>=ImageManager[_0x4e2df7(0x4e6)]*0x3){if(_0x4e2df7(0x314)!==_0x4e2df7(0x3ca)){const _0x229958=this[_0x4e2df7(0x364)];return _0x229958[Math['floor'](Math[_0x4e2df7(0x221)]()*_0x229958['length'])];}else _0x21a9e4[_0x4e2df7(0x3b3)](_0x2b64e7,_0x366650),_0x15d56d['type']=_0x4e2df7(0x58b),_0x3177b8[_0x4e2df7(0x329)][_0x4e2df7(0x417)](_0x3e7c6c);}const _0x402868=Math[_0x4e2df7(0x574)]($dataSystem['advanced']['screenWidth'],$dataSystem[_0x4e2df7(0x33a)]['screenHeight'])||0x1,_0x2227a0=new Bitmap(_0x402868,_0x402868),_0x140e69=_0x4e2df7(0x30f);_0x2227a0[_0x4e2df7(0x219)](_0x402868/0x2,_0x402868/0x2,_0x140e69,_0x140e69,0x4,0x10,0x4),_0x2227a0[_0x4e2df7(0x4a4)]['scale'](0.5,0.5),_0x2227a0[_0x4e2df7(0x4a4)][_0x4e2df7(0x1e4)](_0x402868,_0x402868/0x2),_0x2227a0[_0x4e2df7(0x1b3)](),_0x2227a0[_0x4e2df7(0x5e5)]=![];if(ImageManager[_0x4e2df7(0x277)])console['log']('spiderbolt');return this['_cached_WeatherEffects_Spiderbolt']=this[_0x4e2df7(0x364)]||[],this[_0x4e2df7(0x364)]['push'](_0x2227a0),_0x2227a0;},ImageManager[_0x502049(0x3c6)]=function(){const _0x426455=_0x502049;if(this[_0x426455(0x26d)]&&this['_cached_WeatherEffects_WaterDrop']['length']>=ImageManager[_0x426455(0x4e6)]*0x3){const _0xd4a846=this[_0x426455(0x26d)];return _0xd4a846[Math[_0x426455(0x474)](Math['random']()*_0xd4a846[_0x426455(0x19b)])];}const _0x599241=_0x426455(0x52c),_0x4fb752=_0x426455(0x48d);let _0x34a0f3=Math[_0x426455(0x592)](0x1e)+0x1e;if(_0x34a0f3%0x2!==0x0)_0x34a0f3+=0x1;const _0x14c999=0x2,_0x3ab446=new Bitmap(_0x34a0f3,_0x14c999);_0x3ab446[_0x426455(0x34f)]=Math[_0x426455(0x592)](0x40)+0xc0,_0x3ab446[_0x426455(0x295)](0x0,0x0,_0x34a0f3/0x2,_0x14c999,_0x599241,_0x4fb752),_0x3ab446[_0x426455(0x41f)](_0x34a0f3/0x2,0x0,_0x34a0f3/0x2,_0x14c999,_0x4fb752),_0x3ab446[_0x426455(0x5e5)]=![];if(ImageManager[_0x426455(0x277)])console[_0x426455(0x31a)](_0x426455(0x488));return this[_0x426455(0x26d)]=this['_cached_WeatherEffects_WaterDrop']||[],this[_0x426455(0x26d)][_0x426455(0x4ac)](_0x3ab446),_0x3ab446;},ImageManager[_0x502049(0x298)]=function(){const _0xd82a01=_0x502049;if(this['_cached_WeatherEffects_SoapBubbles']&&ColorManager[_0xd82a01(0x596)][_0xd82a01(0x19b)]<=0x0){if(_0xd82a01(0x2c4)===_0xd82a01(0x1e9)){const _0x2fc36d=this[_0xd82a01(0x292)],_0x48b93f=this['_wholeLifespan'],_0x493bea=this[_0xd82a01(0x5ca)]((_0x48b93f-_0x2fc36d)/_0x48b93f,_0x1bb6a5),_0x5053ea=this[_0xd82a01(0x5ca)]((_0x48b93f-_0x2fc36d+0x1)/_0x48b93f,_0x25cd30),_0x569e12=(_0x4e9a7e-_0xa78619*_0x493bea)/(0x1-_0x493bea);return _0x569e12+(_0x266e86-_0x569e12)*_0x5053ea;}else{const _0x262a19=this['_cached_WeatherEffects_SoapBubbles'];return _0x262a19[Math[_0xd82a01(0x474)](Math[_0xd82a01(0x221)]()*_0x262a19[_0xd82a01(0x19b)])];}}const _0x20b84d=ColorManager[_0xd82a01(0x596)][_0xd82a01(0x442)](),_0x1b7cac=new Bitmap(0x18,0x18),_0x34744d=0xc,_0x3713e5=_0x34744d/0x3;return _0x1b7cac['drawCircle'](_0x34744d,_0x34744d,_0x34744d,_0x20b84d),_0x1b7cac[_0xd82a01(0x4f0)](_0x34744d,_0x34744d,_0x34744d-0x2),_0x1b7cac['drawCircle'](_0x34744d+_0x3713e5,_0x34744d-_0x3713e5,_0x3713e5,_0xd82a01(0x30f)),_0x1b7cac['_customModified']=![],this[_0xd82a01(0x359)]=this[_0xd82a01(0x359)]||[],this[_0xd82a01(0x359)][_0xd82a01(0x4ac)](_0x1b7cac),_0x1b7cac;},ImageManager[_0x502049(0x182)]=function(){const _0x2f85cc=_0x502049;if(this[_0x2f85cc(0x393)]&&this[_0x2f85cc(0x393)][_0x2f85cc(0x19b)]>=ImageManager[_0x2f85cc(0x4e6)]){if('erUeJ'===_0x2f85cc(0x1dd)){const _0xb88394=this[_0x2f85cc(0x393)];return _0xb88394[Math[_0x2f85cc(0x474)](Math[_0x2f85cc(0x221)]()*_0xb88394[_0x2f85cc(0x19b)])];}else _0x1b9189[_0x2f85cc(0x3b3)](_0x417791,_0xf6aba1),_0x35072d['type']='medium_icons_4',_0x26e593[_0x2f85cc(0x329)]['applyPluginCmdSettings'](_0x5bcaff);}const _0xec6036=ColorManager['WEATHER_ASH_COLORS'],_0x3d5deb=_0xec6036[0x3],_0x3896df=_0xec6036[0x2],_0x18b7e6=_0xec6036[0x1],_0x2d15de=new Bitmap(0x1f4,0x1f4);_0x2d15de[_0x2f85cc(0x16a)](0xfa,0x15e,0x4b,_0x3d5deb,0x10,0x14),_0x2d15de[_0x2f85cc(0x16a)](0xfa,0xfa,0x64,_0x18b7e6,0x40,0x19),_0x2d15de[_0x2f85cc(0x16a)](0xfa,0xfa,0x3c,_0x3896df,0x10,0x14),_0x2d15de[_0x2f85cc(0x5e5)]=![];if(ImageManager[_0x2f85cc(0x277)])console[_0x2f85cc(0x31a)](_0x2f85cc(0x2c3));return this[_0x2f85cc(0x393)]=this[_0x2f85cc(0x393)]||[],this[_0x2f85cc(0x393)][_0x2f85cc(0x4ac)](_0x2d15de),_0x2d15de;},ImageManager['weatherEffectsSleet']=function(){const _0x5787f9=_0x502049;if(this[_0x5787f9(0x551)]&&this[_0x5787f9(0x551)][_0x5787f9(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x5787f9(0x281)!==_0x5787f9(0x281)){const _0x2bc86b=this['_cached_WeatherEffects_ShootingStars'];return _0x2bc86b[_0x5b954e[_0x5787f9(0x474)](_0x529e4a['random']()*_0x2bc86b['length'])];}else{const _0x2d2cab=this[_0x5787f9(0x551)];return _0x2d2cab[Math['floor'](Math[_0x5787f9(0x221)]()*_0x2d2cab[_0x5787f9(0x19b)])];}}const _0x1c51b9=ColorManager[_0x5787f9(0x49e)],_0x3a3c53=1.3;let _0xa6da61=ColorManager[_0x5787f9(0x1b5)](_0x1c51b9[Math[_0x5787f9(0x474)](Math[_0x5787f9(0x221)]()*_0x1c51b9[_0x5787f9(0x19b)])],_0x3a3c53),_0x5e52c7=ColorManager['adjustHexColor'](_0x1c51b9[Math[_0x5787f9(0x474)](Math[_0x5787f9(0x221)]()*_0x1c51b9['length'])],_0x3a3c53),_0x3d87d9=ColorManager['adjustHexColor'](_0x1c51b9[Math[_0x5787f9(0x474)](Math['random']()*_0x1c51b9[_0x5787f9(0x19b)])],_0x3a3c53);const _0x35d7f0=new Bitmap(0x1f4,0x1f4);_0x35d7f0[_0x5787f9(0x16a)](0xfa,0x15e,0x4b,_0xa6da61,0x4,0x14),_0x35d7f0[_0x5787f9(0x16a)](0xfa,0xfa,0x64,_0x3d87d9,0x8,0x19),_0x35d7f0[_0x5787f9(0x16a)](0xfa,0xfa,0x3c,_0x5e52c7,0x4,0x14);const _0x1a01af=_0x35d7f0['width'],_0x1450e8=_0x35d7f0[_0x5787f9(0x3e7)],_0xcf9a5a=0x4;let _0x40bbee=0x10;while(_0x40bbee--){if(_0x5787f9(0x222)===_0x5787f9(0x222)){const _0x1209db=Math['randomInt'](_0x1a01af-_0xcf9a5a*0x2)+_0xcf9a5a,_0x580a5e=Math[_0x5787f9(0x592)](_0x1450e8-_0xcf9a5a*0x2)+_0xcf9a5a;let _0x2b63f2=_0x1c51b9[Math[_0x5787f9(0x474)](Math[_0x5787f9(0x221)]()*_0x1c51b9['length'])];_0x2b63f2=ColorManager[_0x5787f9(0x1b5)](_0x2b63f2,_0x3a3c53),_0x35d7f0['paintOpacity']=Math[_0x5787f9(0x592)](0x40)+0xc0,_0x35d7f0[_0x5787f9(0x219)](_0x1209db,_0x580a5e,_0x2b63f2,_0x2b63f2,0x4,_0xcf9a5a,_0xcf9a5a/0x2);}else{const _0x5b7a49=this[_0x5787f9(0x531)];return _0x5b7a49[_0xc38ac6[_0x5787f9(0x474)](_0x2303f6[_0x5787f9(0x221)]()*_0x5b7a49[_0x5787f9(0x19b)])];}}_0x35d7f0['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x5787f9(0x413));return this[_0x5787f9(0x551)]=this[_0x5787f9(0x551)]||[],this[_0x5787f9(0x551)][_0x5787f9(0x4ac)](_0x35d7f0),_0x35d7f0;},ImageManager['weatherEffectsTempest']=function(){const _0x7e993f=_0x502049;if(this['_cached_WeatherEffects_Tempest']&&this[_0x7e993f(0x2b8)]['length']>=ImageManager[_0x7e993f(0x4e6)]){if(_0x7e993f(0x2c2)!==_0x7e993f(0x2a9)){const _0x39f128=this[_0x7e993f(0x2b8)];return _0x39f128[Math[_0x7e993f(0x474)](Math[_0x7e993f(0x221)]()*_0x39f128[_0x7e993f(0x19b)])];}else return this[_0x7e993f(0x595)]&&this[_0x7e993f(0x595)]instanceof _0x380e9e;}const _0x1f669b=Math[_0x7e993f(0x592)](0x20)+0x40,_0x5eff60=Math['randomInt'](0x20)+0x60,_0x33caa9=Math[_0x7e993f(0x592)](0x20)+0x80;let _0x386e01=ColorManager[_0x7e993f(0x40b)]([_0x1f669b,_0x1f669b,_0x1f669b]),_0x30c673=ColorManager[_0x7e993f(0x40b)]([_0x5eff60,_0x5eff60,_0x5eff60]),_0x32d6c2=ColorManager[_0x7e993f(0x40b)]([_0x33caa9,_0x33caa9,_0x33caa9]);const _0xbfbc80=new Bitmap(0x3e8,0x3e8);_0xbfbc80[_0x7e993f(0x16a)](0x1f4,0x28a,0xaf,_0x386e01,0x10,0x14),_0xbfbc80['drawCloud'](0x1f4,0x1f4,0xc8,_0x32d6c2,0x40,0x19),_0xbfbc80[_0x7e993f(0x16a)](0x1f4,0x15e,0xa0,_0x30c673,0x10,0x14),_0xbfbc80['_customModified']=![];if(ImageManager[_0x7e993f(0x277)])console[_0x7e993f(0x31a)](_0x7e993f(0x4c3));return this[_0x7e993f(0x2b8)]=this[_0x7e993f(0x2b8)]||[],this[_0x7e993f(0x2b8)]['push'](_0xbfbc80),_0xbfbc80;},ImageManager[_0x502049(0x3ef)]=function(){const _0x5bca34=_0x502049;if(this['_cached_WeatherEffects_GrassyGust']&&ColorManager['WEATHER_GRASSY_GUST_COLORS'][_0x5bca34(0x19b)]<=0x0){if(_0x5bca34(0x32c)!==_0x5bca34(0x1cd)){const _0x447391=this[_0x5bca34(0x4e0)];return _0x447391[Math[_0x5bca34(0x474)](Math[_0x5bca34(0x221)]()*_0x447391[_0x5bca34(0x19b)])];}else{const _0x60e06e=this[_0x5bca34(0x3a9)];return _0x60e06e[_0x4c2784[_0x5bca34(0x474)](_0x2c7054[_0x5bca34(0x221)]()*_0x60e06e['length'])];}}const _0x2644e8=ColorManager[_0x5bca34(0x50d)][_0x5bca34(0x442)](),_0x5bb892=ColorManager['adjustHexColor'](_0x2644e8,0.5),_0x2d3beb=0xc,_0x1f638f=0x4,_0x168bc9=new Bitmap(_0x2d3beb,_0x1f638f);_0x168bc9[_0x5bca34(0x41f)](0x0,0x0,_0x2d3beb,_0x1f638f/0x2,_0x2644e8),_0x168bc9[_0x5bca34(0x41f)](0x0,_0x1f638f/0x2,_0x2d3beb,_0x1f638f/0x2,_0x5bb892),_0x168bc9[_0x5bca34(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x5bca34(0x59c));return this['_cached_WeatherEffects_GrassyGust']=this[_0x5bca34(0x4e0)]||[],this[_0x5bca34(0x4e0)][_0x5bca34(0x4ac)](_0x168bc9),_0x168bc9;},ImageManager[_0x502049(0x264)]=function(){const _0x586dbd=_0x502049;if(this[_0x586dbd(0x337)]&&this['_cached_WeatherEffects_Xtreme'][_0x586dbd(0x19b)]>=ImageManager[_0x586dbd(0x4e6)]){if(_0x586dbd(0x405)!==_0x586dbd(0x405)){if(this['_cached_WeatherEffects_RadioactiveBeam']&&_0x1f1af8['WEATHER_RADIOACTIVE_COLORS'][_0x586dbd(0x19b)]<=0x0){const _0x405e46=this[_0x586dbd(0x350)];return _0x405e46[_0xfc307c[_0x586dbd(0x474)](_0x275144[_0x586dbd(0x221)]()*_0x405e46[_0x586dbd(0x19b)])];}const _0x5e6d1b=_0x21c3c1['WEATHER_RADIOACTIVE_COLORS']['pop'](),_0x39fa7b=new _0x58f77b(0x3e8,0x3e8),_0x7000c1=_0x39fa7b[_0x586dbd(0x313)]/0x2;return _0x39fa7b[_0x586dbd(0x3d6)](_0x7000c1,_0x7000c1,_0x7000c1,0x168,_0x5e6d1b,0x0,0x1,0x0),_0x39fa7b[_0x586dbd(0x5e5)]=![],this['_cached_WeatherEffects_RadioactiveBeam']=this[_0x586dbd(0x350)]||[],this[_0x586dbd(0x350)][_0x586dbd(0x4ac)](_0x39fa7b),_0x39fa7b;}else{const _0x2d4039=this['_cached_WeatherEffects_Xtreme'];return _0x2d4039[Math[_0x586dbd(0x474)](Math[_0x586dbd(0x221)]()*_0x2d4039['length'])];}}const _0x1f9c18=_0x586dbd(0x30f),_0x467163='#6dcff6',_0x2e3e6f=_0x586dbd(0x459),_0x952f=0x1f4,_0x38d8a7=new Bitmap(_0x952f,_0x952f);let _0x34363f=0x40;while(_0x34363f--){const _0x21ee25=Math[_0x586dbd(0x592)](0x32)+0xa,_0x452364=Math[_0x586dbd(0x592)](0x32)+0x1b8,_0x303699=Math[_0x586dbd(0x592)](0x1e0)+0xa,_0x286ebf=(_0x452364-_0x21ee25)/0x2,_0x12cd30=Math[_0x586dbd(0x592)](0x3)+0x1c,_0x3b6794=ColorManager[_0x586dbd(0x580)](_0x2e3e6f,0x0),_0x111a1f=ColorManager['hexToRgba'](_0x2e3e6f,Math[_0x586dbd(0x221)]());_0x38d8a7[_0x586dbd(0x295)](_0x21ee25,_0x303699,Math['floor'](_0x286ebf),_0x12cd30,_0x3b6794,_0x111a1f),_0x38d8a7[_0x586dbd(0x295)](_0x21ee25+Math[_0x586dbd(0x474)](_0x286ebf),_0x303699,Math[_0x586dbd(0x1fd)](_0x286ebf),_0x12cd30,_0x111a1f,_0x3b6794);}_0x34363f=0x20;while(_0x34363f--){const _0x5af67f=Math[_0x586dbd(0x592)](0x32)+0x64,_0x347790=Math['randomInt'](0x32)+0x15e,_0xc7fdfe=Math[_0x586dbd(0x592)](0x1e0)+0xa,_0x5f49e7=(_0x347790-_0x5af67f)/0x2,_0x362a85=Math[_0x586dbd(0x592)](0x6)+0xa,_0xbaee14=ColorManager[_0x586dbd(0x580)](_0x467163,0x0),_0x15c976=ColorManager[_0x586dbd(0x580)](_0x467163,Math['random']());_0x38d8a7[_0x586dbd(0x295)](_0x5af67f,_0xc7fdfe,Math[_0x586dbd(0x474)](_0x5f49e7),_0x362a85,_0xbaee14,_0x15c976),_0x38d8a7[_0x586dbd(0x295)](_0x5af67f+Math[_0x586dbd(0x474)](_0x5f49e7),_0xc7fdfe,Math[_0x586dbd(0x1fd)](_0x5f49e7),_0x362a85,_0x15c976,_0xbaee14);}_0x34363f=0x10;while(_0x34363f--){const _0x4a9da7=Math[_0x586dbd(0x592)](0x32)+0xa,_0x31eb46=Math[_0x586dbd(0x592)](0x32)+0x1b8,_0x2b0fd9=Math[_0x586dbd(0x592)](0x1e0)+0xa,_0x2c5a38=(_0x31eb46-_0x4a9da7)/0x2,_0x44cbdf=Math['randomInt'](0x6)+0x5,_0x2ae557=ColorManager['hexToRgba'](_0x1f9c18,0x0),_0x31f045=ColorManager[_0x586dbd(0x580)](_0x1f9c18,0x1);_0x38d8a7[_0x586dbd(0x295)](_0x4a9da7,_0x2b0fd9,Math[_0x586dbd(0x474)](_0x2c5a38),_0x44cbdf,_0x2ae557,_0x31f045),_0x38d8a7[_0x586dbd(0x295)](_0x4a9da7+Math[_0x586dbd(0x474)](_0x2c5a38),_0x2b0fd9,Math[_0x586dbd(0x1fd)](_0x2c5a38),_0x44cbdf,_0x31f045,_0x2ae557);}const _0x110aff=_0x586dbd(0x52c),_0x2ebdb0=_0x586dbd(0x48d),_0x29ef69=0xc8,_0x160999=_0x29ef69/0x2,_0x438151=0x6;_0x34363f=0x10;while(_0x34363f--){const _0x14494c=Math[_0x586dbd(0x592)](_0x952f-_0x29ef69)+_0x29ef69,_0x3ad5a4=Math[_0x586dbd(0x592)](_0x952f-_0x438151)+_0x438151;_0x38d8a7['paintOpacity']=Math['randomInt'](0x40)+0xc0,_0x38d8a7[_0x586dbd(0x295)](_0x14494c,_0x3ad5a4,_0x160999,0x2,_0x110aff,_0x2ebdb0),_0x38d8a7[_0x586dbd(0x41f)](_0x14494c+_0x160999,_0x3ad5a4,_0x160999,0x2,_0x2ebdb0);}_0x38d8a7['_customModified']=![];if(ImageManager[_0x586dbd(0x277)])console[_0x586dbd(0x31a)](_0x586dbd(0x1e8));return this[_0x586dbd(0x337)]=this[_0x586dbd(0x337)]||[],this[_0x586dbd(0x337)][_0x586dbd(0x4ac)](_0x38d8a7),_0x38d8a7;},ImageManager[_0x502049(0x5dc)]=function(){const _0x8f246d=_0x502049;if(this[_0x8f246d(0x28a)]&&ColorManager[_0x8f246d(0x56f)]['length']<=0x0){if('AhQBa'===_0x8f246d(0x242))_0x43b26f[_0x8f246d(0x3b3)](_0x1eb6b0,_0x3a276a),_0x231569[_0x8f246d(0x3bc)]=_0x8f246d(0x4d4),_0x4d0d8b['WeatherEffects'][_0x8f246d(0x417)](_0x4461eb);else{const _0x3c7cf4=this[_0x8f246d(0x28a)];return _0x3c7cf4[Math[_0x8f246d(0x474)](Math[_0x8f246d(0x221)]()*_0x3c7cf4[_0x8f246d(0x19b)])];}}const _0x3ca29b=ColorManager[_0x8f246d(0x56f)]['pop'](),_0xe970ff=ColorManager['adjustHexColor'](_0x3ca29b,0.8),_0xe0eed9=[_0x3ca29b,_0xe970ff],_0x309dc4=new Bitmap(0x64,0x24);_0x309dc4[_0x8f246d(0x48e)](_0xe0eed9),_0x309dc4[_0x8f246d(0x5e5)]=![];if(ImageManager[_0x8f246d(0x277)])console[_0x8f246d(0x31a)](_0x8f246d(0x17c));return this[_0x8f246d(0x28a)]=this['_cached_WeatherEffects_Balloons']||[],this[_0x8f246d(0x28a)][_0x8f246d(0x4ac)](_0x309dc4),_0x309dc4;},ImageManager[_0x502049(0x48c)]=function(){const _0x34b54b=_0x502049;if(this[_0x34b54b(0x49a)]&&this[_0x34b54b(0x49a)][_0x34b54b(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x2167f4=this['_cached_WeatherEffects_Fireworks'];return _0x2167f4[Math['floor'](Math[_0x34b54b(0x221)]()*_0x2167f4['length'])];}const _0xc30197='#ff0000';let _0x2c160b=Math['randomInt'](0x32)+0x64;if(_0x2c160b%0x2!==0x0)_0x2c160b+=0x1;const _0x27e7f6=new Bitmap(_0x2c160b,0x8);_0x27e7f6[_0x34b54b(0x2fd)](_0xc30197),_0x27e7f6[_0x34b54b(0x5e5)]=![];if(ImageManager[_0x34b54b(0x277)])console[_0x34b54b(0x31a)](_0x34b54b(0x4d9));return this[_0x34b54b(0x49a)]=this[_0x34b54b(0x49a)]||[],this[_0x34b54b(0x49a)][_0x34b54b(0x4ac)](_0x27e7f6),_0x27e7f6;},ImageManager[_0x502049(0x1d3)]=function(){const _0x1f5283=_0x502049;if(this[_0x1f5283(0x234)]&&this[_0x1f5283(0x234)][_0x1f5283(0x19b)]>=ImageManager[_0x1f5283(0x4e6)]){if(_0x1f5283(0x470)===_0x1f5283(0x470)){const _0x103c30=this[_0x1f5283(0x234)];return _0x103c30[Math[_0x1f5283(0x474)](Math[_0x1f5283(0x221)]()*_0x103c30[_0x1f5283(0x19b)])];}else{this[_0x1f5283(0x1bb)]=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)][_0x1f5283(0x3bc)]||_0x1f5283(0x4f4),this['_trajectoryLockedID']=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)][_0x1f5283(0x429)]||0x0,this[_0x1f5283(0x50e)]=this['data']()[_0x1f5283(0x4a6)][_0x1f5283(0x1f6)]||0x0,this[_0x1f5283(0x4fa)]=this['data']()['trajectory'][_0x1f5283(0x4b5)]||0x0,this['_speed']=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)][_0x1f5283(0x5c6)],this[_0x1f5283(0x241)]+=_0x5307be[_0x1f5283(0x329)][_0x1f5283(0x3bf)](this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['speedVariance']);if(this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['speedVariance']!==0x0){if(this[_0x1f5283(0x241)]===0x0)this[_0x1f5283(0x241)]=_0x599ce0['random']();}this[_0x1f5283(0x2f1)]=this[_0x1f5283(0x27b)]()['trajectory'][_0x1f5283(0x4ee)];const _0x18c84f=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['angleVariance'],_0x12605b=_0x5747a3[_0x1f5283(0x329)]['MakeVariance'](_0x18c84f);this['_baseAngle']=_0x403975[_0x1f5283(0x1fd)](this[_0x1f5283(0x2f1)]+_0x12605b),this[_0x1f5283(0x196)]=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['angleOffset'],this[_0x1f5283(0x2b3)]=this['data']()[_0x1f5283(0x4a6)][_0x1f5283(0x315)]??!![],this[_0x1f5283(0x2c8)]=this[_0x1f5283(0x27b)]()['trajectory']['angleArc']??0x0,this['_angleArcTotal']=0x0,this[_0x1f5283(0x5e8)]=_0x381e02['randomInt'](0xf4240),this[_0x1f5283(0x4be)]=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)][_0x1f5283(0x1ef)],this['_angleSwaySpeed']=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['angleSwaySpeed'],this[_0x1f5283(0x5b0)]=0x0,this[_0x1f5283(0x452)]=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['spinSpeed']||0x0;this[_0x1f5283(0x452)]!==0x0&&(this[_0x1f5283(0x5b0)]=_0x554692[_0x1f5283(0x592)](0x168));this[_0x1f5283(0x452)]+=_0xdcb586['WeatherEffects'][_0x1f5283(0x450)](this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)][_0x1f5283(0x56a)]||0x0);if(this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['reverseSpin']){if(_0x5077b6[_0x1f5283(0x221)]()<0.5)this[_0x1f5283(0x452)]*=-0x1;}this['_xSwayRng']=_0x2f738b[_0x1f5283(0x592)](0xf4240),this['_ySwayRng']=_0x2be78a[_0x1f5283(0x592)](0xf4240),this[_0x1f5283(0x1e3)]=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)][_0x1f5283(0x58d)],this['_xSwaySpeed']=this['data']()['trajectory'][_0x1f5283(0x387)],this[_0x1f5283(0x43e)]=this[_0x1f5283(0x27b)]()[_0x1f5283(0x4a6)]['ySwayRange'],this[_0x1f5283(0x29d)]=this['data']()[_0x1f5283(0x4a6)]['ySwaySpeed'];}}const _0x36d753='#ff0000',_0x1a84f7=new Bitmap(0xc8,0xc8);_0x1a84f7[_0x1f5283(0x244)](_0x36d753),_0x1a84f7[_0x1f5283(0x5e5)]=![];if(ImageManager[_0x1f5283(0x277)])console['log']('fireworksflower');return this[_0x1f5283(0x234)]=this[_0x1f5283(0x234)]||[],this[_0x1f5283(0x234)][_0x1f5283(0x4ac)](_0x1a84f7),_0x1a84f7;},ImageManager['weatherEffectsShadowBurst']=function(){const _0x3979be=_0x502049;if(this[_0x3979be(0x424)]&&ColorManager[_0x3979be(0x5a8)][_0x3979be(0x19b)]<=0x0){if(_0x3979be(0x1c2)!==_0x3979be(0x1c2))this[_0x3979be(0x441)]=0x0,this[_0x3979be(0x4f7)]['x']=0.5,this[_0x3979be(0x4f7)]['y']=0.5,this['_respawnDelay']=0x0;else{const _0x54eb17=this[_0x3979be(0x424)];return _0x54eb17[Math['floor'](Math['random']()*_0x54eb17['length'])];}}const _0x5b2aed=ColorManager['WEATHER_SHADOW_BURST_COLORS']['pop'](),_0x2ddc74=new Bitmap(0x3e8,0x3e8),_0xd0c37e=_0x2ddc74['width']/0x2;_0x2ddc74[_0x3979be(0x3d6)](_0xd0c37e,_0xd0c37e,_0xd0c37e,0x168,_0x5b2aed,0x0,0x1,0x0),_0x2ddc74['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3979be(0x31a)](_0x3979be(0x1f7));return this[_0x3979be(0x424)]=this['_cached_WeatherEffects_ShadowBurst']||[],this[_0x3979be(0x424)][_0x3979be(0x4ac)](_0x2ddc74),_0x2ddc74;},ImageManager[_0x502049(0x5db)]=function(){const _0x106a69=_0x502049;if(this[_0x106a69(0x5b1)]&&this[_0x106a69(0x5b1)][_0x106a69(0x19b)]>=ImageManager[_0x106a69(0x4e6)]){if(_0x106a69(0x187)!==_0x106a69(0x5ce)){const _0x3b90eb=this['_cached_WeatherEffects_CloudBurst'];return _0x3b90eb[Math[_0x106a69(0x474)](Math[_0x106a69(0x221)]()*_0x3b90eb[_0x106a69(0x19b)])];}else this[_0x106a69(0x3bc)]=_0x106a69(0x4d9),this['_lifespan']=_0x42d750['randomInt'](0x14)+0x50,this['_wholeLifespan']=this[_0x106a69(0x292)],this[_0x106a69(0x28b)]=_0x106a69(0x4d9),this[_0x106a69(0x30c)]={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this[_0x106a69(0x205)]=0x1,this[_0x106a69(0x21f)]=0x1,this[_0x106a69(0x5eb)]=0x0,this['opacity']=0xff,this[_0x106a69(0x1cf)]=0xff,this[_0x106a69(0x4bd)]=_0x106a69(0x173),this['_opacityFadeInTime']=0xa,this['_opacityFadeInTimeWhole']=0xa,this['_trajectoryType']=_0x106a69(0x4f4),this['_speed']=0.05,this[_0x106a69(0x2f1)]=0x10e,this[_0x106a69(0x196)]=_0x5a52d6[_0x106a69(0x592)](0x168),this[_0x106a69(0x2b3)]=![],this['_angleArc']=0x0,this[_0x106a69(0x1a6)]=0x0,this[_0x106a69(0x4be)]=0x0,this[_0x106a69(0x5b0)]=0x0,this[_0x106a69(0x452)]=0x0,this[_0x106a69(0x1e3)]=0x0,this['_ySwayRange']=0x0,this['_notLoadedReady']=!![],this['bitmap']=_0x3cb2b3[_0x106a69(0x1d3)](),this[_0x106a69(0x44e)][_0x106a69(0x464)](this['setFullBitmapFrame'][_0x106a69(0x208)](this)),this[_0x106a69(0x3aa)]=0x1,this[_0x106a69(0x448)]=[0x0,0x0,0x0,0x0];}const _0x58f7c5=new Bitmap(0x1f4,0x1f4);let _0x19df54=ColorManager[_0x106a69(0x40b)]([Math[_0x106a69(0x592)](0x20)+0x10,0x18,Math[_0x106a69(0x592)](0x20)+0x10]),_0x45f0cd=ColorManager[_0x106a69(0x40b)]([Math[_0x106a69(0x592)](0x30)+0x20,0x30,Math[_0x106a69(0x592)](0x30)+0x20]),_0x457426=ColorManager['arrayToHex']([Math['randomInt'](0x40)+0x30,0x60,Math[_0x106a69(0x592)](0x40)+0x30]);_0x58f7c5[_0x106a69(0x16a)](0xfa,0x15e,0x4b,_0x19df54,0x10,0x14),_0x58f7c5['drawCloud'](0xfa,0xfa,0x64,_0x457426,0x40,0x19),_0x58f7c5[_0x106a69(0x16a)](0xfa,0xfa,0x3c,_0x45f0cd,0x10,0x14);const _0x1d2ec0=_0x106a69(0x52c),_0x2224ab=_0x106a69(0x48d),_0x2c11b0=_0x58f7c5[_0x106a69(0x313)],_0x2f626b=_0x58f7c5[_0x106a69(0x3e7)],_0x3794a7=0x64,_0x19e630=_0x3794a7/0x2,_0x1c404b=0x2;let _0x5e8ebd=0x20;while(_0x5e8ebd--){if('xVjKg'!==_0x106a69(0x502)){const _0x131d44=this[_0x106a69(0x3a5)];return _0x131d44[_0x5d0861[_0x106a69(0x474)](_0x13437a[_0x106a69(0x221)]()*_0x131d44[_0x106a69(0x19b)])];}else{const _0x1548c6=Math[_0x106a69(0x592)](_0x2c11b0-_0x3794a7)+_0x3794a7,_0x349a26=Math['randomInt'](_0x2f626b-_0x1c404b)+_0x1c404b;_0x58f7c5[_0x106a69(0x34f)]=Math['randomInt'](0x40)+0xc0,_0x58f7c5[_0x106a69(0x295)](_0x1548c6,_0x349a26,Math['ceil'](_0x19e630),_0x1c404b,_0x1d2ec0,_0x2224ab),_0x58f7c5[_0x106a69(0x41f)](_0x1548c6+Math['ceil'](_0x19e630),_0x349a26,Math[_0x106a69(0x474)](_0x19e630),_0x1c404b,_0x2224ab);}}_0x58f7c5['_customModified']=![];if(ImageManager[_0x106a69(0x277)])console['log'](_0x106a69(0x47f));return this[_0x106a69(0x5b1)]=this[_0x106a69(0x5b1)]||[],this[_0x106a69(0x5b1)][_0x106a69(0x4ac)](_0x58f7c5),_0x58f7c5;},ImageManager['weatherEffectsRainbowArch']=function(){const _0x235905=_0x502049;if(this[_0x235905(0x31b)]){if(_0x235905(0x44c)===_0x235905(0x2f7))_0x4dc59b[_0x235905(0x323)](_0x48723d,![],_0x53dad9);else return this['_cached_WeatherEffects_RainbowArch'];}const _0x1b5e61=Math[_0x235905(0x574)]($dataSystem[_0x235905(0x33a)][_0x235905(0x5c3)],$dataSystem['advanced'][_0x235905(0x416)])||0x1,_0xc3ecf4=new Bitmap(_0x1b5e61,_0x1b5e61);_0xc3ecf4[_0x235905(0x546)](_0x1b5e61/0x2,_0x1b5e61/0x2,_0x1b5e61/0x2),_0xc3ecf4[_0x235905(0x5e5)]=![];if(ImageManager[_0x235905(0x277)])console[_0x235905(0x31a)]('rainbowarch');return this[_0x235905(0x31b)]=_0xc3ecf4,_0xc3ecf4;},ImageManager['weatherEffectsIcons']=function(){const _0x2a4998=_0x502049;if(this['_cached_WeatherEffects_Icons']){const _0x4cf320=this[_0x2a4998(0x4de)];return _0x4cf320[Math[_0x2a4998(0x474)](Math[_0x2a4998(0x221)]()*_0x4cf320[_0x2a4998(0x19b)])];}this[_0x2a4998(0x4de)]=this[_0x2a4998(0x4de)]||[];const _0x304552=ImageManager[_0x2a4998(0x26a)];for(const _0x38b13b of _0x304552){const _0x3d4568=new Bitmap(ImageManager['iconWidth'],ImageManager[_0x2a4998(0x3b9)]);_0x3d4568[_0x2a4998(0x3e1)]=0x1c,_0x3d4568['drawText'](_0x38b13b,0x0,0x0,_0x3d4568[_0x2a4998(0x313)],_0x3d4568[_0x2a4998(0x3e7)],_0x2a4998(0x586)),_0x3d4568[_0x2a4998(0x5e5)]=![],this[_0x2a4998(0x4de)][_0x2a4998(0x4ac)](_0x3d4568);}if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2a4998(0x31a)](_0x2a4998(0x478));const _0x5aa728=this['_cached_WeatherEffects_Icons'];return _0x5aa728[Math['floor'](Math[_0x2a4998(0x221)]()*_0x5aa728['length'])];},ImageManager[_0x502049(0x562)]=function(){const _0x5ab04a=_0x502049;if(this[_0x5ab04a(0x444)]&&this['_cached_WeatherEffects_Fumes'][_0x5ab04a(0x19b)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x5ab04a(0x37b)==='Aoukd'){const _0x1fa4d5=_0x409053[_0x5ab04a(0x3f5)]();_0x1fa4d5&&_0x1fa4d5['wait'](_0x82ae7b||0x1);}else{const _0x15b27e=this['_cached_WeatherEffects_Fumes'];return _0x15b27e[Math[_0x5ab04a(0x474)](Math[_0x5ab04a(0x221)]()*_0x15b27e[_0x5ab04a(0x19b)])];}}let _0xf6f025=ColorManager[_0x5ab04a(0x5e9)];const _0x253cc8=_0xf6f025[Math[_0x5ab04a(0x474)](Math['random']()*_0xf6f025[_0x5ab04a(0x19b)])];_0xf6f025=ColorManager['WEATHER_EARTH_COLORS'];const _0x5db2d5=_0xf6f025[Math[_0x5ab04a(0x474)](Math[_0x5ab04a(0x221)]()*_0xf6f025[_0x5ab04a(0x19b)])];_0xf6f025=ColorManager['WEATHER_CLOUD_WHITE_COLORS'];const _0x32ca0d=_0xf6f025[Math['floor'](Math[_0x5ab04a(0x221)]()*_0xf6f025[_0x5ab04a(0x19b)])],_0x52ff91=new Bitmap(0x3e8,0x3e8);_0x52ff91['drawCloud'](0x1f4,0x258,0xaf,_0x253cc8,0x40,0x14),_0x52ff91[_0x5ab04a(0x16a)](0x1f4,0x1f4,0xc8,_0x32ca0d,0x40,0x19),_0x52ff91[_0x5ab04a(0x16a)](0x1f4,0x1c2,0xa0,_0x5db2d5,0x40,0x1e),_0x52ff91[_0x5ab04a(0x5e5)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x5ab04a(0x31a)](_0x5ab04a(0x201));return this[_0x5ab04a(0x444)]=this[_0x5ab04a(0x444)]||[],this[_0x5ab04a(0x444)][_0x5ab04a(0x4ac)](_0x52ff91),_0x52ff91;},Bitmap['prototype'][_0x502049(0x4f0)]=function(_0x150901,_0x277ecb,_0x484d75){const _0x1038e0=_0x502049,_0x18e09d=this['context'];_0x18e09d[_0x1038e0(0x260)](),_0x18e09d[_0x1038e0(0x1eb)]=_0x1038e0(0x4e7),_0x18e09d[_0x1038e0(0x39d)](),_0x18e09d['arc'](_0x150901,_0x277ecb,_0x484d75,0x0,0x2*Math['PI'],![]),_0x18e09d[_0x1038e0(0x1c3)](),_0x18e09d['restore'](),this['_baseTexture'][_0x1038e0(0x48f)]();},Bitmap[_0x502049(0x4ca)][_0x502049(0x4cc)]=function(_0x22caba,_0x23846b,_0x3216fb,_0x43948b,_0x1da9a2,_0x5c7043){const _0x2bc035=_0x502049,_0x2789ae=this[_0x2bc035(0x4a4)];_0x2789ae['save'](),_0x2789ae[_0x2bc035(0x552)]=_0x23846b,_0x2789ae[_0x2bc035(0x39d)](),_0x2789ae[_0x2bc035(0x332)](_0x22caba[0x0],_0x22caba[0x1]);for(var _0xa99eb3=0x2;_0xa99eb3<_0x22caba[_0x2bc035(0x19b)];_0xa99eb3+=0x2){_0x2789ae[_0x2bc035(0x4ba)](_0x22caba[_0xa99eb3],_0x22caba[_0xa99eb3+0x1]);}_0x2789ae[_0x2bc035(0x4ba)](_0x22caba[0x0],_0x22caba[0x1]),_0x2789ae[_0x2bc035(0x423)]=_0x3216fb,_0x2789ae[_0x2bc035(0x32b)]=_0x43948b,_0x5c7043&&_0x2789ae['stroke'](),_0x2789ae['globalAlpha']=_0x1da9a2,_0x2789ae[_0x2bc035(0x1c3)](),_0x2789ae['globalAlpha']=0x1,_0x2789ae[_0x2bc035(0x36f)]();},Bitmap[_0x502049(0x4ca)]['drawPolyArc']=function(_0x17cd56,_0x220962,_0x46b9,_0x242a38,_0xbd16d,_0x26d02c,_0x1d207c,_0x5946de){const _0x1b79c1=_0x502049;_0x26d02c=_0x26d02c[_0x1b79c1(0x4df)](0.000001,0.999999);const _0x5bc7a9=this[_0x1b79c1(0x401)];_0x5bc7a9[_0x1b79c1(0x260)]();const _0x247662=_0x242a38*(Math['PI']/0xb4),_0x4aa09c=_0x46b9*0x2;_0x5bc7a9[_0x1b79c1(0x1e4)](_0x17cd56-_0x46b9,_0x220962-_0x46b9);const _0x4b29e6=_0x5bc7a9[_0x1b79c1(0x3f1)](_0x46b9,_0x46b9,_0x5946de,_0x46b9,_0x46b9,_0x46b9),_0x2a7223=ColorManager['hexToRgba'](_0xbd16d,_0x1d207c/0x2),_0x2225e3=ColorManager[_0x1b79c1(0x580)](_0xbd16d,_0x1d207c),_0xa34dc4=ColorManager[_0x1b79c1(0x580)](_0xbd16d,0x0);_0x4b29e6['addColorStop'](0x0,_0x2a7223),_0x4b29e6[_0x1b79c1(0x541)](_0x26d02c/0x2,_0x2225e3),_0x4b29e6[_0x1b79c1(0x541)](_0x26d02c,_0x2225e3),_0x4b29e6[_0x1b79c1(0x541)](0x1,_0xa34dc4),_0x5bc7a9['fillStyle']=_0x4b29e6,_0x5bc7a9[_0x1b79c1(0x39d)](),_0x5bc7a9[_0x1b79c1(0x332)](_0x46b9,_0x46b9),_0x5bc7a9['lineTo'](_0x4aa09c,_0x46b9),_0x5bc7a9['arc'](_0x46b9,_0x46b9,_0x46b9,0x0,_0x247662),_0x5bc7a9[_0x1b79c1(0x4ba)](_0x46b9,_0x46b9),_0x5bc7a9[_0x1b79c1(0x1c3)](),_0x5bc7a9[_0x1b79c1(0x260)](),_0x5bc7a9[_0x1b79c1(0x36f)](),this[_0x1b79c1(0x267)][_0x1b79c1(0x48f)]();},Bitmap[_0x502049(0x4ca)][_0x502049(0x426)]=function(_0x43c8c9,_0x3761be,_0x30b983,_0x37536a,_0x4e90f1,_0x209632,_0x596111){const _0x144dc5=_0x502049,_0x5801bf=_0x37536a/_0x30b983,_0x32d3ec=this[_0x144dc5(0x4a4)];_0x32d3ec[_0x144dc5(0x260)](),_0x32d3ec['scale'](0x1,_0x5801bf),this[_0x144dc5(0x3d6)](_0x43c8c9,_0x3761be/_0x5801bf,_0x30b983,0x168,_0x4e90f1,_0x209632,_0x596111,0x0),_0x32d3ec['restore'](),this['_baseTexture'][_0x144dc5(0x48f)]();},Bitmap[_0x502049(0x4ca)][_0x502049(0x16a)]=function(_0x30e208,_0x1de1ab,_0x59c4f8,_0x5191d0,_0xbe49e2,_0x4709c1){const _0x9461de=_0x502049,_0x5e9a7b=this[_0x9461de(0x4a4)];_0x59c4f8=_0x59c4f8||0x1;const _0x24fc02=_0x59c4f8*0x3/0x5;_0xbe49e2=_0xbe49e2??0xff,_0x4709c1=_0x4709c1??0xa;const _0x1f409f=ColorManager[_0x9461de(0x5df)](_0x5191d0),_0x8591cb=_0x5e9a7b[_0x9461de(0x3f1)](_0x24fc02,_0x24fc02,0x0,_0x24fc02,_0x24fc02,_0x24fc02),_0x380632=_0x9461de(0x593)['format'](_0x1f409f[0x0],_0x1f409f[0x1],_0x1f409f[0x2],_0xbe49e2/0xff),_0x5693a5='rgba(%1,%2,%3,%4)'[_0x9461de(0x339)](_0x1f409f[0x0],_0x1f409f[0x1],_0x1f409f[0x2],0x0);_0x8591cb[_0x9461de(0x541)](0x0,_0x380632),_0x8591cb[_0x9461de(0x541)](0x1,_0x5693a5);const _0x398f83=_0x24fc02*0x2,_0x430aa9=ImageManager['getTemporaryContext'](_0x398f83,_0x398f83);_0x430aa9['fillStyle']=_0x8591cb,_0x430aa9[_0x9461de(0x39d)](),_0x430aa9[_0x9461de(0x4dd)](_0x24fc02,_0x24fc02,_0x24fc02,0x0,Math['PI']*0x2,!![]),_0x430aa9[_0x9461de(0x1c3)]();for(let _0x43234b=0x0;_0x43234b<_0x4709c1;_0x43234b++){const _0x38b65f=Math['random']()*(Math['PI']*0x2),_0x2e3458=Math['random']()*Math[_0x9461de(0x524)](_0x38b65f)*_0x59c4f8+(_0x30e208-_0x24fc02),_0x4dfb27=Math[_0x9461de(0x221)]()*Math['cos'](_0x38b65f)*_0x59c4f8+(_0x1de1ab-_0x24fc02);_0x5e9a7b['drawImage'](ImageManager[_0x9461de(0x3f6)](),_0x2e3458,_0x4dfb27);}},Bitmap['prototype']['drawStar']=function(_0x5182eb,_0x36d4f2,_0x40d566,_0x150584,_0x45333e,_0x5eaa89,_0x97c29d,_0x4c92e2){const _0x1aa448=_0x502049;_0x4c92e2=_0x4c92e2||0x3;const _0x155926=this[_0x1aa448(0x401)];let _0xc4bb2e=Math['PI']/0x2*_0x4c92e2,_0x45f5c8=_0x5182eb,_0x4e06a5=_0x36d4f2,_0x2e3c01=Math['PI']/_0x45333e;_0x155926[_0x1aa448(0x260)](),_0x155926[_0x1aa448(0x39d)](),_0x155926[_0x1aa448(0x332)](_0x5182eb,_0x36d4f2-_0x5eaa89);for(let _0x1a9fdc=0x0;_0x1a9fdc<_0x45333e;_0x1a9fdc++){if('iOujM'!==_0x1aa448(0x366))_0x45f5c8=_0x5182eb+Math['cos'](_0xc4bb2e)*_0x5eaa89,_0x4e06a5=_0x36d4f2+Math['sin'](_0xc4bb2e)*_0x5eaa89,_0x155926[_0x1aa448(0x4ba)](_0x45f5c8,_0x4e06a5),_0xc4bb2e+=_0x2e3c01,_0x45f5c8=_0x5182eb+Math[_0x1aa448(0x239)](_0xc4bb2e)*_0x97c29d,_0x4e06a5=_0x36d4f2+Math[_0x1aa448(0x524)](_0xc4bb2e)*_0x97c29d,_0x155926[_0x1aa448(0x4ba)](_0x45f5c8,_0x4e06a5),_0xc4bb2e+=_0x2e3c01;else{if(this[_0x1aa448(0x34d)]&&_0x1d8f1c[_0x1aa448(0x3dd)][_0x1aa448(0x19b)]<=0x0){const _0x3a7037=this['_cached_WeatherEffects_AutumnLeaves'];return _0x3a7037[_0x241ca9[_0x1aa448(0x474)](_0x1417f4[_0x1aa448(0x221)]()*_0x3a7037[_0x1aa448(0x19b)])];}const _0x14ff9a=_0x282f6c[_0x1aa448(0x3dd)][_0x1aa448(0x442)]();let _0x357f13=_0x17e905[_0x1aa448(0x5df)](_0x14ff9a);const _0x1fc4cb=[];while(_0x1fc4cb[_0x1aa448(0x19b)]<0x6){const _0x47228e=_0x1af69d[_0x1aa448(0x40b)](_0x357f13);_0x1fc4cb[_0x1aa448(0x4ac)](_0x47228e),_0x357f13=_0x357f13[_0x1aa448(0x3b4)](_0x13e594=>_0x1ce1bb[_0x1aa448(0x1fd)](_0x13e594*0.85)[_0x1aa448(0x4df)](0x0,0xff));}_0x1fc4cb['reverse'](),_0x1fc4cb[_0x1aa448(0x4ac)](_0x1fc4cb['shift']()),_0x1fc4cb['push'](_0x1fc4cb['shift']());const _0x17e1e8=new _0x8a84f1(0x64,0x60);_0x17e1e8[_0x1aa448(0x357)](_0x1fc4cb),_0x17e1e8['_customModified']=![];if(_0x432d4e['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x57b614[_0x1aa448(0x31a)](_0x1aa448(0x41a));return this[_0x1aa448(0x34d)]=this['_cached_WeatherEffects_AutumnLeaves']||[],this[_0x1aa448(0x34d)][_0x1aa448(0x4ac)](_0x17e1e8),_0x17e1e8;}}_0x155926[_0x1aa448(0x4ba)](_0x5182eb,_0x36d4f2-_0x5eaa89),_0x155926[_0x1aa448(0x290)](),_0x155926['lineWidth']=0x0;if(_0x155926['lineWidth']>0x1){if(_0x1aa448(0x183)===_0x1aa448(0x183))_0x155926[_0x1aa448(0x32b)]=_0x155926[_0x1aa448(0x32b)]-0x1,_0x155926[_0x1aa448(0x423)]=_0x150584,_0x155926[_0x1aa448(0x1c8)]();else{const _0x4c704c=_0x5f4a86[_0x1aa448(0x592)](_0x3a2821-_0x21439d*0x2)+_0xfe3ae6,_0x16a873=_0x140b5c[_0x1aa448(0x592)](_0x526dbb-_0x5f5ce1*0x2)+_0x5b862a,_0x54715f=_0x2f0671[_0xf5d603[_0x1aa448(0x474)](_0x28d334[_0x1aa448(0x221)]()*_0x1ca3ad['length'])],_0x5e22a0=_0x4eb977[_0x1aa448(0x592)](_0x54e162)+0x1;_0x252dac[_0x1aa448(0x34f)]=_0xf4e081[_0x1aa448(0x592)](0x40)+0xc0,_0x39d301['drawCircle'](_0x4c704c,_0x16a873,_0x5e22a0,_0x54715f);}}_0x155926['fillStyle']=_0x40d566,_0x155926[_0x1aa448(0x1c3)](),_0x155926[_0x1aa448(0x36f)](),this[_0x1aa448(0x267)]['update']();},Bitmap[_0x502049(0x4ca)]['drawSnowflake']=function(){const _0x5110c8=_0x502049,_0x836228=0x6,_0x39cb4c=this['context'],_0x2671ba=this[_0x5110c8(0x313)]/0x2,_0x2a2fb3=this['height']/0x2;this['_maxLevel']=0x3,this[_0x5110c8(0x33c)]=0x2+Math['randomInt'](0x2),this[_0x5110c8(0x40c)]=Math['min'](_0x2671ba,_0x2a2fb3)*0x2/0x3,this[_0x5110c8(0x1f4)]=Math['PI']*0x2*(Math[_0x5110c8(0x221)]()*0.15+0.7),this[_0x5110c8(0x440)]=Math[_0x5110c8(0x574)](Math[_0x5110c8(0x1fd)](this[_0x5110c8(0x313)]/0xc),0x2),_0x39cb4c[_0x5110c8(0x1e4)](_0x2671ba,_0x2a2fb3);for(let _0x4888f4=0x0;_0x4888f4<_0x836228;_0x4888f4++){this[_0x5110c8(0x3f8)](0x0),_0x39cb4c[_0x5110c8(0x5c5)](Math['PI']*0x2/_0x836228);}},Bitmap[_0x502049(0x4ca)][_0x502049(0x3f8)]=function(_0xd1bd6a){const _0x197bfd=_0x502049;if(_0xd1bd6a>this[_0x197bfd(0x4bf)])return;const _0x5b0ce0=this[_0x197bfd(0x401)];_0x5b0ce0['strokeStyle']=_0x197bfd(0x30f),_0x5b0ce0[_0x197bfd(0x32b)]=0x3,_0x5b0ce0['beginPath'](),_0x5b0ce0['moveTo'](0x0,0x0),_0x5b0ce0[_0x197bfd(0x4ba)](0x0+this[_0x197bfd(0x40c)],0x0),_0x5b0ce0[_0x197bfd(0x1c8)]();for(let _0x41d899=0x1;_0x41d899<this[_0x197bfd(0x33c)]+0x1;_0x41d899++){_0x197bfd(0x46e)===_0x197bfd(0x46e)?(_0x5b0ce0['save'](),_0x5b0ce0[_0x197bfd(0x1e4)](this[_0x197bfd(0x40c)]*_0x41d899/(this[_0x197bfd(0x33c)]+0x1),0x0),_0x5b0ce0[_0x197bfd(0x2e4)](0.5,0.5),_0x5b0ce0[_0x197bfd(0x260)](),_0x5b0ce0[_0x197bfd(0x5c5)](this[_0x197bfd(0x1f4)]),this[_0x197bfd(0x3f8)](_0xd1bd6a+0x1),_0x5b0ce0['restore'](),_0x5b0ce0[_0x197bfd(0x260)](),_0x5b0ce0[_0x197bfd(0x5c5)](-this[_0x197bfd(0x1f4)]),this['drawSnowflakeLine'](_0xd1bd6a+0x1),_0x5b0ce0['restore'](),_0x5b0ce0[_0x197bfd(0x36f)]()):(_0x118cff[_0x197bfd(0x3b3)](_0x109d48,_0x4feb74),_0x48b9b9[_0x197bfd(0x3bc)]=_0x197bfd(0x238),_0x2919b3['WeatherEffects'][_0x197bfd(0x417)](_0x1fcb91));}},Bitmap['prototype'][_0x502049(0x1a9)]=function(_0x2576f1,_0x16c862,_0xbe4335,_0x2816a4){const _0x120bf5=_0x502049;let _0x315e8b=0x1e,_0x2c522d=Math[_0x120bf5(0x474)](_0x2816a4/0x6),_0x48c1c3=0x10;const _0x38098e=(0xff-_0x48c1c3)/_0x2c522d,_0x3a8a5c=(0xff-_0x315e8b)/_0x2c522d,_0x265313=Math[_0x120bf5(0x474)](_0x2816a4/_0x2c522d),_0x5cfe91=_0xbe4335/0x10,_0x279ef6=_0x16c862;let _0x5c0fee=Math['randomInt'](0xf4240),_0x5b3069=0x10,_0x4b6e37=_0xbe4335/0x2,_0x4c306d=Math['max'](0x4,_0xbe4335/0x10);_0x2576f1-=_0x2816a4;while(_0x2c522d--){_0x315e8b+=_0x3a8a5c,_0x4c306d+=_0x5cfe91,_0x48c1c3+=_0x38098e,_0x2576f1+=_0x265313,_0x16c862=_0x279ef6+Math[_0x120bf5(0x239)](_0x5c0fee)*_0x4b6e37/0x2,_0x5c0fee+=Math[_0x120bf5(0x592)](_0x5b3069)+_0x5b3069/0x2,_0x2816a4-=_0x265313;if(_0x2816a4<=0x0)break;const _0x3df909=_0x120bf5(0x3f7)[_0x120bf5(0x339)](_0x315e8b);this[_0x120bf5(0x34f)]=_0x48c1c3,this['drawCircle'](_0x2576f1,_0x16c862,_0x4c306d,_0x3df909);}this[_0x120bf5(0x34f)]=0xf0,this[_0x120bf5(0x432)](_0x2576f1,_0x16c862,_0x4c306d*0x3/0x4,_0x120bf5(0x2ca));},Bitmap[_0x502049(0x4ca)][_0x502049(0x1b3)]=function(){const _0x3aa530=_0x502049,_0x54e3c9=this[_0x3aa530(0x4a4)],_0x65b1d3=0xa,_0x17011a=0x50,_0xe36825={'x':_0x65b1d3,'y':this['height']/0x2},_0x51c819=0x8,_0x23f82a=this[_0x3aa530(0x313)]-_0x65b1d3,_0x272d9d=ColorManager[_0x3aa530(0x406)][_0x3aa530(0x516)](),_0x38296c=_0x272d9d[Math['floor'](Math[_0x3aa530(0x221)]()*_0x272d9d[_0x3aa530(0x19b)])],_0x44d500=0x2,_0x43aa33=this[_0x3aa530(0x313)]/0x5;_0x54e3c9[_0x3aa530(0x1eb)]='lighter',_0x54e3c9[_0x3aa530(0x423)]=_0x38296c,_0x54e3c9['shadowColor']=_0x38296c,_0x54e3c9[_0x3aa530(0x552)]=_0x38296c;let _0x19d4ee=[],_0x34569a=_0xe36825['x']+_0x23f82a;_0x19d4ee[_0x3aa530(0x4ac)]({'x':_0xe36825['x'],'y':_0xe36825['y']}),_0x19d4ee['push']({'x':_0x23f82a+(Math[_0x3aa530(0x221)]()-0.9)*_0x17011a,'y':Math[_0x3aa530(0x221)]()*(this['height']-0x64)+_0x17011a});let _0x553a84=_0x43aa33;while(_0x34569a>_0x51c819){const _0x1f38e9=[];for(var _0x40241a=0x0;_0x40241a<_0x19d4ee[_0x3aa530(0x19b)]-0x1;_0x40241a++){var _0x54626d=_0x19d4ee[_0x40241a],_0x4d0e05=_0x19d4ee[_0x40241a+0x1],_0x48ba82=(_0x54626d['y']+_0x4d0e05['y'])/0x2,_0x49602a=_0x48ba82+(Math['random']()*0x2-0x1)*_0x553a84;_0x1f38e9[_0x3aa530(0x4ac)](_0x54626d,{'x':(_0x54626d['x']+_0x4d0e05['x'])/0x2,'y':_0x49602a});}_0x1f38e9[_0x3aa530(0x4ac)](_0x19d4ee[_0x3aa530(0x442)]()),_0x19d4ee=_0x1f38e9,_0x553a84/=_0x44d500,_0x34569a/=0x2;}_0x54e3c9[_0x3aa530(0x1eb)]=_0x3aa530(0x555),_0x54e3c9[_0x3aa530(0x479)]=0xf,_0x54e3c9[_0x3aa530(0x39d)]();for(var _0x40241a=0x0;_0x40241a<_0x19d4ee[_0x3aa530(0x19b)];_0x40241a++){_0x54e3c9['lineTo'](_0x19d4ee[_0x40241a]['x'],_0x19d4ee[_0x40241a]['y']);}let _0x4d8335=0x3;while(_0x4d8335--)_0x54e3c9['stroke']();_0x54e3c9['restore'](),this['_baseTexture'][_0x3aa530(0x48f)]();},Bitmap['prototype'][_0x502049(0x357)]=function(_0x4d9115){const _0x219038=_0x502049,_0xf697a0=this[_0x219038(0x4a4)];_0x4d9115=_0x4d9115||['#821d1c',_0x219038(0x477),_0x219038(0x29e),'#fac159'];const _0x2ee191=_0x4d9115[0x4]||_0x219038(0x370),_0x3a8f45=_0x4d9115[0x5]||'#000000';_0xf697a0[_0x219038(0x260)](),_0xf697a0[_0x219038(0x3a4)](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0xf697a0['fillStyle']=_0x4d9115[0x0],(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](555.3,409.4),_0xf697a0[_0x219038(0x3fd)](527.4,409.4,497.2,419.2,497.3,436.6),_0xf697a0[_0x219038(0x3fd)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0xf697a0[_0x219038(0x3fd)](463.7,482.7,447.7,487.4,391.9,479.6),_0xf697a0[_0x219038(0x4ba)](383.8,481.2),_0xf697a0['lineTo'](381.2,481.7),_0xf697a0[_0x219038(0x3fd)](376.9,509.6,372.6,548.2,346.8,563.2),_0xf697a0[_0x219038(0x3fd)](332.8,526.3,293.1,567.7,267.3,582.7),_0xf697a0[_0x219038(0x3fd)](307.4,497.6,232.9,526.3,215.7,563.2),_0xf697a0[_0x219038(0x3fd)](200.7,0x220,157.7,541.9,131.9,559.1),_0xf697a0[_0x219038(0x3fd)](140.4,545.2,146.9,526.3,148.2,507.1),_0xf697a0['bezierCurveTo'](149.1,493.9,147.6,480.6,142.6,468.8),_0xf697a0['bezierCurveTo'](168.4,466.7,236.8,435.6,196.3,408.6),_0xf697a0['bezierCurveTo'](195.1,407.8,193.2,407.2,190.6,406.8),_0xf697a0[_0x219038(0x3fd)](170.3,403.6,111.9,412.7,90.9,427.9),_0xf697a0[_0x219038(0x3fd)](104.7,374.2,66.4,0x168,39.7,345.5),_0xf697a0[_0x219038(0x3fd)](39.7,345.5,104.6,326.9,104.6,279.6),_0xf697a0[_0x219038(0x3fd)](129.9,305.1,168.2,305.4,189.7,290.3),_0xf697a0['bezierCurveTo'](215.5,273.1,172.5,245.2,157.5,238.7),_0xf697a0[_0x219038(0x3fd)](168.2,234.4,185.4,230.2,185.4,215.2),_0xf697a0['bezierCurveTo'](185.4,184.8,165.4,0x9d,146.1,0x8e),_0xf697a0[_0x219038(0x3fd)](200.5,133.4,185.4,27.6,185.4,27.6),_0xf697a0[_0x219038(0x3fd)](185.4,27.6,232.7,96.9,287.1,77.6),_0xf697a0[_0x219038(0x3fd)](278.5,116.3,282.2,163.6,309.4,0xaa),_0xf697a0[_0x219038(0x3fd)](319.9,172.5,346.7,161.4,346.7,161.4),_0xf697a0['bezierCurveTo'](343.2,202.2,345.5,215.3,369.4,215.3),_0xf697a0[_0x219038(0x3fd)](392.3,215.3,413.3,0xaa,416.5,133.5),_0xf697a0['bezierCurveTo'](447.6,142.1,493.3,0x7e,527.7,89.4),_0xf697a0[_0x219038(0x3fd)](527.2,90.9,502.6,170.4,533.7,206.5),_0xf697a0[_0x219038(0x3fd)](504.5,211.4,477.2,236.8,474.1,0x100),_0xf697a0[_0x219038(0x3fd)](0x1d8,269.2,481.3,279.6,509.4,278.3),_0xf697a0[_0x219038(0x3fd)](512.3,278.2,515.3,277.9,518.6,277.5),_0xf697a0[_0x219038(0x3fd)](510.4,326.9,593.3,323.5,593.3,323.5),_0xf697a0['bezierCurveTo'](561.3,347.2,541.7,0x172,555.3,409.4)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x4d9115[0x1],(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](509.7,278.3),_0xf697a0[_0x219038(0x3fd)](501.6,295.2,497.9,314.1,492.3,332.2),_0xf697a0['bezierCurveTo'](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0xf697a0[_0x219038(0x3fd)](422.2,410.5,413.9,411.5,406.4,414.8),_0xf697a0[_0x219038(0x3fd)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0xf697a0[_0x219038(0x3fd)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0xf697a0[_0x219038(0x3fd)](191.1,480.7,170.2,495.6,148.3,507.2),_0xf697a0[_0x219038(0x3fd)](149.2,0x1ee,147.7,480.7,142.7,468.9),_0xf697a0[_0x219038(0x3fd)](168.5,466.8,236.9,435.7,196.4,408.7),_0xf697a0['bezierCurveTo'](195.2,407.9,193.3,407.3,190.7,406.9),_0xf697a0[_0x219038(0x3fd)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0xf697a0[_0x219038(0x3fd)](104.8,374.3,66.5,360.1,39.8,345.6),_0xf697a0[_0x219038(0x3fd)](39.8,345.6,104.7,0x147,104.7,279.7),_0xf697a0[_0x219038(0x3fd)](0x82,305.2,168.3,305.5,189.8,290.4),_0xf697a0[_0x219038(0x3fd)](215.6,273.2,172.6,245.3,157.6,238.8),_0xf697a0['bezierCurveTo'](168.3,234.5,185.5,230.3,185.5,215.3),_0xf697a0[_0x219038(0x3fd)](185.5,184.9,165.5,157.1,146.2,142.1),_0xf697a0[_0x219038(0x3fd)](200.6,133.5,185.5,27.7,185.5,27.7),_0xf697a0[_0x219038(0x3fd)](185.5,27.7,232.8,0x61,287.2,77.7),_0xf697a0[_0x219038(0x3fd)](278.6,116.4,282.3,163.7,309.5,170.1),_0xf697a0[_0x219038(0x3fd)](0x140,172.6,346.8,161.5,346.8,161.5),_0xf697a0['bezierCurveTo'](343.3,202.3,345.6,215.4,369.5,215.4),_0xf697a0[_0x219038(0x3fd)](392.4,215.4,413.4,170.1,416.6,133.6),_0xf697a0[_0x219038(0x3fd)](447.7,142.2,493.4,126.1,527.8,89.5),_0xf697a0[_0x219038(0x3fd)](527.3,0x5b,502.7,170.5,533.8,206.6),_0xf697a0[_0x219038(0x3fd)](504.6,211.5,477.3,236.9,474.2,256.1),_0xf697a0[_0x219038(0x3fd)](472.2,269.3,481.5,279.6,509.7,278.3)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x4d9115[0x2],(_0xf697a0['beginPath'](),_0xf697a0['moveTo'](533.9,206.6),_0xf697a0[_0x219038(0x3fd)](504.7,211.5,477.4,236.9,474.3,256.1),_0xf697a0[_0x219038(0x3fd)](461.6,260.5,449.1,265.3,435.6,271.5),_0xf697a0['bezierCurveTo'](420.6,278.4,403.5,280.9,390.2,290.6),_0xf697a0[_0x219038(0x3fd)](0x173,304.6,364.5,329.8,357.1,352.4),_0xf697a0[_0x219038(0x3fd)](349.7,0x177,337.4,399.6,314.4,405.8),_0xf697a0[_0x219038(0x3fd)](290.1,412.3,0x10a,395.2,0xf1,393.4),_0xf697a0[_0x219038(0x3fd)](223.2,392.1,206.8,398.4,190.7,406.9),_0xf697a0['bezierCurveTo'](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0xf697a0[_0x219038(0x3fd)](104.8,374.3,66.5,360.1,39.8,345.6),_0xf697a0[_0x219038(0x3fd)](39.8,345.6,104.7,0x147,104.7,279.7),_0xf697a0[_0x219038(0x3fd)](0x82,305.2,168.3,305.5,189.8,290.4),_0xf697a0[_0x219038(0x3fd)](215.6,273.2,172.6,245.3,157.6,238.8),_0xf697a0[_0x219038(0x3fd)](168.3,234.5,185.5,230.3,185.5,215.3),_0xf697a0[_0x219038(0x3fd)](185.5,184.9,165.5,157.1,146.2,142.1),_0xf697a0[_0x219038(0x3fd)](200.6,133.5,185.5,27.7,185.5,27.7),_0xf697a0[_0x219038(0x3fd)](185.5,27.7,232.8,0x61,287.2,77.7),_0xf697a0[_0x219038(0x3fd)](278.6,116.4,282.3,163.7,309.5,170.1),_0xf697a0[_0x219038(0x3fd)](0x140,172.6,346.8,161.5,346.8,161.5),_0xf697a0[_0x219038(0x3fd)](343.3,202.3,345.6,215.4,369.5,215.4),_0xf697a0[_0x219038(0x3fd)](392.4,215.4,413.4,170.1,416.6,133.6),_0xf697a0['bezierCurveTo'](447.7,142.2,493.4,126.1,527.8,89.5),_0xf697a0[_0x219038(0x3fd)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x4d9115[0x3],(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](120.7,325.8),_0xf697a0[_0x219038(0x3fd)](126.5,334.6,138.7,335.8,149.3,336.1),_0xf697a0['bezierCurveTo'](193.7,337.4,238.1,338.7,282.5,0x154),_0xf697a0[_0x219038(0x3fd)](289.7,340.2,297.6,340.2,303.3,335.8),_0xf697a0[_0x219038(0x3fd)](312.9,328.2,310.8,312.8,317.4,302.5),_0xf697a0[_0x219038(0x3fd)](324.7,291.1,0x154,0x121,353.1,285.9),_0xf697a0['bezierCurveTo'](405.5,273.6,444.9,231.7,0x1e1,191.8),_0xf697a0[_0x219038(0x3fd)](486.2,186.1,491.6,0xb4,493.5,172.5),_0xf697a0[_0x219038(0x3fd)](498.1,154.8,479.9,137.4,461.6,136.9),_0xf697a0['bezierCurveTo'](443.3,136.5,426.8,0x94,414.2,161.3),_0xf697a0[_0x219038(0x3fd)](401.7,174.6,398.5,197.8,383.5,208.2),_0xf697a0['bezierCurveTo'](368.5,218.6,339.2,214.6,325.5,202.5),_0xf697a0[_0x219038(0x3fd)](317.3,195.2,313.8,184.1,307.6,0xaf),_0xf697a0['bezierCurveTo'](291.6,151.6,259.3,144.6,241.8,122.3),_0xf697a0[_0x219038(0x3fd)](235.7,114.6,231.7,105.4,225.2,98.1),_0xf697a0[_0x219038(0x3fd)](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0xf697a0[_0x219038(0x3fd)](186.5,95.3,186.2,112.6,188.1,126.1),_0xf697a0['bezierCurveTo'](192.5,0x9d,198.5,187.7,205.8,0xda),_0xf697a0[_0x219038(0x3fd)](211.1,239.7,216.2,265.5,201.2,282.2),_0xf697a0[_0x219038(0x3fd)](189.7,295.1,108.1,306.6,120.7,325.8)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x423)]=_0x3a8f45,_0xf697a0[_0x219038(0x32b)]=0x5,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](555.3,409.4),_0xf697a0[_0x219038(0x3fd)](527.4,409.4,497.2,419.2,497.3,436.6),_0xf697a0[_0x219038(0x3fd)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0xf697a0[_0x219038(0x3fd)](463.7,482.7,447.7,487.4,391.9,479.6),_0xf697a0[_0x219038(0x4ba)](383.8,481.2),_0xf697a0[_0x219038(0x4ba)](381.2,481.7),_0xf697a0['bezierCurveTo'](376.9,509.6,372.6,548.2,346.8,563.2),_0xf697a0[_0x219038(0x3fd)](332.8,526.3,293.1,567.7,267.3,582.7),_0xf697a0[_0x219038(0x3fd)](307.4,497.6,232.9,526.3,215.7,563.2),_0xf697a0[_0x219038(0x3fd)](200.7,0x220,157.7,541.9,131.9,559.1),_0xf697a0[_0x219038(0x3fd)](146.3,535.7,154.9,497.6,142.6,468.8),_0xf697a0['bezierCurveTo'](168.4,466.7,236.8,435.6,196.3,408.6),_0xf697a0[_0x219038(0x3fd)](185.6,401.4,114.6,410.7,0x5b,427.9),_0xf697a0['bezierCurveTo'](104.8,374.2,66.5,0x168,39.8,345.5),_0xf697a0[_0x219038(0x3fd)](39.8,345.5,104.7,326.9,104.7,279.6),_0xf697a0['bezierCurveTo'](0x82,305.1,168.3,305.4,189.8,290.3),_0xf697a0[_0x219038(0x3fd)](215.6,273.1,172.6,245.2,157.6,238.7),_0xf697a0[_0x219038(0x3fd)](168.3,234.4,185.5,230.2,185.5,215.2),_0xf697a0[_0x219038(0x3fd)](185.5,184.8,165.5,0x9d,146.2,0x8e),_0xf697a0[_0x219038(0x3fd)](200.6,133.4,185.5,27.6,185.5,27.6),_0xf697a0[_0x219038(0x3fd)](185.5,27.6,232.8,96.9,287.2,77.6),_0xf697a0['bezierCurveTo'](278.6,116.3,282.3,163.6,309.5,0xaa),_0xf697a0[_0x219038(0x3fd)](0x140,172.5,346.8,161.4,346.8,161.4),_0xf697a0[_0x219038(0x3fd)](343.3,202.2,345.6,215.3,369.5,215.3),_0xf697a0[_0x219038(0x3fd)](392.4,215.3,413.4,0xaa,416.6,133.5),_0xf697a0[_0x219038(0x3fd)](447.7,142.1,493.4,0x7e,527.8,89.4),_0xf697a0[_0x219038(0x3fd)](527.3,90.9,502.7,170.4,533.8,206.5),_0xf697a0[_0x219038(0x3fd)](482.3,215.2,437.1,287.1,518.8,277.4),_0xf697a0[_0x219038(0x3fd)](510.6,326.8,593.5,323.4,593.5,323.4),_0xf697a0['bezierCurveTo'](561.3,347.2,541.7,0x172,555.3,409.4)),_0xf697a0[_0x219038(0x1c8)](),_0xf697a0[_0x219038(0x552)]=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](236.9,152.9),_0xf697a0[_0x219038(0x3fd)](245.5,185.6,255.3,217.6,268.2,0xf9),_0xf697a0[_0x219038(0x3fd)](281.4,281.1,296.5,312.4,310.8,344.1),_0xf697a0[_0x219038(0x3fd)](338.4,0x195,369.3,464.6,393.1,527.2),_0xf697a0['bezierCurveTo'](0x18f,542.9,404.5,558.8,408.9,0x23f),_0xf697a0['bezierCurveTo'](0x19b,582.4,412.8,589.9,414.4,597.4),_0xf697a0[_0x219038(0x3fd)](415.2,601.3,0x1a0,605.1,416.7,0x261),_0xf697a0[_0x219038(0x3fd)](417.6,0x266,419.5,617.1,423.2,620.4),_0xf697a0[_0x219038(0x3fd)](426.8,623.6,432.5,623.3,435.1,618.9),_0xf697a0[_0x219038(0x3fd)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0xf697a0[_0x219038(0x3fd)](437.4,603.1,436.7,599.6,0x1b4,596.2),_0xf697a0['bezierCurveTo'](434.5,589.4,432.8,582.7,430.8,0x240),_0xf697a0[_0x219038(0x3fd)](426.8,561.9,421.9,0x224,416.7,534.4),_0xf697a0[_0x219038(0x3fd)](0x195,0x1f8,0x187,474.6,376.2,445.6),_0xf697a0[_0x219038(0x3fd)](344.5,383.6,308.7,323.8,279.9,260.4),_0xf697a0[_0x219038(0x3fd)](264.1,225.5,0xf8,189.7,237.6,152.8),_0xf697a0[_0x219038(0x3fd)](237.5,152.3,236.7,152.5,236.9,152.9)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0['fillStyle']=_0x2ee191,(_0xf697a0['beginPath'](),_0xf697a0[_0x219038(0x332)](436.6,221.3),_0xf697a0['bezierCurveTo'](415.7,0xfa,403.1,0x11a,395.3,316.5),_0xf697a0[_0x219038(0x3fd)](388.4,347.3,382.8,379.1,0x17c,410.6),_0xf697a0[_0x219038(0x3fd)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0xf697a0[_0x219038(0x3fd)](378.6,477.6,388.6,477.7,388.5,471.1),_0xf697a0['bezierCurveTo'](388.2,453.4,387.8,435.8,388.7,418.1),_0xf697a0[_0x219038(0x3fd)](389.4,0x194,390.9,389.9,392.1,375.8),_0xf697a0['bezierCurveTo'](395.2,341.9,398.1,308.4,409.7,276.1),_0xf697a0['bezierCurveTo'](416.6,256.9,426.2,238.9,437.7,222.1),_0xf697a0[_0x219038(0x3fd)](438.3,221.2,437.1,220.6,436.6,221.3)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](0x86,344.4),_0xf697a0['bezierCurveTo'](209.5,355.1,275.3,397.6,335.7,441.6),_0xf697a0['bezierCurveTo'](343.7,447.4,351.6,453.3,359.4,459.2),_0xf697a0['bezierCurveTo'](363.3,462.2,367.2,465.1,371.2,468.1),_0xf697a0[_0x219038(0x3fd)](375.2,471.1,378.3,474.1,383.4,474.6),_0xf697a0[_0x219038(0x3fd)](385.5,474.8,387.6,472.1,386.8,470.1),_0xf697a0[_0x219038(0x3fd)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0xf697a0[_0x219038(0x3fd)](360.9,448.2,353.6,442.9,346.3,437.7),_0xf697a0[_0x219038(0x3fd)](330.9,426.7,315.3,416.1,299.1,406.2),_0xf697a0[_0x219038(0x3fd)](266.5,386.3,232.2,368.6,195.8,356.6),_0xf697a0[_0x219038(0x3fd)](175.6,349.9,155.1,345.9,133.9,343.9),_0xf697a0[_0x219038(0x3fd)](133.7,343.9,133.6,344.4,0x86,344.4)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0['fillStyle']=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0['moveTo'](458.7,294.7),_0xf697a0[_0x219038(0x3fd)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0xf697a0['bezierCurveTo'](0x1c3,297.8,446.6,299.5,441.2,301.6),_0xf697a0['bezierCurveTo'](435.8,303.7,429.4,306.2,422.4,309.1),_0xf697a0['bezierCurveTo'](415.4,0x138,407.8,315.5,400.2,319.5),_0xf697a0[_0x219038(0x3fd)](399.3,0x140,398.5,320.4,397.6,320.9),_0xf697a0[_0x219038(0x4ba)](396.2,321.7),_0xf697a0[_0x219038(0x4ba)](395.5,322.1),_0xf697a0['bezierCurveTo'](395.4,322.2,395.4,0x142,395.4,0x142),_0xf697a0[_0x219038(0x4ba)](395.3,321.8),_0xf697a0[_0x219038(0x4ba)](395.1,321.5),_0xf697a0[_0x219038(0x3fd)](394.5,320.6,393.9,319.7,393.3,318.8),_0xf697a0[_0x219038(0x4ba)](392.4,317.5),_0xf697a0[_0x219038(0x4ba)](0x188,316.7),_0xf697a0[_0x219038(0x3fd)](390.9,314.6,390.1,312.6,389.3,310.6),_0xf697a0[_0x219038(0x3fd)](387.9,306.6,0x183,302.6,386.2,298.9),_0xf697a0[_0x219038(0x3fd)](384.7,291.5,0x180,284.8,383.6,279.1),_0xf697a0[_0x219038(0x3fd)](382.8,267.8,383.4,260.5,383.5,259.4),_0xf697a0[_0x219038(0x3fd)](383.6,258.2,384.2,265.4,386.3,0x115),_0xf697a0['bezierCurveTo'](387.4,282.8,388.8,289.7,390.7,297.2),_0xf697a0[_0x219038(0x3fd)](391.7,300.9,392.8,304.8,394.3,308.5),_0xf697a0[_0x219038(0x3fd)](395.1,310.4,395.8,312.2,396.8,313.9),_0xf697a0['lineTo'](397.1,314.6),_0xf697a0['bezierCurveTo'](397.1,314.7,397.1,314.6,397.1,314.7),_0xf697a0[_0x219038(0x4ba)](397.1,314.7),_0xf697a0[_0x219038(0x4ba)](397.1,314.7),_0xf697a0['lineTo'](397.1,314.7),_0xf697a0[_0x219038(0x4ba)](397.1,314.7),_0xf697a0[_0x219038(0x4ba)](397.1,314.7),_0xf697a0[_0x219038(0x4ba)](397.4,314.5),_0xf697a0[_0x219038(0x3fd)](405.3,310.3,413.3,307.1,420.6,304.6),_0xf697a0['bezierCurveTo'](427.9,302.1,434.6,300.3,440.2,298.9),_0xf697a0[_0x219038(0x3fd)](445.8,297.5,450.4,296.5,453.6,295.8),_0xf697a0[_0x219038(0x3fd)](456.9,295.1,458.7,294.7,458.7,294.7)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](213.6,309.8),_0xf697a0[_0x219038(0x3fd)](213.6,309.8,214.3,310.1,215.7,310.8),_0xf697a0[_0x219038(0x3fd)](216.4,311.1,217.2,311.5,218.2,311.9),_0xf697a0[_0x219038(0x3fd)](219.2,312.3,220.3,312.8,221.7,313.3),_0xf697a0[_0x219038(0x3fd)](224.3,314.4,227.6,315.5,231.4,316.8),_0xf697a0['bezierCurveTo'](235.2,0x13e,239.6,319.4,244.4,320.8),_0xf697a0[_0x219038(0x3fd)](254.1,323.6,265.8,326.5,278.7,330.5),_0xf697a0[_0x219038(0x3fd)](285.1,332.6,291.8,334.9,298.6,0x152),_0xf697a0[_0x219038(0x3fd)](305.4,0x155,312.2,344.8,318.5,349.8),_0xf697a0['bezierCurveTo'](319.9,350.9,321.2,0x160,322.5,353.2),_0xf697a0[_0x219038(0x3fd)](323.1,353.8,323.8,354.4,324.4,354.9),_0xf697a0[_0x219038(0x3fd)](0x145,355.5,325.6,356.1,326.1,356.7),_0xf697a0[_0x219038(0x3fd)](326.4,0x165,326.7,357.3,0x147,357.6),_0xf697a0[_0x219038(0x4ba)](327.1,357.7),_0xf697a0[_0x219038(0x4ba)](327.1,357.7),_0xf697a0[_0x219038(0x4ba)](327.1,357.7),_0xf697a0[_0x219038(0x4ba)](327.1,357.7),_0xf697a0[_0x219038(0x4ba)](327.1,357.8),_0xf697a0[_0x219038(0x3fd)](327.1,357.9,327.2,357.9,327.2,0x166),_0xf697a0[_0x219038(0x3fd)](327.2,0x166,327.2,0x166,327.3,357.9),_0xf697a0[_0x219038(0x4ba)](327.3,357.8),_0xf697a0[_0x219038(0x4ba)](327.3,357.8),_0xf697a0[_0x219038(0x4ba)](327.3,357.8),_0xf697a0['lineTo'](327.3,357.7),_0xf697a0[_0x219038(0x4ba)](327.3,357.4),_0xf697a0['lineTo'](327.4,356.2),_0xf697a0[_0x219038(0x3fd)](327.5,354.6,327.6,0x161,327.7,351.5),_0xf697a0[_0x219038(0x3fd)](327.8,349.9,0x148,348.4,328.1,346.9),_0xf697a0[_0x219038(0x3fd)](328.7,340.8,329.6,335.1,330.5,329.7),_0xf697a0[_0x219038(0x3fd)](332.3,318.9,334.3,309.4,335.8,301.5),_0xf697a0['bezierCurveTo'](0x153,285.6,340.2,275.5,340.5,273.7),_0xf697a0['bezierCurveTo'](340.6,272.8,340.6,274.8,340.5,279.2),_0xf697a0[_0x219038(0x3fd)](340.3,283.6,339.8,290.3,338.8,298.8),_0xf697a0[_0x219038(0x3fd)](337.9,307.3,336.4,317.5,0x14f,328.9),_0xf697a0[_0x219038(0x3fd)](334.3,334.6,333.6,340.6,333.2,346.8),_0xf697a0[_0x219038(0x3fd)](333.1,348.4,0x14d,349.9,332.9,351.5),_0xf697a0[_0x219038(0x3fd)](332.8,353.1,332.7,354.7,332.7,356.3),_0xf697a0['bezierCurveTo'](332.7,357.3,332.6,358.3,332.6,359.3),_0xf697a0[_0x219038(0x3fd)](332.5,360.9,332.6,362.6,332.5,364.2),_0xf697a0[_0x219038(0x3fd)](332.5,367.5,332.4,370.8,332.4,374.2),_0xf697a0['bezierCurveTo'](330.5,371.7,328.7,369.1,326.6,366.6),_0xf697a0[_0x219038(0x3fd)](325.6,365.3,324.6,364.1,323.6,362.8),_0xf697a0[_0x219038(0x4ba)](322.8,361.8),_0xf697a0[_0x219038(0x3fd)](322.6,361.6,322.5,361.5,322.4,361.4),_0xf697a0[_0x219038(0x4ba)](321.6,360.6),_0xf697a0[_0x219038(0x3fd)](321.1,360.1,320.6,359.5,0x140,0x167),_0xf697a0['lineTo'](318.3,357.5),_0xf697a0[_0x219038(0x3fd)](317.2,356.5,0x13c,355.5,314.8,354.6),_0xf697a0['bezierCurveTo'](308.9,0x15e,302.5,346.4,296.1,343.3),_0xf697a0['bezierCurveTo'](289.7,340.2,283.2,337.7,276.9,335.4),_0xf697a0[_0x219038(0x3fd)](264.4,330.9,252.9,327.3,243.3,323.8),_0xf697a0[_0x219038(0x3fd)](238.5,322.1,234.2,320.4,230.5,318.8),_0xf697a0['bezierCurveTo'](226.8,317.2,223.6,315.7,221.1,314.4),_0xf697a0[_0x219038(0x3fd)](219.8,313.8,218.7,313.1,217.8,312.6),_0xf697a0[_0x219038(0x3fd)](216.8,312.1,0xd8,311.6,215.4,311.2),_0xf697a0[_0x219038(0x3fd)](214.3,310.2,213.6,309.8,213.6,309.8)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](235.1,251.7),_0xf697a0[_0x219038(0x3fd)](235.1,251.7,236.5,252.2,238.9,253.2),_0xf697a0[_0x219038(0x3fd)](241.3,254.2,244.9,255.7,249.1,257.8),_0xf697a0[_0x219038(0x3fd)](253.4,259.9,258.3,262.4,263.8,265.3),_0xf697a0[_0x219038(0x3fd)](269.3,268.1,275.3,271.2,281.7,273.9),_0xf697a0['bezierCurveTo'](282.5,274.3,283.3,274.6,284.1,274.9),_0xf697a0[_0x219038(0x3fd)](284.5,275.1,284.9,275.2,285.3,275.4),_0xf697a0[_0x219038(0x4ba)](285.9,275.6),_0xf697a0[_0x219038(0x3fd)](0x11e,275.6,285.9,275.6,285.9,275.6),_0xf697a0['lineTo'](0x11e,275.7),_0xf697a0[_0x219038(0x3fd)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0xf697a0[_0x219038(0x4ba)](0x11e,275.4),_0xf697a0[_0x219038(0x4ba)](0x11e,0x113),_0xf697a0[_0x219038(0x3fd)](286.1,274.2,286.2,273.5,286.3,272.8),_0xf697a0[_0x219038(0x3fd)](286.5,271.1,286.8,269.5,287.2,0x10c),_0xf697a0['bezierCurveTo'](288.7,261.8,291.1,256.8,293.2,252.7),_0xf697a0[_0x219038(0x3fd)](295.4,248.6,297.3,245.4,298.8,243.1),_0xf697a0['bezierCurveTo'](300.3,240.8,301.2,239.4,301.5,238.9),_0xf697a0['bezierCurveTo'](301.8,238.5,301.4,239.7,300.5,242.1),_0xf697a0[_0x219038(0x3fd)](299.6,244.5,298.2,248.1,296.6,252.6),_0xf697a0[_0x219038(0x3fd)](0x127,257.1,293.2,262.5,292.1,268.5),_0xf697a0[_0x219038(0x3fd)](0x124,269.2,291.9,0x10e,291.8,270.8),_0xf697a0[_0x219038(0x3fd)](291.7,271.6,291.6,272.3,291.6,273.1),_0xf697a0['bezierCurveTo'](291.6,273.5,291.6,273.9,291.5,274.3),_0xf697a0[_0x219038(0x4ba)](291.5,274.9),_0xf697a0['bezierCurveTo'](291.5,275.1,291.5,275.2,291.5,275.6),_0xf697a0[_0x219038(0x3fd)](291.5,277.1,291.5,278.5,291.5,0x118),_0xf697a0[_0x219038(0x3fd)](291.5,280.8,291.5,281.7,291.5,282.5),_0xf697a0[_0x219038(0x4ba)](291.5,283.1),_0xf697a0[_0x219038(0x4ba)](291.5,283.4),_0xf697a0[_0x219038(0x4ba)](291.5,283.5),_0xf697a0[_0x219038(0x4ba)](291.4,283.5),_0xf697a0[_0x219038(0x4ba)](291.3,283.4),_0xf697a0[_0x219038(0x4ba)](290.1,0x11b),_0xf697a0['bezierCurveTo'](288.5,282.4,286.9,281.9,285.2,281.3),_0xf697a0['bezierCurveTo'](284.8,281.2,284.3,0x119,0x11c,280.9),_0xf697a0[_0x219038(0x4ba)](283.3,280.6),_0xf697a0[_0x219038(0x4ba)](0x11a,280.1),_0xf697a0[_0x219038(0x3fd)](281.1,279.8,280.3,279.4,279.5,279.1),_0xf697a0['bezierCurveTo'](272.7,276.2,266.7,272.7,261.4,269.4),_0xf697a0[_0x219038(0x3fd)](256.1,266.1,251.5,262.9,247.6,260.2),_0xf697a0[_0x219038(0x3fd)](243.7,257.5,240.6,255.4,238.4,253.9),_0xf697a0[_0x219038(0x3fd)](236.3,252.5,235.1,251.7,235.1,251.7)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0[_0x219038(0x552)]=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](235.1,0x1d7),_0xf697a0[_0x219038(0x3fd)](235.1,0x1d7,237.1,469.6,240.8,466.9),_0xf697a0[_0x219038(0x3fd)](244.5,464.3,249.8,460.6,256.5,456.2),_0xf697a0[_0x219038(0x3fd)](263.3,451.8,271.4,446.8,281.1,442.1),_0xf697a0[_0x219038(0x3fd)](281.7,441.8,282.3,441.5,282.9,441.2),_0xf697a0['bezierCurveTo'](283.5,440.9,284.1,440.6,284.8,440.4),_0xf697a0[_0x219038(0x3fd)](286.1,439.8,287.3,439.3,288.6,438.7),_0xf697a0[_0x219038(0x3fd)](291.2,437.7,293.9,436.6,296.7,435.7),_0xf697a0[_0x219038(0x3fd)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0xf697a0[_0x219038(0x3fd)](308.3,432.4,311.3,431.7,314.4,431.2),_0xf697a0[_0x219038(0x3fd)](317.5,430.6,320.5,430.3,323.5,0x1ae),_0xf697a0[_0x219038(0x3fd)](324.2,429.9,0x145,429.9,325.7,429.8),_0xf697a0[_0x219038(0x4ba)](326.3,429.8),_0xf697a0[_0x219038(0x3fd)](326.4,429.8,326.4,429.8,326.4,429.8),_0xf697a0[_0x219038(0x4ba)](326.4,429.8),_0xf697a0[_0x219038(0x4ba)](326.4,429.8),_0xf697a0[_0x219038(0x4ba)](326.4,429.8),_0xf697a0[_0x219038(0x3fd)](326.5,429.8,326.5,429.8,326.5,429.8),_0xf697a0['bezierCurveTo'](326.5,429.8,326.5,429.8,326.5,429.7),_0xf697a0[_0x219038(0x3fd)](326.2,429.2,0x146,428.6,325.7,428.1),_0xf697a0['bezierCurveTo'](325.1,426.9,324.5,425.7,323.9,424.5),_0xf697a0[_0x219038(0x3fd)](322.7,422.1,321.4,419.8,320.2,417.6),_0xf697a0[_0x219038(0x3fd)](317.7,413.1,315.2,0x199,312.8,405.2),_0xf697a0['bezierCurveTo'](311.5,403.3,310.4,401.5,309.2,399.7),_0xf697a0['bezierCurveTo'](0x134,0x18e,306.8,396.3,305.7,394.7),_0xf697a0[_0x219038(0x3fd)](301.2,388.4,297.1,383.5,294.1,0x17c),_0xf697a0[_0x219038(0x3fd)](0x123,376.5,289.1,374.4,288.5,373.8),_0xf697a0[_0x219038(0x3fd)](287.9,373.2,289.6,374.5,292.9,377.3),_0xf697a0[_0x219038(0x3fd)](293.7,0x17a,294.7,378.8,295.6,379.8),_0xf697a0['bezierCurveTo'](296.6,380.7,297.7,381.8,298.9,382.9),_0xf697a0['bezierCurveTo'](300.1,0x180,301.2,385.3,302.5,386.6),_0xf697a0[_0x219038(0x3fd)](303.8,387.9,305.1,389.4,306.5,390.9),_0xf697a0[_0x219038(0x3fd)](0x138,397.1,318.2,404.9,0x144,414.3),_0xf697a0[_0x219038(0x3fd)](324.7,415.5,325.5,416.6,326.2,417.9),_0xf697a0[_0x219038(0x3fd)](326.9,419.1,327.6,420.3,328.3,421.6),_0xf697a0[_0x219038(0x3fd)](0x149,422.8,329.7,424.1,330.4,425.4),_0xf697a0[_0x219038(0x3fd)](330.7,0x1aa,331.1,426.7,331.4,427.4),_0xf697a0[_0x219038(0x3fd)](0x14c,428.6,332.6,429.9,333.2,431.2),_0xf697a0['lineTo'](334.1,433.1),_0xf697a0[_0x219038(0x4ba)](334.5,434.1),_0xf697a0['lineTo'](334.7,434.6),_0xf697a0['lineTo'](334.8,434.7),_0xf697a0['lineTo'](334.8,434.8),_0xf697a0[_0x219038(0x3fd)](334.8,434.8,334.8,434.8,334.7,434.8),_0xf697a0['lineTo'](334.4,434.8),_0xf697a0['bezierCurveTo'](0x14d,434.9,331.6,435.1,330.2,435.3),_0xf697a0[_0x219038(0x3fd)](328.9,435.4,327.6,435.5,326.3,435.6),_0xf697a0[_0x219038(0x3fd)](325.6,435.7,324.8,435.7,324.1,435.8),_0xf697a0['bezierCurveTo'](321.2,436.2,318.2,436.5,315.3,437.1),_0xf697a0[_0x219038(0x3fd)](312.3,437.5,309.5,438.2,306.6,438.8),_0xf697a0[_0x219038(0x3fd)](303.8,439.5,0x12d,440.2,298.3,441.1),_0xf697a0[_0x219038(0x3fd)](295.6,441.9,0x125,442.9,290.4,443.7),_0xf697a0[_0x219038(0x3fd)](289.1,444.2,287.9,444.7,286.6,445.2),_0xf697a0[_0x219038(0x3fd)](0x11e,445.4,285.4,445.7,284.7,445.9),_0xf697a0[_0x219038(0x3fd)](284.1,446.2,283.5,446.4,282.9,446.7),_0xf697a0['bezierCurveTo'](273.3,450.8,264.8,455.1,257.8,458.9),_0xf697a0[_0x219038(0x3fd)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0xf697a0['fill'](),_0xf697a0['fillStyle']=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](0xb1,376.4),_0xf697a0[_0x219038(0x3fd)](0xb1,376.4,178.8,375.9,182.1,375.2),_0xf697a0['bezierCurveTo'](185.4,374.6,190.3,373.8,196.5,373.5),_0xf697a0[_0x219038(0x3fd)](202.6,373.2,209.9,373.4,217.9,0x176),_0xf697a0[_0x219038(0x3fd)](225.9,374.7,234.6,375.8,243.7,376.9),_0xf697a0[_0x219038(0x3fd)](244.3,0x179,244.8,0x179,245.4,377.1),_0xf697a0[_0x219038(0x4ba)](245.8,377.1),_0xf697a0[_0x219038(0x4ba)](245.8,377.1),_0xf697a0[_0x219038(0x4ba)](245.8,377.1),_0xf697a0[_0x219038(0x4ba)](245.8,377.1),_0xf697a0[_0x219038(0x4ba)](245.9,377.1),_0xf697a0[_0x219038(0x3fd)](245.9,377.1,245.9,377.1,245.9,0x179),_0xf697a0[_0x219038(0x4ba)](245.8,376.9),_0xf697a0['lineTo'](245.8,376.8),_0xf697a0[_0x219038(0x4ba)](245.4,376.3),_0xf697a0[_0x219038(0x3fd)](244.7,375.5,244.1,374.7,243.5,0x176),_0xf697a0['bezierCurveTo'](242.2,372.5,240.9,0x173,239.6,369.6),_0xf697a0['bezierCurveTo'](234.4,0x16c,229.3,359.3,224.9,355.4),_0xf697a0[_0x219038(0x3fd)](216.1,347.6,210.3,342.8,209.4,0x156),_0xf697a0[_0x219038(0x3fd)](208.9,341.6,210.3,342.3,213.1,0x158),_0xf697a0[_0x219038(0x3fd)](215.9,345.7,220.1,348.3,225.3,351.9),_0xf697a0[_0x219038(0x3fd)](230.4,355.5,236.4,0x168,242.6,365.6),_0xf697a0[_0x219038(0x3fd)](243.4,366.3,244.1,0x16f,244.9,367.8),_0xf697a0[_0x219038(0x3fd)](245.7,368.6,246.4,369.3,247.2,370.1),_0xf697a0['bezierCurveTo'](0xf8,370.9,248.7,371.7,249.4,372.5),_0xf697a0[_0x219038(0x4ba)](0xfa,373.1),_0xf697a0[_0x219038(0x3fd)](250.1,373.2,250.1,373.2,250.2,373.3),_0xf697a0[_0x219038(0x4ba)](250.4,373.6),_0xf697a0[_0x219038(0x4ba)](250.9,374.2),_0xf697a0['bezierCurveTo'](251.5,0x177,252.2,375.8,252.8,376.6),_0xf697a0[_0x219038(0x3fd)](254.1,378.2,255.4,379.9,256.7,381.7),_0xf697a0[_0x219038(0x4ba)](257.7,0x17f),_0xf697a0[_0x219038(0x4ba)](258.2,383.7),_0xf697a0['lineTo'](258.3,383.9),_0xf697a0[_0x219038(0x4ba)](258.3,383.9),_0xf697a0['lineTo'](258.3,383.9),_0xf697a0['lineTo'](258.2,383.9),_0xf697a0[_0x219038(0x4ba)](257.8,383.9),_0xf697a0['bezierCurveTo'](256.7,383.8,255.6,383.7,254.6,383.6),_0xf697a0[_0x219038(0x3fd)](252.4,383.4,250.2,383.2,0xf8,383.1),_0xf697a0['bezierCurveTo'](246.4,382.9,244.9,382.8,243.3,382.6),_0xf697a0['bezierCurveTo'](234.1,381.5,225.4,0x17c,217.6,378.8),_0xf697a0['bezierCurveTo'](209.7,377.6,202.7,376.7,196.7,376.3),_0xf697a0['bezierCurveTo'](190.7,375.9,185.9,375.9,182.5,0x178),_0xf697a0[_0x219038(0x3fd)](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0xf697a0['fill'](),_0xf697a0[_0x219038(0x552)]=_0x2ee191,(_0xf697a0[_0x219038(0x39d)](),_0xf697a0[_0x219038(0x332)](458.7,346.3),_0xf697a0[_0x219038(0x3fd)](458.7,346.3,456.7,347.4,0x1c5,349.4),_0xf697a0[_0x219038(0x3fd)](449.4,351.5,444.2,354.6,438.1,0x167),_0xf697a0[_0x219038(0x3fd)](432.1,363.4,425.3,369.1,418.2,375.9),_0xf697a0[_0x219038(0x3fd)](411.1,382.7,403.7,390.6,396.1,399.1),_0xf697a0['bezierCurveTo'](0x18a,401.5,391.9,403.9,389.8,406.2),_0xf697a0[_0x219038(0x3fd)](388.1,408.1,386.5,0x19a,384.8,411.8),_0xf697a0[_0x219038(0x4ba)](383.6,413.2),_0xf697a0[_0x219038(0x4ba)](383.4,413.4),_0xf697a0[_0x219038(0x4ba)](383.3,413.5),_0xf697a0[_0x219038(0x4ba)](383.3,413.4),_0xf697a0[_0x219038(0x4ba)](383.2,412.9),_0xf697a0[_0x219038(0x4ba)](0x17f,411.9),_0xf697a0[_0x219038(0x3fd)](382.7,410.6,382.4,409.3,382.2,408.1),_0xf697a0['bezierCurveTo'](381.9,406.8,381.6,405.6,381.4,404.4),_0xf697a0[_0x219038(0x3fd)](381.2,403.4,381.1,402.5,380.9,401.5),_0xf697a0[_0x219038(0x3fd)](380.7,400.2,380.5,398.9,380.3,397.6),_0xf697a0['bezierCurveTo'](379.9,395.1,379.6,392.6,379.4,390.1),_0xf697a0[_0x219038(0x3fd)](378.3,380.4,377.5,371.9,376.5,364.6),_0xf697a0[_0x219038(0x3fd)](375.6,357.4,374.5,351.5,373.3,347.4),_0xf697a0[_0x219038(0x3fd)](373.1,346.3,372.7,345.4,372.5,344.6),_0xf697a0[_0x219038(0x3fd)](372.2,343.8,0x174,0x157,371.7,342.4),_0xf697a0['bezierCurveTo'](371.2,341.2,370.9,340.4,370.7,0x154),_0xf697a0[_0x219038(0x3fd)](370.5,339.6,370.7,339.9,371.2,340.6),_0xf697a0[_0x219038(0x3fd)](371.7,341.4,372.5,342.6,373.4,344.5),_0xf697a0['bezierCurveTo'](375.2,348.2,377.2,354.1,0x17b,361.7),_0xf697a0[_0x219038(0x3fd)](380.8,369.3,382.4,378.4,384.1,388.5),_0xf697a0[_0x219038(0x3fd)](384.5,0x187,0x181,393.6,385.4,396.2),_0xf697a0[_0x219038(0x3fd)](385.6,397.5,385.9,398.8,386.1,400.1),_0xf697a0[_0x219038(0x3fd)](386.5,0x192,386.4,401.3,386.4,401.5),_0xf697a0['lineTo'](386.4,401.5),_0xf697a0[_0x219038(0x4ba)](386.4,401.5),_0xf697a0['lineTo'](386.5,401.4),_0xf697a0[_0x219038(0x4ba)](386.9,400.9),_0xf697a0[_0x219038(0x4ba)](0x183,400.8),_0xf697a0[_0x219038(0x4ba)](387.5,400.2),_0xf697a0['lineTo'](388.9,398.6),_0xf697a0['bezierCurveTo'](389.8,397.5,390.8,396.5,391.7,395.4),_0xf697a0[_0x219038(0x3fd)](399.4,386.8,407.1,378.9,414.8,372.4),_0xf697a0['bezierCurveTo'](422.4,365.8,429.9,360.6,436.4,356.7),_0xf697a0['bezierCurveTo'](0x1bb,352.8,448.6,350.3,452.5,348.7),_0xf697a0[_0x219038(0x3fd)](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0xf697a0[_0x219038(0x3fd)](458.1,346.5,458.7,346.3,458.7,346.3)),_0xf697a0[_0x219038(0x1c3)](),_0xf697a0['restore'](),this['_baseTexture'][_0x219038(0x48f)]();},Bitmap[_0x502049(0x4ca)]['drawSakuraPetal']=function(_0x2a7fed,_0x233208,_0x11022c){const _0x71e2ea=_0x502049,_0x3f03e7=this[_0x71e2ea(0x4a4)];_0x3f03e7[_0x71e2ea(0x260)]();const _0x1691f8=_0x3f03e7[_0x71e2ea(0x2fe)](0x0,this[_0x71e2ea(0x3e7)]/0x2,this[_0x71e2ea(0x313)]/0x2,this[_0x71e2ea(0x3e7)]/0x2);_0x1691f8[_0x71e2ea(0x541)](0x0,_0x2a7fed||'#faaacf'),_0x1691f8[_0x71e2ea(0x541)](0x1,_0x233208||'#fddbe2'),_0x3f03e7[_0x71e2ea(0x552)]=_0x1691f8,(_0x3f03e7['beginPath'](),_0x3f03e7['moveTo'](12.57908,31.191794),_0x3f03e7[_0x71e2ea(0x3fd)](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0x3f03e7[_0x71e2ea(0x3fd)](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0x3f03e7[_0x71e2ea(0x3fd)](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0x3f03e7[_0x71e2ea(0x3fd)](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0x3f03e7[_0x71e2ea(0x3fd)](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0x3f03e7['bezierCurveTo'](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0x3f03e7[_0x71e2ea(0x3fd)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0x3f03e7[_0x71e2ea(0x3fd)](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0x3f03e7[_0x71e2ea(0x1c3)](),_0x3f03e7['strokeColor']=_0x11022c||'#000000',_0x3f03e7[_0x71e2ea(0x1c8)](),_0x3f03e7[_0x71e2ea(0x260)](),_0x3f03e7['restore'](),this[_0x71e2ea(0x267)][_0x71e2ea(0x48f)]();},Bitmap[_0x502049(0x4ca)][_0x502049(0x5ed)]=function(_0x2dd6fc){const _0x495e5d=_0x502049,_0x160392=this[_0x495e5d(0x4a4)];_0x2dd6fc=_0x2dd6fc||[_0x495e5d(0x48a),_0x495e5d(0x472),_0x495e5d(0x3a6),'#00aa00',_0x495e5d(0x5d9),_0x495e5d(0x370)],_0x160392[_0x495e5d(0x260)](),_0x160392[_0x495e5d(0x3a4)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0x160392['fillStyle']=_0x2dd6fc[0x0],_0x160392['strokeStyle']=_0x2dd6fc[0x5],_0x160392['lineWidth']=0xc,(_0x160392[_0x495e5d(0x39d)](),_0x160392[_0x495e5d(0x332)](431.62,249.52),_0x160392[_0x495e5d(0x3fd)](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0x160392[_0x495e5d(0x3fd)](430.23,276.86,429.73,280.75,429.1,284.61),_0x160392[_0x495e5d(0x3fd)](428.47,288.47,427.91,292.3,427.37,296.18),_0x160392[_0x495e5d(0x3fd)](426.83,300.06,426.06,303.89,425.37,307.73),_0x160392[_0x495e5d(0x3fd)](424.68,311.57,423.88,315.4,423.26,319.24),_0x160392[_0x495e5d(0x3fd)](422.64,323.08,422.18,326.95,421.56,330.82),_0x160392[_0x495e5d(0x3fd)](420.94,334.69,420.14,338.52,419.39,342.35),_0x160392['bezierCurveTo'](418.64,346.18,417.8,350.01,416.84,353.81),_0x160392[_0x495e5d(0x3fd)](415.88,357.61,414.75,361.36,413.6,365.1),_0x160392[_0x495e5d(0x3fd)](411.28,372.57,408.73,379.96,406.25,387.35),_0x160392[_0x495e5d(0x3fd)](405.01,391.06,403.73,394.77,402.15,398.35),_0x160392[_0x495e5d(0x3fd)](400.57,401.93,398.73,405.42,396.87,408.87),_0x160392[_0x495e5d(0x3fd)](395.01,412.32,0x189,415.72,0x187,419.05),_0x160392['bezierCurveTo'](0x185,422.38,386.74,425.65,384.38,428.79),_0x160392[_0x495e5d(0x3fd)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0x160392['bezierCurveTo'](363.63,452.25,358.11,457.81,352.4,463.16),_0x160392[_0x495e5d(0x3fd)](349.56,465.85,346.63,468.42,343.72,471.04),_0x160392[_0x495e5d(0x4ba)](0x14f,478.86),_0x160392[_0x495e5d(0x4ba)](326.28,486.68),_0x160392[_0x495e5d(0x4ba)](321.9,490.58),_0x160392['bezierCurveTo'](320.42,491.87,318.9,493.12,317.31,494.31),_0x160392[_0x495e5d(0x3fd)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0x160392[_0x495e5d(0x3fd)](305.65,501.74,303.88,502.55,302.15,503.43),_0x160392['lineTo'](296.92,506.07),_0x160392[_0x495e5d(0x3fd)](293.43,507.82,289.92,509.53,286.29,511.07),_0x160392[_0x495e5d(0x3fd)](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0x160392[_0x495e5d(0x3fd)](271.49,516.37,267.75,517.45,0x108,518.58),_0x160392[_0x495e5d(0x3fd)](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0x160392[_0x495e5d(0x3fd)](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0x160392[_0x495e5d(0x4ba)](234.87,522.46),_0x160392[_0x495e5d(0x4ba)](231.93,522.57),_0x160392[_0x495e5d(0x3fd)](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0x160392['lineTo'](229.29,522.84),_0x160392['lineTo'](229.12,522.84),_0x160392[_0x495e5d(0x4ba)](228.9,522.84),_0x160392[_0x495e5d(0x3fd)](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0x160392[_0x495e5d(0x4ba)](220.44,520.98),_0x160392[_0x495e5d(0x3fd)](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0x160392[_0x495e5d(0x3fd)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0x160392[_0x495e5d(0x4ba)](213.61,515.56),_0x160392[_0x495e5d(0x4ba)](213.51,515.44),_0x160392[_0x495e5d(0x4ba)](213.44,515.27),_0x160392[_0x495e5d(0x4ba)](213.44,515.22),_0x160392['bezierCurveTo'](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0x160392['bezierCurveTo'](210.09,508.23,209.21,506.46,208.39,504.65),_0x160392[_0x495e5d(0x3fd)](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0x160392[_0x495e5d(0x3fd)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0x160392[_0x495e5d(0x3fd)](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0x160392[_0x495e5d(0x3fd)](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0x160392[_0x495e5d(0x3fd)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0x160392['bezierCurveTo'](204.99,443.31,204.17,439.98,203.25,436.68),_0x160392[_0x495e5d(0x3fd)](203.12,436.2,202.99,435.68,202.85,435.26),_0x160392['lineTo'](199.49,0x1a8),_0x160392[_0x495e5d(0x4ba)](196.33,412.63),_0x160392[_0x495e5d(0x3fd)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0x160392[_0x495e5d(0x3fd)](192.79,393.13,192.48,385.3,192.02,377.41),_0x160392[_0x495e5d(0x3fd)](191.77,369.41,192.93,361.55,194.4,353.82),_0x160392['lineTo'](196.71,342.26),_0x160392['bezierCurveTo'](197.47,338.41,198.18,334.55,198.81,330.69),_0x160392[_0x495e5d(0x3fd)](199.44,326.83,200.07,322.93,200.45,319.07),_0x160392[_0x495e5d(0x3fd)](200.83,315.21,0xc9,311.25,201.45,307.31),_0x160392[_0x495e5d(0x3fd)](202.45,299.51,203.2,291.66,205.03,283.93),_0x160392[_0x495e5d(0x3fd)](206.86,276.2,210.25,0x10d,212.78,261.6),_0x160392[_0x495e5d(0x3fd)](215.47,254.2,218.06,246.79,220.78,239.41),_0x160392['bezierCurveTo'](222.24,235.74,223.88,232.16,225.46,228.56),_0x160392[_0x495e5d(0x3fd)](227.04,224.96,228.46,221.33,0xe6,217.7),_0x160392['lineTo'](234.48,206.81),_0x160392[_0x495e5d(0x3fd)](235.91,203.21,236.93,199.36,238.48,195.74),_0x160392[_0x495e5d(0x4ba)](240.77,190.29),_0x160392['bezierCurveTo'](241.53,188.47,242.27,186.64,243.15,184.89),_0x160392[_0x495e5d(0x3fd)](244.83,181.33,246.56,177.79,248.15,174.23),_0x160392[_0x495e5d(0x3fd)](249.74,170.67,251.28,167.02,253.15,163.5),_0x160392[_0x495e5d(0x3fd)](255.02,159.98,257.01,156.61,259.15,153.29),_0x160392[_0x495e5d(0x3fd)](261.29,149.97,263.53,146.74,265.82,143.53),_0x160392[_0x495e5d(0x3fd)](268.11,140.32,270.29,137.11,272.31,133.75),_0x160392[_0x495e5d(0x3fd)](274.33,130.39,276.31,126.98,278.2,123.57),_0x160392[_0x495e5d(0x3fd)](280.09,120.16,281.77,116.57,283.6,113.1),_0x160392[_0x495e5d(0x3fd)](284.52,111.36,285.47,109.62,286.5,107.93),_0x160392[_0x495e5d(0x3fd)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0x160392['bezierCurveTo'](291.46,101.7,292.9,100.35,294.29,98.98),_0x160392[_0x495e5d(0x3fd)](295.68,97.61,297.01,96.17,298.37,94.75),_0x160392['lineTo'](306.51,86.23),_0x160392['bezierCurveTo'](309.21,83.35,312.03,80.59,314.93,77.93),_0x160392['bezierCurveTo'](317.83,75.27,320.83,72.71,323.87,70.22),_0x160392[_0x495e5d(0x3fd)](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0x160392['bezierCurveTo'](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0x160392['bezierCurveTo'](341.91,49.84,344.23,46.49,347.5,44.1),_0x160392[_0x495e5d(0x3fd)](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0x160392['bezierCurveTo'](353.37,41.33,353.89,41.2,354.34,41.1),_0x160392[_0x495e5d(0x3fd)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0x160392[_0x495e5d(0x3fd)](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0x160392['bezierCurveTo'](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0x160392[_0x495e5d(0x4ba)](363.02,46.07),_0x160392[_0x495e5d(0x3fd)](364.36,47.52,365.68,48.98,366.95,50.49),_0x160392[_0x495e5d(0x3fd)](370.89,55.3,374.55,60.33,378.05,65.49),_0x160392['lineTo'](378.05,65.49),_0x160392[_0x495e5d(0x3fd)](378.99,66.86,379.91,68.23,380.83,69.61),_0x160392[_0x495e5d(0x3fd)](383.02,72.87,385.19,76.15,387.29,79.48),_0x160392[_0x495e5d(0x3fd)](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0x160392[_0x495e5d(0x3fd)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0x160392[_0x495e5d(0x3fd)](398.34,104.67,399.22,108.5,400.29,112.28),_0x160392[_0x495e5d(0x3fd)](401.36,116.06,402.41,119.83,403.67,123.54),_0x160392[_0x495e5d(0x4ba)](407.58,134.66),_0x160392[_0x495e5d(0x3fd)](408.86,138.3,410.15,141.94,411.42,145.59),_0x160392[_0x495e5d(0x3fd)](412.69,149.24,414.06,153.14,415.34,156.93),_0x160392['lineTo'](417.23,162.52),_0x160392[_0x495e5d(0x4ba)](418.98,168.15),_0x160392[_0x495e5d(0x3fd)](420.12,171.91,421.23,175.7,422.1,179.55),_0x160392[_0x495e5d(0x4ba)](427.1,202.6),_0x160392['lineTo'](428.36,208.36),_0x160392['lineTo'](428.98,211.24),_0x160392[_0x495e5d(0x3fd)](429.173333,212.22,429.333333,213.2,429.46,214.18),_0x160392[_0x495e5d(0x3fd)](0x1ae,218.11,430.15,222.05,430.4,225.96),_0x160392[_0x495e5d(0x3fd)](0x1af,233.79,431.51,241.64,431.62,249.52),_0x160392[_0x495e5d(0x1c3)]()),_0x160392[_0x495e5d(0x1c8)](),_0x160392['fillStyle']=_0x2dd6fc[0x1],(_0x160392[_0x495e5d(0x39d)](),_0x160392['moveTo'](285.75,360.45),_0x160392['lineTo'](317.05,277.5),_0x160392['lineTo'](329.05,225.84),_0x160392[_0x495e5d(0x4ba)](340.79,165.58),_0x160392[_0x495e5d(0x4ba)](0x15b,124.66),_0x160392[_0x495e5d(0x4ba)](349.15,110.28),_0x160392[_0x495e5d(0x4ba)](352.38,88.17),_0x160392[_0x495e5d(0x4ba)](354.04,74.9),_0x160392['bezierCurveTo'](354.04,74.9,340.19,93.66,0x142,121.85),_0x160392['lineTo'](0x142,121.85),_0x160392['lineTo'](318.94,116.08),_0x160392[_0x495e5d(0x4ba)](315.07,108.52),_0x160392[_0x495e5d(0x4ba)](313.88,105.61),_0x160392[_0x495e5d(0x3fd)](313.88,105.61,320.3,123.77,309.71,141.31),_0x160392['lineTo'](309.71,141.31),_0x160392[_0x495e5d(0x3fd)](306.916667,145.83,304.09,150.496667,301.23,155.31),_0x160392[_0x495e5d(0x4ba)](301.23,155.31),_0x160392[_0x495e5d(0x4ba)](297.4,0x95),_0x160392['lineTo'](293.4,142.73),_0x160392[_0x495e5d(0x4ba)](288.67,134.87),_0x160392[_0x495e5d(0x3fd)](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0x160392[_0x495e5d(0x4ba)](288.41,177.53),_0x160392['bezierCurveTo'](286.65,180.676667,284.896667,183.86,283.15,187.08),_0x160392[_0x495e5d(0x4ba)](283.15,187.08),_0x160392[_0x495e5d(0x4ba)](279.22,182.53),_0x160392[_0x495e5d(0x4ba)](272.79,175.59),_0x160392['bezierCurveTo'](275.19,178.45,281.64,188.49,273.09,206.31),_0x160392[_0x495e5d(0x4ba)](273.09,206.31),_0x160392[_0x495e5d(0x3fd)](270.72,211.02,268.4,215.77,266.15,220.52),_0x160392[_0x495e5d(0x4ba)](266.15,220.52),_0x160392[_0x495e5d(0x4ba)](263.84,218.34),_0x160392[_0x495e5d(0x4ba)](260.92,215.6),_0x160392[_0x495e5d(0x3fd)](260.92,215.6,265.27,221.08,259.07,236.13),_0x160392[_0x495e5d(0x4ba)](259.07,236.13),_0x160392[_0x495e5d(0x3fd)](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0x160392[_0x495e5d(0x4ba)](252.07,253.13),_0x160392[_0x495e5d(0x4ba)](247.51,249.29),_0x160392[_0x495e5d(0x4ba)](244.92,0xf7),_0x160392['lineTo'](243.76,246.13),_0x160392[_0x495e5d(0x3fd)](246.52,248.92,250.54,256.13,244.9,272.77),_0x160392[_0x495e5d(0x4ba)](244.9,272.77),_0x160392['bezierCurveTo'](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0x160392[_0x495e5d(0x4ba)](241.63,282.18),_0x160392[_0x495e5d(0x4ba)](237.21,0x114),_0x160392[_0x495e5d(0x4ba)](233.81,271.77),_0x160392[_0x495e5d(0x4ba)](230.81,267.86),_0x160392['bezierCurveTo'](233.81,272.45,239.7,285.52,232.29,310.91),_0x160392[_0x495e5d(0x4ba)](232.29,310.91),_0x160392[_0x495e5d(0x3fd)](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0x160392[_0x495e5d(0x4ba)](230.29,317.56),_0x160392[_0x495e5d(0x4ba)](226.67,310.46),_0x160392[_0x495e5d(0x4ba)](223.88,304.91),_0x160392['lineTo'](221.49,299.78),_0x160392[_0x495e5d(0x3fd)](224.38,307.42,228.04,322.78,222.56,344.43),_0x160392['lineTo'](222.56,344.43),_0x160392[_0x495e5d(0x3fd)](222.08,346.16,221.62,347.89,221.15,349.62),_0x160392[_0x495e5d(0x4ba)](221.15,349.62),_0x160392['lineTo'](219.97,346.31),_0x160392[_0x495e5d(0x4ba)](215.78,0x150),_0x160392[_0x495e5d(0x4ba)](215.38,334.89),_0x160392[_0x495e5d(0x3fd)](217.23,341.26,219.38,353.39,216.06,369.47),_0x160392[_0x495e5d(0x3fd)](215.62,371.28,215.19,373.08,214.76,374.89),_0x160392['lineTo'](214.7,375.14),_0x160392[_0x495e5d(0x4ba)](214.7,375.14),_0x160392[_0x495e5d(0x3fd)](213.32,381.06,212.01,386.96,210.77,392.84),_0x160392[_0x495e5d(0x4ba)](210.77,392.84),_0x160392['lineTo'](209.36,389.71),_0x160392[_0x495e5d(0x4ba)](0xd0,386.2),_0x160392[_0x495e5d(0x4ba)](207.12,383.09),_0x160392[_0x495e5d(0x4ba)](206.37,378.74),_0x160392['bezierCurveTo'](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0x160392['bezierCurveTo'](205.89,418.61,205.43,421.37,205.01,424.12),_0x160392['bezierCurveTo'](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0x160392['lineTo'](205.01,424.27),_0x160392[_0x495e5d(0x3fd)](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0x160392[_0x495e5d(0x3fd)](204.14,440.03,204.96,443.36,205.81,446.68),_0x160392[_0x495e5d(0x3fd)](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0x160392[_0x495e5d(0x3fd)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0x160392[_0x495e5d(0x3fd)](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0x160392['bezierCurveTo'](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0x160392[_0x495e5d(0x3fd)](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0x160392['bezierCurveTo'](209.18,506.51,210.06,508.28,210.95,510.04),_0x160392[_0x495e5d(0x3fd)](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0x160392[_0x495e5d(0x4ba)](213.41,515.32),_0x160392[_0x495e5d(0x4ba)](213.48,515.49),_0x160392[_0x495e5d(0x4ba)](213.58,515.61),_0x160392[_0x495e5d(0x4ba)](214.99,517.23),_0x160392[_0x495e5d(0x3fd)](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0x160392[_0x495e5d(0x3fd)](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0x160392['lineTo'](220.54,521.08),_0x160392[_0x495e5d(0x3fd)](234.62,498.82,250.27,460.36,250.27,460.36)),_0x160392[_0x495e5d(0x1c3)](),_0x160392['fillStyle']=_0x2dd6fc[0x2],(_0x160392[_0x495e5d(0x39d)](),_0x160392[_0x495e5d(0x332)](430.49,225.94),_0x160392[_0x495e5d(0x3fd)](430.24,222.03,430.09,218.09,429.55,214.16),_0x160392[_0x495e5d(0x3fd)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x160392[_0x495e5d(0x4ba)](428.45,208.34),_0x160392['lineTo'](427.19,202.58),_0x160392['lineTo'](422.19,179.53),_0x160392['bezierCurveTo'](421.32,175.68,420.19,171.89,419.07,168.13),_0x160392[_0x495e5d(0x4ba)](417.32,162.5),_0x160392[_0x495e5d(0x4ba)](415.43,156.91),_0x160392[_0x495e5d(0x3fd)](412.91,149.45,410.28,142.05,407.67,134.64),_0x160392[_0x495e5d(0x4ba)](403.76,123.52),_0x160392[_0x495e5d(0x3fd)](402.5,119.81,401.42,116.04,400.38,112.26),_0x160392[_0x495e5d(0x3fd)](399.34,108.48,398.43,104.65,397.31,100.87),_0x160392['bezierCurveTo'](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0x160392[_0x495e5d(0x3fd)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0x160392[_0x495e5d(0x3fd)](385.28,76.13,383.11,72.85,380.92,69.59),_0x160392['bezierCurveTo'](0x17c,68.21,379.08,66.84,378.14,65.47),_0x160392['bezierCurveTo'](387.8,80.8,395.04,109.72,396.47,149.27),_0x160392[_0x495e5d(0x4ba)](376.1,161.86),_0x160392[_0x495e5d(0x3fd)](379.85,159.59,396.59,0x96,396.69,160.27),_0x160392['bezierCurveTo'](396.75,167.25,396.633333,174.516667,396.34,182.07),_0x160392[_0x495e5d(0x4ba)](370.5,194.47),_0x160392[_0x495e5d(0x3fd)](379.58,190.47,396.45,184.53,395.5,196.63),_0x160392[_0x495e5d(0x3fd)](395.39,198.23,395.27,199.84,395.15,201.46),_0x160392[_0x495e5d(0x4ba)](389.25,207.26),_0x160392[_0x495e5d(0x4ba)](383.25,212.74),_0x160392[_0x495e5d(0x3fd)](383.25,212.74,380.25,215.38,375.87,218.98),_0x160392[_0x495e5d(0x3fd)](390.22,209.39,393.47,215.75,392.87,224.41),_0x160392['bezierCurveTo'](392.15,230.37,391.323333,236.463333,390.39,242.69),_0x160392[_0x495e5d(0x4ba)](374.29,253.84),_0x160392[_0x495e5d(0x3fd)](381.29,249.93,389.62,247.84,387.03,262.84),_0x160392[_0x495e5d(0x3fd)](386.036667,268.253333,384.96,273.74,383.8,279.3),_0x160392[_0x495e5d(0x4ba)](378.4,282.68),_0x160392['lineTo'](368.4,288.48),_0x160392[_0x495e5d(0x4ba)](351.28,0x12a),_0x160392['bezierCurveTo'](351.28,0x12a,382.89,280.72,379.45,298.88),_0x160392[_0x495e5d(0x3fd)](378.51,302.88,377.51,306.896667,376.45,310.93),_0x160392[_0x495e5d(0x4ba)](364.43,0x13d),_0x160392[_0x495e5d(0x4ba)](354.48,321.41),_0x160392['bezierCurveTo'](363.55,317.83,375.77,314.48,373.1,323.71),_0x160392[_0x495e5d(0x3fd)](373.01,324.03,372.93,324.35,372.84,324.71),_0x160392[_0x495e5d(0x3fd)](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0x160392['lineTo'](358.52,344.38),_0x160392[_0x495e5d(0x4ba)](353.36,347.17),_0x160392['lineTo'](341.49,352.49),_0x160392[_0x495e5d(0x3fd)](351.93,348.35,366.49,344.44,361.87,357.42),_0x160392[_0x495e5d(0x3fd)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0x160392['bezierCurveTo'](349.53,378.78,331.04,388.35,313.91,392.41),_0x160392['bezierCurveTo'](326.26,390.74,350.91,379.56,344.78,394.04),_0x160392[_0x495e5d(0x3fd)](339.71,403.42,334.34,412.3,328.78,420.68),_0x160392[_0x495e5d(0x3fd)](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0x160392['bezierCurveTo'](315.21,425.12,326.79,424.25,317.73,436.57),_0x160392[_0x495e5d(0x3fd)](311.08,445.57,304.32,453.89,297.65,461.51),_0x160392[_0x495e5d(0x3fd)](297.56,461.51,279.87,463.81,266.65,461.17),_0x160392[_0x495e5d(0x3fd)](280.85,464.3,296.44,463.02,284.31,476.04),_0x160392['bezierCurveTo'](280.976667,479.5,277.703333,482.77,274.49,485.85),_0x160392[_0x495e5d(0x3fd)](274.43,485.85,261.73,486.11,251.87,484.55),_0x160392['bezierCurveTo'](262.77,486.37,273.54,486.5,263.2,496.32),_0x160392[_0x495e5d(0x3fd)](258.69,500.32,254.47,503.9,250.65,507.01),_0x160392['bezierCurveTo'](250.55,507.01,238.65,508.01,233.16,506.79),_0x160392['bezierCurveTo'](239.07,508.66,243.85,511.37,237.87,516.9),_0x160392[_0x495e5d(0x3fd)](232.71,520.68,229.59,522.68,229.32,522.9),_0x160392['bezierCurveTo'](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0x160392[_0x495e5d(0x4ba)](234.9,522.52),_0x160392[_0x495e5d(0x4ba)](240.76,522.29),_0x160392[_0x495e5d(0x3fd)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0x160392[_0x495e5d(0x3fd)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0x160392[_0x495e5d(0x3fd)](267.75,517.47,271.49,516.39,275.23,515.19),_0x160392[_0x495e5d(0x3fd)](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0x160392[_0x495e5d(0x3fd)](289.9,509.53,293.43,507.82,296.92,506.09),_0x160392[_0x495e5d(0x4ba)](302.15,503.45),_0x160392[_0x495e5d(0x3fd)](303.88,502.57,305.65,501.72,307.38,500.76),_0x160392['bezierCurveTo'](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0x160392[_0x495e5d(0x3fd)](318.89,493.14,320.42,491.89,321.9,490.6),_0x160392[_0x495e5d(0x4ba)](326.28,486.7),_0x160392[_0x495e5d(0x4ba)](0x14f,478.88),_0x160392[_0x495e5d(0x4ba)](343.72,471.06),_0x160392[_0x495e5d(0x3fd)](346.63,468.44,349.56,465.87,352.4,463.18),_0x160392['bezierCurveTo'](358.11,457.83,363.63,452.27,0x171,446.59),_0x160392[_0x495e5d(0x3fd)](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0x160392[_0x495e5d(0x3fd)](386.71,425.67,388.93,422.42,390.97,419.07),_0x160392[_0x495e5d(0x3fd)](393.01,415.72,394.97,412.36,396.89,408.92),_0x160392[_0x495e5d(0x3fd)](398.81,405.48,400.57,402.02,402.17,398.4),_0x160392['bezierCurveTo'](403.77,394.78,405.03,391.08,406.27,387.4),_0x160392[_0x495e5d(0x3fd)](408.75,380.01,411.27,372.62,413.62,365.15),_0x160392[_0x495e5d(0x3fd)](414.77,361.41,415.89,357.67,416.86,353.86),_0x160392['bezierCurveTo'](417.83,350.05,418.64,346.24,419.41,342.4),_0x160392[_0x495e5d(0x3fd)](420.18,338.56,420.96,334.75,421.58,330.87),_0x160392['bezierCurveTo'](422.2,326.99,422.68,323.13,423.28,319.29),_0x160392[_0x495e5d(0x3fd)](423.88,315.45,424.7,311.61,425.39,307.78),_0x160392[_0x495e5d(0x3fd)](426.08,303.95,426.9,300.12,427.39,296.23),_0x160392['bezierCurveTo'](427.88,292.34,428.44,288.51,429.12,284.66),_0x160392[_0x495e5d(0x3fd)](429.8,280.81,430.25,276.91,430.64,273.02),_0x160392[_0x495e5d(0x3fd)](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0x160392[_0x495e5d(0x3fd)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x160392[_0x495e5d(0x1c3)](),_0x160392[_0x495e5d(0x552)]=_0x2dd6fc[0x3],(_0x160392[_0x495e5d(0x39d)](),_0x160392[_0x495e5d(0x332)](340.27,176.61),_0x160392[_0x495e5d(0x4ba)](348.27,122.21),_0x160392[_0x495e5d(0x4ba)](0x160,0x56),_0x160392[_0x495e5d(0x3fd)](0x160,0x56,349.18,94.32,344.36,108.7),_0x160392[_0x495e5d(0x4ba)](341.04,104.91),_0x160392['bezierCurveTo'](341.04,104.91,344.15,109.29,341.39,117.57),_0x160392['lineTo'](341.39,117.57),_0x160392[_0x495e5d(0x3fd)](339.01,124.71,336.28,132.9,333.28,141.95),_0x160392['lineTo'](333.28,141.95),_0x160392[_0x495e5d(0x4ba)](328.13,133.05),_0x160392[_0x495e5d(0x4ba)](325.91,129.17),_0x160392['bezierCurveTo'](325.91,129.17,332.53,142.95,325.57,165.28),_0x160392['lineTo'](325.57,165.28),_0x160392['bezierCurveTo'](323.503333,171.573333,321.35,178.12,319.11,184.92),_0x160392[_0x495e5d(0x4ba)](319.11,184.92),_0x160392[_0x495e5d(0x4ba)](0x13b,177.71),_0x160392[_0x495e5d(0x4ba)](308.25,166.82),_0x160392['bezierCurveTo'](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0x160392[_0x495e5d(0x4ba)](311.25,208.82),_0x160392[_0x495e5d(0x3fd)](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0x160392[_0x495e5d(0x4ba)](307.78,219.49),_0x160392['lineTo'](300.16,0xd0),_0x160392[_0x495e5d(0x4ba)](295.37,201.93),_0x160392['bezierCurveTo'](295.37,201.93,308.11,218.47,299.78,244.52),_0x160392['bezierCurveTo'](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0x160392[_0x495e5d(0x4ba)](296.37,255.16),_0x160392[_0x495e5d(0x4ba)](290.64,0xf7),_0x160392[_0x495e5d(0x4ba)](280.58,236.2),_0x160392['bezierCurveTo'](281.58,237.26,296.58,254.13,287.96,281.57),_0x160392[_0x495e5d(0x4ba)](287.96,281.57),_0x160392[_0x495e5d(0x3fd)](287.333333,283.53,286.71,285.496667,286.09,287.47),_0x160392[_0x495e5d(0x4ba)](286.09,287.47),_0x160392['lineTo'](0x118,279.81),_0x160392[_0x495e5d(0x4ba)](270.72,270.71),_0x160392[_0x495e5d(0x3fd)](270.72,270.71,286.28,286.4,277.78,313.81),_0x160392['lineTo'](277.78,313.81),_0x160392[_0x495e5d(0x3fd)](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0x160392[_0x495e5d(0x4ba)](272.78,329.81),_0x160392[_0x495e5d(0x4ba)](265.2,315.89),_0x160392['lineTo'](259.75,307.61),_0x160392[_0x495e5d(0x3fd)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0x160392[_0x495e5d(0x4ba)](264.63,356.41),_0x160392['lineTo'](264.63,356.41),_0x160392['lineTo'](264.63,356.41),_0x160392[_0x495e5d(0x3fd)](263.683333,359.516667,262.74,362.62,261.8,365.72),_0x160392[_0x495e5d(0x4ba)](261.8,365.72),_0x160392['lineTo'](255.48,357.92),_0x160392[_0x495e5d(0x4ba)](248.69,349.01),_0x160392['bezierCurveTo'](248.69,349.01,261.56,365.87,253.9,392.1),_0x160392[_0x495e5d(0x4ba)](253.9,392.1),_0x160392[_0x495e5d(0x3fd)](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0x160392[_0x495e5d(0x4ba)](249.9,405.76),_0x160392['lineTo'](243.52,395.82),_0x160392['lineTo'](238.92,387.92),_0x160392['bezierCurveTo'](238.92,387.92,249.49,405.92,241.92,433.65),_0x160392['lineTo'](241.92,433.65),_0x160392[_0x495e5d(0x4ba)](239.82,441.18),_0x160392[_0x495e5d(0x4ba)](239.82,441.18),_0x160392[_0x495e5d(0x4ba)](0xe9,429.68),_0x160392['bezierCurveTo'](0xe9,429.68,239.72,442.12,234.11,462.31),_0x160392['lineTo'](234.11,462.31),_0x160392[_0x495e5d(0x3fd)](233.17,465.85,232.27,469.303333,231.41,472.67),_0x160392[_0x495e5d(0x4ba)](227.3,467.28),_0x160392[_0x495e5d(0x3fd)](227.3,467.28,230.97,473.84,228.38,484.69),_0x160392[_0x495e5d(0x4ba)](228.38,484.69),_0x160392['bezierCurveTo'](225.19,497.69,222.71,508.99,221.15,518.02),_0x160392[_0x495e5d(0x3fd)](0xf0,483.95,262.65,419.16,262.65,419.16),_0x160392[_0x495e5d(0x4ba)](306.26,315.71),_0x160392[_0x495e5d(0x4ba)](323.48,243.71)),_0x160392['fill'](),_0x160392[_0x495e5d(0x552)]=_0x2dd6fc[0x4],(_0x160392['beginPath'](),_0x160392[_0x495e5d(0x332)](430.49,225.94),_0x160392[_0x495e5d(0x3fd)](430.24,222.03,430.09,218.09,429.55,214.16),_0x160392[_0x495e5d(0x3fd)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x160392[_0x495e5d(0x4ba)](428.45,208.34),_0x160392[_0x495e5d(0x4ba)](427.19,202.58),_0x160392['lineTo'](422.19,179.53),_0x160392[_0x495e5d(0x3fd)](421.32,175.68,420.19,171.89,419.07,168.13),_0x160392['lineTo'](417.32,162.5),_0x160392[_0x495e5d(0x4ba)](415.43,156.91),_0x160392[_0x495e5d(0x3fd)](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0x160392[_0x495e5d(0x3fd)](412.03,148.49,448.2,358.03,321.91,490.57),_0x160392[_0x495e5d(0x4ba)](326.29,486.67),_0x160392[_0x495e5d(0x4ba)](335.01,478.85),_0x160392[_0x495e5d(0x4ba)](343.73,471.03),_0x160392[_0x495e5d(0x3fd)](346.64,468.41,349.57,465.84,352.41,463.15),_0x160392[_0x495e5d(0x3fd)](358.12,457.8,363.64,452.24,369.01,446.56),_0x160392[_0x495e5d(0x3fd)](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0x160392[_0x495e5d(0x3fd)](386.72,425.64,388.94,422.39,390.98,419.04),_0x160392[_0x495e5d(0x3fd)](393.02,415.69,394.98,412.33,396.9,408.89),_0x160392['bezierCurveTo'](398.82,405.45,400.58,401.99,402.18,398.37),_0x160392[_0x495e5d(0x3fd)](403.78,394.75,405.04,391.05,406.28,387.37),_0x160392[_0x495e5d(0x3fd)](408.76,379.98,411.28,372.59,413.63,365.12),_0x160392[_0x495e5d(0x3fd)](414.78,361.38,415.9,357.64,416.87,353.83),_0x160392[_0x495e5d(0x3fd)](417.84,350.02,418.65,346.21,419.42,342.37),_0x160392[_0x495e5d(0x3fd)](420.19,338.53,420.97,334.72,421.59,330.84),_0x160392[_0x495e5d(0x3fd)](422.21,326.96,422.69,323.1,423.29,319.26),_0x160392[_0x495e5d(0x3fd)](423.89,315.42,424.71,311.58,425.4,307.75),_0x160392[_0x495e5d(0x3fd)](426.09,303.92,426.91,300.09,427.4,296.2),_0x160392[_0x495e5d(0x3fd)](427.89,292.31,428.45,288.48,429.13,284.63),_0x160392[_0x495e5d(0x3fd)](429.81,280.78,430.26,276.88,430.65,272.99),_0x160392[_0x495e5d(0x3fd)](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0x160392[_0x495e5d(0x3fd)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x160392[_0x495e5d(0x1c3)](),_0x160392[_0x495e5d(0x552)]=_0x2dd6fc[0x5],_0x160392[_0x495e5d(0x423)]=_0x2dd6fc[0x5],_0x160392[_0x495e5d(0x32b)]=0.5,(_0x160392[_0x495e5d(0x39d)](),_0x160392[_0x495e5d(0x332)](299.66,335.53),_0x160392['bezierCurveTo'](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0x160392[_0x495e5d(0x3fd)](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0x160392['bezierCurveTo'](362.786667,318.47,367.35,316.243333,371.81,313.85),_0x160392[_0x495e5d(0x3fd)](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0x160392[_0x495e5d(0x3fd)](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0x160392['bezierCurveTo'](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0x160392[_0x495e5d(0x3fd)](380.33,308.296667,375.93,310.79,371.43,313.11),_0x160392['bezierCurveTo'](366.93,315.43,362.353333,317.57,357.7,319.53),_0x160392[_0x495e5d(0x3fd)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0x160392[_0x495e5d(0x3fd)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0x160392[_0x495e5d(0x3fd)](301.51,330.46,302.62,327.46,303.7,324.4),_0x160392[_0x495e5d(0x3fd)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0x160392[_0x495e5d(0x4ba)](314.12,311.35),_0x160392[_0x495e5d(0x4ba)](317.4,310.58),_0x160392['lineTo'](320.63,309.58),_0x160392['bezierCurveTo'](322.79,308.94,324.95,308.32,327.09,307.66),_0x160392['lineTo'](333.43,305.41),_0x160392[_0x495e5d(0x3fd)](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0x160392[_0x495e5d(0x3fd)](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0x160392[_0x495e5d(0x3fd)](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0x160392[_0x495e5d(0x3fd)](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0x160392[_0x495e5d(0x3fd)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0x160392['bezierCurveTo'](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0x160392['lineTo'](326.59,306.16),_0x160392[_0x495e5d(0x3fd)](324.45,306.78,322.3,307.34,320.16,307.94),_0x160392[_0x495e5d(0x4ba)](316.95,308.82),_0x160392['lineTo'](313.69,309.52),_0x160392[_0x495e5d(0x4ba)](308.57,310.6),_0x160392[_0x495e5d(0x4ba)](309.36,308.35),_0x160392['lineTo'](0x138,300.27),_0x160392['lineTo'](313.32,296.22),_0x160392[_0x495e5d(0x3fd)](313.77,294.88,314.21,293.53,314.58,292.16),_0x160392[_0x495e5d(0x3fd)](315.35,289.54,316.09,286.91,316.83,284.28),_0x160392[_0x495e5d(0x3fd)](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0x160392['lineTo'](349.3,270.03),_0x160392['lineTo'](355.47,266.47),_0x160392[_0x495e5d(0x3fd)](357.55,265.31,359.54,264.01,361.57,262.77),_0x160392[_0x495e5d(0x3fd)](363.6,261.53,365.57,260.29,367.57,258.97),_0x160392['bezierCurveTo'](375.57,253.84,383.32,248.36,390.96,242.73),_0x160392[_0x495e5d(0x3fd)](398.6,237.1,406.08,231.26,413.35,225.16),_0x160392[_0x495e5d(0x3fd)](405.98,231.16,398.35,236.81,390.66,242.32),_0x160392[_0x495e5d(0x3fd)](382.97,247.83,375.09,253.15,0x16f,258.13),_0x160392[_0x495e5d(0x3fd)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0x160392[_0x495e5d(0x3fd)](358.86,263.02,356.93,264.26,354.79,265.38),_0x160392[_0x495e5d(0x4ba)](348.58,268.83),_0x160392[_0x495e5d(0x4ba)](342.29,0x110),_0x160392[_0x495e5d(0x3fd)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0x160392[_0x495e5d(0x4ba)](319.2,275.76),_0x160392[_0x495e5d(0x3fd)](321.9,266.06,324.34,256.29,326.62,246.49),_0x160392['bezierCurveTo'](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0x160392[_0x495e5d(0x3fd)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0x160392[_0x495e5d(0x3fd)](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0x160392[_0x495e5d(0x3fd)](368.9,224.98,374.29,220.75,379.46,216.3),_0x160392[_0x495e5d(0x3fd)](384.63,211.85,389.65,207.18,394.36,202.24),_0x160392[_0x495e5d(0x3fd)](389.53,207.06,384.41,211.59,379.14,215.92),_0x160392[_0x495e5d(0x3fd)](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0x160392[_0x495e5d(0x3fd)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0x160392['bezierCurveTo'](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0x160392['bezierCurveTo'](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0x160392[_0x495e5d(0x3fd)](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0x160392[_0x495e5d(0x4ba)](393.36,182.9),_0x160392['lineTo'](334.11,211.14),_0x160392['lineTo'](334.44,209.48),_0x160392['bezierCurveTo'](336.66,197.92,338.73,186.326667,340.65,174.7),_0x160392[_0x495e5d(0x3fd)](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0x160392[_0x495e5d(0x3fd)](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0x160392[_0x495e5d(0x3fd)](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0x160392[_0x495e5d(0x3fd)](374.16,163.25,378.59,160.67,0x17f,157.94),_0x160392[_0x495e5d(0x3fd)](387.41,155.21,391.69,152.4,395.9,149.44),_0x160392[_0x495e5d(0x3fd)](391.62,152.31,387.25,155.03,382.82,157.65),_0x160392[_0x495e5d(0x3fd)](378.39,160.27,373.87,162.75,369.28,165.05),_0x160392[_0x495e5d(0x3fd)](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0x160392[_0x495e5d(0x3fd)](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0x160392[_0x495e5d(0x3fd)](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0x160392[_0x495e5d(0x3fd)](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0x160392['bezierCurveTo'](345.78,141.83,345.85,141.29,345.93,140.74),_0x160392[_0x495e5d(0x3fd)](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0x160392[_0x495e5d(0x3fd)](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0x160392[_0x495e5d(0x3fd)](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0x160392[_0x495e5d(0x3fd)](368.95,122.67,371.76,119.51,374.48,116.28),_0x160392['bezierCurveTo'](377.2,113.05,379.86,109.75,382.4,106.38),_0x160392[_0x495e5d(0x3fd)](379.79,109.7,377.07,112.93,374.29,116.11),_0x160392[_0x495e5d(0x3fd)](371.51,119.29,368.63,122.38,365.65,125.37),_0x160392[_0x495e5d(0x3fd)](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0x160392[_0x495e5d(0x3fd)](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0x160392[_0x495e5d(0x3fd)](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0x160392[_0x495e5d(0x3fd)](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0x160392[_0x495e5d(0x3fd)](350.57,106.84,350.78,105.04,0x15f,103.24),_0x160392[_0x495e5d(0x3fd)](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0x160392[_0x495e5d(0x3fd)](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0x160392[_0x495e5d(0x3fd)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0x160392['bezierCurveTo'](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0x160392[_0x495e5d(0x3fd)](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0x160392['bezierCurveTo'](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0x160392[_0x495e5d(0x3fd)](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0x160392[_0x495e5d(0x3fd)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0x160392['bezierCurveTo'](351.48,99.13,351.94,95.48,352.36,91.78),_0x160392['bezierCurveTo'](352.91,87.02,353.45,82.26,353.84,77.48),_0x160392[_0x495e5d(0x3fd)](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0x160392[_0x495e5d(0x4ba)](354.06,74.86),_0x160392[_0x495e5d(0x3fd)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0x160392[_0x495e5d(0x4ba)](352.83,83.08),_0x160392['lineTo'](351.66,91.23),_0x160392[_0x495e5d(0x3fd)](350.86,96.67,350.036667,102.1,349.19,107.52),_0x160392[_0x495e5d(0x3fd)](348.96,0x6d,348.71,110.52,348.47,111.95),_0x160392[_0x495e5d(0x3fd)](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0x160392[_0x495e5d(0x3fd)](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0x160392['bezierCurveTo'](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0x160392[_0x495e5d(0x3fd)](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0x160392['bezierCurveTo'](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0x160392[_0x495e5d(0x3fd)](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0x160392[_0x495e5d(0x3fd)](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0x160392[_0x495e5d(0x3fd)](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0x160392[_0x495e5d(0x3fd)](346.85,121.876667,345.33,130.953333,343.75,140.02),_0x160392[_0x495e5d(0x3fd)](342.99,144.34,342.21,148.64,341.43,152.95),_0x160392[_0x495e5d(0x3fd)](338.9,149.65,336.59,146.14,334.35,142.6),_0x160392[_0x495e5d(0x3fd)](331.84,138.6,329.43,134.6,327.08,130.48),_0x160392[_0x495e5d(0x3fd)](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0x160392['bezierCurveTo'](317.68,114.12,321.98,122.51,326.52,130.8),_0x160392['bezierCurveTo'](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0x160392[_0x495e5d(0x3fd)](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0x160392['bezierCurveTo'](338.08,171.43,334.79,188.09,331.14,204.71),_0x160392['lineTo'](330.93,205.64),_0x160392['bezierCurveTo'](330.54,204.77,330.14,203.92,329.7,203.09),_0x160392['lineTo'](328.46,200.64),_0x160392['lineTo'](327.15,198.24),_0x160392[_0x495e5d(0x3fd)](326.29,196.63,325.4,195.04,324.5,193.46),_0x160392[_0x495e5d(0x3fd)](323.6,191.88,322.71,190.29,321.78,188.72),_0x160392[_0x495e5d(0x3fd)](318.13,182.42,314.34,176.21,310.55,0xaa),_0x160392['bezierCurveTo'](302.93,157.6,295.18,145.29,287.3,133.07),_0x160392[_0x495e5d(0x3fd)](294.96,145.43,302.5,157.866667,309.92,170.38),_0x160392[_0x495e5d(0x3fd)](313.61,176.65,317.28,182.92,320.82,189.27),_0x160392[_0x495e5d(0x3fd)](321.72,190.85,322.59,192.44,323.46,194.04),_0x160392[_0x495e5d(0x3fd)](324.33,195.64,325.19,197.23,326.02,198.84),_0x160392[_0x495e5d(0x4ba)](327.28,201.25),_0x160392[_0x495e5d(0x4ba)](328.46,203.69),_0x160392['bezierCurveTo'](329.2,205.12,329.79,206.59,330.4,208.05),_0x160392['bezierCurveTo'](328.27,217.66,326.14,227.26,323.83,236.82),_0x160392[_0x495e5d(0x3fd)](323.31,0xef,322.77,241.17,322.23,243.35),_0x160392[_0x495e5d(0x3fd)](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0x160392[_0x495e5d(0x3fd)](309.17,220.21,304.89,214.22,300.51,208.33),_0x160392['bezierCurveTo'](296.13,202.44,291.51,196.75,286.74,191.14),_0x160392[_0x495e5d(0x3fd)](281.97,185.53,277.13,180.05,272.07,174.74),_0x160392[_0x495e5d(0x3fd)](277.01,180.16,281.74,185.74,286.36,191.46),_0x160392[_0x495e5d(0x3fd)](290.98,197.18,295.45,202.95,299.7,208.92),_0x160392[_0x495e5d(0x3fd)](303.95,214.89,308.06,220.92,311.76,227.24),_0x160392[_0x495e5d(0x3fd)](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0x160392[_0x495e5d(0x3fd)](319.56,253.903333,317.56,261.293333,315.44,268.66),_0x160392[_0x495e5d(0x4ba)](311.15,283.19),_0x160392[_0x495e5d(0x3fd)](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0x160392[_0x495e5d(0x3fd)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0x160392[_0x495e5d(0x3fd)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0x160392[_0x495e5d(0x3fd)](286.51,241.91,281.65,236.37,276.59,231.03),_0x160392['bezierCurveTo'](271.53,225.69,266.29,220.53,260.8,215.63),_0x160392[_0x495e5d(0x3fd)](266.18,220.63,271.29,225.93,276.22,231.37),_0x160392[_0x495e5d(0x3fd)](281.15,236.81,285.87,242.45,290.27,248.31),_0x160392['bezierCurveTo'](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0x160392[_0x495e5d(0x3fd)](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0x160392['bezierCurveTo'](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0x160392[_0x495e5d(0x4ba)](308.34,292.3),_0x160392[_0x495e5d(0x4ba)](305.78,0x12c),_0x160392['lineTo'](303.08,307.79),_0x160392[_0x495e5d(0x4ba)](302.38,309.67),_0x160392[_0x495e5d(0x3fd)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0x160392[_0x495e5d(0x3fd)](286.07,286.23,281.01,280.49,275.78,274.97),_0x160392[_0x495e5d(0x3fd)](270.55,269.45,264.98,264.22,259.31,259.13),_0x160392[_0x495e5d(0x3fd)](253.64,254.04,247.81,249.13,241.77,244.52),_0x160392[_0x495e5d(0x3fd)](247.71,249.27,253.41,254.32,258.97,259.52),_0x160392[_0x495e5d(0x3fd)](264.53,264.72,269.9,270.1,275.05,275.68),_0x160392[_0x495e5d(0x3fd)](280.2,281.26,285.05,287.09,289.61,293.16),_0x160392[_0x495e5d(0x3fd)](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0x160392['lineTo'](300.23,315.52),_0x160392[_0x495e5d(0x4ba)](294.37,330.91),_0x160392['bezierCurveTo'](291.99,337.05,289.593333,343.18,287.18,349.3),_0x160392[_0x495e5d(0x3fd)](283.87,347.64,281.89,344.1,279.84,340.74),_0x160392[_0x495e5d(0x3fd)](277.68,337.04,275.63,333.25,273.58,329.46),_0x160392[_0x495e5d(0x4ba)](270.51,323.78),_0x160392[_0x495e5d(0x3fd)](269.42,321.9,268.41,319.98,267.26,318.16),_0x160392[_0x495e5d(0x4ba)](265.57,315.39),_0x160392['lineTo'](263.81,312.67),_0x160392[_0x495e5d(0x3fd)](262.66,310.84,261.45,309.06,260.24,307.27),_0x160392[_0x495e5d(0x3fd)](255.4,300.13,250.33,293.15,245.14,286.27),_0x160392[_0x495e5d(0x3fd)](239.95,279.39,234.66,272.58,229.25,265.87),_0x160392['bezierCurveTo'](234.53,272.683333,239.693333,279.58,244.74,286.56),_0x160392[_0x495e5d(0x3fd)](249.79,293.56,254.74,300.56,259.41,307.82),_0x160392['bezierCurveTo'](260.58,309.63,261.75,311.43,262.86,313.27),_0x160392[_0x495e5d(0x4ba)](264.55,316.01),_0x160392[_0x495e5d(0x4ba)](266.18,318.79),_0x160392['bezierCurveTo'](267.29,320.63,268.25,322.55,269.29,324.42),_0x160392[_0x495e5d(0x4ba)](272.29,330.16),_0x160392[_0x495e5d(0x3fd)](274.29,333.99,276.29,337.82,278.36,341.61),_0x160392[_0x495e5d(0x3fd)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0x160392[_0x495e5d(0x3fd)](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0x160392[_0x495e5d(0x3fd)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0x160392[_0x495e5d(0x3fd)](282.943333,360.18,279.36,369.18,275.74,378.16),_0x160392[_0x495e5d(0x3fd)](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0x160392[_0x495e5d(0x3fd)](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0x160392[_0x495e5d(0x3fd)](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0x160392[_0x495e5d(0x3fd)](238.87,332.47,234.51,324.99,230.45,317.4),_0x160392[_0x495e5d(0x3fd)](226.39,309.81,222.45,302.09,218.9,294.22),_0x160392[_0x495e5d(0x3fd)](222.31,302.16,226.06,309.95,0xe6,317.63),_0x160392[_0x495e5d(0x3fd)](233.94,325.31,238.15,332.88,242.66,340.27),_0x160392[_0x495e5d(0x3fd)](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0x160392[_0x495e5d(0x3fd)](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0x160392['bezierCurveTo'](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0x160392[_0x495e5d(0x3fd)](270.03,392.36,265.07,404.6,260.07,416.82),_0x160392[_0x495e5d(0x3fd)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0x160392[_0x495e5d(0x3fd)](250.19,405.11,247.84,401.65,245.61,398.11),_0x160392[_0x495e5d(0x3fd)](241.18,391.02,237.18,383.63,233.44,376.11),_0x160392['bezierCurveTo'](229.7,368.59,226.22,360.96,222.93,353.23),_0x160392[_0x495e5d(0x3fd)](219.64,345.5,216.5,337.71,213.62,329.82),_0x160392[_0x495e5d(0x3fd)](216.34,337.77,219.33,345.63,222.47,353.43),_0x160392[_0x495e5d(0x3fd)](225.61,361.23,228.95,368.94,232.54,376.55),_0x160392[_0x495e5d(0x3fd)](236.13,384.16,0xf0,391.64,244.33,398.89),_0x160392[_0x495e5d(0x3fd)](246.51,402.5,248.81,406.05,251.33,409.47),_0x160392[_0x495e5d(0x3fd)](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0x160392[_0x495e5d(0x3fd)](255.15,429.01,250.953333,439.226667,246.74,449.44),_0x160392['bezierCurveTo'](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0x160392[_0x495e5d(0x3fd)](239.52,439.43,237.79,436.41,236.07,433.4),_0x160392[_0x495e5d(0x3fd)](232.66,427.34,229.43,421.17,225.97,415.11),_0x160392['bezierCurveTo'](224.25,412.11,222.44,409.11,220.52,406.17),_0x160392[_0x495e5d(0x3fd)](219.52,404.73,218.52,403.29,217.41,401.94),_0x160392[_0x495e5d(0x3fd)](216.3,400.59,215.2,399.27,214.22,397.83),_0x160392[_0x495e5d(0x3fd)](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0x160392[_0x495e5d(0x3fd)](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0x160392[_0x495e5d(0x3fd)](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0x160392[_0x495e5d(0x3fd)](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0x160392['bezierCurveTo'](214.75,399.62,215.9,400.98,216.92,402.37),_0x160392[_0x495e5d(0x3fd)](217.94,403.76,218.92,405.18,219.92,406.62),_0x160392[_0x495e5d(0x3fd)](221.76,409.56,223.496667,412.56,225.13,415.62),_0x160392[_0x495e5d(0x3fd)](228.43,421.74,231.51,427.98,234.79,434.14),_0x160392[_0x495e5d(0x3fd)](236.44,437.21,238.1,440.29,239.96,443.27),_0x160392['bezierCurveTo'](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0x160392['bezierCurveTo'](245.73,452.05,245.51,452.61,245.28,453.16),_0x160392[_0x495e5d(0x4ba)](235.65,476.16),_0x160392['bezierCurveTo'](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0x160392[_0x495e5d(0x4ba)](227.86,466.23),_0x160392[_0x495e5d(0x4ba)](226.53,463.74),_0x160392[_0x495e5d(0x3fd)](226.07,462.92,225.7,462.05,225.29,461.2),_0x160392[_0x495e5d(0x3fd)](224.88,460.35,224.47,459.5,224.12,458.62),_0x160392[_0x495e5d(0x3fd)](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0x160392[_0x495e5d(0x3fd)](219.17,444.3,218.19,440.63,217.46,436.94),_0x160392['bezierCurveTo'](218.03,440.71,218.84,444.43,219.78,448.12),_0x160392[_0x495e5d(0x3fd)](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0x160392[_0x495e5d(0x3fd)](223.31,459.91,223.69,460.79,224.06,461.67),_0x160392[_0x495e5d(0x3fd)](224.43,462.55,224.77,463.45,225.21,464.3),_0x160392[_0x495e5d(0x4ba)](226.46,466.9),_0x160392[_0x495e5d(0x4ba)](227.87,469.42),_0x160392['bezierCurveTo'](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0x160392[_0x495e5d(0x4ba)](225.34,500.28),_0x160392[_0x495e5d(0x3fd)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0x160392['bezierCurveTo'](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0x160392[_0x495e5d(0x3fd)](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0x160392['bezierCurveTo'](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0x160392[_0x495e5d(0x3fd)](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0x160392['bezierCurveTo'](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0x160392[_0x495e5d(0x3fd)](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0x160392[_0x495e5d(0x3fd)](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0x160392['lineTo'](194.12,574.71),_0x160392[_0x495e5d(0x3fd)](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0x160392[_0x495e5d(0x3fd)](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0x160392[_0x495e5d(0x3fd)](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0x160392[_0x495e5d(0x3fd)](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0x160392[_0x495e5d(0x4ba)](205.26,578.03),_0x160392[_0x495e5d(0x4ba)](211.54,562.23),_0x160392[_0x495e5d(0x4ba)](224.09,530.63),_0x160392['lineTo'](233.09,507.93),_0x160392[_0x495e5d(0x3fd)](237.58,508.07,242.09,508.14,246.55,507.93),_0x160392['bezierCurveTo'](251.01,507.72,255.72,507.44,260.27,506.93),_0x160392[_0x495e5d(0x3fd)](264.82,506.42,269.38,505.81,273.89,505.03),_0x160392[_0x495e5d(0x3fd)](278.4,504.25,282.89,503.32,287.31,502.14),_0x160392[_0x495e5d(0x3fd)](282.85,503.14,278.31,503.91,273.81,504.53),_0x160392[_0x495e5d(0x3fd)](269.31,505.15,264.74,505.63,260.19,505.93),_0x160392[_0x495e5d(0x3fd)](255.64,506.23,251.08,506.42,246.52,506.4),_0x160392[_0x495e5d(0x3fd)](242.29,506.4,238.07,506.21,233.87,505.94),_0x160392['lineTo'](242.87,483.17),_0x160392[_0x495e5d(0x3fd)](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0x160392['lineTo'](261.81,486.28),_0x160392[_0x495e5d(0x4ba)](265.75,486.37),_0x160392[_0x495e5d(0x3fd)](267.06,486.37,268.38,486.37,269.69,486.37),_0x160392[_0x495e5d(0x3fd)](0x10f,486.37,272.31,486.37,273.62,486.24),_0x160392[_0x495e5d(0x3fd)](278.86,486.02,284.08,485.46,289.26,484.78),_0x160392['bezierCurveTo'](294.44,484.1,299.61,483.21,304.72,482.07),_0x160392[_0x495e5d(0x3fd)](299.58,483.07,294.4,483.74,289.21,484.28),_0x160392[_0x495e5d(0x3fd)](284.02,484.82,278.8,485.19,273.59,485.28),_0x160392[_0x495e5d(0x3fd)](272.29,485.34,270.98,485.28,269.68,485.28),_0x160392[_0x495e5d(0x3fd)](268.38,485.28,267.08,485.28,265.78,485.18),_0x160392[_0x495e5d(0x4ba)](261.89,484.97),_0x160392[_0x495e5d(0x4ba)](258.02,484.58),_0x160392[_0x495e5d(0x3fd)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0x160392[_0x495e5d(0x4ba)](249.19,467.39),_0x160392['bezierCurveTo'](250.19,464.99,251.09,462.58,252.04,460.18),_0x160392[_0x495e5d(0x4ba)](257.36,461.07),_0x160392[_0x495e5d(0x4ba)](260.36,461.57),_0x160392['bezierCurveTo'](261.36,461.72,262.36,461.78,263.36,461.89),_0x160392[_0x495e5d(0x4ba)](269.36,462.48),_0x160392[_0x495e5d(0x3fd)](271.36,462.61,273.36,462.64,275.36,462.73),_0x160392['lineTo'](278.36,462.84),_0x160392['bezierCurveTo'](279.36,462.84,280.36,462.84,281.36,462.79),_0x160392[_0x495e5d(0x4ba)](287.36,462.65),_0x160392[_0x495e5d(0x3fd)](291.36,462.34,295.36,462.15,299.26,461.58),_0x160392[_0x495e5d(0x3fd)](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0x160392[_0x495e5d(0x3fd)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0x160392[_0x495e5d(0x3fd)](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0x160392[_0x495e5d(0x3fd)](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0x160392[_0x495e5d(0x3fd)](295.22,461.08,291.26,461.18,287.32,461.41),_0x160392['lineTo'](281.39,461.41),_0x160392['bezierCurveTo'](280.39,461.41,279.39,461.41,278.39,461.41),_0x160392[_0x495e5d(0x4ba)](275.44,461.24),_0x160392[_0x495e5d(0x3fd)](273.44,461.11,271.49,461.04,269.53,460.87),_0x160392[_0x495e5d(0x4ba)](263.65,460.16),_0x160392[_0x495e5d(0x3fd)](262.65,460.03,261.65,459.95,260.72,459.79),_0x160392[_0x495e5d(0x4ba)](257.81,459.23),_0x160392[_0x495e5d(0x4ba)](252.92,458.31),_0x160392[_0x495e5d(0x3fd)](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0x160392['lineTo'](264.75,427.87),_0x160392[_0x495e5d(0x4ba)](271.61,0x1ac),_0x160392[_0x495e5d(0x4ba)](275.28,428.06),_0x160392[_0x495e5d(0x3fd)](276.5,428.06,277.72,427.99,278.95,427.95),_0x160392[_0x495e5d(0x4ba)](286.28,427.7),_0x160392['lineTo'](293.59,427.1),_0x160392[_0x495e5d(0x4ba)](297.24,426.8),_0x160392[_0x495e5d(0x4ba)](300.88,426.33),_0x160392[_0x495e5d(0x3fd)](303.3,426.01,305.73,425.73,308.15,425.38),_0x160392[_0x495e5d(0x3fd)](312.96,424.55,317.79,423.82,322.56,422.75),_0x160392[_0x495e5d(0x3fd)](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0x160392[_0x495e5d(0x3fd)](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0x160392[_0x495e5d(0x3fd)](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0x160392['bezierCurveTo'](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0x160392[_0x495e5d(0x3fd)](317.53,422.84,312.7,423.47,307.9,424.21),_0x160392[_0x495e5d(0x3fd)](305.49,424.52,303.07,424.76,300.66,425.03),_0x160392['lineTo'](297.03,425.43),_0x160392[_0x495e5d(0x4ba)](293.4,425.68),_0x160392[_0x495e5d(0x4ba)](286.13,426.14),_0x160392['lineTo'](278.85,426.27),_0x160392['bezierCurveTo'](277.64,426.27,276.42,426.33,275.21,426.27),_0x160392[_0x495e5d(0x4ba)](271.57,426.14),_0x160392[_0x495e5d(0x4ba)](265.44,425.92),_0x160392['lineTo'](273.9,404.05),_0x160392[_0x495e5d(0x4ba)](276.44,397.42),_0x160392[_0x495e5d(0x3fd)](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0x160392[_0x495e5d(0x3fd)](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0x160392[_0x495e5d(0x3fd)](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0x160392[_0x495e5d(0x3fd)](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0x160392['bezierCurveTo'](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0x160392[_0x495e5d(0x3fd)](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0x160392['bezierCurveTo'](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0x160392[_0x495e5d(0x3fd)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0x160392[_0x495e5d(0x3fd)](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0x160392['bezierCurveTo'](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0x160392['bezierCurveTo'](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0x160392['bezierCurveTo'](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0x160392['bezierCurveTo'](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0x160392[_0x495e5d(0x3fd)](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0x160392[_0x495e5d(0x3fd)](339.7,353.89,346.83,350.58,353.85,347.05),_0x160392[_0x495e5d(0x3fd)](360.87,343.52,367.77,339.76,374.5,335.72),_0x160392[_0x495e5d(0x3fd)](367.69,339.62,360.7,343.21,353.63,346.6),_0x160392[_0x495e5d(0x3fd)](346.56,349.99,339.36,353.14,332.05,355.96),_0x160392[_0x495e5d(0x3fd)](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0x160392[_0x495e5d(0x3fd)](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0x160392[_0x495e5d(0x3fd)](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0x160392[_0x495e5d(0x3fd)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0x160392['bezierCurveTo'](298.49,338.79,299.06,337.16,299.66,335.53)),_0x160392['fill'](),_0x160392[_0x495e5d(0x1c8)](),_0x160392[_0x495e5d(0x36f)](),this[_0x495e5d(0x267)][_0x495e5d(0x48f)]();},Bitmap[_0x502049(0x4ca)]['drawDandelionSeed']=function(_0x47d286,_0x4a9c78,_0x1533c9){const _0x1bc233=_0x502049,_0x3064f4=this[_0x1bc233(0x4a4)];_0x47d286=_0x47d286||_0x1bc233(0x581),_0x4a9c78=_0x4a9c78||_0x1bc233(0x4c7),_0x1533c9=_0x1533c9||_0x1bc233(0x30f),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x552)]=_0x47d286,(_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['lineWidth']=0.695966,_0x3064f4[_0x1bc233(0x332)](32.118356,32.638166),_0x3064f4[_0x1bc233(0x3fd)](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0x3064f4['fill'](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x552)]=_0x4a9c78,(_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](30.16965,77.249614),_0x3064f4['bezierCurveTo'](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0x3064f4[_0x1bc233(0x3fd)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0x3064f4['bezierCurveTo'](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0x3064f4[_0x1bc233(0x3fd)](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4['fillStyle']=_0x1533c9,_0x3064f4[_0x1bc233(0x423)]=_0x1533c9,_0x3064f4[_0x1bc233(0x32b)]=0x5,(_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.695966,0x0,0x0,0.695966,181.842,123.051),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](-242.3,-157.8),_0x3064f4[_0x1bc233(0x4ba)](-214.1,-130.5),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['save'](),_0x3064f4[_0x1bc233(0x3a4)](0.31266,0x0,0x0,0.32058,88.64,390.11),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-1050.5,-0x6a5),_0x3064f4[_0x1bc233(0x3fd)](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0x3064f4[_0x1bc233(0x3fd)](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-1048.5,-0x6a7),_0x3064f4[_0x1bc233(0x3fd)](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0x3064f4['bezierCurveTo'](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-1050.5,-0x6a7),_0x3064f4[_0x1bc233(0x3fd)](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0x3064f4[_0x1bc233(0x3fd)](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-230.9,-162.8),_0x3064f4[_0x1bc233(0x4ba)](-215.2,-132.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0x3064f4['beginPath'](),_0x3064f4['moveTo'](-1959.5,-1448.4),_0x3064f4['bezierCurveTo'](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0x3064f4['bezierCurveTo'](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4['moveTo'](-1957.5,-1450.4),_0x3064f4[_0x1bc233(0x3fd)](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0x3064f4[_0x1bc233(0x3fd)](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-1959.5,-1450.4),_0x3064f4[_0x1bc233(0x3fd)](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0x3064f4['bezierCurveTo'](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-217.8,-162.7),_0x3064f4['lineTo'](-216.1,-133.5),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-2652.9,-738.7),_0x3064f4[_0x1bc233(0x3fd)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0x3064f4['bezierCurveTo'](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-2650.9,-740.7),_0x3064f4[_0x1bc233(0x3fd)](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0x3064f4[_0x1bc233(0x3fd)](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-2652.9,-740.7),_0x3064f4[_0x1bc233(0x3fd)](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0x3064f4[_0x1bc233(0x3fd)](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-196.4,-158.1),_0x3064f4['lineTo'](-216.8,-133.7),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-2416.6,2007.2),_0x3064f4[_0x1bc233(0x3fd)](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0x3064f4[_0x1bc233(0x3fd)](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-2414.6,2005.2),_0x3064f4['bezierCurveTo'](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0x3064f4[_0x1bc233(0x3fd)](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-2416.6,2005.2),_0x3064f4['bezierCurveTo'](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0x3064f4['bezierCurveTo'](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['restore'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-246.9,-141.7),_0x3064f4[_0x1bc233(0x4ba)](-214.2,-131.4),_0x3064f4['fill'](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-85.8,-2104.9),_0x3064f4[_0x1bc233(0x3fd)](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0x3064f4[_0x1bc233(0x3fd)](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-83.8,-2106.9),_0x3064f4[_0x1bc233(0x3fd)](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0x3064f4[_0x1bc233(0x3fd)](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0x3064f4['fill'](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-85.8,-2106.9),_0x3064f4[_0x1bc233(0x3fd)](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0x3064f4['bezierCurveTo'](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-185.8,-142.3),_0x3064f4[_0x1bc233(0x4ba)](-218.5,-0x84),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['save'](),_0x3064f4[_0x1bc233(0x3a4)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](2314.6,-804.9),_0x3064f4[_0x1bc233(0x3fd)](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0x3064f4[_0x1bc233(0x3fd)](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](2316.6,-806.9),_0x3064f4['bezierCurveTo'](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0x3064f4[_0x1bc233(0x3fd)](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](2314.6,-806.9),_0x3064f4[_0x1bc233(0x3fd)](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0x3064f4[_0x1bc233(0x3fd)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](-231.8,-129.4),_0x3064f4['lineTo'](-213.2,-134.7),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](8238.8,-2522.6),_0x3064f4[_0x1bc233(0x3fd)](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0x3064f4[_0x1bc233(0x3fd)](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](8240.8,-2524.6),_0x3064f4[_0x1bc233(0x3fd)](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0x3064f4[_0x1bc233(0x3fd)](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](8238.8,-2524.6),_0x3064f4[_0x1bc233(0x3fd)](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0x3064f4[_0x1bc233(0x3fd)](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0x3064f4['fill'](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-199.6,-0x80),_0x3064f4[_0x1bc233(0x4ba)](-218.2,-133.3),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['save'](),_0x3064f4[_0x1bc233(0x3a4)](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](9157.3,1228.3),_0x3064f4[_0x1bc233(0x3fd)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x3064f4[_0x1bc233(0x3fd)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](9159.3,1226.3),_0x3064f4[_0x1bc233(0x3fd)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x3064f4[_0x1bc233(0x3fd)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](9157.3,1226.3),_0x3064f4['bezierCurveTo'](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x3064f4[_0x1bc233(0x3fd)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-198.5,-126.8),_0x3064f4[_0x1bc233(0x4ba)](-217.1,-132.1),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4['transform'](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](9157.3,1228.3),_0x3064f4[_0x1bc233(0x3fd)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x3064f4['bezierCurveTo'](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](9159.3,1226.3),_0x3064f4[_0x1bc233(0x3fd)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x3064f4[_0x1bc233(0x3fd)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](9157.3,1226.3),_0x3064f4[_0x1bc233(0x3fd)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x3064f4[_0x1bc233(0x3fd)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4['restore'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-215.6,-132.9),_0x3064f4['lineTo'](-215.6,-128.2),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-206.5,-160.9),_0x3064f4['lineTo'](-215.4,-134.6),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['save'](),_0x3064f4[_0x1bc233(0x3a4)](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](-2632.7,307.2),_0x3064f4[_0x1bc233(0x3fd)](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0x3064f4[_0x1bc233(0x3fd)](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0x3064f4['fill'](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-2630.7,305.2),_0x3064f4[_0x1bc233(0x3fd)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0x3064f4[_0x1bc233(0x3fd)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-2632.7,305.2),_0x3064f4[_0x1bc233(0x3fd)](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0x3064f4['bezierCurveTo'](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4['beginPath'](),_0x3064f4['moveTo'](-188.1,-148.7),_0x3064f4[_0x1bc233(0x4ba)](-215.9,-0x87),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-1809.9,2931.2),_0x3064f4['bezierCurveTo'](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0x3064f4[_0x1bc233(0x3fd)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-1807.9,2929.2),_0x3064f4[_0x1bc233(0x3fd)](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0x3064f4[_0x1bc233(0x3fd)](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](-1809.9,2929.2),_0x3064f4[_0x1bc233(0x3fd)](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0x3064f4[_0x1bc233(0x3fd)](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-183.8,-130.7),_0x3064f4[_0x1bc233(0x4ba)](-218.1,-134.1),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['save'](),_0x3064f4[_0x1bc233(0x3a4)](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](2783.6,33.2),_0x3064f4['bezierCurveTo'](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0x3064f4[_0x1bc233(0x3fd)](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](2785.6,31.2),_0x3064f4[_0x1bc233(0x3fd)](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0x3064f4[_0x1bc233(0x3fd)](0xade,31.2,2783.2,31.2,2785.6,31.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4['moveTo'](2783.6,31.2),_0x3064f4['bezierCurveTo'](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0x3064f4['bezierCurveTo'](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['restore'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-231.5,-136.9),_0x3064f4['lineTo'](-212.2,-134.5),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](5867.7,-3370.8),_0x3064f4[_0x1bc233(0x3fd)](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0x3064f4['bezierCurveTo'](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](5869.7,-3372.8),_0x3064f4['bezierCurveTo'](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0x3064f4[_0x1bc233(0x3fd)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0x3064f4['fill'](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4['moveTo'](5867.7,-3372.8),_0x3064f4[_0x1bc233(0x3fd)](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0x3064f4[_0x1bc233(0x3fd)](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x36f)](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](-201.9,-123.4),_0x3064f4[_0x1bc233(0x4ba)](-217.4,-135.2),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4[_0x1bc233(0x260)](),_0x3064f4[_0x1bc233(0x3a4)](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](7327.3,2589.8),_0x3064f4['bezierCurveTo'](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0x3064f4['bezierCurveTo'](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4['stroke'](),_0x3064f4[_0x1bc233(0x39d)](),_0x3064f4[_0x1bc233(0x332)](7329.3,2587.8),_0x3064f4[_0x1bc233(0x3fd)](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0x3064f4[_0x1bc233(0x3fd)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['beginPath'](),_0x3064f4['moveTo'](7327.3,2587.8),_0x3064f4[_0x1bc233(0x3fd)](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0x3064f4[_0x1bc233(0x3fd)](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)](),_0x3064f4['restore'](),_0x3064f4['beginPath'](),_0x3064f4[_0x1bc233(0x332)](-0xd7,-133.8),_0x3064f4[_0x1bc233(0x4ba)](-216.7,-129.6),_0x3064f4[_0x1bc233(0x1c3)](),_0x3064f4[_0x1bc233(0x1c8)]()),_0x3064f4['restore'](),this['_baseTexture'][_0x1bc233(0x48f)]();},Bitmap[_0x502049(0x4ca)][_0x502049(0x576)]=function(_0x2c80f9,_0x2a120e,_0x415a46){const _0x61e1ff=_0x502049,_0x4b476d=this['context'];_0x4b476d[_0x61e1ff(0x260)](),_0x4b476d[_0x61e1ff(0x1e4)](_0x2c80f9-_0x415a46,_0x2a120e-_0x415a46);const _0x103075=0x168*(Math['PI']/0xb4),_0x4546aa=ColorManager[_0x61e1ff(0x2e0)],_0x5c3c67=_0x4546aa[Math['floor'](Math[_0x61e1ff(0x221)]()*_0x4546aa['length'])];let _0x38f78c=ColorManager[_0x61e1ff(0x1b5)](_0x5c3c67,0.85);_0x38f78c=ColorManager['hexToRgba'](_0x38f78c,Math[_0x61e1ff(0x221)]()*0.4+0.2);let _0x4ec4c8=ColorManager[_0x61e1ff(0x1b5)](_0x5c3c67,0.85);_0x4ec4c8=ColorManager[_0x61e1ff(0x580)](_0x4ec4c8,Math[_0x61e1ff(0x221)]()*0.2);const _0x5a6809=_0x4b476d[_0x61e1ff(0x3f1)](_0x415a46,_0x415a46,0xa,_0x415a46,_0x415a46,_0x415a46);_0x5a6809[_0x61e1ff(0x541)](0x0,_0x38f78c),_0x5a6809[_0x61e1ff(0x541)](0x1,_0x4ec4c8),_0x4b476d[_0x61e1ff(0x552)]=_0x5a6809,_0x4b476d[_0x61e1ff(0x39d)](),_0x4b476d['moveTo'](_0x415a46,_0x415a46),_0x4b476d[_0x61e1ff(0x4ba)](length,_0x415a46),_0x4b476d[_0x61e1ff(0x4dd)](_0x415a46,_0x415a46,_0x415a46,0x0,_0x103075),_0x4b476d[_0x61e1ff(0x4ba)](_0x415a46,_0x415a46),_0x4b476d[_0x61e1ff(0x1c3)](),_0x4b476d[_0x61e1ff(0x36f)](),this[_0x61e1ff(0x267)][_0x61e1ff(0x48f)]();},Bitmap[_0x502049(0x4ca)][_0x502049(0x3d4)]=function(_0x427505,_0x45d6cd,_0x227bbf){const _0x10d113=_0x502049,_0x3b8fd2=this[_0x10d113(0x401)];_0x3b8fd2[_0x10d113(0x260)](),_0x3b8fd2[_0x10d113(0x1e4)](_0x427505-_0x227bbf,_0x45d6cd-_0x227bbf);const _0x6e2e93=0x168*(Math['PI']/0xb4),_0x3ce659=Math['randomInt'](0x80),_0x4965d6=_0x10d113(0x355)['format'](_0x3ce659),_0x36591a=_0x10d113(0x394)['format'](_0x3ce659),_0x3a51e9=_0x10d113(0x20c)[_0x10d113(0x339)](_0x3ce659),_0x53c637=_0x10d113(0x21a)[_0x10d113(0x339)](_0x3ce659),_0xa7da40=_0x10d113(0x509)['format'](_0x3ce659),_0x4e86bf=_0x10d113(0x367)[_0x10d113(0x339)](_0x3ce659),_0x20a82c=_0x10d113(0x251)[_0x10d113(0x339)](_0x3ce659),_0x5b48fb=_0x10d113(0x252)[_0x10d113(0x339)](_0x3ce659),_0x5b175a=_0x3b8fd2[_0x10d113(0x3f1)](_0x227bbf,_0x227bbf,0xa,_0x227bbf,_0x227bbf,_0x227bbf);_0x5b175a['addColorStop'](0x0,_0x4965d6),_0x5b175a['addColorStop'](0.7,_0x4965d6),_0x5b175a[_0x10d113(0x541)](0.8,_0x36591a),_0x5b175a['addColorStop'](0.81,_0x3a51e9),_0x5b175a[_0x10d113(0x541)](0.82,_0x53c637),_0x5b175a[_0x10d113(0x541)](0.8225,_0xa7da40),_0x5b175a['addColorStop'](0.8275,_0x4e86bf),_0x5b175a['addColorStop'](0.85,_0x20a82c),_0x5b175a[_0x10d113(0x541)](0.9,_0x5b48fb),_0x5b175a[_0x10d113(0x541)](0.95,_0x4965d6),_0x5b175a[_0x10d113(0x541)](0x1,_0x4965d6),_0x3b8fd2[_0x10d113(0x552)]=_0x5b175a,_0x3b8fd2[_0x10d113(0x39d)](),_0x3b8fd2['moveTo'](_0x227bbf,_0x227bbf),_0x3b8fd2[_0x10d113(0x4ba)](length,_0x227bbf),_0x3b8fd2['arc'](_0x227bbf,_0x227bbf,_0x227bbf,0x0,_0x6e2e93),_0x3b8fd2[_0x10d113(0x4ba)](_0x227bbf,_0x227bbf),_0x3b8fd2[_0x10d113(0x1c3)](),_0x3b8fd2[_0x10d113(0x36f)](),this[_0x10d113(0x267)][_0x10d113(0x48f)]();},Bitmap['prototype'][_0x502049(0x48e)]=function(_0x4521cb){const _0x14e3d4=_0x502049,_0x3c0cbe=this[_0x14e3d4(0x401)];_0x4521cb=_0x4521cb||[_0x14e3d4(0x530),_0x14e3d4(0x1b7)],_0x3c0cbe['save'](),_0x3c0cbe[_0x14e3d4(0x3a4)](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x3c0cbe['strokeStyle']='#000000',_0x3c0cbe[_0x14e3d4(0x32b)]=0xa;const _0x52e01f=_0x3c0cbe['createLinearGradient'](0x0,this[_0x14e3d4(0x3e7)],this[_0x14e3d4(0x313)]*0x2,this[_0x14e3d4(0x3e7)]*0x14);_0x52e01f[_0x14e3d4(0x541)](0x0,_0x4521cb[0x0]),_0x52e01f[_0x14e3d4(0x541)](0x1,_0x4521cb[0x1]),_0x3c0cbe[_0x14e3d4(0x552)]=_0x52e01f,(_0x3c0cbe[_0x14e3d4(0x39d)](),_0x3c0cbe[_0x14e3d4(0x332)](489.1,324.8),_0x3c0cbe['bezierCurveTo'](492.6,324.4,516.9,356.8,515.5,360.1),_0x3c0cbe[_0x14e3d4(0x3fd)](514.1,363.4,473.9,368.2,471.8,365.3),_0x3c0cbe['bezierCurveTo'](469.7,362.5,485.6,325.2,489.1,324.8)),_0x3c0cbe[_0x14e3d4(0x1c3)](),_0x3c0cbe[_0x14e3d4(0x1c8)](),(_0x3c0cbe[_0x14e3d4(0x39d)](),_0x3c0cbe[_0x14e3d4(0x332)](622.6,156.7),_0x3c0cbe['bezierCurveTo'](622.6,230.8,556.4,341.5,488.3,341.5),_0x3c0cbe[_0x14e3d4(0x3fd)](418.2,341.5,0x162,230.8,0x162,156.7),_0x3c0cbe[_0x14e3d4(0x3fd)](0x162,82.6,414.2,14.3,488.3,14.3),_0x3c0cbe['bezierCurveTo'](562.4,14.3,622.6,82.6,622.6,156.7)),_0x3c0cbe['fill'](),_0x3c0cbe[_0x14e3d4(0x1c8)](),_0x3c0cbe[_0x14e3d4(0x32b)]=0x5,(_0x3c0cbe[_0x14e3d4(0x39d)](),_0x3c0cbe[_0x14e3d4(0x332)](0x1de,0x156),_0x3c0cbe[_0x14e3d4(0x3fd)](486.5,340.3,492.4,338.5,503.5,341.1),_0x3c0cbe['bezierCurveTo'](482.2,561.7,393.8,609.5,366.7,789.6),_0x3c0cbe[_0x14e3d4(0x3fd)](366.2,792.9,368.2,806.3,371.3,831.2)),_0x3c0cbe[_0x14e3d4(0x1c8)](),_0x3c0cbe['restore'](),this[_0x14e3d4(0x34f)]=0x80,this[_0x14e3d4(0x432)](this[_0x14e3d4(0x313)]*0x7/0x8,this[_0x14e3d4(0x3e7)]*0x1/0x4,0x4,_0x14e3d4(0x2ca));},Bitmap[_0x502049(0x4ca)][_0x502049(0x2fd)]=function(_0x86daab){const _0xc07d18=_0x502049;_0x86daab=_0x86daab||_0xc07d18(0x530);const _0xf2817a=this[_0xc07d18(0x313)]/0x2,_0x4cf7ff=this[_0xc07d18(0x3e7)]/0x2,_0x280ae0=ColorManager[_0xc07d18(0x580)](_0x86daab,0x0),_0x78c4da=ColorManager['hexToRgba'](_0x86daab,0.8),_0x54c70e=ColorManager[_0xc07d18(0x580)](_0x86daab,0x1),_0x5d000e=this[_0xc07d18(0x313)]/0x2,_0x504b10=0x4;this[_0xc07d18(0x295)](0x0,_0x4cf7ff-_0x504b10,_0x5d000e,_0x504b10*0x2,_0x280ae0,_0x78c4da),this['drawCircle'](_0xf2817a,_0x4cf7ff,_0x504b10,_0x54c70e),this['drawCircle'](_0xf2817a,_0x4cf7ff,_0x504b10-0x2,_0xc07d18(0x2ca));},Bitmap[_0x502049(0x4ca)][_0x502049(0x244)]=function(_0x196ac3){const _0xdb54ca=_0x502049,_0x264abe=this[_0xdb54ca(0x4a4)];_0x196ac3=_0x196ac3||'#ff0000';const _0x1b326a=this[_0xdb54ca(0x313)]/0x2,_0x17a839=this[_0xdb54ca(0x3e7)]/0x2,_0x53c49d=ColorManager['hexToRgba'](_0x196ac3,0x0),_0x2d27dc=ColorManager[_0xdb54ca(0x580)](_0x196ac3,0.25),_0x3ee76e=ColorManager[_0xdb54ca(0x580)](_0x196ac3,0x1),_0x3ba3d5=this['width']/0x2,_0x9b6405=0x4,_0x4b2e5=Math[_0xdb54ca(0x592)](0x3)+0xa;_0x264abe['translate'](_0x1b326a,_0x17a839);const _0x326b99=Math[_0xdb54ca(0x592)](0x3)+0x4;for(let _0x52b278=0x0;_0x52b278<_0x326b99;_0x52b278++){const _0x4f3d3a=_0x3ba3d5*((_0x326b99-_0x52b278)/_0x326b99);let _0x185bab=Math['randomInt'](0xa)+0x28;_0x185bab/=_0x52b278+0x1;for(let _0x2b15c5=0x0;_0x2b15c5<_0x185bab;_0x2b15c5++){if(_0xdb54ca(0x547)==='GjtmB'){let _0x359407=Math[_0xdb54ca(0x592)](Math['round'](_0x4f3d3a/_0x4b2e5))+_0x4f3d3a*(_0x4b2e5-0x1)/_0x4b2e5;const _0xd796a0=Math[_0xdb54ca(0x592)](_0x359407/0x2);this['gradientFillRect'](_0xd796a0,-_0x9b6405,_0x359407-_0xd796a0,_0x9b6405*0x2,_0x53c49d,_0x2d27dc),this[_0xdb54ca(0x432)](_0x359407,0x0,_0x9b6405,_0x3ee76e),this[_0xdb54ca(0x432)](_0x359407,0x0,_0x9b6405-(Math[_0xdb54ca(0x592)](0x2)-0x1),_0xdb54ca(0x2ca)),_0x264abe['rotate'](Math['PI']*0x2/_0x185bab);}else _0x551250[_0xdb54ca(0x3b3)](_0x2e00a6,_0x3e0b4c),_0x5aa842[_0xdb54ca(0x3bc)]=_0xdb54ca(0x51f),_0x49b508[_0xdb54ca(0x329)]['applyPluginCmdSettings'](_0x26b862);}}},Bitmap[_0x502049(0x4ca)][_0x502049(0x546)]=function(_0x31275f,_0x10de42,_0x21b73d){const _0x515ca2=_0x502049,_0x435392=this[_0x515ca2(0x401)];_0x435392['save'](),_0x435392['translate'](_0x31275f-_0x21b73d,_0x10de42-_0x21b73d);const _0x3f3ae6=0x168*(Math['PI']/0xb4),_0x438144=Math[_0x515ca2(0x592)](0x80),_0x20dfdb=_0x515ca2(0x355)[_0x515ca2(0x339)](_0x438144),_0x5111b4='rgba(128,%1,255,1)'[_0x515ca2(0x339)](_0x438144),_0x9b3b62='rgba(%1,%1,255,1)'['format'](_0x438144),_0x23336e=_0x515ca2(0x21a)['format'](_0x438144),_0x1aeaa5=_0x515ca2(0x509)['format'](_0x438144),_0x3af25b=_0x515ca2(0x367)[_0x515ca2(0x339)](_0x438144),_0x1000f8='rgba(255,%1,%1,1)'['format'](_0x438144),_0x3c7c66='rgba(255,%1,%1,0.5)'[_0x515ca2(0x339)](_0x438144),_0x84dc2f=_0x435392[_0x515ca2(0x3f1)](_0x21b73d,_0x21b73d,0xa,_0x21b73d,_0x21b73d,_0x21b73d);_0x84dc2f['addColorStop'](0x0,_0x20dfdb),_0x84dc2f['addColorStop'](0.15,_0x20dfdb),_0x84dc2f[_0x515ca2(0x541)](0.25,_0x5111b4),_0x84dc2f[_0x515ca2(0x541)](0.3,_0x5111b4),_0x84dc2f[_0x515ca2(0x541)](0.4,_0x9b3b62),_0x84dc2f[_0x515ca2(0x541)](0.45,_0x23336e),_0x84dc2f[_0x515ca2(0x541)](0.5,_0x23336e),_0x84dc2f[_0x515ca2(0x541)](0.55,_0x1aeaa5),_0x84dc2f['addColorStop'](0.6,_0x3af25b),_0x84dc2f[_0x515ca2(0x541)](0.65,_0x3af25b),_0x84dc2f[_0x515ca2(0x541)](0.75,_0x1000f8),_0x84dc2f[_0x515ca2(0x541)](0.85,_0x3c7c66),_0x84dc2f[_0x515ca2(0x541)](0.95,_0x20dfdb),_0x84dc2f['addColorStop'](0x1,_0x20dfdb),_0x435392['fillStyle']=_0x84dc2f,_0x435392[_0x515ca2(0x39d)](),_0x435392['moveTo'](_0x21b73d,_0x21b73d),_0x435392['lineTo'](length,_0x21b73d),_0x435392[_0x515ca2(0x4dd)](_0x21b73d,_0x21b73d,_0x21b73d,0x0,_0x3f3ae6),_0x435392[_0x515ca2(0x4ba)](_0x21b73d,_0x21b73d),_0x435392[_0x515ca2(0x1c3)](),_0x435392[_0x515ca2(0x36f)](),this[_0x515ca2(0x267)][_0x515ca2(0x48f)]();},TextManager[_0x502049(0x19c)]=VisuMZ['WeatherEffects']['Settings'][_0x502049(0x4c2)][_0x502049(0x439)],ColorManager[_0x502049(0x5e9)]=[_0x502049(0x5ba),'#222222',_0x502049(0x2a4),_0x502049(0x54b)],ColorManager[_0x502049(0x379)]=[_0x502049(0x4a3),'#a8c54a',_0x502049(0x477),_0x502049(0x29e),'#fac159','#e6654c','#c5302e','#c5302e','#69822d'],ColorManager[_0x502049(0x1ca)]=[_0x502049(0x55b),_0x502049(0x4cb),_0x502049(0x233),_0x502049(0x5de)],ColorManager['WEATHER_CLOUD_BLUE_COLORS']=['#cceaf6',_0x502049(0x299),_0x502049(0x2d8),_0x502049(0x41e)],ColorManager[_0x502049(0x529)]=[_0x502049(0x30f),'#ebebeb',_0x502049(0x2ec)],ColorManager['WEATHER_DANDELION1_COLORS']=[_0x502049(0x56d),'#baa4b2','#d2c8c5',_0x502049(0x215)],ColorManager['WEATHER_DANDELION2_COLORS']=[_0x502049(0x2f9),_0x502049(0x213),'#d58e6a'],ColorManager[_0x502049(0x566)]=['#ffffff',_0x502049(0x17d),_0x502049(0x2ec),'#fffde0','#fff2e4'],ColorManager[_0x502049(0x4ab)]=[_0x502049(0x370),_0x502049(0x5d7),_0x502049(0x3eb),'#004400'],ColorManager[_0x502049(0x29f)]=[_0x502049(0x1ab),_0x502049(0x52a),'#8c6239',_0x502049(0x5ef),_0x502049(0x5bb)],ColorManager[_0x502049(0x37e)]=['#fff799','#fff568',_0x502049(0x2e1),'#fbaf5d',_0x502049(0x578)],ColorManager[_0x502049(0x29c)]=[_0x502049(0x293),_0x502049(0x224),_0x502049(0x468),_0x502049(0x537),_0x502049(0x3f2),_0x502049(0x3ac)],ColorManager[_0x502049(0x49e)]=[_0x502049(0x589),_0x502049(0x504),_0x502049(0x5d6),'#bbc9f9',_0x502049(0x5d2),_0x502049(0x503)],ColorManager[_0x502049(0x476)]=[_0x502049(0x30f),_0x502049(0x2a0),'#bbffff',_0x502049(0x58f)],ColorManager[_0x502049(0x406)]=[_0x502049(0x2f3),_0x502049(0x59a),_0x502049(0x43b)],ColorManager[_0x502049(0x1d2)]=[_0x502049(0x2ea),_0x502049(0x230),_0x502049(0x345),_0x502049(0x460)],ColorManager[_0x502049(0x54f)]=[_0x502049(0x496),_0x502049(0x496),_0x502049(0x3d2),_0x502049(0x363),'#55a743',_0x502049(0x558)],ColorManager[_0x502049(0x2e0)]=[_0x502049(0x34b),_0x502049(0x3fb),'#ffffaa',_0x502049(0x1a2),_0x502049(0x483),_0x502049(0x493),_0x502049(0x4d5),_0x502049(0x1c9),_0x502049(0x3f9),_0x502049(0x335),_0x502049(0x4b3),_0x502049(0x3c4),_0x502049(0x30f)],ColorManager[_0x502049(0x430)]=[_0x502049(0x2e1),_0x502049(0x41d),_0x502049(0x43c),'#998675',_0x502049(0x534),'#f69679','#fff568',_0x502049(0x353),_0x502049(0x353),'#fff200',_0x502049(0x325),_0x502049(0x325)],ColorManager['WEATHER_PRIMARY_COLORS']=[_0x502049(0x30f),'#ff0000',_0x502049(0x3af),_0x502049(0x48a),_0x502049(0x45c),_0x502049(0x4ad),_0x502049(0x446),_0x502049(0x3c0),_0x502049(0x530),_0x502049(0x48a),'#00ffff'],ColorManager['WEATHER_NUCLEAR_COLORS']=[_0x502049(0x48a),_0x502049(0x3ad),_0x502049(0x34c),'#07ff7f',_0x502049(0x202)],ColorManager[_0x502049(0x380)]=[_0x502049(0x1db),_0x502049(0x571),_0x502049(0x1ac),'#faacab',_0x502049(0x500)],ColorManager['WEATHER_SAKURA2_COLORS']=['#fddbe2',_0x502049(0x5f0),_0x502049(0x31d)],ColorManager[_0x502049(0x2a5)]=[_0x502049(0x214),'#b87693',_0x502049(0x18f)],ColorManager[_0x502049(0x1a0)]=[_0x502049(0x30f),_0x502049(0x5f1),_0x502049(0x563),'#fcecde'],ColorManager[_0x502049(0x508)]=[_0x502049(0x3d9),'#a800ff','#a900ff',_0x502049(0x231)],ColorManager[_0x502049(0x27f)]=ColorManager[_0x502049(0x49e)][_0x502049(0x516)](),ColorManager[_0x502049(0x3dd)]=ColorManager[_0x502049(0x379)][_0x502049(0x516)](),ColorManager[_0x502049(0x56f)]=ColorManager['WEATHER_PASTEL_COLORS'][_0x502049(0x3a3)](ColorManager['WEATHER_PRIMARY_COLORS']),ColorManager[_0x502049(0x40d)]=ColorManager[_0x502049(0x2e0)][_0x502049(0x516)](),ColorManager[_0x502049(0x50d)]=ColorManager[_0x502049(0x54f)][_0x502049(0x516)](),ColorManager[_0x502049(0x326)]=ColorManager[_0x502049(0x54f)][_0x502049(0x516)](),ColorManager[_0x502049(0x587)]=ColorManager[_0x502049(0x1d2)][_0x502049(0x516)](),ColorManager[_0x502049(0x463)]=ColorManager[_0x502049(0x2e0)][_0x502049(0x516)](),ColorManager[_0x502049(0x308)]=ColorManager[_0x502049(0x22f)][_0x502049(0x516)](),ColorManager[_0x502049(0x3ed)]=ColorManager[_0x502049(0x2e0)][_0x502049(0x516)](),ColorManager[_0x502049(0x237)]=ColorManager[_0x502049(0x22f)]['clone'](),ColorManager[_0x502049(0x4e9)]=ColorManager[_0x502049(0x2e0)][_0x502049(0x516)](),ColorManager[_0x502049(0x4aa)]=ColorManager['WEATHER_NUCLEAR_COLORS']['clone'](),ColorManager[_0x502049(0x5a8)]=ColorManager[_0x502049(0x4ab)][_0x502049(0x516)](),ColorManager[_0x502049(0x596)]=ColorManager[_0x502049(0x2e0)][_0x502049(0x516)](),ColorManager[_0x502049(0x190)]=ColorManager[_0x502049(0x1a0)][_0x502049(0x516)](),ColorManager['WEATHER_UV_BEAM_COLORS']=ColorManager[_0x502049(0x508)][_0x502049(0x516)](),ColorManager['hexToRgba']=function(_0x36aace,_0x4c45a5){const _0x3bf1e5=_0x502049;let _0x4c4eb9='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x3bf1e5(0x349)](_0x36aace)){if('vWbSd'!==_0x3bf1e5(0x27d)){_0x4c4eb9=_0x36aace['substring'](0x1)[_0x3bf1e5(0x4bb)]('');_0x4c4eb9[_0x3bf1e5(0x19b)]===0x3&&(_0x4c4eb9=[_0x4c4eb9[0x0],_0x4c4eb9[0x0],_0x4c4eb9[0x1],_0x4c4eb9[0x1],_0x4c4eb9[0x2],_0x4c4eb9[0x2]]);while(_0x4c4eb9[_0x3bf1e5(0x19b)]>0x6)_0x4c4eb9['pop']();return _0x4c4eb9='0x'+_0x4c4eb9[_0x3bf1e5(0x368)](''),_0x3bf1e5(0x2e5)+[(_0x4c4eb9>>0x10&0xff)[_0x3bf1e5(0x4df)](0x0,0xff),(_0x4c4eb9>>0x8&0xff)[_0x3bf1e5(0x4df)](0x0,0xff),(_0x4c4eb9&0xff)['clamp'](0x0,0xff)]['join'](',')+','+_0x4c45a5[_0x3bf1e5(0x4df)](0x0,0x1)+')';}else{this['_weatherLayers']={'lower':[],'upper':[]};while(this['_weatherLayers'][_0x3bf1e5(0x2cd)][_0x3bf1e5(0x19b)]<_0x1014d7[_0x3bf1e5(0x5c0)]){this[_0x3bf1e5(0x536)]['lower']['push'](_0x193897[_0x3bf1e5(0x329)]['newLayer']());}while(this[_0x3bf1e5(0x536)][_0x3bf1e5(0x5a1)][_0x3bf1e5(0x19b)]<_0x3140fd[_0x3bf1e5(0x5c0)]){this[_0x3bf1e5(0x536)]['upper'][_0x3bf1e5(0x4ac)](_0x1a869f[_0x3bf1e5(0x329)][_0x3bf1e5(0x29a)]());}}}else{if(_0x3bf1e5(0x25c)==='pHlyA')return _0x3bf1e5(0x4cd);else{_0x41b04a-=_0x394225[_0x3bf1e5(0x1ad)][_0x3bf1e5(0x5e3)[_0x3bf1e5(0x339)](_0x936ddf)]||0x0;if(_0x60719a<=0x0)return _0x258741;}}},ColorManager[_0x502049(0x5df)]=function(_0x5a11e1){const _0xb4ddae=_0x502049;let _0x54554a='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0xb4ddae(0x349)](_0x5a11e1)){if(_0xb4ddae(0x5cc)!==_0xb4ddae(0x579)){_0x54554a=_0x5a11e1[_0xb4ddae(0x285)](0x1)['split']('');_0x54554a[_0xb4ddae(0x19b)]===0x3&&(_0x54554a=[_0x54554a[0x0],_0x54554a[0x0],_0x54554a[0x1],_0x54554a[0x1],_0x54554a[0x2],_0x54554a[0x2]]);while(_0x54554a['length']>0x6)_0x54554a[_0xb4ddae(0x442)]();return _0x54554a='0x'+_0x54554a[_0xb4ddae(0x368)](''),[(_0x54554a>>0x10&0xff)['clamp'](0x0,0xff),(_0x54554a>>0x8&0xff)[_0xb4ddae(0x4df)](0x0,0xff),(_0x54554a&0xff)[_0xb4ddae(0x4df)](0x0,0xff)];}else{const _0x41c1f5=this['_cached_WeatherEffects_Ashfall'];return _0x41c1f5[_0x284f46[_0xb4ddae(0x474)](_0x207456[_0xb4ddae(0x221)]()*_0x41c1f5[_0xb4ddae(0x19b)])];}}else{if(_0xb4ddae(0x262)==='gJkXc'){if(!this['filters'])return;if(!this[_0xb4ddae(0x192)])return;if(this['_hue']!==0x0)return;if(!this[_0xb4ddae(0x448)][_0xb4ddae(0x378)]([0x0,0x0,0x0,0x0]))return;this[_0xb4ddae(0x318)][_0xb4ddae(0x556)](this[_0xb4ddae(0x192)]),delete this[_0xb4ddae(0x192)];}else return[0x0,0x0,0x0];}},ColorManager[_0x502049(0x40b)]=function(_0x235918){const _0x4d1fc1=_0x502049;while(_0x235918[_0x4d1fc1(0x19b)]<0x3)_0x235918['push'](0x0);while(_0x235918[_0x4d1fc1(0x19b)]>0x3)_0x235918[_0x4d1fc1(0x442)]();return'#'+_0x235918[_0x4d1fc1(0x3b4)](_0x52252b=>_0x52252b[_0x4d1fc1(0x4df)](0x0,0xff)['toString'](0x10)[_0x4d1fc1(0x51e)](0x2))[_0x4d1fc1(0x368)]('');},ColorManager[_0x502049(0x1b5)]=function(_0x456de7,_0x5b539c){const _0x66dad=_0x502049,_0x2e9776=this[_0x66dad(0x5df)](_0x456de7)[_0x66dad(0x3b4)](_0xf7dfc0=>Math[_0x66dad(0x1fd)]((Number(_0xf7dfc0)||0x0)*_0x5b539c)[_0x66dad(0x4df)](0x0,0xff));return this[_0x66dad(0x40b)](_0x2e9776);},SceneManager['isSceneBattle']=function(){const _0x4cf569=_0x502049;return this['_scene']&&this[_0x4cf569(0x595)]['constructor']===Scene_Battle;},SceneManager[_0x502049(0x1ae)]=function(){const _0x5e0b1a=_0x502049;return this[_0x5e0b1a(0x595)]&&this['_scene']instanceof Scene_Map;},VisuMZ[_0x502049(0x329)]['Game_Screen_clearWeather']=Game_Screen[_0x502049(0x4ca)][_0x502049(0x597)],Game_Screen[_0x502049(0x4ca)][_0x502049(0x597)]=function(){const _0x120daa=_0x502049;VisuMZ['WeatherEffects'][_0x120daa(0x17e)]['call'](this),this[_0x120daa(0x199)]();},Game_Screen[_0x502049(0x4ca)][_0x502049(0x5cf)]=function(){const _0x4fa7af=_0x502049;if($gameMap&&$gameMap['isNoWeather']())return _0x4fa7af(0x3ff);return this[_0x4fa7af(0x16e)](0x1)[_0x4fa7af(0x3bc)]||_0x4fa7af(0x3ff);},Game_Screen[_0x502049(0x4ca)][_0x502049(0x4d7)]=function(){const _0x1c2083=_0x502049;if($gameMap&&$gameMap[_0x1c2083(0x391)]())return 0x0;return this[_0x1c2083(0x16e)](0x1)[_0x1c2083(0x44b)]||0x0;},Game_Screen[_0x502049(0x4ca)][_0x502049(0x2bb)]=function(_0x5e16fb,_0x5a4653,_0x5028f3){const _0x53220d=_0x502049,_0x2ac8bf=this['getWeatherLayerData'](0x1,![])[_0x53220d(0x44b)],_0x33015f=VisuMZ[_0x53220d(0x329)][_0x53220d(0x29a)]();if(!_0x33015f)return;_0x33015f['type']=_0x5e16fb,_0x33015f[_0x53220d(0x44b)]=_0x2ac8bf,_0x33015f[_0x53220d(0x2ab)]=_0x5e16fb==='none'?0x0:_0x5a4653[_0x53220d(0x4df)](0x1,0x9),_0x33015f[_0x53220d(0x55f)]=_0x5028f3,_0x5028f3<=0x0&&(_0x33015f['power']=_0x33015f['powerTarget']),VisuMZ[_0x53220d(0x329)]['setupEventCommandData'](_0x33015f),this[_0x53220d(0x377)](0x1,![],_0x33015f);},Game_Screen[_0x502049(0x4ca)][_0x502049(0x343)]=function(){const _0x345efd=_0x502049;if(this[_0x345efd(0x536)]===undefined)this[_0x345efd(0x199)]();for(let _0x6f4883=0x1;_0x6f4883<=Weather[_0x345efd(0x5c0)];_0x6f4883++){if(_0x345efd(0x47d)==='RCKlB')this[_0x345efd(0x56b)](_0x6f4883,!![]),this['updateWeatherLayer'](_0x6f4883,![]);else{if(this[_0x345efd(0x424)]&&_0x158a3e[_0x345efd(0x5a8)][_0x345efd(0x19b)]<=0x0){const _0x4cd9af=this[_0x345efd(0x424)];return _0x4cd9af[_0x125bf1['floor'](_0x38a86e['random']()*_0x4cd9af[_0x345efd(0x19b)])];}const _0x38abd8=_0x3491ae[_0x345efd(0x5a8)]['pop'](),_0x305075=new _0x5d9139(0x3e8,0x3e8),_0x2e029a=_0x305075[_0x345efd(0x313)]/0x2;_0x305075[_0x345efd(0x3d6)](_0x2e029a,_0x2e029a,_0x2e029a,0x168,_0x38abd8,0x0,0x1,0x0),_0x305075['_customModified']=![];if(_0x5e64a9[_0x345efd(0x277)])_0x502141['log'](_0x345efd(0x1f7));return this[_0x345efd(0x424)]=this[_0x345efd(0x424)]||[],this[_0x345efd(0x424)][_0x345efd(0x4ac)](_0x305075),_0x305075;}}},Game_Screen[_0x502049(0x4ca)][_0x502049(0x199)]=function(){const _0x4fc734=_0x502049;this[_0x4fc734(0x536)]={'lower':[],'upper':[]};while(this['_weatherLayers'][_0x4fc734(0x2cd)][_0x4fc734(0x19b)]<Weather[_0x4fc734(0x5c0)]){if(_0x4fc734(0x209)===_0x4fc734(0x209))this[_0x4fc734(0x536)][_0x4fc734(0x2cd)][_0x4fc734(0x4ac)](VisuMZ['WeatherEffects']['newLayer']());else{const _0x2c50b5=_0x58e1fb(_0x3ef564['$1']);_0x2c50b5<_0x303a98?(_0x508505('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x4fc734(0x339)](_0x47cd30,_0x2c50b5,_0x2c501d)),_0x26bce5['exit']()):_0x4a1bee=_0x5c3b04[_0x4fc734(0x574)](_0x2c50b5,_0x32ae77);}}while(this[_0x4fc734(0x536)][_0x4fc734(0x5a1)]['length']<Weather[_0x4fc734(0x5c0)]){this[_0x4fc734(0x536)]['upper'][_0x4fc734(0x4ac)](VisuMZ['WeatherEffects'][_0x4fc734(0x29a)]());}},Game_Screen[_0x502049(0x4ca)]['clearWeatherLayerData']=function(_0x2c1b25,_0x55aea0,_0x2e9e6a){const _0x4b6681=_0x502049;if(this['_weatherLayers']===undefined)this[_0x4b6681(0x199)]();const _0x3568cc=this[_0x4b6681(0x16e)](_0x2c1b25,_0x55aea0),_0x404754=_0x2c1b25[_0x4b6681(0x4df)](0x1,Weather[_0x4b6681(0x5c0)])-0x1,_0x32bef3=_0x55aea0?_0x4b6681(0x2cd):_0x4b6681(0x5a1);_0x2e9e6a=_0x2e9e6a||0x0;const _0x1a9499=_0x3568cc[_0x4b6681(0x44b)],_0x1a1c0a=VisuMZ[_0x4b6681(0x329)][_0x4b6681(0x29a)]();_0x1a1c0a['power']=_0x1a9499,_0x1a1c0a['duration']=_0x2e9e6a,this[_0x4b6681(0x536)][_0x32bef3][_0x404754]=_0x1a1c0a;},Game_Screen[_0x502049(0x4ca)][_0x502049(0x4e4)]=function(_0x412f6c,_0x2b1bc6,_0x3226e6,_0x41b05e){const _0x3adeb8=_0x502049,_0x3fb51a=this[_0x3adeb8(0x16e)](_0x412f6c,_0x2b1bc6);_0x3fb51a[_0x3adeb8(0x55f)]=_0x41b05e||0x1,_0x3fb51a[_0x3adeb8(0x2ab)]=(_0x3fb51a[_0x3adeb8(0x2ab)]+_0x3226e6)['clamp'](0x1,0x9);},Game_Screen[_0x502049(0x4ca)]['memorizeWeatherLayerData']=function(_0x3c2538,_0x597f97){const _0x41942f=_0x502049,_0x372fab=this['getWeatherLayerData'](_0x3c2538,_0x597f97),_0x430c08=_0x597f97?'lower':_0x41942f(0x5a1);this[_0x41942f(0x521)]=this[_0x41942f(0x521)]||{'lower':[],'upper':[]},this['_memorizedWeatherData'][_0x430c08][_0x3c2538]=JSON['parse'](JSON[_0x41942f(0x487)](_0x372fab));},Game_Screen['prototype'][_0x502049(0x59d)]=function(_0xbdf8ef,_0x25eead,_0x2b562a){const _0x3e24c5=_0x502049,_0x5e4211=_0x25eead?'lower':_0x3e24c5(0x5a1);this[_0x3e24c5(0x521)]=this['_memorizedWeatherData']||{'lower':[],'upper':[]};const _0x309036=this[_0x3e24c5(0x521)][_0x5e4211][_0xbdf8ef]||VisuMZ[_0x3e24c5(0x329)][_0x3e24c5(0x29a)]();_0x309036['duration']=_0x2b562a,_0x309036[_0x3e24c5(0x2ab)]=_0x309036[_0x3e24c5(0x44b)],_0x309036[_0x3e24c5(0x44b)]=this[_0x3e24c5(0x16e)](_0xbdf8ef,_0x25eead)[_0x3e24c5(0x44b)],this[_0x3e24c5(0x377)](_0xbdf8ef,_0x25eead,_0x309036);},Game_Screen[_0x502049(0x4ca)][_0x502049(0x16e)]=function(_0x75cb00,_0x211b8f){const _0x4b3348=_0x502049;if(this[_0x4b3348(0x536)]===undefined)this[_0x4b3348(0x199)]();const _0x3b07d2=_0x75cb00[_0x4b3348(0x4df)](0x1,Weather[_0x4b3348(0x5c0)])-0x1,_0x3632a1=_0x211b8f?_0x4b3348(0x2cd):_0x4b3348(0x5a1);if(!this[_0x4b3348(0x536)][_0x3632a1][_0x3b07d2]){if(_0x4b3348(0x361)==='Qiiak')this[_0x4b3348(0x536)][_0x3632a1][_0x3b07d2]=VisuMZ['WeatherEffects']['newLayer']();else{if(this[_0x4b3348(0x27b)]()[_0x4b3348(0x3bc)]==='none')return;if(this[_0x4b3348(0x3dc)]===this[_0x4b3348(0x27b)]()['dimmer']['color'])return;const _0x4e54a0=this['data']()['duration'];let _0x4189f9=this['data']()['dimmer'][_0x4b3348(0x1d5)];this['_lastDimmerColor']=_0x4189f9;if(_0x4e54a0>0x0){const _0x4f8df4=[this[_0x4b3348(0x254)][_0x4b3348(0x525)],this[_0x4b3348(0x254)][_0x4b3348(0x5c8)],this[_0x4b3348(0x254)]['_blue']],_0x4077e4=_0x2efe64[_0x4b3348(0x5df)](_0x4189f9);for(let _0x94ecd7=0x0;_0x94ecd7<0x3;_0x94ecd7++){_0x4f8df4[_0x94ecd7]=_0x1df752[_0x4b3348(0x226)]((_0x4f8df4[_0x94ecd7]*(_0x4e54a0-0x1)+_0x4077e4[_0x94ecd7])/_0x4e54a0);}this['_lastDimmerColor']=_0x43220a[_0x4b3348(0x40b)](_0x4f8df4);}const _0x4eb78d=_0x4f130e[_0x4b3348(0x5df)](this['_lastDimmerColor']);this[_0x4b3348(0x254)]['setColor'](_0x4eb78d[0x0]||0x0,_0x4eb78d[0x1]||0x0,_0x4eb78d[0x2]||0x0);}}return this[_0x4b3348(0x536)][_0x3632a1][_0x3b07d2];},Game_Screen['prototype'][_0x502049(0x377)]=function(_0x5cf40c,_0x5af5e6,_0x2e167b){const _0x4603d5=_0x502049;if(this[_0x4603d5(0x536)]===undefined)this[_0x4603d5(0x199)]();const _0x2a5d95=_0x5cf40c['clamp'](0x1,Weather[_0x4603d5(0x5c0)])-0x1,_0xded4cb=_0x5af5e6?_0x4603d5(0x2cd):_0x4603d5(0x5a1);this['_weatherLayers'][_0xded4cb][_0x2a5d95]=JSON[_0x4603d5(0x42e)](JSON[_0x4603d5(0x487)](_0x2e167b));},Game_Screen[_0x502049(0x4ca)][_0x502049(0x465)]=function(_0xc62b40,_0x2ae6bd,_0x3f598d){const _0xb99970=_0x502049;if(this[_0xb99970(0x536)]===undefined)this['clearWeatherLayers']();const _0x2f06af=this[_0xb99970(0x16e)](_0xc62b40,_0x2ae6bd),_0x598a31=_0xc62b40['clamp'](0x1,Weather[_0xb99970(0x5c0)])-0x1,_0x539a9d=_0x2ae6bd?_0xb99970(0x2cd):_0xb99970(0x5a1);_0x3f598d[_0xb99970(0x44b)]=_0x2f06af[_0xb99970(0x44b)],this[_0xb99970(0x536)][_0x539a9d][_0x598a31]=_0x3f598d;},Game_Screen[_0x502049(0x4ca)][_0x502049(0x56b)]=function(_0xdec8c1,_0x509d69){const _0xbe2f75=_0x502049,_0x10a95e=this[_0xbe2f75(0x16e)](_0xdec8c1,_0x509d69);if(!_0x10a95e)return;_0x10a95e[_0xbe2f75(0x55f)]>0x0&&(_0xbe2f75(0x3cd)!==_0xbe2f75(0x1b0)?(this[_0xbe2f75(0x21b)](_0x10a95e),this[_0xbe2f75(0x2af)](_0x10a95e)):this['loadIconsetBitmap']());},Game_Screen[_0x502049(0x4ca)][_0x502049(0x21b)]=function(_0x6c3917){const _0x204339=_0x502049,_0x1260a4=_0x6c3917[_0x204339(0x55f)],_0x555002=_0x6c3917[_0x204339(0x2ab)];_0x6c3917[_0x204339(0x44b)]=(_0x6c3917['power']*(_0x1260a4-0x1)+_0x555002)/_0x1260a4;},Game_Screen[_0x502049(0x4ca)][_0x502049(0x2af)]=function(_0x282448){const _0x10637a=_0x502049;_0x282448[_0x10637a(0x55f)]--,_0x282448[_0x10637a(0x55f)]===0x0&&_0x282448['powerTarget']===0x0&&(_0x282448[_0x10637a(0x3bc)]='none');},VisuMZ[_0x502049(0x329)]['Game_Map_setup']=Game_Map[_0x502049(0x4ca)]['setup'],Game_Map[_0x502049(0x4ca)][_0x502049(0x4ce)]=function(_0x4194be){const _0x1b89f5=_0x502049;VisuMZ[_0x1b89f5(0x329)][_0x1b89f5(0x515)][_0x1b89f5(0x24b)](this,_0x4194be),this[_0x1b89f5(0x278)]();},Game_Map[_0x502049(0x4ca)][_0x502049(0x278)]=function(){const _0x3ecb6a=_0x502049;if(!$dataMap)return;if(!SceneManager[_0x3ecb6a(0x38e)]())return;this[_0x3ecb6a(0x2e7)]=![];const _0x5e61e7=VisuMZ[_0x3ecb6a(0x329)]['RegExp'],_0x321b81=$dataMap[_0x3ecb6a(0x347)]||'';if(_0x321b81[_0x3ecb6a(0x268)](_0x5e61e7['NoWeather'])){if(_0x3ecb6a(0x42b)!==_0x3ecb6a(0x4ae))this[_0x3ecb6a(0x2e7)]=!![];else{this['opacity']=this['data']()[_0x3ecb6a(0x53e)][_0x3ecb6a(0x441)];const _0x124922=this[_0x3ecb6a(0x27b)]()[_0x3ecb6a(0x53e)][_0x3ecb6a(0x170)],_0x111982=_0x268105[_0x3ecb6a(0x329)][_0x3ecb6a(0x450)](_0x124922);this['opacity']=(this[_0x3ecb6a(0x441)]+_0x111982)['clamp'](0x0,0xff),this[_0x3ecb6a(0x1cf)]=this[_0x3ecb6a(0x441)],this[_0x3ecb6a(0x4bd)]=this['data']()[_0x3ecb6a(0x53e)][_0x3ecb6a(0x5b7)]||'Linear',this[_0x3ecb6a(0x5b6)]=this[_0x3ecb6a(0x27b)]()['sprite'][_0x3ecb6a(0x45f)]||0x0,this[_0x3ecb6a(0x59e)]=this[_0x3ecb6a(0x27b)]()[_0x3ecb6a(0x53e)][_0x3ecb6a(0x45f)]||0x0;}}},Game_Map[_0x502049(0x4ca)][_0x502049(0x391)]=function(){const _0x5c2cf6=_0x502049;if(this['_noWeather']===undefined)this[_0x5c2cf6(0x278)]();return this[_0x5c2cf6(0x2e7)];},VisuMZ[_0x502049(0x329)][_0x502049(0x35d)]=Scene_Options['prototype'][_0x502049(0x573)],Scene_Options[_0x502049(0x4ca)]['maxCommands']=function(){const _0xbc9bc3=_0x502049;let _0x978332=VisuMZ['WeatherEffects']['Scene_Options_maxCommands'][_0xbc9bc3(0x24b)](this);const _0x5195ea=VisuMZ[_0xbc9bc3(0x329)][_0xbc9bc3(0x3b1)]['Options'];if(_0x5195ea[_0xbc9bc3(0x35a)]&&_0x5195ea[_0xbc9bc3(0x2f6)])_0x978332++;return _0x978332;};function _0x36df(){const _0x497076=['#8393ca','updatePositionStraightTrajectory','fast_icons_8','WEATHER_PASTEL_BRUME_COLORS','addLoadListener','adaptWeatherLayerData','_cached_WeatherEffects_FlameWall','rebornFlags','#f7941d','copyPluginCmdCustomSettings','Medium_Icons_LowerRight','_cached_WeatherEffects_Ashfall','weatherEffectsHeatClouds','right\x20border','LFuwv','processSparkleFinish','RWnux','initMembers','#00dd00','Spriteset_Battle_createBattleFieldContainer','floor','sunbeams','WEATHER_LIGHT_COLORS','#e0dd4c','icons','shadowBlur','Layer','Ice_ArcticBeam','Water_RainClouds','RCKlB','_cached_WeatherEffects_HeatClouds','cloudburst','rebornSpriteScale','rebornInitialOpacity','_cached_WeatherEffects_SmokeFog','#aaffaa','player','setFrame','left\x2040%','stringify','waterdrop','prismburst','#00ff00','weatherEffectsSmokeFog','weatherEffectsFireworks','rgba(255,255,255,1)','drawBalloon','update','_rainBitmap','trim','scaleOutDuration','#aaffcc','Window_Options_isVolumeSymbol','Slow_Icons_Up','#92d450','center\x2010%','Thunder_Thunderbolt','weatherEffectsSparkle','_cached_WeatherEffects_Fireworks','loadIconsetBitmap','lightorbs','_cached_WeatherEffects_ToxicGas','WEATHER_FROST_COLORS','medium_icons_8','weatherEffectsRain','Slow_Icons_Left','plasmabolt','#a8c54a','_context','weatherEffectsNone','trajectory','createBattleFieldContainer','_hue','GgnLN','WEATHER_RADIOACTIVE_COLORS','WEATHER_DARKNESS_COLORS','push','#0000ff','eVjLq','Fast_Icons_LowerLeft','Wind_WhiteClouds','updateWeatherLayers','rebornNewData','#ffaaff','Light_RainbowClouds','lockedOffsetY','setColorTone','weatherEffectsSunBeams','meteorshower','_updateDimmer','lineTo','split','loadPictureBitmap','_opacityEasingType','_angleSwayRange','_maxLevel','Water_Rain','follower','Options','tempest','stars','medium_icons_5','fast_icons_5','#888800','diamonddust','applyData','prototype','#959595','drawMultiPointPolygon','rgba(0,0,0,0)','setup','status','Ice_Sleet','loadBitmapType','_cached_WeatherEffects_Snow','smokecloud','thunderbolt','#aaffff','_cached_WeatherEffects_None','weatherPower','Light_RainbowOrbs','fireworks','cherryblossoms','updatePositionBattleLockedTarget','_flatFlutterRngY','arc','_cached_WeatherEffects_Icons','clamp','_cached_WeatherEffects_GrassyGust','Earth_DustStorm','ARRAYJSON','EMbOp','adjustWeatherLayerPower','mist','WEATHER_EFFECTS_MAX_VARIATIONS','destination-out','BasicClearWeather','WEATHER_STAR_COLORS','Wind_GreenLeaves','551625mJSqnz','smooth','iconWidth','angle','Wind_AutumnLeaves','clearCircle','BasicReplayMemory','Dark_Sootfall','upper\x2010%','straight','setFullBitmapFrame','Water_DrippingWater','anchor','weatherEffectsBloodRain','Wind_Pollen','_lockedOffsetY','_angleSwaySpeed','Dxdww','sqrt','pollutionclouds','findTargetSprite','#fac4ad','Medium_Icons_Down','xVjKg','#949fc6','#a1d2e5','Earth_DustClouds','Medium_Icons_Left','18CXukoB','WEATHER_ULTRAVIOLET_COLORS','rgba(%1,255,%1,1)','frozen','_cached_WeatherEffects_ArcticBeams','ARRAYEVAL','WEATHER_GRASSY_GUST_COLORS','_lockedOffsetX','updateScale','opacityMinimum','Window_Options_addGeneralOptions','slow_icons_4','YKtHd','setLayerData','Game_Map_setup','clone','setHue','FQwYk','rgba(%1,\x20%2,\x20%3,\x200)','_cached_WeatherEffects_Storm','tileWidth','Light_LensFlare','UpperLower','padZero','medium_icons_9','setColor','_memorizedWeatherData','19878qMmgFI','swZyn','sin','_red','hueSwayRange','nwEwy','randomizeBitmapType','WEATHER_CLOUD_WHITE_COLORS','#a67c52','_cached_WeatherEffects_DiamondDust','rgba(255,255,255,0)','weatherEffectsWhiteClouds','middle\x2020%','_cached_WeatherEffects_PastelBrume','#ff0000','_cached_WeatherEffects_Sandstorm','addCommand','weatherEffectsConfetti','#efcba2','drawDandelionSeed','_weatherLayers','#fbaf5d','scaleIn','_subject','createTilemap','weatherEffectsFirestorm','speedVariance','PreRenderGenImg','sprite','createNewWeatherSprites','center\x2020%','addColorStop','weatherEffectsShadowBurst','XpPSH','_cached_WeatherEffects_Sootfall','center\x2060%','drawRainbowArch','GjtmB','jNbuj','abs','_wholeLifespan','#444444','left','aJTqq','weatherEffectsAurora','WEATHER_NATURE_GREEN_COLORS','Ice_SnowClouds','_cached_WeatherEffects_Sleet','fillStyle','weatherEffectsDiamondDust','RenderVariations','lighter','remove','rebornSpriteImage','#3d8b43','_cached_WeatherEffects_Fireflies','BclIm','#a1a1a1','whiteclouds','ySwayRange','FxXjm','duration','both','173286JfxGhA','weatherEffectsFumes','#fcf3de','Fast_Icons_UpperRight','middle\x2030%','WEATHER_DANDELION3_COLORS','alwaysVisiblePlayer','GJAId','parent','spinSpeedVariance','updateWeatherLayer','rebornInitialTrajectoryData','#e6cab9','lower\x2070%','WEATHER_BALLOON_COLORS','weatherEffectsFireflies','#f49ac1','playOnceParallelInterpreter','maxCommands','max','ZdpLE','drawLensFlare','Light_Confetti','#fffbc7','scOtD','loadSystemImages','updateData','ZkLoQ','General','Medium_Icons_UpperLeft','isSceneBattle','hexToRgba','#bbbbbb','upper\x2090%','rebornSpriteTone','load','_baseHue','center','WEATHER_MOON_BEAM_COLORS','cyan','#b8dfee','aurora','blizzard','iAFml','xSwayRange','lifespan','#ffbbff','slow_icons_0','updateOpacity','randomInt','rgba(%1,%2,%3,%4)','29voBJrF','_scene','WEATHER_SOAP_BUBBLE_COLORS','clearWeather','RegExp','right\x2070%','#ddffff','embers','grassyGust','replayMemorizedWeatherLayerData','_opacityFadeInTimeWhole','applyPluginCmdSettingsCustom','rainbowarch','upper','zcbSy','calculateScaleY','RadiansToDegrees','WEATHER_DANDELION1_COLORS','_cached_WeatherEffects_RainbowClouds','Ice_Snow','WEATHER_SHADOW_BURST_COLORS','weatherEffectsDustStorm','_cached_WeatherEffects_IceFog','weatherEffectsSandClouds','lifespanVariance','_sprites','setupIconFrame','totalMinimum','_spinAngle','_cached_WeatherEffects_CloudBurst','drip','_cached_WeatherEffects_SunBeam','weatherEffectsRainbowClouds','Oxpfc','_opacityFadeInTime','opacityEasingType','_cached_WeatherEffects_AshDebris','NUM','#111111','#603913','weatherEffectsIcons','middle\x2060%','Fast_Icons_Down','qwrwh','MAX_LAYERS','#404040','1302808XoVxQu','screenWidth','OrdgO','rotate','speed','_cached_WeatherEffects_PurpleHaze','_green','toxicgas','calcEasing','upper\x2070%','mFALd','_weatherIcons','CJHEm','weatherType','RojjM','Fire_Fireflies','#aabaf1','shift','icefog','Thunder_Thundersurge','#79bfdb','#000044','fast_icons_9','#008800','lower\x20border','weatherEffectsCloudBurst','weatherEffectsBalloons','zrOab','#7d7d7d','hexToArray','bXirx','screenY','_cached_WeatherEffects_Firestorm','%1Weight','_cached_WeatherEffects_Aurora','_customModified','weatherEffectsFlameHaze','Slow_Icons_UpperLeft','_angleSwayRng','WEATHER_ASH_COLORS','applyPluginCmdSettingsWait','_scaleInOutRatio','CZHQe','drawTreeLeaf','slow_icons_9','#754c24','#fde3d9','#fcfade','Slow_Icons_UpperRight','upper\x2080%','Slow_Icons_Mid','actor','updateLifespan','drawCloud','user','middle\x2040%','medium_icons_3','getWeatherLayerData','_cached_WeatherEffects_CrumblingCave','opacityVariance','removeUnusedColorFilter','dodVG','InSine','getGeneratedWeatherParticle','ConfigManager_applyData','875105qCpOKZ','_cached_WeatherEffects_DustStorm','weatherEffectsBubbles','Earth_PollutionClouds','_cached_WeatherEffects_Stars','UhcbC','balloon','#ebebeb','Game_Screen_clearWeather','weatherEffectsSandstorm','fast_icons_7','applyInverse','weatherEffectsSmokeClouds','dqDae','ARRAYSTR','Scene_Boot_loadSystemImages','lower\x2090%','LErus','includes','isVolumeSymbol','weatherEffectsDustClouds','rebornCommonEvent','globalAlpha','Medium_Icons_Mid','bCtTV','#d6967c','WEATHER_SUNBEAM_COLORS','_weather','_colorFilter','loadGeneratedBitmap','isPlaytest','VfcLW','_angleOffset','JMsqs','Wind_DandelionSeeds','clearWeatherLayers','auTBt','length','weatherDensity','_debugID','_blue','flags','WEATHER_SUNLIGHT_COLORS','oOqJd','#ccffaa','upper\x2060%','medium_icons_1','_lowerWeatherContainer','_angleArcTotal','Dark_ShadowBurst','acidrain','drawFireball','weatherEffectsEmbers','#c69c6d','#f5989d','image','isInstanceOfSceneMap','storm','Cxcgi','slow_icons_6','Custom','drawLightning','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','adjustHexColor','DJQmX','#880000','_cached_WeatherEffects_HouseDust','applyEasing','screenX','_trajectoryType','weatherEffectsThunderclouds','EBfJP','QNQlr','processRespawnDelay','displayX','IwvUL','IdjlJ','fill','rebornLifespan','Fire_SunBeams','slow_icons_1','duststorm','stroke','#aaccff','WEATHER_CLOUD_DARK_COLORS','_cached_WeatherEffects_SandClouds','weatherEffectsLightOrbs','rBXTi','weatherEffectsStorm','_realOpacity','_cached_WeatherEffects_DandelionSeeds','gxaSx','WEATHER_MOONLIGHT_COLORS','weatherEffectsFireworksFlower','lower\x2060%','color','control','index','longevity','Light_PastelBrume','_hueSwayRng','#faaacf','addChild','erUeJ','prepareGeneratedWeatherImages','MxCTh','updatePositionTrajectorySway','VZeMv','xYJGi','_xSwayRange','translate','OErpQ','_createBitmaps','medium_icons_7','xtreme','fzoiP','ARRAYSTRUCT','globalCompositeOperation','grassygust','_cached_WeatherEffects_Sparkle','WEATHER_UV_BEAM_COLORS','angleSwayRange','_originBound','weatherEffectsShootingStars','YraFl','Dark_AshDebris','_flakeAngle','updatePositionTrajectorySpin','lockedOffsetX','shadowburst','_spriteset','updatePositionTrajectory','moonbeams','vgTnM','Ice_IceFog','ceil','QhLpt','Water_SoapBubbles','_cached_WeatherEffects_Pollen','fumes','#13ffee','bloodrain','flatFlutter','_scaleRatioX','applyPluginCmdSettingsSpecificCases','_cached_WeatherEffects_ShootingStars','bind','vRAHz','pWAej','slow_icons_2','rgba(%1,%1,255,1)','_cached_WeatherEffects_AcidRain','soapbubbles','Water_RisingSteam','Duration','upper\x20border','_cached_WeatherEffects_DustClouds','#ba7959','#d28fad','#b4a8b1','ashdebris','_flatFlutterRngX','thundersurge','drawStar','rgba(%1,255,255,1)','updateWeatherLayerPower','spawnLocationX','left\x2020%','prismbeams','_scaleRatioY','ashfall','random','JpIHB','updatePositionFrozenTrajectory','#f26522','IHyxG','round','frameCount','updatePosition','weatherEffectsSnowClouds','hueVariations','getWeatherLayerSprite','origin','Wind_GrassyGust','WEATHER_CLOUD_BLUE_COLORS','WEATHER_PRIMARY_COLORS','#6dcff6','#aa00ff','qPIsq','#898989','_cached_WeatherEffects_FireworksFlower','weatherEffectsGreenLeaves','OBDBy','WEATHER_RAINBOW_ORB_COLORS','rainboworbs','cos','XCkXD','Light_LightOrbs','TXlCY','Dark_MoonBeams','rgba(255,64,64,0)','Earth_SandClouds','darkorbs','_speed','EeUNE','purplehaze','drawFireworksFlower','left\x2070%','ARRAYFUNC','children','weatherEffectsLensFlare','updatePositionTrajectoryAngle','_lowerLayerSprites','call','Thunder_Thunderclouds','housedust','left\x2080%','fast_icons_6','rebornBitmap','rgba(255,%1,%1,1)','rgba(255,%1,%1,0.5)','AddWeatherDensityOption','_dimmerSprite','ANAFG','isDebugAllOption','_cached_WeatherEffects_Thunderbolt','RWkKA','drawText','xuBuJ','flamewall','pHlyA','maxSprites','thunderclouds','opacityRate','save','Wind_XtremeSpeed','VUrVS','updateOpacityEasing','weatherEffectsXtremeSpeed','Fast_Icons_Right','zoveK','_baseTexture','match','JBwde','WEATHER_EFFECTS_ICON_GENERATED','createLowerWeatherLayer','_flatFlutterSpeedX','_cached_WeatherEffects_WaterDrop','weatherEffectsSnow','KrdhI','_cached_WeatherEffects_BloodRain','loadPicture','WcIob','Dark_SmokeFog','registerCommand','Dark_SmokeClouds','_lowerLayer','WEATHER_EFFECTS_DEBUG_GENERATE_MSG','setupWeatherEffectNotetags','weatherEffectsTempest','weatherEffectsPrismBeams','data','Thunder_StaticCharge','FbTII','Thunder_Discharge','WEATHER_ARCTIC_BEAM_COLORS','Earth_AcidRain','YEMXG','respawnCommonEventID','lower\x2010%','weatherEffectsStars','substring','_baseSprite','smokefog','GpCVN','dimmer','_cached_WeatherEffects_Balloons','_lastType','generatedWeight','weatherEffectsAshDebris','lightburst','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','closePath','#00aa00','_lifespan','#ed1c24','tileHeight','gradientFillRect','Medium_Icons_UpperRight','right\x2010%','weatherEffectsSoapBubbles','#b2e0f2','newLayer','BasicAdjustWeatherPower','WEATHER_FLAME_COLORS','_ySwaySpeed','#fbec65','WEATHER_EARTH_COLORS','#ffffbb','weatherEffectsDandelionSeeds','irvAq','createElement','#333333','WEATHER_SAKURA3_COLORS','angleOffset','isLongevityAffected','upper\x2020%','NlfPA','mapBound','powerTarget','_cached_WeatherEffects_Blizzard','slow_icons_7','memorizeWeatherLayerData','updateWeatherLayerDuration','78865UZMqep','Fire_HeatClouds','upper\x2050%','_alignAngle','indexOf','updateDimmerOpacity','ultraviolet','qYSdd','_cached_WeatherEffects_Tempest','laqvk','Earth_ToxicGas','changeWeather','Fire_Fireworks','_updateAllSprites','gotid','Thunder_SpiderLightning','cXLQo','right\x2080%','flCqH','smokeclouds','gsxTe','calculateScaleX','scaleInDuration','toneVariations','_angleArc','CPwKh','white','reverseSpin','_target','lower','pollen','_flatFlutterDirX','exit','version','iconsWeight','applyPluginCmdSettingsBasic','cEJll','jrJVC','getTemporaryContext','weatherEffectsIceFog','#9cdaf2','DegreesToRadian','weatherEffectsPastelBrume','flamehaze','QVvYA','firestorm','_flatFlutterSpeedY','JkNeg','WEATHER_PASTEL_COLORS','#fdc689','WEATHER_EFFECTS_SMOOTH_ICONS','spinSpeed','scale','rgba(','insHq','_noWeather','lower\x2040%','_cached_WeatherEffects_MoonBeam','#7accc8','rgba(%1,\x20%2,\x20%3,\x201)','#e1e1e1','_cached_WeatherEffects_PrismBeams','rGCkw','snowclouds','weatherEffectsRainClouds','_baseAngle','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','#ffddff','VisuMZ_2_VisualBattleEnv','rebornSprite','AdjustRect','dEISe','createUpperWeatherLayer','#ea916d','radioactivebeam','_cached_WeatherEffects_Thunderclouds','hueSwaySpeed','drawFireworksMissile','createLinearGradient','confetti','#888888','filter','toLowerCase','middle\x2090%','_xSwaySpeed','_cached_WeatherEffects_SnowClouds','8Bssvyj','initialize','WEATHER_PRISMBEAM_COLORS','right\x2050%','wDtCl','ZofNb','_flags','_xSwayRng','GynJJ','#ffffff','picturesWeight','sootfall','makeData','width','FOQIj','alignAngle','sparkle','cefpI','filters','pictures','log','_cached_WeatherEffects_RainbowArch','dandelionseeds','#fdedd9','_baseScale','_baseTone','Fire_ShootingStar','slow_icons_5','rebornSpriteHue','clearWeatherLayerData','Weather_update','#fff200','WEATHER_GREEN_LEAVES_COLORS','weatherEffectsCrumblingCave','weatherEffectsAshfall','WeatherEffects','weatherEffectsSnowflakes','lineWidth','SQOth','pastelbrume','middle\x2080%','_cached_WeatherEffects_Rain','addWeatherDensityCommand','Earth_RadioactiveBeams','moveTo','weatherEffectsToxicGas','followers','#ccaaff','trLyG','_cached_WeatherEffects_Xtreme','left\x2010%','format','advanced','respawnDelayMin','_branches','pddwx','weatherEffectsAutumnLeaves','GoDrB','drawSakuraPetal','Medium_Icons_Right','_cached_WeatherEffects_CherryBlossoms','updateWeather','updateHueSway','#7da7d9','JFmYk','note','respawnDelayRngPerPower','test','heatclouds','#ffaaaa','#4dff65','_cached_WeatherEffects_AutumnLeaves','gICBw','paintOpacity','_cached_WeatherEffects_RadioactiveBeam','Fast_Icons_Left','fireflies','#fff568','totalPerPower','rgba(%1,%1,%1,0)','Thunder_PurpleHaze','drawMapleLeaf','TZsfh','_cached_WeatherEffects_SoapBubbles','AddOption','fast_icons_4','WJskK','Scene_Options_maxCommands','medium_icons_2','_trajectoryLockedID','_targets','Qiiak','weatherEffectsArcticBeams','#6aba49','_cached_WeatherEffects_Spiderbolt','rain','kkwUM','rgba(255,255,%1,1)','join','Fire_MeteorShower','fireworksflower','rebornSpriteBlendMode','lensflare','constructor','viewport','restore','#000000','Ice_GlisteningIce','EQXLK','discharge','Dark_Fumes','_cached_WeatherEffects_Embers','return\x200','setWeatherLayerData','equals','WEATHER_AUTUMN_COLORS','ConfigManager_makeData','TWVgm','UaPeE','KgLSq','WEATHER_FIREFLY_COLORS','weatherEffectsThunderbolt','WEATHER_SAKURA1_COLORS','snowflakes','enemy','HScDt','Medium_Icons_LowerLeft','#505050','updateFlags','xSwaySpeed','glQzQ','Earth_Sandstorm','Fast_Icons_LowerRight','center\x2030%','weatherEffectsPurpleHaze','afkup','isSceneMap','Spriteset_Map_createTilemap','yellow','isNoWeather','wait','_cached_WeatherEffects_SmokeClouds','rgba(128,%1,255,1)','right\x2090%','_cached_WeatherEffects_RainClouds','updateDimmerColor','bubbles','center\x2080%','WEATHER_SAKURA2_COLORS','Earth_HouseDust','medium_icons_6','beginPath','rainbowclouds','left\x2030%','weatherEffectsAcidRain','generated','WaitForCompletion','concat','transform','_cached_WeatherEffects_Confetti','#00bb00','angleVariance','Wind_CherryBlossoms','_cached_WeatherEffects_RainbowOrbs','blendMode','updatePositionFailsafeTrajectory','#f26c4f','#acff3b','_respawnDelay','#ffff00','plasmasurge','Settings','rebornActions','ConvertParams','map','WuGZJ','spiderbolt','_removeSprite','upper\x2030%','iconHeight','updatePositionMapLockedTarget','lUQFb','type','SmoothIcons','Slow_Icons_Down','MakeFloatVariance','#ff8800','applyPluginCmdSettingsLayers','weatherEffectsBlizzard','SPNou','#ffaacc','NGkaL','weatherEffectsWaterDrop','Fire_FlameHaze','ApplyEasing','shootingstars','vAVAc','_addSprite','_notLoadedReady','GqaEW','img/system/Iconset.png','Light_PrismBurst','scaleOut','_cached_WeatherEffects_GreenLeaves','#8dc63f','_layerID','drawRainbowLensFlare','weatherEffectsSpiderbolt','drawPolyArc','Linear','processFireworksFinish','#a700ff','updatePositionFinal','_weatherParent','_lastDimmerColor','WEATHER_AUTUMN_LEAVES_COLORS','name','isPressed','weatherEffectsHouseDust','fontSize','spawnLocationY','slow_icons_3','ZMGsB','spawnOffsetX','right\x2030%','height','replace','center\x2090%','staticcharge','#440000','_ySwayRng','WEATHER_RAINBOW_CLOUD_COLORS','CUhDe','weatherEffectsGrassyGust','steam','createRadialGradient','#f68e56','weatherEffectsPollen','tvVOo','getLastPluginCommandInterpreter','getTemporaryCanvas','rgba(255,\x20%1,\x200,\x201)','drawSnowflakeLine','#aaaaff','dustclouds','#ffccaa','2152800Bhtdxy','bezierCurveTo','weatherEffectsMoonBeams','none','middle\x2070%','context','HRVWK','_cached_WeatherEffects_FlameHaze','canvas','LvMOC','WEATHER_LIGHTNING_COLORS','_cached_WeatherEffects_DarkOrbs','BWJCA','Ice_Blizzard','event','arrayToHex','_flakeRadius','WEATHER_CONFETTI_COLORS','crumblingcave','weatherEffectsFlameWall','middle\x2010%','arcticbeam','rebornSpawnLocation','sandstorm','_cached_WeatherEffects_PollutionClouds','opacityPerPower','screenHeight','applyPluginCmdSettings','_tempCanvas','_cached_WeatherEffects_Mist','autumnleaves','sleet','mqNXf','#fff799','#a3d2e5','fillRect','Ice_DiamondDust','OAnXU','balloons','strokeStyle','_cached_WeatherEffects_ShadowBurst','greenleaves','drawOvalGradiantCircle','Fire_Embers','_cached_WeatherEffects_UvBeam','lockedID','sandclouds','dfMif','NoSiB','weatherEffectsSootfall','parse','_cached_WeatherEffects_Bubbles','WEATHER_POLLEN_COLORS','scaleVariance','drawCircle','worldTransform','_cached_WeatherEffects_LensFlare','_cached_WeatherEffects_LightOrbs','rainclouds','_snowBitmap','updateScaleInOutRatio','Name','_upperWeatherContainer','#ddddff','#c4df9b','Fast_Icons_Mid','_ySwayRange','Slow_Icons_LowerRight','_strokeWidth','opacity','pop','weatherEffectsUltravioletBeams','_cached_WeatherEffects_Fumes','bEIFR','#ff00ff','_cached_WeatherEffects_Snowflakes','_colorTone','fast_icons_2','loadWeatherIcons','power','acXEd','BasicMemorizeWeather','bitmap','ETtjF','MakeVariance','createWeather','_spinSpeed','weatherEffectsRainbowArch','weatherEffectsDarkOrbs','glistening','SHJlj','_upperLayerSprites','lower\x2080%','#0072bc','Earth_CrumblingCave','snow','#00ffff','Medium_Icons_Up','Maprd','opacityFadeInTime'];_0x36df=function(){return _0x497076;};return _0x36df();}function Sprite_WeatherParticle(){this['initialize'](...arguments);}Sprite_WeatherParticle['prototype']=Object['create'](Sprite['prototype']),Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x36d)]=Sprite_WeatherParticle,Sprite_WeatherParticle['prototype'][_0x502049(0x307)]=function(_0x4ea081,_0xa2ca38){const _0x2152a5=_0x502049;this[_0x2152a5(0x3db)]=_0x4ea081,this[_0x2152a5(0x19d)]=_0xa2ca38,Sprite['prototype']['initialize'][_0x2152a5(0x24b)](this,this['_weatherParent'][_0x2152a5(0x36e)]),this[_0x2152a5(0x471)](),this[_0x2152a5(0x2f5)]();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x471)]=function(){const _0x3dad50=_0x502049;this[_0x3dad50(0x441)]=0x0,this[_0x3dad50(0x4f7)]['x']=0.5,this[_0x3dad50(0x4f7)]['y']=0.5,this[_0x3dad50(0x3ae)]=0x0;},Sprite_WeatherParticle['prototype']['data']=function(){const _0x377abb=_0x502049;return this['_weatherParent'][_0x377abb(0x27b)]();},Sprite_WeatherParticle['prototype'][_0x502049(0x1d7)]=function(){const _0x50be48=_0x502049;if(!this[_0x50be48(0x569)])return-0x1;return this[_0x50be48(0x569)]['children'][_0x50be48(0x2b4)](this);},Sprite_WeatherParticle['prototype'][_0x502049(0x2f5)]=function(){const _0x55b187=_0x502049;this[_0x55b187(0x4b2)](),this[_0x55b187(0x557)](),this[_0x55b187(0x3b2)]();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x4b2)]=function(){const _0x1022ce=_0x502049;this['type']=this[_0x1022ce(0x27b)]()[_0x1022ce(0x3bc)];if(this['type']===_0x1022ce(0x3ff))return;this[_0x1022ce(0x1c4)](),this[_0x1022ce(0x467)](),this['rebornSpriteScale'](),this['rebornSpawnLocation'](),this[_0x1022ce(0x481)](),this[_0x1022ce(0x56c)]();},Sprite_WeatherParticle['prototype'][_0x502049(0x1c4)]=function(){const _0xf2a6e3=_0x502049;this[_0xf2a6e3(0x292)]=this['data']()[_0xf2a6e3(0x53e)][_0xf2a6e3(0x58e)];const _0x54849a=this[_0xf2a6e3(0x27b)]()[_0xf2a6e3(0x53e)][_0xf2a6e3(0x5ac)],_0x32f7db=VisuMZ[_0xf2a6e3(0x329)]['MakeVariance'](_0x54849a);this[_0xf2a6e3(0x292)]=Math['max'](0x1,Math[_0xf2a6e3(0x1fd)](this[_0xf2a6e3(0x292)]+_0x32f7db)),this['_wholeLifespan']=this[_0xf2a6e3(0x292)],this['_lastType']!==this[_0xf2a6e3(0x3bc)]&&(this[_0xf2a6e3(0x28b)]=this[_0xf2a6e3(0x3bc)],this[_0xf2a6e3(0x292)]=Math['randomInt'](this['_lifespan'])+0x1);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x467)]=function(){const _0x4fc05b=_0x502049;this[_0x4fc05b(0x30c)]=JSON[_0x4fc05b(0x42e)](JSON[_0x4fc05b(0x487)](this['data']()[_0x4fc05b(0x19f)])),this[_0x4fc05b(0x1da)]=Math[_0x4fc05b(0x592)](0xf4240),this[_0x4fc05b(0x217)]=Math[_0x4fc05b(0x592)](0xf4240),this['_flatFlutterRngY']=Math[_0x4fc05b(0x592)](0xf4240),this[_0x4fc05b(0x26c)]=Math[_0x4fc05b(0x221)]()*0.05+0.005,this['_flatFlutterSpeedY']=Math['random']()*0.05+0.005,this['_flatFlutterDirX']=Math[_0x4fc05b(0x221)]()<0.5;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x480)]=function(){const _0x331634=_0x502049;this[_0x331634(0x31e)]=this['data']()['sprite'][_0x331634(0x2e4)]??0x1;const _0x41cc68=this[_0x331634(0x27b)]()[_0x331634(0x53e)][_0x331634(0x431)]??0x0;this[_0x331634(0x31e)]+=VisuMZ[_0x331634(0x329)][_0x331634(0x3bf)](_0x41cc68),this[_0x331634(0x205)]=this[_0x331634(0x27b)]()[_0x331634(0x53e)]['scaleRatioX']??0x1,this[_0x331634(0x21f)]=this[_0x331634(0x27b)]()[_0x331634(0x53e)]['scaleRatioY']??0x1,this[_0x331634(0x5eb)]=this['data']()['flags'][_0x331634(0x538)]??0x1,this['scale']['x']=this['_baseScale']*this[_0x331634(0x205)]*this[_0x331634(0x5eb)],this[_0x331634(0x2e4)]['y']=this[_0x331634(0x31e)]*this[_0x331634(0x21f)]*this['_scaleInOutRatio'];},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x412)]=function(){const _0x4f2547=_0x502049,_0x1a798c=0xc8;let _0x2ad661=this['data']()[_0x4f2547(0x53e)][_0x4f2547(0x21c)]||'random';_0x2ad661=_0x2ad661[_0x4f2547(0x3e8)](/sides/i,Math[_0x4f2547(0x221)]()<0.5?_0x4f2547(0x54c):'right');let _0x37e0d8=0x0;switch(_0x2ad661[_0x4f2547(0x302)]()[_0x4f2547(0x491)]()){case _0x4f2547(0x221):this['ax']=Math[_0x4f2547(0x592)](Graphics[_0x4f2547(0x313)]+_0x1a798c*0x2)-_0x1a798c;break;case'left\x20border':this['ax']=0x0;break;case _0x4f2547(0x338):case _0x4f2547(0x21d):case _0x4f2547(0x39f):case _0x4f2547(0x486):case'left\x2050%':case'left\x2060%':case _0x4f2547(0x245):case _0x4f2547(0x24e):case'left\x2090%':if(_0x2ad661[_0x4f2547(0x268)](/(\d+)([%％])/i)){const _0x492877=Number(RegExp['$1'])*0.01;_0x37e0d8+=Math[_0x4f2547(0x474)](Graphics[_0x4f2547(0x313)]*_0x492877);}this['ax']=0x0+Math[_0x4f2547(0x592)](_0x37e0d8)-Math[_0x4f2547(0x592)](_0x1a798c);break;case _0x4f2547(0x46d):this['ax']=Graphics[_0x4f2547(0x313)];break;case _0x4f2547(0x297):case'right\x2020%':case _0x4f2547(0x3e6):case'right\x2040%':case _0x4f2547(0x309):case'right\x2060%':case _0x4f2547(0x599):case _0x4f2547(0x2c1):case _0x4f2547(0x395):if(_0x2ad661[_0x4f2547(0x268)](/(\d+)([%％])/i)){const _0x53ee8b=Number(RegExp['$1'])*0.01;_0x37e0d8+=Math[_0x4f2547(0x474)](Graphics[_0x4f2547(0x313)]*_0x53ee8b);}this['ax']=Graphics['width']-Math[_0x4f2547(0x592)](_0x37e0d8)+Math[_0x4f2547(0x592)](_0x1a798c);break;case _0x4f2547(0x497):case'center\x2010%':case _0x4f2547(0x540):case _0x4f2547(0x38b):case'center\x2040%':case'center\x2050%':case _0x4f2547(0x545):case'center\x2070%':case _0x4f2547(0x399):case _0x4f2547(0x3e9):if(_0x2ad661[_0x4f2547(0x268)](/(\d+)([%％])/i)){if(_0x4f2547(0x272)==='WcIob'){const _0xb1512=Number(RegExp['$1'])*0.01;_0x37e0d8+=Math[_0x4f2547(0x474)](Graphics[_0x4f2547(0x313)]*_0xb1512);}else{const _0x5e4268=this[_0x4f2547(0x4a4)];_0x553426=_0x3131fc||['#00ff00',_0x4f2547(0x472),_0x4f2547(0x3a6),_0x4f2547(0x291),_0x4f2547(0x5d9),_0x4f2547(0x370)],_0x5e4268[_0x4f2547(0x260)](),_0x5e4268[_0x4f2547(0x3a4)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0x5e4268[_0x4f2547(0x552)]=_0x2d9321[0x0],_0x5e4268[_0x4f2547(0x423)]=_0x16423a[0x5],_0x5e4268[_0x4f2547(0x32b)]=0xc,(_0x5e4268[_0x4f2547(0x39d)](),_0x5e4268[_0x4f2547(0x332)](431.62,249.52),_0x5e4268[_0x4f2547(0x3fd)](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0x5e4268[_0x4f2547(0x3fd)](430.23,276.86,429.73,280.75,429.1,284.61),_0x5e4268[_0x4f2547(0x3fd)](428.47,288.47,427.91,292.3,427.37,296.18),_0x5e4268[_0x4f2547(0x3fd)](426.83,300.06,426.06,303.89,425.37,307.73),_0x5e4268[_0x4f2547(0x3fd)](424.68,311.57,423.88,315.4,423.26,319.24),_0x5e4268['bezierCurveTo'](422.64,323.08,422.18,326.95,421.56,330.82),_0x5e4268[_0x4f2547(0x3fd)](420.94,334.69,420.14,338.52,419.39,342.35),_0x5e4268['bezierCurveTo'](418.64,346.18,417.8,350.01,416.84,353.81),_0x5e4268[_0x4f2547(0x3fd)](415.88,357.61,414.75,361.36,413.6,365.1),_0x5e4268[_0x4f2547(0x3fd)](411.28,372.57,408.73,379.96,406.25,387.35),_0x5e4268[_0x4f2547(0x3fd)](405.01,391.06,403.73,394.77,402.15,398.35),_0x5e4268['bezierCurveTo'](400.57,401.93,398.73,405.42,396.87,408.87),_0x5e4268[_0x4f2547(0x3fd)](395.01,412.32,0x189,415.72,0x187,419.05),_0x5e4268['bezierCurveTo'](0x185,422.38,386.74,425.65,384.38,428.79),_0x5e4268[_0x4f2547(0x3fd)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0x5e4268[_0x4f2547(0x3fd)](363.63,452.25,358.11,457.81,352.4,463.16),_0x5e4268[_0x4f2547(0x3fd)](349.56,465.85,346.63,468.42,343.72,471.04),_0x5e4268[_0x4f2547(0x4ba)](0x14f,478.86),_0x5e4268[_0x4f2547(0x4ba)](326.28,486.68),_0x5e4268['lineTo'](321.9,490.58),_0x5e4268['bezierCurveTo'](320.42,491.87,318.9,493.12,317.31,494.31),_0x5e4268[_0x4f2547(0x3fd)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0x5e4268[_0x4f2547(0x3fd)](305.65,501.74,303.88,502.55,302.15,503.43),_0x5e4268[_0x4f2547(0x4ba)](296.92,506.07),_0x5e4268[_0x4f2547(0x3fd)](293.43,507.82,289.92,509.53,286.29,511.07),_0x5e4268[_0x4f2547(0x3fd)](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0x5e4268[_0x4f2547(0x3fd)](271.49,516.37,267.75,517.45,0x108,518.58),_0x5e4268['bezierCurveTo'](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0x5e4268['bezierCurveTo'](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0x5e4268[_0x4f2547(0x4ba)](234.87,522.46),_0x5e4268[_0x4f2547(0x4ba)](231.93,522.57),_0x5e4268[_0x4f2547(0x3fd)](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0x5e4268[_0x4f2547(0x4ba)](229.29,522.84),_0x5e4268[_0x4f2547(0x4ba)](229.12,522.84),_0x5e4268[_0x4f2547(0x4ba)](228.9,522.84),_0x5e4268[_0x4f2547(0x3fd)](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0x5e4268[_0x4f2547(0x4ba)](220.44,520.98),_0x5e4268[_0x4f2547(0x3fd)](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0x5e4268[_0x4f2547(0x3fd)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0x5e4268[_0x4f2547(0x4ba)](213.61,515.56),_0x5e4268[_0x4f2547(0x4ba)](213.51,515.44),_0x5e4268[_0x4f2547(0x4ba)](213.44,515.27),_0x5e4268['lineTo'](213.44,515.22),_0x5e4268[_0x4f2547(0x3fd)](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0x5e4268[_0x4f2547(0x3fd)](210.09,508.23,209.21,506.46,208.39,504.65),_0x5e4268['bezierCurveTo'](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0x5e4268[_0x4f2547(0x3fd)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0x5e4268[_0x4f2547(0x3fd)](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0x5e4268[_0x4f2547(0x3fd)](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0x5e4268[_0x4f2547(0x3fd)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0x5e4268[_0x4f2547(0x3fd)](204.99,443.31,204.17,439.98,203.25,436.68),_0x5e4268[_0x4f2547(0x3fd)](203.12,436.2,202.99,435.68,202.85,435.26),_0x5e4268[_0x4f2547(0x4ba)](199.49,0x1a8),_0x5e4268[_0x4f2547(0x4ba)](196.33,412.63),_0x5e4268[_0x4f2547(0x3fd)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0x5e4268[_0x4f2547(0x3fd)](192.79,393.13,192.48,385.3,192.02,377.41),_0x5e4268[_0x4f2547(0x3fd)](191.77,369.41,192.93,361.55,194.4,353.82),_0x5e4268[_0x4f2547(0x4ba)](196.71,342.26),_0x5e4268[_0x4f2547(0x3fd)](197.47,338.41,198.18,334.55,198.81,330.69),_0x5e4268[_0x4f2547(0x3fd)](199.44,326.83,200.07,322.93,200.45,319.07),_0x5e4268[_0x4f2547(0x3fd)](200.83,315.21,0xc9,311.25,201.45,307.31),_0x5e4268[_0x4f2547(0x3fd)](202.45,299.51,203.2,291.66,205.03,283.93),_0x5e4268[_0x4f2547(0x3fd)](206.86,276.2,210.25,0x10d,212.78,261.6),_0x5e4268[_0x4f2547(0x3fd)](215.47,254.2,218.06,246.79,220.78,239.41),_0x5e4268['bezierCurveTo'](222.24,235.74,223.88,232.16,225.46,228.56),_0x5e4268[_0x4f2547(0x3fd)](227.04,224.96,228.46,221.33,0xe6,217.7),_0x5e4268[_0x4f2547(0x4ba)](234.48,206.81),_0x5e4268[_0x4f2547(0x3fd)](235.91,203.21,236.93,199.36,238.48,195.74),_0x5e4268[_0x4f2547(0x4ba)](240.77,190.29),_0x5e4268[_0x4f2547(0x3fd)](241.53,188.47,242.27,186.64,243.15,184.89),_0x5e4268[_0x4f2547(0x3fd)](244.83,181.33,246.56,177.79,248.15,174.23),_0x5e4268[_0x4f2547(0x3fd)](249.74,170.67,251.28,167.02,253.15,163.5),_0x5e4268['bezierCurveTo'](255.02,159.98,257.01,156.61,259.15,153.29),_0x5e4268[_0x4f2547(0x3fd)](261.29,149.97,263.53,146.74,265.82,143.53),_0x5e4268['bezierCurveTo'](268.11,140.32,270.29,137.11,272.31,133.75),_0x5e4268[_0x4f2547(0x3fd)](274.33,130.39,276.31,126.98,278.2,123.57),_0x5e4268['bezierCurveTo'](280.09,120.16,281.77,116.57,283.6,113.1),_0x5e4268[_0x4f2547(0x3fd)](284.52,111.36,285.47,109.62,286.5,107.93),_0x5e4268[_0x4f2547(0x3fd)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0x5e4268[_0x4f2547(0x3fd)](291.46,101.7,292.9,100.35,294.29,98.98),_0x5e4268['bezierCurveTo'](295.68,97.61,297.01,96.17,298.37,94.75),_0x5e4268['lineTo'](306.51,86.23),_0x5e4268[_0x4f2547(0x3fd)](309.21,83.35,312.03,80.59,314.93,77.93),_0x5e4268[_0x4f2547(0x3fd)](317.83,75.27,320.83,72.71,323.87,70.22),_0x5e4268['bezierCurveTo'](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0x5e4268[_0x4f2547(0x3fd)](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0x5e4268[_0x4f2547(0x3fd)](341.91,49.84,344.23,46.49,347.5,44.1),_0x5e4268[_0x4f2547(0x3fd)](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0x5e4268[_0x4f2547(0x3fd)](353.37,41.33,353.89,41.2,354.34,41.1),_0x5e4268[_0x4f2547(0x3fd)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0x5e4268[_0x4f2547(0x3fd)](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0x5e4268['bezierCurveTo'](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0x5e4268['lineTo'](363.02,46.07),_0x5e4268['bezierCurveTo'](364.36,47.52,365.68,48.98,366.95,50.49),_0x5e4268[_0x4f2547(0x3fd)](370.89,55.3,374.55,60.33,378.05,65.49),_0x5e4268[_0x4f2547(0x4ba)](378.05,65.49),_0x5e4268[_0x4f2547(0x3fd)](378.99,66.86,379.91,68.23,380.83,69.61),_0x5e4268['bezierCurveTo'](383.02,72.87,385.19,76.15,387.29,79.48),_0x5e4268['bezierCurveTo'](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0x5e4268[_0x4f2547(0x3fd)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0x5e4268[_0x4f2547(0x3fd)](398.34,104.67,399.22,108.5,400.29,112.28),_0x5e4268[_0x4f2547(0x3fd)](401.36,116.06,402.41,119.83,403.67,123.54),_0x5e4268[_0x4f2547(0x4ba)](407.58,134.66),_0x5e4268[_0x4f2547(0x3fd)](408.86,138.3,410.15,141.94,411.42,145.59),_0x5e4268[_0x4f2547(0x3fd)](412.69,149.24,414.06,153.14,415.34,156.93),_0x5e4268['lineTo'](417.23,162.52),_0x5e4268[_0x4f2547(0x4ba)](418.98,168.15),_0x5e4268[_0x4f2547(0x3fd)](420.12,171.91,421.23,175.7,422.1,179.55),_0x5e4268['lineTo'](427.1,202.6),_0x5e4268[_0x4f2547(0x4ba)](428.36,208.36),_0x5e4268[_0x4f2547(0x4ba)](428.98,211.24),_0x5e4268[_0x4f2547(0x3fd)](429.173333,212.22,429.333333,213.2,429.46,214.18),_0x5e4268[_0x4f2547(0x3fd)](0x1ae,218.11,430.15,222.05,430.4,225.96),_0x5e4268[_0x4f2547(0x3fd)](0x1af,233.79,431.51,241.64,431.62,249.52),_0x5e4268[_0x4f2547(0x1c3)]()),_0x5e4268[_0x4f2547(0x1c8)](),_0x5e4268[_0x4f2547(0x552)]=_0x25fc97[0x1],(_0x5e4268[_0x4f2547(0x39d)](),_0x5e4268[_0x4f2547(0x332)](285.75,360.45),_0x5e4268[_0x4f2547(0x4ba)](317.05,277.5),_0x5e4268[_0x4f2547(0x4ba)](329.05,225.84),_0x5e4268[_0x4f2547(0x4ba)](340.79,165.58),_0x5e4268['lineTo'](0x15b,124.66),_0x5e4268[_0x4f2547(0x4ba)](349.15,110.28),_0x5e4268[_0x4f2547(0x4ba)](352.38,88.17),_0x5e4268[_0x4f2547(0x4ba)](354.04,74.9),_0x5e4268[_0x4f2547(0x3fd)](354.04,74.9,340.19,93.66,0x142,121.85),_0x5e4268[_0x4f2547(0x4ba)](0x142,121.85),_0x5e4268[_0x4f2547(0x4ba)](318.94,116.08),_0x5e4268['lineTo'](315.07,108.52),_0x5e4268['lineTo'](313.88,105.61),_0x5e4268[_0x4f2547(0x3fd)](313.88,105.61,320.3,123.77,309.71,141.31),_0x5e4268[_0x4f2547(0x4ba)](309.71,141.31),_0x5e4268[_0x4f2547(0x3fd)](306.916667,145.83,304.09,150.496667,301.23,155.31),_0x5e4268[_0x4f2547(0x4ba)](301.23,155.31),_0x5e4268['lineTo'](297.4,0x95),_0x5e4268[_0x4f2547(0x4ba)](293.4,142.73),_0x5e4268['lineTo'](288.67,134.87),_0x5e4268[_0x4f2547(0x3fd)](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0x5e4268[_0x4f2547(0x4ba)](288.41,177.53),_0x5e4268[_0x4f2547(0x3fd)](286.65,180.676667,284.896667,183.86,283.15,187.08),_0x5e4268[_0x4f2547(0x4ba)](283.15,187.08),_0x5e4268[_0x4f2547(0x4ba)](279.22,182.53),_0x5e4268[_0x4f2547(0x4ba)](272.79,175.59),_0x5e4268[_0x4f2547(0x3fd)](275.19,178.45,281.64,188.49,273.09,206.31),_0x5e4268[_0x4f2547(0x4ba)](273.09,206.31),_0x5e4268['bezierCurveTo'](270.72,211.02,268.4,215.77,266.15,220.52),_0x5e4268[_0x4f2547(0x4ba)](266.15,220.52),_0x5e4268[_0x4f2547(0x4ba)](263.84,218.34),_0x5e4268['lineTo'](260.92,215.6),_0x5e4268['bezierCurveTo'](260.92,215.6,265.27,221.08,259.07,236.13),_0x5e4268['lineTo'](259.07,236.13),_0x5e4268[_0x4f2547(0x3fd)](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0x5e4268[_0x4f2547(0x4ba)](252.07,253.13),_0x5e4268[_0x4f2547(0x4ba)](247.51,249.29),_0x5e4268[_0x4f2547(0x4ba)](244.92,0xf7),_0x5e4268[_0x4f2547(0x4ba)](243.76,246.13),_0x5e4268['bezierCurveTo'](246.52,248.92,250.54,256.13,244.9,272.77),_0x5e4268[_0x4f2547(0x4ba)](244.9,272.77),_0x5e4268[_0x4f2547(0x3fd)](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0x5e4268[_0x4f2547(0x4ba)](241.63,282.18),_0x5e4268['lineTo'](237.21,0x114),_0x5e4268['lineTo'](233.81,271.77),_0x5e4268['lineTo'](230.81,267.86),_0x5e4268['bezierCurveTo'](233.81,272.45,239.7,285.52,232.29,310.91),_0x5e4268[_0x4f2547(0x4ba)](232.29,310.91),_0x5e4268[_0x4f2547(0x3fd)](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0x5e4268[_0x4f2547(0x4ba)](230.29,317.56),_0x5e4268[_0x4f2547(0x4ba)](226.67,310.46),_0x5e4268[_0x4f2547(0x4ba)](223.88,304.91),_0x5e4268[_0x4f2547(0x4ba)](221.49,299.78),_0x5e4268[_0x4f2547(0x3fd)](224.38,307.42,228.04,322.78,222.56,344.43),_0x5e4268['lineTo'](222.56,344.43),_0x5e4268[_0x4f2547(0x3fd)](222.08,346.16,221.62,347.89,221.15,349.62),_0x5e4268['lineTo'](221.15,349.62),_0x5e4268[_0x4f2547(0x4ba)](219.97,346.31),_0x5e4268['lineTo'](215.78,0x150),_0x5e4268[_0x4f2547(0x4ba)](215.38,334.89),_0x5e4268[_0x4f2547(0x3fd)](217.23,341.26,219.38,353.39,216.06,369.47),_0x5e4268[_0x4f2547(0x3fd)](215.62,371.28,215.19,373.08,214.76,374.89),_0x5e4268[_0x4f2547(0x4ba)](214.7,375.14),_0x5e4268[_0x4f2547(0x4ba)](214.7,375.14),_0x5e4268[_0x4f2547(0x3fd)](213.32,381.06,212.01,386.96,210.77,392.84),_0x5e4268['lineTo'](210.77,392.84),_0x5e4268[_0x4f2547(0x4ba)](209.36,389.71),_0x5e4268['lineTo'](0xd0,386.2),_0x5e4268[_0x4f2547(0x4ba)](207.12,383.09),_0x5e4268['lineTo'](206.37,378.74),_0x5e4268[_0x4f2547(0x3fd)](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0x5e4268[_0x4f2547(0x3fd)](205.89,418.61,205.43,421.37,205.01,424.12),_0x5e4268['bezierCurveTo'](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0x5e4268[_0x4f2547(0x4ba)](205.01,424.27),_0x5e4268['bezierCurveTo'](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0x5e4268[_0x4f2547(0x3fd)](204.14,440.03,204.96,443.36,205.81,446.68),_0x5e4268[_0x4f2547(0x3fd)](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0x5e4268[_0x4f2547(0x3fd)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0x5e4268[_0x4f2547(0x3fd)](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0x5e4268[_0x4f2547(0x3fd)](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0x5e4268[_0x4f2547(0x3fd)](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0x5e4268[_0x4f2547(0x3fd)](209.18,506.51,210.06,508.28,210.95,510.04),_0x5e4268['bezierCurveTo'](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0x5e4268['lineTo'](213.41,515.32),_0x5e4268[_0x4f2547(0x4ba)](213.48,515.49),_0x5e4268['lineTo'](213.58,515.61),_0x5e4268[_0x4f2547(0x4ba)](214.99,517.23),_0x5e4268[_0x4f2547(0x3fd)](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0x5e4268['bezierCurveTo'](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0x5e4268['lineTo'](220.54,521.08),_0x5e4268['bezierCurveTo'](234.62,498.82,250.27,460.36,250.27,460.36)),_0x5e4268[_0x4f2547(0x1c3)](),_0x5e4268[_0x4f2547(0x552)]=_0x22a315[0x2],(_0x5e4268[_0x4f2547(0x39d)](),_0x5e4268['moveTo'](430.49,225.94),_0x5e4268[_0x4f2547(0x3fd)](430.24,222.03,430.09,218.09,429.55,214.16),_0x5e4268['bezierCurveTo'](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x5e4268[_0x4f2547(0x4ba)](428.45,208.34),_0x5e4268[_0x4f2547(0x4ba)](427.19,202.58),_0x5e4268[_0x4f2547(0x4ba)](422.19,179.53),_0x5e4268[_0x4f2547(0x3fd)](421.32,175.68,420.19,171.89,419.07,168.13),_0x5e4268['lineTo'](417.32,162.5),_0x5e4268['lineTo'](415.43,156.91),_0x5e4268[_0x4f2547(0x3fd)](412.91,149.45,410.28,142.05,407.67,134.64),_0x5e4268[_0x4f2547(0x4ba)](403.76,123.52),_0x5e4268[_0x4f2547(0x3fd)](402.5,119.81,401.42,116.04,400.38,112.26),_0x5e4268[_0x4f2547(0x3fd)](399.34,108.48,398.43,104.65,397.31,100.87),_0x5e4268['bezierCurveTo'](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0x5e4268[_0x4f2547(0x3fd)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0x5e4268[_0x4f2547(0x3fd)](385.28,76.13,383.11,72.85,380.92,69.59),_0x5e4268['bezierCurveTo'](0x17c,68.21,379.08,66.84,378.14,65.47),_0x5e4268[_0x4f2547(0x3fd)](387.8,80.8,395.04,109.72,396.47,149.27),_0x5e4268[_0x4f2547(0x4ba)](376.1,161.86),_0x5e4268[_0x4f2547(0x3fd)](379.85,159.59,396.59,0x96,396.69,160.27),_0x5e4268[_0x4f2547(0x3fd)](396.75,167.25,396.633333,174.516667,396.34,182.07),_0x5e4268[_0x4f2547(0x4ba)](370.5,194.47),_0x5e4268[_0x4f2547(0x3fd)](379.58,190.47,396.45,184.53,395.5,196.63),_0x5e4268[_0x4f2547(0x3fd)](395.39,198.23,395.27,199.84,395.15,201.46),_0x5e4268['lineTo'](389.25,207.26),_0x5e4268[_0x4f2547(0x4ba)](383.25,212.74),_0x5e4268[_0x4f2547(0x3fd)](383.25,212.74,380.25,215.38,375.87,218.98),_0x5e4268['bezierCurveTo'](390.22,209.39,393.47,215.75,392.87,224.41),_0x5e4268[_0x4f2547(0x3fd)](392.15,230.37,391.323333,236.463333,390.39,242.69),_0x5e4268[_0x4f2547(0x4ba)](374.29,253.84),_0x5e4268[_0x4f2547(0x3fd)](381.29,249.93,389.62,247.84,387.03,262.84),_0x5e4268['bezierCurveTo'](386.036667,268.253333,384.96,273.74,383.8,279.3),_0x5e4268[_0x4f2547(0x4ba)](378.4,282.68),_0x5e4268[_0x4f2547(0x4ba)](368.4,288.48),_0x5e4268[_0x4f2547(0x4ba)](351.28,0x12a),_0x5e4268[_0x4f2547(0x3fd)](351.28,0x12a,382.89,280.72,379.45,298.88),_0x5e4268['bezierCurveTo'](378.51,302.88,377.51,306.896667,376.45,310.93),_0x5e4268[_0x4f2547(0x4ba)](364.43,0x13d),_0x5e4268[_0x4f2547(0x4ba)](354.48,321.41),_0x5e4268['bezierCurveTo'](363.55,317.83,375.77,314.48,373.1,323.71),_0x5e4268[_0x4f2547(0x3fd)](373.01,324.03,372.93,324.35,372.84,324.71),_0x5e4268[_0x4f2547(0x3fd)](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0x5e4268[_0x4f2547(0x4ba)](358.52,344.38),_0x5e4268[_0x4f2547(0x4ba)](353.36,347.17),_0x5e4268['lineTo'](341.49,352.49),_0x5e4268[_0x4f2547(0x3fd)](351.93,348.35,366.49,344.44,361.87,357.42),_0x5e4268[_0x4f2547(0x3fd)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0x5e4268[_0x4f2547(0x3fd)](349.53,378.78,331.04,388.35,313.91,392.41),_0x5e4268[_0x4f2547(0x3fd)](326.26,390.74,350.91,379.56,344.78,394.04),_0x5e4268[_0x4f2547(0x3fd)](339.71,403.42,334.34,412.3,328.78,420.68),_0x5e4268[_0x4f2547(0x3fd)](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0x5e4268[_0x4f2547(0x3fd)](315.21,425.12,326.79,424.25,317.73,436.57),_0x5e4268[_0x4f2547(0x3fd)](311.08,445.57,304.32,453.89,297.65,461.51),_0x5e4268[_0x4f2547(0x3fd)](297.56,461.51,279.87,463.81,266.65,461.17),_0x5e4268[_0x4f2547(0x3fd)](280.85,464.3,296.44,463.02,284.31,476.04),_0x5e4268[_0x4f2547(0x3fd)](280.976667,479.5,277.703333,482.77,274.49,485.85),_0x5e4268[_0x4f2547(0x3fd)](274.43,485.85,261.73,486.11,251.87,484.55),_0x5e4268[_0x4f2547(0x3fd)](262.77,486.37,273.54,486.5,263.2,496.32),_0x5e4268[_0x4f2547(0x3fd)](258.69,500.32,254.47,503.9,250.65,507.01),_0x5e4268['bezierCurveTo'](250.55,507.01,238.65,508.01,233.16,506.79),_0x5e4268['bezierCurveTo'](239.07,508.66,243.85,511.37,237.87,516.9),_0x5e4268[_0x4f2547(0x3fd)](232.71,520.68,229.59,522.68,229.32,522.9),_0x5e4268[_0x4f2547(0x3fd)](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0x5e4268[_0x4f2547(0x4ba)](234.9,522.52),_0x5e4268[_0x4f2547(0x4ba)](240.76,522.29),_0x5e4268[_0x4f2547(0x3fd)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0x5e4268[_0x4f2547(0x3fd)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0x5e4268[_0x4f2547(0x3fd)](267.75,517.47,271.49,516.39,275.23,515.19),_0x5e4268[_0x4f2547(0x3fd)](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0x5e4268[_0x4f2547(0x3fd)](289.9,509.53,293.43,507.82,296.92,506.09),_0x5e4268[_0x4f2547(0x4ba)](302.15,503.45),_0x5e4268[_0x4f2547(0x3fd)](303.88,502.57,305.65,501.72,307.38,500.76),_0x5e4268[_0x4f2547(0x3fd)](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0x5e4268[_0x4f2547(0x3fd)](318.89,493.14,320.42,491.89,321.9,490.6),_0x5e4268[_0x4f2547(0x4ba)](326.28,486.7),_0x5e4268['lineTo'](0x14f,478.88),_0x5e4268[_0x4f2547(0x4ba)](343.72,471.06),_0x5e4268[_0x4f2547(0x3fd)](346.63,468.44,349.56,465.87,352.4,463.18),_0x5e4268[_0x4f2547(0x3fd)](358.11,457.83,363.63,452.27,0x171,446.59),_0x5e4268[_0x4f2547(0x3fd)](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0x5e4268[_0x4f2547(0x3fd)](386.71,425.67,388.93,422.42,390.97,419.07),_0x5e4268[_0x4f2547(0x3fd)](393.01,415.72,394.97,412.36,396.89,408.92),_0x5e4268[_0x4f2547(0x3fd)](398.81,405.48,400.57,402.02,402.17,398.4),_0x5e4268[_0x4f2547(0x3fd)](403.77,394.78,405.03,391.08,406.27,387.4),_0x5e4268[_0x4f2547(0x3fd)](408.75,380.01,411.27,372.62,413.62,365.15),_0x5e4268[_0x4f2547(0x3fd)](414.77,361.41,415.89,357.67,416.86,353.86),_0x5e4268['bezierCurveTo'](417.83,350.05,418.64,346.24,419.41,342.4),_0x5e4268[_0x4f2547(0x3fd)](420.18,338.56,420.96,334.75,421.58,330.87),_0x5e4268[_0x4f2547(0x3fd)](422.2,326.99,422.68,323.13,423.28,319.29),_0x5e4268[_0x4f2547(0x3fd)](423.88,315.45,424.7,311.61,425.39,307.78),_0x5e4268['bezierCurveTo'](426.08,303.95,426.9,300.12,427.39,296.23),_0x5e4268[_0x4f2547(0x3fd)](427.88,292.34,428.44,288.51,429.12,284.66),_0x5e4268[_0x4f2547(0x3fd)](429.8,280.81,430.25,276.91,430.64,273.02),_0x5e4268[_0x4f2547(0x3fd)](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0x5e4268[_0x4f2547(0x3fd)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x5e4268[_0x4f2547(0x1c3)](),_0x5e4268[_0x4f2547(0x552)]=_0x21fbae[0x3],(_0x5e4268[_0x4f2547(0x39d)](),_0x5e4268[_0x4f2547(0x332)](340.27,176.61),_0x5e4268['lineTo'](348.27,122.21),_0x5e4268[_0x4f2547(0x4ba)](0x160,0x56),_0x5e4268[_0x4f2547(0x3fd)](0x160,0x56,349.18,94.32,344.36,108.7),_0x5e4268[_0x4f2547(0x4ba)](341.04,104.91),_0x5e4268[_0x4f2547(0x3fd)](341.04,104.91,344.15,109.29,341.39,117.57),_0x5e4268[_0x4f2547(0x4ba)](341.39,117.57),_0x5e4268['bezierCurveTo'](339.01,124.71,336.28,132.9,333.28,141.95),_0x5e4268['lineTo'](333.28,141.95),_0x5e4268[_0x4f2547(0x4ba)](328.13,133.05),_0x5e4268[_0x4f2547(0x4ba)](325.91,129.17),_0x5e4268[_0x4f2547(0x3fd)](325.91,129.17,332.53,142.95,325.57,165.28),_0x5e4268['lineTo'](325.57,165.28),_0x5e4268['bezierCurveTo'](323.503333,171.573333,321.35,178.12,319.11,184.92),_0x5e4268[_0x4f2547(0x4ba)](319.11,184.92),_0x5e4268[_0x4f2547(0x4ba)](0x13b,177.71),_0x5e4268[_0x4f2547(0x4ba)](308.25,166.82),_0x5e4268[_0x4f2547(0x3fd)](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0x5e4268['lineTo'](311.25,208.82),_0x5e4268['bezierCurveTo'](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0x5e4268[_0x4f2547(0x4ba)](307.78,219.49),_0x5e4268[_0x4f2547(0x4ba)](300.16,0xd0),_0x5e4268[_0x4f2547(0x4ba)](295.37,201.93),_0x5e4268[_0x4f2547(0x3fd)](295.37,201.93,308.11,218.47,299.78,244.52),_0x5e4268[_0x4f2547(0x3fd)](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0x5e4268[_0x4f2547(0x4ba)](296.37,255.16),_0x5e4268[_0x4f2547(0x4ba)](290.64,0xf7),_0x5e4268[_0x4f2547(0x4ba)](280.58,236.2),_0x5e4268['bezierCurveTo'](281.58,237.26,296.58,254.13,287.96,281.57),_0x5e4268[_0x4f2547(0x4ba)](287.96,281.57),_0x5e4268[_0x4f2547(0x3fd)](287.333333,283.53,286.71,285.496667,286.09,287.47),_0x5e4268[_0x4f2547(0x4ba)](286.09,287.47),_0x5e4268[_0x4f2547(0x4ba)](0x118,279.81),_0x5e4268[_0x4f2547(0x4ba)](270.72,270.71),_0x5e4268['bezierCurveTo'](270.72,270.71,286.28,286.4,277.78,313.81),_0x5e4268[_0x4f2547(0x4ba)](277.78,313.81),_0x5e4268[_0x4f2547(0x3fd)](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0x5e4268[_0x4f2547(0x4ba)](272.78,329.81),_0x5e4268[_0x4f2547(0x4ba)](265.2,315.89),_0x5e4268[_0x4f2547(0x4ba)](259.75,307.61),_0x5e4268[_0x4f2547(0x3fd)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0x5e4268[_0x4f2547(0x4ba)](264.63,356.41),_0x5e4268[_0x4f2547(0x4ba)](264.63,356.41),_0x5e4268[_0x4f2547(0x4ba)](264.63,356.41),_0x5e4268[_0x4f2547(0x3fd)](263.683333,359.516667,262.74,362.62,261.8,365.72),_0x5e4268[_0x4f2547(0x4ba)](261.8,365.72),_0x5e4268[_0x4f2547(0x4ba)](255.48,357.92),_0x5e4268[_0x4f2547(0x4ba)](248.69,349.01),_0x5e4268[_0x4f2547(0x3fd)](248.69,349.01,261.56,365.87,253.9,392.1),_0x5e4268[_0x4f2547(0x4ba)](253.9,392.1),_0x5e4268[_0x4f2547(0x3fd)](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0x5e4268[_0x4f2547(0x4ba)](249.9,405.76),_0x5e4268[_0x4f2547(0x4ba)](243.52,395.82),_0x5e4268['lineTo'](238.92,387.92),_0x5e4268[_0x4f2547(0x3fd)](238.92,387.92,249.49,405.92,241.92,433.65),_0x5e4268[_0x4f2547(0x4ba)](241.92,433.65),_0x5e4268[_0x4f2547(0x4ba)](239.82,441.18),_0x5e4268['lineTo'](239.82,441.18),_0x5e4268[_0x4f2547(0x4ba)](0xe9,429.68),_0x5e4268[_0x4f2547(0x3fd)](0xe9,429.68,239.72,442.12,234.11,462.31),_0x5e4268[_0x4f2547(0x4ba)](234.11,462.31),_0x5e4268[_0x4f2547(0x3fd)](233.17,465.85,232.27,469.303333,231.41,472.67),_0x5e4268[_0x4f2547(0x4ba)](227.3,467.28),_0x5e4268[_0x4f2547(0x3fd)](227.3,467.28,230.97,473.84,228.38,484.69),_0x5e4268[_0x4f2547(0x4ba)](228.38,484.69),_0x5e4268['bezierCurveTo'](225.19,497.69,222.71,508.99,221.15,518.02),_0x5e4268['bezierCurveTo'](0xf0,483.95,262.65,419.16,262.65,419.16),_0x5e4268[_0x4f2547(0x4ba)](306.26,315.71),_0x5e4268['lineTo'](323.48,243.71)),_0x5e4268[_0x4f2547(0x1c3)](),_0x5e4268['fillStyle']=_0x3a3f05[0x4],(_0x5e4268[_0x4f2547(0x39d)](),_0x5e4268[_0x4f2547(0x332)](430.49,225.94),_0x5e4268[_0x4f2547(0x3fd)](430.24,222.03,430.09,218.09,429.55,214.16),_0x5e4268[_0x4f2547(0x3fd)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x5e4268[_0x4f2547(0x4ba)](428.45,208.34),_0x5e4268[_0x4f2547(0x4ba)](427.19,202.58),_0x5e4268[_0x4f2547(0x4ba)](422.19,179.53),_0x5e4268[_0x4f2547(0x3fd)](421.32,175.68,420.19,171.89,419.07,168.13),_0x5e4268[_0x4f2547(0x4ba)](417.32,162.5),_0x5e4268[_0x4f2547(0x4ba)](415.43,156.91),_0x5e4268[_0x4f2547(0x3fd)](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0x5e4268[_0x4f2547(0x3fd)](412.03,148.49,448.2,358.03,321.91,490.57),_0x5e4268[_0x4f2547(0x4ba)](326.29,486.67),_0x5e4268[_0x4f2547(0x4ba)](335.01,478.85),_0x5e4268[_0x4f2547(0x4ba)](343.73,471.03),_0x5e4268['bezierCurveTo'](346.64,468.41,349.57,465.84,352.41,463.15),_0x5e4268['bezierCurveTo'](358.12,457.8,363.64,452.24,369.01,446.56),_0x5e4268[_0x4f2547(0x3fd)](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0x5e4268[_0x4f2547(0x3fd)](386.72,425.64,388.94,422.39,390.98,419.04),_0x5e4268[_0x4f2547(0x3fd)](393.02,415.69,394.98,412.33,396.9,408.89),_0x5e4268[_0x4f2547(0x3fd)](398.82,405.45,400.58,401.99,402.18,398.37),_0x5e4268['bezierCurveTo'](403.78,394.75,405.04,391.05,406.28,387.37),_0x5e4268[_0x4f2547(0x3fd)](408.76,379.98,411.28,372.59,413.63,365.12),_0x5e4268['bezierCurveTo'](414.78,361.38,415.9,357.64,416.87,353.83),_0x5e4268[_0x4f2547(0x3fd)](417.84,350.02,418.65,346.21,419.42,342.37),_0x5e4268['bezierCurveTo'](420.19,338.53,420.97,334.72,421.59,330.84),_0x5e4268[_0x4f2547(0x3fd)](422.21,326.96,422.69,323.1,423.29,319.26),_0x5e4268[_0x4f2547(0x3fd)](423.89,315.42,424.71,311.58,425.4,307.75),_0x5e4268[_0x4f2547(0x3fd)](426.09,303.92,426.91,300.09,427.4,296.2),_0x5e4268[_0x4f2547(0x3fd)](427.89,292.31,428.45,288.48,429.13,284.63),_0x5e4268[_0x4f2547(0x3fd)](429.81,280.78,430.26,276.88,430.65,272.99),_0x5e4268['bezierCurveTo'](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0x5e4268[_0x4f2547(0x3fd)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x5e4268[_0x4f2547(0x1c3)](),_0x5e4268[_0x4f2547(0x552)]=_0x294549[0x5],_0x5e4268[_0x4f2547(0x423)]=_0x1ca96b[0x5],_0x5e4268[_0x4f2547(0x32b)]=0.5,(_0x5e4268['beginPath'](),_0x5e4268[_0x4f2547(0x332)](299.66,335.53),_0x5e4268[_0x4f2547(0x3fd)](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0x5e4268['bezierCurveTo'](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0x5e4268[_0x4f2547(0x3fd)](362.786667,318.47,367.35,316.243333,371.81,313.85),_0x5e4268[_0x4f2547(0x3fd)](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0x5e4268[_0x4f2547(0x3fd)](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0x5e4268[_0x4f2547(0x3fd)](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0x5e4268[_0x4f2547(0x3fd)](380.33,308.296667,375.93,310.79,371.43,313.11),_0x5e4268[_0x4f2547(0x3fd)](366.93,315.43,362.353333,317.57,357.7,319.53),_0x5e4268[_0x4f2547(0x3fd)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0x5e4268[_0x4f2547(0x3fd)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0x5e4268[_0x4f2547(0x3fd)](301.51,330.46,302.62,327.46,303.7,324.4),_0x5e4268[_0x4f2547(0x3fd)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0x5e4268[_0x4f2547(0x4ba)](314.12,311.35),_0x5e4268[_0x4f2547(0x4ba)](317.4,310.58),_0x5e4268[_0x4f2547(0x4ba)](320.63,309.58),_0x5e4268[_0x4f2547(0x3fd)](322.79,308.94,324.95,308.32,327.09,307.66),_0x5e4268[_0x4f2547(0x4ba)](333.43,305.41),_0x5e4268['bezierCurveTo'](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0x5e4268[_0x4f2547(0x3fd)](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0x5e4268[_0x4f2547(0x3fd)](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0x5e4268[_0x4f2547(0x3fd)](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0x5e4268[_0x4f2547(0x3fd)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0x5e4268[_0x4f2547(0x3fd)](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0x5e4268[_0x4f2547(0x4ba)](326.59,306.16),_0x5e4268[_0x4f2547(0x3fd)](324.45,306.78,322.3,307.34,320.16,307.94),_0x5e4268[_0x4f2547(0x4ba)](316.95,308.82),_0x5e4268[_0x4f2547(0x4ba)](313.69,309.52),_0x5e4268[_0x4f2547(0x4ba)](308.57,310.6),_0x5e4268['lineTo'](309.36,308.35),_0x5e4268['lineTo'](0x138,300.27),_0x5e4268[_0x4f2547(0x4ba)](313.32,296.22),_0x5e4268[_0x4f2547(0x3fd)](313.77,294.88,314.21,293.53,314.58,292.16),_0x5e4268['bezierCurveTo'](315.35,289.54,316.09,286.91,316.83,284.28),_0x5e4268['bezierCurveTo'](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0x5e4268[_0x4f2547(0x4ba)](349.3,270.03),_0x5e4268[_0x4f2547(0x4ba)](355.47,266.47),_0x5e4268[_0x4f2547(0x3fd)](357.55,265.31,359.54,264.01,361.57,262.77),_0x5e4268[_0x4f2547(0x3fd)](363.6,261.53,365.57,260.29,367.57,258.97),_0x5e4268[_0x4f2547(0x3fd)](375.57,253.84,383.32,248.36,390.96,242.73),_0x5e4268[_0x4f2547(0x3fd)](398.6,237.1,406.08,231.26,413.35,225.16),_0x5e4268[_0x4f2547(0x3fd)](405.98,231.16,398.35,236.81,390.66,242.32),_0x5e4268[_0x4f2547(0x3fd)](382.97,247.83,375.09,253.15,0x16f,258.13),_0x5e4268[_0x4f2547(0x3fd)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0x5e4268['bezierCurveTo'](358.86,263.02,356.93,264.26,354.79,265.38),_0x5e4268['lineTo'](348.58,268.83),_0x5e4268[_0x4f2547(0x4ba)](342.29,0x110),_0x5e4268[_0x4f2547(0x3fd)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0x5e4268[_0x4f2547(0x4ba)](319.2,275.76),_0x5e4268[_0x4f2547(0x3fd)](321.9,266.06,324.34,256.29,326.62,246.49),_0x5e4268[_0x4f2547(0x3fd)](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0x5e4268[_0x4f2547(0x3fd)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0x5e4268[_0x4f2547(0x3fd)](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0x5e4268[_0x4f2547(0x3fd)](368.9,224.98,374.29,220.75,379.46,216.3),_0x5e4268[_0x4f2547(0x3fd)](384.63,211.85,389.65,207.18,394.36,202.24),_0x5e4268['bezierCurveTo'](389.53,207.06,384.41,211.59,379.14,215.92),_0x5e4268['bezierCurveTo'](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0x5e4268[_0x4f2547(0x3fd)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0x5e4268[_0x4f2547(0x3fd)](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0x5e4268[_0x4f2547(0x3fd)](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0x5e4268['bezierCurveTo'](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0x5e4268[_0x4f2547(0x4ba)](393.36,182.9),_0x5e4268[_0x4f2547(0x4ba)](334.11,211.14),_0x5e4268[_0x4f2547(0x4ba)](334.44,209.48),_0x5e4268['bezierCurveTo'](336.66,197.92,338.73,186.326667,340.65,174.7),_0x5e4268[_0x4f2547(0x3fd)](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0x5e4268[_0x4f2547(0x3fd)](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0x5e4268[_0x4f2547(0x3fd)](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0x5e4268[_0x4f2547(0x3fd)](374.16,163.25,378.59,160.67,0x17f,157.94),_0x5e4268[_0x4f2547(0x3fd)](387.41,155.21,391.69,152.4,395.9,149.44),_0x5e4268['bezierCurveTo'](391.62,152.31,387.25,155.03,382.82,157.65),_0x5e4268[_0x4f2547(0x3fd)](378.39,160.27,373.87,162.75,369.28,165.05),_0x5e4268[_0x4f2547(0x3fd)](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0x5e4268['bezierCurveTo'](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0x5e4268[_0x4f2547(0x3fd)](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0x5e4268[_0x4f2547(0x3fd)](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0x5e4268[_0x4f2547(0x3fd)](345.78,141.83,345.85,141.29,345.93,140.74),_0x5e4268['bezierCurveTo'](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0x5e4268[_0x4f2547(0x3fd)](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0x5e4268[_0x4f2547(0x3fd)](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0x5e4268[_0x4f2547(0x3fd)](368.95,122.67,371.76,119.51,374.48,116.28),_0x5e4268[_0x4f2547(0x3fd)](377.2,113.05,379.86,109.75,382.4,106.38),_0x5e4268[_0x4f2547(0x3fd)](379.79,109.7,377.07,112.93,374.29,116.11),_0x5e4268['bezierCurveTo'](371.51,119.29,368.63,122.38,365.65,125.37),_0x5e4268['bezierCurveTo'](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0x5e4268[_0x4f2547(0x3fd)](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0x5e4268['bezierCurveTo'](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0x5e4268[_0x4f2547(0x3fd)](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0x5e4268[_0x4f2547(0x3fd)](350.57,106.84,350.78,105.04,0x15f,103.24),_0x5e4268['bezierCurveTo'](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0x5e4268[_0x4f2547(0x3fd)](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0x5e4268[_0x4f2547(0x3fd)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0x5e4268[_0x4f2547(0x3fd)](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0x5e4268[_0x4f2547(0x3fd)](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0x5e4268[_0x4f2547(0x3fd)](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0x5e4268[_0x4f2547(0x3fd)](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0x5e4268[_0x4f2547(0x3fd)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0x5e4268[_0x4f2547(0x3fd)](351.48,99.13,351.94,95.48,352.36,91.78),_0x5e4268[_0x4f2547(0x3fd)](352.91,87.02,353.45,82.26,353.84,77.48),_0x5e4268[_0x4f2547(0x3fd)](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0x5e4268[_0x4f2547(0x4ba)](354.06,74.86),_0x5e4268[_0x4f2547(0x3fd)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0x5e4268[_0x4f2547(0x4ba)](352.83,83.08),_0x5e4268[_0x4f2547(0x4ba)](351.66,91.23),_0x5e4268[_0x4f2547(0x3fd)](350.86,96.67,350.036667,102.1,349.19,107.52),_0x5e4268['bezierCurveTo'](348.96,0x6d,348.71,110.52,348.47,111.95),_0x5e4268[_0x4f2547(0x3fd)](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0x5e4268['bezierCurveTo'](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0x5e4268[_0x4f2547(0x3fd)](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0x5e4268[_0x4f2547(0x3fd)](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0x5e4268['bezierCurveTo'](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0x5e4268[_0x4f2547(0x3fd)](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0x5e4268[_0x4f2547(0x3fd)](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0x5e4268[_0x4f2547(0x3fd)](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0x5e4268[_0x4f2547(0x3fd)](346.85,121.876667,345.33,130.953333,343.75,140.02),_0x5e4268['bezierCurveTo'](342.99,144.34,342.21,148.64,341.43,152.95),_0x5e4268[_0x4f2547(0x3fd)](338.9,149.65,336.59,146.14,334.35,142.6),_0x5e4268[_0x4f2547(0x3fd)](331.84,138.6,329.43,134.6,327.08,130.48),_0x5e4268[_0x4f2547(0x3fd)](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0x5e4268['bezierCurveTo'](317.68,114.12,321.98,122.51,326.52,130.8),_0x5e4268[_0x4f2547(0x3fd)](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0x5e4268[_0x4f2547(0x3fd)](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0x5e4268['bezierCurveTo'](338.08,171.43,334.79,188.09,331.14,204.71),_0x5e4268[_0x4f2547(0x4ba)](330.93,205.64),_0x5e4268[_0x4f2547(0x3fd)](330.54,204.77,330.14,203.92,329.7,203.09),_0x5e4268[_0x4f2547(0x4ba)](328.46,200.64),_0x5e4268[_0x4f2547(0x4ba)](327.15,198.24),_0x5e4268[_0x4f2547(0x3fd)](326.29,196.63,325.4,195.04,324.5,193.46),_0x5e4268[_0x4f2547(0x3fd)](323.6,191.88,322.71,190.29,321.78,188.72),_0x5e4268[_0x4f2547(0x3fd)](318.13,182.42,314.34,176.21,310.55,0xaa),_0x5e4268[_0x4f2547(0x3fd)](302.93,157.6,295.18,145.29,287.3,133.07),_0x5e4268['bezierCurveTo'](294.96,145.43,302.5,157.866667,309.92,170.38),_0x5e4268[_0x4f2547(0x3fd)](313.61,176.65,317.28,182.92,320.82,189.27),_0x5e4268[_0x4f2547(0x3fd)](321.72,190.85,322.59,192.44,323.46,194.04),_0x5e4268[_0x4f2547(0x3fd)](324.33,195.64,325.19,197.23,326.02,198.84),_0x5e4268['lineTo'](327.28,201.25),_0x5e4268[_0x4f2547(0x4ba)](328.46,203.69),_0x5e4268[_0x4f2547(0x3fd)](329.2,205.12,329.79,206.59,330.4,208.05),_0x5e4268[_0x4f2547(0x3fd)](328.27,217.66,326.14,227.26,323.83,236.82),_0x5e4268['bezierCurveTo'](323.31,0xef,322.77,241.17,322.23,243.35),_0x5e4268['bezierCurveTo'](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0x5e4268['bezierCurveTo'](309.17,220.21,304.89,214.22,300.51,208.33),_0x5e4268[_0x4f2547(0x3fd)](296.13,202.44,291.51,196.75,286.74,191.14),_0x5e4268['bezierCurveTo'](281.97,185.53,277.13,180.05,272.07,174.74),_0x5e4268[_0x4f2547(0x3fd)](277.01,180.16,281.74,185.74,286.36,191.46),_0x5e4268[_0x4f2547(0x3fd)](290.98,197.18,295.45,202.95,299.7,208.92),_0x5e4268[_0x4f2547(0x3fd)](303.95,214.89,308.06,220.92,311.76,227.24),_0x5e4268[_0x4f2547(0x3fd)](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0x5e4268[_0x4f2547(0x3fd)](319.56,253.903333,317.56,261.293333,315.44,268.66),_0x5e4268['lineTo'](311.15,283.19),_0x5e4268[_0x4f2547(0x3fd)](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0x5e4268[_0x4f2547(0x3fd)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0x5e4268[_0x4f2547(0x3fd)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0x5e4268['bezierCurveTo'](286.51,241.91,281.65,236.37,276.59,231.03),_0x5e4268[_0x4f2547(0x3fd)](271.53,225.69,266.29,220.53,260.8,215.63),_0x5e4268[_0x4f2547(0x3fd)](266.18,220.63,271.29,225.93,276.22,231.37),_0x5e4268[_0x4f2547(0x3fd)](281.15,236.81,285.87,242.45,290.27,248.31),_0x5e4268[_0x4f2547(0x3fd)](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0x5e4268[_0x4f2547(0x3fd)](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0x5e4268[_0x4f2547(0x3fd)](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0x5e4268[_0x4f2547(0x4ba)](308.34,292.3),_0x5e4268['lineTo'](305.78,0x12c),_0x5e4268[_0x4f2547(0x4ba)](303.08,307.79),_0x5e4268[_0x4f2547(0x4ba)](302.38,309.67),_0x5e4268[_0x4f2547(0x3fd)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0x5e4268[_0x4f2547(0x3fd)](286.07,286.23,281.01,280.49,275.78,274.97),_0x5e4268['bezierCurveTo'](270.55,269.45,264.98,264.22,259.31,259.13),_0x5e4268[_0x4f2547(0x3fd)](253.64,254.04,247.81,249.13,241.77,244.52),_0x5e4268[_0x4f2547(0x3fd)](247.71,249.27,253.41,254.32,258.97,259.52),_0x5e4268[_0x4f2547(0x3fd)](264.53,264.72,269.9,270.1,275.05,275.68),_0x5e4268[_0x4f2547(0x3fd)](280.2,281.26,285.05,287.09,289.61,293.16),_0x5e4268[_0x4f2547(0x3fd)](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0x5e4268[_0x4f2547(0x4ba)](300.23,315.52),_0x5e4268[_0x4f2547(0x4ba)](294.37,330.91),_0x5e4268[_0x4f2547(0x3fd)](291.99,337.05,289.593333,343.18,287.18,349.3),_0x5e4268['bezierCurveTo'](283.87,347.64,281.89,344.1,279.84,340.74),_0x5e4268['bezierCurveTo'](277.68,337.04,275.63,333.25,273.58,329.46),_0x5e4268[_0x4f2547(0x4ba)](270.51,323.78),_0x5e4268[_0x4f2547(0x3fd)](269.42,321.9,268.41,319.98,267.26,318.16),_0x5e4268[_0x4f2547(0x4ba)](265.57,315.39),_0x5e4268[_0x4f2547(0x4ba)](263.81,312.67),_0x5e4268[_0x4f2547(0x3fd)](262.66,310.84,261.45,309.06,260.24,307.27),_0x5e4268['bezierCurveTo'](255.4,300.13,250.33,293.15,245.14,286.27),_0x5e4268[_0x4f2547(0x3fd)](239.95,279.39,234.66,272.58,229.25,265.87),_0x5e4268[_0x4f2547(0x3fd)](234.53,272.683333,239.693333,279.58,244.74,286.56),_0x5e4268[_0x4f2547(0x3fd)](249.79,293.56,254.74,300.56,259.41,307.82),_0x5e4268['bezierCurveTo'](260.58,309.63,261.75,311.43,262.86,313.27),_0x5e4268[_0x4f2547(0x4ba)](264.55,316.01),_0x5e4268[_0x4f2547(0x4ba)](266.18,318.79),_0x5e4268['bezierCurveTo'](267.29,320.63,268.25,322.55,269.29,324.42),_0x5e4268['lineTo'](272.29,330.16),_0x5e4268[_0x4f2547(0x3fd)](274.29,333.99,276.29,337.82,278.36,341.61),_0x5e4268[_0x4f2547(0x3fd)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0x5e4268[_0x4f2547(0x3fd)](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0x5e4268[_0x4f2547(0x3fd)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0x5e4268[_0x4f2547(0x3fd)](282.943333,360.18,279.36,369.18,275.74,378.16),_0x5e4268[_0x4f2547(0x3fd)](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0x5e4268[_0x4f2547(0x3fd)](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0x5e4268[_0x4f2547(0x3fd)](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0x5e4268['bezierCurveTo'](238.87,332.47,234.51,324.99,230.45,317.4),_0x5e4268[_0x4f2547(0x3fd)](226.39,309.81,222.45,302.09,218.9,294.22),_0x5e4268['bezierCurveTo'](222.31,302.16,226.06,309.95,0xe6,317.63),_0x5e4268[_0x4f2547(0x3fd)](233.94,325.31,238.15,332.88,242.66,340.27),_0x5e4268[_0x4f2547(0x3fd)](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0x5e4268[_0x4f2547(0x3fd)](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0x5e4268['bezierCurveTo'](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0x5e4268[_0x4f2547(0x3fd)](270.03,392.36,265.07,404.6,260.07,416.82),_0x5e4268[_0x4f2547(0x3fd)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0x5e4268['bezierCurveTo'](250.19,405.11,247.84,401.65,245.61,398.11),_0x5e4268['bezierCurveTo'](241.18,391.02,237.18,383.63,233.44,376.11),_0x5e4268[_0x4f2547(0x3fd)](229.7,368.59,226.22,360.96,222.93,353.23),_0x5e4268['bezierCurveTo'](219.64,345.5,216.5,337.71,213.62,329.82),_0x5e4268[_0x4f2547(0x3fd)](216.34,337.77,219.33,345.63,222.47,353.43),_0x5e4268[_0x4f2547(0x3fd)](225.61,361.23,228.95,368.94,232.54,376.55),_0x5e4268['bezierCurveTo'](236.13,384.16,0xf0,391.64,244.33,398.89),_0x5e4268[_0x4f2547(0x3fd)](246.51,402.5,248.81,406.05,251.33,409.47),_0x5e4268['bezierCurveTo'](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0x5e4268[_0x4f2547(0x3fd)](255.15,429.01,250.953333,439.226667,246.74,449.44),_0x5e4268[_0x4f2547(0x3fd)](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0x5e4268[_0x4f2547(0x3fd)](239.52,439.43,237.79,436.41,236.07,433.4),_0x5e4268[_0x4f2547(0x3fd)](232.66,427.34,229.43,421.17,225.97,415.11),_0x5e4268[_0x4f2547(0x3fd)](224.25,412.11,222.44,409.11,220.52,406.17),_0x5e4268['bezierCurveTo'](219.52,404.73,218.52,403.29,217.41,401.94),_0x5e4268[_0x4f2547(0x3fd)](216.3,400.59,215.2,399.27,214.22,397.83),_0x5e4268[_0x4f2547(0x3fd)](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0x5e4268['bezierCurveTo'](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0x5e4268[_0x4f2547(0x3fd)](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0x5e4268[_0x4f2547(0x3fd)](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0x5e4268[_0x4f2547(0x3fd)](214.75,399.62,215.9,400.98,216.92,402.37),_0x5e4268[_0x4f2547(0x3fd)](217.94,403.76,218.92,405.18,219.92,406.62),_0x5e4268[_0x4f2547(0x3fd)](221.76,409.56,223.496667,412.56,225.13,415.62),_0x5e4268['bezierCurveTo'](228.43,421.74,231.51,427.98,234.79,434.14),_0x5e4268['bezierCurveTo'](236.44,437.21,238.1,440.29,239.96,443.27),_0x5e4268[_0x4f2547(0x3fd)](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0x5e4268[_0x4f2547(0x3fd)](245.73,452.05,245.51,452.61,245.28,453.16),_0x5e4268[_0x4f2547(0x4ba)](235.65,476.16),_0x5e4268['bezierCurveTo'](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0x5e4268[_0x4f2547(0x4ba)](227.86,466.23),_0x5e4268[_0x4f2547(0x4ba)](226.53,463.74),_0x5e4268[_0x4f2547(0x3fd)](226.07,462.92,225.7,462.05,225.29,461.2),_0x5e4268[_0x4f2547(0x3fd)](224.88,460.35,224.47,459.5,224.12,458.62),_0x5e4268[_0x4f2547(0x3fd)](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0x5e4268['bezierCurveTo'](219.17,444.3,218.19,440.63,217.46,436.94),_0x5e4268[_0x4f2547(0x3fd)](218.03,440.71,218.84,444.43,219.78,448.12),_0x5e4268['bezierCurveTo'](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0x5e4268[_0x4f2547(0x3fd)](223.31,459.91,223.69,460.79,224.06,461.67),_0x5e4268[_0x4f2547(0x3fd)](224.43,462.55,224.77,463.45,225.21,464.3),_0x5e4268[_0x4f2547(0x4ba)](226.46,466.9),_0x5e4268[_0x4f2547(0x4ba)](227.87,469.42),_0x5e4268['bezierCurveTo'](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0x5e4268[_0x4f2547(0x4ba)](225.34,500.28),_0x5e4268[_0x4f2547(0x3fd)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0x5e4268[_0x4f2547(0x3fd)](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0x5e4268[_0x4f2547(0x3fd)](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0x5e4268['bezierCurveTo'](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0x5e4268[_0x4f2547(0x3fd)](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0x5e4268['bezierCurveTo'](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0x5e4268[_0x4f2547(0x3fd)](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0x5e4268[_0x4f2547(0x3fd)](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0x5e4268[_0x4f2547(0x4ba)](194.12,574.71),_0x5e4268[_0x4f2547(0x3fd)](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0x5e4268['bezierCurveTo'](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0x5e4268[_0x4f2547(0x3fd)](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0x5e4268['bezierCurveTo'](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0x5e4268[_0x4f2547(0x4ba)](205.26,578.03),_0x5e4268[_0x4f2547(0x4ba)](211.54,562.23),_0x5e4268[_0x4f2547(0x4ba)](224.09,530.63),_0x5e4268['lineTo'](233.09,507.93),_0x5e4268['bezierCurveTo'](237.58,508.07,242.09,508.14,246.55,507.93),_0x5e4268[_0x4f2547(0x3fd)](251.01,507.72,255.72,507.44,260.27,506.93),_0x5e4268['bezierCurveTo'](264.82,506.42,269.38,505.81,273.89,505.03),_0x5e4268[_0x4f2547(0x3fd)](278.4,504.25,282.89,503.32,287.31,502.14),_0x5e4268[_0x4f2547(0x3fd)](282.85,503.14,278.31,503.91,273.81,504.53),_0x5e4268[_0x4f2547(0x3fd)](269.31,505.15,264.74,505.63,260.19,505.93),_0x5e4268['bezierCurveTo'](255.64,506.23,251.08,506.42,246.52,506.4),_0x5e4268[_0x4f2547(0x3fd)](242.29,506.4,238.07,506.21,233.87,505.94),_0x5e4268[_0x4f2547(0x4ba)](242.87,483.17),_0x5e4268[_0x4f2547(0x3fd)](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0x5e4268[_0x4f2547(0x4ba)](261.81,486.28),_0x5e4268[_0x4f2547(0x4ba)](265.75,486.37),_0x5e4268[_0x4f2547(0x3fd)](267.06,486.37,268.38,486.37,269.69,486.37),_0x5e4268['bezierCurveTo'](0x10f,486.37,272.31,486.37,273.62,486.24),_0x5e4268[_0x4f2547(0x3fd)](278.86,486.02,284.08,485.46,289.26,484.78),_0x5e4268[_0x4f2547(0x3fd)](294.44,484.1,299.61,483.21,304.72,482.07),_0x5e4268[_0x4f2547(0x3fd)](299.58,483.07,294.4,483.74,289.21,484.28),_0x5e4268['bezierCurveTo'](284.02,484.82,278.8,485.19,273.59,485.28),_0x5e4268[_0x4f2547(0x3fd)](272.29,485.34,270.98,485.28,269.68,485.28),_0x5e4268[_0x4f2547(0x3fd)](268.38,485.28,267.08,485.28,265.78,485.18),_0x5e4268[_0x4f2547(0x4ba)](261.89,484.97),_0x5e4268['lineTo'](258.02,484.58),_0x5e4268[_0x4f2547(0x3fd)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0x5e4268[_0x4f2547(0x4ba)](249.19,467.39),_0x5e4268['bezierCurveTo'](250.19,464.99,251.09,462.58,252.04,460.18),_0x5e4268[_0x4f2547(0x4ba)](257.36,461.07),_0x5e4268['lineTo'](260.36,461.57),_0x5e4268[_0x4f2547(0x3fd)](261.36,461.72,262.36,461.78,263.36,461.89),_0x5e4268['lineTo'](269.36,462.48),_0x5e4268[_0x4f2547(0x3fd)](271.36,462.61,273.36,462.64,275.36,462.73),_0x5e4268[_0x4f2547(0x4ba)](278.36,462.84),_0x5e4268[_0x4f2547(0x3fd)](279.36,462.84,280.36,462.84,281.36,462.79),_0x5e4268[_0x4f2547(0x4ba)](287.36,462.65),_0x5e4268[_0x4f2547(0x3fd)](291.36,462.34,295.36,462.15,299.26,461.58),_0x5e4268[_0x4f2547(0x3fd)](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0x5e4268[_0x4f2547(0x3fd)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0x5e4268[_0x4f2547(0x3fd)](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0x5e4268[_0x4f2547(0x3fd)](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0x5e4268[_0x4f2547(0x3fd)](295.22,461.08,291.26,461.18,287.32,461.41),_0x5e4268[_0x4f2547(0x4ba)](281.39,461.41),_0x5e4268[_0x4f2547(0x3fd)](280.39,461.41,279.39,461.41,278.39,461.41),_0x5e4268['lineTo'](275.44,461.24),_0x5e4268[_0x4f2547(0x3fd)](273.44,461.11,271.49,461.04,269.53,460.87),_0x5e4268[_0x4f2547(0x4ba)](263.65,460.16),_0x5e4268['bezierCurveTo'](262.65,460.03,261.65,459.95,260.72,459.79),_0x5e4268[_0x4f2547(0x4ba)](257.81,459.23),_0x5e4268[_0x4f2547(0x4ba)](252.92,458.31),_0x5e4268[_0x4f2547(0x3fd)](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0x5e4268[_0x4f2547(0x4ba)](264.75,427.87),_0x5e4268[_0x4f2547(0x4ba)](271.61,0x1ac),_0x5e4268[_0x4f2547(0x4ba)](275.28,428.06),_0x5e4268[_0x4f2547(0x3fd)](276.5,428.06,277.72,427.99,278.95,427.95),_0x5e4268[_0x4f2547(0x4ba)](286.28,427.7),_0x5e4268[_0x4f2547(0x4ba)](293.59,427.1),_0x5e4268['lineTo'](297.24,426.8),_0x5e4268[_0x4f2547(0x4ba)](300.88,426.33),_0x5e4268[_0x4f2547(0x3fd)](303.3,426.01,305.73,425.73,308.15,425.38),_0x5e4268[_0x4f2547(0x3fd)](312.96,424.55,317.79,423.82,322.56,422.75),_0x5e4268['bezierCurveTo'](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0x5e4268[_0x4f2547(0x3fd)](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0x5e4268[_0x4f2547(0x3fd)](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0x5e4268[_0x4f2547(0x3fd)](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0x5e4268['bezierCurveTo'](317.53,422.84,312.7,423.47,307.9,424.21),_0x5e4268[_0x4f2547(0x3fd)](305.49,424.52,303.07,424.76,300.66,425.03),_0x5e4268['lineTo'](297.03,425.43),_0x5e4268['lineTo'](293.4,425.68),_0x5e4268['lineTo'](286.13,426.14),_0x5e4268['lineTo'](278.85,426.27),_0x5e4268[_0x4f2547(0x3fd)](277.64,426.27,276.42,426.33,275.21,426.27),_0x5e4268[_0x4f2547(0x4ba)](271.57,426.14),_0x5e4268['lineTo'](265.44,425.92),_0x5e4268[_0x4f2547(0x4ba)](273.9,404.05),_0x5e4268[_0x4f2547(0x4ba)](276.44,397.42),_0x5e4268[_0x4f2547(0x3fd)](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0x5e4268[_0x4f2547(0x3fd)](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0x5e4268['bezierCurveTo'](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0x5e4268[_0x4f2547(0x3fd)](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0x5e4268['bezierCurveTo'](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0x5e4268['bezierCurveTo'](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0x5e4268[_0x4f2547(0x3fd)](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0x5e4268[_0x4f2547(0x3fd)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0x5e4268['bezierCurveTo'](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0x5e4268[_0x4f2547(0x3fd)](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0x5e4268[_0x4f2547(0x3fd)](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0x5e4268['bezierCurveTo'](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0x5e4268['bezierCurveTo'](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0x5e4268[_0x4f2547(0x3fd)](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0x5e4268['bezierCurveTo'](339.7,353.89,346.83,350.58,353.85,347.05),_0x5e4268[_0x4f2547(0x3fd)](360.87,343.52,367.77,339.76,374.5,335.72),_0x5e4268[_0x4f2547(0x3fd)](367.69,339.62,360.7,343.21,353.63,346.6),_0x5e4268[_0x4f2547(0x3fd)](346.56,349.99,339.36,353.14,332.05,355.96),_0x5e4268[_0x4f2547(0x3fd)](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0x5e4268[_0x4f2547(0x3fd)](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0x5e4268['bezierCurveTo'](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0x5e4268[_0x4f2547(0x3fd)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0x5e4268[_0x4f2547(0x3fd)](298.49,338.79,299.06,337.16,299.66,335.53)),_0x5e4268['fill'](),_0x5e4268[_0x4f2547(0x1c8)](),_0x5e4268['restore'](),this['_baseTexture'][_0x4f2547(0x48f)]();}}this['ax']=Graphics[_0x4f2547(0x313)]/0x2+Math[_0x4f2547(0x592)](_0x37e0d8)+Math[_0x4f2547(0x592)](_0x37e0d8)-_0x37e0d8;break;default:this['ax']=Graphics[_0x4f2547(0x313)]/0x2;break;}let _0x33d10b=this[_0x4f2547(0x27b)]()[_0x4f2547(0x53e)][_0x4f2547(0x3e2)]||'random';_0x33d10b=_0x33d10b[_0x4f2547(0x3e8)](/either/i,Math[_0x4f2547(0x221)]()<0.5?_0x4f2547(0x5a1):_0x4f2547(0x2cd));let _0x69188c=0x0;switch(_0x33d10b[_0x4f2547(0x302)]()[_0x4f2547(0x491)]()){case _0x4f2547(0x221):this['ay']=Math[_0x4f2547(0x592)](Graphics[_0x4f2547(0x3e7)]+_0x1a798c*0x2)-_0x1a798c;break;case _0x4f2547(0x211):this['ay']=0x0;break;case _0x4f2547(0x4f3):case _0x4f2547(0x2a8):case _0x4f2547(0x3b8):case'upper\x2040%':case _0x4f2547(0x2b2):case _0x4f2547(0x1a3):case _0x4f2547(0x5cb):case _0x4f2547(0x166):case _0x4f2547(0x582):if(_0x33d10b[_0x4f2547(0x268)](/(\d+)([%％])/i)){if(_0x4f2547(0x3e4)!==_0x4f2547(0x388)){const _0x1f3dcd=Number(RegExp['$1'])*0.01;_0x69188c+=Math[_0x4f2547(0x474)](Graphics[_0x4f2547(0x3e7)]*_0x1f3dcd);}else{const _0x5a2b14=this['_cached_WeatherEffects_CloudBurst'];return _0x5a2b14[_0x4e9f00[_0x4f2547(0x474)](_0x6c80cd[_0x4f2547(0x221)]()*_0x5a2b14[_0x4f2547(0x19b)])];}}this['ay']=0x0+Math[_0x4f2547(0x592)](_0x69188c)-Math[_0x4f2547(0x592)](_0x1a798c);break;case _0x4f2547(0x5da):this['ay']=Graphics['height'];break;case _0x4f2547(0x283):case'lower\x2020%':case'lower\x2030%':case _0x4f2547(0x2e8):case'lower\x2050%':case _0x4f2547(0x1d4):case _0x4f2547(0x56e):case _0x4f2547(0x458):case _0x4f2547(0x186):if(_0x33d10b['match'](/(\d+)([%％])/i)){if(_0x4f2547(0x195)!=='XqQow'){const _0x40e033=Number(RegExp['$1'])*0.01;_0x69188c+=Math[_0x4f2547(0x474)](Graphics['height']*_0x40e033);}else _0x45efd8['ConvertParams'](_0x2f0fba,_0x326c0e),_0x4203c2[_0x4f2547(0x3bc)]='slow_icons_1',_0x41cc0a[_0x4f2547(0x329)][_0x4f2547(0x417)](_0x5babda);}this['ay']=Graphics['height']-Math['randomInt'](_0x69188c)+Math[_0x4f2547(0x592)](_0x1a798c);break;case _0x4f2547(0x410):case _0x4f2547(0x410):case _0x4f2547(0x52e):case _0x4f2547(0x565):case _0x4f2547(0x16c):case'middle\x2050%':case _0x4f2547(0x5bd):case _0x4f2547(0x400):case _0x4f2547(0x32e):case _0x4f2547(0x303):if(_0x33d10b[_0x4f2547(0x268)](/(\d+)([%％])/i)){const _0x2cfcd8=Number(RegExp['$1'])*0.01;_0x69188c+=Math[_0x4f2547(0x474)](Graphics[_0x4f2547(0x3e7)]*_0x2cfcd8);}this['ay']=Graphics['height']/0x2+Math[_0x4f2547(0x592)](_0x69188c)+Math[_0x4f2547(0x592)](_0x69188c)-_0x69188c;break;default:this['ay']=Graphics[_0x4f2547(0x3e7)]/0x2;break;}this['ax']+=this['data']()[_0x4f2547(0x53e)][_0x4f2547(0x3e5)]||0x0,this['ay']+=this[_0x4f2547(0x27b)]()[_0x4f2547(0x53e)]['spawnOffsetY']||0x0,this[_0x4f2547(0x1f0)]=this['data']()[_0x4f2547(0x53e)][_0x4f2547(0x2aa)];if(this[_0x4f2547(0x1f0)]){if(_0x4f2547(0x57c)!=='otfuW')this['ax']+=this['_weatherParent'][_0x4f2547(0x22c)]['x'],this['ay']+=this[_0x4f2547(0x3db)][_0x4f2547(0x22c)]['y'];else{const _0x4323fa=_0x5dc710['findTargetSprite'](_0x232baa);if(_0x4323fa){const _0x5d978b=new _0x423713(_0x4323fa['x'],_0x4323fa['y']),_0x1306a9=_0x4323fa[_0x4f2547(0x433)][_0x4f2547(0x181)](_0x5d978b);this['ax']=_0x4323fa['x']-_0x1306a9['x']+this[_0x4f2547(0x50e)],this['ay']=_0x4323fa['y']-_0x1306a9['y']+this['_lockedOffsetY'];return;}}}},Sprite_WeatherParticle[_0x502049(0x4ca)]['rebornInitialOpacity']=function(){const _0x2b14f3=_0x502049;this[_0x2b14f3(0x441)]=this['data']()[_0x2b14f3(0x53e)][_0x2b14f3(0x441)];const _0x3a33a6=this[_0x2b14f3(0x27b)]()[_0x2b14f3(0x53e)]['opacityVariance'],_0x371be3=VisuMZ['WeatherEffects'][_0x2b14f3(0x450)](_0x3a33a6);this[_0x2b14f3(0x441)]=(this[_0x2b14f3(0x441)]+_0x371be3)[_0x2b14f3(0x4df)](0x0,0xff),this[_0x2b14f3(0x1cf)]=this['opacity'],this[_0x2b14f3(0x4bd)]=this[_0x2b14f3(0x27b)]()[_0x2b14f3(0x53e)][_0x2b14f3(0x5b7)]||_0x2b14f3(0x3d7),this['_opacityFadeInTime']=this[_0x2b14f3(0x27b)]()[_0x2b14f3(0x53e)][_0x2b14f3(0x45f)]||0x0,this[_0x2b14f3(0x59e)]=this[_0x2b14f3(0x27b)]()[_0x2b14f3(0x53e)]['opacityFadeInTime']||0x0;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x56c)]=function(){const _0x4d3bb9=_0x502049;this[_0x4d3bb9(0x1bb)]=this['data']()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x3bc)]||_0x4d3bb9(0x4f4),this[_0x4d3bb9(0x35f)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x429)]||0x0,this[_0x4d3bb9(0x50e)]=this[_0x4d3bb9(0x27b)]()['trajectory'][_0x4d3bb9(0x1f6)]||0x0,this[_0x4d3bb9(0x4fa)]=this[_0x4d3bb9(0x27b)]()['trajectory']['lockedOffsetY']||0x0,this[_0x4d3bb9(0x241)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x5c6)],this[_0x4d3bb9(0x241)]+=VisuMZ['WeatherEffects'][_0x4d3bb9(0x3bf)](this[_0x4d3bb9(0x27b)]()['trajectory'][_0x4d3bb9(0x53c)]);if(this[_0x4d3bb9(0x27b)]()['trajectory'][_0x4d3bb9(0x53c)]!==0x0){if(this['_speed']===0x0)this[_0x4d3bb9(0x241)]=Math['random']();}this[_0x4d3bb9(0x2f1)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x4ee)];const _0x3bf68a=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x3a7)],_0x1229a1=VisuMZ[_0x4d3bb9(0x329)][_0x4d3bb9(0x450)](_0x3bf68a);this[_0x4d3bb9(0x2f1)]=Math[_0x4d3bb9(0x1fd)](this[_0x4d3bb9(0x2f1)]+_0x1229a1),this['_angleOffset']=this[_0x4d3bb9(0x27b)]()['trajectory'][_0x4d3bb9(0x2a6)],this['_alignAngle']=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)]['alignAngle']??!![],this[_0x4d3bb9(0x2c8)]=this['data']()[_0x4d3bb9(0x4a6)]['angleArc']??0x0,this[_0x4d3bb9(0x1a6)]=0x0,this[_0x4d3bb9(0x5e8)]=Math[_0x4d3bb9(0x592)](0xf4240),this[_0x4d3bb9(0x4be)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x1ef)],this[_0x4d3bb9(0x4fb)]=this[_0x4d3bb9(0x27b)]()['trajectory']['angleSwaySpeed'],this[_0x4d3bb9(0x5b0)]=0x0,this[_0x4d3bb9(0x452)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x2e3)]||0x0;if(this[_0x4d3bb9(0x452)]!==0x0){if(_0x4d3bb9(0x421)!==_0x4d3bb9(0x42c))this[_0x4d3bb9(0x5b0)]=Math[_0x4d3bb9(0x592)](0x168);else{return![];if(!_0x27f8ef[_0x4d3bb9(0x194)]())return![];return _0x2f0543['isPressed'](_0x4d3bb9(0x1d6))&&_0x49d1b8[_0x4d3bb9(0x3df)](_0x4d3bb9(0x5d3));}}this['_spinSpeed']+=VisuMZ[_0x4d3bb9(0x329)]['MakeVariance'](this['data']()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x56a)]||0x0);if(this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x2cb)]){if(Math[_0x4d3bb9(0x221)]()<0.5)this[_0x4d3bb9(0x452)]*=-0x1;}this['_xSwayRng']=Math['randomInt'](0xf4240),this[_0x4d3bb9(0x3ec)]=Math[_0x4d3bb9(0x592)](0xf4240),this[_0x4d3bb9(0x1e3)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x58d)],this[_0x4d3bb9(0x304)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)]['xSwaySpeed'],this[_0x4d3bb9(0x43e)]=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)][_0x4d3bb9(0x55d)],this['_ySwaySpeed']=this[_0x4d3bb9(0x27b)]()[_0x4d3bb9(0x4a6)]['ySwaySpeed'];},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x557)]=function(){const _0x4e8304=_0x502049;this[_0x4e8304(0x250)](),this[_0x4e8304(0x36b)](),this['rebornSpriteHue'](),this[_0x4e8304(0x583)](),this[_0x4e8304(0x171)]();},Sprite_WeatherParticle['prototype']['rebornBitmap']=function(){const _0x46f5ea=_0x502049,_0x2598fe=this[_0x46f5ea(0x528)]();this[_0x46f5ea(0x4d1)](_0x2598fe);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x528)]=function(){const _0x40bfe3=_0x502049,_0x190437=this['data']();let _0x2e34ea=[],_0x4d608f=0x0;_0x190437[_0x40bfe3(0x1ad)][_0x40bfe3(0x3a1)]&&(_0x2e34ea['push'](_0x40bfe3(0x3a1)),_0x4d608f+=_0x190437[_0x40bfe3(0x1ad)][_0x40bfe3(0x28c)]||0x1);_0x190437[_0x40bfe3(0x1ad)][_0x40bfe3(0x478)][_0x40bfe3(0x19b)]>0x0&&(_0x2e34ea[_0x40bfe3(0x4ac)](_0x40bfe3(0x478)),_0x4d608f+=_0x190437[_0x40bfe3(0x1ad)][_0x40bfe3(0x2d2)]||0x1);if(_0x190437['image'][_0x40bfe3(0x319)][_0x40bfe3(0x19b)]>0x0){if('pddwx'===_0x40bfe3(0x33d))_0x2e34ea[_0x40bfe3(0x4ac)]('pictures'),_0x4d608f+=_0x190437[_0x40bfe3(0x1ad)][_0x40bfe3(0x310)]||0x1;else{const _0x4aad87=_0x2e89e0[_0x40bfe3(0x1ba)]()-this['x'],_0x4f0014=_0x35957['screenY']()-this['y'],_0x49f64b=_0x31bf99[_0x40bfe3(0x4fd)](_0x4aad87*_0x4aad87+_0x4f0014*_0x4f0014),_0x3bdb3d=0x5*_0x99541a[_0x40bfe3(0x51b)]();if(_0x49f64b<=_0x3bdb3d)_0x264ce0*=0.15;}}let _0x52fb8a=Math[_0x40bfe3(0x221)]()*_0x4d608f;for(const _0x3be236 of _0x2e34ea){if(_0x40bfe3(0x5dd)==='zrOab'){_0x52fb8a-=_0x190437['image'][_0x40bfe3(0x5e3)[_0x40bfe3(0x339)](_0x3be236)]||0x0;if(_0x52fb8a<=0x0)return _0x3be236;}else _0x14def6=0x0;}return'generated';},Sprite_WeatherParticle['prototype'][_0x502049(0x4d1)]=function(_0x379209){const _0x2971ea=_0x502049;this[_0x2971ea(0x3cc)]=!![];if(_0x379209===_0x2971ea(0x3a1))_0x2971ea(0x383)!=='MZafR'?this[_0x2971ea(0x193)]():(_0xf32eab=_0x424897+_0xeb9561[_0x2971ea(0x239)](_0x12feb3)*_0x143778,_0xee7524=_0x22f1b1+_0x18013d['sin'](_0x5c709b)*_0x2a4c58,_0x3cd174['lineTo'](_0x3302ee,_0x3c59e5),_0x1a459d+=_0x1317b4,_0x1de07b=_0x102b65+_0x5a4300[_0x2971ea(0x239)](_0x544ae2)*_0x2e6cc6,_0x1ace8c=_0x5d548c+_0x10fe73[_0x2971ea(0x524)](_0x15dac2)*_0x38f277,_0x10ac38[_0x2971ea(0x4ba)](_0x19f6cf,_0x49d2e4),_0x4926c7+=_0x543d0d);else{if(_0x379209===_0x2971ea(0x478)){if(_0x2971ea(0x336)!==_0x2971ea(0x3c3))this[_0x2971ea(0x49b)]();else{const _0x530cf3=this[_0x2971ea(0x466)];return _0x530cf3[_0x3eabb4[_0x2971ea(0x474)](_0x5dead4[_0x2971ea(0x221)]()*_0x530cf3[_0x2971ea(0x19b)])];}}else{if(_0x379209===_0x2971ea(0x319)){if('IPLBX'!==_0x2971ea(0x1e2))this[_0x2971ea(0x4bc)]();else{const _0x201320=this['_cached_WeatherEffects_SoapBubbles'];return _0x201320[_0x1c22ba[_0x2971ea(0x474)](_0x4ccfbb[_0x2971ea(0x221)]()*_0x201320[_0x2971ea(0x19b)])];}}}}},Sprite_WeatherParticle[_0x502049(0x4ca)]['loadGeneratedBitmap']=function(){const _0x3ac30b=_0x502049,_0x2eecdf=this['data']()[_0x3ac30b(0x3bc)]['toLowerCase']()[_0x3ac30b(0x491)]();this[_0x3ac30b(0x44e)]=ImageManager[_0x3ac30b(0x174)](_0x2eecdf),this['bitmap'][_0x3ac30b(0x464)](this[_0x3ac30b(0x4f5)][_0x3ac30b(0x208)](this));},Sprite_WeatherParticle['prototype'][_0x502049(0x4f5)]=function(){const _0x52c2c2=_0x502049;this[_0x52c2c2(0x3cc)]=![];const _0x60f3e4=this[_0x52c2c2(0x44e)][_0x52c2c2(0x313)],_0x4d7ae4=this['bitmap']['height'];this[_0x52c2c2(0x485)](0x0,0x0,_0x60f3e4,_0x4d7ae4);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x49b)]=function(){const _0x59cfb9=_0x502049;this[_0x59cfb9(0x44e)]=ImageManager[_0x59cfb9(0x44a)](),this[_0x59cfb9(0x44e)][_0x59cfb9(0x464)](this['setupIconFrame'][_0x59cfb9(0x208)](this));},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x5ae)]=function(){const _0x2ff281=_0x502049;this[_0x2ff281(0x3cc)]=![];const _0x56deef=this['data']()[_0x2ff281(0x1ad)][_0x2ff281(0x478)],_0x4ef9d9=_0x56deef[Math[_0x2ff281(0x474)](Math[_0x2ff281(0x221)]()*_0x56deef[_0x2ff281(0x19b)])],_0x512500=ImageManager[_0x2ff281(0x4ed)],_0x2fa8fd=ImageManager[_0x2ff281(0x3b9)],_0x454a9b=_0x4ef9d9%0x10*_0x512500,_0x57009c=Math[_0x2ff281(0x474)](_0x4ef9d9/0x10)*_0x2fa8fd;this[_0x2ff281(0x485)](_0x454a9b,_0x57009c,_0x512500,_0x2fa8fd);},Sprite_WeatherParticle['prototype']['loadPictureBitmap']=function(){const _0xc93741=_0x502049,_0x4e1fed=this[_0xc93741(0x27b)]()[_0xc93741(0x1ad)][_0xc93741(0x319)],_0x518148=_0x4e1fed[Math['floor'](Math[_0xc93741(0x221)]()*_0x4e1fed[_0xc93741(0x19b)])];this[_0xc93741(0x44e)]=ImageManager[_0xc93741(0x271)](_0x518148),this[_0xc93741(0x44e)][_0xc93741(0x464)](this['setFullBitmapFrame'][_0xc93741(0x208)](this));},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x36b)]=function(){const _0x4632ad=_0x502049,_0x223ce0=this[_0x4632ad(0x27b)]()['image'][_0x4632ad(0x3aa)];this['blendMode']=_0x223ce0;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x322)]=function(){const _0x379701=_0x502049,_0x240a62=this[_0x379701(0x27b)]()['image'][_0x379701(0x22a)]||[];if(_0x240a62[_0x379701(0x19b)]<=0x0)_0x240a62[_0x379701(0x4ac)](0x0);this[_0x379701(0x585)]=_0x240a62[Math[_0x379701(0x474)](Math['random']()*_0x240a62[_0x379701(0x19b)])],this['setHue'](this['_baseHue']);},Sprite_WeatherParticle[_0x502049(0x4ca)]['rebornSpriteTone']=function(){const _0x305831=_0x502049,_0x354bf3=this['data']()[_0x305831(0x1ad)][_0x305831(0x2c7)]||[];if(_0x354bf3[_0x305831(0x19b)]<=0x0)_0x354bf3['push']([0x0,0x0,0x0,0x0]);this[_0x305831(0x31f)]=_0x354bf3[Math[_0x305831(0x474)](Math[_0x305831(0x221)]()*_0x354bf3[_0x305831(0x19b)])][_0x305831(0x516)](),this[_0x305831(0x4b6)](this[_0x305831(0x31f)]);},Sprite_WeatherParticle[_0x502049(0x4ca)]['removeUnusedColorFilter']=function(){const _0x346232=_0x502049;if(!this[_0x346232(0x318)])return;if(!this['_colorFilter'])return;if(this[_0x346232(0x4a8)]!==0x0)return;if(!this[_0x346232(0x448)]['equals']([0x0,0x0,0x0,0x0]))return;this[_0x346232(0x318)][_0x346232(0x556)](this[_0x346232(0x192)]),delete this['_colorFilter'];},Sprite_WeatherParticle[_0x502049(0x4ca)]['rebornActions']=function(){const _0x575a40=_0x502049;this[_0x575a40(0x18b)]();},Sprite_WeatherParticle['prototype'][_0x502049(0x18b)]=function(){const _0x4f3bd6=_0x502049;if(!this['_flags'])return;if(!this[_0x4f3bd6(0x30c)][_0x4f3bd6(0x282)])return;const _0x596d01=this[_0x4f3bd6(0x30c)][_0x4f3bd6(0x282)]||0x0;SceneManager['_scene'][_0x4f3bd6(0x572)](_0x596d01);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x48f)]=function(){const _0x2c5ba8=_0x502049;Sprite[_0x2c5ba8(0x4ca)][_0x2c5ba8(0x48f)][_0x2c5ba8(0x24b)](this);if(this[_0x2c5ba8(0x3bc)]===_0x2c5ba8(0x3ff))return;if(this['_notLoadedReady'])return;if(this[_0x2c5ba8(0x3ae)]>0x0)return this['_opacityFadeInTime']=0x0,this['opacity']=0x0,this[_0x2c5ba8(0x3ae)]--;this[_0x2c5ba8(0x169)](),this[_0x2c5ba8(0x386)](),this['updateScale'](),this['updatePosition'](),this[_0x2c5ba8(0x591)]();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x169)]=function(){const _0x45f814=_0x502049;if(this['_lifespan']<=0x0)return this['rebornSprite']();if(this['isLongevityAffected']()){this[_0x45f814(0x292)]=this[_0x45f814(0x54a)];return;}this[_0x45f814(0x292)]--;if(this['_lifespan']<=0x0&&this['_flags']){if(_0x45f814(0x258)===_0x45f814(0x258)){if(this['_flags']['fireworksFinish']&&this['type']!==_0x45f814(0x36a))return this[_0x45f814(0x3d8)]();else{if(this[_0x45f814(0x30c)]['sparkleFinish']&&this[_0x45f814(0x3bc)]!=='sparkle')return this['processSparkleFinish']();}this[_0x45f814(0x30c)][_0x45f814(0x33b)]&&this['processRespawnDelay']();}else _0x1b7044['prototype'][_0x45f814(0x343)][_0x45f814(0x24b)](this);}},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x2a7)]=function(){const _0x276f4a=_0x502049;if(!this['_flags'])return![];if(!this[_0x276f4a(0x30c)][_0x276f4a(0x1d8)])return![];return this[_0x276f4a(0x3bc)]===this[_0x276f4a(0x27b)]()[_0x276f4a(0x3bc)];},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x3d8)]=function(){const _0x55f2e4=_0x502049;this[_0x55f2e4(0x3bc)]=_0x55f2e4(0x4d9),this[_0x55f2e4(0x292)]=Math[_0x55f2e4(0x592)](0x14)+0x50,this[_0x55f2e4(0x54a)]=this[_0x55f2e4(0x292)],this['_lastType']=_0x55f2e4(0x4d9),this[_0x55f2e4(0x30c)]={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this['_scaleRatioX']=0x1,this[_0x55f2e4(0x21f)]=0x1,this['_scaleInOutRatio']=0x0,this[_0x55f2e4(0x441)]=0xff,this[_0x55f2e4(0x1cf)]=0xff,this[_0x55f2e4(0x4bd)]=_0x55f2e4(0x173),this[_0x55f2e4(0x5b6)]=0xa,this[_0x55f2e4(0x59e)]=0xa,this['_trajectoryType']=_0x55f2e4(0x4f4),this[_0x55f2e4(0x241)]=0.05,this[_0x55f2e4(0x2f1)]=0x10e,this[_0x55f2e4(0x196)]=Math[_0x55f2e4(0x592)](0x168),this['_alignAngle']=![],this[_0x55f2e4(0x2c8)]=0x0,this['_angleArcTotal']=0x0,this[_0x55f2e4(0x4be)]=0x0,this[_0x55f2e4(0x5b0)]=0x0,this['_spinSpeed']=0x0,this[_0x55f2e4(0x1e3)]=0x0,this['_ySwayRange']=0x0,this[_0x55f2e4(0x3cc)]=!![],this[_0x55f2e4(0x44e)]=ImageManager[_0x55f2e4(0x1d3)](),this['bitmap']['addLoadListener'](this[_0x55f2e4(0x4f5)]['bind'](this)),this[_0x55f2e4(0x3aa)]=0x1,this[_0x55f2e4(0x448)]=[0x0,0x0,0x0,0x0];},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x46f)]=function(){const _0x3a87fd=_0x502049;this[_0x3a87fd(0x3bc)]=_0x3a87fd(0x316),this[_0x3a87fd(0x292)]=Math[_0x3a87fd(0x592)](0x1e)+0x3c,this[_0x3a87fd(0x54a)]=this[_0x3a87fd(0x292)],this['_lastType']=_0x3a87fd(0x316),this[_0x3a87fd(0x30c)]={},this['_scaleRatioX']=0x1,this[_0x3a87fd(0x21f)]=0x1,this[_0x3a87fd(0x5eb)]=0x1,this[_0x3a87fd(0x441)]=0xff,this[_0x3a87fd(0x1cf)]=0xff,this[_0x3a87fd(0x4bd)]='InQuad',this[_0x3a87fd(0x5b6)]=0x6,this[_0x3a87fd(0x59e)]=0x6,this[_0x3a87fd(0x1bb)]=_0x3a87fd(0x50a),this['_speed']=0x0,this[_0x3a87fd(0x2f1)]=0x0,this['_angleOffset']=0x0,this[_0x3a87fd(0x2b3)]=![],this['_angleArc']=0x0,this[_0x3a87fd(0x1a6)]=0x0,this['_angleSwayRange']=0x0,this[_0x3a87fd(0x5b0)]=0x0,this['_spinSpeed']=Math['randomInt'](0x3)+0x2,this['_xSwayRange']=0x0,this[_0x3a87fd(0x43e)]=0x0,this[_0x3a87fd(0x3cc)]=!![],this['bitmap']=ImageManager['weatherEffectsSparkle'](),this['bitmap'][_0x3a87fd(0x464)](this[_0x3a87fd(0x4f5)][_0x3a87fd(0x208)](this)),this['blendMode']=0x1,this[_0x3a87fd(0x4a8)]=0x0,this[_0x3a87fd(0x448)]=[0x0,0x0,0x0,0x0],this['removeUnusedColorFilter']();},Sprite_WeatherParticle['prototype'][_0x502049(0x1bf)]=function(){const _0x310444=_0x502049;this[_0x310444(0x3ae)]=this[_0x310444(0x30c)]['respawnDelayMin'];const _0x12a3f5=this[_0x310444(0x30c)][_0x310444(0x348)],_0x31c2c7=this['data']()['power'],_0x5c64f7=Math['randomInt'](_0x12a3f5*_0x31c2c7);this[_0x310444(0x3ae)]+=_0x5c64f7;},Sprite_WeatherParticle['prototype'][_0x502049(0x386)]=function(){const _0x1c44f7=_0x502049;if(this[_0x1c44f7(0x30c)][_0x1c44f7(0x526)])this[_0x1c44f7(0x344)]();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x344)]=function(){const _0x13de27=_0x502049,_0x464733=Graphics[_0x13de27(0x227)]+this[_0x13de27(0x1da)],_0x25eaba=this[_0x13de27(0x30c)][_0x13de27(0x2fc)],_0x556d10=this[_0x13de27(0x30c)][_0x13de27(0x526)]/0x2,_0x1f971b=this[_0x13de27(0x585)]+Math[_0x13de27(0x239)](_0x464733*_0x25eaba)*_0x556d10;this[_0x13de27(0x517)](_0x1f971b);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x50f)]=function(){const _0x57a6d1=_0x502049;this[_0x57a6d1(0x438)](),this[_0x57a6d1(0x2e4)]['x']=this[_0x57a6d1(0x2c5)](),this['scale']['y']=this[_0x57a6d1(0x5a3)]();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x438)]=function(){const _0x31fa26=_0x502049;if(this[_0x31fa26(0x30c)][_0x31fa26(0x492)]>this[_0x31fa26(0x292)]){if(_0x31fa26(0x34e)===_0x31fa26(0x17b)){const _0x54f8d3=this['_cached_WeatherEffects_Tempest'];return _0x54f8d3[_0x455adf['floor'](_0x18b3eb[_0x31fa26(0x221)]()*_0x54f8d3[_0x31fa26(0x19b)])];}else{const _0x152f08=this[_0x31fa26(0x292)],_0x47ccb1=this[_0x31fa26(0x30c)][_0x31fa26(0x3d0)]??0x1;if(_0x152f08<=0x1)this[_0x31fa26(0x5eb)]=_0x47ccb1;else{if(_0x31fa26(0x23c)===_0x31fa26(0x35c)){if(this[_0x31fa26(0x5b8)]&&this[_0x31fa26(0x5b8)][_0x31fa26(0x19b)]>=_0x233c2f['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4ada12=this['_cached_WeatherEffects_AshDebris'];return _0x4ada12[_0x4e41bf[_0x31fa26(0x474)](_0x2a4ec3[_0x31fa26(0x221)]()*_0x4ada12[_0x31fa26(0x19b)])];}const _0x3be24b=new _0x42c79a(0x12,0x12),_0x2eab52=_0x3be24b[_0x31fa26(0x313)],_0x86f571=_0x3be24b[_0x31fa26(0x3e7)],_0x1b6684=_0x2eab52/0x2-0x2,_0x1f806e=_0x86f571/0x2-0x2,_0x529a75=[];_0x529a75[_0x31fa26(0x4ac)](_0x3d87bd[_0x31fa26(0x592)](_0x1b6684)+0x2,_0x3dd6e6['randomInt'](_0x1f806e)+0x2),_0x529a75['push'](_0x2eab52-_0x936fc6[_0x31fa26(0x592)](_0x1b6684)-0x2,_0x1e2f34[_0x31fa26(0x592)](_0x1f806e)+0x2),_0x529a75[_0x31fa26(0x4ac)](_0x2eab52-_0x492bd2['randomInt'](_0x1b6684)-0x2,_0x86f571-_0x4e315c[_0x31fa26(0x592)](_0x1f806e)-0x2),_0x529a75[_0x31fa26(0x4ac)](_0x2d10a8[_0x31fa26(0x592)](_0x1b6684)+0x2,_0x86f571-_0x1da724[_0x31fa26(0x592)](_0x1f806e)-0x2);const _0x591128=_0x230772[_0x31fa26(0x5e9)]['clone'](),_0x5759b7=_0x591128[_0x28d7a0[_0x31fa26(0x474)](_0x259c12[_0x31fa26(0x221)]()*_0x591128['length'])];_0x3be24b['drawMultiPointPolygon'](_0x529a75,_0x5759b7,'black',0x2,0xff,![]),_0x3be24b[_0x31fa26(0x5e5)]=![];if(_0x52f273[_0x31fa26(0x277)])_0x2d5602[_0x31fa26(0x31a)]('ashdebris');return this[_0x31fa26(0x5b8)]=this[_0x31fa26(0x5b8)]||[],this[_0x31fa26(0x5b8)][_0x31fa26(0x4ac)](_0x3be24b),_0x3be24b;}else this[_0x31fa26(0x5eb)]=(this['_scaleInOutRatio']*(_0x152f08-0x1)+_0x47ccb1)/_0x152f08;}}}else{if(this[_0x31fa26(0x30c)][_0x31fa26(0x2c6)]>this[_0x31fa26(0x54a)]-this[_0x31fa26(0x292)]){const _0x468bb4=this[_0x31fa26(0x30c)]['scaleInDuration']-(this[_0x31fa26(0x54a)]-this[_0x31fa26(0x292)]),_0x2fcb6=0x1;_0x468bb4<=0x1?_0x31fa26(0x548)===_0x31fa26(0x548)?this[_0x31fa26(0x5eb)]=_0x2fcb6:(_0x1b8bc0[_0x31fa26(0x3b3)](_0x520cd2,_0x368619),_0x2df301[_0x31fa26(0x3bc)]=_0x31fa26(0x45b),_0x30f459[_0x31fa26(0x329)][_0x31fa26(0x417)](_0x24606a)):this[_0x31fa26(0x5eb)]=(this[_0x31fa26(0x5eb)]*(_0x468bb4-0x1)+_0x2fcb6)/_0x468bb4;}else _0x31fa26(0x513)!==_0x31fa26(0x55e)?this[_0x31fa26(0x5eb)]=0x1:(_0x5609eb[_0x31fa26(0x4ca)][_0x31fa26(0x26b)][_0x31fa26(0x24b)](this),this[_0x31fa26(0x286)][_0x31fa26(0x1dc)](this[_0x31fa26(0x1a5)]));}},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x2c5)]=function(){const _0x283924=_0x502049;let _0x52e9d8=this[_0x283924(0x31e)];_0x52e9d8*=this['_scaleRatioX'];if(this[_0x283924(0x30c)][_0x283924(0x204)]&&this['_flatFlutterDirX']){const _0x41e130=Graphics[_0x283924(0x227)]+this[_0x283924(0x217)];_0x52e9d8*=Math[_0x283924(0x239)](_0x41e130*this['_flatFlutterSpeedX']);}return _0x52e9d8*=this[_0x283924(0x5eb)],_0x52e9d8;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x5a3)]=function(){const _0x3dd382=_0x502049;let _0x1e66c5=this[_0x3dd382(0x31e)];_0x1e66c5*=this[_0x3dd382(0x21f)];if(this[_0x3dd382(0x30c)]['flatFlutter']&&!this[_0x3dd382(0x2cf)]){const _0x2e13fb=Graphics[_0x3dd382(0x227)]+this[_0x3dd382(0x4dc)];_0x1e66c5*=Math[_0x3dd382(0x239)](_0x2e13fb*this[_0x3dd382(0x2de)]);}return _0x1e66c5*=this['_scaleInOutRatio'],_0x1e66c5;},Sprite_WeatherParticle['prototype'][_0x502049(0x228)]=function(){const _0x41933d=_0x502049;this[_0x41933d(0x1f9)](),this[_0x41933d(0x3da)]();},Sprite_WeatherParticle['prototype'][_0x502049(0x3da)]=function(){const _0x236e40=_0x502049;this['x']=this['ax'],this['y']=this['ay'];if(this[_0x236e40(0x1f0)]){if(_0x236e40(0x44f)===_0x236e40(0x30e)){if(this[_0x236e40(0x4de)]){const _0x8814bc=this['_cached_WeatherEffects_Icons'];return _0x8814bc[_0x3ac4b2['floor'](_0x5c8aeb[_0x236e40(0x221)]()*_0x8814bc[_0x236e40(0x19b)])];}this[_0x236e40(0x4de)]=this['_cached_WeatherEffects_Icons']||[];const _0x1cfec1=_0x53f07a[_0x236e40(0x26a)];for(const _0x3394eb of _0x1cfec1){const _0x3639d3=new _0x2db14f(_0x22749c[_0x236e40(0x4ed)],_0x1d5f5c['iconHeight']);_0x3639d3['fontSize']=0x1c,_0x3639d3[_0x236e40(0x259)](_0x3394eb,0x0,0x0,_0x3639d3[_0x236e40(0x313)],_0x3639d3[_0x236e40(0x3e7)],_0x236e40(0x586)),_0x3639d3['_customModified']=![],this[_0x236e40(0x4de)]['push'](_0x3639d3);}if(_0x187a22[_0x236e40(0x277)])_0x172245['log'](_0x236e40(0x478));const _0x2fe78a=this[_0x236e40(0x4de)];return _0x2fe78a[_0x35a251[_0x236e40(0x474)](_0xebbdc1['random']()*_0x2fe78a[_0x236e40(0x19b)])];}else this['x']-=this[_0x236e40(0x3db)][_0x236e40(0x22c)]['x'],this['y']-=this['_weatherParent']['origin']['y'];}this['x']=Math[_0x236e40(0x1fd)](this['x']),this['y']=Math[_0x236e40(0x1fd)](this['y']);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x591)]=function(){this['updateOpacityEasing'](),this['updateOpacityFinal']();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x263)]=function(){const _0x22f60b=_0x502049;if(this[_0x22f60b(0x292)]<=0x0)return;if(this[_0x22f60b(0x5b6)]>0x0&&this[_0x22f60b(0x292)]>this['_opacityFadeInTime'])return;if(this['isLongevityAffected']())return;const _0x38cd2f=this[_0x22f60b(0x4bd)]||_0x22f60b(0x3d7);this[_0x22f60b(0x1cf)]=this[_0x22f60b(0x1b9)](this[_0x22f60b(0x1cf)],0x0,_0x38cd2f);},Sprite_WeatherParticle[_0x502049(0x4ca)]['applyEasing']=function(_0x289695,_0x2f9cc9,_0x32adbe){const _0x4d0d56=_0x502049,_0x3208d3=this[_0x4d0d56(0x292)],_0x4bf4db=this[_0x4d0d56(0x54a)],_0x1a6ba3=this['calcEasing']((_0x4bf4db-_0x3208d3)/_0x4bf4db,_0x32adbe),_0x46eb29=this['calcEasing']((_0x4bf4db-_0x3208d3+0x1)/_0x4bf4db,_0x32adbe),_0xdfd648=(_0x289695-_0x2f9cc9*_0x1a6ba3)/(0x1-_0x1a6ba3);return _0xdfd648+(_0x2f9cc9-_0xdfd648)*_0x46eb29;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x5ca)]=function(_0x2138b3,_0x520bd5){const _0x38cf1e=_0x502049;return VisuMZ[_0x38cf1e(0x3c8)](_0x2138b3,_0x520bd5);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x25f)]=function(){const _0x54901b=_0x502049;let _0x12c1b6=0x1;if(!SceneManager[_0x54901b(0x57f)]()){if(this[_0x54901b(0x30c)][_0x54901b(0x567)]&&!this[_0x54901b(0x3db)][_0x54901b(0x276)]){const _0x41b146=$gamePlayer[_0x54901b(0x1ba)]()-this['x'],_0x5028cf=$gamePlayer[_0x54901b(0x5e1)]()-this['y'],_0x2a7b69=Math[_0x54901b(0x4fd)](_0x41b146*_0x41b146+_0x5028cf*_0x5028cf),_0xc404d8=0x5*$gameMap[_0x54901b(0x51b)]();if(_0x2a7b69<=_0xc404d8)_0x12c1b6*=0.15;}}if(this['_opacityFadeInTime']>0x0){if('JdGhK'===_0x54901b(0x2df)){const _0x4c31fc=new _0x3a9ef0(0x10,0x8);_0x4c31fc[_0x54901b(0x41f)](0x0,0x0,0x10,0x8,_0x2fd3fd),_0x4c31fc[_0x54901b(0x41f)](0x1,0x1,0xe,0x6,_0x24ba30),_0x4c31fc['_customModified']=![],this[_0x54901b(0x3a5)]['push'](_0x4c31fc);}else{const _0x1e30e6=this[_0x54901b(0x59e)]||0x1,_0x24a4af=this[_0x54901b(0x5b6)];_0x12c1b6*=(_0x1e30e6-_0x24a4af)/_0x1e30e6,this['_opacityFadeInTime']--;}}return _0x12c1b6;},Sprite_WeatherParticle[_0x502049(0x4ca)]['updateOpacityFinal']=function(){const _0x30ce92=_0x502049,_0x3b7635=this[_0x30ce92(0x25f)]();this['opacity']=Math[_0x30ce92(0x226)](this[_0x30ce92(0x1cf)]*_0x3b7635);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x1f9)]=function(){const _0xa86e84=_0x502049,_0x377f9e=this['updatePositionTrajectoryAngle']();switch(this[_0xa86e84(0x1bb)]){case _0xa86e84(0x4f4):this[_0xa86e84(0x461)](_0x377f9e);break;case'frozen':this[_0xa86e84(0x223)](_0x377f9e);break;case _0xa86e84(0x484):case _0xa86e84(0x4c1):case _0xa86e84(0x40a):this[_0xa86e84(0x3ba)](_0x377f9e);break;case _0xa86e84(0x168):case _0xa86e84(0x382):case _0xa86e84(0x16b):case'target':this[_0xa86e84(0x4db)](_0x377f9e);break;default:this[_0xa86e84(0x3ab)]();break;}this[_0xa86e84(0x1f5)](),this[_0xa86e84(0x1e0)]();},Sprite_WeatherParticle['prototype'][_0x502049(0x249)]=function(){const _0x10e57d=_0x502049;this[_0x10e57d(0x1a6)]+=this[_0x10e57d(0x2c8)];let _0x483bb6=this['_baseAngle']+this[_0x10e57d(0x1a6)];const _0x5226af=Graphics[_0x10e57d(0x227)]+this[_0x10e57d(0x5e8)];return _0x483bb6+=Math['cos'](_0x5226af*this[_0x10e57d(0x4fb)])*this[_0x10e57d(0x4be)],this[_0x10e57d(0x4ee)]=-((this[_0x10e57d(0x2b3)]?_0x483bb6:0x0)+this[_0x10e57d(0x196)]),_0x483bb6;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x461)]=function(_0x31c3cd){const _0xabf13c=_0x502049,_0x2000cb=VisuMZ[_0xabf13c(0x329)][_0xabf13c(0x2d9)](_0x31c3cd);this['ax']+=this['_speed']*Math[_0xabf13c(0x239)](_0x2000cb),this['ay']-=this[_0xabf13c(0x241)]*Math[_0xabf13c(0x524)](_0x2000cb);},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x3ab)]=function(){const _0x4189af=_0x502049;this['ax']=Graphics['width']*0x64,this['ay']=Graphics[_0x4189af(0x3e7)]*0x64;},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x223)]=function(_0x24a67e){},Sprite_WeatherParticle['prototype'][_0x502049(0x3ba)]=function(_0x409fd7){const _0x2074eb=_0x502049;let _0x3ac969=null;if(!SceneManager['isSceneBattle']()){if(_0x2074eb(0x58c)===_0x2074eb(0x58c))switch(this[_0x2074eb(0x1bb)]){case'player':_0x3ac969=$gamePlayer;break;case'follower':const _0x474260=this['_trajectoryLockedID'];_0x3ac969=$gamePlayer[_0x2074eb(0x334)]()[_0x2074eb(0x4c1)](_0x474260);break;case _0x2074eb(0x40a):const _0x55612b=this[_0x2074eb(0x35f)];_0x3ac969=$gameMap[_0x2074eb(0x40a)](_0x55612b);break;}else _0x4e9c70[_0x2074eb(0x4ca)]['createUpperWeatherLayer'][_0x2074eb(0x24b)](this),this['_baseSprite'][_0x2074eb(0x1dc)](this[_0x2074eb(0x43a)]);}if(_0x3ac969){if(_0x2074eb(0x543)===_0x2074eb(0x41c))this[_0x2074eb(0x307)](...arguments);else{this['ax']=_0x3ac969['screenX']()+this[_0x2074eb(0x50e)],this['ay']=_0x3ac969[_0x2074eb(0x5e1)]()+this[_0x2074eb(0x4fa)];return;}}this[_0x2074eb(0x3ab)]();},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x4db)]=function(_0x410d14){const _0x48c6dc=_0x502049;let _0xee5128=null;if(SceneManager[_0x48c6dc(0x57f)]())switch(this[_0x48c6dc(0x1bb)]){case'actor':const _0x1915fc=this[_0x48c6dc(0x35f)];_0xee5128=$gameActors[_0x48c6dc(0x168)](_0x1915fc);break;case _0x48c6dc(0x382):const _0x530fba=this['_trajectoryLockedID'];_0xee5128=$gameTroop['members']()[_0x530fba];break;case _0x48c6dc(0x16b):_0xee5128=BattleManager[_0x48c6dc(0x539)];break;case'target':_0xee5128=BattleManager[_0x48c6dc(0x2cc)];!_0xee5128&&BattleManager[_0x48c6dc(0x360)]&&('cXLQo'!==_0x48c6dc(0x2c0)?_0x2bc58d['power']=_0x4c7257[_0x48c6dc(0x2ab)]:_0xee5128=BattleManager['_targets'][0x0]);break;}if(_0xee5128){if('CuYvW'!=='aaAHv'){const _0x579db4=SceneManager[_0x48c6dc(0x595)][_0x48c6dc(0x1f8)];if(_0x579db4){const _0x173baa=_0x579db4[_0x48c6dc(0x4ff)](_0xee5128);if(_0x173baa){if(_0x48c6dc(0x54d)!=='aJTqq')this[_0x48c6dc(0x21b)](_0x158f8c),this[_0x48c6dc(0x2af)](_0xeca7b7);else{const _0x321729=new Point(_0x173baa['x'],_0x173baa['y']),_0x2dc0ff=_0x173baa[_0x48c6dc(0x433)][_0x48c6dc(0x181)](_0x321729);this['ax']=_0x173baa['x']-_0x2dc0ff['x']+this[_0x48c6dc(0x50e)],this['ay']=_0x173baa['y']-_0x2dc0ff['y']+this[_0x48c6dc(0x4fa)];return;}}}}else{const _0x2a0d79=this[_0x48c6dc(0x200)];return _0x2a0d79[_0x4018ad[_0x48c6dc(0x474)](_0x12803d['random']()*_0x2a0d79['length'])];}}this[_0x48c6dc(0x3ab)]();},Sprite_WeatherParticle[_0x502049(0x4ca)]['updatePositionTrajectorySpin']=function(){const _0x54b0c0=_0x502049;this[_0x54b0c0(0x5b0)]+=this[_0x54b0c0(0x452)],this[_0x54b0c0(0x4ee)]+=this['_spinAngle'];},Sprite_WeatherParticle[_0x502049(0x4ca)][_0x502049(0x1e0)]=function(){const _0xb31518=_0x502049,_0x7f6d0d=Graphics[_0xb31518(0x227)]+this[_0xb31518(0x30d)],_0x426d67=Graphics[_0xb31518(0x227)]+this[_0xb31518(0x3ec)];this['ax']+=Math[_0xb31518(0x239)](_0x7f6d0d*this[_0xb31518(0x304)])*this['_xSwayRange']/0x2,this['ay']+=Math[_0xb31518(0x524)](_0x426d67*this[_0xb31518(0x29d)])*this[_0xb31518(0x43e)]/0x2;},Spriteset_Base[_0x502049(0x4ca)]['createWeather']=function(){const _0x46b1aa=_0x502049;this[_0x46b1aa(0x43a)]?'ixkyt'==='KTBFU'?this['rebornCommonEvent']():this[_0x46b1aa(0x191)]=this[_0x46b1aa(0x43a)][_0x46b1aa(0x247)][0x0]:(this[_0x46b1aa(0x191)]=new Weather(),this[_0x46b1aa(0x1dc)](this[_0x46b1aa(0x191)]));},Spriteset_Base['prototype']['createNewWeatherLayers']=function(_0x5bb4eb,_0x34509a){const _0x1ef8d=_0x502049;if(!_0x5bb4eb)return;const _0x45f741=Weather[_0x1ef8d(0x5c0)];for(let _0x11218d=0x1;_0x11218d<=_0x45f741;_0x11218d++){const _0x466007=VisuMZ['WeatherEffects'][_0x1ef8d(0x22b)](_0x11218d,_0x34509a);_0x5bb4eb[_0x1ef8d(0x1dc)](_0x466007);}},Spriteset_Base[_0x502049(0x4ca)]['createLowerWeatherLayer']=function(){const _0x414fac=_0x502049;this['_lowerWeatherContainer']=new Sprite(),this['createNewWeatherLayers'](this[_0x414fac(0x1a5)],!![]),this[_0x414fac(0x286)][_0x414fac(0x1dc)](this[_0x414fac(0x1a5)]);},Spriteset_Base[_0x502049(0x4ca)][_0x502049(0x2f8)]=function(){const _0x3f6245=_0x502049;this['_upperWeatherContainer']=new Sprite(),this['createNewWeatherLayers'](this['_upperWeatherContainer'],![]),this[_0x3f6245(0x1dc)](this[_0x3f6245(0x43a)]);},Spriteset_Base['prototype'][_0x502049(0x343)]=function(){const _0x2e78a4=_0x502049;this[_0x2e78a4(0x4b1)](!![]),this[_0x2e78a4(0x4b1)](![]);},Spriteset_Base[_0x502049(0x4ca)][_0x502049(0x4b1)]=function(_0x52643b){const _0x50d669=_0x502049,_0x23dff2=_0x52643b?this[_0x50d669(0x1a5)]:this[_0x50d669(0x43a)];if(!_0x23dff2)return;for(const _0x36a209 of _0x23dff2['children']){if(!_0x36a209)continue;_0x36a209['updateData'](),_0x36a209['updatePosition']();}},VisuMZ[_0x502049(0x329)]['Spriteset_Map_createTilemap']=Spriteset_Map['prototype'][_0x502049(0x53a)],Spriteset_Map[_0x502049(0x4ca)][_0x502049(0x53a)]=function(){const _0x5c1ada=_0x502049;this[_0x5c1ada(0x26b)](),VisuMZ[_0x5c1ada(0x329)][_0x5c1ada(0x38f)]['call'](this),this[_0x5c1ada(0x2f8)]();},Spriteset_Map[_0x502049(0x4ca)][_0x502049(0x451)]=function(){const _0x123a07=_0x502049;Spriteset_Base[_0x123a07(0x4ca)][_0x123a07(0x451)][_0x123a07(0x24b)](this);},Spriteset_Map['prototype'][_0x502049(0x343)]=function(){const _0x18e431=_0x502049;Spriteset_Base[_0x18e431(0x4ca)][_0x18e431(0x343)][_0x18e431(0x24b)](this);},VisuMZ[_0x502049(0x329)]['Spriteset_Battle_createBattleFieldContainer']=Spriteset_Battle[_0x502049(0x4ca)]['createBattleFieldContainer'],Spriteset_Battle['prototype'][_0x502049(0x4a7)]=function(){const _0x463802=_0x502049;VisuMZ[_0x463802(0x329)][_0x463802(0x473)][_0x463802(0x24b)](this),this[_0x463802(0x26b)](),this[_0x463802(0x2f8)]();},Spriteset_Battle[_0x502049(0x4ca)]['createLowerWeatherLayer']=function(){const _0x372eec=_0x502049;Spriteset_Base[_0x372eec(0x4ca)][_0x372eec(0x26b)][_0x372eec(0x24b)](this),this['_baseSprite']['addChild'](this['_lowerWeatherContainer']);},Spriteset_Battle[_0x502049(0x4ca)][_0x502049(0x2f8)]=function(){const _0x556f01=_0x502049;Spriteset_Base[_0x556f01(0x4ca)][_0x556f01(0x2f8)][_0x556f01(0x24b)](this),this[_0x556f01(0x286)][_0x556f01(0x1dc)](this[_0x556f01(0x43a)]);},Spriteset_Battle['prototype'][_0x502049(0x451)]=function(){const _0x3a2755=_0x502049;Imported[_0x3a2755(0x2f4)]&&(_0x3a2755(0x269)===_0x3a2755(0x269)?this['createFrontEnvironmentContainer']():(_0x2b4cbc[_0x3a2755(0x3b3)](_0x3083ed,_0x10c334),_0x28f7d7[_0x3a2755(0x3bc)]=_0x3a2755(0x24d),_0x1242c3[_0x3a2755(0x329)][_0x3a2755(0x417)](_0x4ebaf0))),Spriteset_Base['prototype'][_0x3a2755(0x451)][_0x3a2755(0x24b)](this);},Spriteset_Battle[_0x502049(0x4ca)]['updateWeather']=function(){const _0x13453d=_0x502049;Spriteset_Base[_0x13453d(0x4ca)][_0x13453d(0x343)][_0x13453d(0x24b)](this);},VisuMZ['WeatherEffects'][_0x502049(0x511)]=Window_Options[_0x502049(0x4ca)]['addGeneralOptions'],Window_Options['prototype']['addGeneralOptions']=function(){const _0x4abc20=_0x502049;VisuMZ[_0x4abc20(0x329)][_0x4abc20(0x511)][_0x4abc20(0x24b)](this),this[_0x4abc20(0x330)]();},Window_Options[_0x502049(0x4ca)]['addWeatherDensityCommand']=function(){const _0x418250=_0x502049;if(!VisuMZ[_0x418250(0x329)][_0x418250(0x3b1)][_0x418250(0x4c2)][_0x418250(0x253)])return;const _0x53f1e1=TextManager[_0x418250(0x19c)],_0x28f139=_0x418250(0x19c);this[_0x418250(0x532)](_0x53f1e1,_0x28f139);},VisuMZ[_0x502049(0x329)]['Window_Options_isVolumeSymbol']=Window_Options[_0x502049(0x4ca)][_0x502049(0x189)],Window_Options[_0x502049(0x4ca)][_0x502049(0x189)]=function(_0x209f87){const _0x2cb49b=_0x502049;if(_0x209f87===_0x2cb49b(0x19c))return!![];return VisuMZ[_0x2cb49b(0x329)][_0x2cb49b(0x494)][_0x2cb49b(0x24b)](this,_0x209f87);},VisuMZ[_0x502049(0x329)][_0x502049(0x2d9)]=function(_0x2d0d1c){return _0x2d0d1c*(Math['PI']/0xb4);},VisuMZ[_0x502049(0x329)][_0x502049(0x5a4)]=function(_0x255f26){return _0x255f26*(0xb4/Math['PI']);},VisuMZ[_0x502049(0x329)][_0x502049(0x450)]=function(_0x2a82fa){return Math['randomInt'](_0x2a82fa+0x1)+Math['randomInt'](_0x2a82fa+0x1)-_0x2a82fa;},VisuMZ[_0x502049(0x329)][_0x502049(0x3bf)]=function(_0x5a73fc){const _0x3d8b8a=_0x502049;return Math[_0x3d8b8a(0x221)]()*_0x5a73fc+Math[_0x3d8b8a(0x221)]()*_0x5a73fc-_0x5a73fc;},VisuMZ['WeatherEffects'][_0x502049(0x53f)]=function(){const _0x551eec=_0x502049;this[_0x551eec(0x24a)]=[],this[_0x551eec(0x457)]=[];const _0x3ed34e=Weather[_0x551eec(0x5c0)];let _0x4dd4f1=!![];for(let _0x266af3=0x1;_0x266af3<=_0x3ed34e;_0x266af3++){const _0x4b425c=new Weather();_0x4b425c[_0x551eec(0x514)](_0x266af3,_0x4dd4f1),this[_0x551eec(0x24a)]['push'](_0x4b425c);}_0x4dd4f1=![];for(let _0xeddbe0=0x1;_0xeddbe0<=_0x3ed34e;_0xeddbe0++){const _0x40053a=new Weather();_0x40053a['setLayerData'](_0xeddbe0,_0x4dd4f1),this['_upperLayerSprites'][_0x551eec(0x4ac)](_0x40053a);}},VisuMZ[_0x502049(0x329)]['getWeatherLayerSprite']=function(_0x238ed3,_0x11d329){const _0x4a999d=_0x502049;if(this[_0x4a999d(0x24a)]===undefined)this[_0x4a999d(0x53f)]();if(this[_0x4a999d(0x457)]===undefined)this['createNewWeatherSprites']();_0x238ed3=(_0x238ed3||0x1)[_0x4a999d(0x4df)](0x1,Weather[_0x4a999d(0x5c0)]);const _0x4ebfa0=_0x238ed3-0x1;return _0x11d329?this[_0x4a999d(0x24a)][_0x4ebfa0]:this[_0x4a999d(0x457)][_0x4ebfa0];},VisuMZ['WeatherEffects'][_0x502049(0x29a)]=function(){const _0x16ac87=_0x502049;return{'type':_0x16ac87(0x3ff),'power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':_0x16ac87(0x221),'spawnOffsetX':0x0,'spawnLocationY':_0x16ac87(0x221),'spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':'Linear','opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':_0x16ac87(0x370),'opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':'straight','lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};},VisuMZ[_0x502049(0x329)]['setupEventCommandData']=function(_0x532b00){const _0x12588e=_0x502049;if(!_0x532b00)return;_0x532b00[_0x12588e(0x53e)]['opacity']=0xbe,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x170)]=0x1e;if(_0x532b00[_0x12588e(0x3bc)]==='rain'){if(_0x12588e(0x2a2)!==_0x12588e(0x2a2)){const _0x58680f=_0x48113d[_0x12588e(0x592)](_0x351d12-_0x4a2382)+_0x2d2b7a,_0x52451c=_0xf60074[_0x12588e(0x592)](_0xeff0b2-_0x438700)+_0x589e57;_0x52c977['paintOpacity']=_0x51555c[_0x12588e(0x592)](0x40)+0xc0,_0x4410e0[_0x12588e(0x295)](_0x58680f,_0x52451c,_0x3a0099,0x2,_0x48092a,_0x71041a),_0x582d41[_0x12588e(0x41f)](_0x58680f+_0x58f8fc,_0x52451c,_0x37224f,0x2,_0x3bf283);}else _0x532b00[_0x12588e(0x53e)]['lifespan']=0x24,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x441)]=0x82,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x170)]=0x1e,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x5af)]=0x50,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x354)]=0x14,(_0x532b00['dimmer'][_0x12588e(0x1d5)]=_0x12588e(0x385),_0x532b00[_0x12588e(0x289)]['opacityPerPower']=0x6,_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x5c6)]=0xc),_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x4ee)]=0xff,_0x532b00['trajectory'][_0x12588e(0x3a7)]=0x5;}else{if(_0x532b00['type']===_0x12588e(0x1af))_0x532b00['sprite'][_0x12588e(0x58e)]=0x1c,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x441)]=0x82,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x170)]=0x1e,_0x532b00['sprite'][_0x12588e(0x5af)]=0x78,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x354)]=0x28,(_0x532b00['dimmer']['color']=_0x12588e(0x5c1),_0x532b00[_0x12588e(0x289)][_0x12588e(0x415)]=0x6,_0x532b00['trajectory']['speed']=0x10),_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x4ee)]=0xf5,_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x3a7)]=0xa;else{if(_0x532b00[_0x12588e(0x3bc)]===_0x12588e(0x45b)){if(_0x12588e(0x2dc)===_0x12588e(0x5d0)){const _0x3d7459=this['_cached_WeatherEffects_PollutionClouds'];return _0x3d7459[_0x1f4a80[_0x12588e(0x474)](_0x1575cd[_0x12588e(0x221)]()*_0x3d7459[_0x12588e(0x19b)])];}else _0x532b00[_0x12588e(0x53e)]['lifespan']=0x78,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x441)]=0xa0,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x170)]=0x14,_0x532b00[_0x12588e(0x53e)][_0x12588e(0x5af)]=0x96,_0x532b00['sprite'][_0x12588e(0x354)]=0x28,(_0x532b00[_0x12588e(0x289)][_0x12588e(0x1d5)]=_0x12588e(0x300),_0x532b00[_0x12588e(0x289)][_0x12588e(0x415)]=0x6,_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x5c6)]=0x2),_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x4ee)]=0xdc,_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x3a7)]=0xf,_0x532b00[_0x12588e(0x4a6)][_0x12588e(0x58d)]=0x2,_0x532b00[_0x12588e(0x4a6)]['xSwaySpeed']=0.01;}}}},VisuMZ['WeatherEffects'][_0x502049(0x417)]=function(_0x4eb418){const _0x2b86a4=_0x502049,_0x2232d7=VisuMZ[_0x2b86a4(0x329)][_0x2b86a4(0x29a)]();this[_0x2b86a4(0x2d3)](_0x2232d7,_0x4eb418),this['applyPluginCmdSettingsCustom'](_0x2232d7,_0x4eb418),this['applyPluginCmdSettingsSpecificCases'](_0x2232d7,_0x4eb418),this[_0x2b86a4(0x3c1)](_0x2232d7,_0x4eb418),this[_0x2b86a4(0x5ea)](_0x2232d7,_0x4eb418);},VisuMZ[_0x502049(0x329)]['isDebugAllOption']=function(){const _0x1c4abd=_0x502049;return![];if(!$gameTemp[_0x1c4abd(0x194)]())return![];return Input[_0x1c4abd(0x3df)](_0x1c4abd(0x1d6))&&Input[_0x1c4abd(0x3df)](_0x1c4abd(0x5d3));},VisuMZ['WeatherEffects'][_0x502049(0x2d3)]=function(_0x50c234,_0xf69e74){const _0x2d41d0=_0x502049;_0x50c234[_0x2d41d0(0x3bc)]=_0xf69e74[_0x2d41d0(0x3bc)]||_0x2d41d0(0x3ff),_0x50c234[_0x2d41d0(0x2ab)]=(_0xf69e74[_0x2d41d0(0x2ab)]||0x1)[_0x2d41d0(0x4df)](0x1,0x9),this[_0x2d41d0(0x256)]()&&(_0x2d41d0(0x225)==='IHyxG'?_0x50c234[_0x2d41d0(0x2ab)]=0x9:(this['_lowerWeatherContainer']=new _0x111a38(),this['createNewWeatherLayers'](this[_0x2d41d0(0x1a5)],!![]),this[_0x2d41d0(0x286)][_0x2d41d0(0x1dc)](this['_lowerWeatherContainer'])));},VisuMZ[_0x502049(0x329)][_0x502049(0x59f)]=function(_0x25f54b,_0x2d2479){const _0xaf7a91=_0x502049,_0x4fbf86=['sprite',_0xaf7a91(0x289),_0xaf7a91(0x1ad),_0xaf7a91(0x19f),_0xaf7a91(0x4a6)];for(const _0x5e704d of _0x4fbf86){if(!_0x25f54b[_0x5e704d])continue;if(!_0x2d2479[_0xaf7a91(0x1b2)][_0x5e704d])continue;this[_0xaf7a91(0x469)](_0x25f54b[_0x5e704d],_0x2d2479['Custom'][_0x5e704d]);}},VisuMZ[_0x502049(0x329)]['copyPluginCmdCustomSettings']=function(_0x1adf0d,_0x4a2fa4){for(const _0x554801 in _0x1adf0d){if(_0x4a2fa4[_0x554801]===undefined)continue;_0x1adf0d[_0x554801]=_0x4a2fa4[_0x554801];}},VisuMZ[_0x502049(0x329)][_0x502049(0x206)]=function(_0x2823b1,_0x5d6d4f){const _0x26d147=_0x502049;if(_0x2823b1[_0x26d147(0x4a6)]['type']==='event'&&_0x2823b1[_0x26d147(0x4a6)][_0x26d147(0x429)]<=0x0){const _0x1c3389=$gameTemp['getLastPluginCommandInterpreter']();_0x2823b1[_0x26d147(0x4a6)][_0x26d147(0x429)]=_0x1c3389['eventId']();}},VisuMZ[_0x502049(0x329)][_0x502049(0x3c1)]=function(_0xfbe24d,_0x4bdb68){const _0x40cb1c=_0x502049;let _0x570eaa=_0x4bdb68['Layer'][_0x40cb1c(0x3b4)](_0xac7296=>(Number(_0xac7296)||0x1)[_0x40cb1c(0x4df)](0x1,0xa)),_0x65eec8=_0x4bdb68[_0x40cb1c(0x51d)];_0xfbe24d['duration']=_0x4bdb68[_0x40cb1c(0x55f)]||0x1;this['isDebugAllOption']()&&(_0x40cb1c(0x288)!==_0x40cb1c(0x288)?(_0x403a3f[_0x40cb1c(0x3b3)](_0x2a0150,_0x567f31),_0x222246['type']=_0x40cb1c(0x512),_0x597dd8[_0x40cb1c(0x329)][_0x40cb1c(0x417)](_0xb8ede)):(_0x570eaa=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0x65eec8=_0x40cb1c(0x560)));for(const _0xfccb2e of _0x570eaa){if('mGihq'===_0x40cb1c(0x1a1)){const _0x5c47d3=this[_0x40cb1c(0x177)];return _0x5c47d3[_0x5c2335['floor'](_0x335b04[_0x40cb1c(0x221)]()*_0x5c47d3['length'])];}else['upper',_0x40cb1c(0x560)][_0x40cb1c(0x188)](_0x65eec8)&&(_0x40cb1c(0x1e1)!==_0x40cb1c(0x317)?$gameScreen[_0x40cb1c(0x465)](_0xfccb2e,![],_0xfbe24d):_0x5f02ea[_0x40cb1c(0x4ca)][_0x40cb1c(0x343)][_0x40cb1c(0x24b)](this)),[_0x40cb1c(0x2cd),_0x40cb1c(0x560)][_0x40cb1c(0x188)](_0x65eec8)&&$gameScreen[_0x40cb1c(0x465)](_0xfccb2e,!![],_0xfbe24d);}},VisuMZ['WeatherEffects'][_0x502049(0x5ea)]=function(_0x3ef5ba,_0x172c30){const _0x7c0445=_0x502049;if(!_0x172c30['WaitForCompletion'])return;const _0x543233=$gameTemp[_0x7c0445(0x3f5)]();_0x543233&&(_0x7c0445(0x358)!==_0x7c0445(0x5bf)?_0x543233[_0x7c0445(0x392)](_0x3ef5ba[_0x7c0445(0x55f)]||0x1):([_0x7c0445(0x5a1),_0x7c0445(0x560)][_0x7c0445(0x188)](_0x5ebc01)&&_0x1d19a6[_0x7c0445(0x465)](_0x1db977,![],_0x5e4576),[_0x7c0445(0x2cd),_0x7c0445(0x560)][_0x7c0445(0x188)](_0x45870a)&&_0x46e35a[_0x7c0445(0x465)](_0x5c1528,!![],_0x4121e5)));};