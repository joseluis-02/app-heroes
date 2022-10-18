import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContex } from "../contex";

export const LoginPage = () => {
  
  const {login} = useContext(AuthContex);
  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/';


    login('Jose Luis Gutierrez');

    navigate(lastPath,{
      replace: true
    })
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button 
        className="btn btn-success"
        onClick={ onLogin }
      >
        Iniciar sesión
      </button>

    </div>
  )
}
