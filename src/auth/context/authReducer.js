import { typesAuth } from "../types/typesAuth";

const initialState = {
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case typesAuth.login:
            
            return {
                ...state, // Esto se recomineda ponerla ya que si por alguna razón se le añade una propiedad al 'state' no se verá afectado este 'case'
                logged: true,
                user: action.payload 
            };
        
        case typesAuth.logout:
            
            return {
                logged: false,
            };
    
        default:
            return state;
    }
}