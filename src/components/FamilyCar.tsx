import React from 'react'
import { AbstractCarColor, AbstractDoor, AbstractEngine, AbstractLight, AbstractRims, AbstractTire, AbstractWindow } from './AbstractCar.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faDoorOpen, faPersonThroughWindow, faCircle, faBraille, faFaceDizzy, faArrowLeft, faPalette, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export type AbstractCarProps = {
    engine: AbstractEngine[],
    doors: AbstractDoor[],
    windows: AbstractWindow[],
    tires: AbstractTire[],
    rims: AbstractRims[],
    color: AbstractCarColor[]
}
export const FamilyCar = (props: AbstractCarProps) => {
    return (
        <div>
            <div className='normal-car'>
                <div className='header'>
                    <h1>Stel je Familie wagen samen:</h1>
                </div>
                <div className='sub-header'>
                    <h2>Klik op de eigenschappen om ze te kiezen</h2>
                </div>
                <div className='option-container-family'>
                    <h2><FontAwesomeIcon icon={faPalette} /> Kleur:<br></br> </h2>
                    {props.color.map(color => {
                        return (
                            <div onClick={() => console.log(color.color)}>
                                <h3 key={color.id}> {color.color}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-family'>
                    <h2><FontAwesomeIcon icon={faCar} />  Moter:<br></br> </h2>
                    {props.engine.map(car => {
                        return (
                            <div onClick={() => console.log(car.EngineType)}>
                                <h3 key={car.id} > {car.EngineType}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-family'>
                    <h2><FontAwesomeIcon icon={faPersonThroughWindow} />  Kleur ramen:</h2>
                    {props.windows.map(window => {
                        return (
                            <div onClick={() => console.log(window.color)}>
                                <h3 key={window.id}>{window.color}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='option-container-family'>
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
                <div className='option-container-family'>
                    <h2><FontAwesomeIcon icon={faFaceDizzy} />  Velg kleur:</h2>
                    {props.rims.map(rim => {
                        return (
                            <div onClick={() => console.log(rim.color)}>
                                <h3 key={rim.id}>  {rim.color}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='button-container'>
                <button className='back'><Link className='back-link' to="/"><FontAwesomeIcon icon={faArrowLeft} /> Terug<br></br></Link></button>
                <button className='submit'>
                    Auto bouwen
                    <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} />
                </button>
            </div>
        </div>
    )
}

export default FamilyCar
