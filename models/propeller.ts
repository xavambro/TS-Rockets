class Propeller {
    private maxPotency:number
    private currentPotency:number = 0;

    constructor(potency:number){
        this.maxPotency = potency;
    }

    get potency(){
        return this.maxPotency
    }

    get current(){
        return this.currentPotency
    }

    set setCurrent(current:number){
        this.currentPotency = current;

    }
    accelerate(){
        if (this.currentPotency < this.maxPotency){
            this.currentPotency += 10;
        }
    }

    brake(){
        if (this.currentPotency > 0){
            this.currentPotency -= 10;
        }

    }
}