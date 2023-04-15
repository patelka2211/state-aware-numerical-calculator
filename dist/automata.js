import { addHighlight, addSpotlight, removeHighlight, removeSpotlight, } from "./nodeAndEdgeColoring";
let currentState = 0, stateGraph = {
    0: {
        n: 1,
    },
    1: {
        n: 1,
        o: 0,
        d: 2,
        e: 4,
    },
    2: {
        n: 3,
    },
    3: {
        n: 3,
        o: 0,
        e: 4,
    },
    4: {
        o: 0,
    },
}, toBeEvaluated = "";
function spotlightCurrentNode() {
    for (let index = 0; index < 8; index++) {
        if (index % 2 === 0)
            setTimeout(() => {
                removeHighlight(currentState);
                addSpotlight(currentState);
            }, 125 * index);
        else
            setTimeout(() => {
                removeSpotlight(currentState);
                addHighlight(currentState);
            }, 125 * index);
    }
}
function reset() {
    currentState = 0;
    toBeEvaluated = "";
}
function setState0() { }
function setState1() { }
function setState2() { }
function setState3() { }
function setState4() { }
function isAllowed(type) {
    return Object.keys(stateGraph[currentState]).indexOf(type) !== -1;
}
function setNext(character) {
    if (character.length === 1) {
        let type;
        if ("0123456789".indexOf(character) !== -1)
            type = "n";
        else if ("/*-+xX".indexOf(character) !== -1)
            type = "o";
        else if ("." === character)
            type = "d";
        else if ("=" === character)
            type = "e";
        else if ("cC".indexOf(character) !== -1)
            type = "c";
        if (type !== undefined && isAllowed(type)) {
            // allowed
        }
        else {
            // not allowed
            spotlightCurrentNode();
        }
    }
}
