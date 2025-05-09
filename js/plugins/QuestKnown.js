//=============================================================================
// CustomQuestUtils.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Adds helper function to check if a quest objective is known.
 * @author You
 *
 * @help
 * This plugin adds a new JavaScript function:
 *
 *   isQuestObjectiveKnown(questKey, objectiveID)
 *
 * Returns true if the quest's objective is known (visible), false otherwise.
 *
 * Example use in conditional branch:
 *   isQuestObjectiveKnown('Welcome', 1)
 */

function isQuestObjectiveKnown(questKey, objectiveID) {
  questKey = questKey.trim().toUpperCase();
  const quest = $gameSystem.quest(questKey);
  if (!quest) return false;
  $gameSystem.questObjectives(questKey);
  const knownObjectives = $gameSystem.questData().objectives;
  if (!knownObjectives[questKey]) return false;
  return knownObjectives[questKey].includes(objectiveID);
}
