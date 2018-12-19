// This example shows how to use node-pixel using Johnny Five as the
// hook for the board.
var five = require("johnny-five");
var pixel = require("../lib/pixel.js");
var blinker1;
var blinker2;
var blinker3;
var blinker4;
var blinker5;
var blinker6;
var start1;
var start2;
var start3;
var start4;
var start5;
var start6;
var strip1;
var strip2;
var strip3;
var strip4;
var strip5;
var strip6;

var board1 = new five.Board({
  port: "COM3"
});
var board2 = new five.Board({
  port: "COM4"
});
var board3 = new five.Board({
  port: "COM5"
});
var board4 = new five.Board({
  port: "COM6"
});
var board5 = new five.Board({
  port: "COM7"
});
var board6 = new five.Board({
  port: "COM8"
});

var fps = 25; // how many frames per second do you want to try?

board1.on("ready", function() {

  console.log("Board ready, lets add light");

  var strip1 = new pixel.Strip({
    data: 2,
    length: 216,
    color_order: pixel.COLOR_ORDER.GRB,
    board: this,
    controller: "FIRMATA",
  });

  strip1.on("ready", function() {
    console.log("Strip 1 ready, let's go");
    strip1.color("black");
    //var current_colors = [0,1,2,3,4];
    var current_pos = [2, 3, 4, 5, 10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29];

    start1 = function() {
      blinker1 = setInterval(function() {
        strip1.color("black");
        current_pos.forEach((pos) => {
          strip1.pixel(pos).color("white");
        });

        console.log(current_pos);
        if (current_pos[15] >= 210) {
          console.log("Done!")
          strip1.color("black");
          strip1.show();
          clearInterval(blinker1);
          start2();
        }

        strip1.show();
        current_pos = current_pos.map((pos) => {
          return pos += 8;
        });

      }, 1000 / fps);
    }
    start1();
  });
});

board2.on("ready", function() {

  console.log("Board ready, lets add light");

  strip2 = new pixel.Strip({
    data: 2,
    length: 216,
    color_order: pixel.COLOR_ORDER.GRB,
    board: this,
    controller: "FIRMATA",
  });

  strip2.on("ready", function() {
    strip2.color("black");
    console.log("Strip 2 ready, let's go");

    var current_pos = [2, 3, 4, 5, 10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29];

    start2 = function() {
      blinker2 = setInterval(function() {
        strip2.color("black");
        current_pos.forEach((pos) => {
          strip2.pixel(pos).color("white");
        });

        console.log(current_pos);
        if (current_pos[15] >= 210) {
          console.log("Done!")
          strip2.color("black");
          strip2.show();
          clearInterval(blinker2);
          start3();
        }
        strip2.show();
        current_pos = current_pos.map((pos) => {
          return pos += 8;
        });
      }, 1000 / fps);
    }
  });
});

board3.on("ready", function() {

  console.log("Board 3 ready, lets add light");

  strip3 = new pixel.Strip({
    data: 2,
    length: 216,
    color_order: pixel.COLOR_ORDER.GRB,
    board: this,
    controller: "FIRMATA",
  });

  strip3.on("ready", function() {
    strip3.color("black");
    console.log("Strip 3 ready, let's go");

    var current_pos = [2, 3, 4, 5, 10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29];

    start3 = function() {
      blinker3 = setInterval(function() {
        strip3.color("black");
        current_pos.forEach((pos) => {
          strip3.pixel(pos).color("white");
        });


        console.log(current_pos);
        if (current_pos[15] >= 210) {
          console.log("Done!")
          strip3.color("black");
          strip3.show();
          clearInterval(blinker3);
          start4();
        }
        strip3.show();
        current_pos = current_pos.map((pos) => {
          return pos += 8;
        });
      }, 1000 / fps);
    }
  });
});

board4.on("ready", function() {

  console.log("Board 4 ready, lets add light");

  strip4 = new pixel.Strip({
    data: 2,
    length: 216,
    color_order: pixel.COLOR_ORDER.GRB,
    board: this,
    controller: "FIRMATA",
  });

  strip4.on("ready", function() {
    strip4.color("black");
    console.log("Strip 4 ready, let's go");

    var current_pos = [2, 3, 4, 5, 10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29];

    start4 = function() {
      blinker4 = setInterval(function() {
        strip4.color("black");
        current_pos.forEach((pos) => {
          strip4.pixel(pos).color("white");
        });


        console.log(current_pos);
        if (current_pos[15] >= 210) {
          console.log("Done!")
          strip4.color("black");
          strip4.show();
          clearInterval(blinker4);
          start5();
        }
        strip4.show();
        current_pos = current_pos.map((pos) => {
          return pos += 8;
        });
      }, 1000 / fps);
    }
  });
});

board5.on("ready", function() {

  console.log("Board 5 ready, lets add light");

  strip5 = new pixel.Strip({
    data: 2,
    length: 216,
    color_order: pixel.COLOR_ORDER.GRB,
    board: this,
    controller: "FIRMATA",
  });

  strip5.on("ready", function() {
    strip5.color("black");
    console.log("Strip 5 ready, let's go");

    var current_pos = [2, 3, 4, 5, 10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29];

    start5 = function() {
      blinker5 = setInterval(function() {
        strip5.color("black");
        current_pos.forEach((pos) => {
          strip5.pixel(pos).color("white");
        });

        console.log(current_pos);
        if (current_pos[15] >= 210) {
          console.log("Done!")
          strip5.color("black");
          strip5.show();
          clearInterval(blinker5);
          start6();
        }
        strip5.show();

        current_pos = current_pos.map((pos) => {
          return pos += 8;
        });
      }, 1000 / fps);
    }
  });
});

board6.on("ready", function() {

  console.log("Board 6 ready, lets add light");

  strip6 = new pixel.Strip({
    data: 2,
    length: 216,
    color_order: pixel.COLOR_ORDER.GRB,
    board: this,
    controller: "FIRMATA",
  });

  strip6.on("ready", function() {
    strip6.color("black");
    console.log("Strip 6 ready, let's go");

    var current_pos = [2, 3, 4, 5, 10, 11, 12, 13, 18, 19, 20, 21, 26, 27, 28, 29];

    start6 = function() {
      blinker6 = setInterval(function() {
        strip6.color("black");
        current_pos.forEach((pos) => {
          strip6.pixel(pos).color("white");
        });


        console.log(current_pos);
        if (current_pos[15] >= 210) {
          console.log("Done!")
          strip6.color("black");
          strip6.show();
          clearInterval(blinker6);
        }
        strip6.show();

        current_pos = current_pos.map((pos) => {
          return pos += 8;
        });
      }, 1000 / fps);
    }
  });
});
