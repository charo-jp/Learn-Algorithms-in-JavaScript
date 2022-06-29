const getStartPoint = (points) => {
  let start = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  for (const point of points) {
    if (point[0] <= start[0]) {
      if (point[1] < start[1]) {
        start[0] = point[0];
        start[1] = point[1];
      }
    }
  }
  return start;
};

const arrayEquals = (a, b) => {
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const getVector = (a, b) => {
  return [b[0] - a[0], b[1] - a[1]];
};

const getNorm = (a) => {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};

const crossProduct = (a, b) => {
  return a[0] * b[1] - a[1] * b[0];
};

const giftWrapping = (points) => {
  const result = [];

  let a = getStartPoint(points);

  while (true) {
    result.push(a);
    let b = points[0];
    for (let i = 1; i < points.length; i++) {
      let c = points[i];
      if (arrayEquals(a, b)) {
        b = c;
      } else {
        const v1 = getVector(a, b);
        const v2 = getVector(a, c);
        const prod = crossProduct(v1, v2);
        if (prod > 0 || (prod == 0 && getNorm(v2) > getNorm(v1))) {
          b = c;
        }
      }
    }
    a = b;
    if (arrayEquals(a, result[0])) {
      break;
    }
  }
  return result;
};

//--------------------------------------
const pointsArray = [
  [1, 1],
  [3, 1],
  [2, 3],
  [6, 4],
  [4, 3],
  [4, 6],
  [1, 5],
  [4, 5],
];

const convexHull = giftWrapping(pointsArray);

console.log(convexHull);
