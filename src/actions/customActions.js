export const getCustom = (customrecipes) => {
    return {
      type: "GET_CUSTOM",
      customrecipes: customrecipes,
    };
  };
  
  export const wipeAllCustom = () => {
    return {
      type: "WIPE_ALL_CUSTOM",
    };
  };
  
  export const addCustom = (customrecipes) => {
    return {
      type: "ADD_CUSTOM",
      customrecipes: customrecipes,
    };
  };
  
  export const deleteCustom = (customrecipes) => {
    return {
      type: "DELETE_NOTE",
      customrecipes: customrecipes,
    };
  };
  export const updateCustom = (customrecipes) => {
    return {
      type: "UPDATE_CUSTOM",
      customrecipes: customrecipes,
    };
  };
  