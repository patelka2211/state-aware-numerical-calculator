import elements from "./elements";

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

export function enableTheseKeys(list: string) {
    "node".split("").forEach((item) => {
        if (item === "n")
            if (list.indexOf(item) !== -1) enableNumberKeys();
            else disableNumberKeys();
        else if (item === "o")
            if (list.indexOf(item) !== -1) enableOperatorKeys();
            else disableOperatorKeys();
        else if (item === "d")
            if (list.indexOf(item) !== -1) enablePeriodKey();
            else disablePeriodKey();
        else if (item === "e")
            if (list.indexOf(item) !== -1) enableEqualKey();
            else disableEqualKey();
    });
}
