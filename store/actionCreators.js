import actionTypes from './actionTypes';
export function change (index) {
  // 统一管理action
  return {
    type: actionTypes.CHANGE,
    index: index,
  };
}
