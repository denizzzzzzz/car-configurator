import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faDollarSign, faFlagCheckered, faPeopleRoof, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CarsContext } from '../CarsContext';
import { useContext } from 'react'; 


const CarTypeForm = () => {
  const { data, setData } = useContext(CarsContext);

  const handleFamilyCar = () => {
    setData({ ...data, isFamilyCar: true });
  };

  const handleSportsCar = () => {
    setData({ ...data, isSportsCar: true });
  };

  return (
    <div>
      <div className='header'>
        <h1>CONFIGURE YOUR<span className='text-[#00a8e8]'> DREAM</span>  CAR</h1>
      </div>
      <div className='options-container'>
        <Link to="select-engine">
          <button>
            Regular <FontAwesomeIcon icon={faCar} />
          </button>
        </Link>
        <Link to="select-engine">
          <button onClick={handleSportsCar}>
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

export default CarTypeForm;
