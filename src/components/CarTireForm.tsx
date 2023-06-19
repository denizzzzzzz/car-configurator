import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faCarRear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarTireForm = () => {
    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
                    <Link to="/"><h3><FontAwesomeIcon icon={faHouse} /></h3></Link>
                    <div className='progress'>
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon className="active"icon={faCircle} />
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                </div>
                </div>
              
                <h1><FontAwesomeIcon icon={faCarRear} /> Tires</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Michellin</h3>
                    </div>
                    <div className='input'>
                        <h3>Another Brand</h3>
                    </div>
                    <div className='input'>
                        <h3>Some Brand</h3>
                    </div>
                    <div className='input'>
                        <h3>I don't know</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-windows"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-rims"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarTireForm;