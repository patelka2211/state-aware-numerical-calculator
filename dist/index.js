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
function keyMappings(showAlert = false) {
    let msg_str = `Here are the key mappings you can use:\n\nKey 's' or 'S': To share this page\nKey 'c' or 'C' : Clear button\nKey '0' : 0 button\nKey '1' : 1 button\nKey '2' : 2 button\nKey '3' : 3 button\nKey '4' : 4 button\nKey '5' : 5 button\nKey '6' : 6 button\nKey '7' : 7 button\nKey '8' : 8 button\nKey '9' : 9 button\nKey '/' : Division button\nKey '*' or 'x' or 'X' : Multiplication button\nKey '+' : Addition button\nKey '-' : Subtraction button\nKey '.' : Period button\nKey '=' or 'Enter key' : Equal button\nKey 'k' or 'K' : To see key mappings\n`;
    if (showAlert)
        alert(msg_str);
    else
        return msg_str;
}
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
    else if ("kK".indexOf(e.key) !== -1)
        keyMappings(true);
    else if ("sS".indexOf(e.key) !== -1) {
        new Function(`try{sharer.open();}catch(error){console.log(error);}`)();
    }
});
function runIfOnDesktop() {
    setTimeout(() => {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            alert(`Looks like you are on a Desktop computer.\n\n${keyMappings()}`);
            alert(`If you need to see key mappings again, then press 'k' or 'K' key.`);
        }
    }, 500);
}
window.addEventListener("load", runIfOnDesktop);
