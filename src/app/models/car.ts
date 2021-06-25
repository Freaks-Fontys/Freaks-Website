export class Car {
    manufacturer: string;
    model: string;
    year: string;
    engine_cylinders: number;
    fuel_efficiency_rating_index: number;
    greenhouse_gas_rating_index: number;
    manufacturers_release_date: string;

    constructor(
        manufacturer: string,
        model: string,
        year: string,
        engine_cylinders: number,
        fuel_efficiency_rating_index: number,
        greenhouse_gas_rating_index: number,
        manufacturers_release_date: string,
        ){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.engine_cylinders = engine_cylinders;
        this.fuel_efficiency_rating_index = fuel_efficiency_rating_index;
        this.greenhouse_gas_rating_index = greenhouse_gas_rating_index;
        this.manufacturers_release_date = manufacturers_release_date;
    }
}
