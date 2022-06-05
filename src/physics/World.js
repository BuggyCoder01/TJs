import World from "./physics/World"


  class World {
    constructor(gravity, height) {
      this.gravity = gravity;
      this.height = height;
      this.objects = [];
    }
  calc_air_density(g, H, T) {
    let Rspecific = 287.058,
      R = 8.3148,
      Md = 0.028964;
    let P0 = 1.01325; // 1bar =100000pa
    let Tkelvin = T + 273.15;
    let P = P0 * Math.exp((-Md * g * H) / (R * Tkelvin)) * Math.pow(10, 5);
    let DENS = P / (Rspecific * Tkelvin);
    return DENS;
  }

  update(deltaTime) {
    for (const object of this.objects) {
      //Constants Variables
      let DENS = this.calc_air_density(
        this.gravity,
        this.height,
      );
      object.update(deltaTime, this.gravity, DENS);
    }
  }

}