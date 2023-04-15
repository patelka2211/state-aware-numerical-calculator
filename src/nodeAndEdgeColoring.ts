import elements from "./elements";

export function addHighlight(id: 0 | 1 | 2 | 3 | 4) {
    // For nodes
    elements[`node${id}`]().classList.add("highlighted-node");

    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.add("highlighted-edge");
        }
    })(elements[`edgesFrom${id}`]());
}
export function removeHighlight(id: 0 | 1 | 2 | 3 | 4) {
    // For nodes
    elements[`node${id}`]().classList.remove("highlighted-node");

    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.remove("highlighted-edge");
        }
    })(elements[`edgesFrom${id}`]());
}
export function addSpotlight(id: 0 | 1 | 2 | 3 | 4) {
    // For nodes
    elements[`node${id}`]().classList.add("spotlight-node");

    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.add("spotlight-edge");
        }
    })(elements[`edgesFrom${id}`]());
}
export function removeSpotlight(id: 0 | 1 | 2 | 3 | 4) {
    // For nodes
    elements[`node${id}`]().classList.remove("spotlight-node");

    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.remove("spotlight-edge");
        }
    })(elements[`edgesFrom${id}`]());
}
