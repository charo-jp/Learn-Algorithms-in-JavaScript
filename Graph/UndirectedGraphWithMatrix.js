const displayGraph = (graph) => {
  let len = graph.length;
  let firstRow = "  ";
  for (let i = 0; i < len; i++) {
    firstRow += `${i} `;
  }
  console.log(firstRow);
  for (let i = 0; i < len; i++) {
    console.log(`${i} ${graph[i].join(" ")}`);
  }
  console.log("-----------------------");
};

const connect = (i, j) => {
  graph[i][j] = 1;
  graph[j][i] = 1;
};

let n = 5;
const graph = [];
for (let i = 0; i < n; i++) {
  graph.push(new Array(n).fill(0));
}
displayGraph(graph);
connect(0, 1);
connect(0, 4);
connect(1, 2);
connect(1, 3);
connect(1, 4);
connect(2, 3);
connect(3, 4);
displayGraph(graph);
