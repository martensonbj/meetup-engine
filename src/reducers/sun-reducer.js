const sunReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUN_DATA' :
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default sunReducer;
