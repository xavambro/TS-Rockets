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
    var _a, _b, _c;
    if (rocket == null) {
        console.log("Primero has de crear los cohetes que quieras mostrar");
        return;
    }
    if (document.getElementById("" + rocket.getId) != null) {
        (_a = document.getElementById("" + rocket.getId)) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.getElementById("propellers-" + rocket.getId)) === null || _b === void 0 ? void 0 : _b.remove();
    }
    var infoId = document.createElement("p");
    infoId.setAttribute('id', "" + rocket.getId);
    infoId.textContent = "Rocket id: " + rocket.getId + ". Rocket Max Potency: " + rocket.getMaxPotency() + ". Rocket Current Potency: " + rocket.getCurrentPotency();
    var infoPropeller = document.createElement("p");
    infoPropeller.setAttribute('id', "propellers-" + rocket.getId);
    infoPropeller.textContent = "Rocket propellers:";
    for (var _i = 0, _d = rocket.getPropellers; _i < _d.length; _i++) {
        var prop = _d[_i];
        infoPropeller.textContent += prop.potency + ".";
    }
    (_c = document.getElementById("rocketsInfo")) === null || _c === void 0 ? void 0 : _c.append(infoId, infoPropeller);
}
