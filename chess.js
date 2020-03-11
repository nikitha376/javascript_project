var queen = {
  direction: "s",
  position: {
    x: 4,
    y: 0
  },
  whereAbout: []
};

function changeDirection(direction, steps) {
  switch (direction) {
    case direction:
      queen.direction = direction;
      break;
    default:
      queen.direction = "s";
  }
  jumpMoveForward(steps);
  updatePosition();
}

function moveForward() {
  if (queen.direction === "S") {
    queen.position.y = queen.position.y + 1;
  } else if (queen.direction === "N") {
    queen.position.y = queen.position.y - 1;
  }

  function jumpMoveForward(steps) {
    if (queen.direction === "S") {
      queen.position.y = queen.position.y + steps;
    } else if (queen.direction === "N") {
      queen.position.y = queen.position.y - steps;
    } else if (queen.direction === "E") {
      queen.position.x = queen.position.x + steps;
    } else if (queen.direction === "W") {
      queen.position.x = queen.position.x - steps;
    } else if (queen.direction === "NE") {
      queen.position.y = queen.position.y - steps;
      queen.position.x = queen.position.x + steps;
    }
    if (queen.direction === "NW") {
      queen.position.y = queen.position.y - steps;
      queen.position.x = queen.position.x - steps;
    } else if (queen.direction === "SE") {
      queen.position.y = queen.position.y + steps;
      queen.position.x = queen.position.x + steps;
    } else queen.position.y = queen.position.y + steps;
    queen.position.x = queen.position.x - steps;
  }
  console.log("position:", `(${queen.position.x},${queen.position.y})`);
}
