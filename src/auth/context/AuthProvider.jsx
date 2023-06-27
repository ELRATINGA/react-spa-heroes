import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

import { typesAuth } from "../types/typesAuth";

const initialState = {
    logged: false,
} 

const init = () => {

  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }) => {
  
  const [ authState, dispatch ] = useReducer( authReducer, initialState, init );

  const login = ( name ) => {

    const user = { id: '123', name };

    const action = {
      type: typesAuth.login,
      payload: user,
    }

    localStorage.setItem('user', JSON.stringify( user ));

    dispatch(action);
  }

  const logout = () => {
    
    localStorage.removeItem('user');

    const action = {
      type: typesAuth.logout,
    }

    dispatch(action);
    
  }

  return (
    <AuthContext.Provider value={{ 
        ...authState,
        login: login,
        logout: logout
      }}
     >
        { children }
    </AuthContext.Provider>
  )
}
