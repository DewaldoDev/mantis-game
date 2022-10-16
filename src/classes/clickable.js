import Renderable from "./renderable";

/** Clickable class is a parent class of a clickable element */
export default class Clickable extends Renderable {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.isClickable = true;
  }

  isCursorInBounds(cursorX, cursorY) {
    return (
      cursorX > this.x &&
      cursorX < this.x + this.width &&
      cursorY > this.y &&
      cursorY < this.y + this.height
    );
  }

  onClick() {
    console.error(
      `onClick function not implemented for object at x:${this.x}, y:${this.y}.`
    );
  }
}
