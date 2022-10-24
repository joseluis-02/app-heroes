import { types } from '../../../src/auth/types/types';

describe('Pruebas en mi funcion de Types', () => {
    

    test('Debe de regresar estos types', () => { 
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

     });

});