const WHITE = 0;
const GREY = 1;
const BLACK = 2;
const INFTY = 2 ** 32 - 1;

class Vertex {
  constructor(id) {
    this.id = id;
    this.adj = new Set();
    this.pred = null;
    this.color = WHITE;
    this.completed = INFTY;
    this.discovered = INFTY;
  }
}

const dfs = (vertices, v, time) => {
  v.discovered = time;
  console.log(v.id);
  v.color = GREY;
  time++;
  v.adj.forEach((id) => {
    const vertex = vertices[id];
    if (vertex.color === WHITE) {
      vertex.pred = v.id;
      dfs(vertices, vertex, time);
      time = vertex.completed + 1;
    }
  });
  v.completed = time;
  v.color = BLACK;
  time++;
};

const printPath = (vertices, src, v) => {
  if (src.id === v.id) {
    console.log(src.id);
  } else if (v.pred === null) {
    console.log("There is no way to get there");
  } else {
    printPath(vertices, src, vertices[v.pred]);
    console.log(v.id);
  }
};

const connect = (vertices, i, j) => {
  vertices[i].adj.add(j);
  vertices[j].adj.add(i);
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

dfs(vertices, vertices[5], 0);
console.log("3 to 7");
printPath(vertices, vertices[5], vertices[7]);
