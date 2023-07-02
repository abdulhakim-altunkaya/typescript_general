//interfaces are like type objects. However, interface can only
//object and types can be anything.
//interface doesnt have "=" but types have.

interface MyCoordinates {
    x: number;
    y: number;
}

//interfaces and types are the same. They are both extendable.
//Their difference is nterfaces are updatable and types are not.
//by "update" I mean to add a new property.
//To update above interface:
interface MyCoordinates{
    m: number;
}

const printCoordinates = (anyPoint: MyCoordinates) => {
  console.log(`x coordinate is ${anyPoint.x}`);
  console.log(`y coordinate is ${anyPoint.y}`);
  console.log(`m coordinate is ${anyPoint.m}`);
}

printCoordinates({x: 52525, y:89494, m:85555855555});
