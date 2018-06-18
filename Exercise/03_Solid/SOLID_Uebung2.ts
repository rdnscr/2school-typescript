interface IVehicle {
    playCd: void;
    getVehicleType: string;

    getSpeed(): number;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
    isLightsOff(): boolean;
    startEngine(): void;
    acelerate(): number;
    stopEngine(): void;
    startRadio(): void;
    stopRadio(): void;
}
