import Clickable from "./clickable";

/** TextBox class represents a text box */
export default class TextBox extends Clickable {
  constructor(x, y, width, height, backgroundColour, text) {
    super(x, y, width, height);
    this.backgroundColour = backgroundColour;
    this.text = text;

    this.closeX = this.x + 10;
    this.closeY = this.y + 10;
    this.closeWidth = 20;
    this.closeHeight = 20;
  }

  update() {
    this.ctx.fillStyle = this.backgroundColour;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.font = "12px Arial";
    this.ctx.strokeText(this.text, this.x + 10, this.y + 50);

    // Exit window box
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.closeX, this.closeY, this.closeWidth, this.closeHeight);
  }

  /** isCursoreInBounds only checks in bounds of the "close" box */
  isCursorInBounds(cursorX, cursorY) {
    return (
      cursorX > this.closeX &&
      cursorX < this.closeX + this.closeWidth &&
      cursorY > this.closeY &&
      cursorY < this.closeY + this.closeHeight
    );
  }

  onClick() {
    this.x = 1000;
  }
}