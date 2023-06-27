import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes";

describe('Pruebas en el <SearchPage />', () => { 
    
    test('Debe de mostrar correctamente con valores por defecto', () => { 
        
        const { container } = render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
     });

    test('Debe de mostrar mostrar a Batman y el input con el valor queryString', () => { 
    
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
    });

    con
 });