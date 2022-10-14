import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{
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
