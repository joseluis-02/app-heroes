import {fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en mi componente <SearchPage />', () => { 

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => {
    
       const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el batman y el input con el valor de queryString', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=bat']}>
                <SearchPage />
            </MemoryRouter>
        );

        //screen.debug();
        //screen.debug();
        const inputValue = screen.getByLabelText('inputSearch');
        //console.log(inputValue.value);
        expect( inputValue.value ).toBe('');

        const img = screen.getByRole('img');
        //console.log(img.src);
        expect( img.src ).toBe('http://localhost/assets/heroes/dc-batman.jpg');

        //const divDanger = screen.getByLabelText('div-danger');
    });
    
    test('Debe de mostrar un error si no se encuentra un heroe con el nombre (batman123', () => {

        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        ); 

        expect( screen.getByText('batman123')).toBeTruthy();

    });

    test('Debe de llamar el navigate a la pantalla nueva ', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByLabelText('inputSearch');
        fireEvent.change( input, {target:{name: 'searchText', value: 'superman'}});
        const form = screen.getByLabelText('form');
        fireEvent.submit(form);
        expect( mockUseNavigate ).toHaveBeenCalledWith('?q=superman');
    });


 });