//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.39;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.39] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * As of Message Core version 1.53, we've decided to add support for TSV.
 * 
 * This is because we have done our research and decided that CSV's are too
 * restricted to use due to their default nature of wanting to use commas as
 * separators. Thus, we've decided to switch to TSV where the default separator
 * is a tab space, something that is almost never used in RPG Maker text.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV/TSV file that will contain all of the text
 * used to translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV/TSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv/tsv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * '''IMPORTANT!''' The separator used for the CSV file must be a semicolon (;)
 * and not a comma (,) as to reduce the amount of punctuation conflicts. Keep
 * this in mind as most CSV editors will default to comma (,) instead of the
 * semicolon (;) for their separator.
 * 
 * ---
 * 
 * === How to Edit the Language CSV/TSV ===
 * 
 * The Language CSV/TSV is structured as a normal CSV/TSV file would be, which
 * also means it can be modified in programs like Microsoft Excel or Google
 * Sheets. We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV/TSV file in programs like notepad
 * directly due to the way certain things like commas (,) and tabs are handled
 * and how easy it is to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV/TSV file via the spreadsheet editor (Excel or
 * Google Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== How to Load the CSV/TSV in Google Sheets ====
 * 
 * If you are using Google Sheets and wish to edit the CSV/TSV without it
 * converting all the separators into commas, here's what you do:
 * 
 * #1. Go to "https://sheets.google.com"
 * #2. Create a "Blank spreadsheet"
 * #3. File > Import > Upload > Select the CSV/TSV file that was created in
 *     your game project's /data/ folder. You may need to select "All Files"
 *     for file type if uploading a TSV.
 * #4. For "Separator Type", if you are using CSV, change it to "Custom" and
 *     insert the Semicolon ";". Otherwise, if you are using TSV, select "tab"
 *     as your separator type.
 * #5. Uncheck "Convert text to numbers, dates, and formulas"
 * 
 * ==== How to Load the CSV/TSV in VS Code ===
 * 
 * #1. Go to "https://code.visualstudio.com/"
 * #2. Download and install it
 * #3. Open up VS Code and go to View > Extensions
 * #4. Search for an extension called "Edit CSV"
 * #5. Load the CSV/TSV file into VS Code and view with the CSV Editor
 * #6. Click the button that says "Edit CSV" in the upper right
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons (CSV Only) ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV/TSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV/TSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 * 
 * === Naming Weapon Types, Armor Types, Equip Types, Item Categories ===
 * 
 * You might have noticed that if you've decided to use \tl{keyName} for weapon
 * or other database types, other parts of the game will error out. Don't
 * worry, for these, you don't have to change the currently used database name.
 * Go straight to the CSV/TSV and insert in a new key for that particular
 * database name. For example, the equip type "Accessory" will use "Accessory"
 * as the automatic key to look for a translated phrase. If there isn't any in
 * the CSV/TSV file, then the default database text entry will be used.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 * 
 * While these text codes are available globally, they are best suited for use
 * in the message window or any other window that does not change its contents.
 * The reason being is because the picture drawn is drawn into the background
 * of the window.
 * 
 * Therefore, we do not recommend using this in windows that change contents
 * often like Help Windows or Quest Descriptions. Instead, we recommend using
 * icons instead.
 * 
 * As of the version 1.53 update, the Help Window now supports both of these
 * text codes. However, we still recommend using icons over using pictures as
 * there will be loading delays.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Map Name)
 * ------------------   -------------------------------------------------------
 * <left>               Makes map name align to left side of screen.
 * <center>             Makes map name align to horizontally center of screen.
 * <right>              Makes map name align to right side of screen.
 * 
 * <top>                Makes map name align to top of screen.
 * <middle>             Makes map name align to vertically middle of screen.
 * <bottom>             Makes map name align to bottom of screen.
 * 
 * <X: +n>              Adjusts the horizontal position of map name by n.
 * <X: -n>              Adjusts the horizontal position of map name by n.
 * 
 * <Y: +n>              Adjusts the vertical position of map name by n.
 * <Y: -n>              Adjusts the vertical position of map name by n.
 * 
 * Note: All of these text codes require VisuMZ_0_CoreEngine installed and its
 * "Map Name Text Code" plugin parameter enabled.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <Caps>               Makes all text after this capitalized.
 *                      Turns off other auto-text case modes.
 *                      ie: "hello world" becomes "HELLO WORLD"
 * </Caps>              Turns off auto text-casing effects.
 * 
 * <Upper>              Makes the first letter of any word after a space to be
 *                      capitalized. Other letters are left alone.
 *                      Turns off other auto-text case modes.
 *                      ie. "old mcDonald" becomes "Old McDonald"
 * </Upper>             Turns off auto text-casing effects.
 * 
 * <Lower>              Makes all text after this lowercase.
 *                      Turns off other auto-text case modes.
 *                      ie: "THE QUICK BROWN FOX" becomes "the quick brown fox"
 * </Lower>             Turns off auto text-casing effects.
 * 
 * <Alt>                Makes all text after this alternate between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Hello" becomes "HeLlO"
 * </Alt>               Turns off auto text-casing effects.
 * 
 * <Chaos>              Makes all text after this randomize between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Wassup" becomes "waSsUP" or "WasSuP"
 * </Chaos>             Turns off auto text-casing effects.
 * 
 * **Clarity:** In case you're wondering, the text codes </Caps>, </Upper>,
 * </Lower>, </Alt>, and </Chaos> all do the same thing and can be used
 * interchangeably with each other. For example, you can do this:
 * <Caps>hello world</Lower> and it would still accomplish the same effect, but
 * you won't do that because you're not a monster of a developer.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * Note: These text codes only work with the Message Window. Keep in mind that
 *   even if some windows might look like the Message Window, it may not
 *   necessarily be one.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Font Manager
 * ============================================================================
 *
 * Custom fonts that aren't the message or number fonts cannot be used without
 * registration. If you try to use custom fonts in RPG Maker MZ without
 * registering their font family first, you will find out that they will not
 * work. These plugin parameters allow you to register your game's custom fonts
 * here.
 * 
 * ---
 * 
 * Settings:
 * 
 *   Font Family:
 *   - This will be what's used by RPG Maker MZ and plugins to reference this
 *     specific font.
 *   - NO filename extensions!
 * 
 *   Filename:
 *   - What is the filename of the custom font you would like to use?
 *   - Located inside the project's "fonts" folder.
 * 
 * ---
 * 
 * Examples:
 * 
 *   Font Family: WildWords
 *   Filename: WildWords-Regular.ttf
 * 
 * How you would use this in other plugins as a preface to the font face or
 * font family would be to use "WildWords" as the font face/family name. Then
 * RPG Maker MZ will use its own innate FontManager to refer that to the
 * "WildWords-Regular.ttf" file found in the game's "fonts" folder.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   File Type:
 *   - Which file type do you wish to use?
 *     - CSV (Legacy)
 *     - TSV (Recommended)
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 *   TSV Filename:
 *   - What is the filename of the TSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Fonts
 * ============================================================================
 *
 * Different default fonts used for different languages. This allows different
 * stylistic choices to be made for different languages in case the current
 * font you're using doesn't have support for other language types.
 * 
 * Keep in mind that players can override this with Options Core if they select
 * a text option other than 'Default' for the 'Text Font' option.
 * 
 * Make sure any new custom fonts used for different languages are registered
 * with the 'Custom Font Manager' found in this plugin's Plugin Parameters.
 *
 * ---
 * 
 * Languages:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - What font face is used for this language?
 *   - Make sure it is registered under Custom Font Manager.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Images
 * ============================================================================
 *
 * Allows different images to be used when different languages are used. This
 * is for images that have text on it that you want to appear in different
 * languages based on the text language selected by the player.
 * 
 * There are two ways this works:
 * 
 *   #1: Folder Name
 *   - The name of the folder containing those images will be named something
 *     like "Scrolls[XX]"
 *   - When a different language is picked, like English, it can reference
 *     the 'Scrolls[EN]' folder instead. If Japanese is used, it can refer to
 *     the 'Scrolls[JP]' folder as well.
 *   - The text used to replace the [XX] in the folder name can be determined
 *     in the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 * 
 *   #2: Filename
 *   - The filename of the image to be translated can be named something like
 *     ReidProfile[XX].png
 *   - When a different language is picked, like English, it will reference the
 *     'ReidProfile[EN].png' image instead. For Japanese, it will reference the
 *     'ReidProfile[JP].png' as well.
 *   - The text used to replace the [XX] in the filename can be determined in
 *     the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 *
 * ---
 * 
 * Settings
 * 
 *   Convert Default?
 *   - ON: Default language uses converted marker.
 *   - OFF: Default languages uses [XX] as marker.
 * 
 * Here's an explanation of what this does:
 * 
 *   - The default language picked is English and the player has English picked
 *     as their desired language.
 *   - If the "Convert Default?" Plugin Parameter is ON, then 'ReidProfile[XX]'
 *     will reference and look for the 'ReidProfile[EN]' image.
 *   - If the "Convert Default?" Plugin Parameter is OFF, 'ReidProfile[XX]' is
 *     then used for the English language instead of 'ReidProfile[EN]'.
 *     - This is to avoid duplicate images and save on file space.
 *   - The reasoning behind the [XX] is that there needs to be an anchor image
 *     used for the RPG Maker MZ client in order to have something to reference
 *     before branching out to different languages.
 * 
 * ---
 * 
 * Languages 
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - This text will replace [XX] with in image folder names and filenames
 *     when this language is selected.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.53: February 20, 2025, 2025
 * * Bug Fixes!
 * ** Fixed an error with text language translations not working properly for
 *    the last listed language in the translation sheet. Fix made by Irina.
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Text Language Information section included for TSV.
 * ** Updated text code note for \picture<x> and \CenterPicture<x>
 * *** As of the version 1.53 update, the Help Window now supports both of
 *     these text codes. However, we still recommend using icons over using
 *     pictures as there will be loading delays.
 * * Plugin Parameters
 * ** New plugin parameters added by Irina:
 * *** Parameters > Text Language Settings > File Type:
 * **** Which file type do you wish to use?
 * ***** CSV (Legacy)
 * ***** TSV (Recommended)
 * *** Parameters > Text Language Settings > TSV Filename
 * **** What is the filename of the TSV file to read from?
 * **** Located within the project's /data/ folder.
 * * Feature Updates!
 * ** We have done our research and decided that CSV's are too restricted to
 *    use due to their default nature of wanting to use commas as separators.
 *    Thus, we've decided to switch to TSV where the default separator is a tab
 *    space, something that is almost never used in RPG Maker text.
 * ** CSV support will remain as a legacy option but TSV will be recommended as
 *    the main text languaging switching filetype.
 * ** When creating a new Language TSV, the plugin will check if a Language CSV
 *    exists and asks you if you wish to convert the existing CSV to TSV. The
 *    original CSV file will remain intact as a backup.
 * 
 * Version 1.52: December 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Arisu:
 * *** <left>
 * *** <center>
 * *** <right>
 * **** When used in the Map Name, instead of aligning the text which is
 *      centered by default, the text code will align the horizontal position
 *      of the name displayed on the screen.
 * *** <top>
 * *** <middle>
 * *** <bottom>
 * **** When used in the Map Name, the text code will align the vertical
 *      position of the name displayed on the screen.
 * *** <X: +n>
 * *** <X: -n>
 * *** <Y: +n>
 * *** <Y: -n>
 * **** Adjusts the horizontal/vertical position of map name by 'n' value.
 * *** All of these text codes require VisuMZ_0_CoreEngine installed and its
 *     "Map Name Text Code" plugin parameter enabled.
 * 
 * Version 1.51: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a bug where \LastGainObj text code did not work with text language
 *    key codes. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added note to Text Language Information > How to Enable Switching
 * *** IMPORTANT! The separator used for the CSV file must be a semicolon (;)
 *     and not a comma (,) as to reduce the amount of punctuation conflicts.
 *     Keep this in mind as most CSV editors will default to comma (,) instead
 *     of the semicolon (;) for their separator.
 * ** Added note to Text Language Information > Naming Weapon Types, etc:
 * *** You might have noticed that if you've decided to use \tl{keyName} for
 *     weapon or other database types, other parts of the game will error out.
 *     Don't worry, for these, you don't have to change the currently used
 *     database name. Go straight to the CSV and insert in a new key for that
 *     particular database name. For example, the equip type "Accessory" will
 *     use "Accessory" as the automatic key to look for a translated phrase. If
 *     there isn't any in the CSV file, then the default database text entry
 *     will be used.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Text Language Settings > Language Fonts
 * **** Different default fonts used for different languages. This allows
 *      different stylistic choices to be made for different languages in case
 *      the current font you're using doesn't have support for other language
 *      types.
 * **** Keep in mind that players can override this with Options Core if they
 *      select a text option other than 'Default' for the 'Text Font' option.
 * **** Make sure any new custom fonts used for different languages are
 *      registered with the 'Custom Font Manager' found in this plugin's Plugin
 *      Parameters.
 * *** Parameters > Text Language Settings > Language Images
 * **** Allows different images to be used when different languages are used.
 *      This is for images that have text on it that you want to appear in
 *      different languages based on the text language selected by the player.
 * 
 * Version 1.50: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina:
 * *** <Caps> </Caps>
 * *** <Upper> </Upper>
 * *** <Lower> </Lower>
 * **** Auto-text case textcodes will automatically adjust text inserted
 *      between them to respectively be completely capitalized, first-letter
 *      capitalized, or completely lowercase.
 * **** More information in the help file.
 * *** <Alt> </Alt>
 * **** Alternates between uppercase and lowercase for letters.
 * *** <Chaos> </Chaos>
 * **** Randomly uses uppercase and lowercase for letters.
 * 
 * 
 * Version 1.49: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where using text codes to get database object names did
 *    not apply translated text.
 * * Documentation Update!
 * ** Added note for Message Window Only text code effects:
 * *** These text codes only work with the Message Window. Keep in mind that
 *     even if some windows might look like the Message Window, it may not
 *     necessarily be one.
 * * Feature Update!
 * ** Added a failsafe for when Choice List Window doesn't have any viable
 *    options (due to being hidden or disabled). Update made by Irina.
 * ** Added a failsafe for Language CSV when empty rows are added.
 * ** Updated some default Text Code actions in order to make sure they're only
 *    used by the Message Window and not anything else. Update made by Irina.
 * 
 * Version 1.48: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for help description checks parsing from objects without
 *    help descriptions normally. Fix made by Irina.
 * 
 * Version 1.47: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Custom Font Manager
 * **** Register custom fonts here.
 * **** Custom fonts that aren't the message or number fonts cannot be used
 *      without registration.
 * **** See help file for more information.
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @param MessageCore
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
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param CustomFonts:arraystruct
 * @text Custom Font Manager
 * @type struct<CustomFont>[]
 * @desc Register custom fonts here. Custom fonts that aren't the
 * message or number fonts cannot be used without this.
 * @default []
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = data[0].trim();\\\\n        const index = parseInt(data[1] || '0');\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = $gameMessage.faceName();\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing && this.constructor === Window_Message) {\\\\n        this.setTextDelay(delay);\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"heart\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"3\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param LanguageFonts:struct
 * @text Language Fonts
 * @parent Localization:struct
 * @type struct<LanguageFonts>
 * @desc Different default fonts used for different languages.
 * Players can override this with Options Core.
 * @default {"Bengali:str":"rmmz-mainfont","Chinese(Simplified):str":"rmmz-mainfont","Chinese(Traditional):str":"rmmz-mainfont","Czech:str":"rmmz-mainfont","Danish:str":"rmmz-mainfont","Dutch:str":"rmmz-mainfont","English:str":"rmmz-mainfont","Finnish:str":"rmmz-mainfont","French:str":"rmmz-mainfont","German:str":"rmmz-mainfont","Greek:str":"rmmz-mainfont","Hindi:str":"rmmz-mainfont","Hungarian:str":"rmmz-mainfont","Indonesian:str":"rmmz-mainfont","Italian:str":"rmmz-mainfont","Japanese:str":"rmmz-mainfont","Korean:str":"rmmz-mainfont","Norwegian:str":"rmmz-mainfont","Polish:str":"rmmz-mainfont","Portuguese:str":"rmmz-mainfont","Romanian:str":"rmmz-mainfont","Russian:str":"rmmz-mainfont","Slovak:str":"rmmz-mainfont","Spanish:str":"rmmz-mainfont","Swedish:str":"rmmz-mainfont","Tamil:str":"rmmz-mainfont","Thai:str":"rmmz-mainfont","Turkish:str":"rmmz-mainfont"}
 *
 * @param LanguageImages:struct
 * @text Language Images
 * @parent Localization:struct
 * @type struct<LanguageImages>
 * @desc Allows different images to be used when different
 * languages are used. See help for more information.
 * @default {"ConvertDefault:eval":"false","Languages":"","Bengali:str":"[XX]","Chinese(Simplified):str":"[XX]","Chinese(Traditional):str":"[XX]","Czech:str":"[XX]","Danish:str":"[XX]","Dutch:str":"[XX]","English:str":"[XX]","Finnish:str":"[XX]","French:str":"[XX]","German:str":"[XX]","Greek:str":"[XX]","Hindi:str":"[XX]","Hungarian:str":"[XX]","Indonesian:str":"[XX]","Italian:str":"[XX]","Japanese:str":"[XX]","Korean:str":"[XX]","Norwegian:str":"[XX]","Polish:str":"[XX]","Portuguese:str":"[XX]","Romanian:str":"[XX]","Russian:str":"[XX]","Slovak:str":"[XX]","Spanish:str":"[XX]","Swedish:str":"[XX]","Tamil:str":"[XX]","Thai:str":"[XX]","Turkish:str":"[XX]"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Font Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomFont:
 *
 * @param FontFamily:str
 * @text Font Family
 * @desc This will be what's used by RPG Maker MZ and plugins to
 * reference this specific font. NO filename extensions!
 * @default Unnamed
 *
 * @param Filename:str
 * @text Filename
 * @desc What is the filename of the font you would like to use?
 * Located inside the project's "fonts" folder.
 * @default Unnamed.ttf
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param LangFiletype:str
 * @text File Type
 * @parent Main
 * @type select
 * @option CSV (Legacy)
 * @value csv
 * @option TSV (Recommended)
 * @value tsv
 * @desc Which file type do you wish to use?
 * @default tsv
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
 *
 * @param TsvFilename:str
 * @text TSV Filename
 * @parent Main
 * @desc What is the filename of the TSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.tsv
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
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
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Language Fonts Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageFonts:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Czech:str
 * @text Czech
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Danish:str
 * @text Danish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param English:str
 * @text English
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param French:str
 * @text French
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param German:str
 * @text German
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Greek:str
 * @text Greek
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Italian:str
 * @text Italian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Korean:str
 * @text Korean
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Polish:str
 * @text Polish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Russian:str
 * @text Russian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Thai:str
 * @text Thai
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 *
 */
/* ----------------------------------------------------------------------------
 * Language Images Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageImages:
 *
 * @param ConvertDefault:eval
 * @text Convert Default?
 * @type boolean
 * @on Convert
 * @off Don't
 * @desc ON: Default language uses converted marker.
 * OFF: Default languages uses [XX] as marker.
 * @default false
 *
 * @param Languages
 * @text Languages
 *
 * @param Bengali:str
 * @text Bengali
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Czech:str
 * @text Czech
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Danish:str
 * @text Danish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param English:str
 * @text English
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param French:str
 * @text French
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param German:str
 * @text German
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Greek:str
 * @text Greek
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Italian:str
 * @text Italian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Korean:str
 * @text Korean
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Polish:str
 * @text Polish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Russian:str
 * @text Russian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Thai:str
 * @text Thai
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x93f31e) {
  return _0x93f31e.status && _0x93f31e.description.includes("[MessageCore]");
})[0x0];
VisuMZ.MessageCore.Settings = VisuMZ.MessageCore.Settings || {};
VisuMZ.ConvertParams = function (_0x10aaa4, _0x4d0bd9) {
  for (const _0xcdc9b7 in _0x4d0bd9) {
    if (_0xcdc9b7.match(/(.*):(.*)/i)) {
      const _0x24f7f7 = String(RegExp.$1);
      const _0x3f683e = String(RegExp.$2).toUpperCase().trim();
      let _0x23e49f;
      let _0x1918e8;
      let _0x56ab23;
      switch (_0x3f683e) {
        case "NUM":
          _0x23e49f = _0x4d0bd9[_0xcdc9b7] !== '' ? Number(_0x4d0bd9[_0xcdc9b7]) : 0x0;
          break;
        case 'ARRAYNUM':
          _0x1918e8 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : [];
          _0x23e49f = _0x1918e8.map(_0x506928 => Number(_0x506928));
          break;
        case "EVAL":
          _0x23e49f = _0x4d0bd9[_0xcdc9b7] !== '' ? eval(_0x4d0bd9[_0xcdc9b7]) : null;
          break;
        case 'ARRAYEVAL':
          _0x1918e8 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : [];
          _0x23e49f = _0x1918e8.map(_0xba02f2 => eval(_0xba02f2));
          break;
        case "JSON":
          _0x23e49f = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : '';
          break;
        case "ARRAYJSON":
          _0x1918e8 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : [];
          _0x23e49f = _0x1918e8.map(_0x169d53 => JSON.parse(_0x169d53));
          break;
        case "FUNC":
          _0x23e49f = _0x4d0bd9[_0xcdc9b7] !== '' ? new Function(JSON.parse(_0x4d0bd9[_0xcdc9b7])) : new Function("return 0");
          break;
        case 'ARRAYFUNC':
          _0x1918e8 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : [];
          _0x23e49f = _0x1918e8.map(_0xb72f8 => new Function(JSON.parse(_0xb72f8)));
          break;
        case "STR":
          _0x23e49f = _0x4d0bd9[_0xcdc9b7] !== '' ? String(_0x4d0bd9[_0xcdc9b7]) : '';
          break;
        case "ARRAYSTR":
          _0x1918e8 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : [];
          _0x23e49f = _0x1918e8.map(_0xce398b => String(_0xce398b));
          break;
        case "STRUCT":
          _0x56ab23 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : {};
          _0x10aaa4[_0x24f7f7] = {};
          VisuMZ.ConvertParams(_0x10aaa4[_0x24f7f7], _0x56ab23);
          continue;
        case "ARRAYSTRUCT":
          _0x1918e8 = _0x4d0bd9[_0xcdc9b7] !== '' ? JSON.parse(_0x4d0bd9[_0xcdc9b7]) : [];
          _0x23e49f = _0x1918e8.map(_0x35bdfb => VisuMZ.ConvertParams({}, JSON.parse(_0x35bdfb)));
          break;
        default:
          continue;
      }
      _0x10aaa4[_0x24f7f7] = _0x23e49f;
    }
  }
  return _0x10aaa4;
};
(_0x4fe03d => {
  const _0x5671cb = _0x4fe03d.name;
  for (const _0x159ee7 of dependencies) {
    if (!Imported[_0x159ee7]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x5671cb, _0x159ee7));
      SceneManager.exit();
      break;
    }
  }
  const _0x427269 = _0x4fe03d.description;
  if (_0x427269.match(/\[Version[ ](.*?)\]/i)) {
    const _0x29eac5 = Number(RegExp.$1);
    if (_0x29eac5 !== VisuMZ.MessageCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x5671cb, _0x29eac5));
      SceneManager.exit();
    }
  }
  if (_0x427269.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x466f4f = Number(RegExp.$1);
    if (_0x466f4f < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x5671cb, _0x466f4f, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x466f4f, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.MessageCore.Settings, _0x4fe03d.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "ChoiceWindowDistance", _0x354ef4 => {
  VisuMZ.ConvertParams(_0x354ef4, _0x354ef4);
  const _0x3b3242 = Number(_0x354ef4.Distance) || 0x0;
  $gameSystem.setChoiceMessageDistance(_0x3b3242);
});
PluginManager.registerCommand(pluginData.name, 'ChoiceWindowProperties', _0x4a5c9a => {
  VisuMZ.ConvertParams(_0x4a5c9a, _0x4a5c9a);
  const _0x4e8f6a = _0x4a5c9a.LineHeight || $gameSystem.getChoiceListLineHeight() || 0x1;
  const _0x574811 = _0x4a5c9a.MinWidth ?? 0x60;
  const _0x5a9e65 = _0x4a5c9a.MaxRows || $gameSystem.getChoiceListMaxRows() || 0x1;
  const _0x49a835 = _0x4a5c9a.MaxCols || $gameSystem.getChoiceListMaxColumns() || 0x1;
  const _0x1f8d98 = _0x4a5c9a.TextAlign.toLowerCase() || "default";
  $gameSystem.setChoiceListLineHeight(_0x4e8f6a);
  $gameSystem.setChoiceListMinChoiceWidth(_0x574811);
  $gameSystem.setChoiceListMaxRows(_0x5a9e65);
  $gameSystem.setChoiceListMaxColumns(_0x49a835);
  $gameSystem.setChoiceListTextAlign(_0x1f8d98);
});
PluginManager.registerCommand(pluginData.name, "MessageWindowProperties", _0xa88ab0 => {
  VisuMZ.ConvertParams(_0xa88ab0, _0xa88ab0);
  const _0x35038d = _0xa88ab0.Rows || $gameSystem.getMessageWindowRows() || 0x1;
  const _0x1d4fc3 = _0xa88ab0.Width || $gameSystem.getMessageWindowWidth() || 0x1;
  $gameTemp._centerMessageWindow = true;
  const _0xf21c10 = _0xa88ab0.WordWrap.toLowerCase();
  $gameSystem.setMessageWindowRows(_0x35038d);
  $gameSystem.setMessageWindowWidth(_0x1d4fc3);
  if (["true", 'false'].includes(_0xf21c10)) {
    $gameSystem.setMessageWindowWordWrap(eval(_0xf21c10));
  }
  const _0xea284e = SceneManager._scene._messageWindow;
  if (_0xea284e) {
    _0xea284e.resetWordWrap();
    _0xea284e.updateDimensions();
    _0xea284e.createContents();
  }
});
PluginManager.registerCommand(pluginData.name, "MessageWindowXyOffsets", _0xcb4a47 => {
  VisuMZ.ConvertParams(_0xcb4a47, _0xcb4a47);
  $gameSystem.setMessageWindowXyOffsets(_0xcb4a47.OffsetX, _0xcb4a47.OffsetY);
  const _0x323998 = SceneManager._scene._messageWindow;
  if (_0x323998) {
    _0x323998.resetWordWrap();
    _0x323998.updateDimensions();
    _0x323998.createContents();
  }
});
PluginManager.registerCommand(pluginData.name, "SelectWeapon", _0x12fe43 => {
  VisuMZ.ConvertParams(_0x12fe43, _0x12fe43);
  $gameMessage.setWeaponChoice(_0x12fe43.VariableID || 0x0, _0x12fe43.WeaponTypeID || 0x0);
  const _0x295613 = $gameTemp.getLastPluginCommandInterpreter();
  if (_0x295613) {
    _0x295613.setWaitMode('message');
  }
});
PluginManager.registerCommand(pluginData.name, "SelectArmor", _0x734788 => {
  VisuMZ.ConvertParams(_0x734788, _0x734788);
  $gameMessage.setArmorChoice(_0x734788.VariableID || 0x0, _0x734788.ArmorTypeID || 0x0, _0x734788.EquipTypeID || 0x0);
  const _0xd72959 = $gameTemp.getLastPluginCommandInterpreter();
  if (_0xd72959) {
    _0xd72959.setWaitMode("message");
  }
});
PluginManager.registerCommand(pluginData.name, "SelectSkill", _0x3e3254 => {
  VisuMZ.ConvertParams(_0x3e3254, _0x3e3254);
  $gameMessage.setSkillChoice(_0x3e3254.VariableID || 0x0, _0x3e3254.ActorID || 0x0, _0x3e3254.SkillTypeID || 0x0);
  const _0x32fdab = $gameTemp.getLastPluginCommandInterpreter();
  if (_0x32fdab) {
    _0x32fdab.setWaitMode("message");
  }
});
PluginManager.registerCommand(pluginData.name, "PictureTextChange", _0x276b10 => {
  VisuMZ.ConvertParams(_0x276b10, _0x276b10);
  const _0x210e5a = _0x276b10.PictureIDs || [];
  const _0x50ef2f = _0x276b10.Padding || 0x0;
  const _0x2f7a31 = ["upperleft", 'up', "upperright", 'left', "center", "right", "lowerleft", "down", "lowerright"];
  for (const _0xeff825 of _0x210e5a) {
    $gameScreen.setPictureTextBuffer(_0xeff825, _0x50ef2f);
    for (const _0x6d3b64 of _0x2f7a31) {
      if (_0x276b10[_0x6d3b64] === undefined) {
        continue;
      }
      $gameScreen.setPictureText(_0xeff825, _0x276b10[_0x6d3b64], _0x6d3b64);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "PictureTextErase", _0x44c3c8 => {
  VisuMZ.ConvertParams(_0x44c3c8, _0x44c3c8);
  const _0x4108ca = _0x44c3c8.PictureIDs || [];
  for (const _0x50b350 of _0x4108ca) {
    $gameScreen.eraseAllPictureTexts(_0x50b350);
    $gameScreen.erasePictureTextBuffer(_0x50b350);
  }
});
PluginManager.registerCommand(pluginData.name, "PictureTextRefresh", _0xf05140 => {
  $gameScreen.requestPictureTextRefreshAll();
});
VisuMZ.MessageCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  VisuMZ.MessageCore.Scene_Boot_onDatabaseLoaded.call(this);
  VisuMZ.MessageCore.CheckCompatibility();
  this.process_VisuMZ_MessageCore_TextCodes_Action();
  this.process_VisuMZ_MessageCore_TextCodes_Replace();
  this.process_VisuMZ_MessageCore_TextMacros();
  this.process_VisuMZ_MessageCore_AutoColor();
};
VisuMZ.MessageCore.CheckCompatibility = function () {
  if (Imported.VisuMZ_4_ExtraEnemyDrops && VisuMZ.ExtraEnemyDrops.version < 1.08) {
    let _0x5d6389 = '';
    _0x5d6389 += "VisuMZ_4_ExtraEnemyDrops needs to be updated ";
    _0x5d6389 += "in order for VisuMZ_1_MessageCore to work.";
    alert(_0x5d6389);
    SceneManager.exit();
  }
};
VisuMZ.MessageCore.SortObjectByKeyLength = function (_0x15087d) {
  const _0x495b3e = VisuMZ.MessageCore.Settings[_0x15087d];
  _0x495b3e.sort((_0x21dcc1, _0x14ae1e) => {
    if (!_0x21dcc1 || !_0x14ae1e) {
      return -0x1;
    }
    return _0x14ae1e.Match.length - _0x21dcc1.Match.length;
  });
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_TextCodes_Action = function () {
  VisuMZ.MessageCore.SortObjectByKeyLength("TextCodeActions");
  for (const _0x1345cd of VisuMZ.MessageCore.Settings.TextCodeActions) {
    _0x1345cd.Match = _0x1345cd.Match.toUpperCase();
    _0x1345cd.textCodeCheck = new RegExp("" + _0x1345cd.Match, 'gi');
    _0x1345cd.textCodeResult = "" + _0x1345cd.Match;
    if (_0x1345cd.Type === '') {
      _0x1345cd.textCodeResult += "[0]";
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_TextCodes_Replace = function () {
  VisuMZ.MessageCore.SortObjectByKeyLength("TextCodeReplace");
  for (const _0x45efe9 of VisuMZ.MessageCore.Settings.TextCodeReplace) {
    _0x45efe9.textCodeCheck = new RegExp("" + _0x45efe9.Match + _0x45efe9.Type, 'gi');
    if (_0x45efe9.TextStr !== '' && _0x45efe9.TextStr !== "Undefined") {
      _0x45efe9.textCodeResult = new Function("return '" + _0x45efe9.TextStr.replace(/\\/g, "") + "'");
    } else {
      _0x45efe9.textCodeResult = _0x45efe9.TextJS;
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_TextMacros = function () {
  for (const _0xd3cdd of VisuMZ.MessageCore.Settings.TextMacros) {
    _0xd3cdd.textCodeCheck = new RegExp("\\[" + _0xd3cdd.Match + "\\]", 'gi');
    if (_0xd3cdd.TextStr !== '' && _0xd3cdd.TextStr !== "Undefined") {
      let _0x1531d3 = _0xd3cdd.TextStr;
      _0x1531d3 = _0x1531d3.replace(/\\/g, "");
      _0x1531d3 = _0x1531d3.replace("'", "\\'");
      _0x1531d3 = _0x1531d3.replace("\"", "\\\"");
      _0xd3cdd.textCodeResult = new Function("return '" + _0x1531d3 + "'");
    } else {
      _0xd3cdd.textCodeResult = _0xd3cdd.TextJS;
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_AutoColor = function () {
  const _0x279476 = VisuMZ.MessageCore.Settings.AutoColor;
  if (!VisuMZ.ParseAllNotetags) {
    VisuMZ.MessageCore.AddAutoColor($dataClasses, _0x279476.Classes);
    VisuMZ.MessageCore.AddAutoColor($dataSkills, _0x279476.Skills);
    VisuMZ.MessageCore.AddAutoColor($dataItems, _0x279476.Items);
    VisuMZ.MessageCore.AddAutoColor($dataWeapons, _0x279476.Weapons);
    VisuMZ.MessageCore.AddAutoColor($dataArmors, _0x279476.Armors);
    VisuMZ.MessageCore.AddAutoColor($dataEnemies, _0x279476.Enemies);
    VisuMZ.MessageCore.AddAutoColor($dataStates, _0x279476.States);
  }
  VisuMZ.MessageCore.CreateAutoColorRegExpLists();
};
VisuMZ.MessageCore.AutoColorBypassList = ['V', 'N', 'P', 'C', 'I', 'PX', 'PY', 'G', '{', '}', '<', '>', 'FS', "\\", '$', '.', '|', '!', '<', '>', '^', "<B>", "</B>", "<I>", "</I>", "<LEFT>", "</LEFT>", "<CENTER>", "</CENTER>", "<RIGHT>", '</RIGHT>', "<COLORLOCK>", "</COLORLOCK>", "(((", ")))", '<WORDWRAP>', "</WORDWRAP>", '<BR>', "<LINE BREAK>", 'PICTURE', "CENTERPICTURE", 'COMMONEVENT', "WAIT", 'SHOW', "HIDE", 'ENABLE', "DISABLE", "SWITCH", "SWITCHES", 'ALL', "ANY"];
VisuMZ.MessageCore.AddAutoColor = function (_0xf3a48e, _0x2ba2b4) {
  if (_0x2ba2b4 <= 0x0) {
    return;
  }
  for (const _0x21ad0b of _0xf3a48e) {
    if (!_0x21ad0b) {
      continue;
    }
    VisuMZ.MessageCore.CreateAutoColorFor(_0x21ad0b, _0x2ba2b4);
  }
};
VisuMZ.MessageCore.CreateAutoColorRegExpLists = function () {
  VisuMZ.MessageCore.AutoColorRegExp = [];
  for (let _0x4796b9 = 0x1; _0x4796b9 <= 0x1f; _0x4796b9++) {
    const _0xe6425b = "TextColor%1".format(_0x4796b9);
    const _0x5b38c5 = VisuMZ.MessageCore.Settings.AutoColor[_0xe6425b];
    _0x5b38c5.sort((_0x12b005, _0xf02049) => {
      if (!_0x12b005 || !_0xf02049) {
        return -0x1;
      }
      return _0xf02049.length - _0x12b005.length;
    });
    this.CreateAutoColorRegExpListEntries(_0x5b38c5, _0x4796b9);
  }
};
VisuMZ.MessageCore.CreateAutoColorRegExpListEntries = function (_0x4239e5, _0x5d0df8) {
  for (const _0x2e3285 of _0x4239e5) {
    if (_0x2e3285.length <= 0x0) {
      continue;
    }
    if (/^\d+$/.test(_0x2e3285)) {
      continue;
    }
    let _0x329f3e = VisuMZ.MessageCore.ConvertTextAutoColorRegExpFriendly(_0x2e3285);
    if (_0x2e3285.match(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g)) {
      var _0x253e59 = new RegExp(_0x329f3e, 'i');
    } else {
      var _0x253e59 = new RegExp("\\b" + _0x329f3e + "\\b", 'g');
    }
    VisuMZ.MessageCore.AutoColorRegExp.push([_0x253e59, "C[%1]%2PREVCOLOR[0]".format(_0x5d0df8, _0x2e3285)]);
  }
};
VisuMZ.MessageCore.ConvertTextAutoColorRegExpFriendly = function (_0x518700) {
  _0x518700 = _0x518700.replace(/(\W)/gi, (_0xaab0c2, _0x3e8d0b) => "\\%1".format(_0x3e8d0b));
  return _0x518700;
};
VisuMZ.MessageCore.ParseClassNotetags = VisuMZ.ParseClassNotetags;
VisuMZ.ParseClassNotetags = function (_0x25c892) {
  VisuMZ.MessageCore.ParseClassNotetags.call(this, _0x25c892);
  const _0x5d52fc = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x25c892, _0x5d52fc.Classes);
};
VisuMZ.MessageCore.ParseSkillNotetags = VisuMZ.ParseSkillNotetags;
VisuMZ.ParseSkillNotetags = function (_0x2edf17) {
  VisuMZ.MessageCore.ParseSkillNotetags.call(this, _0x2edf17);
  const _0x3a34d4 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x2edf17, _0x3a34d4.Skills);
};
0x7;
VisuMZ.MessageCore.ParseItemNotetags = VisuMZ.ParseItemNotetags;
VisuMZ.ParseItemNotetags = function (_0x41b122) {
  VisuMZ.MessageCore.ParseItemNotetags.call(this, _0x41b122);
  const _0x90042f = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x41b122, _0x90042f.Items);
};
VisuMZ.MessageCore.ParseWeaponNotetags = VisuMZ.ParseWeaponNotetags;
VisuMZ.ParseWeaponNotetags = function (_0x4ab3dd) {
  VisuMZ.MessageCore.ParseWeaponNotetags.call(this, _0x4ab3dd);
  const _0xe0267a = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x4ab3dd, _0xe0267a.Weapons);
};
VisuMZ.MessageCore.ParseArmorNotetags = VisuMZ.ParseArmorNotetags;
VisuMZ.ParseArmorNotetags = function (_0x2ac4da) {
  VisuMZ.MessageCore.ParseArmorNotetags.call(this, _0x2ac4da);
  const _0x4f32b0 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x2ac4da, _0x4f32b0.Armors);
};
VisuMZ.MessageCore.ParseEnemyNotetags = VisuMZ.ParseEnemyNotetags;
VisuMZ.ParseEnemyNotetags = function (_0x518825) {
  VisuMZ.MessageCore.ParseEnemyNotetags.call(this, _0x518825);
  const _0x3f7252 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x518825, _0x3f7252.Enemies);
};
VisuMZ.MessageCore.ParseStateNotetags = VisuMZ.ParseStateNotetags;
VisuMZ.ParseStateNotetags = function (_0x16ef0) {
  VisuMZ.MessageCore.ParseStateNotetags.call(this, _0x16ef0);
  const _0x2c0913 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x16ef0, _0x2c0913.States);
};
VisuMZ.MessageCore.CreateAutoColorFor = function (_0x139b50, _0x25f625) {
  if (_0x25f625 <= 0x0) {
    return;
  }
  const _0x487820 = VisuMZ.MessageCore.Settings.AutoColor["TextColor" + _0x25f625];
  let _0x5ae942 = _0x139b50.name.trim();
  if (/^\d+$/.test(_0x5ae942)) {
    return;
  }
  if (VisuMZ.MessageCore.AutoColorBypassList.includes(_0x5ae942.toUpperCase())) {
    return;
  }
  _0x5ae942 = _0x5ae942.replace(/\\I\[(\d+)\]/gi, '');
  _0x5ae942 = _0x5ae942.replace(/\x1bI\[(\d+)\]/gi, '');
  if (_0x5ae942.length <= 0x0) {
    return;
  }
  if (_0x5ae942.match(/-----/i)) {
    return;
  }
  _0x487820.push(_0x5ae942);
};
VisuMZ.MessageCore.Scene_Boot_loadGameFonts = Scene_Boot.prototype.loadGameFonts;
Scene_Boot.prototype.loadGameFonts = function () {
  VisuMZ.MessageCore.Scene_Boot_loadGameFonts.call(this);
  this.loadCustomFontsMessageCore();
};
Scene_Boot.prototype.loadCustomFontsMessageCore = function () {
  const _0x22498e = VisuMZ.MessageCore.Settings.CustomFonts || [];
  for (const _0xf4dfb8 of _0x22498e) {
    if (!_0xf4dfb8) {
      continue;
    }
    const _0x3dfce8 = _0xf4dfb8.FontFamily;
    if (_0x3dfce8.trim() === '') {
      continue;
    }
    if (_0x3dfce8.toLowerCase().trim() === "unnamed") {
      continue;
    }
    const _0x15fbac = _0xf4dfb8.Filename;
    if (_0x15fbac === 'Unnamed.ttf') {
      continue;
    }
    FontManager.load(_0x3dfce8, _0x15fbac);
  }
};
VisuMZ.MessageCore.LocalizationType = VisuMZ.MessageCore.Settings.Localization.LangFiletype ?? 'tsv';
VisuMZ.MessageCore.DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function () {
  VisuMZ.MessageCore.DataManager_loadDatabase.call(this);
  this.loadLocalization();
};
DataManager.loadLocalization = function () {
  if (!TextManager.isVisuMzLocalizationEnabled()) {
    return;
  }
  const _0x2e48b8 = VisuMZ.MessageCore.Settings.Localization;
  let _0x4cf4c2 = '';
  const _0x34d0b9 = VisuMZ.MessageCore.LocalizationType ?? "tsv";
  if (_0x34d0b9 === 'csv') {
    _0x4cf4c2 = (_0x2e48b8.CsvFilename ?? 'Languages.csv') || '';
  }
  if (_0x34d0b9 === "tsv") {
    _0x4cf4c2 = (_0x2e48b8.TsvFilename ?? "Languages.tsv") || '';
  }
  if (!_0x4cf4c2) {
    return;
  }
  const _0x113e23 = new XMLHttpRequest();
  const _0x305d90 = "data/" + _0x4cf4c2;
  window.$dataLocalization = null;
  _0x113e23.open("GET", _0x305d90);
  _0x113e23.overrideMimeType("application/%1".format(_0x34d0b9.toLowerCase()));
  _0x113e23.onload = () => this.onLocalizationXhrLoad(_0x113e23, "$dataLocalization");
  _0x113e23.onerror = () => this.onLocalizationXhrError();
  _0x113e23.send();
};
DataManager.onLocalizationXhrLoad = function (_0x4fc814, _0x13a8a3) {
  if (_0x4fc814.status >= 0x190) {
    return;
  }
  const _0x11590f = _0x4fc814.responseText;
  window[_0x13a8a3] = VisuMZ.MessageCore.ParseLocalizationCsv(_0x11590f);
};
VisuMZ.MessageCore.ParseLocalizationCsv = function (_0x502e3b) {
  const _0x1c9cf9 = VisuMZ.MessageCore.LocalizationType ?? "tsv";
  const _0x207d22 = _0x1c9cf9 === "csv" ? ';' : "\t";
  const _0xc67dea = _0x502e3b.split("\n");
  const _0x1ca5db = _0xc67dea[0x0].split(_0x207d22);
  const _0x41bccd = {};
  _0xc67dea.slice(0x1).forEach(_0x43b336 => {
    let _0x49c624 = [];
    let _0x578e10 = '';
    let _0x30f854 = false;
    for (let _0x595536 = 0x0; _0x595536 < _0x43b336.length; _0x595536++) {
      let _0x4c9b45 = _0x43b336[_0x595536];
      if (_0x4c9b45 === "\"") {
        if (_0x30f854 && _0x43b336[_0x595536 + 0x1] === "\"") {
          _0x578e10 += _0x4c9b45;
          _0x595536++;
        } else {
          _0x30f854 = !_0x30f854;
        }
      } else if (_0x4c9b45 === _0x207d22 && !_0x30f854) {
        _0x49c624.push(_0x578e10);
        _0x578e10 = '';
      } else {
        _0x578e10 += _0x4c9b45;
      }
    }
    if (_0x578e10) {
      _0x49c624.push(_0x578e10);
    }
    if (!_0x49c624[0x0]) {
      _0x49c624[0x0] = '';
    }
    const _0x36ebab = _0x49c624[0x0].replace(/^"|"$/g, '').toLowerCase().trim();
    _0x41bccd[_0x36ebab] = _0x1ca5db.slice(0x1).reduce((_0x128bf1, _0x574674, _0x9b0137) => {
      _0x128bf1[_0x574674.trim()] = (_0x49c624[_0x9b0137 + 0x1] || '').replace(/^"|"$/g, '');
      return _0x128bf1;
    }, {});
  });
  return _0x41bccd;
};
DataManager.onLocalizationXhrError = function () {
  const _0x48af89 = (VisuMZ.MessageCore.LocalizationType ?? "tsv").toUpperCase();
  let _0x1adc0a = '';
  _0x1adc0a += "You do not have a language %1 set up.\n";
  _0x1adc0a += "Would you like the plugin to create the base %1 file?\n\n";
  _0x1adc0a = _0x1adc0a.format(_0x48af89);
  if (confirm(_0x1adc0a)) {
    if (Utils.isOptionValid("test")) {
      if (_0x48af89 === "CSV") {
        _0x1adc0a = "%1 file is now created and stored in data folder.\n";
        _0x1adc0a = _0x1adc0a.format(_0x48af89);
        alert(_0x1adc0a);
        this.createLocalizationCsvFile();
        this.openLocalizationFolder();
      } else {
        return this.checkConvertCsvToTsv();
      }
      _0x1adc0a = '';
    } else {
      _0x1adc0a = "%1 file cannot be created.\nPlease enter Playtest mode.\n";
    }
  } else {
    _0x1adc0a = "%1 file has not been made.\n";
  }
  _0x1adc0a += "Please restart the game.";
  _0x1adc0a = _0x1adc0a.format(_0x48af89);
  alert(_0x1adc0a);
  SceneManager.exit();
};
DataManager.checkConvertCsvToTsv = function () {
  const _0x5d38f1 = VisuMZ.MessageCore.Settings.Localization;
  const _0x4e4b55 = _0x5d38f1.CsvFilename ?? "Languages.csv";
  const _0x2758db = new XMLHttpRequest();
  const _0x4b62ae = "data/" + _0x4e4b55;
  _0x2758db.open("GET", _0x4b62ae);
  _0x2758db.overrideMimeType("application/csv");
  _0x2758db.onload = () => this.confirmConvertCsvToTsv(_0x2758db);
  _0x2758db.onerror = () => this.createTsvFile();
  _0x2758db.send();
};
DataManager.confirmConvertCsvToTsv = function (_0x2c5e59) {
  const _0x15a002 = VisuMZ.MessageCore.Settings.Localization;
  const _0x358093 = _0x15a002.CsvFilename ?? "Languages.csv";
  let _0x1c588f = "%1 file detected.\n".format(_0x358093);
  _0x1c588f += "Press OK to convert to TSV.\n";
  _0x1c588f += "Press Cancel to create new TSV.";
  if (confirm(_0x1c588f)) {
    this.convertCsvToTsvFile(_0x2c5e59);
  } else {
    this.createTsvFile();
  }
};
DataManager.convertCsvToTsvFile = function (_0x33777a) {
  if (_0x33777a.status >= 0x190) {
    return;
  }
  const _0x36c219 = _0x33777a.responseText;
  const _0x257e57 = _0x36c219.replace(/\;/gi, "\t");
  const _0x1b5d42 = VisuMZ.MessageCore.Settings.Localization;
  const _0x67cc43 = _0x1b5d42.TsvFilename || "Languages.tsv";
  const _0x1e2fbb = require("path");
  const _0x7ccb5e = _0x1e2fbb.dirname(process.mainModule.filename);
  const _0x18c381 = _0x1e2fbb.join(_0x7ccb5e, "data/");
  const _0x4e388f = _0x18c381 + _0x67cc43;
  const _0x4d9652 = require('fs');
  _0x4d9652.writeFileSync(_0x4e388f, _0x257e57);
  let _0x5c7117 = "TSV file is now created and stored in data folder.";
  alert(_0x5c7117);
  _0x5c7117 = "Please restart the game.";
  alert(_0x5c7117);
  SceneManager.exit();
};
DataManager.createTsvFile = function () {
  let _0x11a41b = "TSV file is now created and stored in data folder.";
  alert(_0x11a41b);
  this.createLocalizationCsvFile();
  this.openLocalizationFolder();
  _0x11a41b = "Please restart the game.";
  alert(_0x11a41b);
  SceneManager.exit();
};
DataManager.createLocalizationCsvFile = function () {
  const _0x3cbcdd = ["Key", "English", "Bengali", "Chinese(Simplified)", 'Chinese(Traditional)', "Czech", "Danish", 'Dutch', "Finnish", "French", 'German', "Greek", "Hindi", "Hungarian", "Indonesian", 'Italian', "Japanese", 'Korean', "Norwegian", "Polish", "Portuguese", "Romanian", 'Russian', "Slovak", "Spanish", "Swedish", 'Tamil', "Thai", 'Turkish'];
  const _0x12aaef = ["Greeting", "Hello", 'হ্যালো', '你好', '你好', 'Ahoj', "Hej", "Hallo", "Hei", "Bonjour", 'Hallo', "Γειά σου", "नमस्ते", "Szia", "Halo", "Ciao", "こんにちは", "안녕하세요", "Hei", "Cześć", 'Olá', "Salut", 'Привет', "Ahoj", "Hola", "Hej", "வணக்கம்", 'สวัสดี', "Merhaba"];
  const _0x3060da = ["Farewell", "Good-bye", 'বিদায়', '再见', '再見', "Sbohem", "Farvel", "Tot ziens", 'Näkemiin', "Au revoir", "Auf Wiedersehen", "Αντίο", "अलविदा", "Viszontlátásra", "Selamat tinggal", "Arrivederci", "さようなら", "안녕히 가세요", "Ha det", "Do widzenia", "Adeus", "La revedere", "До свидания", 'Zbohom', "Adiós", "Hejdå", "பிரியாவிடை", 'ลาก่อน', "Hoşça kal"];
  const _0x4e5cbf = ["Wow", "Wow", 'ওহে', '哇', '哇', 'Ó', "Wow", "Wauw", "Vau", 'Waouh', "Wow", "Ουάου", "वाह", "Hűha", 'Wah', "Wow", 'ワオ', '와우', 'Oi', 'O', 'Uau', 'Uau', 'Вау', 'Ó', "Guau", 'Oj', "ஆஹா", "ว้าว", "Vay"];
  const _0x182c7b = [_0x3cbcdd, _0x12aaef, _0x3060da, _0x4e5cbf];
  const _0x533035 = VisuMZ.MessageCore.LocalizationType ?? "tsv";
  const _0x3d458b = _0x533035 === "csv" ? ';' : "\t";
  const _0x2fec42 = _0x182c7b.map(_0x53d493 => _0x53d493.join(_0x3d458b)).join("\n");
  const _0x19cdf2 = VisuMZ.MessageCore.Settings.Localization;
  let _0x1a3abc = '';
  if (_0x533035 === "csv") {
    _0x1a3abc = _0x19cdf2.CsvFilename || "Languages.csv";
  }
  if (_0x533035 === 'tsv') {
    _0x1a3abc = _0x19cdf2.TsvFilename || "Languages.tsv";
  }
  const _0x446158 = require("path");
  const _0x1c2eb7 = _0x446158.dirname(process.mainModule.filename);
  const _0x4ece26 = _0x446158.join(_0x1c2eb7, "data/");
  const _0x2cf25a = _0x4ece26 + _0x1a3abc;
  const _0x1a8845 = require('fs');
  _0x1a8845.writeFileSync(_0x2cf25a, _0x2fec42);
  return _0x2cf25a;
};
DataManager.openLocalizationFolder = function () {
  const {
    exec: _0x37ad14
  } = require('child_process');
  _0x37ad14("start .\\data");
  _0x37ad14("open .\\data");
};
VisuMZ.MessageCore.ImageManager_loadBitmap = ImageManager.loadBitmap;
ImageManager.loadBitmap = function (_0x114afe, _0x4488f6) {
  if (ConfigManager.textLocale !== undefined) {
    const _0x8f44ff = VisuMZ.MessageCore.Settings.Localization || {};
    const _0x15cf2f = _0x8f44ff.DefaultLocale || "English";
    const _0x371154 = VisuMZ.MessageCore.Settings.LanguageImages || {};
    const _0x27306c = ConfigManager.textLocale || _0x15cf2f;
    if (_0x27306c === _0x15cf2f && !_0x371154.ConvertDefault) {} else {
      const _0x509ca8 = _0x371154[_0x27306c] || '[XX]';
      if (_0x114afe && _0x114afe.match(/\[XX\]/g)) {
        console.log(_0x114afe, _0x4488f6);
      }
      if (_0x4488f6 && _0x4488f6.match(/\[XX\]/g)) {
        _0x4488f6 = _0x4488f6.replace(/\[XX\]/g, _0x509ca8);
      }
    }
  }
  return VisuMZ.MessageCore.ImageManager_loadBitmap.call(this, _0x114afe, _0x4488f6);
};
SceneManager.isSceneBattle = function () {
  return this._scene && this._scene.constructor === Scene_Battle;
};
SceneManager.isSceneMap = function () {
  return this._scene && this._scene.constructor === Scene_Map;
};
ConfigManager.textLocale = VisuMZ.MessageCore.Settings.Localization.DefaultLocale || "English";
ConfigManager.textSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Default;
VisuMZ.MessageCore.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
  const _0x4eb020 = VisuMZ.MessageCore.ConfigManager_makeData.call(this);
  if (TextManager.isVisuMzLocalizationEnabled()) {
    _0x4eb020.textLocale = this.textLocale;
  }
  _0x4eb020.textSpeed = this.textSpeed;
  return _0x4eb020;
};
VisuMZ.MessageCore.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (_0x22768e) {
  VisuMZ.MessageCore.ConfigManager_applyData.call(this, _0x22768e);
  if (TextManager.isVisuMzLocalizationEnabled()) {
    if ('textLocale' in _0x22768e) {
      this.textLocale = String(_0x22768e.textLocale);
    } else {
      this.textLocale = VisuMZ.MessageCore.Settings.Localization.DefaultLocale || "English";
    }
  }
  if ("textSpeed" in _0x22768e) {
    this.textSpeed = Number(_0x22768e.textSpeed).clamp(0x1, 0xb);
  } else {
    this.textSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Default;
  }
};
TextManager.messageCoreLocalization = VisuMZ.MessageCore.Settings.Localization.Name;
TextManager.messageCoreTextSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Name;
TextManager.instantTextSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Instant;
VisuMZ.MessageCore.TextManager_message = TextManager.message;
TextManager.message = function (_0x378e11) {
  const _0x313721 = ["levelUp", 'emerge', "preemptive", "surprise", "victory", "defeat", 'escapeStart', "obtainExp", 'obtainGold', "obtainItem"];
  let _0x9e9948 = VisuMZ.MessageCore.TextManager_message.call(this, _0x378e11);
  if (_0x313721.includes(_0x378e11)) {
    _0x9e9948 = "</WORDWRAP>" + _0x9e9948;
  }
  return _0x9e9948;
};
TextManager.isVisuMzLocalizationEnabled = function () {
  return VisuMZ.MessageCore.Settings.Localization.Enable;
};
TextManager.parseLocalizedText = function (_0x238e09) {
  if (!this.isVisuMzLocalizationEnabled()) {
    return _0x238e09;
  }
  _0x238e09 = String(_0x238e09).replace(/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi, (_0x3fe540, _0x529bb9) => this.getLocalizedText(String(_0x529bb9)));
  _0x238e09 = String(_0x238e09).replace(/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi, (_0x5eef1c, _0x2f943e) => this.getLocalizedText(String(_0x2f943e)));
  _0x238e09 = String(_0x238e09).replace(/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi, (_0x4073cd, _0x3f11a8) => this.getLocalizedText(String(_0x3f11a8)));
  return _0x238e09;
};
TextManager.getLocalizedText = function (_0x1153ea) {
  if (!$dataLocalization) {
    return '';
  }
  const _0x12f6cc = $dataLocalization[_0x1153ea.toLowerCase().trim()];
  if (!_0x12f6cc) {
    return;
  }
  const _0x3a5391 = ConfigManager.textLocale || "English";
  let _0x35d4b7 = _0x12f6cc[_0x3a5391] || "UNDEFINED!";
  _0x35d4b7 = _0x35d4b7.replace(/\\/g, "");
  _0x35d4b7 = _0x35d4b7.replace(/<SEMI(?:|-COLON|COLON)>/gi, ';');
  return _0x35d4b7;
};
TextManager.getLanguageName = function (_0x2d7e14) {
  return VisuMZ.MessageCore.Settings.Localization[_0x2d7e14] || '';
};
TextManager.getCurrentLanguage = function () {
  const _0xc80823 = ConfigManager.textLocale || "English";
  return this.getLanguageName(_0xc80823);
};
TextManager.getLanguageAt = function (_0x5978f7) {
  const _0x4a11ef = VisuMZ.MessageCore.Settings.Localization.Languages || [];
  let _0x5ac9bf = _0x4a11ef.indexOf(ConfigManager.textLocale || 'English');
  _0x5ac9bf += _0x5978f7;
  const _0x2d2b84 = _0x4a11ef[_0x5ac9bf] || '';
  return this.getLanguageName(_0x2d2b84);
};
VisuMZ.MessageCore.Game_System_mainFontFace = Game_System.prototype.mainFontFace;
Game_System.prototype.mainFontFace = function () {
  let _0x5d9437 = VisuMZ.MessageCore.Game_System_mainFontFace.call(this);
  if (ConfigManager && ConfigManager.textFont !== undefined && ConfigManager.textFont > 0x0) {
    return _0x5d9437;
  } else {
    const _0x226703 = ConfigManager.textLocale || "English";
    const _0x3fa42a = VisuMZ.MessageCore.Settings.LanguageFonts;
    if (_0x3fa42a[_0x226703] !== undefined) {
      _0x5d9437 = _0x3fa42a[_0x226703] + ", " + $dataSystem.advanced.fallbackFonts;
    }
    return _0x5d9437;
  }
};
VisuMZ.MessageCore.Window_Command_addCommand = Window_Command.prototype.addCommand;
Window_Command.prototype.addCommand = function (_0x48988b, _0x27f62b, _0x39c792, _0x3f29a9) {
  if (TextManager.parseLocalizedText && TextManager.isVisuMzLocalizationEnabled()) {
    const _0x5134cb = String(_0x48988b).toLowerCase().trim();
    if ($dataLocalization[_0x5134cb] && _0x5134cb.length > 0x0) {
      const _0x104204 = ConfigManager.textLocale || 'English';
      _0x48988b = $dataLocalization[_0x5134cb][_0x104204] || "UNDEFINED!";
    }
  }
  VisuMZ.MessageCore.Window_Command_addCommand.call(this, _0x48988b, _0x27f62b, _0x39c792, _0x3f29a9);
};
Window_StatusBase.prototype.actorSlotName = function (_0x418c84, _0x420ef8) {
  const _0x774c1d = _0x418c84.equipSlots();
  let _0x4a4264 = $dataSystem.equipTypes[_0x774c1d[_0x420ef8]];
  if (TextManager.parseLocalizedText) {
    const _0x4d7d50 = String(_0x4a4264).toLowerCase().trim();
    if (TextManager.isVisuMzLocalizationEnabled() && $dataLocalization[_0x4d7d50]) {
      const _0x1cdd69 = ConfigManager.textLocale || 'English';
      _0x4a4264 = $dataLocalization[_0x4d7d50][_0x1cdd69] || "UNDEFINED!";
    }
  }
  return _0x4a4264;
};
Game_Temp.prototype.setLastPluginCommandInterpreter = function (_0xcb94f0) {
  this._lastPluginCommandInterpreter = _0xcb94f0;
};
Game_Temp.prototype.getLastPluginCommandInterpreter = function () {
  return this._lastPluginCommandInterpreter;
};
VisuMZ.MessageCore.Game_Interpreter_PluginCommand = Game_Interpreter.prototype.command357;
Game_Interpreter.prototype.command357 = function (_0x2206e4) {
  $gameTemp.setLastPluginCommandInterpreter(this);
  return VisuMZ.MessageCore.Game_Interpreter_PluginCommand.call(this, _0x2206e4);
};
VisuMZ.MessageCore.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.MessageCore.Game_System_initialize.call(this);
  this.initMessageCore();
};
Game_System.prototype.initMessageCore = function () {
  const _0x518d88 = VisuMZ.MessageCore.Settings.General;
  const _0x30ba6e = VisuMZ.MessageCore.Settings.WordWrap;
  this._MessageCoreSettings = {
    'messageRows': _0x518d88.MessageRows,
    'messageWidth': _0x518d88.MessageWidth,
    'messageWordWrap': _0x30ba6e.MessageWindow,
    'helpWordWrap': _0x30ba6e.HelpWindow,
    'choiceLineHeight': _0x518d88.ChoiceWindowLineHeight,
    'choiceMinWidth': _0x518d88.ChoiceWindowMinWidth ?? 0x60,
    'choiceRows': _0x518d88.ChoiceWindowMaxRows,
    'choiceCols': _0x518d88.ChoiceWindowMaxCols,
    'choiceTextAlign': _0x518d88.ChoiceWindowTextAlign,
    'choiceDistance': 0x0
  };
  if (this._messageOffsetX === undefined) {
    this._messageOffsetX = _0x518d88.MsgWindowOffsetX;
    this._messageOffsetY = _0x518d88.MsgWindowOffsetY;
  }
};
Game_System.prototype.getMessageWindowRows = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageRows === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.messageRows;
};
Game_System.prototype.setMessageWindowRows = function (_0x46f735) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageRows === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.messageRows = _0x46f735 || 0x1;
};
Game_System.prototype.getMessageWindowWidth = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWidth === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.messageWidth;
};
Game_System.prototype.setMessageWindowWidth = function (_0x73dd44) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWidth === undefined) {
    this.initMessageCore();
  }
  _0x73dd44 = Math.ceil(_0x73dd44);
  if (_0x73dd44 % 0x2 !== 0x0) {
    _0x73dd44 += 0x1;
  }
  this._MessageCoreSettings.messageWidth = _0x73dd44 || 0x2;
};
Game_System.prototype.isMessageWindowWordWrap = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWordWrap === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.messageWordWrap;
};
Game_System.prototype.setMessageWindowWordWrap = function (_0x2bf5e5) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWordWrap === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.messageWordWrap = _0x2bf5e5;
};
Game_System.prototype.getMessageWindowXyOffsets = function () {
  if (this._messageOffsetX === undefined) {
    const _0x4068b8 = VisuMZ.MessageCore.Settings.General;
    this._messageOffsetX = _0x4068b8.MsgWindowOffsetX;
    this._messageOffsetY = _0x4068b8.MsgWindowOffsetY;
  }
  return {
    'x': this._messageOffsetX || 0x0,
    'y': this._messageOffsetY || 0x0
  };
};
Game_System.prototype.setMessageWindowXyOffsets = function (_0x50a073, _0x38abf8) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  this._messageOffsetX = _0x50a073;
  this._messageOffsetY = _0x38abf8;
};
Game_System.prototype.isHelpWindowWordWrap = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.helpWordWrap === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.helpWordWrap;
};
Game_System.prototype.setHelpWindowWordWrap = function (_0x2fb921) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.helpWordWrap === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.helpWordWrap = _0x2fb921;
};
Game_System.prototype.getChoiceListLineHeight = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceLineHeight === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceLineHeight;
};
Game_System.prototype.setChoiceListLineHeight = function (_0x16a7a6) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceLineHeight === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceLineHeight = _0x16a7a6 || 0x1;
};
Game_System.prototype.getChoiceListMinChoiceWidth = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceMinWidth ?? 0x60;
};
Game_System.prototype.setChoiceListMinChoiceWidth = function (_0x497e9a) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceMinWidth = _0x497e9a || 0x0;
};
Game_System.prototype.getChoiceListMaxRows = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceRows === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceRows;
};
Game_System.prototype.setChoiceListMaxRows = function (_0x45cb39) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceRows === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceRows = _0x45cb39 || 0x1;
};
Game_System.prototype.getChoiceListMaxColumns = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceCols === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceCols;
};
Game_System.prototype.setChoiceListMaxColumns = function (_0x4130d3) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceCols === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceCols = _0x4130d3 || 0x1;
};
Game_System.prototype.getChoiceListTextAlign = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceTextAlign === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceTextAlign;
};
Game_System.prototype.setChoiceListTextAlign = function (_0xf3de2a) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceTextAlign === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceTextAlign = _0xf3de2a.toLowerCase();
};
Game_System.prototype.getChoiceMessageDistance = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceDistance || 0x0;
};
Game_System.prototype.setChoiceMessageDistance = function (_0x3e8c13) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceDistance = _0x3e8c13 || 0x0;
};
Game_Message.prototype.setWeaponChoice = function (_0x3dcd71, _0x4fc15c) {
  this._itemChoiceVariableId = _0x3dcd71;
  this._itemChoiceItypeId = "weapon";
  this._itemChoiceWtypeId = _0x4fc15c;
  this._itemChoiceEtypeId = 0x0;
};
Game_Message.prototype.itemChoiceWtypeId = function () {
  return this._itemChoiceWtypeId || 0x0;
};
Game_Message.prototype.setArmorChoice = function (_0x3ea3ef, _0x1f9e3b, _0x4e9075) {
  this._itemChoiceVariableId = _0x3ea3ef;
  this._itemChoiceItypeId = "armor";
  this._itemChoiceAtypeId = _0x1f9e3b;
  this._itemChoiceEtypeId = _0x4e9075;
};
Game_Message.prototype.itemChoiceAtypeId = function () {
  return this._itemChoiceAtypeId || 0x0;
};
Game_Message.prototype.itemChoiceEtypeId = function () {
  return this._itemChoiceEtypeId || 0x0;
};
Game_Message.prototype.setSkillChoice = function (_0x34fb6f, _0x2b39f2, _0x450c91) {
  this._itemChoiceVariableId = _0x34fb6f;
  this._itemChoiceItypeId = 'skill';
  this._itemChoiceActorId = _0x2b39f2;
  this._itemChoiceStypeId = _0x450c91;
};
Game_Message.prototype.itemChoiceActorId = function () {
  return this._itemChoiceActorId || 0x0;
};
Game_Message.prototype.itemChoiceActor = function () {
  return $gameActors.actor(this.itemChoiceActorId()) || $gameParty.leader() || null;
};
Game_Message.prototype.itemChoiceStypeId = function () {
  return this._itemChoiceStypeId || 0x0;
};
VisuMZ.MessageCore.Game_Message_setChoices = Game_Message.prototype.setChoices;
Game_Message.prototype.setChoices = function (_0x380e13, _0x3d6757, _0x253c90) {
  this._scriptCall = true;
  VisuMZ.MessageCore.Game_Message_setChoices.call(this, _0x380e13, _0x3d6757, _0x253c90);
};
Game_Message.prototype.setupShuffleChoices = function () {
  this._scriptCall = false;
  this._choiceIndexArray = [];
  const _0x9c382c = this._choices.length;
  this._maxShuffleChoices = _0x9c382c;
  let _0x145182 = false;
  for (let _0x1ceea7 = 0x0; _0x1ceea7 < _0x9c382c; _0x1ceea7++) {
    let _0x2877d2 = this._choices[_0x1ceea7];
    if (_0x2877d2.match(/<SHUFFLE>/gi)) {
      _0x145182 = true;
      _0x2877d2 = _0x2877d2.replace(/<SHUFFLE>/gi, '');
    }
    if (_0x2877d2.match(/<SHUFFLE:[ ](\d+)>/gi)) {
      _0x145182 = true;
      this._maxShuffleChoices = Math.min(Number(RegExp.$1), this._maxShuffleChoices);
      _0x2877d2 = _0x2877d2.replace(/<SHUFFLE:[ ](\d+)>/gi, '');
    }
    if (_0x2877d2.match(/<SHUFFLE: VAR[ ](\d+)>/gi)) {
      _0x145182 = true;
      this._maxShuffleChoices = Math.min($gameVariables.value(Number(RegExp.$1)) || 0x1, this._maxShuffleChoices);
      _0x2877d2 = _0x2877d2.replace(/<SHUFFLE:[ ]VAR (\d+)>/gi, '');
    }
    this._choiceIndexArray.push(_0x1ceea7);
    this._choices[_0x1ceea7] = _0x2877d2;
  }
  if (_0x145182) {
    this._choiceIndexArray = VisuMZ.MessageCore.ShuffleArray(this._choiceIndexArray);
    if (this.choiceCancelType() !== -0x2) {
      this._choiceCancelType = -0x1;
    }
  }
};
VisuMZ.MessageCore.ShuffleArray = function (_0x2fc702) {
  var _0x28cebe;
  var _0x40a96b;
  var _0x2edb57;
  for (_0x2edb57 = _0x2fc702.length - 0x1; _0x2edb57 > 0x0; _0x2edb57--) {
    _0x28cebe = Math.floor(Math.random() * (_0x2edb57 + 0x1));
    _0x40a96b = _0x2fc702[_0x2edb57];
    _0x2fc702[_0x2edb57] = _0x2fc702[_0x28cebe];
    _0x2fc702[_0x28cebe] = _0x40a96b;
  }
  return _0x2fc702;
};
Game_Message.prototype.choiceIndexArray = function () {
  if (!this._choiceIndexArray) {
    this.setupShuffleChoices();
  }
  return this._choiceIndexArray;
};
Game_Message.prototype.maxShuffleChoices = function () {
  if (this._maxShuffleChoices === undefined) {
    this.setupShuffleChoices();
  }
  return this._maxShuffleChoices;
};
VisuMZ.MessageCore.Game_Screen_clearPictures = Game_Screen.prototype.clearPictures;
Game_Screen.prototype.clearPictures = function () {
  VisuMZ.MessageCore.Game_Screen_clearPictures.call(this);
  this.clearAllPictureTexts();
};
Game_Screen.prototype.clearAllPictureTexts = function () {
  this._pictureText = [];
  this._pictureTextBuffer = [];
  this._pictureTextRefresh = [];
};
Game_Screen.prototype.getPictureTextData = function (_0x15f1bf) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x566025 = this.realPictureId(_0x15f1bf);
  this._pictureText[_0x566025] = this._pictureText[_0x566025] || {};
  return this._pictureText[_0x566025];
};
Game_Screen.prototype.getPictureText = function (_0x426f9f, _0x359819) {
  _0x359819 = _0x359819.toLowerCase().trim();
  return this.getPictureTextData(_0x426f9f)[_0x359819] || '';
};
Game_Screen.prototype.setPictureText = function (_0x4ee4b9, _0x12dc9b, _0x12a477) {
  _0x12a477 = _0x12a477.toLowerCase().trim();
  this.getPictureTextData(_0x4ee4b9)[_0x12a477] = _0x12dc9b || '';
  this.requestPictureTextRefresh(_0x4ee4b9, true);
};
Game_Screen.prototype.eraseAllPictureTexts = function (_0x181471) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0xaaef3 = this.realPictureId(_0x181471);
  this._pictureText[_0xaaef3] = null;
  this.requestPictureTextRefresh(_0x181471, true);
};
Game_Screen.prototype.getPictureTextBuffer = function (_0x38e341) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x87388d = this.realPictureId(_0x38e341);
  return this._pictureTextBuffer[_0x87388d] || 0x0;
};
Game_Screen.prototype.setPictureTextBuffer = function (_0x31d782, _0x48ca17) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x50124d = this.realPictureId(_0x31d782);
  this._pictureTextBuffer[_0x50124d] = Math.max(0x0, _0x48ca17);
};
Game_Screen.prototype.erasePictureTextBuffer = function (_0x4d9a37) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x2c0d94 = this.realPictureId(_0x4d9a37);
  this._pictureTextBuffer[_0x2c0d94] = undefined;
};
VisuMZ.MessageCore.Game_Screen_erasePicture = Game_Screen.prototype.erasePicture;
Game_Screen.prototype.erasePicture = function (_0xa76cc) {
  VisuMZ.MessageCore.Game_Screen_erasePicture.call(this, _0xa76cc);
  this.eraseAllPictureTexts(_0xa76cc);
  this.erasePictureTextBuffer(_0xa76cc);
  this.requestPictureTextRefresh(_0xa76cc, true);
};
Game_Screen.prototype.requestPictureTextRefreshAll = function () {
  for (const _0x111e42 of this._pictures) {
    if (_0x111e42) {
      let _0x2632fc = this._pictures.indexOf(_0x111e42);
      this.requestPictureTextRefresh(_0x2632fc);
    }
  }
};
Game_Screen.prototype.requestPictureTextRefresh = function (_0x4cb291, _0x247bb0) {
  this._pictureTextRefresh = this._pictureTextRefresh || [];
  if (this.hasPictureText(_0x4cb291) || _0x247bb0) {
    this._pictureTextRefresh.push(_0x4cb291);
  }
};
Game_Screen.prototype.needsPictureTextRefresh = function (_0x517e94) {
  this._pictureTextRefresh = this._pictureTextRefresh || [];
  return this._pictureTextRefresh.includes(_0x517e94);
};
Game_Screen.prototype.clearPictureTextRefresh = function (_0x33c04e) {
  this._pictureTextRefresh = this._pictureTextRefresh || [];
  this._pictureTextRefresh.remove(_0x33c04e);
};
Game_Screen.prototype.hasPictureText = function (_0x136f97) {
  const _0x5d66fe = ['upperleft', 'up', 'upperright', "left", 'center', "right", "lowerleft", "down", "lowerright"];
  return _0x5d66fe.some(_0x4f677f => this.getPictureText(_0x136f97, _0x4f677f) !== '');
};
VisuMZ.MessageCore.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function () {
  VisuMZ.MessageCore.Game_Party_initialize.call(this);
  this.initMessageCore();
};
Game_Party.prototype.initMessageCore = function () {
  this._lastGainedItemData = {
    'type': 0x0,
    'id': 0x0,
    'quantity': 0x0
  };
};
Game_Party.prototype.getLastGainedItemData = function () {
  if (this._lastGainedItemData === undefined) {
    this.initMessageCore();
  }
  return this._lastGainedItemData;
};
Game_Party.prototype.setLastGainedItemData = function (_0xb78cdc, _0x554f60) {
  if (this._lastGainedItemData === undefined) {
    this.initMessageCore();
  }
  if (!_0xb78cdc) {
    return;
  }
  if (DataManager.isItem(_0xb78cdc)) {
    this._lastGainedItemData.type = 0x0;
  } else {
    if (DataManager.isWeapon(_0xb78cdc)) {
      this._lastGainedItemData.type = 0x1;
    } else if (DataManager.isArmor(_0xb78cdc)) {
      this._lastGainedItemData.type = 0x2;
    }
  }
  this._lastGainedItemData.id = _0xb78cdc.id;
  this._lastGainedItemData.quantity = _0x554f60;
};
VisuMZ.MessageCore.Game_Party_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function (_0x5938d0, _0x4836e2, _0x4dcfb1) {
  VisuMZ.MessageCore.Game_Party_gainItem.call(this, _0x5938d0, _0x4836e2, _0x4dcfb1);
  if (_0x4836e2 > 0x0) {
    this.setLastGainedItemData(_0x5938d0, _0x4836e2);
  }
};
VisuMZ.MessageCore.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function () {
  VisuMZ.MessageCore.Game_Map_initialize.call(this);
  this._messageCommonEvents = [];
};
VisuMZ.MessageCore.Game_Map_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function () {
  VisuMZ.MessageCore.Game_Map_setupEvents.call(this);
  this._messageCommonEvents = [];
};
VisuMZ.MessageCore.Game_Map_updateEvents = Game_Map.prototype.updateEvents;
Game_Map.prototype.updateEvents = function () {
  VisuMZ.MessageCore.Game_Map_updateEvents.call(this);
  this.updateMessageCommonEvents();
};
Game_Map.prototype.addMessageCommonEvent = function (_0x3cf4cd) {
  if (!$dataCommonEvents[_0x3cf4cd]) {
    return;
  }
  this._messageCommonEvents = this._messageCommonEvents || [];
  const _0x44e85b = this._interpreter._eventId;
  const _0x38386b = new Game_MessageCommonEvent(_0x3cf4cd, _0x44e85b);
  this._messageCommonEvents.push(_0x38386b);
};
Game_Map.prototype.updateMessageCommonEvents = function () {
  this._messageCommonEvents = this._messageCommonEvents || [];
  for (const _0x36ea14 of this._messageCommonEvents) {
    if (!_0x36ea14._interpreter) {
      this._messageCommonEvents.remove(_0x36ea14);
    } else {
      _0x36ea14.update();
    }
  }
};
VisuMZ.MessageCore.Game_Map_refresh = Game_Map.prototype.refresh;
Game_Map.prototype.refresh = function () {
  VisuMZ.MessageCore.Game_Map_refresh.call(this);
  $gameScreen.requestPictureTextRefreshAll();
};
Game_Interpreter.MESSAGE_CORE_PLUGIN_NAME = pluginData.name;
Game_Interpreter.prototype.command101 = function (_0xa9d4bd) {
  if ($gameMessage.isBusy()) {
    return false;
  }
  this.prepareShowTextCommand(_0xa9d4bd);
  this.addContinuousShowTextCommands(_0xa9d4bd);
  this.prepareShowTextFollowups(_0xa9d4bd);
  this.setWaitMode("message");
  return true;
};
Game_Interpreter.prototype.prepareShowTextCommand = function (_0x5fa11a) {
  $gameMessage.setFaceImage(_0x5fa11a[0x0], _0x5fa11a[0x1]);
  $gameMessage.setBackground(_0x5fa11a[0x2]);
  $gameMessage.setPositionType(_0x5fa11a[0x3]);
  $gameMessage.setSpeakerName(_0x5fa11a[0x4]);
};
Game_Interpreter.prototype.addContinuousShowTextCommands = function (_0x11168b) {
  while (this.isContinuePrepareShowTextCommands()) {
    this._index++;
    if (this.currentCommand().code === 0x191) {
      let _0x7afe3d = this.currentCommand().parameters[0x0];
      _0x7afe3d = VisuMZ.MessageCore.ParseAddedText(_0x7afe3d);
      $gameMessage.add(_0x7afe3d);
    }
    if (this.isBreakShowTextCommands()) {
      break;
    }
  }
};
Game_Interpreter.prototype.isContinuePrepareShowTextCommands = function () {
  return this.nextEventCode() === 0x65 && $gameSystem.getMessageWindowRows() > 0x4 ? true : this.nextEventCode() === 0x191;
};
VisuMZ.MessageCore.ParseAddedText = function (_0x5419e0) {
  const _0x31800b = VisuMZ.MessageCore.Settings.General;
  _0x5419e0 = (_0x31800b.EachMessageStart || '') + _0x5419e0 + (_0x31800b.EachMessageEnd || '');
  _0x5419e0 = _0x5419e0.replace(/<(?:NEXT PAGE|NEXTPAGE)>/gi, '');
  _0x5419e0 = _0x5419e0.replace(/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi, (_0x118561, _0xd6ac8e) => this.getRandomTextFromPool(_0xd6ac8e));
  return _0x5419e0;
};
VisuMZ.MessageCore.getRandomTextFromPool = function (_0x29f9c2) {
  const _0xdded64 = _0x29f9c2.split('|').map(_0x1b19fc => _0x1b19fc.trim()).remove('').remove(null);
  return _0xdded64[Math.randomInt(_0xdded64.length)];
};
Game_Interpreter.prototype.isBreakShowTextCommands = function () {
  if (this.currentCommand() && this.currentCommand().parameters[0x0].match(/<(?:NEXT PAGE|NEXTPAGE)>/gi)) {
    return true;
  }
  return $gameMessage._texts.length >= $gameSystem.getMessageWindowRows() && this.nextEventCode() !== 0x191;
};
Game_Interpreter.prototype.prepareShowTextFollowups = function (_0x2edb73) {
  switch (this.nextEventCode()) {
    case 0x66:
      this._index++;
      this.setupChoices(this.currentCommand().parameters);
      break;
    case 0x67:
      this._index++;
      this.setupNumInput(this.currentCommand().parameters);
      break;
    case 0x68:
      this._index++;
      this.setupItemChoice(this.currentCommand().parameters);
      break;
    case 0x165:
      const _0x2dd457 = this._list[this._index + 0x1];
      const _0x5de5e2 = _0x2dd457.parameters;
      if (_0x5de5e2[0x0] === Game_Interpreter.MESSAGE_CORE_PLUGIN_NAME) {
        this.prepareShowTextPluginCommandFollowups(_0x5de5e2);
      }
      break;
  }
};
VisuMZ.MessageCore.Game_Interpreter_setupChoices = Game_Interpreter.prototype.setupChoices;
Game_Interpreter.prototype.setupChoices = function (_0x54721d) {
  _0x54721d = this.addContinuousShowChoices();
  VisuMZ.MessageCore.Game_Interpreter_setupChoices.call(this, _0x54721d);
  $gameMessage.setupShuffleChoices();
};
Game_Interpreter.prototype.addContinuousShowChoices = function () {
  const _0x7e1096 = this._index;
  let _0x5aefd9 = 0x0;
  this._index++;
  while (this._index < this._list.length) {
    if (this.currentCommand().indent === this._indent) {
      if (this.currentCommand().code === 0x194 && this.nextEventCode() !== 0x66) {
        break;
      } else {
        if (this.currentCommand().code === 0x66) {
          this.adjustShowChoiceExtension(_0x5aefd9, this.currentCommand(), _0x7e1096);
          this._index -= 0x2;
        } else if (this.currentCommand().code === 0x192) {
          this.currentCommand().parameters[0x0] = _0x5aefd9;
          _0x5aefd9++;
        }
      }
    }
    this._index++;
  }
  this._index = _0x7e1096;
  return this.currentCommand().parameters;
};
Game_Interpreter.prototype.adjustShowChoiceExtension = function (_0x1ab196, _0x25afb1, _0x25e5ac) {
  this.adjustShowChoiceDefault(_0x1ab196, _0x25afb1, _0x25e5ac);
  this.adjustShowChoiceCancel(_0x1ab196, _0x25afb1, _0x25e5ac);
  this.addExtraShowChoices(_0x25afb1, _0x25e5ac);
};
Game_Interpreter.prototype.adjustShowChoiceDefault = function (_0x141c40, _0x5cf10c, _0x3136fc) {
  if (_0x5cf10c.parameters[0x2] < 0x0) {
    return;
  }
  const _0x541d53 = _0x5cf10c.parameters[0x2] + _0x141c40;
  this._list[_0x3136fc].parameters[0x2] = _0x541d53;
};
Game_Interpreter.prototype.adjustShowChoiceCancel = function (_0x4d511c, _0x58c439, _0x4211aa) {
  if (_0x58c439.parameters[0x1] >= 0x0) {
    var _0x3a2ac0 = _0x58c439.parameters[0x1] + _0x4d511c;
    this._list[_0x4211aa].parameters[0x1] = _0x3a2ac0;
  } else if (_0x58c439.parameters[0x1] === -0x2) {
    this._list[_0x4211aa].parameters[0x1] = _0x58c439.parameters[0x1];
  }
};
Game_Interpreter.prototype.addExtraShowChoices = function (_0x540212, _0x30ea12) {
  for (const _0xf692d6 of _0x540212.parameters[0x0]) {
    this._list[_0x30ea12].parameters[0x0].push(_0xf692d6);
  }
  this._list.splice(this._index - 0x1, 0x2);
};
Game_Interpreter.prototype.prepareShowTextPluginCommandFollowups = function (_0x4d8f47) {
  const _0x517d8b = _0x4d8f47[0x1];
  if (_0x517d8b === "SelectWeapon") {
    this._index++;
    this.setWeaponChoice(_0x4d8f47);
  } else {
    if (_0x517d8b === "SelectArmor") {
      this._index++;
      this.setArmorChoice(_0x4d8f47);
    } else if (_0x517d8b === "SelectSkill" && Imported.VisuMZ_1_SkillsStatesCore) {
      this._index++;
      this.setSkillChoice(_0x4d8f47);
    }
  }
};
Game_Interpreter.prototype.setWeaponChoice = function (_0xcf6025) {
  const _0x32e33a = JSON.parse(JSON.stringify(_0xcf6025[0x3]));
  VisuMZ.ConvertParams(_0x32e33a, _0x32e33a);
  $gameMessage.setWeaponChoice(_0x32e33a.VariableID || 0x0, _0x32e33a.WeaponTypeID || 0x0);
};
Game_Interpreter.prototype.setArmorChoice = function (_0x452d33) {
  const _0x1d3013 = JSON.parse(JSON.stringify(_0x452d33[0x3]));
  VisuMZ.ConvertParams(_0x1d3013, _0x1d3013);
  $gameMessage.setArmorChoice(_0x1d3013.VariableID || 0x0, _0x1d3013.ArmorTypeID || 0x0, _0x1d3013.EquipTypeID || 0x0);
};
Game_Interpreter.prototype.setSkillChoice = function (_0x40cec8) {
  const _0x370690 = JSON.parse(JSON.stringify(_0x40cec8[0x3]));
  VisuMZ.ConvertParams(_0x370690, _0x370690);
  $gameMessage.setSkillChoice(_0x370690.VariableID || 0x0, _0x370690.ActorID || 0x0, _0x370690.SkillTypeID || 0x0);
};
function Game_MessageCommonEvent() {
  this.initialize(...arguments);
}
Game_MessageCommonEvent.prototype.initialize = function (_0x18ddce, _0x288f5c) {
  this._commonEventId = _0x18ddce;
  this._eventId = _0x288f5c || 0x0;
  this.refresh();
};
Game_MessageCommonEvent.prototype.event = function () {
  return $dataCommonEvents[this._commonEventId];
};
Game_MessageCommonEvent.prototype.list = function () {
  return this.event().list;
};
Game_MessageCommonEvent.prototype.refresh = function () {
  this._interpreter = new Game_Interpreter();
  this._interpreter.setup(this.list(), this._eventId);
};
Game_MessageCommonEvent.prototype.update = function () {
  if (this._interpreter) {
    if (this._interpreter.isRunning()) {
      this._interpreter.update();
    } else {
      this.clear();
    }
  }
};
Game_MessageCommonEvent.prototype.clear = function () {
  this._interpreter = null;
};
Scene_Message.prototype.messageWindowRect = function () {
  const _0x36f7e7 = Math.min(Graphics.width, $gameSystem.getMessageWindowWidth());
  const _0x73c569 = $gameSystem.getMessageWindowRows();
  const _0x3330fd = this.calcWindowHeight(_0x73c569, false);
  const _0x33c67d = (Graphics.boxWidth - _0x36f7e7) / 0x2;
  return new Rectangle(_0x33c67d, 0x0, _0x36f7e7, _0x3330fd);
};
VisuMZ.MessageCore.Scene_Message_createChoiceListWindow = Scene_Message.prototype.createChoiceListWindow;
Scene_Message.prototype.createChoiceListWindow = function () {
  VisuMZ.MessageCore.Scene_Message_createChoiceListWindow.call(this);
  this.createChoiceListHelpWindow();
};
Scene_Message.prototype.createChoiceListHelpWindow = function () {
  const _0x3141bb = this.choiceListHelpWindowRect();
  const _0x9843c7 = new Window_Help(_0x3141bb);
  _0x9843c7.hide();
  this._choiceListWindow.setHelpWindow(_0x9843c7);
  this._messageWindow.setChoiceListHelpWindow(_0x9843c7);
  this.addWindow(_0x9843c7);
  this._choiceListHelpWindow = _0x9843c7;
};
Scene_Message.prototype.choiceListHelpWindowRect = function () {
  const _0x43c9d7 = Graphics.boxWidth;
  const _0x2d222b = this.calcWindowHeight(0x2, false);
  return new Rectangle(0x0, 0x0, _0x43c9d7, _0x2d222b);
};
Window_Message.prototype.setChoiceListHelpWindow = function (_0x1587fe) {
  this._choiceListHelpWindow = _0x1587fe;
};
Window_Message.prototype.updateChoiceListHelpWindowPlacement = function () {
  if (!this._choiceListHelpWindow) {
    return;
  }
  const _0x51cb9c = this._choiceListHelpWindow;
  if (_0x51cb9c) {
    _0x51cb9c.y = this.y > 0x0 ? 0x0 : Graphics.boxHeight - _0x51cb9c.height;
  }
};
VisuMZ.MessageCore.Scene_Options_maxCommands = Scene_Options.prototype.maxCommands;
Scene_Options.prototype.maxCommands = function () {
  let _0x104671 = VisuMZ.MessageCore.Scene_Options_maxCommands.call(this);
  const _0x411c34 = VisuMZ.MessageCore.Settings;
  if (_0x411c34.TextSpeed.AdjustRect) {
    if (_0x411c34.Localization.AddOption && TextManager.isVisuMzLocalizationEnabled()) {
      _0x104671++;
    }
    if (_0x411c34.TextSpeed.AddOption) {
      _0x104671++;
    }
  }
  return _0x104671;
};
VisuMZ.MessageCore.Sprite_Picture_updateBitmap = Sprite_Picture.prototype.updateBitmap;
Sprite_Picture.prototype.updateBitmap = function () {
  VisuMZ.MessageCore.Sprite_Picture_updateBitmap.call(this);
  this.createPictureText();
};
VisuMZ.MessageCore.Sprite_Picture_update = Sprite_Picture.prototype.update;
Sprite_Picture.prototype.update = function () {
  VisuMZ.MessageCore.Sprite_Picture_update.call(this);
  this.updatePictureText();
};
Sprite_Picture.prototype.updatePictureText = function () {
  if (!this.visible) {
    return;
  }
  this.resizePictureText();
  this.anchorPictureText();
  this.drawPictureText();
  this.attachPictureText();
};
Sprite_Picture.prototype.createPictureText = function () {
  if (this._pictureTextWindow) {
    return;
  }
  if (this._pictureTextSprite) {
    return;
  }
  const _0x300bfa = new Rectangle(0x0, 0x0, 0x0, 0x0);
  this._pictureTextWindow = new Window_Base(_0x300bfa);
  this._pictureTextWindow.padding = 0x0;
  this._pictureTextSprite = new Sprite();
  this.addChildAt(this._pictureTextSprite, 0x0);
  this._pictureTextWidth = 0x0;
  this._pictureTextHeight = 0x0;
  this._pictureTextCache = {};
};
Sprite_Picture.prototype.resizePictureText = function () {
  if (!this._pictureTextWindow) {
    return;
  }
  if (this._pictureTextWidth === this.width && this._pictureTextHeight === this.height) {
    return;
  }
  this._pictureTextWidth = this.width;
  this._pictureTextHeight = this.height;
  this._pictureTextCache = {};
  this._pictureTextWindow.move(0x0, 0x0, this.width, this.height);
};
Sprite_Picture.prototype.anchorPictureText = function () {
  if (!this._pictureTextSprite) {
    return;
  }
  this._pictureTextSprite.anchor.x = this.anchor.x;
  this._pictureTextSprite.anchor.y = this.anchor.y;
};
Sprite_Picture.prototype.drawPictureText = function () {
  if (!this._pictureTextWindow) {
    return;
  }
  if (!this.anyPictureTextChanges()) {
    return;
  }
  const _0x1ac8b3 = ["upperleft", 'up', "upperright", "left", 'center', "right", "lowerleft", "down", 'lowerright'];
  this._pictureTextWindow.createContents();
  for (const _0x305d6a of _0x1ac8b3) {
    this.drawPictureTextZone(_0x305d6a);
  }
};
Sprite_Picture.prototype.anyPictureTextChanges = function () {
  if ($gameScreen.needsPictureTextRefresh(this._pictureId)) {
    return true;
  }
  const _0x133dfa = ["upperleft", 'up', "upperright", 'left', 'center', "right", "lowerleft", "down", "lowerright"];
  for (const _0x4b2faf of _0x133dfa) {
    const _0x137cda = $gameScreen.getPictureText(this._pictureId, _0x4b2faf);
    if (this._pictureTextCache[_0x4b2faf] === _0x137cda) {
      continue;
    }
    return true;
  }
  return false;
};
Sprite_Picture.prototype.drawPictureTextZone = function (_0x5d7201) {
  $gameScreen.clearPictureTextRefresh(this._pictureId);
  const _0x5bbfbf = $gameScreen.getPictureText(this._pictureId, _0x5d7201);
  this._pictureTextCache[_0x5d7201] = _0x5bbfbf;
  const _0x50c155 = this._pictureTextWindow.textSizeEx(_0x5bbfbf);
  let _0xd2ae14 = $gameScreen.getPictureTextBuffer(this._pictureId);
  let _0x2c2349 = _0xd2ae14;
  let _0x56ccd1 = _0xd2ae14;
  if (['up', "center", "down"].includes(_0x5d7201)) {
    _0x2c2349 = Math.floor((this.width - _0x50c155.width) / 0x2);
  } else if (["upperright", 'right', "lowerright"].includes(_0x5d7201)) {
    _0x2c2349 = Math.floor(this.width - _0x50c155.width - _0xd2ae14);
  }
  if (["left", 'center', 'right'].includes(_0x5d7201)) {
    _0x56ccd1 = Math.floor((this.height - _0x50c155.height) / 0x2);
  } else if (["lowerleft", "down", "lowerright"].includes(_0x5d7201)) {
    _0x56ccd1 = Math.floor(this.height - _0x50c155.height - _0xd2ae14);
  }
  this._pictureTextWindow.drawTextEx(_0x5bbfbf, _0x2c2349, _0x56ccd1);
};
Sprite_Picture.prototype.attachPictureText = function () {
  if (!this._pictureTextWindow) {
    return;
  }
  if (!this._pictureTextSprite) {
    return;
  }
  this._pictureTextSprite.bitmap = this._pictureTextWindow.contents;
};
VisuMZ.MessageCore.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function (_0x159fcf) {
  this.initMessageCore(_0x159fcf);
  VisuMZ.MessageCore.Window_Base_initialize.call(this, _0x159fcf);
};
Window_Base.prototype.initMessageCore = function (_0x4e9148) {
  this.initTextAlignement();
  this.resetWordWrap();
  this.registerResetRect(_0x4e9148);
};
Window_Base.prototype.initTextAlignement = function () {
  this.setTextAlignment('default');
};
Window_Base.prototype.setTextAlignment = function (_0x2149c8) {
  this._textAlignment = _0x2149c8;
};
Window_Base.prototype.getTextAlignment = function () {
  return this._textAlignment;
};
VisuMZ.MessageCore.Window_Base_textSizeEx = Window_Base.prototype.textSizeEx;
Window_Base.prototype.textSizeEx = function (_0x2af978) {
  this.resetWordWrap();
  return VisuMZ.MessageCore.Window_Base_textSizeEx.call(this, _0x2af978);
};
Window_Base.prototype.textSizeExRaw = function (_0x1a0b2c) {
  return VisuMZ.MessageCore.Window_Base_textSizeEx.call(this, _0x1a0b2c);
};
VisuMZ.MessageCore.Window_Base_processAllText = Window_Base.prototype.processAllText;
Window_Base.prototype.processAllText = function (_0x4e761b) {
  VisuMZ.MessageCore.Window_Base_processAllText.call(this, _0x4e761b);
  if (_0x4e761b.drawing) {
    this.setTextAlignment("default");
  }
};
Window_Base.prototype.resetWordWrap = function () {
  this.setWordWrap(false);
};
Window_Base.prototype.isWordWrapEnabled = function () {
  return this._wordWrap;
};
Window_Base.prototype.setWordWrap = function (_0x452ac4) {
  this._wordWrap = _0x452ac4;
  return '';
};
Window_Base.prototype.registerResetRect = function (_0x408a13) {
  this._resetRect = JsonEx.makeDeepCopy(_0x408a13);
};
Window_Base.prototype.resetFontSettings = function () {
  this.contents.fontFace = $gameSystem.mainFontFace();
  this.contents.fontSize = $gameSystem.mainFontSize();
  this.contents.fontBold = false;
  this.contents.fontItalic = false;
  this._textCasing = 0x0;
  this._textCasingUpperState = true;
  this.resetTextColor();
};
Window_Base.prototype.resetTextColor = function () {
  this.changeTextColor(ColorManager.normalColor());
  this.changeOutlineColor(ColorManager.outlineColor());
  const _0x1415c5 = VisuMZ.MessageCore.Settings.General;
  if (_0x1415c5.DefaultOutlineWidth === undefined) {
    _0x1415c5.DefaultOutlineWidth = 0x3;
  }
  this.contents.outlineWidth = _0x1415c5.DefaultOutlineWidth;
  this.setColorLock(false);
};
Window_Base.prototype.setColorLock = function (_0x234e7b) {
  this._colorLock = _0x234e7b;
};
Window_Base.prototype.isColorLocked = function () {
  return this._colorLock;
};
Window_Base.prototype.isAutoColorAffected = function () {
  return false;
};
Window_Base.prototype.getPreservedFontSettings = function () {
  const _0x7afd24 = ["fontFace", "fontSize", 'fontBold', "fontItalic", "textColor", 'outLineColor', "outlineWidth", "paintOpacity"];
  let _0x8f2368 = {};
  for (const _0x4e1754 of _0x7afd24) {
    _0x8f2368[_0x4e1754] = this.contents[_0x4e1754];
  }
  return _0x8f2368;
};
Window_Base.prototype.returnPreservedFontSettings = function (_0x38b530) {
  for (const _0x4e276c in _0x38b530) {
    this.contents[_0x4e276c] = _0x38b530[_0x4e276c];
  }
};
VisuMZ.MessageCore.Window_Base_update = Window_Base.prototype.update;
Window_Base.prototype.update = function () {
  VisuMZ.MessageCore.Window_Base_update.call(this);
  this.updateMove();
};
Window_Base.prototype.canMove = function () {
  return false;
};
Window_Base.prototype.updateMove = function () {
  if (this._moveDuration > 0x0) {
    if (this.canMove()) {
      this.x = this.applyMoveEasing(this.x, this._moveTargetX);
      this.y = this.applyMoveEasing(this.y, this._moveTargetY);
      this.width = this.applyMoveEasing(this.width, this._moveTargetWidth);
      this.height = this.applyMoveEasing(this.height, this._moveTargetHeight);
      this.clampPlacementPosition();
    }
    this._moveDuration--;
  }
};
Window_Base.prototype.clampPlacementPosition = function (_0x59f4dd, _0x31e9f6) {
  if (!_0x59f4dd) {
    this.width = Math.min(this.width, Graphics.width);
    this.height = Math.min(this.height, Graphics.height);
  }
  if (!_0x31e9f6) {
    const _0x2030c4 = -(Math.floor(Graphics.width - Graphics.boxWidth) / 0x2);
    const _0x2cf409 = _0x2030c4 + Graphics.width - this.width;
    const _0x2b22d5 = -(Math.floor(Graphics.height - Graphics.boxHeight) / 0x2);
    const _0x553e81 = _0x2b22d5 + Graphics.height - this.height;
    this.x = this.x.clamp(_0x2030c4, _0x2cf409);
    this.y = this.y.clamp(_0x2b22d5, _0x553e81);
  }
};
Window_Base.prototype.applyMoveEasing = function (_0x3e0761, _0x1e043e) {
  const _0x4c1554 = this._moveDuration;
  const _0xc0dd50 = this._wholeMoveDuration;
  const _0x2c74d6 = this.calcMoveEasing((_0xc0dd50 - _0x4c1554) / _0xc0dd50);
  const _0x248daa = this.calcMoveEasing((_0xc0dd50 - _0x4c1554 + 0x1) / _0xc0dd50);
  const _0x58624a = (_0x3e0761 - _0x1e043e * _0x2c74d6) / (0x1 - _0x2c74d6);
  return _0x58624a + (_0x1e043e - _0x58624a) * _0x248daa;
};
Window_Base.prototype.calcMoveEasing = function (_0x302779) {
  switch (this._moveEasingType) {
    case 0x0:
      return _0x302779;
    case 0x1:
      return this.easeIn(_0x302779, 0x2);
    case 0x2:
      return this.easeOut(_0x302779, 0x2);
    case 0x3:
      return this.easeInOut(_0x302779, 0x2);
    default:
      return Imported.VisuMZ_0_CoreEngine ? VisuMZ.applyMoveEasing(_0x302779, this._moveEasingType) : _0x302779;
  }
};
Window_Base.prototype.moveTo = function (_0x4cfef0, _0x3121eb, _0xad7258, _0x2af080, _0x331c1f, _0x54cdcc) {
  this._moveTargetX = _0x4cfef0;
  this._moveTargetY = _0x3121eb;
  this._moveTargetWidth = _0xad7258 || this.width;
  this._moveTargetHeight = _0x2af080 || this.height;
  this._moveDuration = _0x331c1f || 0x1;
  if (this._moveDuration <= 0x0) {
    this._moveDuration = 0x1;
  }
  this._wholeMoveDuration = this._moveDuration;
  this._moveEasingType = _0x54cdcc || 0x0;
  if (_0x331c1f <= 0x0) {
    this.updateMove();
  }
};
Window_Base.prototype.moveBy = function (_0x1e4b76, _0x1c0acf, _0x121802, _0x2425c9, _0xf22640, _0x182c6e) {
  this._moveTargetX = this.x + _0x1e4b76;
  this._moveTargetY = this.y + _0x1c0acf;
  this._moveTargetWidth = this.width + (_0x121802 || 0x0);
  this._moveTargetHeight = this.height + (_0x2425c9 || 0x0);
  this._moveDuration = _0xf22640 || 0x1;
  if (this._moveDuration <= 0x0) {
    this._moveDuration = 0x1;
  }
  this._wholeMoveDuration = this._moveDuration;
  this._moveEasingType = _0x182c6e || 0x0;
  if (_0xf22640 <= 0x0) {
    this.updateMove();
  }
};
Window_Base.prototype.resetRect = function (_0x59f644, _0x459712) {
  this.moveTo(this._resetRect.x, this._resetRect.y, this._resetRect.width, this._resetRect.height, _0x59f644, _0x459712);
};
VisuMZ.MessageCore.Window_Base_changeTextColor = Window_Base.prototype.changeTextColor;
Window_Base.prototype.changeTextColor = function (_0x2479ca) {
  if (this.isColorLocked()) {
    return;
  }
  _0x2479ca = _0x2479ca.replace(/\,/g, '');
  this._textColorStack = this._textColorStack || [];
  this._textColorStack.unshift(this.contents.textColor);
  VisuMZ.MessageCore.Window_Base_changeTextColor.call(this, _0x2479ca);
};
Window_Base.prototype.processPreviousColor = function (_0x4dbebf) {
  this.obtainEscapeParam(_0x4dbebf);
  if (this.isColorLocked()) {
    return;
  }
  if (_0x4dbebf.drawing) {
    this._textColorStack = this._textColorStack || [];
    this.contents.textColor = this._textColorStack.shift() || ColorManager.normalColor();
  }
};
Window_Base.prototype.convertEscapeCharacters = function (_0x4e4f77) {
  _0x4e4f77 = this.convertTextMacros(_0x4e4f77);
  _0x4e4f77 = this.convertBackslashCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertVariableEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertButtonAssistEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.preConvertEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertShowChoiceEscapeCodes(_0x4e4f77);
  _0x4e4f77 = this.convertFontSettingsEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertTextAlignmentEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertLockColorsEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertCasingEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertBaseEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertHardcodedEscapeReplacements(_0x4e4f77);
  _0x4e4f77 = this.convertMessageCoreEscapeActions(_0x4e4f77);
  _0x4e4f77 = this.convertMessageCoreEscapeReplacements(_0x4e4f77);
  _0x4e4f77 = this.postConvertEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.convertVariableEscapeCharacters(_0x4e4f77);
  _0x4e4f77 = this.processAutoColorWords(_0x4e4f77);
  _0x4e4f77 = this.prepareWordWrapEscapeCharacters(_0x4e4f77);
  return _0x4e4f77;
};
Window_Base.prototype.convertTextMacros = function (_0x2796cf) {
  this._textMacroFound = false;
  for (const _0x363885 of VisuMZ.MessageCore.Settings.TextMacros) {
    if (_0x2796cf && _0x2796cf.match(_0x363885.textCodeCheck)) {
      this._textMacroFound = true;
      _0x2796cf = _0x2796cf.replace(_0x363885.textCodeCheck, _0x363885.textCodeResult.bind(this));
    }
  }
  return _0x2796cf || '';
};
Window_Base.prototype.convertBackslashCharacters = function (_0xcbfea4) {
  _0xcbfea4 = _0xcbfea4.replace(/\\/g, "");
  _0xcbfea4 = _0xcbfea4.replace(/\x1b\x1b/g, "\\");
  return _0xcbfea4;
};
Window_Base.prototype.convertVariableEscapeCharacters = function (_0x4a692e) {
  for (;;) {
    if (_0x4a692e.match(/\\V\[(\d+)\]/gi)) {
      _0x4a692e = _0x4a692e.replace(/\\V\[(\d+)\]/gi, (_0x163e56, _0x4f0bc1) => this.convertBackslashCharacters(String($gameVariables.value(parseInt(_0x4f0bc1)))));
    } else {
      if (_0x4a692e.match(/\x1bV\[(\d+)\]/gi)) {
        _0x4a692e = _0x4a692e.replace(/\x1bV\[(\d+)\]/gi, (_0x4e0cdb, _0x1fe389) => this.convertBackslashCharacters(String($gameVariables.value(parseInt(_0x1fe389)))));
      } else {
        break;
      }
    }
  }
  return _0x4a692e;
};
Window_Base.prototype.convertButtonAssistEscapeCharacters = function (_0x3b5a67) {
  if (Imported.VisuMZ_0_CoreEngine) {
    _0x3b5a67 = _0x3b5a67.replace(/<Up (?:KEY|BUTTON)>/gi, this.convertButtonAssistText('up'));
    _0x3b5a67 = _0x3b5a67.replace(/<Left (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("left"));
    _0x3b5a67 = _0x3b5a67.replace(/<Right (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("right"));
    _0x3b5a67 = _0x3b5a67.replace(/<Down (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("down"));
    _0x3b5a67 = _0x3b5a67.replace(/<Ok (?:KEY|BUTTON)>/gi, this.convertButtonAssistText('ok'));
    _0x3b5a67 = _0x3b5a67.replace(/<Cancel (?:KEY|BUTTON)>/gi, this.convertButtonAssistText('cancel'));
    _0x3b5a67 = _0x3b5a67.replace(/<Menu (?:KEY|BUTTON)>/gi, this.convertButtonAssistText('menu'));
    _0x3b5a67 = _0x3b5a67.replace(/<Shift (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("shift"));
    _0x3b5a67 = _0x3b5a67.replace(/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("pageup"));
    _0x3b5a67 = _0x3b5a67.replace(/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("pagedown"));
  }
  return _0x3b5a67;
};
Window_Base.prototype.convertButtonAssistText = function (_0x5863e3) {
  let _0x2f2f0a = TextManager.getInputButtonString(_0x5863e3) || '';
  _0x2f2f0a = this.convertBackslashCharacters(_0x2f2f0a);
  _0x2f2f0a = this.convertVariableEscapeCharacters(_0x2f2f0a);
  return _0x2f2f0a.trim();
};
Window_Base.prototype.preConvertEscapeCharacters = function (_0x3bd8ec) {
  _0x3bd8ec = this.switchOutTextForLocalization(_0x3bd8ec);
  this.registerActorNameAutoColorChanges();
  return _0x3bd8ec;
};
Window_Base.prototype.switchOutTextForLocalization = function (_0x12ee59) {
  _0x12ee59 = TextManager.parseLocalizedText(_0x12ee59);
  return _0x12ee59;
};
VisuMZ.MessageCore.String_format = String.prototype.format;
String.prototype.format = function () {
  let _0x56f3d2 = this;
  _0x56f3d2 = TextManager.parseLocalizedText(_0x56f3d2);
  return VisuMZ.MessageCore.String_format.apply(_0x56f3d2, arguments);
};
VisuMZ.MessageCore.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function (_0x2d2e45, _0x4d71f2, _0xcdddc2, _0x28402c, _0x27c13c, _0x335ca7) {
  _0x2d2e45 = TextManager.parseLocalizedText(_0x2d2e45);
  VisuMZ.MessageCore.Bitmap_drawText.call(this, _0x2d2e45, _0x4d71f2, _0xcdddc2, _0x28402c, _0x27c13c, _0x335ca7);
};
VisuMZ.MessageCore.Bitmap_drawTextTopAligned = Bitmap.prototype.drawTextTopAligned;
Bitmap.prototype.drawTextTopAligned = function (_0x3ab6b9, _0x13a352, _0x403933, _0x52ad06, _0x5829cc, _0x595771) {
  _0x3ab6b9 = TextManager.parseLocalizedText(_0x3ab6b9);
  VisuMZ.MessageCore.Bitmap_drawTextTopAligned.call(this, _0x3ab6b9, _0x13a352, _0x403933, _0x52ad06, _0x5829cc, _0x595771);
};
Window_Base.prototype.postConvertEscapeCharacters = function (_0x136a0d) {
  return _0x136a0d;
};
Window_Base.prototype.convertShowChoiceEscapeCodes = function (_0x3d2718) {
  if (this.isChoiceWindow()) {
    _0x3d2718 = _0x3d2718.replace(/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<CHOICE WIDTH:[ ](\d+)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<CHOICE INDENT:[ ](\d+)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi, '');
    _0x3d2718 = _0x3d2718.replace(/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi, '');
  }
  return _0x3d2718;
};
Window_Base.prototype.isChoiceWindow = function () {
  const _0x5e3d7f = ["Window_ChoiceList", "Window_MessageLog"];
  return _0x5e3d7f.includes(this.constructor.name);
};
Window_Base.prototype.convertFontSettingsEscapeCharacters = function (_0x2b61da) {
  _0x2b61da = _0x2b61da.replace(/<B>/gi, "BOLD[1]");
  _0x2b61da = _0x2b61da.replace(/<\/B>/gi, "BOLD[0]");
  _0x2b61da = _0x2b61da.replace(/<I>/gi, "ITALIC[1]");
  _0x2b61da = _0x2b61da.replace(/<\/I>/gi, "ITALIC[0]");
  return _0x2b61da;
};
Window_Base.prototype.convertTextAlignmentEscapeCharacters = function (_0x2a3c30) {
  _0x2a3c30 = _0x2a3c30.replace(/<LEFT>/gi, "TEXTALIGNMENT[1]");
  _0x2a3c30 = _0x2a3c30.replace(/<\/LEFT>/gi, "TEXTALIGNMENT[0]");
  _0x2a3c30 = _0x2a3c30.replace(/<CENTER>/gi, "TEXTALIGNMENT[2]");
  _0x2a3c30 = _0x2a3c30.replace(/<\/CENTER>/gi, "TEXTALIGNMENT[0]");
  _0x2a3c30 = _0x2a3c30.replace(/<RIGHT>/gi, "TEXTALIGNMENT[3]");
  _0x2a3c30 = _0x2a3c30.replace(/<\/RIGHT>/gi, "TEXTALIGNMENT[0]");
  return _0x2a3c30;
};
Window_Base.prototype.convertLockColorsEscapeCharacters = function (_0x2cf2b7) {
  _0x2cf2b7 = _0x2cf2b7.replace(/<COLORLOCK>/gi, "COLORLOCK[1]");
  _0x2cf2b7 = _0x2cf2b7.replace(/<\/COLORLOCK>/gi, "COLORLOCK[0]");
  _0x2cf2b7 = _0x2cf2b7.replace(/\(\(\(/gi, "COLORLOCK[1]");
  _0x2cf2b7 = _0x2cf2b7.replace(/\)\)\)/gi, "COLORLOCK[0]");
  return _0x2cf2b7;
};
Window_Base.prototype.convertCasingEscapeCharacters = function (_0x455abd) {
  _0x455abd = _0x455abd.replace(/<(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi, "CASING[1]");
  _0x455abd = _0x455abd.replace(/<\/(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi, "CASING[0]");
  _0x455abd = _0x455abd.replace(/<(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi, "CASING[2]");
  _0x455abd = _0x455abd.replace(/<\/(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi, "CASING[0]");
  _0x455abd = _0x455abd.replace(/<(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi, "CASING[3]");
  _0x455abd = _0x455abd.replace(/<\/(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi, "CASING[0]");
  _0x455abd = _0x455abd.replace(/<(?:ALT|ALTERNATE|ALT CASE)>/gi, "CASING[4]");
  _0x455abd = _0x455abd.replace(/<\/(?:ALT|ALTERNATE|ALT CASE)>/gi, "CASING[0]");
  _0x455abd = _0x455abd.replace(/<(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi, "CASING[5]");
  _0x455abd = _0x455abd.replace(/<\/(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi, "CASING[0]");
  return _0x455abd;
};
Window_Base.prototype.convertBaseEscapeCharacters = function (_0x3d7400) {
  _0x3d7400 = _0x3d7400.replace(/\x1bN\[(\d+)\]/gi, (_0x846cc2, _0x5a50c1) => this.actorName(parseInt(_0x5a50c1)));
  _0x3d7400 = _0x3d7400.replace(/\x1bP\[(\d+)\]/gi, (_0x10d44a, _0x29d0f1) => this.partyMemberName(parseInt(_0x29d0f1)));
  _0x3d7400 = _0x3d7400.replace(/\x1bG/gi, TextManager.currencyUnit);
  return _0x3d7400;
};
Window_Base.prototype.convertHardcodedEscapeReplacements = function (_0x5a106a) {
  _0x5a106a = _0x5a106a.replace(/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi, this.battleTargetName());
  _0x5a106a = _0x5a106a.replace(/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi, this.battleUserName());
  _0x5a106a = _0x5a106a.replace(/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi, this.battleActionName(true));
  _0x5a106a = _0x5a106a.replace(/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi, this.battleActionName(false));
  return _0x5a106a;
};
Window_Base.prototype.battleTargetName = function () {
  if (!SceneManager.isSceneBattle()) {
    return '';
  }
  if (BattleManager._target) {
    return BattleManager._target.name();
  }
  if (BattleManager._targets[0x0]) {
    return BattleManager._targets[0x0].name();
  }
  return '';
};
Window_Base.prototype.battleUserName = function () {
  if (!SceneManager.isSceneBattle()) {
    return '';
  }
  let _0x1024e2 = null;
  _0x1024e2 = BattleManager._subject;
  if (!_0x1024e2 && BattleManager.isInputting()) {
    _0x1024e2 = BattleManager.actor();
  }
  return _0x1024e2 ? _0x1024e2.name() : '';
};
Window_Base.prototype.battleActionName = function (_0x34fdf1) {
  if (!SceneManager.isSceneBattle()) {
    return '';
  }
  let _0x546b54 = BattleManager._action || null;
  if (!_0x546b54 && BattleManager.isInputting()) {
    _0x546b54 = BattleManager.inputtingAction();
  }
  if (_0x546b54 && _0x546b54.item()) {
    let _0x2678ec = '';
    if (_0x34fdf1) {
      _0x2678ec += "I[%1]".format(_0x546b54.item().iconIndex);
    }
    _0x2678ec += _0x546b54.item().name;
    return _0x2678ec;
  }
  return '';
};
Window_Base.prototype.convertMessageCoreEscapeActions = function (_0x29235a) {
  for (const _0x2806fb of VisuMZ.MessageCore.Settings.TextCodeActions) {
    if (_0x29235a.match(_0x2806fb.textCodeCheck)) {
      _0x29235a = _0x29235a.replace(_0x2806fb.textCodeCheck, _0x2806fb.textCodeResult);
      _0x29235a = this.convertVariableEscapeCharacters(_0x29235a);
    }
  }
  return _0x29235a;
};
Window_Base.prototype.convertMessageCoreEscapeReplacements = function (_0x2c3db4) {
  for (const _0x3ca1a7 of VisuMZ.MessageCore.Settings.TextCodeReplace) {
    if (_0x2c3db4.match(_0x3ca1a7.textCodeCheck)) {
      _0x2c3db4 = _0x2c3db4.replace(_0x3ca1a7.textCodeCheck, _0x3ca1a7.textCodeResult.bind(this));
      _0x2c3db4 = this.convertVariableEscapeCharacters(_0x2c3db4);
    }
  }
  return _0x2c3db4;
};
Window_Base.prototype.actorName = function (_0x2dcd66) {
  const _0x30a39a = _0x2dcd66 >= 0x1 ? $gameActors.actor(_0x2dcd66) : null;
  const _0x30fa59 = _0x30a39a ? _0x30a39a.name() : '';
  const _0x383466 = Number(VisuMZ.MessageCore.Settings.AutoColor.Actors);
  return this.isAutoColorAffected() && _0x383466 !== 0x0 ? "C[%1]%2PREVCOLOR[0]".format(_0x383466, _0x30fa59) : _0x30fa59;
};
Window_Base.prototype.partyMemberName = function (_0x16c94a) {
  const _0x22f965 = _0x16c94a >= 0x1 ? $gameParty.members()[_0x16c94a - 0x1] : null;
  const _0x5b4f58 = _0x22f965 ? _0x22f965.name() : '';
  const _0x1e82fd = Number(VisuMZ.MessageCore.Settings.AutoColor.Actors);
  return this.isAutoColorAffected() && _0x1e82fd !== 0x0 ? "C[%1]%2PREVCOLOR[0]".format(_0x1e82fd, _0x5b4f58) : _0x5b4f58;
};
Window_Base.prototype.processAutoColorWords = function (_0x5b5850) {
  if (this.isAutoColorAffected()) {
    _0x5b5850 = this.processStoredAutoColorChanges(_0x5b5850);
    _0x5b5850 = this.processActorNameAutoColorChanges(_0x5b5850);
  }
  return _0x5b5850;
};
Window_Base.prototype.processStoredAutoColorChanges = function (_0x4fc61c) {
  for (autoColor of VisuMZ.MessageCore.AutoColorRegExp) {
    _0x4fc61c = _0x4fc61c.replace(autoColor[0x0], autoColor[0x1]);
  }
  return _0x4fc61c;
};
Window_Base.prototype.clearActorNameAutoColor = function () {
  this._autoColorActorNames = [];
};
Window_Base.prototype.registerActorNameAutoColorChanges = function () {
  this.clearActorNameAutoColor();
  const _0x1e077c = VisuMZ.MessageCore.Settings.AutoColor;
  const _0xe4d476 = _0x1e077c.Actors;
  if (_0xe4d476 <= 0x0) {
    return;
  }
  for (const _0x18855d of $gameActors._data) {
    if (!_0x18855d) {
      continue;
    }
    const _0x325c36 = _0x18855d.name();
    if (_0x325c36.trim().length <= 0x0) {
      continue;
    }
    if (/^\d+$/.test(_0x325c36)) {
      continue;
    }
    if (_0x325c36.match(/-----/i)) {
      continue;
    }
    let _0x26f2b3 = VisuMZ.MessageCore.ConvertTextAutoColorRegExpFriendly(_0x325c36);
    const _0x4ef2ef = new RegExp("\\b" + _0x26f2b3 + "\\b", 'g');
    const _0x56978c = "C[%1]%2PREVCOLOR[0]".format(_0xe4d476, _0x325c36);
    this._autoColorActorNames.push([_0x4ef2ef, _0x56978c]);
  }
};
Window_Base.prototype.processActorNameAutoColorChanges = function (_0x2b8452) {
  if (this._autoColorActorNames === undefined) {
    this.registerActorNameAutoColorChanges();
  }
  for (autoColor of this._autoColorActorNames) {
    _0x2b8452 = _0x2b8452.replace(autoColor[0x0], autoColor[0x1]);
  }
  return _0x2b8452;
};
Window_Base.prototype.databaseObjectName = function (_0x3e6306, _0x45ead2, _0x3d1c5a) {
  if (!_0x3e6306) {
    return '';
  }
  const _0x333eba = _0x3e6306[_0x45ead2];
  let _0x456d20 = '';
  if (_0x333eba && _0x3d1c5a && _0x333eba.iconIndex) {
    _0x456d20 = "i[%1]%2".format(_0x333eba.iconIndex, _0x333eba.name);
  } else if (_0x333eba) {
    _0x456d20 = _0x333eba.name;
  } else {
    _0x456d20 = '';
  }
  _0x456d20 = TextManager.parseLocalizedText(_0x456d20);
  if (this.isAutoColorAffected()) {
    _0x456d20 = this.applyDatabaseAutoColor(_0x456d20, _0x3e6306);
  }
  return _0x456d20;
};
Window_Base.prototype.lastGainedObjectIcon = function () {
  const _0x29857c = $gameParty.getLastGainedItemData();
  if (_0x29857c.id < 0x0) {
    return '';
  }
  let _0x2f854a = null;
  if (_0x29857c.type === 0x0) {
    _0x2f854a = $dataItems[_0x29857c.id];
  }
  if (_0x29857c.type === 0x1) {
    _0x2f854a = $dataWeapons[_0x29857c.id];
  }
  if (_0x29857c.type === 0x2) {
    _0x2f854a = $dataArmors[_0x29857c.id];
  }
  if (!_0x2f854a) {
    return '';
  }
  return "i[%1]".format(_0x2f854a.iconIndex);
};
Window_Base.prototype.lastGainedObjectName = function (_0x255d1f) {
  const _0x2cde6c = $gameParty.getLastGainedItemData();
  if (_0x2cde6c.id < 0x0) {
    return '';
  }
  let _0x343382 = null;
  if (_0x2cde6c.type === 0x0) {
    _0x343382 = $dataItems[_0x2cde6c.id];
  }
  if (_0x2cde6c.type === 0x1) {
    _0x343382 = $dataWeapons[_0x2cde6c.id];
  }
  if (_0x2cde6c.type === 0x2) {
    _0x343382 = $dataArmors[_0x2cde6c.id];
  }
  if (!_0x343382) {
    return '';
  }
  let _0x3b5a3c = _0x343382.name || '';
  if (TextManager.isVisuMzLocalizationEnabled()) {
    _0x3b5a3c = TextManager.parseLocalizedText(_0x3b5a3c);
  }
  return _0x255d1f ? "i[%1]%2".format(_0x343382.iconIndex, _0x3b5a3c) : _0x3b5a3c;
};
Window_Base.prototype.lastGainedObjectQuantity = function () {
  const _0x2e78d9 = $gameParty.getLastGainedItemData();
  if (_0x2e78d9.id <= 0x0) {
    return '';
  }
  return _0x2e78d9.quantity;
};
Window_Base.prototype.applyDatabaseAutoColor = function (_0x764ace, _0x28c8a8) {
  const _0xe9250e = VisuMZ.MessageCore.Settings.AutoColor;
  let _0x38b382 = 0x0;
  if (_0x28c8a8 === $dataActors) {
    _0x38b382 = _0xe9250e.Actors;
  }
  if (_0x28c8a8 === $dataClasses) {
    _0x38b382 = _0xe9250e.Classes;
  }
  if (_0x28c8a8 === $dataSkills) {
    _0x38b382 = _0xe9250e.Skills;
  }
  if (_0x28c8a8 === $dataItems) {
    _0x38b382 = _0xe9250e.Items;
  }
  if (_0x28c8a8 === $dataWeapons) {
    _0x38b382 = _0xe9250e.Weapons;
  }
  if (_0x28c8a8 === $dataArmors) {
    _0x38b382 = _0xe9250e.Armors;
  }
  if (_0x28c8a8 === $dataEnemies) {
    _0x38b382 = _0xe9250e.Enemies;
  }
  if (_0x28c8a8 === $dataStates) {
    _0x38b382 = _0xe9250e.States;
  }
  if (_0x38b382 > 0x0) {
    _0x764ace = "C[%1]%2PREVCOLOR[0]".format(_0x38b382, _0x764ace);
  }
  return _0x764ace;
};
Window_Base.prototype.prepareWordWrapEscapeCharacters = function (_0x4db054) {
  if (_0x4db054.includes("TEXTALIGNMENT")) {
    this.setWordWrap(false);
    _0x4db054 = _0x4db054.replace(/<(?:BR|LINEBREAK)>/gi, " \n");
    _0x4db054 = _0x4db054.replace(/<(?:WORDWRAP|WORD WRAP)>/gi, '');
    _0x4db054 = _0x4db054.replace(/<(?:NOWORDWRAP|NO WORD WRAP)>/gi, '');
    _0x4db054 = _0x4db054.replace(/<\/(?:NOWORDWRAP|NO WORD WRAP)>/gi, '');
    return _0x4db054;
  }
  _0x4db054 = _0x4db054.replace(/<(?:WORDWRAP|WORD WRAP)>/gi, (_0x5963ac, _0x47ab78) => this.setWordWrap(true));
  _0x4db054 = _0x4db054.replace(/<(?:NOWORDWRAP|NO WORD WRAP)>/gi, (_0x160449, _0x5cff9c) => this.setWordWrap(false));
  _0x4db054 = _0x4db054.replace(/<\/(?:WORDWRAP|WORD WRAP)>/gi, (_0x21b6c9, _0x2ffb96) => this.setWordWrap(false));
  if (_0x4db054.match(Window_Message._autoSizeRegexp)) {
    this.setWordWrap(false);
  } else if (_0x4db054.match(Window_Message._autoPosRegExp)) {
    this.setWordWrap(false);
  }
  if (!this.isWordWrapEnabled()) {
    _0x4db054 = _0x4db054.replace(/<(?:BR|LINEBREAK)>/gi, " \n");
    return _0x4db054;
  }
  if (_0x4db054.length <= 0x0) {
    return _0x4db054;
  }
  if (_0x4db054.match(/[\u3040-\u30FF\u4E00-\u9FFF]/g)) {
    _0x4db054 = VisuMZ.MessageCore.SplitJpCnCharacters(_0x4db054).join('');
  }
  if (VisuMZ.MessageCore.Settings.WordWrap.LineBreakSpace) {
    _0x4db054 = _0x4db054.replace(/[\n\r]+/g, " ");
    _0x4db054 = _0x4db054.replace(/<(?:BR|LINEBREAK)>/gi, " \n");
  } else {
    _0x4db054 = _0x4db054.replace(/[\n\r]+/g, '');
    _0x4db054 = _0x4db054.replace(/<(?:BR|LINEBREAK)>/gi, "\n");
  }
  _0x4db054 = this.addWrapBreakAfterPunctuation(_0x4db054);
  _0x4db054 = _0x4db054.split(" ").join("WrapBreak[0]");
  _0x4db054 = _0x4db054.replace(/<(?:BR|LINEBREAK)>/gi, "\n");
  _0x4db054 = _0x4db054.replace(/<LINE\x1bWrapBreak[0]BREAK>/gi, "\n");
  return _0x4db054;
};
VisuMZ.MessageCore.SplitJpCnCharacters = function (_0x572a05) {
  let _0x5361d2 = [];
  let _0x4d3e35 = '';
  while (_0x572a05.length > 0x0) {
    const _0x35c89a = _0x572a05.charAt(0x0);
    _0x572a05 = _0x572a05.slice(0x1);
    if (_0x35c89a.match(/[\u3040-\u30FF\u4E00-\u9FFF]/g)) {
      if (_0x4d3e35.length > 0x0) {
        _0x5361d2.push(_0x4d3e35);
        _0x4d3e35 = '';
      }
      _0x5361d2.push(_0x35c89a + "WrapJpBreak[0]");
    } else {
      _0x4d3e35 += _0x35c89a;
    }
  }
  if (_0x4d3e35.length > 0x0) {
    _0x5361d2.push(_0x4d3e35);
    _0x4d3e35 = '';
  }
  return _0x5361d2;
};
Window_Base.prototype.addWrapBreakAfterPunctuation = function (_0x11b782) {
  return _0x11b782;
};
VisuMZ.MessageCore.Window_Base_processNewLine = Window_Base.prototype.processNewLine;
Window_Base.prototype.processNewLine = function (_0x154322) {
  VisuMZ.MessageCore.Window_Base_processNewLine.call(this, _0x154322);
  this.processTextAlignmentX(_0x154322);
};
Window_Base.prototype.processCharacter = function (_0x2918b2) {
  let _0x22a497 = _0x2918b2.text[_0x2918b2.index++];
  if (_0x22a497.charCodeAt(0x0) < 0x20) {
    this.flushTextState(_0x2918b2);
    this.processControlCharacter(_0x2918b2, _0x22a497);
  } else {
    if (this._textCasing === 0x1) {
      _0x22a497 = _0x22a497.toLowerCase();
    }
    if (this._textCasing === 0x2) {
      if (this._textCasingUpperState) {
        _0x22a497 = _0x22a497.toUpperCase();
      }
      this._textCasingUpperState = /\s/.test(_0x22a497);
    }
    if (this._textCasing === 0x3) {
      _0x22a497 = _0x22a497.toUpperCase();
    }
    if (this._textCasing === 0x4) {
      _0x22a497 = this._lastAltCase ? _0x22a497.toUpperCase() : _0x22a497.toLowerCase();
      this._lastAltCase = !this._lastAltCase;
    }
    if (this._textCasing === 0x5) {
      _0x22a497 = Math.random() < 0.5 ? _0x22a497.toUpperCase() : _0x22a497.toLowerCase();
    }
    _0x2918b2.buffer += _0x22a497;
  }
};
VisuMZ.MessageCore.Window_Base_processControlCharacter = Window_Base.prototype.processControlCharacter;
Window_Base.prototype.processControlCharacter = function (_0x5b0ceb, _0x31d73a) {
  VisuMZ.MessageCore.Window_Base_processControlCharacter.call(this, _0x5b0ceb, _0x31d73a);
  if (_0x31d73a === "WrapBreak[0]") {
    this.processWrapBreak(_0x5b0ceb);
  } else if (_0x31d73a === "WrapJpBreak[0]") {
    this.processWrapBreak(_0x5b0ceb, true);
  }
};
Window_Base.prototype.obtainEscapeString = function (_0x433015) {
  var _0x54dc61 = /^\<(.*?)\>/.exec(_0x433015.text.slice(_0x433015.index));
  return _0x54dc61 ? (_0x433015.index += _0x54dc61[0x0].length, String(_0x54dc61[0x0].slice(0x1, _0x54dc61[0x0].length - 0x1))) : '';
};
VisuMZ.MessageCore.Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function (_0x46da94, _0x46676f) {
  switch (_0x46da94) {
    case 'C':
      if (_0x46676f.drawing) {
        VisuMZ.MessageCore.Window_Base_processEscapeCharacter.call(this, _0x46da94, _0x46676f);
      } else {
        this.obtainEscapeParam(_0x46676f);
      }
      break;
    case 'I':
    case '{':
    case '}':
      VisuMZ.MessageCore.Window_Base_processEscapeCharacter.call(this, _0x46da94, _0x46676f);
      break;
    case 'FS':
      this.processFsTextCode(_0x46676f);
      break;
    case 'PX':
      this.processPxTextCode(_0x46676f);
      break;
    case 'PY':
      this.processPyTextCode(_0x46676f);
      break;
    case 'BOLD':
      this.processFontChangeBold(this.obtainEscapeParam(_0x46676f));
      break;
    case "CASING":
      this.processTextCasing(_0x46676f);
      break;
    case "CENTERPICTURE":
      this.processDrawCenteredPicture(_0x46676f);
      break;
    case "COLORLOCK":
      this.processColorLock(_0x46676f);
      break;
    case 'COMMONEVENT':
      this.processCommonEvent(_0x46676f);
      break;
    case "ITALIC":
      this.processFontChangeItalic(this.obtainEscapeParam(_0x46676f));
      break;
    case "PICTURE":
      this.processDrawPicture(_0x46676f);
      break;
    case 'PREVCOLOR':
      this.processPreviousColor(_0x46676f);
      break;
    case "TEXTALIGNMENT":
      this.processTextAlignmentChange(_0x46676f);
      break;
    case "WAIT":
      this.processCustomWait(_0x46676f);
      break;
    case "WRAPBREAK":
      this.processWrapBreak(_0x46676f);
      break;
    case "WRAPJPBREAK":
      this.processWrapBreak(_0x46676f, true);
      break;
    default:
      this.processMessageCoreEscapeActions(_0x46da94, _0x46676f);
  }
};
Window_Base.prototype.processMessageCoreEscapeActions = function (_0x499289, _0x57e371) {
  for (const _0x33e324 of VisuMZ.MessageCore.Settings.TextCodeActions) {
    if (_0x33e324.Match === _0x499289) {
      if (_0x33e324.Type === '') {
        this.obtainEscapeParam(_0x57e371);
      }
      _0x33e324.ActionJS.call(this, _0x57e371);
      if (this.constructor === Window_Message) {
        const _0x23440e = _0x33e324.CommonEvent || 0x0;
        if (_0x23440e > 0x0) {
          this.launchMessageCommonEvent(_0x23440e);
        }
      }
    }
  }
};
Window_Base.prototype.makeFontBigger = function () {
  this.contents.fontSize += VisuMZ.MessageCore.Settings.General.FontChangeValue;
  this.contents.fontSize = Math.min(this.contents.fontSize, VisuMZ.MessageCore.Settings.General.FontBiggerCap);
};
Window_Base.prototype.makeFontSmaller = function () {
  this.contents.fontSize -= VisuMZ.MessageCore.Settings.General.FontChangeValue;
  this.contents.fontSize = Math.max(this.contents.fontSize, VisuMZ.MessageCore.Settings.General.FontSmallerCap);
};
Window_Base.prototype.processFsTextCode = function (_0x4e331f) {
  const _0x5a0a7b = this.obtainEscapeParam(_0x4e331f);
  this.contents.fontSize = _0x5a0a7b.clamp(VisuMZ.MessageCore.Settings.General.FontSmallerCap, VisuMZ.MessageCore.Settings.General.FontBiggerCap);
};
Window_Base.prototype.maxFontSizeInLine = function (_0x318f1a) {
  let _0x56da57 = this.contents.fontSize;
  const _0x3e6064 = /\x1b({|}|FS)(\[(\d+)])?/gi;
  for (;;) {
    const _0x100a57 = _0x3e6064.exec(_0x318f1a);
    if (!_0x100a57) {
      break;
    }
    const _0x1db438 = String(_0x100a57[0x1]).toUpperCase();
    if (_0x1db438 === '{') {
      this.makeFontBigger();
    } else {
      if (_0x1db438 === '}') {
        this.makeFontSmaller();
      } else if (_0x1db438 === 'FS') {
        this.contents.fontSize = parseInt(_0x100a57[0x3]).clamp(VisuMZ.MessageCore.Settings.General.FontSmallerCap, VisuMZ.MessageCore.Settings.General.FontBiggerCap);
      }
    }
    if (this.contents.fontSize > _0x56da57) {
      _0x56da57 = this.contents.fontSize;
    }
  }
  return _0x56da57;
};
Window_Base.prototype.processPxTextCode = function (_0x5e3759) {
  _0x5e3759.x = this.obtainEscapeParam(_0x5e3759);
  if (VisuMZ.MessageCore.Settings.General.RelativePXPY) {
    _0x5e3759.x += _0x5e3759.startX;
  }
};
Window_Base.prototype.processPyTextCode = function (_0x28f773) {
  _0x28f773.y = this.obtainEscapeParam(_0x28f773);
  if (VisuMZ.MessageCore.Settings.General.RelativePXPY) {
    _0x28f773.y += _0x28f773.startY;
  }
};
Window_Base.prototype.processFontChangeBold = function (_0x13a4d4) {
  this.contents.fontBold = !!_0x13a4d4;
};
Window_Base.prototype.processFontChangeItalic = function (_0x2e892c) {
  this.contents.fontItalic = !!_0x2e892c;
};
Window_Base.prototype.processTextAlignmentChange = function (_0x3be7aa) {
  const _0x20ee99 = this.obtainEscapeParam(_0x3be7aa);
  if (!_0x3be7aa.drawing) {
    return;
  }
  switch (_0x20ee99) {
    case 0x0:
      this.setTextAlignment("default");
      return;
    case 0x1:
      this.setTextAlignment('left');
      break;
    case 0x2:
      this.setTextAlignment('center');
      break;
    case 0x3:
      this.setTextAlignment("right");
      break;
  }
  this.processTextAlignmentX(_0x3be7aa);
};
Window_Base.prototype.processTextAlignmentX = function (_0x46d9da) {
  if (!_0x46d9da.drawing) {
    return;
  }
  if (_0x46d9da.rtl) {
    return;
  }
  if (this.getTextAlignment() === "default") {
    return;
  }
  let _0x523cda = _0x46d9da.text.indexOf("TEXTALIGNMENT", _0x46d9da.index + 0x1);
  let _0xbe63b5 = _0x46d9da.text.indexOf("\n", _0x46d9da.index + 0x1);
  if (_0x523cda < 0x0) {
    _0x523cda = _0x46d9da.text.length + 0x1;
  }
  if (_0xbe63b5 > 0x0) {
    _0x523cda = Math.min(_0x523cda, _0xbe63b5);
  }
  const _0x4a0c50 = _0x46d9da.text.substring(_0x46d9da.index, _0x523cda);
  const _0x1c92c0 = this.textSizeExTextAlignment(_0x4a0c50).width;
  const _0x4ed853 = _0x46d9da.width || this.innerWidth - 0x8;
  const _0x4c0fdd = this.constructor === Window_Message && $gameMessage.faceName() !== '';
  switch (this.getTextAlignment()) {
    case "left":
      _0x46d9da.x = _0x46d9da.startX;
      break;
    case "center":
      _0x46d9da.x = _0x46d9da.startX;
      _0x46d9da.x += Math.floor((_0x4ed853 - _0x1c92c0) / 0x2);
      if (_0x4c0fdd) {
        _0x46d9da.x -= _0x46d9da.startX / 0x2;
      }
      break;
    case "right":
      _0x46d9da.x = _0x4ed853 - _0x1c92c0 + _0x46d9da.startX;
      if (_0x4c0fdd) {
        _0x46d9da.x -= _0x46d9da.startX;
      }
      break;
  }
};
Window_Base.prototype.textSizeExTextAlignment = function (_0x2e5f25) {
  _0x2e5f25 = _0x2e5f25.replace(/\x1b!/g, '');
  _0x2e5f25 = _0x2e5f25.replace(/\x1b\|/g, '');
  _0x2e5f25 = _0x2e5f25.replace(/\x1b\./g, '');
  const _0x487372 = this.createTextState(_0x2e5f25, 0x0, 0x0, 0x0);
  const _0x1fc898 = this.getPreservedFontSettings();
  _0x487372.drawing = false;
  this.processAllText(_0x487372);
  this.returnPreservedFontSettings(_0x1fc898);
  return {
    'width': _0x487372.outputWidth,
    'height': _0x487372.outputHeight
  };
};
Window_Base.WORD_WRAP_PADDING = VisuMZ.MessageCore.Settings.WordWrap.EndPadding || 0x0;
Window_Base.prototype.processWrapBreak = function (_0x1c3302, _0x106f8d) {
  const _0x2ecdc5 = (_0x1c3302.rtl ? -0x1 : 0x1) * this.textWidth(" ");
  if (!_0x106f8d) {
    _0x1c3302.x += _0x2ecdc5;
  }
  if (this.obtainEscapeParam(_0x1c3302) > 0x0 && !_0x106f8d) {
    _0x1c3302.x += _0x2ecdc5;
  }
  if (_0x1c3302.rtl) {
    return;
  }
  let _0x574c8d;
  if (_0x106f8d) {
    _0x574c8d = _0x1c3302.text.indexOf("WrapJpBreak[0]", _0x1c3302.index + 0x1);
  } else {
    _0x574c8d = _0x1c3302.text.indexOf("WrapBreak[0]", _0x1c3302.index + 0x1);
  }
  let _0x42cd33 = _0x1c3302.text.indexOf("\n", _0x1c3302.index + 0x1);
  if (_0x574c8d < 0x0) {
    _0x574c8d = _0x1c3302.text.length + 0x1;
  }
  if (_0x42cd33 > 0x0) {
    _0x574c8d = Math.min(_0x574c8d, _0x42cd33);
  }
  const _0x54489b = _0x1c3302.text.substring(_0x1c3302.index, _0x574c8d);
  const _0x5c84e3 = this.textSizeExWordWrap(_0x54489b).width;
  let _0x181152 = _0x1c3302.width || this.innerWidth;
  _0x181152 -= Window_Base.WORD_WRAP_PADDING;
  if (this.constructor === Window_Message) {
    const _0x421931 = $gameMessage.faceName() === '' ? 0x0 : ImageManager.faceWidth + 0x14;
    _0x181152 -= _0x421931;
    if (VisuMZ.MessageCore.Settings.WordWrap.TightWrap) {
      _0x181152 -= _0x421931;
    }
  }
  let _0x2409e8 = false;
  if (_0x1c3302.x + _0x5c84e3 > _0x1c3302.startX + _0x181152) {
    _0x2409e8 = true;
  }
  if (_0x5c84e3 === 0x0) {
    _0x2409e8 = false;
  }
  if (_0x2409e8) {
    _0x1c3302.text = _0x1c3302.text.slice(0x0, _0x1c3302.index) + "\n" + _0x1c3302.text.substr(_0x1c3302.index);
  }
};
Window_Base.prototype.textSizeExWordWrap = function (_0xe94594) {
  const _0x29036a = this.createTextState(_0xe94594, 0x0, 0x0, 0x0);
  const _0xbfba55 = this.getPreservedFontSettings();
  _0x29036a.drawing = false;
  this.setWordWrap(false);
  this.processAllText(_0x29036a);
  this.setWordWrap(true);
  this.returnPreservedFontSettings(_0xbfba55);
  return {
    'width': _0x29036a.outputWidth,
    'height': _0x29036a.outputHeight
  };
};
Window_Base.prototype.processCommonEvent = function (_0x948de) {
  return this.obtainEscapeParam(_0x948de);
};
Window_Base.prototype.processDrawPicture = function (_0x3157b9) {
  const _0x3d4d13 = this.obtainEscapeString(_0x3157b9).split(',');
  if (!_0x3157b9.drawing) {
    return;
  }
  const _0x9e0f5f = _0x3d4d13[0x0].trim();
  const _0x7054e7 = _0x3d4d13[0x1] || 0x0;
  const _0x52bb81 = _0x3d4d13[0x2] || 0x0;
  const _0x3d5e41 = ImageManager.loadPicture(_0x9e0f5f);
  const _0x5b30aa = this.contents.paintOpacity;
  _0x3d5e41.addLoadListener(this.drawBackPicture.bind(this, _0x3d5e41, _0x3157b9.x, _0x3157b9.y, _0x7054e7, _0x52bb81, _0x5b30aa));
};
Window_Base.prototype.drawBackPicture = function (_0xc4b1af, _0x1aa69b, _0x2ae0ab, _0x129fd5, _0x3211e4, _0x413ca4) {
  _0x129fd5 = _0x129fd5 || _0xc4b1af.width;
  _0x3211e4 = _0x3211e4 || _0xc4b1af.height;
  this.contentsBack.paintOpacity = _0x413ca4;
  this.contentsBack.blt(_0xc4b1af, 0x0, 0x0, _0xc4b1af.width, _0xc4b1af.height, _0x1aa69b, _0x2ae0ab, _0x129fd5, _0x3211e4);
  this.contentsBack.paintOpacity = 0xff;
};
Window_Base.prototype.processDrawCenteredPicture = function (_0x5c3ee2) {
  const _0x14078c = this.obtainEscapeString(_0x5c3ee2).split(',');
  if (!_0x5c3ee2.drawing) {
    return;
  }
  const _0x3bcc02 = _0x14078c[0x0].trim();
  const _0x1c7f98 = ImageManager.loadPicture(_0x3bcc02);
  const _0x5d1e10 = JsonEx.makeDeepCopy(_0x5c3ee2);
  const _0x477d6c = this.contents.paintOpacity;
  _0x1c7f98.addLoadListener(this.drawBackCenteredPicture.bind(this, _0x1c7f98, _0x5d1e10, _0x477d6c));
};
Window_Base.prototype.drawBackCenteredPicture = function (_0x4931d7, _0x4fd99b, _0x578872) {
  const _0x1954c7 = _0x4fd99b.width || this.innerWidth;
  const _0xe51c0b = this._index !== undefined ? this.itemHeight() : this.innerHeight;
  const _0x1ad3af = _0x1954c7 / _0x4931d7.width;
  const _0xfed5b2 = _0xe51c0b / _0x4931d7.height;
  const _0x3e4aad = Math.min(_0x1ad3af, _0xfed5b2, 0x1);
  const _0x2b43b5 = this._index !== undefined ? (this.itemRectWithPadding(0x0).height - this.lineHeight()) / 0x2 : 0x0;
  const _0x342de4 = _0x4931d7.width * _0x3e4aad;
  const _0x503d61 = _0x4931d7.height * _0x3e4aad;
  const _0x37b4a7 = Math.floor((_0x1954c7 - _0x342de4) / 0x2) + _0x4fd99b.startX;
  const _0x1a1ac = Math.floor((_0xe51c0b - _0x503d61) / 0x2) + _0x4fd99b.startY - _0x2b43b5 * 0x2;
  this.contentsBack.paintOpacity = _0x578872;
  this.contentsBack.blt(_0x4931d7, 0x0, 0x0, _0x4931d7.width, _0x4931d7.height, _0x37b4a7, _0x1a1ac, _0x342de4, _0x503d61);
  this.contentsBack.paintOpacity = 0xff;
};
Window_Base.prototype.processColorLock = function (_0x1320b2) {
  const _0x300925 = this.obtainEscapeParam(_0x1320b2);
  if (_0x1320b2.drawing) {
    this.setColorLock(_0x300925 > 0x0);
  }
};
Window_Base.prototype.processCustomWait = function (_0x21a2bf) {
  const _0xc0a17e = this.obtainEscapeParam(_0x21a2bf);
  if (this.constructor === Window_Message && _0x21a2bf.drawing) {
    this.startWait(_0xc0a17e);
  }
};
Window_Base.prototype.processTextCasing = function (_0x4c2ef8) {
  this._textCasing = this.obtainEscapeParam(_0x4c2ef8);
  this._textCasingUpperState = true;
  this._lastAltCase = true;
};
VisuMZ.MessageCore.NonSupportedTextCodes = function (_0x2e3c2f) {
  if ($gameTemp.isPlaytest()) {
    let _0x259046 = "%1, does not support attempted text code usage.".format(_0x2e3c2f.constructor.name);
    alert(_0x259046);
    SceneManager.exit();
  }
};
Window_Base.prototype.loadMessageFace = function () {
  VisuMZ.MessageCore.NonSupportedTextCodes(this);
};
Window_Base.prototype.drawMessageFace = function () {
  VisuMZ.MessageCore.NonSupportedTextCodes(this);
};
Window_Base.prototype.setTextDelay = function () {
  VisuMZ.MessageCore.NonSupportedTextCodes(this);
};
Window_Help.prototype.resetWordWrap = function () {
  this.setWordWrap($gameSystem.isHelpWindowWordWrap());
};
Window_Help.prototype.isAutoColorAffected = function () {
  return true;
};
VisuMZ.MessageCore.Window_Help_refresh = Window_Help.prototype.refresh;
Window_Help.prototype.refresh = function () {
  this.clearActorNameAutoColor();
  if (this.contentsBack) {
    this.contentsBack.clear();
  }
  VisuMZ.MessageCore.Window_Help_refresh.call(this);
  this.resetWordWrap();
};
VisuMZ.MessageCore.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function () {
  VisuMZ.MessageCore.Window_Options_addGeneralOptions.call(this);
  this.addMessageCoreCommands();
};
Window_Options.prototype.addMessageCoreCommands = function () {
  if (VisuMZ.MessageCore.Settings.Localization.AddOption && TextManager.isVisuMzLocalizationEnabled()) {
    this.addMessageCoreLocalizationCommand();
  }
  if (VisuMZ.MessageCore.Settings.TextSpeed.AddOption) {
    this.addMessageCoreTextSpeedCommand();
  }
};
Window_Options.prototype.addMessageCoreLocalizationCommand = function () {
  const _0x403d2d = TextManager.messageCoreLocalization;
  this.addCommand(_0x403d2d, "textLocale");
};
Window_Options.prototype.addMessageCoreTextSpeedCommand = function () {
  const _0x3d4d60 = TextManager.messageCoreTextSpeed;
  this.addCommand(_0x3d4d60, "textSpeed");
};
VisuMZ.MessageCore.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function (_0x13b454) {
  const _0xb6c25d = this.commandSymbol(_0x13b454);
  if (_0xb6c25d === "textLocale") {
    return this.visuMzTextLocaleStatusText();
  }
  if (_0xb6c25d === "textSpeed") {
    return this.textSpeedStatusText();
  }
  return VisuMZ.MessageCore.Window_Options_statusText.call(this, _0x13b454);
};
Window_Options.prototype.visuMzTextLocaleStatusText = function () {
  const _0x38f0c7 = ConfigManager.textLocale;
  return TextManager.getLanguageName(_0x38f0c7);
};
Window_Options.prototype.textSpeedStatusText = function () {
  const _0x17a597 = this.getConfigValue("textSpeed");
  return _0x17a597 > 0xa ? TextManager.instantTextSpeed : _0x17a597;
};
VisuMZ.MessageCore.Window_Options_isVolumeSymbol = Window_Options.prototype.isVolumeSymbol;
Window_Options.prototype.isVolumeSymbol = function (_0x40ee0e) {
  if (_0x40ee0e === 'textLocale') {
    return true;
  }
  if (_0x40ee0e === 'textSpeed') {
    return true;
  }
  return VisuMZ.MessageCore.Window_Options_isVolumeSymbol.call(this, _0x40ee0e);
};
VisuMZ.MessageCore.Window_Options_changeVolume = Window_Options.prototype.changeVolume;
Window_Options.prototype.changeVolume = function (_0x29f8b9, _0x1a0a2c, _0x50a6c6) {
  if (_0x29f8b9 === 'textLocale') {
    return this.changeVisuMzTextLocale(_0x1a0a2c, _0x50a6c6);
  }
  if (_0x29f8b9 === "textSpeed") {
    return this.changeTextSpeed(_0x29f8b9, _0x1a0a2c, _0x50a6c6);
  }
  VisuMZ.MessageCore.Window_Options_changeVolume.call(this, _0x29f8b9, _0x1a0a2c, _0x50a6c6);
};
Window_Options.prototype.changeVisuMzTextLocale = function (_0x2a48be, _0x3dbe70) {
  const _0x4ac28c = VisuMZ.MessageCore.Settings.Localization.Languages || [];
  const _0x1980b8 = ConfigManager.textLocale;
  let _0x2347bf = _0x4ac28c.indexOf(_0x1980b8);
  _0x2347bf += _0x2a48be ? 0x1 : -0x1;
  if (_0x2347bf >= _0x4ac28c.length) {
    _0x2347bf = _0x3dbe70 ? 0x0 : _0x4ac28c.length - 0x1;
  }
  if (_0x2347bf < 0x0) {
    _0x2347bf = _0x3dbe70 ? _0x4ac28c.length - 0x1 : 0x0;
  }
  this.changeValue("textLocale", _0x4ac28c[_0x2347bf]);
};
Window_Options.prototype.changeTextSpeed = function (_0x324718, _0x192b46, _0x2137e7) {
  const _0x2df08f = this.getConfigValue(_0x324718);
  const _0x33d12a = _0x2df08f + (_0x192b46 ? 0x1 : -0x1);
  if (_0x33d12a > 0xb && _0x2137e7) {
    this.changeValue(_0x324718, 0x1);
  } else {
    this.changeValue(_0x324718, _0x33d12a.clamp(0x1, 0xb));
  }
};
Window_Message.prototype.contentsHeight = function () {
  let _0x281aa6 = Window_Base.prototype.contentsHeight.call(this);
  _0x281aa6 -= this.addedHeight();
  return _0x281aa6;
};
Window_Message.prototype.refreshDimmerBitmap = function () {
  Window_Base.prototype.refreshDimmerBitmap.call(this);
  if (VisuMZ.MessageCore.Settings.General.StretchDimmedBg) {
    this.stretchDimmerSprite();
  }
};
Window_Message.prototype.stretchDimmerSprite = function () {
  this._dimmerSprite.x = Math.round(this.width / 0x2);
  this._dimmerSprite.anchor.x = 0.5;
  this._dimmerSprite.scale.x = Graphics.width;
};
VisuMZ.MessageCore.Window_Message_clearFlags = Window_Message.prototype.clearFlags;
Window_Message.prototype.clearFlags = function () {
  VisuMZ.MessageCore.Window_Message_clearFlags.call(this);
  this.clearActorNameAutoColor();
  this.resetWordWrap();
  this.setColorLock(false);
  this.setTextAlignment("default");
  this.setTextDelay(VisuMZ.MessageCore.Settings.General.MessageTextDelay);
};
Window_Message.prototype.resetWordWrap = function () {
  this.setWordWrap($gameSystem.isMessageWindowWordWrap());
};
Window_Message.prototype.isAutoColorAffected = function () {
  return true;
};
Window_Message.prototype.setTextDelay = function (_0x1f33dd) {
  const _0x4dd736 = 0xb - ConfigManager.textSpeed;
  _0x1f33dd = Math.round(_0x1f33dd * _0x4dd736);
  this._textDelayCount = _0x1f33dd;
  this._textDelay = _0x1f33dd;
};
VisuMZ.MessageCore.Window_Message_isTriggered = Window_Message.prototype.isTriggered;
Window_Message.prototype.isTriggered = function () {
  return VisuMZ.MessageCore.Window_Message_isTriggered.call(this) || Input.isPressed(VisuMZ.MessageCore.Settings.General.FastForwardKey);
};
VisuMZ.MessageCore.Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
Window_Message.prototype.updatePlacement = function () {
  let _0x43dabc = this.y;
  this.x = Math.round((Graphics.boxWidth - this.width) / 0x2);
  VisuMZ.MessageCore.Window_Message_updatePlacement.call(this);
  if (this._autoPositionTarget) {
    this.y = _0x43dabc;
  }
  this.updateXyOffsets();
  this.updateForcedPlacement();
  this.clampPlacementPosition();
  this.updateChoiceListHelpWindowPlacement();
};
VisuMZ.MessageCore.Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function (_0x45bb5a) {
  this.convertNewPageTextStateMacros(_0x45bb5a);
  this.onNewPageMessageCore(_0x45bb5a);
  VisuMZ.MessageCore.Window_Message_newPage.call(this, _0x45bb5a);
  this.createContents();
};
Window_Message.prototype.convertNewPageTextStateMacros = function (_0x1a956e) {
  if (!_0x1a956e) {
    return;
  }
  this._macroBypassWordWrap = false;
  _0x1a956e.text = this.convertTextMacros(_0x1a956e.text);
  if (this._textMacroFound) {
    _0x1a956e.text = this.prepareWordWrapEscapeCharacters(_0x1a956e.text);
    this._macroBypassWordWrap = true;
  }
};
Window_Message.prototype.prepareWordWrapEscapeCharacters = function (_0x3b12cb) {
  if (this._macroBypassWordWrap) {
    return _0x3b12cb;
  }
  return Window_Base.prototype.prepareWordWrapEscapeCharacters.call(this, _0x3b12cb);
};
Window_Message.prototype.onNewPageMessageCore = function (_0xf6b158) {
  this.prepareForcedPositionEscapeCharacters(_0xf6b158);
  this.prepareAutoSizeEscapeCharacters(_0xf6b158);
  this.updateDimensions();
};
VisuMZ.MessageCore.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function () {
  VisuMZ.MessageCore.Window_Message_terminateMessage.call(this);
  this.clearFlags();
  if (this._messagePositionReset) {
    this.messagePositionReset();
  }
};
Window_Message.prototype.updateDimensions = function () {
  this.width = $gameSystem.getMessageWindowWidth() + this.addedWidth();
  ;
  this.width = Math.min(Graphics.width, this.width);
  const _0x3837df = $gameSystem.getMessageWindowRows();
  this.height = SceneManager._scene.calcWindowHeight(_0x3837df, false) + this.addedHeight();
  this.height = Math.min(Graphics.height, this.height);
  if ($gameTemp._centerMessageWindow) {
    this.resetPositionX();
  }
};
Window_Message.prototype.addedWidth = function () {
  return 0x0;
};
Window_Message.prototype.addedHeight = function () {
  return 0x0;
};
Window_Message.prototype.resetPositionX = function () {
  this.x = (Graphics.boxWidth - this.width) / 0x2;
  $gameTemp._centerMessageWindow = undefined;
  this.clampPlacementPosition();
};
Window_Message.prototype.updateMove = function () {
  const _0x30351c = {
    'x': this.x,
    'y': this.y
  };
  Window_Base.prototype.updateMove.call(this);
  this.updateNameBoxMove(_0x30351c);
};
Window_Message.prototype.canMove = function () {
  return true;
};
Window_Message.prototype.updateNameBoxMove = function (_0x3a294e) {
  if (this._nameBoxWindow) {
    this._nameBoxWindow.x += this.x - _0x3a294e.x;
    this._nameBoxWindow.y += this.y - _0x3a294e.y;
  }
};
Window_Message.prototype.resetRect = function (_0x4c48a6, _0x4f1a6f) {
  this.moveTo(this._resetRect.x, this._positionType * (Graphics.boxHeight - this.height) / 0x2, this._resetRect.width, this._resetRect.height, _0x4c48a6, _0x4f1a6f);
};
Window_Message.prototype.processCommonEvent = function (_0x13741f) {
  const _0x1deaea = Window_Base.prototype.processCommonEvent.call(this, _0x13741f);
  if (_0x13741f.drawing) {
    this.launchMessageCommonEvent(_0x1deaea);
  }
};
Window_Message.prototype.launchMessageCommonEvent = function (_0x47c6a3) {
  if ($gameParty.inBattle()) {} else {
    $gameMap.addMessageCommonEvent(_0x47c6a3);
  }
};
Window_Message.prototype.processCharacter = function (_0x4fa38d) {
  this._textDelayCount--;
  if (this._textDelayCount <= 0x0) {
    this.onProcessCharacter(_0x4fa38d);
    Window_Base.prototype.processCharacter.call(this, _0x4fa38d);
  }
};
Window_Message.prototype.onProcessCharacter = function (_0x1757e7) {
  this._textDelayCount = this._textDelay;
  if (this._textDelay <= 0x0) {
    this._showFast = true;
  }
};
VisuMZ.MessageCore.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function (_0x49fbed, _0x107801) {
  if (!_0x107801.drawing) {
    Window_Base.prototype.processEscapeCharacter.call(this, _0x49fbed, _0x107801);
  } else {
    VisuMZ.MessageCore.Window_Message_processEscapeCharacter.call(this, _0x49fbed, _0x107801);
  }
};
VisuMZ.MessageCore.Window_Message_needsNewPage = Window_Message.prototype.needsNewPage;
Window_Message.prototype.needsNewPage = function (_0xf4cda9) {
  if (this._currentAutoSize) {
    return false;
  }
  return VisuMZ.MessageCore.Window_Message_needsNewPage.call(this, _0xf4cda9);
};
Window_Message.prototype.prepareForcedPositionEscapeCharacters = function (_0x22d8f8) {
  let _0xd14174 = _0x22d8f8.text;
  this._forcedPosition = {};
  if (this.isWordWrapEnabled()) {
    return _0xd14174;
  }
  _0xd14174 = _0xd14174.replace(/<POSITION:[ ]*(.*?)>/gi, (_0xd4e746, _0x2c0ffa) => {
    const _0x27b76b = _0x2c0ffa.split(',').map(_0x56d576 => Number(_0x56d576) || 0x0);
    if (_0x27b76b[0x0] !== undefined) {
      this._forcedPosition.x = Number(_0x27b76b[0x0]);
    }
    if (_0x27b76b[0x1] !== undefined) {
      this._forcedPosition.y = Number(_0x27b76b[0x1]);
    }
    if (_0x27b76b[0x2] !== undefined) {
      this._forcedPosition.width = Number(_0x27b76b[0x2]);
    }
    if (_0x27b76b[0x3] !== undefined) {
      this._forcedPosition.height = Number(_0x27b76b[0x3]);
    }
    return '';
  });
  _0xd14174 = _0xd14174.replace(/<COORDINATES:[ ]*(.*?)>/gi, (_0x3c00ea, _0x5d53e4) => {
    const _0xfd091a = _0x5d53e4.split(',').map(_0x49132e => Number(_0x49132e) || 0x0);
    if (_0xfd091a[0x0] !== undefined) {
      this._forcedPosition.x = Number(_0xfd091a[0x0]);
    }
    if (_0xfd091a[0x1] !== undefined) {
      this._forcedPosition.y = Number(_0xfd091a[0x1]);
    }
    return '';
  });
  _0xd14174 = _0xd14174.replace(/<DIMENSIONS:[ ]*(.*?)>/gi, (_0x1beaca, _0x40fdc2) => {
    const _0x5ddd50 = _0x40fdc2.split(',').map(_0x3a447f => Number(_0x3a447f) || 0x0);
    if (_0x5ddd50[0x0] !== undefined) {
      this._forcedPosition.width = Number(_0x5ddd50[0x2]);
    }
    if (_0x5ddd50[0x1] !== undefined) {
      this._forcedPosition.height = Number(_0x5ddd50[0x3]);
    }
    return '';
  });
  _0xd14174 = _0xd14174.replace(/<OFFSET:[ ]*(.*?)>/gi, (_0x31475f, _0x1b83ca) => {
    const _0x50845a = _0x1b83ca.split(',').map(_0x22a070 => Number(_0x22a070) || 0x0);
    let _0x2464ce = _0x50845a[0x0] || 0x0;
    let _0x2ec29b = _0x50845a[0x1] || 0x0;
    $gameSystem.setMessageWindowXyOffsets(_0x2464ce, _0x2ec29b);
    return '';
  });
  _0x22d8f8.text = _0xd14174;
};
Window_Message.prototype.updateXyOffsets = function () {
  const _0x488100 = $gameSystem.getMessageWindowXyOffsets();
  this.x += _0x488100.x;
  this.y += _0x488100.y;
};
Window_Message.prototype.updateForcedPlacement = function () {
  this._forcedPosition = this._forcedPosition || {};
  const _0x12100e = ['x', 'y', "width", "height"];
  for (const _0x4c596b of _0x12100e) {
    if (this._forcedPosition[_0x4c596b] !== undefined) {
      this[_0x4c596b] = Number(this._forcedPosition[_0x4c596b]);
    }
  }
};
Window_Message.prototype.prepareAutoSizeEscapeCharacters = function (_0x587cc0) {
  this._currentAutoSize = false;
  let _0x2c65f1 = _0x587cc0.text;
  _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi, () => {
    this.processAutoSize(_0x2c65f1, true, true);
    this.processAutoPosition('none');
    return '';
  });
  _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOWIDTH|AUTO WIDTH)>/gi, () => {
    this.processAutoSize(_0x2c65f1, true, false);
    this.processAutoPosition("none");
    return '';
  });
  _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi, () => {
    this.processAutoSize(_0x2c65f1, false, true);
    this.processAutoPosition("none");
    return '';
  });
  if (SceneManager.isSceneBattle()) {
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi, (_0x287741, _0x293ba0) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("battle actor", Number(_0x293ba0) || 0x1);
      return '';
    });
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi, (_0xf0198e, _0x2c3c4d) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("battle party", Number(_0x2c3c4d) || 0x0);
      return '';
    });
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi, (_0x37b077, _0x30cd71) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("battle enemy", Number(_0x30cd71) || 0x0);
      return '';
    });
  } else if (SceneManager.isSceneMap()) {
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOPLAYER|AUTO PLAYER)>/gi, (_0x208132, _0xf3a5d9) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("map player", 0x0);
      return '';
    });
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi, (_0x2cc5b9, _0x38b1b7) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("map actor", Number(_0x38b1b7) || 0x1);
      return '';
    });
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi, (_0x316cca, _0x41ee2d) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("map party", Number(_0x41ee2d) || 0x0);
      return '';
    });
    _0x2c65f1 = _0x2c65f1.replace(/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi, (_0x16db42, _0x32cf2d) => {
      this.processAutoSize(_0x2c65f1, true, true);
      this.processAutoPosition("map event", Number(_0x32cf2d) || 0x0);
      return '';
    });
  }
  _0x587cc0.text = _0x2c65f1;
};
Window_Message._autoSizeRegexp = /<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi;
Window_Message._autoPosRegExp = /<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi;
Window_Message.prototype.processAutoSize = function (_0x57fac6, _0x111775, _0xc2185) {
  _0x57fac6 = _0x57fac6.replace(Window_Message._autoSizeRegexp, '');
  _0x57fac6 = _0x57fac6.replace(Window_Message._autoPosRegExp, '');
  this._autoSizeCheck = true;
  this._currentAutoSize = true;
  this.setWordWrap(false);
  const _0xd92ee2 = this.textSizeExRaw(_0x57fac6);
  if (_0x111775) {
    let _0x2bf6bc = _0xd92ee2.width + $gameSystem.windowPadding() * 0x2 + 0x6;
    const _0x2c4917 = $gameMessage.faceName() !== '';
    const _0x54259c = ImageManager.faceWidth;
    _0x2bf6bc += _0x2c4917 ? _0x54259c + 0x14 : 0x4;
    if (_0x2bf6bc % 0x2 !== 0x0) {
      _0x2bf6bc += 0x1;
    }
    $gameSystem.setMessageWindowWidth(_0x2bf6bc);
  }
  if (_0xc2185) {
    let _0x128a8e = Math.ceil(_0xd92ee2.height / this.lineHeight());
    $gameSystem.setMessageWindowRows(_0x128a8e);
  }
  this.updateAutoSizePosition();
  this._refreshPauseSign();
  this._autoSizeCheck = false;
  this._messagePositionReset = true;
};
Window_Message.prototype.updateAutoSizePosition = function () {
  this.updateDimensions();
  this.updatePlacement();
  this.resetPositionX();
  this.updateTransform();
  this.contents.clear();
  this.createContents();
};
Window_Message.prototype.processAutoPosition = function (_0x369e23, _0x860759) {
  switch (_0x369e23.toLowerCase().trim()) {
    case "battle actor":
      this._autoPositionTarget = $gameActors.actor(_0x860759);
      break;
    case "battle party":
      this._autoPositionTarget = $gameParty.members()[_0x860759 - 0x1];
      break;
    case "battle enemy":
      this._autoPositionTarget = $gameTroop.members()[_0x860759 - 0x1];
      break;
    case "map player":
      this._autoPositionTarget = $gamePlayer;
      break;
    case "map actor":
      const _0x497ad4 = $gameActors.actor(_0x860759).index();
      if (_0x497ad4 === 0x0) {
        this._autoPositionTarget = $gamePlayer;
      } else {
        this._autoPositionTarget = $gamePlayer.followers().follower(_0x497ad4 - 0x1);
      }
      break;
    case "map party":
      if (_0x860759 === 0x1) {
        this._autoPositionTarget = $gamePlayer;
      } else {
        this._autoPositionTarget = $gamePlayer.followers().follower(_0x860759 - 0x2);
      }
      break;
    case "map event":
      this._autoPositionTarget = $gameMap.event(_0x860759);
      break;
  }
  if (this._autoPositionTarget) {
    this.updateAutoPosition();
  }
};
VisuMZ.MessageCore.Window_Message_synchronizeNameBox = Window_Message.prototype.synchronizeNameBox;
Window_Message.prototype.synchronizeNameBox = function () {
  this.updateAutoPosition();
  VisuMZ.MessageCore.Window_Message_synchronizeNameBox.call(this);
};
Window_Message.prototype.updateAutoPosition = function () {
  if (!this._autoPositionTarget) {
    return;
  }
  const _0x323a03 = SceneManager._scene;
  if (!_0x323a03) {
    return;
  }
  const _0x4a30e8 = _0x323a03._spriteset;
  if (!_0x4a30e8) {
    return;
  }
  const _0x2b8668 = _0x4a30e8.findTargetSprite(this._autoPositionTarget);
  if (!_0x2b8668) {
    return;
  }
  let _0x702949 = _0x2b8668.x;
  if (SceneManager.isSceneMap()) {
    _0x702949 *= $gameScreen.zoomScale();
  } else {
    if (SceneManager.isSceneBattle() && Imported.VisuMZ_3_ActSeqCamera) {
      let _0x2fdaf2 = _0x2b8668.x - Graphics.boxWidth * _0x4a30e8.anchor.x;
      _0x702949 += _0x2fdaf2 * (_0x4a30e8.scale.x - 0x1);
    }
  }
  _0x702949 -= this.width / 0x2;
  _0x702949 -= (Graphics.width - Graphics.boxWidth) / 0x2;
  _0x702949 += this.autoPositionOffsetX();
  let _0x118d3e = _0x2b8668.y;
  if (SceneManager.isSceneMap()) {
    _0x118d3e -= _0x2b8668.height + 0x8;
    _0x118d3e *= $gameScreen.zoomScale();
    _0x118d3e -= this.height * $gameScreen.zoomScale();
  } else {
    if (SceneManager.isSceneBattle() && Imported.VisuMZ_3_ActSeqCamera) {
      let _0x4b5f1c = _0x2b8668.height * _0x4a30e8.scale.y;
      _0x118d3e -= this.height * _0x4a30e8.scale.y + _0x4b5f1c + 0x8;
      let _0x49a12f = _0x2b8668.y - Graphics.boxHeight * _0x4a30e8.anchor.y;
      _0x118d3e += _0x49a12f * (_0x4a30e8.scale.y - 0x1);
    } else {
      _0x118d3e -= _0x2b8668.height + 0x8;
      _0x118d3e -= this.height;
    }
  }
  _0x118d3e -= (Graphics.height - Graphics.boxHeight) / 0x2;
  _0x118d3e += this.autoPositionOffsetY();
  const _0x558859 = $gameSystem.getMessageWindowXyOffsets();
  _0x702949 += _0x558859.x;
  _0x118d3e += _0x558859.y;
  this.x = Math.round(_0x702949);
  this.y = Math.round(_0x118d3e);
  this.clampPlacementPosition(true, false);
  this._forcedPosition = this._forcedPosition || {};
  this._forcedPosition.x = this.x;
  this._forcedPosition.y = this.y;
  this._forcedPosition.width = this.width;
  this._forcedPosition.height = this.height;
  this._nameBoxWindow.updatePlacement();
};
Window_Message.prototype.autoPositionOffsetX = function () {
  return 0x0;
};
Window_Message.prototype.autoPositionOffsetY = function () {
  return 0x0;
};
Window_Message.prototype.messagePositionReset = function () {
  this._messagePositionReset = false;
  this._autoPositionTarget = undefined;
  $gameSystem.initMessageCore();
  this.updateAutoSizePosition();
  this.openness = 0x0;
};
Window_Message.prototype.preConvertEscapeCharacters = function (_0x21fede) {
  return Window_Base.prototype.preConvertEscapeCharacters.call(this, _0x21fede);
};
Window_Message.prototype.postConvertEscapeCharacters = function (_0x310f94) {
  return Window_Base.prototype.postConvertEscapeCharacters.call(this, _0x310f94);
};
Window_Message.prototype.flushTextState = function (_0x50f3f1) {
  this.preFlushTextState(_0x50f3f1);
  Window_Base.prototype.flushTextState.call(this, _0x50f3f1);
  this.postFlushTextState(_0x50f3f1);
};
Window_Message.prototype.preFlushTextState = function (_0x20727e) {};
Window_Message.prototype.postFlushTextState = function (_0x11f78c) {};
Window_NameBox.prototype.isAutoColorAffected = function () {
  return false;
};
Window_NameBox.prototype.resetTextColor = function () {
  Window_Base.prototype.resetTextColor.call(this);
  this.changeTextColor(this.defaultColor());
};
Window_NameBox.prototype.defaultColor = function () {
  const _0x1dfc45 = VisuMZ.MessageCore.Settings.General.NameBoxWindowDefaultColor;
  return ColorManager.textColor(_0x1dfc45);
};
VisuMZ.MessageCore.Window_NameBox_updatePlacement = Window_NameBox.prototype.updatePlacement;
Window_NameBox.prototype.updatePlacement = function () {
  VisuMZ.MessageCore.Window_NameBox_updatePlacement.call(this);
  this.updateRelativePosition();
  this.updateOffsetPosition();
  this.clampPlacementPosition();
  this.updateOverlappingY();
};
Window_NameBox.prototype.preConvertEscapeCharacters = function (_0x46ce75) {
  _0x46ce75 = _0x46ce75.replace(/<LEFT>/gi, this.setRelativePosition.bind(this, 0x0));
  _0x46ce75 = _0x46ce75.replace(/<CENTER>/gi, this.setRelativePosition.bind(this, 0x5));
  _0x46ce75 = _0x46ce75.replace(/<RIGHT>/gi, this.setRelativePosition.bind(this, 0xa));
  _0x46ce75 = _0x46ce75.replace(/<POSITION:[ ](\d+)>/gi, (_0xbf83fd, _0x6d9a3b) => this.setRelativePosition(parseInt(_0x6d9a3b)));
  _0x46ce75 = _0x46ce75.replace(/<\/LEFT>/gi, '');
  _0x46ce75 = _0x46ce75.replace(/<\/CENTER>/gi, '');
  _0x46ce75 = _0x46ce75.replace(/<\/RIGHT>/gi, '');
  _0x46ce75 = _0x46ce75.trim();
  return Window_Base.prototype.preConvertEscapeCharacters.call(this, _0x46ce75);
};
Window_NameBox.prototype.setRelativePosition = function (_0x2e744f) {
  this._relativePosition = _0x2e744f;
  return '';
};
Window_NameBox.prototype.updateRelativePosition = function () {
  if ($gameMessage.isRTL()) {
    return;
  }
  this._relativePosition = this._relativePosition || 0x0;
  const _0x2d7763 = this._messageWindow;
  const _0x128c9c = Math.floor(_0x2d7763.width * this._relativePosition / 0xa);
  this.x = _0x2d7763.x + _0x128c9c - Math.floor(this.width / 0x2);
  this.x = this.x.clamp(_0x2d7763.x, _0x2d7763.x + _0x2d7763.width - this.width);
};
Window_NameBox.prototype.updateOffsetPosition = function () {
  if ($gameMessage.isRTL()) {
    return;
  }
  this._relativePosition = this._relativePosition || 0x0;
  const _0x5478d0 = VisuMZ.MessageCore.Settings.General.NameBoxWindowOffsetX;
  const _0xfddc2c = VisuMZ.MessageCore.Settings.General.NameBoxWindowOffsetY;
  const _0xf746b0 = (0x5 - this._relativePosition) / 0x5;
  this.x += Math.floor(_0x5478d0 * _0xf746b0);
  this.y += _0xfddc2c;
};
Window_NameBox.prototype.updateOverlappingY = function () {
  const _0x210c0d = this._messageWindow;
  const _0x206851 = _0x210c0d.y;
  const _0xffee31 = VisuMZ.MessageCore.Settings.General.NameBoxWindowOffsetY;
  if (_0x206851 > this.y && _0x206851 < this.y + this.height - _0xffee31) {
    this.y = _0x210c0d.y + _0x210c0d.height;
  }
};
VisuMZ.MessageCore.Window_NameBox_refresh = Window_NameBox.prototype.refresh;
Window_NameBox.prototype.refresh = function () {
  this._relativePosition = 0x0;
  VisuMZ.MessageCore.Window_NameBox_refresh.call(this);
};
Window_ChoiceList.prototype.isWordWrapEnabled = function () {
  return false;
};
Window_ChoiceList.prototype.isAutoColorAffected = function () {
  return true;
};
Window_ChoiceList.prototype.itemHeight = function () {
  return $gameSystem.getChoiceListLineHeight() + 0x8;
};
Window_ChoiceList.prototype.maxCols = function () {
  return $gameSystem.getChoiceListMaxColumns();
};
Window_ChoiceList.prototype.start = function () {
  this.refresh();
  this.selectDefault();
  this.open();
  this.activate();
  this.processFailsafeChoice();
};
Window_ChoiceList.prototype.callOkHandler = function () {
  $gameMessage.onChoice(this.currentExt());
  this._messageWindow.terminateMessage();
  this.close();
  if (this._helpWindow) {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
VisuMZ.MessageCore.Window_ChoiceList_callCancelHandler = Window_ChoiceList.prototype.callCancelHandler;
Window_ChoiceList.prototype.callCancelHandler = function () {
  VisuMZ.MessageCore.Window_ChoiceList_callCancelHandler.call(this);
  if (this._helpWindow) {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
Window_ChoiceList.prototype.refresh = function () {
  this.clearCommandList();
  this.makeCommandList();
  if (this._messageWindow) {
    this.updatePlacement();
    this.placeCancelButton();
  }
  this.createContents();
  this.updateBackground();
  this.refreshDimmerBitmap();
  Window_Selectable.prototype.refresh.call(this);
};
Window_ChoiceList.prototype.makeCommandList = function () {
  if ($gameMessage._scriptCall) {
    this.makeCommandListScriptCall();
  } else {
    this.makeCommandListShuffle();
  }
  this.clearChoiceHelpDescriptions();
  this.applyChoiceHelpDescriptions();
};
Window_ChoiceList.prototype.makeCommandListScriptCall = function () {
  const _0x4840dc = $gameMessage.choices();
  let _0xdcecb0 = 0x0;
  for (let _0x5a6c77 of _0x4840dc) {
    _0x5a6c77 = this.convertChoiceMacros(_0x5a6c77);
    if (this.isChoiceVisible(_0x5a6c77)) {
      const _0x1af587 = this.parseChoiceText(_0x5a6c77);
      const _0x14d534 = this.isChoiceEnabled(_0x5a6c77);
      this.addCommand(_0x1af587, "choice", _0x14d534, _0xdcecb0);
    }
    _0xdcecb0++;
  }
};
Window_ChoiceList.prototype.makeCommandListShuffle = function () {
  const _0x39b335 = $gameMessage.choices();
  const _0x575a23 = $gameMessage.choiceIndexArray();
  const _0x288252 = $gameMessage.maxShuffleChoices();
  const _0x250658 = _0x39b335.length;
  let _0x10c08e = 0x0;
  for (let _0x15cfc8 = 0x0; _0x15cfc8 < _0x250658; _0x15cfc8++) {
    if (this._list.length >= _0x288252) {
      break;
    }
    const _0x1ed7ec = _0x575a23[_0x15cfc8];
    let _0x2db3f2 = _0x39b335[_0x1ed7ec];
    if (_0x2db3f2 === undefined) {
      continue;
    }
    _0x2db3f2 = this.convertChoiceMacros(_0x2db3f2);
    if (this.isChoiceVisible(_0x2db3f2)) {
      const _0x49e9e0 = this.parseChoiceText(_0x2db3f2);
      const _0x1a486c = this.isChoiceEnabled(_0x2db3f2);
      this.addCommand(_0x49e9e0, "choice", _0x1a486c, _0x1ed7ec);
    }
    _0x10c08e++;
  }
};
Window_ChoiceList.prototype.convertChoiceMacros = function (_0x39528f) {
  return Window_Base.prototype.convertTextMacros.call(this, _0x39528f);
};
Window_ChoiceList.prototype.isChoiceVisible = function (_0x168692) {
  if (Imported.VisuMZ_1_EventsMoveCore) {
    $gameMessage.registerSelfEvent();
  }
  if (_0x168692.match(/<HIDE>/i)) {
    return false;
  }
  if (_0x168692.match(/<SHOW>/i)) {
    return true;
  }
  if (_0x168692.match(/<SHOW[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x587223 = RegExp.$1.split(',').map(_0x234cb5 => Number(_0x234cb5) || 0x0);
    if (_0x587223.some(_0x1ab44b => !$gameSwitches.value(_0x1ab44b))) {
      return false;
    }
  }
  if (_0x168692.match(/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x223091 = RegExp.$1.split(',').map(_0x3fcda3 => Number(_0x3fcda3) || 0x0);
    if (_0x223091.every(_0x2a75cf => !$gameSwitches.value(_0x2a75cf))) {
      return false;
    }
  }
  if (_0x168692.match(/<HIDE[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x133a96 = RegExp.$1.split(',').map(_0x3ea49c => Number(_0x3ea49c) || 0x0);
    if (_0x133a96.every(_0x52dd1a => $gameSwitches.value(_0x52dd1a))) {
      return false;
    }
  }
  if (_0x168692.match(/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x2ac6e0 = RegExp.$1.split(',').map(_0x998920 => Number(_0x998920) || 0x0);
    if (_0x2ac6e0.some(_0x3e2688 => $gameSwitches.value(_0x3e2688))) {
      return false;
    }
  }
  return true;
};
Window_ChoiceList.prototype.parseChoiceText = function (_0x2c2039) {
  let _0xd0262c = _0x2c2039;
  _0xd0262c = _0xd0262c.replace(/<(?:BR|LINEBREAK)>/gi, "\n");
  _0xd0262c = _0xd0262c.replace(/<LINE\x1bWrapBreak[0]BREAK>/gi, "\n");
  return _0xd0262c;
};
Window_ChoiceList.prototype.isChoiceEnabled = function (_0x27d196) {
  if (Imported.VisuMZ_1_EventsMoveCore) {
    $gameMessage.registerSelfEvent();
  }
  if (_0x27d196.match(/<DISABLE>/i)) {
    return false;
  }
  if (_0x27d196.match(/<ENABLE>/i)) {
    return true;
  }
  if (_0x27d196.match(/<ENABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x102910 = RegExp.$1.split(',').map(_0x2a26ab => Number(_0x2a26ab) || 0x0);
    if (_0x102910.some(_0x4ace41 => !$gameSwitches.value(_0x4ace41))) {
      return false;
    }
  }
  if (_0x27d196.match(/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x57e029 = RegExp.$1.split(',').map(_0x4a2363 => Number(_0x4a2363) || 0x0);
    if (_0x57e029.every(_0x586448 => !$gameSwitches.value(_0x586448))) {
      return false;
    }
  }
  if (_0x27d196.match(/<DISABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x57b3f5 = RegExp.$1.split(',').map(_0x45c8bd => Number(_0x45c8bd) || 0x0);
    if (_0x57b3f5.every(_0x378eb2 => $gameSwitches.value(_0x378eb2))) {
      return false;
    }
  }
  if (_0x27d196.match(/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x357d66 = RegExp.$1.split(',').map(_0x3fa213 => Number(_0x3fa213) || 0x0);
    if (_0x357d66.some(_0x539d7b => $gameSwitches.value(_0x539d7b))) {
      return false;
    }
  }
  return true;
};
Window_ChoiceList.prototype.clearChoiceHelpDescriptions = function () {
  this._choiceHelpDescriptions = {};
  if (this._helpWindow) {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
Window_ChoiceList.prototype.applyChoiceHelpDescriptions = function () {
  const _0x334b57 = /<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;
  for (const _0xa3f215 of this._list) {
    if (!_0xa3f215) {
      continue;
    }
    const _0x3c1fd2 = this._list.indexOf(_0xa3f215);
    if (_0xa3f215.name.match(_0x334b57)) {
      const _0x2da558 = String(RegExp.$1);
      this._choiceHelpDescriptions[_0x3c1fd2] = _0x2da558.trim();
      _0xa3f215.name = _0xa3f215.name.replace(_0x334b57, '').trim();
    } else {
      this._choiceHelpDescriptions[_0x3c1fd2] = '';
    }
  }
};
Window_ChoiceList.prototype.processFailsafeChoice = function () {
  if (this._list.some(_0x3c2eb3 => _0x3c2eb3.enabled)) {
    return;
  }
  this.deactivate();
  this.close();
  $gameMessage._choices = [];
  if (this._messageWindow.isOpen()) {
    this._messageWindow.startPause();
  }
};
VisuMZ.MessageCore.Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function () {
  VisuMZ.MessageCore.Window_ChoiceList_updatePlacement.call(this);
  this.addChoiceDistance();
  this.clampPlacementPosition();
};
Window_ChoiceList.prototype.placeCancelButton = function () {
  if (!this._cancelButton) {
    return;
  }
  const _0x5a13bb = this._cancelButton;
  const _0x18331b = this.x + this.width;
  const _0x60f319 = Math.floor((Graphics.width - Graphics.boxWidth) / 0x2);
  if (_0x18331b >= Graphics.boxWidth + _0x60f319 - _0x5a13bb.width + 0x8) {
    _0x5a13bb.x = -_0x5a13bb.width - 0x8;
  } else {
    _0x5a13bb.x = this.width + 0x8;
  }
  _0x5a13bb.y = this.height / 0x2 - _0x5a13bb.height / 0x2;
};
VisuMZ.MessageCore.Window_ChoiceList_windowX = Window_ChoiceList.prototype.windowX;
Window_ChoiceList.prototype.windowX = function () {
  return this._messageWindow ? this.messageCoreWindowX() : VisuMZ.MessageCore.Window_ChoiceList_windowX.call(this);
};
Window_ChoiceList.prototype.messageCoreWindowX = function () {
  const _0x2691c1 = $gameMessage.choicePositionType();
  if (_0x2691c1 === 0x1) {
    return (Graphics.boxWidth - this.windowWidth()) / 0x2;
  } else {
    return _0x2691c1 === 0x2 ? this._messageWindow.x + this._messageWindow.width - this.windowWidth() : this._messageWindow.x;
  }
};
Window_ChoiceList.prototype.windowWidth = function () {
  const _0x23561f = (this.maxChoiceWidth() + this.colSpacing()) * this.maxCols() + this.padding * 0x2;
  return Math.min(_0x23561f, Graphics.width);
};
Window_ChoiceList.prototype.numVisibleRows = function () {
  const _0x341b49 = $gameMessage.choices().map(_0x430cc9 => this.convertChoiceMacros(_0x430cc9)).filter(_0x39effe => this.isChoiceVisible(_0x39effe));
  let _0x35b790 = Math.ceil(_0x341b49.length / this.maxCols());
  if (!$gameMessage._scriptCall) {
    const _0x4f2c13 = $gameMessage.maxShuffleChoices();
    _0x35b790 = Math.ceil(Math.min(_0x4f2c13, _0x341b49.length) / this.maxCols());
  }
  return Math.max(0x1, Math.min(_0x35b790, this.maxLines()));
};
Window_ChoiceList.prototype.maxLines = function () {
  const _0x9c2be5 = this._messageWindow;
  const _0x8c421a = _0x9c2be5 ? _0x9c2be5.y : 0x0;
  const _0x537e67 = _0x9c2be5 ? _0x9c2be5.height : 0x0;
  const _0x134347 = Graphics.boxHeight / 0x2;
  return _0x8c421a < _0x134347 && _0x8c421a + _0x537e67 > _0x134347 ? 0x4 : $gameSystem.getChoiceListMaxRows();
};
Window_ChoiceList.prototype.maxChoiceWidth = function () {
  let _0x486ae8 = this.getStartingChoiceWidth();
  for (const _0x923ffa of this._list) {
    const _0x21e61b = _0x923ffa.name;
    const _0x3d5e74 = this.getChoiceIndent(_0x21e61b);
    const _0x2e862b = this.textSizeEx(_0x21e61b).width + _0x3d5e74;
    const _0x758c7e = Math.ceil(_0x2e862b) + this.itemPadding() * 0x2;
    _0x486ae8 = Math.max(_0x486ae8, _0x758c7e);
  }
  return _0x486ae8;
};
Window_ChoiceList.prototype.getStartingChoiceWidth = function () {
  let _0x553da1 = $gameSystem.getChoiceListMinChoiceWidth();
  const _0x2b80d9 = $gameMessage.choices();
  for (const _0x1eb4d5 of _0x2b80d9) {
    if (_0x1eb4d5.match(/<CHOICE WIDTH:[ ](\d+)>/gi)) {
      _0x553da1 = Math.max(_0x553da1, Number(RegExp.$1));
    }
  }
  return Math.max(_0x553da1, 0x1);
};
Window_ChoiceList.prototype.addChoiceDistance = function () {
  const _0x13cdb1 = $gameSystem.getChoiceMessageDistance() || 0x0;
  const _0x3dd39d = this._messageWindow.y;
  const _0x4cf8c2 = this._messageWindow.height;
  const _0x5a310c = this._messageWindow._nameBoxWindow;
  const _0x349913 = _0x5a310c.openness > 0x0 && _0x5a310c.width > 0x0;
  const _0xe89b5c = _0x349913 ? _0x5a310c.height : 0x0;
  if (_0x13cdb1 < 0x0 && (this._messageWindow.isClosed() || this._messageWindow.isClosing())) {
    this.y = Math.round((Graphics.boxHeight - this.height) / 0x2);
  } else {
    if (_0x3dd39d >= Graphics.boxHeight / 0x2) {
      if (_0x13cdb1 >= 0x0) {
        this.y -= _0x13cdb1;
      } else {
        this.y = Math.floor((_0x3dd39d - this.height - _0xe89b5c) / 0x2);
      }
    } else {
      if (_0x13cdb1 >= 0x0) {
        this.y += _0x13cdb1;
      } else {
        const _0x32c1fd = Graphics.boxHeight - (_0x3dd39d + _0x4cf8c2 + _0xe89b5c);
        this.y += Math.floor((_0x32c1fd - this.height) / 0x2) + _0xe89b5c;
      }
    }
  }
};
Window_ChoiceList.prototype.drawItem = function (_0x8c3821) {
  const _0x11cce0 = this.requestChoiceForegroundImage(_0x8c3821);
  if (_0x11cce0) {
    const _0x3084f4 = ImageManager.loadPicture(_0x11cce0);
    const _0x3b10ae = this.choiceAlignText();
    const _0x430005 = _0x3b10ae + this.commandName(_0x8c3821);
    const _0xf9f1fa = this.itemRectWithPadding(_0x8c3821);
    _0x3084f4.addLoadListener(this.drawChoiceLocationImage.bind(this, _0x8c3821, true, _0x430005, _0xf9f1fa, _0x3084f4));
    return;
  }
  this.drawItemContents(_0x8c3821);
};
Window_ChoiceList.prototype.drawItemContents = function (_0xf93449) {
  const _0x39698c = this.itemRectWithPadding(_0xf93449);
  const _0x2c1a6d = this.choiceAlignText();
  const _0x25348a = _0x2c1a6d + this.commandName(_0xf93449);
  this.changePaintOpacity(this.isCommandEnabled(_0xf93449));
  const _0x36b43a = this.textSizeEx(_0x25348a).height;
  const _0x47831b = _0x39698c.x + this.getChoiceIndent(_0x25348a);
  const _0x50d276 = Math.max(_0x39698c.y, _0x39698c.y + Math.round((_0x39698c.height - _0x36b43a) / 0x2));
  this.drawTextEx(_0x25348a, _0x47831b, _0x50d276, _0x39698c.width);
  this.changeChoiceBackgroundColor(_0xf93449);
  this.requestChoiceBackgroundImage(_0xf93449, _0x25348a, _0x39698c);
};
Window_ChoiceList.prototype.choiceAlignText = function () {
  return $gameSystem.getChoiceListTextAlign() !== "default" ? "<%1>".format($gameSystem.getChoiceListTextAlign()) : '';
};
Window_ChoiceList.prototype.getChoiceIndent = function (_0x3cd603) {
  let _0x5c3eea = 0x0;
  if (_0x3cd603.match(/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)) {
    _0x5c3eea = Number(RegExp.$1);
  }
  return _0x5c3eea;
};
Window_ChoiceList.prototype.changeChoiceBackgroundColor = function (_0x2b0587) {
  if (!Imported.VisuMZ_0_CoreEngine) {
    return;
  }
  const _0x38e3d1 = this.commandName(_0x2b0587);
  let _0x4d93b0 = false;
  let _0x2ef64a = false;
  let _0x46a832 = ColorManager.itemBackColor1();
  let _0x52d0b = ColorManager.itemBackColor2();
  if (_0x38e3d1.match(/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi)) {
    _0x46a832 = ColorManager.getColor(RegExp.$1).trim();
    _0x52d0b = ColorManager.getColor(RegExp.$2).trim();
    _0x4d93b0 = true;
  } else {
    if (_0x38e3d1.match(/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)) {
      let _0x198d83 = String(RegExp.$1).toLowerCase().trim();
      switch (_0x198d83) {
        case 'red':
          _0x46a832 = _0x52d0b = "#f26c4f";
          _0x2ef64a = true;
          break;
        case "orange":
          _0x46a832 = _0x52d0b = "#fbaf5d";
          _0x2ef64a = true;
          break;
        case "yellow":
          _0x46a832 = _0x52d0b = '#fff799';
          _0x2ef64a = true;
          break;
        case "green":
          _0x46a832 = _0x52d0b = "#7cc576";
          _0x2ef64a = true;
          break;
        case "blue":
          _0x46a832 = _0x52d0b = '#6dcff6';
          _0x2ef64a = true;
          break;
        case 'purple':
        case "violet":
          _0x46a832 = _0x52d0b = "#a186be";
          _0x2ef64a = true;
          break;
        case 'brown':
          _0x46a832 = _0x52d0b = "#c69c6d";
          _0x2ef64a = true;
          break;
        case "pink":
          _0x46a832 = _0x52d0b = "#ffc8e0";
          _0x2ef64a = true;
          break;
        case "white":
          _0x46a832 = _0x52d0b = "#ffffff";
          _0x2ef64a = true;
          break;
        case "gray":
        case "grey":
          _0x46a832 = _0x52d0b = "#acacac";
          _0x2ef64a = true;
          break;
        case 'black':
          _0x46a832 = _0x52d0b = "#707070";
          _0x2ef64a = true;
          break;
        case "yes":
          _0x46a832 = _0x52d0b = ColorManager.powerUpColor();
          _0x2ef64a = true;
          break;
        case 'no':
          _0x46a832 = _0x52d0b = ColorManager.powerDownColor();
          _0x2ef64a = true;
          break;
        case "system":
          _0x46a832 = _0x52d0b = ColorManager.systemColor();
          _0x2ef64a = true;
          break;
        case "crisis":
          _0x46a832 = _0x52d0b = ColorManager.crisisColor();
          _0x2ef64a = true;
          break;
        default:
          _0x46a832 = _0x52d0b = ColorManager.getColor(_0x198d83);
          _0x2ef64a = true;
          break;
      }
      _0x4d93b0 = true;
    }
  }
  if (!_0x4d93b0) {
    return;
  }
  const _0x50a79d = this.itemRect(_0x2b0587);
  this.contentsBack.clearRect(_0x50a79d.x, _0x50a79d.y, _0x50a79d.width, _0x50a79d.height);
  this.drawCustomBackgroundColor(_0x50a79d, _0x46a832, _0x52d0b, _0x2ef64a);
};
Window_ChoiceList.prototype.drawCustomBackgroundColor = function (_0x4b927e, _0xb0c147, _0x28540a, _0x1803c6) {
  const _0x541386 = ColorManager.itemBackColor1();
  const _0x251dd0 = _0xb0c147 ?? ColorManager.itemBackColor1();
  const _0x6a4ce4 = _0x28540a ?? _0xb0c147;
  const _0xada0b3 = _0x4b927e.x;
  const _0x3736e4 = _0x4b927e.y;
  const _0x3f82d5 = _0x4b927e.width;
  const _0x1ef5f8 = _0x4b927e.height;
  this.contentsBack.gradientFillRect(_0xada0b3, _0x3736e4, _0x3f82d5, _0x1ef5f8, _0x251dd0, _0x6a4ce4, true);
  if (_0x1803c6) {
    this.contentsBack.gradientFillRect(_0xada0b3, _0x3736e4, _0x3f82d5, _0x1ef5f8, _0x541386, _0x6a4ce4, true);
  }
  this.contentsBack.strokeRect(_0xada0b3, _0x3736e4, _0x3f82d5, _0x1ef5f8, _0x541386);
};
Window_ChoiceList.prototype.requestChoiceForegroundImage = function (_0x1564a0) {
  const _0xcdb93d = this.choiceAlignText();
  const _0x16115d = _0xcdb93d + this.commandName(_0x1564a0);
  let _0x46fdef = '';
  if (_0x16115d.match(/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)) {
    _0x46fdef = String(RegExp.$1).trim();
  } else if (_0x16115d.match(/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
    _0x46fdef = String(RegExp.$2).trim();
  }
  return _0x46fdef;
};
Window_ChoiceList.prototype.requestChoiceBackgroundImage = function (_0x3c5298, _0x64994, _0x15ef9c) {
  let _0x14ea5c = '';
  if (_0x64994.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)) {
    _0x14ea5c = String(RegExp.$1).trim();
  } else if (_0x64994.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
    _0x14ea5c = String(RegExp.$2).trim();
  }
  if (_0x14ea5c) {
    const _0x20efa1 = ImageManager.loadPicture(_0x14ea5c);
    _0x20efa1.addLoadListener(this.drawChoiceLocationImage.bind(this, _0x3c5298, false, _0x64994, _0x15ef9c, _0x20efa1));
  }
};
Window_ChoiceList.prototype.drawChoiceLocationImage = function (_0x1c9976, _0xa3b92e, _0x4ede69, _0x361204, _0x228b5c) {
  const _0x1e2d51 = this.choiceAlignText();
  const _0x613691 = _0x1e2d51 + this.commandName(_0x1c9976);
  if (_0x4ede69 !== _0x613691) {
    return;
  }
  const _0x52dfb6 = this.itemRectWithPadding(_0x1c9976);
  if (['x', 'y', "width", "height"].some(_0x17812a => _0x52dfb6[_0x17812a] !== _0x361204[_0x17812a])) {
    return;
  }
  let _0x1cbc7e = 0x0;
  let _0x249fb0 = '';
  if (_0xa3b92e && _0x613691.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)) {} else {
    if (_0xa3b92e && _0x613691.match(/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
      _0x249fb0 = String(RegExp.$1).toLowerCase().trim();
    } else if (!_0xa3b92e && _0x613691.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
      _0x249fb0 = String(RegExp.$1).toLowerCase().trim();
    }
  }
  switch (_0x249fb0) {
    case "lowerleft":
    case "lower-left":
    case "lower left":
    case "downleft":
    case 'down-left':
    case "down left":
    case '1':
      _0x1cbc7e = 0x1;
      break;
    case 'lowercenter':
    case "lower-center":
    case "lower center":
    case "downcenter":
    case "down-center":
    case "down center":
    case 'down':
    case '2':
      _0x1cbc7e = 0x2;
      break;
    case 'lowerright':
    case "lower-right":
    case "lower right":
    case 'downright':
    case "down-right":
    case "down right":
    case '3':
      _0x1cbc7e = 0x3;
      break;
    case "midleft":
    case 'middleleft':
    case "left":
    case '4':
      _0x1cbc7e = 0x4;
      break;
    case 'midcenter':
    case 'middlecenter':
    case "center":
    case 'centered':
    case '5':
      _0x1cbc7e = 0x5;
      break;
    case "midright":
    case "middleright":
    case "right":
    case '6':
      _0x1cbc7e = 0x6;
      break;
    case "upperleft":
    case "upper-left":
    case "upper left":
    case "upleft":
    case 'up-left':
    case "up left":
    case '7':
      _0x1cbc7e = 0x7;
      break;
    case "uppercenter":
    case 'upper-center':
    case "upper center":
    case "upcenter":
    case "up-center":
    case "up center":
    case 'up':
    case '8':
      _0x1cbc7e = 0x8;
      break;
    case "upperright":
    case "upper-right":
    case "upper right":
    case "upright":
    case 'up-right':
    case "up right":
    case '9':
      _0x1cbc7e = 0x9;
      break;
  }
  const _0x1b5695 = _0xa3b92e ? this.contents : this.contentsBack;
  const _0x439c17 = this.itemRect(_0x1c9976);
  if (!_0xa3b92e) {
    _0x1b5695.clearRect(_0x439c17.x - 0x1, _0x439c17.y - 0x1, _0x439c17.width + 0x2, _0x439c17.height + 0x2);
  }
  const _0x26a5b6 = _0x439c17.x + 0x2;
  const _0x3fca2c = _0x439c17.y + 0x2;
  const _0x260a3f = _0x439c17.width - 0x4;
  const _0xfaf7d4 = _0x439c17.height - 0x4;
  const _0x3cc944 = _0x228b5c.width;
  const _0x3386b2 = _0x228b5c.height;
  let _0x290612 = _0x26a5b6;
  let _0x1d3746 = _0x3fca2c;
  let _0xd6fdf8 = _0x260a3f;
  let _0x192cc8 = _0xfaf7d4;
  const _0x65fb4a = _0x260a3f / _0x3cc944;
  const _0x56c4e1 = _0xfaf7d4 / _0x3386b2;
  let _0x42f982 = Math.min(_0x65fb4a, _0x56c4e1);
  if (_0xa3b92e) {
    _0x42f982 = Math.min(_0x42f982, 0x1);
  }
  if (_0x1cbc7e !== 0x0) {
    _0xd6fdf8 = Math.round(_0x3cc944 * _0x42f982);
    _0x192cc8 = Math.round(_0x3386b2 * _0x42f982);
  }
  switch (_0x1cbc7e) {
    case 0x1:
    case 0x4:
    case 0x7:
      _0x290612 = _0x26a5b6;
      break;
    case 0x2:
    case 0x5:
    case 0x8:
      _0x290612 += Math.round((_0x260a3f - _0xd6fdf8) / 0x2);
      break;
    case 0x3:
    case 0x6:
    case 0x9:
      _0x290612 += _0x260a3f - _0xd6fdf8;
      break;
  }
  switch (_0x1cbc7e) {
    case 0x7:
    case 0x8:
    case 0x9:
      _0x1d3746 = _0x3fca2c;
      break;
    case 0x4:
    case 0x5:
    case 0x6:
      _0x1d3746 += Math.round((_0xfaf7d4 - _0x192cc8) / 0x2);
      break;
    case 0x1:
    case 0x2:
    case 0x3:
      _0x1d3746 += _0xfaf7d4 - _0x192cc8;
      break;
  }
  _0x1b5695.blt(_0x228b5c, 0x0, 0x0, _0x3cc944, _0x3386b2, _0x290612, _0x1d3746, _0xd6fdf8, _0x192cc8);
  if (_0xa3b92e) {
    this.drawItemContents(_0x1c9976);
  }
};
Window_ChoiceList.prototype.updateHelp = function () {
  this._helpWindow.clear();
  if (!this._choiceHelpDescriptions) {
    return;
  }
  const _0x59e009 = this.index();
  if (this._choiceHelpDescriptions[_0x59e009]) {
    this._helpWindow.setText(this._choiceHelpDescriptions[_0x59e009]);
    this._helpWindow.show();
  } else {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
Window_EventItem.prototype.makeItemList = function () {
  const _0x39d23c = $gameMessage.itemChoiceItypeId();
  if (_0x39d23c === "skill" && Imported.VisuMZ_1_SkillsStatesCore) {
    this.makeSkillList();
  } else {
    Window_ItemList.prototype.makeItemList.call(this);
  }
};
Window_EventItem.prototype.makeSkillList = function () {
  const _0x373703 = $gameMessage.itemChoiceActor();
  this._data = _0x373703 ? _0x373703.skills().filter(_0x53d43f => this.includes(_0x53d43f)) : [];
  if (this.includes(null)) {
    this._data.push(null);
  }
};
VisuMZ.MessageCore.Window_EventItem_includes = Window_EventItem.prototype.includes;
Window_EventItem.prototype.includes = function (_0x369149) {
  const _0x2bf841 = $gameMessage.itemChoiceItypeId();
  if (_0x2bf841 === "weapon") {
    if (!DataManager.isWeapon(_0x369149)) {
      return false;
    }
    const _0xf052d9 = $gameMessage.itemChoiceWtypeId();
    if (_0xf052d9 > 0x0) {
      if (_0x369149.wtypeId !== _0xf052d9) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x2bf841 === "armor") {
      if (!DataManager.isArmor(_0x369149)) {
        return false;
      }
      const _0x5bdc71 = $gameMessage.itemChoiceAtypeId();
      if (_0x5bdc71 > 0x0) {
        if (_0x369149.atypeId !== _0x5bdc71) {
          return false;
        }
      }
      const _0x2386de = $gameMessage.itemChoiceEtypeId();
      if (_0x2386de > 0x0) {
        if (_0x369149.etypeId !== _0x2386de) {
          return false;
        }
      }
      return true;
    } else {
      if (_0x2bf841 === 'skill') {
        if (!DataManager.isSkill(_0x369149)) {
          return false;
        }
        const _0x42e93c = $gameMessage.itemChoiceActor();
        if (_0x42e93c.isSkillHidden(_0x369149)) {
          return false;
        }
        if (!_0x42e93c.isSkillTypeMatchForUse(_0x369149)) {
          return false;
        }
        const _0x2c5d9f = $gameMessage.itemChoiceStypeId();
        if (_0x2c5d9f > 0x0) {
          const _0x2ee841 = DataManager.getSkillTypes(_0x369149);
          if (!_0x2ee841.includes(_0x2c5d9f)) {
            return false;
          }
        }
        return true;
      } else {
        return VisuMZ.MessageCore.Window_EventItem_includes.call(this, _0x369149);
      }
    }
  }
};
VisuMZ.MessageCore.Window_ItemList_drawItemNumber = Window_ItemList.prototype.drawItemNumber;
Window_ItemList.prototype.drawItemNumber = function (_0x2de45d, _0xd24416, _0x221bab, _0x45e12d) {
  const _0x19e5e2 = $gameMessage.itemChoiceItypeId();
  if (_0x19e5e2 === "skill") {
    const _0x45d858 = $gameMessage.itemChoiceActor();
    this.drawSkillCost(_0x45d858, _0x2de45d, _0xd24416, _0x221bab, _0x45e12d);
  } else {
    VisuMZ.MessageCore.Window_ItemList_drawItemNumber.call(this, _0x2de45d, _0xd24416, _0x221bab, _0x45e12d);
  }
};
Window_MapName.prototype.refreshWithTextCodeSupport = function () {
  this.contents.clear();
  let _0x971d2d = $gameMap.displayName();
  if (_0x971d2d) {
    const _0x5e477b = this.innerWidth;
    this.drawBackground(0x0, 0x0, _0x5e477b, this.lineHeight());
    _0x971d2d = this.realignMapName(_0x971d2d);
    const _0x397d8a = this.textSizeEx(_0x971d2d).width;
    this.drawTextEx(_0x971d2d, Math.floor((_0x5e477b - _0x397d8a) / 0x2), 0x0);
  }
};
Window_MapName.prototype.realignMapName = function (_0x3f52e0) {
  if (_0x3f52e0.match(/<LEFT>/gi)) {
    this.x = 0x0;
  } else {
    if (_0x3f52e0.match(/<CENTER>/gi)) {
      this.x = Math.floor((Graphics.boxWidth - this.width) / 0x2);
    } else if (_0x3f52e0.match(/<RIGHT>/gi)) {
      this.x = Graphics.boxWidth - this.width;
    }
  }
  _0x3f52e0 = _0x3f52e0.replace(/<(?:LEFT|CENTER|RIGHT)>/gi, '');
  _0x3f52e0 = _0x3f52e0.replace(/<\/(?:LEFT|CENTER|RIGHT)>/gi, '');
  if (_0x3f52e0.match(/<TOP>/gi)) {
    this.y = 0x0;
  } else {
    if (_0x3f52e0.match(/<MIDDLE>/gi)) {
      this.y = Math.floor((Graphics.boxHeight - this.height) / 0x2);
    } else if (_0x3f52e0.match(/<BOTTOM>/gi)) {
      this.y = Graphics.boxHeight - this.height;
    }
  }
  _0x3f52e0 = _0x3f52e0.replace(/<(?:TOP|MIDDLE|BOTTOM)>/gi, '');
  _0x3f52e0 = _0x3f52e0.replace(/<\/(?:TOP|MIDDLE|BOTTOM)>/gi, '');
  if (_0x3f52e0.match(/<X:[ ]([\+\-]\d+)>/gi)) {
    this.x += Number(RegExp.$1);
    _0x3f52e0 = _0x3f52e0.replace(/<X:[ ]([\+\-]\d+)>/gi, '');
  }
  if (_0x3f52e0.match(/<Y:[ ]([\+\-]\d+)>/gi)) {
    this.y += Number(RegExp.$1);
    _0x3f52e0 = _0x3f52e0.replace(/<Y:[ ]([\+\-]\d+)>/gi, '');
  }
  return _0x3f52e0;
};