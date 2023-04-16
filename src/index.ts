import { nextCharacter } from "./automata";
import elements from "./elements";

((array) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.addEventListener("click", (e) => {
            e.preventDefault();
            nextCharacter(element.getAttribute("btn-value") as string);
        });
    }
})(elements.number_keys());
((array) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.addEventListener("click", (e) => {
            e.preventDefault();
            nextCharacter(element.getAttribute("btn-value") as string);
        });
    }
})(elements.operator_keys());

elements.btn_clear().addEventListener("click", (e) => {
    e.preventDefault();
    nextCharacter(elements.btn_clear().getAttribute("btn-value") as string);
});
elements.btn_period().addEventListener("click", (e) => {
    e.preventDefault();
    nextCharacter(elements.btn_period().getAttribute("btn-value") as string);
});
elements.btn_equal().addEventListener("click", (e) => {
    e.preventDefault();
    nextCharacter(elements.btn_equal().getAttribute("btn-value") as string);
});

document.addEventListener("keypress", (e) => {
    e.preventDefault();
    "0123456789/*+-=.".split("").forEach((key) => {
        if (e.key === key) nextCharacter(key);
    });
    if ("xX".indexOf(e.key) !== -1) nextCharacter("*");
    if ("cC".indexOf(e.key) !== -1) nextCharacter("c");
    if ("Enter" === e.key) nextCharacter("=");
});

export {};
