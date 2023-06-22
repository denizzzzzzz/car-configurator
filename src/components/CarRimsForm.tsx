import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NormalRims } from '../models';

export const CarRimsForm = () => {
    const [selectedRims, setSelectedRims] = useState<string | null>(null);
    const handleChange = (tires: string) => {
        setSelectedRims(tires);
    }
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
                {Object.values(NormalRims).map((rims, index) => (
                        <div className='input' key={index}>
                            <h3
                                className={selectedRims === rims ? 'selected' : ''}
                                onClick={() => handleChange(rims)}
                            >{rims}</h3>
                        </div>
                    ))}
                <div>
                    </div>
                </div>
                <Link to="/select-tires"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-extras"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
            </div>
        </div >
    )
}
export default CarRimsForm;