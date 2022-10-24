import {render, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en mi componente <Navbar />', () => { 

    const contexValue = {
        logged: true,
        user: {
            name: 'jose luis'
        },
        logout: jest.fn(),
    }
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el nombre del usuario logueado', () => {
        
        render(
            <AuthContex.Provider value={ contexValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContex.Provider>
        );

        //screen.debug();
        expect( screen.getByText('jose luis') ).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el boton logout', () => {
        
        render(
            <AuthContex.Provider value={ contexValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContex.Provider>
        );

        const logoutAuthBtn = screen.getByLabelText('btnLogout');
        fireEvent.click(logoutAuthBtn);
        expect( contexValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login',{'replace': true});


    });

 });