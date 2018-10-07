export class CarData {
    brand: string;
    id: string;
    price: string;
    image: string;
    model: string;
    isFavorite: boolean;

    constructor(data: any) {
        this.brand = data.brand;
        this.id = data.id;
        this.price = data.price;
        this.image = data.image;
        this.model = data.model;
        this.isFavorite = false;
    }
}