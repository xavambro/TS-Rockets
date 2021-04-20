"use strict";
var Game = /** @class */ (function () {
    function Game(rockets, chance) {
        this.rockets = rockets;
        this.chanceToExplode = chance;
    }
    Object.defineProperty(Game.prototype, "getRockets", {
        get: function () {
            return this.rockets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "getChance", {
        get: function () {
            return this.chanceToExplode;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
