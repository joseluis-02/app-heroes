import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRouter } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <>
        <Routes>
          {/*Rutas públicas */}
          <Route path='login' element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          } />
          {/* <Route path="login" element={<LoginPage />} />*/}
          


          {/*Rutas privadas */}
          <Route path='/*' element={
            <PrivateRouter>
              <HeroesRouter />
            </PrivateRouter>
          } />
          {/* <Route path="/*" element={ <HeroesRouter /> } />*/}
          
        </Routes>
    </>
  )
}
