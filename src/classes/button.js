import Clickable from "./clickable";

/** Button class represents a clickable button */
export default class Button extends Clickable {
  constructor(x, y, width, height, backgroundColour, onClick) {
    super(x, y, width, height);
    this.backgroundColour = backgroundColour;
    this.onClick = onClick;
  }

  update() {
    this.ctx.fillStyle = this.backgroundColour;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}