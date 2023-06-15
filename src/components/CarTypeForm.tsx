import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign, faFlagCheckered, faPeopleRoof, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CarTypeForm = () => {
  return (
    <div>
      <div className='header'>
        <h1>Configure your <span className='text-[#00a8e8]'>dream</span>  car</h1>
      </div>
      <div className='sub-header'>
        <h2>Choose your car</h2>
      </div>
      <div className='options-container'>
        <Link to="select-engine">
          <button>
            Regular <FontAwesomeIcon icon={faCar} />
          </button>
        </Link>
        <Link to="select-engine">
          <button>
            Sports <FontAwesomeIcon icon={faFlagCheckered} />
          </button>
        </Link>
        <Link to="select-engine">
          <button className=''>
            Luxurious <FontAwesomeIcon icon={faDollarSign} />
          </button>
        </Link>
        <Link to="select-engine">
          <button>
            Truck <FontAwesomeIcon icon={faTruckPickup} />
          </button>
        </Link>
        <Link to="select-engine">
          <button>
            Family <FontAwesomeIcon icon={faPeopleRoof} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CarTypeForm
