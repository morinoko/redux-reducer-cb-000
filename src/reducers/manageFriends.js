export function manageFriends(state, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return {
        friends: [...state.friends, action.friend]
      };
    case "REMOVE_FRIEND":
      let friends = [...state.friends];
      
      let filterdFriends = friends.filter(friend => { 
        if (friend.id !== action.id) {
          return friend;
        } 
      });
      
      return { friends: friends };
    default:
      return state;
  }
}
