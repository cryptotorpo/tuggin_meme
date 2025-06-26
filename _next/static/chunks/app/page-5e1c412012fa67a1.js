(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1063: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => C });
      var n = a(5155),
        s = a(2115);
      let l = (0, s.createContext)(null);
      function i(e) {
        let { children: t } = e,
          [a, i] = (0, s.useState)(!1),
          r = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(
            () => (
              (r.current = new Audio("/musicmp3.mp3")),
              (r.current.loop = !0),
              (r.current.volume = 0.5),
              () => {
                r.current && (r.current.pause(), (r.current = null));
              }
            ),
            []
          ),
          (0, n.jsx)(l.Provider, {
            value: {
              isPlaying: a,
              toggleMusic: () => {
                r.current && (a ? r.current.pause() : r.current.play(), i(!a));
              },
              startMusic: () => {
                r.current && (r.current.play(), i(!0));
              },
            },
            children: t,
          })
        );
      }
      function r() {
        let e = (0, s.useContext)(l);
        if (!e) throw Error("useMusic must be used within a MusicProvider");
        return e;
      }
      var c = a(6766);
      let o = [
        "/Goonin/Goonin_v01_SLOWER_00001.png",
        "/Goonin/Goonin_v01_SLOWER_00002.png",
        "/Goonin/Goonin_v01_SLOWER_00003.png",
        "/Goonin/Goonin_v01_SLOWER_00004.png",
        "/Goonin/Goonin_v01_SLOWER_00005.png",
        "/Goonin/Goonin_v01_SLOWER_00006.png",
        "/Goonin/Goonin_v01_SLOWER_00007.png",
        "/Goonin/Goonin_v01_SLOWER_00008.png",
      ];
      function x(e) {
        let { isAnimating: t } = e,
          [a, l] = (0, s.useState)(0),
          [i, r] = (0, s.useState)(!1),
          x = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(
            () => (
              t && !i
                ? (x.current = setInterval(() => {
                    l((e) => (e + 1) % o.length);
                  }, 20))
                : (x.current && clearInterval(x.current), t || l(0)),
              () => {
                x.current && clearInterval(x.current);
              }
            ),
            [t, i]
          ),
          (0, n.jsx)("div", {
            className:
              "fixed bottom-0 right-0 z-30 w-[280px] h-[280px]                    /* Mobile default */ sm:w-[320px] sm:h-[320px]              /* Small screens (640px+) */ md:w-[380px] md:h-[380px]              /* Medium screens (768px+) */ lg:w-[420px] lg:h-[420px]              /* Large screens/Laptop (1024px+) */ xl:w-[500px] xl:h-[500px]              /* Extra large/Desktop (1280px+) */ 2xl:w-[600px] 2xl:h-[600px]            /* 2XL screens (1536px+) */ 3xl:w-[700px] 3xl:h-[700px]            /* 4K and ultra-wide (1920px+) */ ",
            onMouseEnter: () => {
              r(!0);
            },
            onMouseLeave: () => {
              r(!1);
            },
            children: (0, n.jsx)(c.default, {
              src: o[a],
              alt: "Character",
              fill: !0,
              className: "object-contain",
              priority: !0,
            }),
          })
        );
      }
      function d(e) {
        let { children: t, identifier: a, className: l = "", onClick: i } = e,
          r = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (!r.current) return;
            let e = 3 * Math.random() + 2,
              t = 3 * Math.random() + 2,
              n = 3 * Math.random() + 6,
              s = -7 * Math.random(),
              l = "\n      @keyframes float-"
                .concat(
                  a,
                  " {\n        0% {\n          transform: translate(0, 0);\n        }\n        25% {\n          transform: translate("
                )
                .concat(e, "px, ")
                .concat(
                  -t,
                  "px);\n        }\n        50% {\n          transform: translate("
                )
                .concat(-e, "px, ")
                .concat(
                  t,
                  "px);\n        }\n        75% {\n          transform: translate("
                )
                .concat(-e, "px, ")
                .concat(
                  -t,
                  "px);\n        }\n        100% {\n          transform: translate(0, 0);\n        }\n      }\n    "
                ),
              i = document.createElement("style");
            (i.textContent = l), document.head.appendChild(i);
            let c = r.current;
            return (
              (c.style.animation = "float-"
                .concat(a, " ")
                .concat(n, "s infinite cubic-bezier(0.4, 0, 0.2, 1)")),
              (c.style.animationDelay = "".concat(s, "s")),
              () => {
                i.remove();
              }
            );
          }, [a]),
          (0, n.jsx)("div", {
            ref: r,
            className: "relative transition-transform duration-500 ".concat(l),
            onClick: i,
            children: t,
          })
        );
      }
      function m(e) {
        let { onStart: t } = e,
          { startMusic: a } = r();
        return (0, n.jsxs)("div", {
          className:
            "min-h-screen w-full bg-white fixed inset-0 z-50 transition-opacity duration-500",
          children: [
            (0, n.jsx)(x, { isAnimating: !1 }),
            (0, n.jsx)("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: (0, n.jsx)(d, {
                identifier: "start-button",
                className: "cursor-pointer hover:scale-105",
                onClick: () => {
                  a(), t();
                },
                children: (0, n.jsx)(c.default, {
                  src: "/start.png",
                  alt: "Start to tuggin",
                  width: 0,
                  height: 0,
                  className:
                    "w-[250px] sm:w-[270px] md:w-[300px] lg:w-[380px] h-auto",
                  sizes:
                    "(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px",
                  priority: !0,
                }),
              }),
            }),
          ],
        });
      }
      var h = a(6874),
        p = a.n(h);
      function u(e) {
        let { isOpen: t, onClose: a, type: l } = e,
          [i, r] = (0, s.useState)(!1),
          [o, x] = (0, s.useState)(!1),
          m = "0x69c664ef9a848909b65c2947c0cecdfaf6135596";
        if (
          ((0, s.useEffect)(() => {
            t ? r(!0) : setTimeout(() => r(!1), 300);
          }, [t]),
          !i && !t)
        )
          return null;
        let h = async () => {
          try {
            await navigator.clipboard.writeText(m),
              x(!0),
              setTimeout(() => x(!1), 2e3);
          } catch (e) {
            console.error("Failed to copy text: ", e);
          }
        };
        return (0, n.jsx)("div", {
          className:
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center\n        transition-all duration-300 ".concat(
              t ? "opacity-100" : "opacity-0"
            ),
          onClick: a,
          children: (0, n.jsxs)(d, {
            identifier: "modal-".concat(l),
            className:
              " rounded-3xl p-8 max-w-[90%] w-[600px] \n          max-h-[90vh] overflow-y-auto relative transition-all duration-300 transform\n          ".concat(
                t ? "scale-100 opacity-100" : "scale-95 opacity-0"
              ),
            onClick: (e) => {
              e.stopPropagation();
            },
            children: [
              (0, n.jsx)("button", {
                onClick: a,
                className:
                  "absolute top-4 right-4 text-white text-xl font-bold hover:opacity-80 transition-opacity",
                children: "✕",
              }),
              (0, n.jsx)("div", {
                className: "text-white space-y-6",
                children:
                  "howToBuy" === l
                    ? (0, n.jsxs)("div", {
                        className:
                          "font-annie text-white space-y-8 text-lg md:text-xl lg:text-2xl max-w-4xl",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-stretch gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/metamask.webp",
                                  alt: "MetaMask",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, n.jsx)("h3", {
                                    className:
                                      "font-bold text-xl md:text-2xl lg:text-3xl",
                                    children: "Create a MetaMask Wallet:",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "text-base md:text-lg lg:text-xl",
                                    children:
                                      "Download and set up a MetaMask Wallet.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-stretch gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/eth.webp",
                                  alt: "Ethereum",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, n.jsx)("h3", {
                                    className:
                                      "font-bold text-xl md:text-2xl lg:text-3xl",
                                    children: "Get some ETH:",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "text-base md:text-lg lg:text-xl",
                                    children:
                                      "Buy ETH on an exchange and transfer it to the wallet.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-stretch gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/uniswap.webp",
                                  alt: "Uniswap",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, n.jsx)("h3", {
                                    className:
                                      "font-bold text-xl md:text-2xl lg:text-3xl",
                                    children: "Connect to Uniswap:",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "text-base md:text-lg lg:text-xl",
                                    children: "Connect your wallet to Uniswap",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-stretch gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/swap.webp",
                                  alt: "Swap",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                  (0, n.jsx)("h3", {
                                    className:
                                      "font-bold text-xl md:text-2xl lg:text-3xl",
                                    children: "Swap ETH for TUGGIN:",
                                  }),
                                  (0, n.jsx)("p", {
                                    className:
                                      "text-base md:text-lg lg:text-xl",
                                    children:
                                      "Enter the contract address and exchange ETH to TUGGIN..",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex items-center justify-center gap-3 mt-12 text-sm md:text-base lg:text-lg uppercase",
                            children: [
                              (0, n.jsx)("span", { children: m }),
                              (0, n.jsx)("button", {
                                onClick: h,
                                className:
                                  "hover:opacity-80 transition-opacity bg-white/20 p-2 rounded",
                                children: o
                                  ? (0, n.jsx)("span", {
                                      className: "text-green-300 text-lg",
                                      children: "✓",
                                    })
                                  : (0, n.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      strokeWidth: 1.5,
                                      stroke: "currentColor",
                                      className: "w-5 h-5",
                                      children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75",
                                      }),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, n.jsxs)("div", {
                        className:
                          "font-annie text-white space-y-8 text-lg md:text-xl lg:text-2xl",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/supply.webp",
                                  alt: "Supply",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                children: (0, n.jsx)("h3", {
                                  className:
                                    "font-bold text-xl md:text-2xl lg:text-3xl",
                                  children: "Supply: 1,000,000,000 $TUGGIN",
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/tax.webp",
                                  alt: "Tax",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                children: (0, n.jsx)("h3", {
                                  className:
                                    "font-bold text-xl md:text-2xl lg:text-3xl",
                                  children: "Tax: 0/0",
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/burn.webp",
                                  alt: "Brun",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                children: (0, n.jsx)("h3", {
                                  className:
                                    "font-bold text-xl md:text-2xl lg:text-3xl",
                                  children: "LP Burned \uD83D\uDD25",
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-16 flex-shrink-0",
                                children: (0, n.jsx)(c.default, {
                                  src: "/contract.webp",
                                  alt: "Contract",
                                  width: 100,
                                  height: 100,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                children: (0, n.jsx)("h3", {
                                  className:
                                    "font-bold text-xl md:text-2xl lg:text-3xl",
                                  children: "Contract Renounced",
                                }),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "bg-white/10 p-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white/20 transition-colors mt-4",
                            onClick: h,
                            children: [
                              (0, n.jsx)("code", {
                                className: "text-sm break-all",
                                children: m,
                              }),
                              (0, n.jsx)("span", {
                                className: "ml-2 text-sm",
                                children: o ? "✓ Copied!" : "Copy",
                              }),
                            ],
                          }),
                        ],
                      }),
              }),
            ],
          }),
        });
      }
      function f(e) {
        let { name: t, onClick: a } = e,
          [l, i] = (0, s.useState)(!1),
          r = (0, s.useRef)(null),
          o = t.toLowerCase().replace(/\s+/g, "_");
        return (
          (0, s.useEffect)(() => {
            if (!r.current) return;
            let e = 3 * Math.random() + 2,
              t = 3 * Math.random() + 2,
              a = 3 * Math.random() + 6,
              n = -7 * Math.random(),
              s = "\n      @keyframes float-"
                .concat(
                  o,
                  " {\n        0% {\n          transform: translate(0, 0);\n        }\n        25% {\n          transform: translate("
                )
                .concat(e, "px, ")
                .concat(
                  -t,
                  "px);\n        }\n        50% {\n          transform: translate("
                )
                .concat(-e, "px, ")
                .concat(
                  t,
                  "px);\n        }\n        75% {\n          transform: translate("
                )
                .concat(-e, "px, ")
                .concat(
                  -t,
                  "px);\n        }\n        100% {\n          transform: translate(0, 0);\n        }\n      }\n    "
                ),
              l = document.createElement("style");
            (l.textContent = s), document.head.appendChild(l);
            let i = r.current;
            return (
              (i.style.animation = "float-"
                .concat(o, " ")
                .concat(a, "s infinite cubic-bezier(0.4, 0, 0.2, 1)")),
              (i.style.animationDelay = "".concat(n, "s")),
              () => {
                l.remove();
              }
            );
          }, [o]),
          (0, n.jsx)("div", {
            ref: r,
            className:
              "relative cursor-pointer transition-transform duration-500",
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            onClick: a,
            children: (0, n.jsx)(c.default, {
              src: "/menu/"
                .concat(o, "_menu")
                .concat(l ? "_orange" : "", ".png"),
              alt: t,
              width: 0,
              height: 0,
              sizes:
                "(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, (max-width: 1280px) 350px, 400px",
              className:
                "w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto transition-opacity duration-500",
              priority: !0,
            }),
          })
        );
      }
      let g = [
          { name: "HOW TO BUY", href: "#buy" },
          { name: "TOKENOMICS", href: "#contact" },
          {
            name: "UNISWAP",
            href: "https://app.uniswap.org/explore/tokens/ethereum/0x69c664ef9a848909b65c2947c0cecdfaf6135596",
          },
        ],
        w = () => {
          let [e, t] = (0, s.useState)({ isOpen: !1, type: "howToBuy" }),
            a = (e) => {
              t({ isOpen: !0, type: e });
            },
            l = (e) => {
              "HOW TO BUY" === e.name
                ? a("howToBuy")
                : "TOKENOMICS" === e.name
                ? a("tokenomics")
                : "UNISWAP" === e.name && window.open(e.href, "_blank");
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("header", {
                className: "fixed left-6 md:left-8 lg:left-12 z-50",
                children: [
                  (0, n.jsx)("div", {
                    className: "pt-6",
                    children: (0, n.jsx)(d, {
                      identifier: "main-logo",
                      className: "block mb-12 md:mb-0",
                      children: (0, n.jsx)(p(), {
                        href: "/",
                        children: (0, n.jsx)(c.default, {
                          src: "/tuggin.png",
                          alt: "TUGGIN",
                          width: 0,
                          height: 0,
                          sizes:
                            "(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px",
                          className:
                            "w-[250px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto",
                          priority: !0,
                        }),
                      }),
                    }),
                  }),
                  (0, n.jsx)("nav", {
                    className: "md:fixed md:top-1/2 md:-translate-y-1/2",
                    children: (0, n.jsx)("div", {
                      className: "flex flex-col gap-6 md:gap-8 lg:gap-10",
                      children: g.map((e) =>
                        (0, n.jsx)(
                          f,
                          { name: e.name, onClick: () => l(e) },
                          e.name
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "fixed right-6 md:right-8 lg:right-12 top-6 z-50",
                children: (0, n.jsx)(d, {
                  identifier: "next-button",
                  className: "cursor-pointer hover:scale-110",
                  onClick: () => {
                    let e = document.querySelector('[aria-label="Next image"]');
                    e instanceof HTMLElement && e.click();
                  },
                  children: (0, n.jsx)(c.default, {
                    src: "/next.png",
                    alt: "Next",
                    width: 0,
                    height: 0,
                    sizes:
                      "(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px",
                    className: "w-[52px] md:w-[100px] lg:w-[120px] h-auto",
                  }),
                }),
              }),
              (0, n.jsx)(u, {
                isOpen: e.isOpen,
                onClose: () => {
                  t((e) => ({ ...e, isOpen: !1 }));
                },
                type: e.type,
              }),
            ],
          });
        },
        j = (e) => {
          let t = [...e];
          for (let e = t.length - 1; e > 0; e--) {
            let a = Math.floor(Math.random() * (e + 1));
            [t[e], t[a]] = [t[a], t[e]];
          }
          return t;
        },
        N = (e) =>
          new Promise((t) => {
            let a = new window.Image();
            (a.onload = () => t(!0)), (a.onerror = () => t(!1)), (a.src = e);
          }),
        v = async () => {
          let e = [],
            t = 1;
          for (;;) {
            let a = "/gallery/".concat(t, ".webp");
            if (await N(a)) e.push(a), t++;
            else break;
          }
          return e;
        };
      function b() {
        let [e, t] = (0, s.useState)([]),
          [a, l] = (0, s.useState)(0),
          [i, r] = (0, s.useState)(!0);
        return ((0, s.useEffect)(() => {
          (async () => {
            try {
              let e = await v(),
                a = j(e);
              t(a);
            } catch (e) {
              console.error("Error loading gallery images:", e);
            } finally {
              r(!1);
            }
          })();
        }, []),
        (0, s.useEffect)(() => {
          if (0 === e.length) return;
          let t = setInterval(() => {
            l((t) => (t + 1) % e.length);
          }, 1e4);
          return () => clearInterval(t);
        }, [e.length]),
        i || 0 === e.length)
          ? null
          : (0, n.jsxs)("div", {
              className: "fixed inset-0 w-full h-full",
              children: [
                e.map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className:
                        "absolute inset-0 transition-opacity duration-500 ".concat(
                          t === a ? "opacity-100" : "opacity-0"
                        ),
                      children: (0, n.jsx)(c.default, {
                        src: e,
                        alt: "Background ".concat(t + 1),
                        fill: !0,
                        priority: 0 === t,
                        className: "object-cover",
                        sizes: "100vw",
                        quality: 100,
                      }),
                    },
                    e
                  )
                ),
                (0, n.jsx)("button", {
                  onClick: () => {
                    e.length > 0 && l((t) => (t + 1) % e.length);
                  },
                  className: "hidden",
                  "aria-label": "Next image",
                }),
              ],
            });
      }
      let y = [
        { name: "X", icon: "/social/x.png", url: "https://x.com/TugginPepe" },
        {
          name: "Telegram",
          icon: "/social/td.png",
          url: "https://t.me/tuggin_eth",
        },
        {
          name: "DexTools",
          icon: "/social/dextools.png",
          url: "https://www.dextools.io/app/en/ether/pair-explorer/0x69c664ef9a848909b65c2947c0cecdfaf6135596",
        },
        {
          name: "DexScreener",
          icon: "/social/dexscreener.png",
          url: "https://dexscreener.com/ethereum/0x69c664ef9a848909b65c2947c0cecdfaf6135596",
        },
      ];
      function k() {
        let { isPlaying: e, toggleMusic: t } = r();
        return (0, n.jsx)("div", {
          className:
            "fixed left-6 md:left-8 lg:left-12 bottom-6 md:bottom-8 lg:bottom-12 z-50",
          children: (0, n.jsxs)("div", {
            className: "flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-8",
            children: [
              (0, n.jsx)(d, {
                identifier: "music-toggle",
                className:
                  "cursor-pointer hover:scale-110 transition-transform",
                onClick: t,
                children: (0, n.jsx)(c.default, {
                  src: e ? "/social/pause.png" : "/social/play.png",
                  alt: e ? "Pause music" : "Play music",
                  width: 100,
                  height: 100,
                  className:
                    "w-[55px] h-[55px] sm:w-[55px] sm:h-[55px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]",
                  sizes:
                    "(max-width: 640px) 40px, (max-width: 768px) 50px, (max-width: 1024px) 80px, 100px",
                }),
              }),
              y.map((e) =>
                (0, n.jsx)(
                  d,
                  {
                    identifier: "social-".concat(e.name.toLowerCase()),
                    className:
                      "cursor-pointer hover:scale-110 transition-transform",
                    children: (0, n.jsx)("a", {
                      href: e.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, n.jsx)(c.default, {
                        src: e.icon,
                        alt: e.name,
                        width: 100,
                        height: 100,
                        className:
                          "w-[55px] h-[55px] sm:w-[55px] sm:h-[55px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]",
                        sizes:
                          "(max-width: 640px) 40px, (max-width: 768px) 50px, (max-width: 1024px) 80px, 100px",
                      }),
                    }),
                  },
                  e.name
                )
              ),
            ],
          }),
        });
      }
      function _() {
        return (0, n.jsxs)("main", {
          className: "min-h-screen relative",
          children: [
            (0, n.jsx)(b, {}),
            (0, n.jsx)("div", {
              className: "relative",
              children: (0, n.jsx)(w, {}),
            }),
            (0, n.jsx)(x, { isAnimating: !0 }),
            (0, n.jsx)(k, {}),
          ],
        });
      }
      function C() {
        return (0, n.jsx)(i, { children: (0, n.jsx)(E, {}) });
      }
      function E() {
        let [e, t] = (0, s.useState)(!0);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: e
                ? "opacity-0"
                : "opacity-100 transition-opacity duration-300",
              children: (0, n.jsx)(_, {}),
            }),
            e &&
              (0, n.jsx)("div", {
                className: "loading-screen",
                children: (0, n.jsx)(m, {
                  onStart: () => {
                    let e = document.querySelector(".loading-screen");
                    null == e || e.classList.add("opacity-0"),
                      setTimeout(() => {
                        t(!1);
                      }, 500);
                  },
                }),
              }),
          ],
        });
      }
    },
    7676: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 1063));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [874, 766, 441, 684, 358], () => t(7676)), (_N_E = e.O());
  },
]);
