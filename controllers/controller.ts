let firstRocketPropellers:Propeller[] = [new Propeller(10),new Propeller(30), new Propeller(80)]
let secondRocketPropellers:Propeller[] = [new Propeller(30),new Propeller(40), new Propeller(50),new Propeller(50),new Propeller(30),new Propeller(10)]
let rockets:Rocket[] = [];

function createRocket(id:string,propellers:Propeller[]){
    if(!rocketExist(id)){
        let rocket = new Rocket(id,propellers);
        rockets.push(rocket);
    }   
}

function rocketExist(rocketId:string):boolean{
    for (let rcket of rockets){
        if (rcket.getId == rocketId){
            console.log("No se puede crear el cohete porque ya existe.")
            return true
        }
    }
    
    return false;
}

function showRocket(rocket:Rocket):void{

    if (rocket == null){
        console.log("Primero has de crear los cohetes que quieras mostrar")
        return
    }
    if(document.getElementById(`${rocket.getId}`) != null){
        document.getElementById(`${rocket.getId}`)?.remove()
        document.getElementById(`propellers-${rocket.getId}`)?.remove()
    }
    
    let infoId = document.createElement("p");
    infoId.setAttribute('id',`${rocket.getId}`)
    infoId.textContent = `Rocket id: ${rocket.getId}. Rocket Max Potency: ${rocket.getMaxPotency()}. Rocket Current Potency: ${rocket.getCurrentPotency()}`;   
    let infoPropeller = document.createElement("p");
    infoPropeller.setAttribute('id',`propellers-${rocket.getId}`)
    infoPropeller.textContent = `Rocket propellers:`;

    for (let prop of rocket.getPropellers){
        infoPropeller.textContent += `${prop.potency}.`
    }
    document.getElementById("rocketsInfo")?.append(infoId,infoPropeller)

}