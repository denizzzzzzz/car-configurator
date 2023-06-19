import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHouse, faCaretLeft, faCaretRight, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const CarColorForm = () => {
    return (
        <div>
            <div className='engine-type'>
                <div className='header'>
                    <Link to="/"><h3><FontAwesomeIcon icon={faHouse} /></h3></Link>
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

                <h1><FontAwesomeIcon icon={faPalette} /> Color</h1>
                <div className='options-colors'>
                    <div className='input-colors'>
                        <h3 className='bg-[#F2545B] text-white'>Indian red</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-[#19323C] text-white'>Gummental</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-[#F3F7F0]'>Mint cream</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-black text-white'>Zwart</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-[#3626A7] text-white'>Zaffre</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-[#9ED8DB] text-black'>Non Photo Bleu</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-[#467599] text-white'>UCLA Blue</h3>
                    </div>
                    <div className='input-colors'>
                        <h3 className='bg-[#0D0106] text-white'>Licorice</h3>
                    </div>
                </div>
                <div>
                    <Link to="/select-engine"><button className='navButton'><FontAwesomeIcon icon={faCaretLeft} /></button></Link>
                    <Link to="/select-doors"><button className='navButton'><FontAwesomeIcon icon={faCaretRight} /></button></Link>
                </div>
            </div>
        </div >
    )
}
export default CarColorForm;