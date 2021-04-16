class Propeller {
    private maxPotency:number
    private currentPotency:number

    constructor(potency:number){
        this.maxPotency = potency;
        this.currentPotency = 0;
    }

    get potency(){
        return this.maxPotency
    }

    get current(){
        return this.currentPotency
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