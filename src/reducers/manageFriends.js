export function manageFriends(state, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      };
    case "REMOVE_FRIEND":
      let friends = [...state.friends];
      
      friends = friends.map(friend => friend.id !== action.friend.id);
      
      return { friends: friends };
    default:
      return state;
  }
}
