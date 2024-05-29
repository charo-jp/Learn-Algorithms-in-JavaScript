const Heap = require("heap");

const INFTY = Number.MAX_SAFE_INTEGER;

class Vertex {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.pred = null;
    this.adj = new Map();
    this.g = INFTY;
    this.f = INFTY;
  }

  valueOf() {
    return this.f;
  }
}

const getDistance = (u, v) => {
  return Math.abs(u.x - v.x) + Math.abs(u.y - v.y);
};

const isContained = (u, l) => {
  if (l.constructor.name === "Heap") {
    l = l.nodes;
  }
  for (const v of l) {
    if (u.id === v.id) {
      return true;
    }
  }
};

const printPath = (vertices, src, v) => {
  if (src.id === v.id) {
    console.log(src.id);
  } else if (v.pred === null) {
    console.log("There is no path to the destination");
  } else {
    printPath(vertices, src, vertices[v.pred]);
    console.log(v.id);
  }
};

const aSter = (vertices, src, dest) => {
  src.g = 0;
  src.f = getDistance(src, dest);
  const openList = new Heap();
  const closedList = [];
  openList.push(src);
  while (openList.nodes.length > 0) {
    const u = openList.pop();
    if (u.id === dest.id) {
      break;
    }
    for (const key of u.adj.keys()) {
      const v = vertices[key];
      const f = u.g + u.adj.get(v.id) + getDistance(v, dest);

      if (isContained(v, openList)) {
        // if v is in open list
        if (f < v.f) {
          v.f = f;
          v.g = u.g + u.adj.get(v.id);
          v.pred = u.id;
          openList.heapify();
        }
      } else if (isContained(v, closedList)) {
        if (f < v.f) {
          v.f = f;
          v.g = u.g + u.adj.get(v.id);
          v.pred = u.id;
          const index = closedList.indexOf(v);
          if (index > -1) {
            closedList.splice(index, 1);
          }
          openList.push(v);
          openList.heapify();
        }
      } else {
        v.f = f;
        v.g = u.g + u.adj.get(v.id);
        v.pred = u.id;
        openList.push(v);
        openList.heapify();
      }
    }
    closedList.push(u);
  }
};

const toGraph = (map, xmax, ymax) => {
  const vertices = [];
  let id = 0;
  for (let i = 0; i < ymax; i++) {
    for (let j = 0; j < xmax; j++) {
      vertices.push(new Vertex(id, j, i));
      id++;
    }
  }
  for (const v of vertices) {
    if (map[v.y][v.x] === 1) {
      if (v.y + 1 < ymax && map[v.y + 1][v.x] == 1) {
        v.adj.set((v.y + 1) * ymax + v.x, 1);
      }
      if (v.y - 1 >= 0 && map[v.y - 1][v.x] == 1) {
        v.adj.set((v.y - 1) * ymax + v.x, 1);
      }
      if (v.x + 1 < xmax && map[v.y][v.x + 1] == 1) {
        v.adj.set(v.y * ymax + v.x + 1, 1);
      }
      if (v.x - 1 >= 0 && map[v.y][v.x - 1] == 1) {
        v.adj.set(v.y * ymax + v.x - 1, 1);
      }
    }
  }

  return vertices;
};
// set up -------------------------------------
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];

const vertices = toGraph(map, map[0].length, map.length);

const src = vertices[34];
const destination = vertices[54];
aSter(vertices, src, destination);

printPath(vertices, src, destination);
