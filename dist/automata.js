import elements from "./elements";
import { enableTheseKeys } from "./keyManager";
import { addHighlight, addSpotlight, highlightOnly, } from "./nodeAndEdgeColoring";
let currentState = 0, equation = "", warning_msg = "Accepted input: Numbers.", showing_warning = false;
function setState0(input = null) {
    if (input !== null)
        appendAnswerContainer(input);
    enableTheseKeys("n");
    currentState = 0;
    highlightOnly(currentState);
    warning_msg = "Accepted input: Numbers.";
}
function setState1(input) {
    appendAnswerContainer(input);
    enableTheseKeys("node");
    currentState = 1;
    highlightOnly(currentState);
    warning_msg = "Accepted input: Numbers, Operators, Period(.), Equal.";
}
function setState2(input) {
    appendAnswerContainer(input);
    enableTheseKeys("n");
    currentState = 2;
    highlightOnly(currentState);
    warning_msg = "Accepted input: Numbers.";
}
function setState3(input) {
    appendAnswerContainer(input);
    enableTheseKeys("noe");
    currentState = 3;
    highlightOnly(currentState);
    warning_msg = "Accepted input: Numbers, Operators, Equal.";
}
function setState4() {
    // let ans = eval(`'use strict'; ${equation}`);
    let ans = new Function(`return ${equation};`)();
    // eval(`'use strict'; ${equation}`);
    if (typeof ans === "number" && isFinite(ans) && !isNaN(ans)) {
        equation = String(Number(ans.toFixed(2)));
        setAnswerContainer(equation);
        enableTheseKeys("o");
        currentState = 4;
        highlightOnly(currentState);
        warning_msg = "Accepted input: Operators.";
    }
    else {
        reset();
        alert("Mathematically impossible operations");
    }
}
function setAnswerContainer(input = null) {
    if (input === null)
        elements.answer_container().innerHTML = "";
    else
        elements.answer_container().innerHTML = `<span class="ans-element">${input}</span>`;
}
function appendAnswerContainer(input) {
    let span = document.createElement("span");
    span.setAttribute("class", "ans-element");
    if (input === "*")
        span.innerText = "×";
    else
        span.innerText = input;
    ((element) => {
        element.append(span);
        element.scrollLeft = element.scrollWidth;
    })(elements.answer_container());
    equation += input;
}
function reset() {
    equation = "";
    setState0();
    setAnswerContainer();
}
function spotlightCurrentNode() {
    let time = 1;
    elements.warning_tag().innerText = warning_msg;
    showing_warning = true;
    setTimeout(() => {
        elements.warning_tag().innerText = "";
        showing_warning = false;
    }, 1000 * time);
    for (let index = 0; index < 8 * time; index++) {
        if (index % 2 == 0)
            setTimeout(() => {
                addSpotlight(currentState);
            }, 125 * index);
        else
            setTimeout(() => {
                addHighlight(currentState);
            }, 125 * index);
    }
}
export function nextCharacter(character) {
    if (character.length === 1 && !showing_warning) {
        let type;
        if ("0123456789".indexOf(character) !== -1)
            type = "n";
        else if ("/*+-".indexOf(character) !== -1)
            type = "o";
        else if ("." === character)
            type = "d";
        else if ("=" === character)
            type = "e";
        else if ("c" === character)
            type = "c";
        if (type !== undefined) {
            if (type === "c")
                reset();
            else if (currentState === 0) {
                if (type === "n")
                    setState1(character);
                else
                    spotlightCurrentNode();
            }
            else if (currentState === 1) {
                if (type === "n")
                    setState1(character);
                else if (type === "o")
                    setState0(character);
                else if (type === "d")
                    setState2(character);
                else if (type === "e")
                    setState4();
                else
                    spotlightCurrentNode();
            }
            else if (currentState === 2) {
                if (type === "n")
                    setState3(character);
                else
                    spotlightCurrentNode();
            }
            else if (currentState === 3) {
                if (type === "n")
                    setState3(character);
                else if (type === "o")
                    setState0(character);
                else if (type === "e")
                    setState4();
                else
                    spotlightCurrentNode();
            }
            else if (currentState === 4) {
                if (type === "o")
                    setState0(character);
                else
                    spotlightCurrentNode();
            }
        }
        else if (type === undefined)
            spotlightCurrentNode();
    }
}
