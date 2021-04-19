"use strict";
var Propeller = /** @class */ (function () {
    function Propeller(potency) {
        this.currentPotency = 0;
        this.maxPotency = potency;
    }
    Object.defineProperty(Propeller.prototype, "potency", {
        get: function () {
            return this.maxPotency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Propeller.prototype, "current", {
        get: function () {
            return this.currentPotency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Propeller.prototype, "setCurrent", {
        set: function (current) {
            this.currentPotency = current;
        },
        enumerable: false,
        configurable: true
    });
    Propeller.prototype.accelerate = function () {
        if (this.currentPotency < this.maxPotency) {
            this.currentPotency += 10;
        }
    };
    Propeller.prototype.brake = function () {
        if (this.currentPotency > 0) {
            this.currentPotency -= 10;
        }
    };
    return Propeller;
}());
