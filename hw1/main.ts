
class Car {
  private isWorking = false;

  constructor(
    private year: number, 
    private power: number,
    private color: Color,
    private engineVolume: number
  ) {} 

  move(speed: number, direction: 'left' | 'right' | 'top' | 'botom', brand: string, speedLimit: number): void {
    if (speed > speedLimit) {
      console.log(`Car ${brand} of ${this.color} color can't move with ${speed} speed since to limit in ${speedLimit}`);
    } else {
      if (!this.isWorking) {
        this.startEngine();
        console.log(`Car ${brand} of ${this.color} color starts engine`);
      }
      console.log(`Car ${brand} of ${this.color} color moves in ${direction} direction`);
    }
  }

  startEngine(): void {
    this.isWorking = true;
  }

  stopEngine(): void {
    this.isWorking = false;
  }
}

class BMW extends Car {
  private brand = 'BMW';

  private speedLimit: number;

  constructor(
    year: number, 
    power: number,
    color: Color,
    speedLimit: number,
    engineVolume: number
  ) {
    super(year, power, color, engineVolume);
    this.speedLimit = speedLimit;
  }

  move(speed: number, direction: 'left' | 'right' | 'top' | 'botom'): void {
    super.move(speed, direction, this.brand, this.speedLimit);
  }
}

class Audi extends Car {
  private brand = 'Audi';

  private speedLimit: number;
  
  constructor(
    year: number, 
    power: number,
    color: Color,
    speedLimit: number,
    engineVolume: number
  ) {
    super(year, power, color, engineVolume);
    this.speedLimit = speedLimit;
  }

  move(speed: number, direction: 'left' | 'right' | 'top' | 'botom'): void {
    super.move(speed, direction, this.brand, this.speedLimit);
  }
}

class Color {
  constructor(private color: string) {}

  toString(): string {
    return this.color;
  }
}

class ColorHEX extends Color {
  constructor(hex: string) {
    super(hex);
  }
}

class ColorRGB extends Color {
  constructor(rgb: string) {
    super(rgb);
  }
}

const hexRed = new ColorHEX('#FF0000'); 
const rgbRed = new ColorRGB('rgb (255,0,0)'); 

const bmw = new BMW(1987, 200, hexRed, 240, 600);
const audi = new Audi(1987, 180, rgbRed, 190, 300);

bmw.move(200, 'top');
audi.move(200, 'top');
