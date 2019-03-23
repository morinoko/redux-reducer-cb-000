export function manageFriends(state, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      };
    case "REMOVE_FRIEND":
      let friends = [...state.friends];
      
      let filterdFriends = friends.filter(function(value, index, array) {
        
      });
      
      return { friends: friends };
    default:
      return state;
  }
}
