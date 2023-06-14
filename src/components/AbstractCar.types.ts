export type AbstractCarColor = {
    id: number
    color: string,
}

export type AbstractEngine = {
    id: number,
    EngineType: string
}
export type AbstractLight = {
    id: number
}
export type AbstractWindow  = {
    id: number,
    color: string
}
export type AbstractDoor = {
    id: number,
    color: string,
}
export type AbstractTire = {
    id: number,
    color: string,
    BrandName?: string,
}
export type AbstractRims = {
    color: string,
    id: number
}
export type ScissorDoor = {
    hasAutomaticOpening?: boolean,
    color: string
}
export type SuicideDoor = {
    hasObstructionSensor?: boolean,
    color: string
}

export type AbstractCarProps = {
    color: AbstractCarColor,
    engine: AbstractEngine,
    doors: AbstractDoor,
    windows: AbstractWindow,
    tires: AbstractTire,
    lights: AbstractLight,
    rims: AbstractRims
}