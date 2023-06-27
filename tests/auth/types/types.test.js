import { typesAuth } from "../../../src/auth/types/typesAuth";

describe('Prueba en los "Types.js"', () => { 
    
    test('Debe de regresar estos types', () => { 
        
        expect( typesAuth ).toEqual( {
            login: '[Auth Login]',
            logout: '[Auth Logout]'
        });
     });
});