import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCar, faCircle, faArrowRight, faHouse, faBackward, faForward, faBackspace, faChevronLeft, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarEngineForm = () => {
    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
                    <Link to="/"><h3><FontAwesomeIcon icon={faHouse} /></h3></Link>
                </div>
                <div className='progress'>
                    <FontAwesomeIcon className="active" icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                </div>
                <h1><FontAwesomeIcon icon={faCar} /> Kies een Motor:</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Dieselmoter</h3>
                    </div>
                    <div className='input'>
                        <h3>Benzinemoter</h3>
                    </div>
                    <div className='input'>
                        <h3>Hybridemoter</h3>
                    </div>
                    <div className='input'>
                        <h3>Elektriciteitmotor</h3>
                    </div>
                </div>
                <div>
                    <Link to="/"><button><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/selecteer-kleur"><button><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarEngineForm;