import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NormalEngines, SportsEngines, GenericEngines } from '../models';
import { useContext, useState } from 'react';
import { CarsContext } from '../CarsContext';

export const CarEngineForm = () => {
  const { data, setData } = useContext(CarsContext);
  const isSportsCar = data?.isSportsCar;
  const isNormalCar = data?.isNormalCar;
  const isLuxeCar = data?.isLuxeCar;
  const isTruck = data?.isTruck;
  const isFamilyCar = data?.isFamilyCar;
  const [selectedEngine, setSelectedEngine] = useState<string | null>(null);

  const handleChange = (engineType: string) => {
    setSelectedEngine(engineType);
  }

  return (
    <div>
      <div className='engine-type'>
        <div className='header'>
          <Link to="/">
            <h3>
              <FontAwesomeIcon icon={faHouse} />
            </h3>
          </Link>
          <div className='progress'>
            <FontAwesomeIcon className="active" icon={faCircle} />
            <FontAwesomeIcon className="icon" icon={faCircle} />
            <FontAwesomeIcon className="icon" icon={faCircle} />
            <FontAwesomeIcon className="icon" icon={faCircle} />
            <FontAwesomeIcon className="icon" icon={faCircle} />
            <FontAwesomeIcon className="icon" icon={faCircle} />
            <FontAwesomeIcon className="icon" icon={faCircle} />
          </div>
        </div>
        <h1>
          <FontAwesomeIcon icon={faGasPump} /> Engine
        </h1>
        <div className=''>
          {isNormalCar ?
            <div className=' engine-options'>
              {Object.values(NormalEngines).map((engineType, index) => (
                <div className='input' key={index}>
                  <h3
                    className={selectedEngine === engineType ? 'selected' : ''}
                    onClick={() => handleChange(engineType)}
                  >{engineType}</h3>
                </div>
              ))}
            </div> : isSportsCar ? (
              <div className=' engine-options'>
                {Object.values(SportsEngines).map((engineType, index) => (
                  (<div>
                    <div className='input' key={index}>
                      <h3
                        className={selectedEngine === engineType ? 'selected' : ''}
                        onClick={() => handleChange(engineType)}
                      >{engineType}</h3>
                    </div>
                  </div>
                  )
                ))}
                <h3 className='input'>Sportsmode</h3>
              </div>

            ) : isLuxeCar ? (
              <div className=' engine-options'>
                {Object.values(GenericEngines).map((engineType, index) => (
                  <div className='input' key={index}>
                    <h3
                      className={selectedEngine === engineType ? 'selected' : ''}
                      onClick={() => handleChange(engineType)}
                    >{engineType}</h3>
                  </div>
                ))}
              </div>
            ) : isTruck ? (
              <div className=' engine-options'>
                {Object.values(GenericEngines).map((engineType, index) => (
                  <div className='input' key={index}>
                    <h3 className={selectedEngine === engineType ? 'selected' : ''}
                      onClick={() => handleChange(engineType)}
                    >{engineType}</h3>
                  </div>
                ))}
              </div>
            ) :
              isFamilyCar ? (
                <div className=' engine-options'>
                  {Object.values(GenericEngines).map((engineType, index) => (
                    <div className='input' key={index}>
                      <h3 className={selectedEngine === engineType ? 'selected' : ''}
                        onClick={() => handleChange(engineType)}
                      >{engineType}</h3>
                    </div>
                  ))}
                </div>
              ) : null
          }
        </div>
        <div>
          <Link to="/"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
          <Link to="/select-color"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
        </div>
      </div>
    </div>
  );
};

export default CarEngineForm;
