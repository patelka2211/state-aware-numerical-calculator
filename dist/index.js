import { nextCharacter } from "./automata";
import elements from "./elements";
((array) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.addEventListener("click", (e) => {
            e.preventDefault();
            nextCharacter(element.getAttribute("btn-value"));
        });
    }
})(elements.digit_keys());
((array) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.addEventListener("click", (e) => {
            e.preventDefault();
            nextCharacter(element.getAttribute("btn-value"));
        });
    }
})(elements.operator_keys());
elements.btn_clear().addEventListener("click", (e) => {
    e.preventDefault();
    nextCharacter(elements.btn_clear().getAttribute("btn-value"));
});
elements.btn_period().addEventListener("click", (e) => {
    e.preventDefault();
    nextCharacter(elements.btn_period().getAttribute("btn-value"));
});
elements.btn_equal().addEventListener("click", (e) => {
    e.preventDefault();
    nextCharacter(elements.btn_equal().getAttribute("btn-value"));
});
const keys_array = "0123456789/*+-=.".split("");
document.addEventListener("keypress", (e) => {
    e.preventDefault();
    for (let index = 0; index < keys_array.length; index++) {
        const element = keys_array[index];
        if (e.key === element) {
            nextCharacter(element);
            return;
        }
    }
    if ("xX".indexOf(e.key) !== -1)
        nextCharacter("*");
    else if ("cC".indexOf(e.key) !== -1)
        nextCharacter("c");
    else if ("Enter" === e.key)
        nextCharacter("=");
});
