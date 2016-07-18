export const HIDE_PROGRESS = "HIDE_PROGRESS";
export const SHOW_PROGRESS = "SHOW_PROGRESS";

export function showProgress() {
  return {
    type: SHOW_PROGRESS
  };
}

export function hideProgress() {
  return {
    type: HIDE_PROGRESS
  };
}
