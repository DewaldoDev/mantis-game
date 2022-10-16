import Renderable from "./renderable";

/** Prop class represents an interactive game prop */
export default class Prop extends Renderable {
  constructor(x, y, width, height, image) {
    super(x, y, width, height);
    this.image = image
  }

  update() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}