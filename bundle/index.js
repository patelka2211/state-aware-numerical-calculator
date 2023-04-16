(function () {
    'use strict';

    function elementWithId(id) {
        return () => document.getElementById(id);
    }
    function elementsWithClass(className) {
        return () => document.getElementsByClassName(className);
    }
    var elements = {
        // Automata Nodes
        /**
         * Node 0 in automata.
         */
        node0: elementWithId("node0"),
        /**
         * Node 1 in automata.
         */
        node1: elementWithId("node1"),
        /**
         * Node 2 in automata.
         */
        node2: elementWithId("node2"),
        /**
         * Node 3 in automata.
         */
        node3: elementWithId("node3"),
        /**
         * Node 4 in automata.
         */
        node4: elementWithId("node4"),
        // Automata Edges
        /**
         * All outgoing edges from node 0 in automata.
         */
        edgesFrom0: elementsWithClass("edges-from-0"),
        /**
         * All outgoing edges from node 1 in automata.
         */
        edgesFrom1: elementsWithClass("edges-from-1"),
        /**
         * All outgoing edges from node 2 in automata.
         */
        edgesFrom2: elementsWithClass("edges-from-2"),
        /**
         * All outgoing edges from node 3 in automata.
         */
        edgesFrom3: elementsWithClass("edges-from-3"),
        /**
         * All outgoing edges from node 4 in automata.
         */
        edgesFrom4: elementsWithClass("edges-from-4"),
        /**
         * Answer container
         */
        answer_container: elementWithId("answer-container"),
        // Numerical btns
        /**
         * Number keys
         */
        number_keys: elementsWithClass("number-key"),
        /**
         * Numerical key 0
         */
        btn_0: elementWithId("btn-0"),
        /**
         * Numerical key 1
         */
        btn_1: elementWithId("btn-1"),
        /**
         * Numerical key 2
         */
        btn_2: elementWithId("btn-2"),
        /**
         * Numerical key 3
         */
        btn_3: elementWithId("btn-3"),
        /**
         * Numerical key 4
         */
        btn_4: elementWithId("btn-4"),
        /**
         * Numerical key 5
         */
        btn_5: elementWithId("btn-5"),
        /**
         * Numerical key 6
         */
        btn_6: elementWithId("btn-6"),
        /**
         * Numerical key 7
         */
        btn_7: elementWithId("btn-7"),
        /**
         * Numerical key 8
         */
        btn_8: elementWithId("btn-8"),
        /**
         * Numerical key 9
         */
        btn_9: elementWithId("btn-9"),
        /**
         * Clear btn
         */
        btn_clear: elementWithId("btn-clear"),
        // Operator btns
        /**
         * All operator btn
         */
        operator_keys: elementsWithClass("operator-key"),
        /**
         * Division btn
         */
        btn_div: elementWithId("btn-div"),
        /**
         * Multiplication btn
         */
        btn_mult: elementWithId("btn-mult"),
        /**
         * Subtraction btn
         */
        btn_sub: elementWithId("btn-sub"),
        /**
         * Addition btn
         */
        btn_add: elementWithId("btn-add"),
        /**
         * Period btn
         */
        btn_period: elementWithId("btn-period"),
        /**
         * Equal btn
         */
        btn_equal: elementWithId("btn-equal"),
        /**
         * Finite automata diagram tag
         */
        finite_automata_diagram: elementWithId("finite-automata-diagram"),
        /**
         * Warning tag
         */
        warning_tag: elementWithId("warning-tag"),
    };

    function disableNumberKeys() {
        ((array) => {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.classList.add("disabled");
            }
        })(elements.number_keys());
    }
    function enableNumberKeys() {
        ((array) => {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.classList.remove("disabled");
            }
        })(elements.number_keys());
    }
    function disableOperatorKeys() {
        ((array) => {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.classList.add("disabled");
            }
        })(elements.operator_keys());
    }
    function enableOperatorKeys() {
        ((array) => {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.classList.remove("disabled");
            }
        })(elements.operator_keys());
    }
    function disablePeriodKey() {
        elements.btn_period().classList.add("disabled");
    }
    function enablePeriodKey() {
        elements.btn_period().classList.remove("disabled");
    }
    function disableEqualKey() {
        elements.btn_equal().classList.add("disabled");
    }
    function enableEqualKey() {
        elements.btn_equal().classList.remove("disabled");
    }
    function enableTheseKeys(list) {
        "node".split("").forEach((item) => {
            if (item === "n")
                if (list.indexOf(item) !== -1)
                    enableNumberKeys();
                else
                    disableNumberKeys();
            else if (item === "o")
                if (list.indexOf(item) !== -1)
                    enableOperatorKeys();
                else
                    disableOperatorKeys();
            else if (item === "d")
                if (list.indexOf(item) !== -1)
                    enablePeriodKey();
                else
                    disablePeriodKey();
            else if (item === "e")
                if (list.indexOf(item) !== -1)
                    enableEqualKey();
                else
                    disableEqualKey();
        });
    }

    let highlight_node = "highlighted-node", spotlight_node = "spotlight-node", highlight_edge = "highlighted-edge", spotlight_edge = "spotlight-edge";
    function addHighlight(id) {
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
    function removeHighlight(id) {
        // For nodes
        elements[`node${id}`]().classList.remove(highlight_node);
        // For edges
        ((array) => {
            for (let index = 0; index < array.length; index++) {
                array[index].classList.remove(highlight_edge);
            }
        })(elements[`edgesFrom${id}`]());
    }
    function addSpotlight(id) {
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
    function removeSpotlight(id) {
        // For nodes
        elements[`node${id}`]().classList.remove(spotlight_node);
        // For edges
        ((array) => {
            for (let index = 0; index < array.length; index++) {
                array[index].classList.remove(spotlight_edge);
            }
        })(elements[`edgesFrom${id}`]());
    }
    function highlightOnly(id) {
        for (let index = 0; index < 5; index++) {
            if (index === id)
                addHighlight(id);
            else
                removeHighlight(index);
        }
    }

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
    function nextCharacter(character) {
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

    ((array) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.addEventListener("click", (e) => {
                e.preventDefault();
                nextCharacter(element.getAttribute("btn-value"));
            });
        }
    })(elements.number_keys());
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
    document.addEventListener("keypress", (e) => {
        e.preventDefault();
        "0123456789/*+-=.".split("").forEach((key) => {
            if (e.key === key)
                nextCharacter(key);
        });
        if ("xX".indexOf(e.key) !== -1)
            nextCharacter("*");
        if ("cC".indexOf(e.key) !== -1)
            nextCharacter("c");
        if ("Enter" === e.key)
            nextCharacter("=");
    });

})();
