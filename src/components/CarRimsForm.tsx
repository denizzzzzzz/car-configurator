import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarRimsForm = () => {
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
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                </div>
                </div>
              
                <h1><FontAwesomeIcon icon={faAsterisk} /> Rims</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Silver</h3>
                    </div>
                    <div className='input'>
                        <h3>Gold</h3>
                    </div>
                    <div className='input'>
                        <h3>Aluminium</h3>
                    </div>
                    <div className='input'>
                        <h3>Idk</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-tires"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-extras"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarRimsForm;