var vector = {
  _x: 0,
  _y: 0,
  _z: 0,

  create: function (x, y, z) {
    var obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    obj.setZ(z);
    return obj;
  },

  setX: function (value) {
    this._x = value;
  },

  getX: function () {
    return this._x;
  },

  setY: function (value) {
    this._y = value;
  },

  getY: function () {
    return this._y;
  },

  setZ: function (value) {
    this._z = value;
  },

  getZ: function () {
    return this._z;
  },

  setAngleXY: function (angle) {
    var length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },

  setAngle: function (angleXY, angleXZ, angelZY) {
    var length = this.getLength();
    this._x = Math.cos(angleXZ) * length; // alpha
    this._y = Math.cos(angleXY) * length; // Beta
    this._z = Math.cos(angelZY) * length; //gamma
  },

  inits: function (length, angleXY, angleXZ) {
    this._x = Math.cos(angleXY) * Number(Math.cos(angleXZ).toFixed(7)) * length;
    this._y = Math.sin(angleXY) * length;
    this._z = Math.cos(angleXY) * Math.sin(angleXZ) * length;
  },

  getAngleXY: function () {
    return Math.atan(this._y / this._x) || 0;
  },

  getAngleXZ: function () {
    return Math.atan2(this._x, this._z) || 0;
  },

  getAngleZY: function () {
    return Math.atan(this._y / this._z) || 0;
  },

  setLength: function (length) {
    var angleXY = Number(this.getAngleXY().toFixed(1));
    var angleXZ = Number(this.getAngleXZ().toFixed(1));
    let l1 = Number(Math.cos(angleXY).toFixed(1));
    let l2 = Number(Math.cos(angleXZ).toFixed(1));

    this._x = l1 * l2 * length;
    this._y = Number(Math.sin(angleXY).toFixed(2)) * length;
    this._z =
      Number(Math.cos(angleXY).toFixed(2)) *
      Number(Math.sin(angleXZ).toFixed(2)) *
      length;
  },
}
export default vector;
