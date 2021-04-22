class Rocket {

    private id:string
    private propellers:Propeller[] = []
    private defaultAnimationDuration = 8;
    private animationDuration:number = 8;

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

    get getSpeed(){
        return this.animationDuration;
    }

    get getDefaultSpeed(){
        return this.defaultAnimationDuration
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
            /* if(!this.maxPotencyReached()){
                this.animationDuration--;
            } */
            this.animationDuration = this.defaultAnimationDuration - this.getCurrentPotency()*0.02;
        }else{
            console.log("Tienes que crear un cohete primero.")
        }
        
    }

    brake(){
        if(this.propellers != null){
            for (let propeller of this.propellers){
                propeller.brake();
            }
            /* if(this.getCurrentPotency() > 0){
                this.animationDuration++;
            } */
            this.animationDuration = this.defaultAnimationDuration - this.getCurrentPotency()*0.02;
        }else{
            console.log("Tienes que crear un cohete primero.")
        }
    }

    maxPotencyReached():boolean{
        if(this.getMaxPotency() > this.getCurrentPotency()){
            return false;
        }else{
            return true;
        }

    }
}