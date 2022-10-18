import { useContext } from "react"
import { AuthContex } from "../auth"
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({children}) => {
    const { logged } = useContext(AuthContex);
  return ( logged )
        ? <Navigate to={'/marvel'} />
        : children
}
