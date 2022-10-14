import { Link } from "react-router-dom";

export const HeroItem = ({ id,superhero,characters,first_appearance }) => {
  const imageUrl = `./assets/heroes/${id}.jpg`;
  //console.log(imageUrl);
  return (
    <div className="col animate__animated animate__fadeIn mb-3">
    <div className="row">
      <div className="col-md-4">
        <img src={imageUrl} className="img-fluid" alt={superhero}/>
      </div>
      <div className="col-md-8">
        <div className="card-body pl-1 pr-1">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{characters}</p>
          <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
          <Link className="btn btn-sm btn-light" to={`/hero/${ id }`}>
            ver mas...
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}