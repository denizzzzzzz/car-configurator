export enum EngineTypes {
    diesel = "Diesel",
    petrol = "Petrol",
    electric = "Electric",
    hybric ="Hyrbrid",
}
export interface ColorInfo {
    name: string;
    hex: string;
    color:string;
  }
  export enum CarColorNormal {
    Black = "Black", 
    Red = "Red",
    Blue = "Blue",
  }
  export enum CarColorSports {
    DelftBlue = "Delft Blue",
    Eureolin = "Eureolin",
    PigmentGreen = "Pigment Green",
    SunGlow = "Sunglow",
    Blue ="Blue",
    Red = "Red"
  }

  export const colorMapNormal: Record<CarColorNormal, ColorInfo> = {
    [CarColorNormal.Black]: { name: "Black", hex: "Black", color:"white" },
    [CarColorNormal.Blue]: { name: "Blue", hex: "Blue", color:"White" },
    [CarColorNormal.Red]: { name: "Red", hex: "Red", color:"white" },
  };
  export const colorMapSports: Record<CarColorSports, ColorInfo> = {
    [CarColorSports.DelftBlue]: { name: "Delft Blue", hex: "#29335C", color:"white" },
    [CarColorSports.Eureolin]: { name: "Eureolin", hex: "#EEE82C", color:"black" },
    [CarColorSports.PigmentGreen]: { name: "Eureolin", hex: "#53A548", color:"White" },
    [CarColorSports.SunGlow]: { name: "SunGlow", hex: "#FFC857", color:"black" },
    [CarColorSports.Red]: { name: "Red", hex: "Red", color:"White" },
    [CarColorSports.Blue]: { name: "Blue", hex: "Blue", color:"white" },
}
  
export abstract class AbstractEngine {
    public abstract displacement: number;
    public abstract engineType: EngineTypes;
}

    // public abstract revEngine(): void;



// export class DieselEngine extends AbstractEngine {
//     public engineType: EngineTypes = EngineTypes.diesel; 
//     public constructor(public displacement: number) {
//         super();
//     }

    // public revEngine(): void {
    //     console.log('GULP');
    // }


// export class PetrolEngine extends AbstractEngine {
//     public fuelType: FuelType = FuelType.PETROL;
//     public constructor(public displacement: number) {
//         super();
//     }
//     public revEngine(): void {
//         console.log('Vroom');
//     }
// }

// export class HybridEngine extends AbstractEngine {
//     public fuelType: FuelType = FuelType.HYBRID;
//     public constructor(public displacement: number) {
//         super();
//     }

    // public revEngine(): void {
    //     console.log('Zoof');
    // }
// }

// export class ElectricEngine extends AbstractEngine {
//     public fuelType: FuelType = FuelType.HYBRID;
//     public constructor(public displacement: number) {
//         super();
//     }

    // public revEngine(): void {
    //     console.log('...');
    // }

export abstract class AbstractDoor {
    public abstract color: string;
}

export class FamilyCarDoor extends AbstractDoor {
    public constructor(public color: string){
        super();
    }

    public setColor(color: string) {
        this.color = color;
    }
}

export abstract class AbstractWindow {}


export abstract class AbstractCar {
    public abstract getEngine(): AbstractEngine|null;
    public abstract setEngine(engine: AbstractEngine): void;
    public abstract changeEngine(engine: AbstractEngine): void;
}


export class FamilyCar extends AbstractCar {
    private engine: AbstractEngine|null = null;
    private doors: FamilyCarDoor[] = [];

    public setEngine(engine: AbstractEngine): void {
        this.engine = engine;
    }
    public getEngine(): AbstractEngine|null {
        return this.engine;
    }
    public changeEngine(engine: AbstractEngine): void {
        this.engine = engine;
    }
}
// export const instance = new FamilyCar(new DieselEngine(2000), [new FamilyCarDoor("red"), new FamilyCarDoor("red"), new FamilyCarDoor("red") ,new FamilyCarDoor("red"), new FamilyCarDoor("red")]);
// instance.getEngine().revEngine();

// instance.changeEngine(new HybridEngine(2000));
// instance.getEngine().revEngine();

// [Selecteer auto type] -> [Motor type] -> [Deur type]
