import vector from "./vector";
import * as THREE from "three";
import { Vector3 } from "three";

class Rocket{
    constructor(
        position,  
        speed,
        angleXY,
        andgleXZ,
        reference_area,
        mass,
        drag_coeff,
        angular_velocity,

    ){this.position = position;
    this.speed = vector.create(0, 0, 0);
    this.angleXY = angleXY;
    this.andgleXZ = andgleXZ;
    this.reference_area = reference_area;
    this.mass = mass;
    this.drag_coeff = drag_coeff;
    this.angular_velocity = angular_velocity;
    }

    update(time, gravity, DENS) {
        //Forces
        let gravityForce = this.gravity_force(gravity);
        let dragForce = this.drag_force(DENS);
        let liftForce = this.lift_force(DENS);
        let totalForce = vector.create(
          dragForce.getX() + liftForce.getX(),
          gravityForce.getY() +
          dragForce.getY() +liftForce.getY() ,
          dragForce.getZ() + liftForce.getZ()
        );
    }
}

