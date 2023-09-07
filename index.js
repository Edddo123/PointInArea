const givenArea = [
  [114, 1239],
  [114, 2107],
  [1529, 2107],
  [1529, 1239],
];

// For single rectangle set - Time complexity O(1) Space Complexity O(1)
function getRectangleBounds(rectangleCoords) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  for (const coord of rectangleCoords) {
    if (coord[0] < minX) minX = coord[0];
    if (coord[0] > maxX) maxX = coord[0];
    if (coord[1] < minY) minY = coord[1];
    if (coord[1] > maxY) maxY = coord[1];
  }

  return {
    minX,
    minY,
    maxX,
    maxY,
  };
}

// For single rectangle set - Time complexity O(1) Space Complexity O(1)
function pointInArea(point, rectangleCoords) {
  // to check if point is in rectangle, first we need to get rectangle bounds
  // here we assume rectangle points are correct and actually form a rectangle
  const bounds = getRectangleBounds(rectangleCoords);

  // I count being on the line as being inside area
  return (
    point[0] >= bounds.minX &&
    point[0] <= bounds.maxX &&
    point[1] >= bounds.minY &&
    point[1] <= bounds.maxY
  );
}

console.log(pointInArea([114, 2105], givenArea))

// For single rectangle set - Time complexity O(N) where N is number of entities and Space Complexity O(1)
function closestToTopBorder(entities, rectangleCoords) {


  const bounds = getRectangleBounds(rectangleCoords);

  const topY = bounds.maxY;

  let closestEntity = null;
  let minDistance = Infinity;

  for (const entity of entities) {
    // we find closest point from inside rectangle
    const isPointInArea = pointInArea(entity, rectangleCoords)
    if(!isPointInArea) continue;

    const distance = topY - entity[1];


    if (distance >= 0 && distance < minDistance) {

      minDistance = distance;
      closestEntity = entity;
    }
  }

  return closestEntity;
}

console.log(closestToTopBorder([[114, 1239], [115, 1239], [115, 1240], [113, 1241]], givenArea));
