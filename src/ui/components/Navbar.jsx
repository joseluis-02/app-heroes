import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContex, AuthProvider } from '../../auth';


export const Navbar = () => {

    const { user,logout } = useContext(AuthContex);

    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/login',{
            replace: true
        });
    }

    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
                <NavLink className="navbar-brand" to={'/'}>App Heroes</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavLink
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                        to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                        to="/dc">
                        Dc
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                        to="/search">
                        Buscar
                    </NavLink>

                </ul>

                <div className="d-flex justify-content-end">
                    <span className="navbar-text me-3">{user?.name} </span>
                    <button 
                        className="btn btn-outline-success"
                        onClick={ onLogout }
                    >
                        cerrar sesión
                    </button>
                </div>
            </div>
         </div>
    </nav>
    )
}