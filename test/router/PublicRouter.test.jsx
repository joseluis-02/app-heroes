import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContex } from '../../src/auth';
import { PublicRouter } from '../../src/router/PublicRouter';

describe('Pruebas en mi componente PublicRouter', () => { 
    
    test('Debe de mostrar el children si no esta autenticado', () => { 

        const contexValue = {
            logged: false
        }
        render(
            <AuthContex.Provider value={ contexValue }>
                <PublicRouter>
                    <h1>Ruta publica</h1>
                </PublicRouter>
            </AuthContex.Provider>
        );

        expect( screen.getByText('Ruta publica') ).toBeTruthy();

     });

     test('Debe de navegar si está autenticado', () => { 

        const contexValue = {
            logged: true,
            user: {
                id: 'abc',
                nombre: 'jose luis'
            }
        }
        //console.log('Pagina de login');
        render(
            <AuthContex.Provider value={ contexValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRouter>
                                <h1>Ruta publica</h1>
                            </PublicRouter>
                        } />
                        <Route path='marvel' element={<h1>Ruta de marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContex.Provider>
        );

        //screen.debug();
        expect( screen.getByText('Ruta de marvel') ).toBeTruthy();

      });
    

 });