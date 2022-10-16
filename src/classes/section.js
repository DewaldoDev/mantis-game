import Renderable from "./renderable";

/** Section class represents an area of the game screen */
export default class Section extends Renderable {
  constructor(x, y, width, height, colour) {
    super(x, y, width, height);
    this.colour = colour;
  }

  update() {
    this.ctx.fillStyle = this.colour;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}