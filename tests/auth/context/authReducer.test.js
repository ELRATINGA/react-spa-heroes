import { authReducer, typesAuth } from "../../../src/auth";

describe('Pruebas en authReducer', () => { 
    
    test('Debe de retonar el estado por defecto', () => { 
        
        const state = authReducer({ logged: false }, {});

        expect( state ).toEqual( { logged: false } );
     });

    test('Debe de llamar el loggin y autenticar el usuario', () => { 
        
        const action = {
            type: typesAuth.login,
            payload: {
                name: 'Lex',
                id: '111'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });
     });

     test('Debe de hacer logout y borrar el name del usuario en el localstorage', () => { 
        
        const state = {
            logged: true,
            user: {
                name: 'Lex',
                id: '111'
            }
        }

        const action = {
            type: typesAuth.logout
        }

        const newState = authReducer(state, action);

        expect( newState ).toEqual({ logged: false });
    });
 });