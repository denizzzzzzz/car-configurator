import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCar, faCircle, faArrowRight, faHouse, faBackward, faForward, faBackspace, faChevronLeft, faCaretLeft, faCaretRight, faGasPump, faDoorOpen, faLock, faRoadLock, faUserLock, faHouseLock, faBridgeLock, faSchoolLock, faLockOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarDoorsForm = () => {
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
                <h1  className='step-title'><FontAwesomeIcon icon={faDoorOpen} />DOORS</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>ScissorDoors</h3>
                    </div>
                    <div className='input'>
                        <h3>SuicideDoors</h3>
                    </div>
                    <div className='input'>
                        <h3>Normal Doors</h3>
                    </div>
                    <div className='input'>
                        <h3>Gulwing Doors</h3>
                    </div>
                </div>
                <h1>Do you want anylocks? <FontAwesomeIcon icon={faLock} /></h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Front left door</h3>
                    </div>
                    <div className='input'>
                        <h3>Front right door</h3>
                    </div>
                    <div className='input'>
                        <h3>Back left door</h3>
                    </div>
                    <div className='input'>
                        <h3>Back right door</h3>
                    </div>
                </div>
                <h1><FontAwesomeIcon icon={faPlus} /> Do you want special features?</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Front left door</h3>
                    </div>
                    <div className='input'>
                        <h3>Front right door</h3>
                    </div>
                    <div className='input'>
                        <h3>Back left door</h3>
                    </div>
                    <div className='input'>
                        <h3>Back right door</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-color"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-color"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarDoorsForm;