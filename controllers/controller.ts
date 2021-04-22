let firstRocketPropellers:Propeller[] = [new Propeller(10),new Propeller(30), new Propeller(80)]
let secondRocketPropellers:Propeller[] = [new Propeller(30),new Propeller(40), new Propeller(50),new Propeller(50),new Propeller(30),new Propeller(10)]
let rockets:Rocket[] = [];
const defaultTransitionDuration:string = '8s';


function createRocket(id:string,propellers:Propeller[],num:number){
    if(!rocketExist(id)){
        let rocket = new Rocket(id,propellers);
        rockets.push(rocket);
        showRocket(num);
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

function showRocketInfo(rocket:Rocket):void{

    if (rocket == null){
        console.log("Primero has de crear los cohetes que quieras mostrar")
        return
    }
    //Si ya hemos mostrado la info del cohete anteriormente eliminamos el div que lo contiene para volver a mostrar la info actualizada
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
    infoId.textContent = `Rocket id: ${rocket.getId}.\r\nRocket Max Potency: ${rocket.getMaxPotency()}.\r\nRocket Current Potency: ${rocket.getCurrentPotency()}.\r\nExpected Animation Duration: ${rocket.getSpeed}.`;   
    infoId.textContent += `\r\nRocket propellers:`;

    for (let prop of rocket.getPropellers){
        infoId.textContent += `${prop.potency}.`
    }
    divRocket.append(infoId);
    document.getElementById("rocketsInfo")?.append(divRocket)

}

function showSpace(){
    const space = document.getElementById("space");
    //toggle de la imagen
    if(space != null && space.className == "space d-none mb-3"){
        space.className = "space mb-3"
    }else if(space != null){
        space.className = "space d-none mb-3"
    }

}

function showRocket(num:number){
    let rckt = document.getElementById(`rocket${num}`);
    if(rckt != null && rckt.className == `rocket${num} d-none`){
        rckt.className = `rocket${num}`     
    }
}

function rocketSpeed(rocket:Rocket,num:number,action:string){
    let rocketElement = document.getElementById(`rocket${num}`);
    if(action == '+' && rocket.getCurrentPotency() < rocket.getMaxPotency()){
        rocket.accelerate();
        if(rocketElement != null){
            rocketElement.style.animationDuration = `${rocket.getSpeed}s`
        }
    }else if(action == '-' && rocket.getCurrentPotency() > 0){
        rocket.brake();
        if(rocketElement != null){
            rocketElement.style.animationDuration = `${rocket.getSpeed}s`
        }
    }
        
}
