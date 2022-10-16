import { CANVAS } from "../globals";

/** A parent class meant to represent anything renderable to the canvas */
export default class Renderable {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = CANVAS.getContext("2d");
    this.isRenderable = true;
  }

  update() {
    console.error(`update function not implemented for object at x:${this.x}, y:${this.y}.`);
  }
}