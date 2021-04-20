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
        document.getElementById(`div-${rocket.getId}`)?.remove()
    }
    let divRocket = document.createElement("div");
    divRocket.className = "rocketCard col-md-5 border border-dark rounded m-2";
    divRocket.setAttribute('id',`div-${rocket.getId}`)
    let infoId = document.createElement("p");
    infoId.className = "m-2"
    infoId.style.whiteSpace = "pre";
    infoId.setAttribute('id',`${rocket.getId}`)
    infoId.textContent = `Rocket id: ${rocket.getId}.\r\nRocket Max Potency: ${rocket.getMaxPotency()}.\r\nRocket Current Potency: ${rocket.getCurrentPotency()}`;   
    infoId.textContent += `\r\nRocket propellers:`;

    for (let prop of rocket.getPropellers){
        infoId.textContent += `${prop.potency}.`
    }
    divRocket.append(infoId);
    document.getElementById("rocketsInfo")?.append(divRocket)

}