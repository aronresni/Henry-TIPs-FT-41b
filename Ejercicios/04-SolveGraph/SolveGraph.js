function SolveGraph(graph, start, end, arr = []) {
  // Your code here:
  if (arr.includes(start)) return false
  arr.push(start);
  for (const nodo of graph[start]) {
    if (nodo === end) return true
    if (SolveGraph(graph, nodo, end, arr)) return true
  }
  return false
}

module.exports = SolveGraph;
