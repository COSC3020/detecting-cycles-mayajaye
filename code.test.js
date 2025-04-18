// Maya Conway
// code.test.js
// Detecting Cycles Unit Tests
// 4-17-25

const assert = require('assert');
const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

function hasCycleTests() {
    //acyclic graph
    const acyclicGraph = {
        A: ['B'],
        B: ['A', 'C'],
        C: ['B', 'D'],
        D: ['C']
    };
    
    //graph that has a cycle around A B and C
    const cyclicGraph = {
        A: ['B'],
        B: ['C'],
        C: ['A'],
        D: [],
    };

    //graph that has B cycle itself
    const selfCycleGraph = {
        A: ['B'],
        B: ['B', 'C'],
        C: [],
    };

    //acyclic disconnected graph
    const acyclicDiscGraph = {
        A: ['B'],
        B: [],
        C: ['D'],
        D: [],
    };

    //cyclic disconnected graph
    const cyclicDiscGraph = {
        A: ['B'],
        B: [],
        C: ['D', 'A'],
        D: [],
    };

    assert.deepEqual(hasCycle(acyclicGraph), false, 'Acyclic failed');
    assert.deepEqual(hasCycle(cyclicGraph), true, 'Cyclic failed');
    assert.deepEqual(hasCycle(selfCycleGraph), true, 'Self Cycle failed');
    assert.deepEqual(hasCycle(acyclicDiscGraph), false, 'Acyclic Disconnected failed');
    assert.deepEqual(hasCycle(cyclicDiscGraph), true, 'Cyclic Disconnected failed');
}
hasCycleTests();
