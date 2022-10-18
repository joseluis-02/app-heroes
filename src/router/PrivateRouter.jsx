import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../auth';

export const PrivateRouter = ({ children }) => {

    const { logged } = useContext( AuthContex);
    const {pathname,search} = useLocation();
    //console.log(location);
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    
  return ( logged )
        ? children
        : <Navigate to={'/login'} />
}
