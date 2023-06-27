import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPage, Search, Hero } from '../../heroes';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        
        <div className="container">
            <Routes>
                <Route path="marvel" element={ <MarvelPage /> } ></Route>
                <Route path="dc" element={ <DcPage /> } ></Route>

                <Route path="search" element={ <Search /> } ></Route>
                <Route path="hero/:heroId" element={ <Hero /> } ></Route>

                <Route path="/" element={ <Navigate  to="/marvel" /> } ></Route>
            </Routes>
        </div>
    </>
  )
}
