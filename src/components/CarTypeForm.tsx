import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign, faFlagCheckered, faPeopleRoof, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AbstractCar, FamilyCar } from '../models';
import { CarsContext } from '../CarsContext';

const context: CarsContext = {
    car: undefined
}
const CarTypeForm = () => {
  const handleFamilyCar = ()=> {
    context.car = new FamilyCar();
  }
  return (
    <div>
      <div className='header'>
        <h1>CONFIGURE YOUR<span className='text-[#00a8e8]'> DREAM</span>  CAR</h1>
      </div>
      <div className='options-container'>
        <Link to="select-engine">
          <button >
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
          <button onClick={handleFamilyCar}>
            Family <FontAwesomeIcon icon={faPeopleRoof} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CarTypeForm
