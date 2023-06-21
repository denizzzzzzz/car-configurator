import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faDoorOpen, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarDoorsForm = () => {
    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
                    <Link to="/"><h3><FontAwesomeIcon icon={faHouse} /></h3></Link>
                    <div className='progress'>
                        <FontAwesomeIcon className="active" icon={faCircle} />
                        <FontAwesomeIcon className="active" icon={faCircle} />
                        <FontAwesomeIcon className="active" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                    </div>
                </div>

                <h1  ><FontAwesomeIcon icon={faDoorOpen} />DOORS</h1>
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
                <h1>Do you want locks? <FontAwesomeIcon icon={faLock} /></h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Yes</h3>
                    </div>
                    <div className='input'>
                        <h3>No</h3>
                    </div>
                </div>
                <h1><FontAwesomeIcon icon={faPlus} /> Do you want special features?</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Abstruction sensor</h3>
                    </div>
                    <div className='input'>
                        <h3>Automatic opening</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-color"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-windows"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarDoorsForm;