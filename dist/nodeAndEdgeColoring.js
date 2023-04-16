import elements from "./elements";
let highlight_node = "highlighted-node", spotlight_node = "spotlight-node", highlight_edge = "highlighted-edge", spotlight_edge = "spotlight-edge";
export function addHighlight(id) {
    // For nodes
    elements[`node${id}`]().classList.add(highlight_node);
    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.add(highlight_edge);
        }
    })(elements[`edgesFrom${id}`]());
    removeSpotlight(id);
}
export function removeHighlight(id) {
    // For nodes
    elements[`node${id}`]().classList.remove(highlight_node);
    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.remove(highlight_edge);
        }
    })(elements[`edgesFrom${id}`]());
}
export function addSpotlight(id) {
    // For nodes
    elements[`node${id}`]().classList.add(spotlight_node);
    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.add(spotlight_edge);
        }
    })(elements[`edgesFrom${id}`]());
    removeHighlight(id);
}
export function removeSpotlight(id) {
    // For nodes
    elements[`node${id}`]().classList.remove(spotlight_node);
    // For edges
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            array[index].classList.remove(spotlight_edge);
        }
    })(elements[`edgesFrom${id}`]());
}
export function highlightOnly(id) {
    for (let index = 0; index < 5; index++) {
        if (index === id)
            addHighlight(id);
        else
            removeHighlight(index);
    }
}
