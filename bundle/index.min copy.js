!(function () {
    "use strict";
    function e(e) {
        return () => document.getElementById(e);
    }
    function t(e) {
        return () => document.getElementsByClassName(e);
    }
    var n = {
        node0: e("node0"),
        node1: e("node1"),
        node2: e("node2"),
        node3: e("node3"),
        node4: e("node4"),
        edgesFrom0: t("edges-from-0"),
        edgesFrom1: t("edges-from-1"),
        edgesFrom2: t("edges-from-2"),
        edgesFrom3: t("edges-from-3"),
        edgesFrom4: t("edges-from-4"),
        answer_container: e("answer-container"),
        digit_keys: t("digit-key"),
        btn_0: e("btn-0"),
        btn_1: e("btn-1"),
        btn_2: e("btn-2"),
        btn_3: e("btn-3"),
        btn_4: e("btn-4"),
        btn_5: e("btn-5"),
        btn_6: e("btn-6"),
        btn_7: e("btn-7"),
        btn_8: e("btn-8"),
        btn_9: e("btn-9"),
        btn_clear: e("btn-clear"),
        operator_keys: t("operator-key"),
        btn_div: e("btn-div"),
        btn_mult: e("btn-mult"),
        btn_sub: e("btn-sub"),
        btn_add: e("btn-add"),
        btn_period: e("btn-period"),
        btn_equal: e("btn-equal"),
        finite_automata_diagram: e("finite-automata-diagram"),
        warning_tag: e("warning-tag"),
    };
    function o(e) {
        "dope".split("").forEach((t) => {
            "d" === t
                ? -1 !== e.indexOf(t)
                    ? ((e) => {
                          for (let t = 0; t < e.length; t++)
                              e[t].classList.remove("disabled");
                      })(n.digit_keys())
                    : ((e) => {
                          for (let t = 0; t < e.length; t++)
                              e[t].classList.add("disabled");
                      })(n.digit_keys())
                : "o" === t
                ? -1 !== e.indexOf(t)
                    ? ((e) => {
                          for (let t = 0; t < e.length; t++)
                              e[t].classList.remove("disabled");
                      })(n.operator_keys())
                    : ((e) => {
                          for (let t = 0; t < e.length; t++)
                              e[t].classList.add("disabled");
                      })(n.operator_keys())
                : "p" === t
                ? -1 !== e.indexOf(t)
                    ? n.btn_period().classList.remove("disabled")
                    : n.btn_period().classList.add("disabled")
                : "e" === t &&
                  (-1 !== e.indexOf(t)
                      ? n.btn_equal().classList.remove("disabled")
                      : n.btn_equal().classList.add("disabled"));
        });
    }
    let i = "highlighted-node",
        r = "spotlight-node",
        d = "highlighted-edge",
        a = "spotlight-edge";
    function s(e) {
        n[`node${e}`]().classList.add(i),
            ((e) => {
                for (let t = 0; t < e.length; t++) e[t].classList.add(d);
            })(n[`edgesFrom${e}`]()),
            (function (e) {
                n[`node${e}`]().classList.remove(r),
                    ((e) => {
                        for (let t = 0; t < e.length; t++)
                            e[t].classList.remove(a);
                    })(n[`edgesFrom${e}`]());
            })(e);
    }
    function l(e) {
        n[`node${e}`]().classList.remove(i),
            ((e) => {
                for (let t = 0; t < e.length; t++) e[t].classList.remove(d);
            })(n[`edgesFrom${e}`]());
    }
    function u(e) {
        for (let t = 0; t < 5; t++) t === e ? s(e) : l(t);
    }
    let b = 0,
        c = "",
        g = ["digit"],
        f = !1;
    function p(e = null) {
        null !== e && k(e), o("d"), (b = 0), u(b), (g = ["digit"]);
    }
    function y(e) {
        k(e),
            o("dope"),
            (b = 1),
            u(b),
            (g = ["digit", "operator", "period(.)", "equal"]);
    }
    function m(e) {
        k(e), o("doe"), (b = 3), u(b), (g = ["digit", "operator", "equal"]);
    }
    function _() {
        let e = new Function(`return ${c};`)();
        "number" == typeof e && isFinite(e) && !isNaN(e)
            ? ((c = String(Number(e.toFixed(6)))),
              v(c),
              o("o"),
              (b = 4),
              u(b),
              (g = ["operator"]))
            : (h(), alert("Mathematically impossible operation"));
    }
    function v(e = null) {
        n.answer_container().innerHTML =
            null === e ? "" : `<span class="ans-element">${e}</span>`;
    }
    function k(e) {
        let t = document.createElement("span");
        var o;
        t.setAttribute("class", "ans-element"),
            (t.innerText = "*" === e ? "×" : e),
            (o = n.answer_container()).append(t),
            (o.scrollLeft = o.scrollWidth),
            (c += e);
    }
    function h() {
        (c = ""), p(), v();
    }
    function L() {
        var e;
        (n.warning_tag().innerText = `Expected input${
            1 === (e = g).length ? " is" : "s are"
        } ${e.join(", ")}${1 === e.length ? " only" : ""}.`),
            (f = !0),
            setTimeout(() => {
                (n.warning_tag().innerText = ""), (f = !1);
            }, 1500);
        for (let e = 0; e < 12; e++)
            e % 2 == 0
                ? setTimeout(() => {
                      var e;
                      n[`node${(e = b)}`]().classList.add(r),
                          ((e) => {
                              for (let t = 0; t < e.length; t++)
                                  e[t].classList.add(a);
                          })(n[`edgesFrom${e}`]()),
                          l(e);
                  }, 125 * e)
                : setTimeout(() => {
                      s(b);
                  }, 125 * e);
    }
    function K(e) {
        if (1 === e.length && !f) {
            let t;
            -1 !== "0123456789".indexOf(e)
                ? (t = "d")
                : -1 !== "/*+-".indexOf(e)
                ? (t = "o")
                : "." === e
                ? (t = "p")
                : "=" === e
                ? (t = "e")
                : "c" === e && (t = "c"),
                void 0 !== t
                    ? "c" === t
                        ? h()
                        : 0 === b
                        ? "d" === t
                            ? y(e)
                            : L()
                        : 1 === b
                        ? "d" === t
                            ? y(e)
                            : "o" === t
                            ? p(e)
                            : "p" === t
                            ? (k(e), o("d"), (b = 2), u(b), (g = ["digit"]))
                            : "e" === t
                            ? _()
                            : L()
                        : 2 === b
                        ? "d" === t
                            ? m(e)
                            : L()
                        : 3 === b
                        ? "d" === t
                            ? m(e)
                            : "o" === t
                            ? p(e)
                            : "e" === t
                            ? _()
                            : L()
                        : 4 === b && ("o" === t ? p(e) : L())
                    : void 0 === t && L();
        }
    }
    ((e) => {
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            n.addEventListener("click", (e) => {
                e.preventDefault(), K(n.getAttribute("btn-value"));
            });
        }
    })(n.digit_keys()),
        ((e) => {
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                n.addEventListener("click", (e) => {
                    e.preventDefault(), K(n.getAttribute("btn-value"));
                });
            }
        })(n.operator_keys()),
        n.btn_clear().addEventListener("click", (e) => {
            e.preventDefault(), K(n.btn_clear().getAttribute("btn-value"));
        }),
        n.btn_period().addEventListener("click", (e) => {
            e.preventDefault(), K(n.btn_period().getAttribute("btn-value"));
        }),
        n.btn_equal().addEventListener("click", (e) => {
            e.preventDefault(), K(n.btn_equal().getAttribute("btn-value"));
        });
    const x = "0123456789/*+-=.".split("");
    function E(e = !1) {
        let t =
            "Here are the key mappings you can use:\n\nKey 's' or 'S': To share this page\nKey 'c' or 'C' : Clear button\nKey '0' : 0 button\nKey '1' : 1 button\nKey '2' : 2 button\nKey '3' : 3 button\nKey '4' : 4 button\nKey '5' : 5 button\nKey '6' : 6 button\nKey '7' : 7 button\nKey '8' : 8 button\nKey '9' : 9 button\nKey '/' : Division button\nKey '*' or 'x' or 'X' : Multiplication button\nKey '+' : Addition button\nKey '-' : Subtraction button\nKey '.' : Period button\nKey '=' or 'Enter key' : Equal button\nKey 'k' or 'K' : To see key mappings\n";
        if (!e) return t;
        alert(t);
    }
    document.addEventListener("keypress", (e) => {
        e.preventDefault();
        for (let t = 0; t < x.length; t++) {
            const n = x[t];
            if (e.key === n) return void K(n);
        }
        -1 !== "xX".indexOf(e.key)
            ? K("*")
            : -1 !== "cC".indexOf(e.key)
            ? K("c")
            : "Enter" === e.key
            ? K("=")
            : -1 !== "kK".indexOf(e.key)
            ? E(!0)
            : -1 !== "sS".indexOf(e.key) &&
              new Function(
                  "try{sharer.open();}catch(error){console.log(error);}"
              )();
    }),
        window.addEventListener("load", function () {
            setTimeout(() => {
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ) ||
                    (alert(
                        `Looks like you are on a Desktop computer.\n\n${E()}`
                    ),
                    alert(
                        "If you need to see key mappings again, then press 'k' or 'K' key."
                    ));
            }, 500);
        });
})();