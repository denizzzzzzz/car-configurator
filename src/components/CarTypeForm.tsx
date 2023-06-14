import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign, faFlagCheckered, faPeopleRoof, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CarTypeForm = () => {
  return (
    <div>
      <div className='header'>
        <h1>Welkom bij de Auto Configurator!!</h1>
      </div>
      <div className='sub-header'>
        <h2>Wat voor een auto zou u willen configureren?</h2>
      </div>
      <div className='options-container'>
        <Link to="/selecteer-motorblok">
          <button>
            Normaal <FontAwesomeIcon icon={faCar} />
          </button>
        </Link>
        <Link to="/selecteer-motorblok">
          <button>
            Sporty <FontAwesomeIcon icon={faFlagCheckered} />
          </button>
        </Link>
        <Link to="/selecteer-motorblok">
          <button>
            Chauffeur/Luxe <FontAwesomeIcon icon={faDollarSign} />
          </button>
        </Link>
        <Link to="/selecteer-motorblok">
          <button>
            Truck <FontAwesomeIcon icon={faTruckPickup} />
          </button>
        </Link>
        <Link to="/selecteer-motorblok">
          <button>
            Familie <FontAwesomeIcon icon={faPeopleRoof} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CarTypeForm
