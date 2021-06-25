export class Car {
    manufacturer: string;
    model: string;
    year: string;
    engineCylinders: number;
    fuelEfficiencyRatingIndex: number;
    greenhouseGasRatingIndex: number;
    manufacturersReleaseDate: string;

    constructor(
        manufacturer: string,
        model: string,
        year: string,
        engineCylinders: number,
        fuelEfficiencyRatingIndex: number,
        greenhouseGasRatingIndex: number,
        manufacturersReleaseDate: string,
        ){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.engineCylinders = engineCylinders;
        this.fuelEfficiencyRatingIndex = fuelEfficiencyRatingIndex;
        this.greenhouseGasRatingIndex = greenhouseGasRatingIndex;
        this.manufacturersReleaseDate = manufacturersReleaseDate;
    }
}
