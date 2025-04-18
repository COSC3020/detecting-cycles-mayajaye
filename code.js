//Maya Conway
//code.js
//Detecting Cycles
//4-17-25

function hasCycle(graph, visited = []) {

    //use my dfs to iterate through the edges and report a cycle if w is visited and not a parent
    function depthFirstSearch(node, parent) {
        visited.push(node);

        for (let i = 0; i < graph[node].length; i++) { //for each edge (v, w)
            if (!visited.includes(graph[node][i])) { //if w isn't marked visited
                if (depthFirstSearch(graph[node][i], node)) return true; //if a cycle was found, return true
            }
            //if w is a visited node that is not the current parent, there is a cycle
            else if (graph[node][i] !== parent) return true;
        }   
        return false;
    }

    //check if any disconnected portions have cycles
    for (let node in graph) {
        if (!visited.includes(node)) {
            if (depthFirstSearch(node, null)) return true; //if a cycle was found, return true
        }
    }
    return false;
}

