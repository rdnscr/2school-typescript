interface IVehicle {
    getVehicleType: string;
    getSpeed(): number;
    isTaxPayed(): boolean;
}

interface ILights {
    isLightsOn(): boolean;
    isLightsOff(): boolean;
}

interface IRadio {
    playCd: void;
    startRadio(): void;
    stopRadio(): void;
}

interface IEngine {
    startEngine(): void;
    acelerate(): number;
    stopEngine(): void;
}

interface IFacade extends IEngine, ILights, IRadio, IVehicle {
}
