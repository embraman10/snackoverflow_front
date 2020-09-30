export default function customrecipes(state = [], action) {
    switch (action.type) {
      case "GET_CUSTOM":
      case "ADD_CUSTOM":
      case "DELETE_CUSTOM":
      case "UPDATE_CUSTOM":
        return action.customrecipes;
      case "WIPE_ALL_CUSTOM":
        return [];
      default:
        return state;
    }
  }
  