var queen = { direction: "s", position: { x: 0, y: 4 } };
var input = prompt("Enter your direction and steps like N5 S2....");
if (input.length == 3) {
  var steps = Number(input.slice(2));
  var direction = input.slice(0, 2).toUpperCase();
} else if (input.length == 2) {
  var steps = Number(input.slice(1));
  var direction = input.slice(0, 1).toUpperCase();
} else {
  alert("ALERT .......\nInput range should be 2 to 3 only...");
  var input = prompt("Enter your direction and steps like N5 S2....");
}
changeDirection(direction, steps);
function changeDirection(direction, steps) {
  switch (direction) {
    case "S":
      queen.position.x += steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    case "N":
      temp = queen.position.x;
      if (checkBoundary(temp) == true) {
        queen.position.x -= steps;
        console.log(
          "Now your position is " + queen.position.x,
          queen.position.y
        );
      } else {
        console.log("your position is outof boundary so invalid position..");
      }
      break;
    case "E":
      queen.position.y += steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    case "W":
      queen.position.y += steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    case "NE":
      queen.position.x += steps;
      queen.position.y += steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    case "SW":
      queen.position.x += steps;
      queen.position.y -= steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    case "NW":
      queen.position.x -= steps;
      queen.position.y -= steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    case "SE":
      queen.position.x += steps;
      queen.position.y += steps;
      console.log("Now your position is " + queen.position.x, queen.position.y);
      break;
    default:
      console.log("your direction is invalid ....please enter valid diretion");
  }
}
function checkBoundary(temp) {
  if (temp == queen.position.x) {
    return false;
  } else {
    return true;
  }
}
