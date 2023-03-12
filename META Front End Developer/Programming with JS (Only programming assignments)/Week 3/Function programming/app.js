// Task 1: Build a function-based console log message generator

function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${ color };`
  style += `background: ${background};`
  style += `font-size: ${fontSize};`
  console.log(message, style); // log the message and style
  // return style, message;
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  var style;
  if (reason == "birthday") {
    style = consoleStyler("#ef7c8e", "#fae8e0", "30px", "Happy birthday");
    console.log(`%cHappy birthday`, style);
  } else if (reason == "champions") {
    style = consoleStyler("#ef7c8e", "#fae8e0", "30px", "Congrats on the title!");
    console.log(`%cCongrats on the title!`, style);
  } else {
    console.log(`%c${reason}`, fontStyle);
  }
}

// Task 3: Call both the consoleStyler and the celebrateStyler functions
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
  
// console.log(`%cCongrats!`, style);
celebrateStyler("birthday");

// Task 4: Call the styleAndCelebrate function
function styleAndCelebrate() {
  var style = consoleStyler("ef7c8e", "fae8e0", "30px", "You made it!");
  console.log(`%cYou made it!`, style);
  celebrateStyler("champions");
}
console.log(consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!"));

// Call the celebrateStyler function
console.log(celebrateStyler("birthday"));

// Call the styleAndCelebrate function
console.log(styleAndCelebrate());
