import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getByHeroId } from '../helpers';

export const HeroPage = () => {

  const navigator = useNavigate();
  const { id } = useParams();
  const heroe = useMemo( () => getByHeroId(id), [ id ]);
  const {alter_ego,publisher,first_appearance,superhero,characters} = heroe;

  const onNavigateBack = () => {
    navigator(-1);
  }

  if( !heroe ){
    return <Navigate to={"/marvel"} />
  }

  return (
    <div className="row mt-4">
        <div className="col-md-4">
            <img 
              src={`../assets/heroes/${id}.jpg`}
              alt={superhero}
              className="img-fluid rounded animate__animated animate__backInLeft"
            />
        </div>
        <div className="col-md-8">
          <div className="card-body p-2">
            <h5 className="card-title"><span className="fw-semibold">Super héroe: </span>{superhero}</h5>
            <p className="card-text"><span className="fw-semibold">Editora: </span>{publisher}</p>
            <p className="card-text"><span className="fw-semibold">Personajes: </span>{characters}</p>
            <p className="card-text"><span className="fw-semibold">Alterar: </span>{alter_ego}</p>
            <p className="card-text"><span className="fw-semibold">Impresión: </span><small className="text-muted">{first_appearance}</small></p>
            <button
              className="btn btn-sm btn-light"
              onClick={onNavigateBack}
            >
              volver...
            </button>
          </div>
        </div>
    </div>
    
  )
}
