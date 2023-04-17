import elements from "./elements";
function disableDigitKeys() {
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.classList.add("disabled");
        }
    })(elements.digit_keys());
}
function enableDigitKeys() {
    ((array) => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.classList.remove("disabled");
        }
    })(elements.digit_keys());
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
export function enableTheseKeys(list) {
    "dope".split("").forEach((item) => {
        if (item === "d")
            if (list.indexOf(item) !== -1)
                enableDigitKeys();
            else
                disableDigitKeys();
        else if (item === "o")
            if (list.indexOf(item) !== -1)
                enableOperatorKeys();
            else
                disableOperatorKeys();
        else if (item === "p")
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
