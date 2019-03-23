export function manageFriends(state, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      };
    case "REMOVE_FRIEND":
      let friends = [...state.friends];
      
      let filteredFriends = friends.filter(function(friend, index, array) {
        return friend.id !== action.id;
      });
    // Other option:
    // case "REMOVE_FRIEND":
    //   const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
    //   return Object.assign({}, state, {
    //     friends: [
    //       ...state.friends.slice(0, removalIndex),
    //       ...state.friends.slice(removalIndex + 1)
    //     ]
    //   });

      
      return { friends: filteredFriends };
    default:
      return state;
  }
}
