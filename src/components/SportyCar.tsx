import { AbstractCarProps } from "./NormalCar"
import { useState } from 'react'
import { AbstractCarColor, AbstractDoor, AbstractEngine, AbstractLight, AbstractRims, AbstractTire, AbstractWindow, ScissorDoor } from './AbstractCar.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faDoorOpen, faPersonThroughWindow, faCircle, faFaceDizzy, faArrowLeft, faPalette, faRoadBarrier, faXmarksLines, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { SportyCarRollcage, SportyCarSpoiler, SportyCarTireSmoke } from "./SportCar.type"
import { createContext, useContext } from "react";

interface SportyCarProps extends AbstractCarProps {
    hasSpoiler?: boolean,
    tiresmoke: SportyCarTireSmoke[],
    rollcage: SportyCarRollcage[],
    spoiler: SportyCarSpoiler[],
    scissordoors: ScissorDoor[],
    hasSportsmode: boolean
}
export const SportyCar = (props: SportyCarProps) => {
    const [hasSpoiler, setHasSpoiler] = useState(false);
    const [hasTireSmoke, setHasTireSmoke] = useState(false);
    const [hasRollCage, setHasRollcage] = useState(false);
    const [hasSportsmode, setHasSportsmode] = useState(false);
    const [style, setStyle] = useState(false);

const handleClick = () =>{
    setStyle(current => !current);
}
    return (
        <div>
            <div className='normal-car'>
                <div className='header'>
                    <h1>Stel je Sportwagen samen:</h1>
                </div>
                <div className='sub-header'>
                    <h2> Klik op de eigenschappen om ze te kiezen</h2>
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faPalette} /> Kleur:<br></br> </h2>
                    {props.color.map((color, index) => {
                        return (
                            <div onClick={() => console.log(color.color)}>
                                <h3 id={`${index}`} key={color.id} style={{backgroundColor: style ? 'black' :''}}  onClick={handleClick}> {color.color}</h3>
                            </div>
                        )
                    })}
                </div>

                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faCar} /> Motor:<br></br> </h2>
                    {props.engine.map(engine => {
                        return (
                            <div key={engine.id}>
                                <h3 > {engine.EngineType}</h3>
                            </div>
                        )
                    })}
                    <h2>Wil u daar ook Sportmodus bij?</h2>
                    <h3 onClick={() => setHasSportsmode(true)}>Ja</h3>
                    <h3>Nee</h3>
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faRoadBarrier} />  Spoiler?<br></br> </h2>
                    <h3 onClick={() => setHasSpoiler(true)}>Ja</h3>
                    <h3 onClick={() => setHasSpoiler(false)}>Nee</h3>
                    {hasSpoiler ? <div> <h2>Oke, welke kleur?</h2>
                        {props.spoiler.map(spoiler => {
                            return (
                                <div onClick={() => console.log(spoiler.color)}>

                                    <h3 key={spoiler.id}>{spoiler.color}</h3>
                                </div>
                            )
                        })}
                    </div>
                        : ""}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faDoorOpen} /> Kleur deuren:<br></br> </h2>
                    {props.doors.map(door => {
                        return (
                            <div onClick={() => console.log(door.color)}>
                                <h3 key={door.id}>{door.color}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faPersonThroughWindow} />  Kleur ramen:</h2>
                    {props.windows.map(window => {
                        return (
                            <div onClick={() => console.log(window.color)}>
                                <h3 key={window.id}>{window.color}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faCircle} /> Banden:</h2>
                    {props.tires.map(tire => {
                        return (
                            <div>
                                <div onClick={() => console.log(tire.BrandName, tire.color)}>
                                    <h3 key={tire.id}>  {tire.BrandName} - {tire.color}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faCircle} /> Band rook:</h2>
                    <h3 onClick={() => setHasTireSmoke(true)}>Ja</h3>
                    <h3 onClick={() => setHasTireSmoke(false)}>Nee</h3>

                    {hasTireSmoke ?
                        <div>
                            <h2>Oke, welke kleur?</h2>
                            {props.tiresmoke.map(tiresmoke => {
                                return (
                                    <div>

                                        <div onClick={() => console.log(tiresmoke.color)}>
                                            <h3 key={tiresmoke.id}>  {tiresmoke.color}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        : ""}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faXmarksLines} /> Rollcage:</h2>
                    <h3 onClick={() => setHasRollcage(true)}>Ja</h3>
                    <h3 onClick={() => setHasRollcage(false)}>Nee</h3>

                    {hasRollCage ?
                        <div>
                            <h2>Oke, welke kleur?</h2>
                            {props.rollcage.map(rollcage => {
                                return (
                                    <div>

                                        <div onClick={() => console.log(rollcage.color)}>
                                            <h3 key={rollcage.id}>  {rollcage.color}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        : ""}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faFaceDizzy} />  Velg kleur:</h2>
                    {props.rims.map(rim => {
                        return (
                            <div onClick={() => console.log(rim.color)}>
                                <h3 key={rim.id}>  {rim.color}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-sporty'>
                    <h2><FontAwesomeIcon icon={faDoorOpen} />  Wat voor deuren?</h2>
                    <h3>Schaardeuren</h3>
                    <h3>Gulwigdeuren</h3>
                </div>
            </div>
            <div className='button-container'>
                <button className='back'><Link className='back-link' to="/"><FontAwesomeIcon icon={faArrowLeft} /> Terug<br></br></Link></button>
                <button className='submit'>Auto bouwen<FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} /> </button>
            </div>
        </div>
    )
}