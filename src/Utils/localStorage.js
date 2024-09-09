// src/utils/localStorage.js
export const saveUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  