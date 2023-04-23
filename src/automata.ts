import elements from "./elements";
import { enableTheseKeys } from "./keyManager";
import {
    addHighlight,
    addSpotlight,
    highlightOnly,
} from "./nodeAndEdgeColoring";

let currentState: 0 | 1 | 2 | 3 | 4 = 0,
    equation = "",
    warning_msg = ["digit"],
    showing_warning = false;

function spotlightCurrentNode() {
    let time = 1.5;
    elements.warning_tag().innerText = ((warning_list) => {
        return `Expected input${
            warning_list.length === 1 ? " is" : "s are"
        } ${warning_list.join(", ")}${
            warning_list.length === 1 ? " only" : ""
        }.`;
    })(warning_msg);
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

function onState0(type: string, character: string) {
    if (type === "d") setState1(character);
    else spotlightCurrentNode();
}
function setState0(character: string) {
    appendAnswerContainer(character);
    enableTheseKeys("d");
    currentState = 0;
    highlightOnly(currentState);
    warning_msg = ["digit"];
}

function onState1(type: string, character: string) {
    if (type === "d") setState1(character);
    else if (type === "o") setState0(character);
    else if (type === "p") setState2(character);
    else if (type === "e") setState4();
    else spotlightCurrentNode();
}

function setState1(character: string) {
    appendAnswerContainer(character);
    enableTheseKeys("dope");
    currentState = 1;
    highlightOnly(currentState);
    warning_msg = ["digit", "operator", "period(.)", "equal"];
}

function onState2(type: string, character: string) {
    if (type === "d") setState3(character);
    else spotlightCurrentNode();
}

function setState2(character: string) {
    appendAnswerContainer(character);
    enableTheseKeys("d");
    currentState = 2;
    highlightOnly(currentState);
    warning_msg = ["digit"];
}

function onState3(type: string, character: string) {
    if (type === "d") setState3(character);
    else if (type === "o") setState0(character);
    else if (type === "e") setState4();
    else spotlightCurrentNode();
}

function setState3(character: string) {
    appendAnswerContainer(character);
    enableTheseKeys("doe");
    currentState = 3;
    highlightOnly(currentState);
    warning_msg = ["digit", "operator", "equal"];
}

function onState4(type: string, character: string) {
    if (type === "o") setState0(character);
    else spotlightCurrentNode();
}

function setState4() {
    let ans = new Function(`return ${equation};`)();

    if (typeof ans === "number" && isFinite(ans) && !isNaN(ans)) {
        equation = String(Number(ans.toFixed(6)));
        setAnswerContainer(equation);
        enableTheseKeys("o");
        currentState = 4;
        highlightOnly(currentState);
        warning_msg = ["operator"];
    } else {
        reset();
        alert("Mathematically impossible operation");
    }
}

function setAnswerContainer(input: string | null) {
    if (input === null) elements.answer_container().innerHTML = "";
    else
        elements.answer_container().innerHTML = `<span class="ans-element">${input}</span>`;
}

function appendAnswerContainer(input: string) {
    let span = document.createElement("span");
    span.setAttribute("class", "ans-element");

    if (input === "*") span.innerText = "×";
    else span.innerText = input;
    ((element) => {
        element.append(span);
        element.scrollLeft = element.scrollWidth;
    })(elements.answer_container());
    equation += input;
}

function reset() {
    equation = "";
    enableTheseKeys("d");
    currentState = 0;
    highlightOnly(currentState);
    warning_msg = ["digit"];
    setAnswerContainer(null);
}

export function nextCharacter(character: string) {
    if (character.length === 1 && !showing_warning) {
        let type;

        if ("0123456789".indexOf(character) !== -1) type = "d";
        else if ("/*+-".indexOf(character) !== -1) type = "o";
        else if ("." === character) type = "p";
        else if ("=" === character) type = "e";
        else if ("c" === character) type = "c";

        if (type !== undefined) {
            if (type === "c") reset();
            else if (currentState === 0) onState0(type, character);
            else if (currentState === 1) onState1(type, character);
            else if (currentState === 2) onState2(type, character);
            else if (currentState === 3) onState3(type, character);
            else if (currentState === 4) onState4(type, character);
        } else if (type === undefined) spotlightCurrentNode();
    }
}
