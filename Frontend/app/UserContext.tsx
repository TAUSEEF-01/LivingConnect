// import {createContext,useState} from "react";

// const UserType = createContext();

// const UserContext = ({children}) => {
//     const [userId,setUserId] = useState("");
//     return (
//         <UserType.Provider value={{userId,setUserId}}>
//             {children}
//         </UserType.Provider>
//     )
// }

// export {UserType,UserContext}




import React, { createContext, useState, useContext } from "react";

// Create the context
const UserType = createContext();

// Custom hook for accessing the context
const useUser = () => {
  const context = useContext(UserType);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Context provider component
const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  return (
    <UserType.Provider value={{ userId, setUserId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserProvider, useUser };



