# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

#### Runtime of Detecting Cycles: $T(n)\in\Theta(|E|+|V|)$
The worst case would be a graph with no cycles, since that would ensure you have to search the whole graph.

The steps of the algorithm are:
1. mark v as visited. $\Theta(1)$
2. for each edge  (v,w): This has a complexity of $\Theta(|E|)$ since each edge will be processed once overall
    1. If not visited, recursively process w. This has a complexity of  $\Theta(|V|)$ since each vertex will be visited at least once.
    2. otherwise, if w is a visited node that is not the current parent, there is a cycle, so return true. $\Theta(1)$
    3. otherwise, return false. $\Theta(1)$
3. check if any vertices are unvisited and run depth first search on them if so.
 This has a complexity of $\Theta(|V|)$ since we've already included the dfs
 function's complexity, and this for loop iterates over all nodes.


Runtime equation:
$T(n) = 1 + (|E| + |V| + 1 + 1) + (|V|)$

$= |E| + 2|V| + 3$

The constant factors are asymptotically insignificant, therefore

$T(n)\in\Theta(|E| + |V|)$

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."

