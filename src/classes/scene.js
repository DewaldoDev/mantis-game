import Renderable from "./renderable";

/** Scene class represents a game scene */
export default class Scene extends Renderable {
  constructor(x, y, width, height, locationTag, image) {
    super(x, y, width, height);
    this.locationTag = locationTag;
    this.image = image
  }

  update() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}