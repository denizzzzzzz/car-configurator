import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CarColorNormal, colorMapNormal, CarColorSports, colorMapSports } from '../models';
import { useContext, useState } from 'react';
import { CarsContext } from '../CarsContext';

const NormalCarColor = {
    carColor: colorMapNormal,
};
const SportsCarColor = {
    carColor: colorMapSports,
};

const CarColorForm = () => {
    const { data, setData } = useContext(CarsContext);
    const isFamilyCar = data?.isFamilyCar;
    const isSportsCar = data?.isSportsCar;
    const isNormalCar = data?.isNormalCar;
    const isLuxeCar = data?.isLuxeCar;
    const isTruck = data?.isTruck;
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleChange = (color: string) => {
        setSelectedColor(color);
    }
  
    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
                    <Link to="/">
                        <h3><FontAwesomeIcon icon={faHouse} /></h3>
                    </Link>
                    <div className='progress'>
                        <FontAwesomeIcon className="active" icon={faCircle} />
                        <FontAwesomeIcon className="active" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                        <FontAwesomeIcon className="icon" icon={faCircle} />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='title'><FontAwesomeIcon icon={faPalette} /> Color</h1>
                { 
                
                isNormalCar ? (
                    <div>
                     {Object.values(CarColorNormal).map((color: CarColorNormal) => {
                            const colorInfo = NormalCarColor.carColor[color];
                            return (
                                <div className='input-colors' key={color}>
                                    <h3
                                      className={selectedColor === color ? 'selected-color' : ''}
                                      onClick={() => handleChange(color)}
                                    style={{ backgroundColor: colorInfo.hex, color: colorInfo.color }} >{colorInfo.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                ) : 
                isFamilyCar ? (
                    <div>
                        {Object.values(CarColorNormal).map((color: CarColorNormal) => {
                            const colorInfo = NormalCarColor.carColor[color];
                            return (
                                <div className='input-colors' key={color}>
                                    <h3 
                                    className={selectedColor === color ? 'selected-color' : ''}
                                    onClick={() => handleChange(color)}
                                    style={{ backgroundColor: colorInfo.hex, color: colorInfo.color }}>{colorInfo.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                ) : isSportsCar ? (
                    <div>
                        {Object.values(CarColorSports).map((color: CarColorSports) => {
                            const colorInfo = SportsCarColor.carColor[color];
                            return (
                                <div className='input-colors' key={color}>
                                    <h3 
                                    className={selectedColor === color ? 'selected-color' : ''}
                                    onClick={() => handleChange(color)}
                                    style={{ backgroundColor: colorInfo.hex, color: colorInfo.color }}>{colorInfo.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                ) :
                isLuxeCar ? (
                    <div>
                        {Object.values(CarColorSports).map((color: CarColorSports) => {
                            const colorInfo = SportsCarColor.carColor[color];
                            return (
                                <div className='input-colors' key={color}>
                                    <h3 
                                    className={selectedColor === color ? 'selected-color' : ''}
                                    onClick={() => handleChange(color)}
                                    style={{ backgroundColor: colorInfo.hex, color: colorInfo.color }}>{colorInfo.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                ) : isTruck ? (
                    <div>
                        {Object.values(CarColorNormal).map((color: CarColorNormal) => {
                            const colorInfo = NormalCarColor.carColor[color];
                            return (
                                <div className='input-colors' key={color}>
                                    <h3 
                                    className={selectedColor === color ? 'selected-color' : ''}
                                    onClick={() => handleChange(color)}
                                    style={{ backgroundColor: colorInfo.hex, color: colorInfo.color }}>{colorInfo.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                ) :
                 null
                }
                <div>
                    <Link to="/select-engine"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-doors"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default CarColorForm;
