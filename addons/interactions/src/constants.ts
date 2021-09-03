export const ADDON_ID = 'storybook/test';
export const TOOL_ID = `${ADDON_ID}/tool`;
export const PANEL_ID = `${ADDON_ID}/panel`;
export const CALLS_STATE_ID = `${ADDON_ID}/state/calls`;
export const LOG_STATE_ID = `${ADDON_ID}/state/log`;

export const EVENTS = {
  CALL: `${ADDON_ID}/call`,
  NEXT: `${ADDON_ID}/next`,
  RELOAD: `${ADDON_ID}/reload`,
  SET_CURRENT_STORY: 'setCurrentStory', // Storybook's own event
};
