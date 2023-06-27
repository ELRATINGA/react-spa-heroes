const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { MemoryRouter, Routes, Route } = require("react-router-dom");

describe('Pruebas en <PublicRouter />', () => { 
    
    test('Debe de mostrar el children si no está autenticado', () => { 
        
        const contextValue = {
            logged: false
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();
     });
    
    test('Debe de navegar si está autenticado', () => { 
        
        const contextValue = {
            logged: true,
            id: '111'
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/login'] }>

                    <Routes>
                        <Route path="login" element={       
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={ <h1>Página de Marvel</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página de Marvel') ).toBeTruthy();
    });
});