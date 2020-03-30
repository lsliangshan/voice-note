import actionTypes from './actionTypes';
const defaultState = {
  // 初始化state
  requestUrl: 'http://talkapi.dei2.com',
  activeTabIndex: -1,
  // requestUrl: 'http://192.168.0.101:3000',
};

function _findIndex (item, list) {
  let outIndex = -1;
  let i = 0;
  for (i; i < list.length; i++) {
    if (list[i].url === item.url) {
      outIndex = i;
      i = list.length;
    }
  }
  return outIndex;
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.CHANGE:
      newState.activeTabIndex = action.index;
      break;
  }
  return newState;
};
