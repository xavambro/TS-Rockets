class Rocket {

    private id:string
    private propellers:Propeller[] = []
    

    constructor(id:string,propellers:Propeller[]){
        this.id = id;
        this.propellers = propellers;
    }

    get getId():string{
        return this.id
    }

    get getPropellers():Propeller[]{
        return this.propellers
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
            value += propeller.current
        }
        return value;

    }
    accelerate(){
        if(this.propellers != null){
            for (let propeller of this.propellers){
                propeller.accelerate();
            }
        }else{
            console.log("Tienes que crear un cohete primero.")
        }
        
    }

    brake(){
        if(this.propellers != null){
            for (let propeller of this.propellers){
                propeller.brake();
            }
        }else{
            console.log("Tienes que crear un cohete primero.")
        }
    }
}