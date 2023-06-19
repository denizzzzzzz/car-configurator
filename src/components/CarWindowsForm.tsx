import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 
export const CarWindowsForm = () => {
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
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                    <FontAwesomeIcon className="icon" icon={faCircle} />
                </div>
                </div>
                
                <h1><FontAwesomeIcon icon={faWindowMaximize} /> Windows</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Dimmed</h3>
                    </div>
                    <div className='input'>
                        <h3>Bulletproof</h3>
                    </div>
                    <div className='input'>
                        <h3>Automatic</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-doors"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-tires"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarWindowsForm;