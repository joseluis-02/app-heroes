import { authReducer } from '../../../src/auth/contex/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en mi componente authReducer', () => {

    const user = {id: 'abc', nombre: 'jose luis'}
    const inicialState = {
        logged: false
    }

    test('Debe de retornar el estado por defecto', () => { 

        const state = authReducer(inicialState,{});
        //console.log(state);
        const {logged} = state;
        expect(logged).toBe( false );

     });

     test('Debe de llamar a (login) y establecer el usuario', () => { 

        const login = {
            type: types.login,
            payload: user
        }

        const stateLogin = authReducer(inicialState,login);
        //console.log(stateLogin);

      });

      test('Debe de llamar (logout) y establecer logged en false', () => { 

        const logout = {
            logged: false
        }

        const stateLogout = authReducer(inicialState, logout);
        //console.log(stateLogout);
        expect( stateLogout).toEqual({
            logged: false
        })

       });

});