"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, propellers) {
        this.propellers = [];
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
        for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
            var propeller = _a[_i];
            propeller.accelerate();
        }
    };
    Rocket.prototype.brake = function () {
        for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
            var propeller = _a[_i];
            propeller.brake();
        }
    };
    return Rocket;
}());
