import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {
  
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( heroId ),  [ heroId ] );

  const onNavigateBack = () => {
    if( hero.publisher === 'Marvel Comics' ) {
      navigate('/marvel');
    } else {
      navigate('/dc');
    }
  }

  if( !hero ) {
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="row mt-5">
        <div className="col-4">
            <img 
              src={ `/heroes/${ heroId }.jpg` }
              alt={ hero.superhero }
              className="img-thumbnail animate__animated animate__fadeInLeft"
            />
        </div>

        <div className="col-8">
            <h3>{ hero.superhero }</h3>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
            <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
            <li className="list-group-item"> <b>First apparence:</b> { hero.first_appearance } </li>
            </ul>
        
        <h5 className="mt-5">Characters</h5>
        <p>{ hero.characters }</p>
        </div>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
              Regresar
        </button>
    </div>
  )
}
