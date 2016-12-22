export class BasketballPlayer {
    firstName: string;
    lastName: string;
    position: string;
    height: string;
    weight: string;

    constructor(firstName: string, lastName: string, position: string, height: string, weight: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.height = height;
        this.weight = weight;
    }
}