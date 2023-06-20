import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { EngineTypes } from '../models';
import { useContext } from 'react';
import { CarsContext } from '../CarsContext';

export const CarEngineForm = () => {
  const { data, setData } = useContext(CarsContext);
  const isFamilyCar = data?.isFamilyCar;
  const isSportsCar = data?.isSportsCar;

    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
                    {isFamilyCar ? "begin uw familauto samen te stelle" : ""}
                    {isSportsCar ? "begin uw sportauto samen te stelle" : ""}
                    <Link to="/"><h3><FontAwesomeIcon icon={faHouse} /></h3></Link>
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
                <h1><FontAwesomeIcon icon={faGasPump} /> Engine</h1>
                <div className=''>
                    <div className=' engine-options'>
                        {Object.values(EngineTypes).map((engineType, index) => (
                            <div className='input' key={index}>
                                <h3>{engineType}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Link to="/"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-color"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarEngineForm;