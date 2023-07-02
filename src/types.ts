type MyId = number | string;
//this type above can be string or number

type Point = {
    x: number;
    y: number;
    z?: number; //OPTIONAL VALUE
}

const PrintCoordinates = (pot: Point) => {
  console.log(`x coordinate is ${pot.x}`);
  console.log(`y coordinate is ${pot.y}`);

  if(pot.z !== undefined) {
    console.log(`z coordinate is ${pot.z}`);
  }
}

PrintCoordinates({x:855, y:968});

//EXTENDING A CUSTOM TYPE TO ANOTHER CUSTOM TYPE
type NewPoints = Point & {
  m: number;
  k: number;
}

const printAll = (pot:NewPoints) => {
  console.log(`x coordinate is ${pot.x}`);
  console.log(`y coordinate is ${pot.y}`);
  if(pot.z !== undefined) {
    console.log(`z coordinate is ${pot.z}`);
  }
  console.log(`m coordinate is ${pot.x}`);
  console.log(`k coordinate is ${pot.y}`);
}

printAll({x:777, y:85858, m: 6363, k: 21514});