const knapsack = (items, m) => {
  let n = items.length;
  // create dynamic programming table
  const dpt = [];
  for (let i = 0; i < n + 1; i++) {
    const row = [];
    for (let j = 0; j < m + 1; j++) {
      row.push(0);
    }
    dpt.push(row);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      const w = items[i - 1][1];
      const a = dpt[i - 1][j - w] + items[i - 1][0];
      const b = dpt[i - 1][j];
      if (items[i - 1][1] <= j) {
        if (a > b) {
          dpt[i][j] = a;
        } else {
          dpt[i][j] = b;
        }
      } else {
        dpt[i][j] = b;
      }
    }
  }

  const selected = [];
  let k = m;
  for (n; n > 0; n--) {
    if (k <= 0) {
      break;
    } else if (dpt[n - 1][k] === dpt[n][k]) {
      continue;
    } else {
      selected.push(items[n - 1]);
      k = k - items[n - 1][1];
    }
  }
  return selected;
};

//------------------------------------------
const items = [
  [2, 3],
  [3, 3],
  [6, 5],
  [1, 3],
  [5, 4],
];

const m = 10;
const select = knapsack(items, m);

console.log(select);
