import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContex } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en mi componente <AppRouter />', () => {
    
    test('Debe de mostrar el login si no esta autenticado', () => { 

        const contexValue = {
            logged: false
        }

        render(
            <AuthContex.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContex.Provider>
        );

        //screen.debug();
        expect( screen.getByText('Iniciar sesión') ).toBeTruthy();

     });

     test('Debe de mostrar el componente marvel si está autenticado', () => { 

        const contexValue = {
            logged: true,
            user: {
                id: 'abc',
                nombre: 'jose luis'
            }
        }
        render(
            <AuthContex.Provider value={contexValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContex.Provider>
        );

        //screen.debug();
        expect( screen.getByText('Marvel Comics') ).toBeTruthy();
        //expect( screen.getByRole('img') ).toBeTruthy();
        //la palabra aparece mas de una vez
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

      });

});