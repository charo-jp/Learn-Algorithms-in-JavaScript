const Heap = require("heap");

const INFTY = 2 ** 31 - 1;

class Vertex {
  constructor(id) {
    this.id = id;
    this.pred = null;
    this.adj = new Map();
    this.distance = INFTY;
  }

  // This helps compare instances of class Vertex.
  valueOf() {
    return this.distance;
  }
}

const relax = (u, v) => {
  if (v.distance > u.distance + u.adj.get(v.id)) {
    v.distance = u.distance + u.adj.get(v.id);
    v.pred = u.id;
    return true;
  }
  return false;
};

const dijkstra = (vertices, src) => {
  src.distance = 0;
  const queue = new Heap();

  vertices.forEach((vertex) => {
    queue.push(vertex);
  });

  while (queue.nodes.length > 0) {
    let printHeap = "[ ";
    queue.nodes.forEach((i) => {
      printHeap += i.id + " ";
    });
    printHeap += "]";
    console.log(printHeap);
    const u = queue.pop();
    u.adj.forEach((value, i) => {
      if (relax(u, vertices[i])) {
        // Smaller dist should be prioritized.
        queue.heapify();
      }
    });
  }
};

const printPath = (vertices, src, v) => {
  if (src.id === v.id) {
    console.log(src.id);
  } else if (v.pred === null) {
    console.log("there is no way you can get there");
  } else {
    printPath(vertices, src, vertices[v.pred]);
    console.log(v.id);
  }
};

const connect = (vertices, i, j, weight) => {
  vertices[i].adj.set(j, weight);
};

const N = 5;
const vertices = [];

for (let i = 0; i < N; i++) {
  vertices.push(new Vertex(i));
}

connect(vertices, 0, 1, 15);
connect(vertices, 0, 4, 7);
connect(vertices, 1, 2, 1);
connect(vertices, 1, 4, 3);
connect(vertices, 2, 3, 5);
connect(vertices, 3, 2, 6);
connect(vertices, 3, 0, 9);
connect(vertices, 4, 1, 4);
connect(vertices, 4, 2, 11);
connect(vertices, 4, 3, 2);

dijkstra(vertices, vertices[0]);

printPath(vertices, vertices[0], vertices[2]);
