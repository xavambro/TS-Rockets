"use strict";
var firstRocketPropellers = [new Propeller(10), new Propeller(30), new Propeller(80)];
var secondRocketPropellers = [new Propeller(30), new Propeller(40), new Propeller(50), new Propeller(50), new Propeller(30), new Propeller(10)];
var rockets = [];
function createRocket(id, propellers) {
    if (!rocketExist(id)) {
        var rocket = new Rocket(id, propellers);
        rockets.push(rocket);
    }
}
function rocketExist(rocketId) {
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var rcket = rockets_1[_i];
        if (rcket.getId == rocketId) {
            console.log("No se puede crear el cohete porque ya existe.");
            return true;
        }
    }
    return false;
}
function showRocket(rocket) {
    var _a, _b;
    if (rocket == null) {
        console.log("Primero has de crear los cohetes que quieras mostrar");
        return;
    }
    if (document.getElementById("" + rocket.getId) != null) {
        (_a = document.getElementById("div-" + rocket.getId)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    var divRocket = document.createElement("div");
    divRocket.className = "rocketCard col-md-5 border border-dark rounded m-2";
    divRocket.setAttribute('id', "div-" + rocket.getId);
    var infoId = document.createElement("p");
    infoId.className = "m-2";
    infoId.style.whiteSpace = "pre";
    infoId.setAttribute('id', "" + rocket.getId);
    infoId.textContent = "Rocket id: " + rocket.getId + ".\r\nRocket Max Potency: " + rocket.getMaxPotency() + ".\r\nRocket Current Potency: " + rocket.getCurrentPotency();
    infoId.textContent += "\r\nRocket propellers:";
    for (var _i = 0, _c = rocket.getPropellers; _i < _c.length; _i++) {
        var prop = _c[_i];
        infoId.textContent += prop.potency + ".";
    }
    divRocket.append(infoId);
    (_b = document.getElementById("rocketsInfo")) === null || _b === void 0 ? void 0 : _b.append(divRocket);
}
