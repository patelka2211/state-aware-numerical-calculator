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
})(elements.digit_keys());
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

const keys_array = "0123456789/*+-=.".split("");

function keyMappings(showAlert = false) {
    let msg_str = `Here are the key mappings you can use:\n\nTo share: 's' or 'S'\nTo clear: 'c' or 'C'\nTo enter numbers: '0' to '9'\nFor division: '/'\nFor multiplication: '*', 'x' or 'X'\nFor addition: '+'\nFor subtraction: '-'\nTo enter decimal point: '.'\nTo calculate: '=' or 'Enter'\nTo see key mappings: 'k' or 'K'\n`;
    if (showAlert) alert(msg_str);
    else return msg_str;
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

    if ("xX".indexOf(e.key) !== -1) nextCharacter("*");
    else if ("cC".indexOf(e.key) !== -1) nextCharacter("c");
    else if ("Enter" === e.key) nextCharacter("=");
    else if ("kK".indexOf(e.key) !== -1) keyMappings(true);
    else if ("sS".indexOf(e.key) !== -1)
        new Function(`try{Sharer.open();}catch(error){console.log(error);}`)();
});

function runIfOnDesktop() {
    setTimeout(() => {
        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            alert(
                `Looks like you are on a desktop computer.\n\n${keyMappings()}`
            );
            alert(
                `To view the key mappings again, simply press the 'k' or 'K' key.`
            );
        }
    }, 500);
}

window.addEventListener("load", runIfOnDesktop);

export {};
