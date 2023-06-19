import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarExtraFeaturesForm = () => {
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
                        <FontAwesomeIcon className="active" icon={faCircle} />
                        <FontAwesomeIcon className="active" icon={faCircle} />


                    </div>
                </div>

                <h1><FontAwesomeIcon icon={faPlus} /> Extra Features</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Seat Warming</h3>
                    </div>
                    <div className='input'>
                        <h3>Spoiler</h3>
                    </div>
                    <div className='input'>
                        <h3>Roofbox</h3>
                    </div>
                    <div className='input'>
                        <h3>Towhook</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-rims"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/car"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarExtraFeaturesForm;