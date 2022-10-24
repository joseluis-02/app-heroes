import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hokks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroItem } from '../components/HeroItem';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName( q );

  const { searchText,onInputChange,onResetForm } = useForm({ searchText: '' });

  const onSubmitFormSearch = (event) => {
    event.preventDefault();
    //if( searchText.trim().length <= 1) return;
    navigate(`?q=${ searchText }`);
    onResetForm();
  }


  return (
    <>
      <div className="row mt-3">
        <div className="col-sm-5">

          <form aria-label="form" onSubmit={ onSubmitFormSearch }>
            <input 
              type="search"
              className="form-control"
              placeholder="Nombre del héroe"
              name="searchText"
              value={searchText}
              onChange={ onInputChange }
              aria-label="inputSearch"
             />
             <button
              className="btn btn-outline-info mt-2"
             >
              Buscar
             </button>
          </form>

        </div>

        <div className="col-sm-7">
          <div className="shadow-none border-bottom p-3 mb-3 bg-body rounded">Resultados</div>
          {
            ( q.length === 0 )
            ?  <div className="alert alert-info animate__animated animate__fadeIn">Buscar un héroe</div>
            : ( q.length > 0 && heroes.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">No hay héroe con el nombre: <b>{ q }</b></div>
          }
          {
            heroes.map( heroe => (
              <HeroItem 
                key={ heroe.id}
                {...heroe}
              />
            ))
          }
        </div>

      </div>
    </>
  )
}
