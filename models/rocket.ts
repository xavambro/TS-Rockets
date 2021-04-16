class Rocket {

    private id:string
    private propellers:Propeller[] = []
    private currentPotency: number

    constructor(id:string,propellers:Propeller[]){
        this.id = id;
        this.propellers = propellers;
    }

    getMaxPotency():number{
        let maxValue:number;
        for (let propeller of this.propellers){
            maxValue += propeller.potency
        }
        return maxValue;
    }

    accelerate(){
        for (let propeller of this.propellers){
            propeller.accelerate();
        }
    }

    brake(){
        for (let propeller of this.propellers){
            propeller.accelerate();
        }
    }
}