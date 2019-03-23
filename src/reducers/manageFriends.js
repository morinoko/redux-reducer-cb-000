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
      
      return { friends: filteredFriends };
    default:
      return state;
  }
}
