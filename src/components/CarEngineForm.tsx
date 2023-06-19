import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarEngineForm = () => {
    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
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
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Diesel</h3>
                    </div>
                    <div className='input'>
                        <h3>Petrol</h3>
                    </div>
                    <div className='input'>
                        <h3>Hybrid</h3>
                    </div>
                    <div className='input'>
                        <h3>Electric</h3>
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