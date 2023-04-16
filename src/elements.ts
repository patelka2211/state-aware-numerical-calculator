function elementWithId(id: string) {
    return () => document.getElementById(id) as HTMLElement;
}

function elementsWithClass(className: string) {
    return () => document.getElementsByClassName(className);
}

export default {
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
