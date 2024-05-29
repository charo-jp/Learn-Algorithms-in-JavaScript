class Vertex {
  constructor(id) {
    this.id = id;
    this.adj = new Set();
  }

  display = () => {
    let adj = "";
    this.adj.forEach((element) => {
      adj += element + ", ";
    });
    console.log(`${this.id}, adj = {${adj}}`);
  };
}

const connect = (vertices, i, j) => {
  vertices[i].adj.add(j);
  vertices[j].adj.add(i);
};

const N = 5;
const vertices = [];
for (let i = 0; i < N; i++) {
  vertices.push(new Vertex(i));
}

connect(vertices, 0, 1);
connect(vertices, 0, 4);
connect(vertices, 1, 2);
connect(vertices, 1, 3);
connect(vertices, 2, 4);
connect(vertices, 2, 3);
connect(vertices, 3, 2);
connect(vertices, 4, 3);

for (let i = 0; i < N; i++) {
  vertices[i].display();
}
