import { Link } from 'react-router-dom';
import { CarsContext } from '../CarsContext';
import { useContext } from 'react';


const CarTypeForm = () => {
  const { data, setData } = useContext(CarsContext);

  const handleNormalCar = () => {
    setData({
      ...data,
      isNormalCar: true,
      isFamilyCar:false,
      isSportsCar:false,
      isLuxeCar:false,
      isTruck:false
    });
  };

  const handleFamilyCar = () => {
    setData({
      ...data,
      isFamilyCar:true,
      isNormalCar: false,
      isSportsCar:false,
      isLuxeCar:false,
      isTruck:false
    });
  };

  const handleSportsCar = () => {
    setData({
      ...data,
      isSportsCar:true,
      isFamilyCar:false,
      isNormalCar: false,
      isLuxeCar:false,
      isTruck:false
    });
  };
  const handleLuxeCar = () => {
    setData({
      ...data,
      isLuxeCar:true,
      isSportsCar:false,
      isFamilyCar:false,
      isNormalCar: false,
      isTruck:false
    });
  };
  const handleTruck = () => {
    setData({
      ...data,
      isTruck:true,
      isLuxeCar:false,
      isSportsCar:false,
      isFamilyCar:false,
      isNormalCar: false,
    });
  };

  return (
    <div>
      <div className='header'>
        <h1>CONFIGURE YOUR<span className='text-[#00a8e8]'> DREAM</span>  CAR</h1>
      </div>
   
      <div className='options-container'>
        <Link to="select-engine">
          <button onClick={handleNormalCar} >
            Regular 
            <img src={require('../img/NormalCar.jpg')} alt="" />
          </button>
        </Link>
        <Link to="select-engine">
          <button onClick={handleSportsCar}>
            Sports 
            <img src={require('../img/Sports-car.jpg')} alt="" />
          </button>
        </Link>
        <Link to="select-engine">
          <button className='' onClick={handleLuxeCar}>
            Luxurious
            <img src={require('../img/Luxe-car.webp')} alt="" />
          </button>
        </Link>
        <Link to="select-engine" onClick={handleTruck}>
          <button>
            Truck
            <img src={require('../img/Truck.jpg')} alt="" />
          </button>
        </Link>
        <Link to="select-engine">
          <button onClick={handleFamilyCar}>
            Family
            <img src={require('../img/Fam-car.jpeg')} alt="" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CarTypeForm;
