const WHITE = 0;
const GREY = 1;
const BLACK = 2;
const INFTY = 2 ** 31 - 1;
class Vertex {
  constructor(id) {
    this.id = id;
    this.adj = new Set();
    this.color = WHITE;
    this.distance = INFTY;
    this.pred = null;
  }
}

const bfs = (vertices, src) => {
  src.distance = 0;
  src.pred = null;
  src.color = GREY;
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.id);

    current.adj.forEach((i) => {
      const v = vertices[i];
      if (v.color === WHITE) {
        v.color = GREY;
        v.distance = current.distance + 1;
        v.pred = current.id;
        queue.push(v);
      }
    });
    current.color = BLACK;
  }
};

const printPath = (vertices, src, v) => {
  if (src.id === v.id) {
    console.log(v.id);
  } else if (v.pred == null) {
    console.log(`There is no way that you can access to ${v.id}`);
  } else {
    printPath(vertices, src, vertices[v.pred]);
    console.log(v.id);
  }
};

const connect = (v, i, j) => {
  v[i].adj.add(j);
  v[j].adj.add(i);
};

const N = 8;
const vertices = [];
for (let i = 0; i < N; i++) {
  vertices.push(new Vertex(i));
}

connect(vertices, 0, 1);
connect(vertices, 0, 7);
connect(vertices, 1, 6);
connect(vertices, 1, 2);
connect(vertices, 2, 3);
connect(vertices, 2, 5);
connect(vertices, 3, 4);
connect(vertices, 3, 5);
connect(vertices, 4, 5);
connect(vertices, 5, 6);

bfs(vertices, vertices[3]);
console.log("3 to 7");
printPath(vertices, vertices[3], vertices[7]);
