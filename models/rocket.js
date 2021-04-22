"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, propellers) {
        this.propellers = [];
        this.defaultAnimationDuration = 8;
        this.animationDuration = 8;
        this.id = id;
        this.propellers = propellers;
    }
    Object.defineProperty(Rocket.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getPropellers", {
        get: function () {
            return this.propellers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getSpeed", {
        get: function () {
            return this.animationDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getDefaultSpeed", {
        get: function () {
            return this.defaultAnimationDuration;
        },
        enumerable: false,
        configurable: true
    });
    Rocket.prototype.getMaxPotency = function () {
        var maxValue = 0;
        for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
            var propeller = _a[_i];
            maxValue += propeller.potency;
        }
        return maxValue;
    };
    Rocket.prototype.getCurrentPotency = function () {
        var value = 0;
        for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
            var propeller = _a[_i];
            value += propeller.current;
        }
        return value;
    };
    Rocket.prototype.accelerate = function () {
        if (this.propellers != null) {
            for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
                var propeller = _a[_i];
                propeller.accelerate();
            }
            /* if(!this.maxPotencyReached()){
                this.animationDuration--;
            } */
            this.animationDuration = this.defaultAnimationDuration - this.getCurrentPotency() * 0.02;
        }
        else {
            console.log("Tienes que crear un cohete primero.");
        }
    };
    Rocket.prototype.brake = function () {
        if (this.propellers != null) {
            for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
                var propeller = _a[_i];
                propeller.brake();
            }
            /* if(this.getCurrentPotency() > 0){
                this.animationDuration++;
            } */
            this.animationDuration = this.defaultAnimationDuration - this.getCurrentPotency() * 0.02;
        }
        else {
            console.log("Tienes que crear un cohete primero.");
        }
    };
    Rocket.prototype.maxPotencyReached = function () {
        if (this.getMaxPotency() > this.getCurrentPotency()) {
            return false;
        }
        else {
            return true;
        }
    };
    return Rocket;
}());
