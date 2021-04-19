class Rocket {

    private id:string
    private propellers:Propeller[] = []
    

    constructor(id:string,propellers:Propeller[]){
        this.id = id;
        this.propellers = propellers;
    }

    getMaxPotency():number{
        let maxValue:number = 0;
        for (let propeller of this.propellers){
            maxValue += propeller.potency
        }
        return maxValue;
    }

    getCurrentPotency():number{
        let value:number = 0;
        for (let propeller of this.propellers){
            value += propeller.potency
        }
        return value;

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