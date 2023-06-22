import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faDoorOpen, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CarsContext } from '../CarsContext';
import { LuxeDoorTypes, SportsDoorTypes } from '../models';

export const CarDoorsForm = () => {
    const [selectedLock, setSelectedLock] = useState(false);
    const [selectedDoor, setSelectedDoor] = useState<string | null>(null);

    const { data, setData } = useContext(CarsContext);
    const isFamilyCar = data?.isFamilyCar;
    const isSportsCar = data?.isSportsCar;
    const isNormalCar = data?.isNormalCar;
    const isLuxeCar = data?.isLuxeCar;
    const isTruck = data?.isTruck;
    const handleYes = () => {
        setSelectedLock(true);
    }
    const handleNo = () => {
        setSelectedLock(false);
    }
    const handleChange = (doorType: string) => {
        setSelectedDoor(doorType);
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
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                    </div>
                </div>
                <h1><FontAwesomeIcon icon={faDoorOpen} />DOORS</h1>
                {isNormalCar ? (
                    <div>
                        <h1>Do you want locks? <FontAwesomeIcon icon={faLock} /></h1>
                        <div className='engine-options'>
                            <div className='input'>
                                <h3
                                    onClick={handleYes}
                                    className={selectedLock ? 'selected' : ''}
                                >Yes</h3>
                            </div>
                            <div className='input'>
                                <h3
                                    onClick={handleNo}
                                    className={selectedLock ? '' : 'selected'}
                                >No</h3>
                            </div>
                        </div>
                    </div>
                ) : isSportsCar ? (
                    <div>
                        <h1>Do you want locks? <FontAwesomeIcon icon={faLock} /></h1>
                        <div className='engine-options'>
                            <div className='input'>
                                <h3
                                    onClick={handleYes}
                                    className={selectedLock ? 'selected' : ''}
                                >Yes</h3>
                            </div>
                            <div className='input'>
                                <h3
                                    onClick={handleNo}
                                    className={selectedLock ? '' : 'selected'}
                                >No</h3>
                            </div>
                        </div>
                        <h1>What kind of doors do you want?</h1>
                        <div className='engine-options'>
                            {Object.values(SportsDoorTypes).map((doorType, index) => (
                                (<div>
                                    <h3
                                        key={index}
                                        className={selectedDoor === doorType ? 'input selected' : 'input'}
                                        onClick={() => handleChange(doorType)}
                                    >{doorType}</h3>
                                </div>
                                )
                            ))}
                        </div>
                        <h1>How many doors do you want?</h1>
                        <div className='engine-options'>
                            <div className='input'>
                                <h3>2 doors</h3>
                            </div>
                            <div className='input'>
                                <h3>4 doors</h3>
                            </div>
                        </div>
                    </div>
                ) : isLuxeCar ? (
                    <div>
                        <h1>Do you want locks? <FontAwesomeIcon icon={faLock} /></h1>
                        <div className='engine-options'>
                            <div className='input'>
                                <h3
                                    onClick={handleYes}
                                    className={selectedLock ? 'selected' : ''}
                                >Yes</h3>
                            </div>
                            <div className='input'>
                                <h3
                                    onClick={handleNo}
                                    className={selectedLock ? '' : 'selected'}
                                >No</h3>
                            </div>
                        </div>
                        <h1>What kind of doors do you want?</h1>
                        <div className='engine-options'>
                            {Object.values(LuxeDoorTypes).map((doorType, index) => (
                                (<div>
                                    <h3
                                        key={index}
                                        className={selectedDoor === doorType ? 'input selected' : 'input'}
                                        onClick={() => handleChange(doorType)}
                                    >{doorType}</h3>
                                </div>
                                )
                            ))}
                        </div>
                        <h1>How many doors do you want?</h1>
                        <div className='engine-options'>
                            <div className='input'>
                                <h3>2 doors</h3>
                            </div>
                            <div className='input'>
                                <h3>4 doors</h3>
                            </div>
                        </div>
                    </div>
                ) :




                    null
                }
                {/* <div className='input'>
                        <h3>SuicideDoors</h3>
                    </div> */}
                {/* <h1><FontAwesomeIcon icon={faPlus} /> Do you want special features?</h1>
                <div className='engine-options'>
                    <div className='input'>
                        <h3>Abstruction sensor</h3>
                    </div>
                    <div className='input'>
                        <h3>Automatic opening</h3>
                    </div>
                </div> */}
                <div>
                    <Link to="/select-color"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-windows"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarDoorsForm;