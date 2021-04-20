class Game {
    private rockets:Rocket[]
    private chanceToExplode:number
    
    constructor(rockets:Rocket[],chance:number){
        this.rockets = rockets;
        this.chanceToExplode = chance;
    }

    get getRockets(){
        return this.rockets;
    }
    get getChance(){
        return this.chanceToExplode;
    }
}