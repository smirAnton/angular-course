var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(year, power, color, engineVolume) {
        this.year = year;
        this.power = power;
        this.color = color;
        this.engineVolume = engineVolume;
        this.isWorking = false;
    }
    Car.prototype.move = function (speed, direction, brand, speedLimit) {
        if (speed > speedLimit) {
            console.log("Car " + brand + " of " + this.color + " color can't move with " + speed + " speed since to limit in " + speedLimit);
        }
        else {
            if (!this.isWorking) {
                this.startEngine();
                console.log("Car " + brand + " of " + this.color + " color starts engine");
            }
            console.log("Car " + brand + " of " + this.color + " color moves in " + direction + " direction");
        }
    };
    Car.prototype.startEngine = function () {
        this.isWorking = true;
    };
    Car.prototype.stopEngine = function () {
        this.isWorking = false;
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(year, power, color, speedLimit, engineVolume) {
        var _this = _super.call(this, year, power, color, engineVolume) || this;
        _this.brand = 'BMW';
        _this.speedLimit = speedLimit;
        return _this;
    }
    BMW.prototype.move = function (speed, direction) {
        _super.prototype.move.call(this, speed, direction, this.brand, this.speedLimit);
    };
    return BMW;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(year, power, color, speedLimit, engineVolume) {
        var _this = _super.call(this, year, power, color, engineVolume) || this;
        _this.brand = 'Audi';
        _this.speedLimit = speedLimit;
        return _this;
    }
    Audi.prototype.move = function (speed, direction) {
        _super.prototype.move.call(this, speed, direction, this.brand, this.speedLimit);
    };
    return Audi;
}(Car));
var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
    }
    Color.prototype.toString = function () {
        return this.color;
    };
    return Color;
}());
var ColorHEX = /** @class */ (function (_super) {
    __extends(ColorHEX, _super);
    function ColorHEX(hex) {
        return _super.call(this, hex) || this;
    }
    return ColorHEX;
}(Color));
var ColorRGB = /** @class */ (function (_super) {
    __extends(ColorRGB, _super);
    function ColorRGB(rgb) {
        return _super.call(this, rgb) || this;
    }
    return ColorRGB;
}(Color));
var hexRed = new ColorHEX('#FF0000');
var rgbRed = new ColorRGB('rgb (255,0,0)');
var bmw = new BMW(1987, 200, hexRed, 240, 600);
var audi = new Audi(1987, 180, rgbRed, 190, 300);
bmw.move(200, 'top');
audi.move(200, 'top');
