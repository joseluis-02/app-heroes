import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContex } from '../../src/auth';
import { PrivateRouter } from '../../src/router/PrivateRouter';

describe('Pruebas en componente PrivateRouter', () => {
    
    test('Debe de mostrar el children si está autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contexValue = {
            logged: true,
            user: {
                id: 'abc',
                nombre: 'jose luis'
            }
        }
        render(
            <AuthContex.Provider value={ contexValue }>
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContex.Provider>
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect(localStorage.setItem ).toHaveBeenCalledWith('lastPath','/');

     });

});