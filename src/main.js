import Scene from "./classes/scene";
import Prop from "./classes/prop";
import Section from "./classes/section";
import TextBox from "./classes/textBox";
import Button from "./classes/button";

let whereUare = 0;
const gameObjects = [];

window.addEventListener("load", startGame);

function startGame() {
  myGameArea.start();

  //screen//
  const mainScreen = new Section(100, 0, 400, 400, "teal");

  //menu sections//
  const redMenu = new Section(0, 0, 100, 500, "gray");
  const blueMenu = new Section(100, 400, 400, 100, "gray");

  const testNote = new TextBox(
    550,
    0,
    380,
    380,
    "gray",
    "This is where all the text will go. If you can't read, then this game will not be for you."
  );

  //scenery//
  const house = new Scene(
    100,
    0,
    400,
    400,
    0,
    document.getElementById("screen1")
  );
  const livingRoom = new Scene(
    600,
    0,
    400,
    400,
    1,
    document.getElementById("screen2")
  );
  const downStairs = new Scene(
    600,
    0,
    400,
    400,
    2,
    document.getElementById("screen3")
  );
  const basement = new Scene(
    600,
    0,
    400,
    400,
    3,
    document.getElementById("screen4")
  );

  //props//
  const knife = new Prop(50, 50, 250, 250, document.getElementById("knife"));
  const tree = new Prop(600, 100, 100, 100, document.getElementById("aTree"));

  //buttons//
  const aButton = new Button(420, 425, 50, 50, "green", () => {
    mainScreen.x = 500;
    //tree.dx = 400;
    console.log("aButton is working");
  });
  const forwardButton = new Button(264, 195, 23, 60, "blue", () => {
    // livingRoom.dx = 100;
    // livingRoom.dy = 0;
    // forwardButton.x = 120;
    whereUare++;
    forwardButton.x = 800;

    //forwardButton.clicked = false;
    //mainScreen.x = 250;
    //tree.dx = 125;
    //console.log(tree.dx);
    //tree.dy = 150;
    console.log("forwardButton is working");
  });
  const backwardButton = new Button(264, 195, 23, 60, "red", () => {
    console.log("backward button is working");
  });
  const textButton = new Button(200, 425, 50, 50, "pink", () => {
    testNote.x = 110;
    testNote.y = 10;

    console.log("textButton is working");
  });

  gameObjects.push(
      mainScreen,
      redMenu,
      blueMenu,
      testNote,
      house,
      livingRoom,
      basement,
      downStairs,
      knife,
      tree,
      aButton,
      forwardButton,
      backwardButton,
      textButton,
  );
}

var myGameArea = {
  canvas: document.getElementById("canvas"),
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.cursorX = 0;
    this.cursorY = 0;
    this.isClicking = false;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    
    // Capture current mouse position
    this.canvas.addEventListener("mousemove", e => {
      const rect = this.canvas.getBoundingClientRect();
      this.cursorX = e.clientX - rect.left;
      this.cursorY = e.clientY - rect.top;
    });

    // Capture whether user is clicking
    this.canvas.addEventListener("mousedown", e => {
      this.isClicking = true;
    })

  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateGameArea() {
  myGameArea.clear();

  // Handle any click events
  if (myGameArea.isClicking) {
    gameObjects
      .filter(
        (o) =>
          o.isClickable &&
          o.isCursorInBounds(myGameArea.cursorX, myGameArea.cursorY)
      )
      .forEach((o) => o.onClick());
    
      myGameArea.isClicking = false;
  }

  // Render all the renderable game objects
  gameObjects.filter((o) => o.isRenderable).forEach((o) => o.update());
}
