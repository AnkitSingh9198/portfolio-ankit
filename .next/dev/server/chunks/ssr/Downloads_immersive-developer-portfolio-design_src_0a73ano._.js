module.exports = [
"[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor,
    "IntroLoader",
    ()=>IntroLoader,
    "ParticleGrid",
    ()=>ParticleGrid,
    "Spotlight",
    ()=>Spotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function IntroLoader({ onDone }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gone, setGone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (reduce) {
            onDone();
            return;
        }
        const t0 = performance.now();
        const id = setInterval(()=>{
            const p = Math.min(1, (performance.now() - t0) / 1400);
            setCount(Math.floor(p * 100));
            if (p >= 1) {
                clearInterval(id);
                setTimeout(()=>{
                    setGone(true);
                    setTimeout(onDone, 650);
                }, 180);
            }
        }, 30);
        return ()=>clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !gone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[100] flex flex-col justify-between bg-[#070809] p-6 md:p-10",
            exit: {
                y: "-100%",
                transition: {
                    duration: 0.65,
                    ease: [
                        0.76,
                        0,
                        0.24,
                        1
                    ]
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between font-mono2 text-[11px] tracking-[0.3em] text-[#6b7280] uppercase",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Ankit Singh — Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:block",
                            children: "Beyond the Interface"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#d7ff3e]",
                            children: "v2.0 / 2026"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-none tracking-tight",
                            children: [
                                count,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d7ff3e]",
                                    children: "%"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 hidden max-w-[240px] text-right font-mono2 text-[11px] leading-relaxed tracking-[0.18em] text-[#6b7280] uppercase md:block",
                            children: [
                                "Loading digital mind",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                "React · Node · Mongo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[2px] w-full overflow-hidden bg-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-[#d7ff3e] transition-all duration-75",
                        style: {
                            width: `${count}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            y: "100%"
                        },
                        animate: {
                            y: 0
                        },
                        className: "font-display text-lg uppercase tracking-tight text-[#a7adb5] md:text-xl",
                        children: [
                            "Initializing experience",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-blink text-[#d7ff3e]",
                                children: "_"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                                lineNumber: 65,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function CustomCursor() {
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (window.matchMedia("(pointer: coarse)").matches) return;
        let raf = 0;
        let mx = -100, my = -100, rx = -100, ry = -100;
        const move = (e)=>{
            mx = e.clientX;
            my = e.clientY;
            setVisible(true);
            const t = e.target;
            setHovering(!!t.closest("a,button,[data-hover]"));
        };
        const loop = ()=>{
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
            if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) scale(${hovering ? 1.9 : 1})`;
            raf = requestAnimationFrame(loop);
        };
        window.addEventListener("mousemove", move, {
            passive: true
        });
        raf = requestAnimationFrame(loop);
        return ()=>{
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(raf);
        };
    }, [
        hovering
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-[90] hidden [@media(pointer:fine)]:block",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "absolute left-0 top-0 h-9 w-9 rounded-full border border-[#d7ff3e]/60 transition-[border-color] duration-300",
                style: {
                    opacity: visible ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "absolute left-0 top-0 h-[6px] w-[6px] rounded-full bg-[#d7ff3e]",
                style: {
                    opacity: visible ? 1 : 0
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function ParticleGrid({ className }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let raf = 0;
        let w = 0, h = 0;
        let mx = -9999, my = -9999;
        const DPR = Math.min(2, window.devicePixelRatio || 1);
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let pts = [];
        function resize() {
            const rect = canvas.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = w * DPR;
            canvas.height = h * DPR;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            const gap = w < 640 ? 34 : 44;
            pts = [];
            for(let x = gap / 2; x < w; x += gap){
                for(let y = gap / 2; y < h; y += gap){
                    pts.push({
                        bx: x,
                        by: y,
                        x,
                        y,
                        vx: (Math.random() - 0.5) * 0.25,
                        vy: (Math.random() - 0.5) * 0.25,
                        r: Math.random() * 1.4 + 0.4
                    });
                }
            }
            if (reduced) draw(0);
        }
        function draw(t) {
            ctx.clearRect(0, 0, w, h);
            // connections
            ctx.lineWidth = 1;
            for(let i = 0; i < pts.length; i++){
                const p = pts[i];
                if (!reduced) {
                    p.x += p.vx + Math.sin(t / 1600 + p.bx / 60) * 0.08;
                    p.y += p.vy + Math.cos(t / 1800 + p.by / 60) * 0.08;
                    // spring back
                    p.x += (p.bx - p.x) * 0.008;
                    p.y += (p.by - p.y) * 0.008;
                }
                const dx = mx - p.x, dy = my - p.y;
                const d = Math.hypot(dx, dy);
                const glow = d < 170 ? 1 - d / 170 : 0;
                if (glow > 0.02) {
                    ctx.fillStyle = `rgba(215,255,62,${0.12 + glow * 0.75})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r + glow * 2.2, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillStyle = "rgba(244,241,232,0.13)";
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            // sparse links near cursor
            ctx.strokeStyle = "rgba(215,255,62,0.14)";
            for(let i = 0; i < pts.length; i += 3){
                const p = pts[i];
                const d = Math.hypot(mx - p.x, my - p.y);
                if (d < 130) {
                    for(let j = i + 3; j < Math.min(pts.length, i + 24); j += 3){
                        const q = pts[j];
                        const dd = Math.hypot(p.x - q.x, p.y - q.y);
                        if (dd < 52) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(q.x, q.y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }
        function loop(t) {
            draw(t);
            if (!reduced && !document.hidden) raf = requestAnimationFrame(loop);
            else if (!reduced) raf = requestAnimationFrame(loop);
        }
        const onMove = (e)=>{
            const r = canvas.getBoundingClientRect();
            mx = e.clientX - r.left;
            my = e.clientY - r.top;
        };
        const onLeave = ()=>{
            mx = -9999;
            my = -9999;
        };
        resize();
        raf = requestAnimationFrame(loop);
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", onMove, {
            passive: true
        });
        document.addEventListener("mouseleave", onLeave);
        const vis = ()=>{
            if (!document.hidden && !reduced) {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(loop);
            }
        };
        document.addEventListener("visibilitychange", vis);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("visibilitychange", vis);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: className,
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
        lineNumber: 233,
        columnNumber: 10
    }, this);
}
function Spotlight() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let raf = 0;
        let tx = window.innerWidth / 2, ty = 260, x = tx, y = ty;
        const onMove = (e)=>{
            tx = e.clientX;
            ty = e.clientY;
        };
        const loop = ()=>{
            x += (tx - x) * 0.07;
            y += (ty - y) * 0.07;
            if (ref.current) ref.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
            raf = requestAnimationFrame(loop);
        };
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.addEventListener("pointermove", onMove, {
                passive: true
            });
            raf = requestAnimationFrame(loop);
        }
        return ()=>{
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "aria-hidden": true,
        className: "pointer-events-none fixed left-0 top-0 z-[1] hidden md:block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,62,0.07)_0%,transparent_65%)]"
        }, void 0, false, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "additionalProjects",
    ()=>additionalProjects,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "labLayers",
    ()=>labLayers,
    "navLinks",
    ()=>navLinks,
    "principles",
    ()=>principles,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skillGroups",
    ()=>skillGroups
]);
const profile = {
    name: "Ankit Singh",
    firstName: "Ankit",
    lastName: "Singh",
    title: "Full Stack Developer",
    tagline: "React.js · TypeScript · Node.js · Express.js · MongoDB",
    location: "Noida, Uttar Pradesh, India",
    phone: "+91 8586846184",
    phoneHref: "tel:+918586846184",
    email: "ankitsingh110198@gmail.com",
    linkedin: "https://linkedin.com/in/ankit-singh-32371a167",
    linkedinLabel: "linkedin.com/in/ankit-singh-32371a167",
    availability: "Available for opportunities",
    heroHeadline: [
        "I BUILD",
        "DIGITAL",
        "EXPERIENCES",
        "THAT MOVE",
        "PEOPLE."
    ],
    heroSub: "Full Stack Developer crafting performant, scalable, and beautifully engineered web experiences.",
    summary: "Full Stack Developer with ~2 years of professional experience building and deploying production web and mobile applications with React.js, React Native, TypeScript, Node.js, Express.js and MongoDB. I ship platforms across healthcare, insurance, e-commerce and hospitality — from a WebRTC consultation portal to multi-insurer API integrations — with a focus on clean REST design, secure auth, and cloud deployment.",
    summaryLong: [
        "I work across the full stack — from pixel-accurate React interfaces translated out of Figma, to Express APIs with JWT auth and role-based access, to MongoDB schemas and aggregation pipelines that stay fast in production.",
        "At LYB Technology and Aeron Digital Solution I have owned end-to-end features: schema design to deployment on Vercel, Render and Hostinger, with Git-based release workflows, lazy loading, code splitting and query optimization.",
        "I care about readable, maintainable code, responsive interfaces that feel instant, and systems that recover gracefully when networks fail."
    ],
    stats: [
        {
            value: "~2",
            label: "Years shipping production apps"
        },
        {
            value: "10+",
            label: "Platforms & client products delivered"
        },
        {
            value: "04",
            label: "Insurer APIs integrated live"
        },
        {
            value: "03",
            label: "Domains — health, insurance, commerce"
        }
    ]
};
const skillGroups = [
    {
        id: "frontend",
        index: "01",
        title: "Frontend",
        caption: "Interfaces people touch",
        stack: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "React Native"
        ],
        details: [
            {
                name: "React.js + Hooks",
                desc: "Reusable components, hooks, Context & Redux Toolkit state. Pixel-accurate Figma-to-code builds."
            },
            {
                name: "Next.js",
                desc: "App Router, SSR/SSG, routing & code-splitting for fast, SEO-friendly production sites."
            },
            {
                name: "TypeScript",
                desc: "Typed props, API contracts and domain models that catch bugs before runtime."
            },
            {
                name: "React Native",
                desc: "Companion clinic & user apps sharing the same REST APIs and auth layer as web."
            },
            {
                name: "Styling & UX",
                desc: "Responsive design, Bootstrap, modern CSS — interfaces that hold up on any viewport."
            }
        ]
    },
    {
        id: "backend",
        index: "02",
        title: "Backend",
        caption: "Systems that stay up",
        stack: [
            "Node.js",
            "Express.js",
            "REST API Design",
            "JWT Auth",
            "WebRTC",
            "Socket.IO"
        ],
        details: [
            {
                name: "Node.js + Express.js",
                desc: "Structured REST APIs with validation, error handling and role-based access control."
            },
            {
                name: "JWT Authentication",
                desc: "Separate B2C / B2B auth flows with role-based routing for patients, doctors, clinics & partners."
            },
            {
                name: "WebRTC + Socket.IO",
                desc: "Signalling layer, offer/answer negotiation, ICE exchange, ringing → accept → mute → reconnect."
            },
            {
                name: "Integrations",
                desc: "Third-party & payment gateway integrations with retries, logging and failure recovery."
            }
        ]
    },
    {
        id: "data",
        index: "03",
        title: "Data & Infra",
        caption: "Data that stays correct",
        stack: [
            "MongoDB",
            "Mongoose",
            "Aggregation Pipelines",
            "Git & GitHub",
            "Vercel",
            "Render",
            "Hostinger"
        ],
        details: [
            {
                name: "MongoDB + Mongoose",
                desc: "Schema design for consultations, chat history, call logs, appointments, policies & orders."
            },
            {
                name: "Aggregation Pipelines",
                desc: "Query optimization for dashboards, search, filters and status tracking at scale."
            },
            {
                name: "Deployment",
                desc: "Vercel, Render & Hostinger with env config and Git-based release workflows."
            },
            {
                name: "Practices",
                desc: "Agile delivery, code review, Postman-tested APIs, Cursor / VS Code, performance optimization."
            }
        ]
    }
];
const projects = [
    {
        id: "drdermat",
        index: "01",
        name: "Dr Dermat",
        category: "Healthcare · Real-Time Consultation Platform",
        url: "https://drdermat.com",
        urlLabel: "drdermat.com",
        year: "2024 — Present",
        description: "A healthcare platform combining e-commerce, doctor/clinic portals and a WebRTC one-to-one chat, audio & video consultation portal — with companion Clinic and User apps in React Native.",
        contributions: [
            "Built WebRTC signalling: peer lifecycle, offer/answer negotiation, ICE exchange, media-stream handling",
            "Full call-state machine — ringing, accept, reject, end, mute, camera toggle — with reconnection & network-failure recovery",
            "E-commerce module: catalogue, search/filters, cart, checkout, payments, order tracking",
            "Doctor/clinic portal: onboarding, appointments, patient records, prescriptions",
            "Multi-profile accounts — family/patient profiles under one login; B2C + B2B auth with role-based routing",
            "Role-based admin panel + MongoDB models for consultations, chat history and call logs"
        ],
        stack: [
            "React.js",
            "React Native",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "WebRTC",
            "Socket.IO",
            "JWT"
        ],
        role: "Full Stack Developer — end-to-end features, API design, real-time layer, deployment",
        accent: "#D7FF3E",
        pattern: "pulse"
    },
    {
        id: "zanifest",
        index: "02",
        name: "Zanifest",
        category: "Insurance Aggregator Portal",
        url: "https://zanifestinsurance.com",
        urlLabel: "zanifestinsurance.com",
        year: "2024 — Present",
        description: "An insurance aggregator normalizing quotes from Zuno, SBI General, ICICI Lombard and GoDigit into one consistent compare-and-buy journey — quote to proposal to KYC to payment to policy.",
        contributions: [
            "Integrated 4 insurer APIs: quote generation, proposal submission, KYC, payment, policy issuance",
            "Unified data layer normalizing varied insurer request/response formats into one comparison UI",
            "Auth tokens, retries, validation, failure handling & logging for a stable quote-to-policy journey",
            "Policy dashboards: search, filters, status tracking, renewals, downloadable documents",
            "Bulk policy upload with file validation, error reporting & batch processing"
        ],
        stack: [
            "React.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "JWT"
        ],
        role: "Full Stack Developer — insurer integrations, unified data layer, dashboards",
        accent: "#7DD3FC",
        pattern: "ledger"
    },
    {
        id: "rsgalaxy",
        index: "03",
        name: "RS Galaxy",
        category: "Hotel Website & Booking System",
        year: "2024",
        description: "Full-stack hotel site delivered end to end: responsive SEO-friendly pages, booking & enquiry flow with availability and date selection, plus a secure admin dashboard for rooms, rates, bookings and enquiries.",
        contributions: [
            "Responsive SEO-friendly pages with booking & enquiry flow",
            "Availability handling & date selection logic",
            "Secure admin dashboard — rooms, rates, bookings, enquiries"
        ],
        stack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs"
        ],
        role: "Full Stack Developer — design to deployment",
        accent: "#FBBF24",
        pattern: "atlas"
    }
];
const additionalProjects = [
    {
        name: "Facebook Leadflow",
        desc: "Lead capture, assignment, status tracking & admin panel."
    },
    {
        name: "Jewellery E-Commerce",
        desc: "Catalogue, cart, checkout & order management."
    },
    {
        name: "Tadoba · Minisafar · Seven Safar",
        desc: "Travel listing, package & enquiry flows."
    }
];
const experience = [
    {
        company: "LYB Technology, Noida",
        role: "Full Stack Developer",
        period: "Feb 2026 — Present",
        current: true,
        points: [
            "Own end-to-end features across React.js, TypeScript, Node.js, Express.js and MongoDB — schema design to production deployment.",
            "Lead ongoing development of Dr Dermat and Zanifest — WebRTC real-time communication & insurer API integrations.",
            "Design REST APIs with JWT auth, role-based access & structured error handling; performance via lazy loading, code splitting, query optimization.",
            "Manage deployments & env config on Vercel, Render and Hostinger with Git-based release workflows."
        ],
        tech: [
            "React.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "WebRTC",
            "Vercel",
            "Render"
        ]
    },
    {
        company: "Aeron Digital Solution, Noida",
        role: "Full Stack Developer",
        period: "Oct 2024 — Jan 2026",
        current: false,
        points: [
            "Built Dr Dermat and Zanifest from the ground up, plus client products across healthcare, insurance, e-commerce and travel.",
            "Translated Figma designs into pixel-accurate responsive interfaces wired to REST APIs and third-party services.",
            "Agile collaboration with designers, backend engineers & QA; AI-assisted tooling to accelerate delivery and review."
        ],
        tech: [
            "React.js",
            "React Native",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "Figma"
        ]
    }
];
const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        school: "RD Engineering College",
        year: "2022"
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        school: "Hierank Business School",
        year: "2019"
    },
    {
        degree: "Front End Developer — Ducat, Noida",
        school: "Professional certification",
        year: "2023 — 24"
    },
    {
        degree: "React and Redux Certification",
        school: "Professional certification",
        year: "2024"
    }
];
const labLayers = [
    {
        id: "ui",
        step: "LAYER 01",
        title: "User Interface",
        tech: "React · Next.js · TypeScript",
        desc: "What people see and touch. Component-driven UI, typed props, responsive layouts, optimistic updates and loading states that keep every interaction under ~100ms of perceived latency.",
        meta: [
            "Components",
            "Hooks",
            "Router",
            "SSR / SSG"
        ]
    },
    {
        id: "api",
        step: "LAYER 02",
        title: "API Layer",
        tech: "REST · JWT · Validation",
        desc: "The contract between worlds. Versioned REST endpoints with JWT auth, role-based guards, request validation and structured errors — so the frontend never has to guess.",
        meta: [
            "REST",
            "RBAC",
            "Zod-style validation",
            "Error envelopes"
        ]
    },
    {
        id: "server",
        step: "LAYER 03",
        title: "Application Server",
        tech: "Node.js · Express.js · Socket.IO",
        desc: "Where business logic lives. Express services plus a Socket.IO / WebRTC signalling layer handling offer-answer negotiation, ICE candidates and reconnection with backoff.",
        meta: [
            "Express",
            "WebRTC signalling",
            "Retries",
            "Logging"
        ]
    },
    {
        id: "data",
        step: "LAYER 04",
        title: "Database",
        tech: "MongoDB · Mongoose",
        desc: "Truth that persists. Mongoose schemas for consultations, policies and orders, indexed queries and aggregation pipelines powering dashboards, search and status tracking.",
        meta: [
            "Schemas",
            "Indexes",
            "Aggregations",
            "Backups"
        ]
    }
];
const principles = [
    {
        n: "01",
        title: "Reusable components, boring in the best way",
        body: "Small, typed, composable React components with clear props. The same building blocks power Dr Dermat web, its admin panel and the React Native apps."
    },
    {
        n: "02",
        title: "APIs that don't surprise you",
        body: "Predictable REST shapes, JWT + role guards, validation at the edge and errors a client can actually handle — retries included."
    },
    {
        n: "03",
        title: "Readable code scales further than clever code",
        body: "Explicit names, narrow functions, schema-first thinking. The next developer (often future-me) should understand a module in one read."
    },
    {
        n: "04",
        title: "Performance is a feature",
        body: "Lazy loading, code splitting, memoized lists, indexed queries.Measured with Lighthouse and Mongo explain plans, not vibes."
    },
    {
        n: "05",
        title: "Accessibility & responsiveness are non-negotiable",
        body: "Keyboard paths, focus states, contrast-checked type, layouts that hold from 320px to ultrawide. Tested on real mid-range devices."
    }
];
const navLinks = [
    {
        href: "#profile",
        label: "Profile",
        index: "01"
    },
    {
        href: "#expertise",
        label: "Stack",
        index: "02"
    },
    {
        href: "#work",
        label: "Work",
        index: "03"
    },
    {
        href: "#journey",
        label: "Journey",
        index: "04"
    },
    {
        href: "#lab",
        label: "Lab",
        index: "05"
    },
    {
        href: "#contact",
        label: "Contact",
        index: "06"
    }
];
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...parts) {
    return parts.filter(Boolean).join(" ");
}
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharReveal",
    ()=>CharReveal,
    "Magnetic",
    ()=>Magnetic,
    "MaskedLines",
    ()=>MaskedLines,
    "Mono",
    ()=>Mono,
    "Reveal",
    ()=>Reveal,
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Reveal({ children, delay = 0, y = 28, className }) {
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: reduce ? 0 : y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-80px"
        },
        transition: {
            duration: 0.8,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function MaskedLines({ lines, className, lineClassName }) {
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: lines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block overflow-hidden pb-[0.08em]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block", lineClassName),
                    initial: {
                        y: reduce ? 0 : "110%"
                    },
                    whileInView: {
                        y: "0%"
                    },
                    viewport: {
                        once: true,
                        margin: "-60px"
                    },
                    transition: {
                        duration: 0.9,
                        delay: i * 0.09,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    children: l
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function SectionHeading({ index, eyebrow, title, blurb, align = "left" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", align === "center" && "text-center"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 font-mono2 text-[11px] tracking-[0.28em] uppercase text-[#d7ff3e]", align === "center" && "justify-center"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block h-[6px] w-[6px] bg-[#d7ff3e] pulse-dot",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "[",
                                index,
                                "] — ",
                                eyebrow
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MaskedLines, {
                className: "mt-5",
                lines: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display font-700 font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,5.5vw,4.5rem)]",
                        children: title
                    }, "t", false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            blurb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                delay: 0.15,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-5 max-w-xl text-[15px] leading-relaxed text-[#a7adb5]", align === "center" && "mx-auto"),
                    children: blurb
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function Magnetic({ children, strength = 0.35 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    function onMove(e) {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    }
    function onLeave() {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0,0)";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseMove: onMove,
        onMouseLeave: onLeave,
        className: "inline-block transition-transform duration-300 ease-out will-change-transform",
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
function Mono({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono2 text-[11px] tracking-[0.22em] uppercase", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
function CharReveal({ text, delay = 0, className }) {
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const chars = text.split("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-block", className),
        "aria-label": text,
        role: "text",
        children: chars.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                "aria-hidden": true,
                className: "inline-block will-change-transform",
                initial: {
                    y: reduce ? 0 : "115%",
                    opacity: reduce ? 1 : 0,
                    rotateX: reduce ? 0 : 55
                },
                animate: {
                    y: "0%",
                    opacity: 1,
                    rotateX: 0
                },
                transition: {
                    duration: 0.7,
                    delay: delay + i * 0.022,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: c === " " ? "\u00A0" : c
            }, i, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About,
    "Hero",
    ()=>Hero,
    "LayerIcon",
    ()=>LayerIcon,
    "Marquee",
    ()=>Marquee,
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/database.mjs [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Navbar({ started }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        const obs = new IntersectionObserver((es)=>es.forEach((e)=>e.isIntersecting && setActive("#" + e.target.id)), {
            rootMargin: "-40% 0px -55% 0px"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].forEach((l)=>{
            const el = document.querySelector(l.href);
            if (el) obs.observe(el);
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            obs.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    y: -70,
                    opacity: 0
                },
                animate: started ? {
                    y: 0,
                    opacity: 1
                } : {},
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: 0.15
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-0 top-0 z-[80] transition-all duration-500", scrolled ? "border-b border-white/10 bg-[#070809]/85 backdrop-blur-xl" : "bg-transparent"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#top",
                            className: "group flex items-center gap-3",
                            "aria-label": "Back to top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid h-9 w-9 place-items-center rounded-full bg-[#d7ff3e] font-display text-sm font-bold text-black transition-transform duration-300 group-hover:rotate-[20deg]",
                                    children: "AS"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden flex-col leading-none sm:flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-[13px] font-bold tracking-wide",
                                            children: "ANKIT SINGH"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono2 text-[10px] tracking-[0.24em] text-[#6b7280]",
                                            children: "FULL—STACK®26"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-7 lg:flex",
                            "aria-label": "Primary",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("u-link font-mono2 text-[11px] tracking-[0.2em] uppercase transition-colors", active === l.href ? "text-[#d7ff3e]" : "text-[#a7adb5] hover:text-white"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-1 text-[9px] text-[#6b7280]",
                                            children: l.index
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        l.label
                                    ]
                                }, l.href, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden items-center gap-2 rounded-full border border-[#d7ff3e]/30 bg-[#d7ff3e]/8 px-3.5 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-[#d7ff3e] uppercase md:flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-[6px] w-[6px] rounded-full bg-[#d7ff3e] pulse-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].availability
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Magnetic"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "hidden rounded-full bg-[#f4f1e8] px-5 py-2.5 font-display text-[13px] font-bold text-black transition-colors hover:bg-[#d7ff3e] sm:block",
                                        children: "HIRE ME"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(!open),
                                    className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden",
                                    "aria-label": open ? "Close menu" : "Open menu",
                                    "aria-expanded": open,
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 88,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 88,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -12
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-x-3 top-[76px] z-[79] rounded-2xl border border-white/10 bg-[#0d0e10]/97 p-4 backdrop-blur-2xl lg:hidden",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: l.href,
                                onClick: ()=>setOpen(false),
                                initial: {
                                    opacity: 0,
                                    x: -14
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: i * 0.05
                                },
                                className: "flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-bold uppercase hover:bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-3 font-mono2 text-[10px] text-[#d7ff3e]",
                                                children: l.index
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 113,
                                                columnNumber: 23
                                            }, this),
                                            l.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 18,
                                        className: "text-[#6b7280]"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l.href, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            onClick: ()=>setOpen(false),
                            className: "mt-2 block rounded-xl bg-[#d7ff3e] px-4 py-3.5 text-center font-display font-bold text-black",
                            children: "HIRE ME →"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function Hero({ started }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const yBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        140
    ]);
    const yFg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -60
    ]);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [hasPhoto, setHasPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/profile.jpg", {
            method: "HEAD"
        }).then((r)=>setHasPhoto(r.ok)).catch(()=>{});
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "top",
        className: "noise relative flex min-h-[100svh] flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: reduce ? {} : {
                    y: yBg
                },
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleGrid"], {
                        className: "absolute inset-0 h-full w-full"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blueprint absolute inset-0 opacity-70",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_20%,rgba(215,255,62,0.09),transparent_65%)]",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070809] to-transparent",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 left-5 hidden flex-col justify-between py-28 font-mono2 text-[10px] tracking-[0.3em] text-[#4b5057] uppercase xl:flex",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "[writing-mode:vertical-rl] rotate-180",
                        children: "SYS.PORTFOLIO — 28.7191°N / 77.2547°E"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "[writing-mode:vertical-rl] rotate-180",
                        children: "SCROLL // 001"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-5 hidden flex-col justify-between py-28 font-mono2 text-[10px] tracking-[0.3em] text-[#4b5057] uppercase xl:flex",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "[writing-mode:vertical-rl]",
                        children: "REACT — NODE — MONGO"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "[writing-mode:vertical-rl] text-[#d7ff3e]/70",
                        children: "● LIVE"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: reduce ? {} : {
                    y: yFg
                },
                className: "relative z-[2] mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-10 px-5 pb-16 pt-[120px] md:px-10 lg:grid-cols-[1.35fr_0.85fr] lg:pt-[110px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 14
                                },
                                animate: started ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    delay: 0.25,
                                    duration: 0.6
                                },
                                className: "flex flex-wrap items-center gap-3 font-mono2 text-[11px] tracking-[0.24em] uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[#f4f1e8]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[7px] w-[7px] rounded-full bg-[#d7ff3e] pulse-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].availability
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6b7280]",
                                        children: [
                                            "▲ Noida, IN — ",
                                            new Date().toLocaleTimeString("en-IN", {
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }),
                                            " IST"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-6 font-display font-bold uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.6rem,8.5vw,7.2rem)]",
                                children: started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block overflow-hidden pb-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharReveal"], {
                                                text: "I BUILD",
                                                delay: 0.35
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 178,
                                                columnNumber: 62
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block overflow-hidden pb-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharReveal"], {
                                                text: "DIGITAL",
                                                delay: 0.5,
                                                className: "text-stroke"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block overflow-hidden pb-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharReveal"], {
                                                text: "EXPERIENCES",
                                                delay: 0.65
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 182,
                                                columnNumber: 62
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block overflow-hidden pb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharReveal"], {
                                                    text: "THAT MOVE",
                                                    delay: 0.85
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CharReveal"], {
                                                    text: " PEOPLE.",
                                                    delay: 1.05,
                                                    className: "text-[#d7ff3e]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 63
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 18
                                },
                                animate: started ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    delay: 1.35,
                                    duration: 0.7,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "border-l-2 border-[#d7ff3e] pl-4 text-[15px] leading-relaxed text-[#c9cdd3] md:text-base",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].heroSub
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 pl-4 font-mono2 text-[11px] tracking-[0.2em] text-[#6b7280] uppercase",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name,
                                                " — ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].tagline
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 18
                                },
                                animate: started ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    delay: 1.5,
                                    duration: 0.7
                                },
                                className: "mt-8 flex flex-wrap items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Magnetic"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#work",
                                            className: "group flex items-center gap-3 rounded-full bg-[#d7ff3e] px-7 py-4 font-display text-sm font-bold tracking-wide text-black transition-shadow hover:glow-lime",
                                            children: [
                                                "EXPLORE MY WORK",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                    size: 16,
                                                    className: "transition-transform duration-300 group-hover:translate-y-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Magnetic"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "group flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-display text-sm font-bold tracking-wide transition-colors hover:border-[#d7ff3e] hover:text-[#d7ff3e]",
                                            children: [
                                                "CONTACT ME",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 16,
                                                    className: "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].dl, {
                                initial: {
                                    opacity: 0
                                },
                                animate: started ? {
                                    opacity: 1
                                } : {},
                                transition: {
                                    delay: 1.7,
                                    duration: 0.8
                                },
                                className: "mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10",
                                children: [
                                    [
                                        "~2 YRS",
                                        "Production experience"
                                    ],
                                    [
                                        "10+",
                                        "Platforms shipped"
                                    ],
                                    [
                                        "04",
                                        "Live insurer APIs"
                                    ]
                                ].map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0b0c0e] px-4 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "sr-only",
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "font-display text-xl font-bold text-[#d7ff3e] md:text-2xl",
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 font-mono2 text-[9px] tracking-[0.18em] text-[#6b7280] uppercase",
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, l, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
                        initial: {
                            opacity: 0,
                            y: 40,
                            rotate: 2
                        },
                        animate: started ? {
                            opacity: 1,
                            y: 0,
                            rotate: 0
                        } : {},
                        transition: {
                            delay: 1.1,
                            duration: 0.9,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "relative mx-auto w-full max-w-[380px]",
                        "aria-label": "Portrait of Ankit Singh",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-3 rounded-[28px] bg-[conic-gradient(from_120deg,rgba(215,255,62,0.35),transparent_30%,transparent_70%,rgba(215,255,62,0.25))] blur-xl",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-[24px] border border-white/15 bg-[#0e0f11]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-[#ff5f57]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-[#febc2e]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 71
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 rounded-full bg-[#28c840]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 125
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "profile — ankit.exe"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d7ff3e]",
                                                children: "●"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[3/3.6] bg-[#141619]",
                                        children: [
                                            hasPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/profile.jpg",
                                                alt: "Portrait photograph of Ankit Singh, Full Stack Developer",
                                                fill: true,
                                                priority: true,
                                                sizes: "(max-width: 768px) 90vw, 380px",
                                                className: "object-cover object-top"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(215,255,62,0.16),transparent_60%),linear-gradient(180deg,#16181b,#0b0c0e)] p-8 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid h-28 w-28 place-items-center rounded-full border border-[#d7ff3e]/40 bg-[#d7ff3e]/10 font-display text-4xl font-bold text-[#d7ff3e]",
                                                        children: "AS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-5 font-display text-xl font-bold uppercase leading-tight",
                                                        children: [
                                                            "Ankit",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 99
                                                            }, this),
                                                            "Singh"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 max-w-[220px] font-mono2 text-[10px] leading-relaxed tracking-[0.14em] text-[#6b7280] uppercase",
                                                        children: [
                                                            "Add your photo as ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#d7ff3e]",
                                                                children: "public/profile.jpg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 39
                                                            }, this),
                                                            " — it appears here automatically"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blueprint-fine absolute inset-0 opacity-40",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070809]/85 via-transparent to-transparent",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#d7ff3e]/15 to-transparent",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-px bg-white/10 font-mono2 text-[10px] tracking-[0.16em] uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#0e0f11] px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#6b7280]",
                                                        children: "Role"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 99
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: "Full Stack Dev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 105
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#0e0f11] px-4 py-3 text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#6b7280]",
                                                        children: "Base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 66
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 110
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#d7ff3e]",
                                                        children: "Noida / IN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 116
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-floaty absolute -left-6 top-16 hidden rounded-xl border border-white/12 bg-[#0d0e10]/95 px-3.5 py-2.5 font-mono2 text-[10px] tracking-[0.14em] uppercase shadow-2xl sm:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#d7ff3e]",
                                        children: "◈"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    " React · Next.js"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-floaty absolute -right-5 top-1/2 hidden rounded-xl border border-white/12 bg-[#0d0e10]/95 px-3.5 py-2.5 font-mono2 text-[10px] tracking-[0.14em] uppercase shadow-2xl sm:block",
                                style: {
                                    animationDelay: "-3s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#d7ff3e]",
                                        children: "◈"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    " Node · Express"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#d7ff3e]/40 bg-[#070809] px-4 py-2 font-mono2 text-[10px] tracking-[0.18em] text-[#d7ff3e] uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].tagline.split("·")[0],
                                    " — ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].tagline.split("·")[3]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                href: "#profile",
                initial: {
                    opacity: 0
                },
                animate: started ? {
                    opacity: 1
                } : {},
                transition: {
                    delay: 2,
                    duration: 0.8
                },
                className: "relative z-[2] mx-auto mb-7 flex flex-col items-center gap-2 font-mono2 text-[10px] tracking-[0.3em] text-[#6b7280] uppercase hover:text-[#d7ff3e]",
                "aria-label": "Scroll to profile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-10 w-[22px] justify-center rounded-full border border-white/20 pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            animate: reduce ? {} : {
                                y: [
                                    0,
                                    12,
                                    0
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 1.8
                            },
                            className: "h-1.5 w-1.5 rounded-full bg-[#d7ff3e]"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
function Marquee() {
    const items = [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebRTC",
        "React Native",
        "REST APIs",
        "JWT Auth"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden border-y border-white/10 bg-[#0b0c0e] py-5",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-marquee flex w-max items-center gap-8 pr-8",
            children: [
                ...items,
                ...items
            ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-8 font-display text-lg font-bold uppercase tracking-tight text-[#f4f1e8]/90 md:text-xl",
                    children: [
                        t,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#d7ff3e]",
                            children: "✦"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                            lineNumber: 343,
                            columnNumber: 17
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                    lineNumber: 342,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
            lineNumber: 340,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, this);
}
function About() {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email);
        } catch  {}
        setCopied(true);
        setTimeout(()=>setCopied(false), 1800);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "profile",
        className: "relative scroll-mt-20 overflow-hidden py-24 md:py-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-[-200px] top-20 select-none font-display text-[22vw] font-bold leading-none text-white/[0.025]",
                "aria-hidden": true,
                children: "01"
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                                    className: "text-[#d7ff3e]",
                                    children: "[01] — Profile // The human behind the stack"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaskedLines"], {
                                className: "mt-5",
                                lines: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[clamp(2rem,4.6vw,3.8rem)] font-bold uppercase leading-[0.98] tracking-tight",
                                        children: "Engineer by craft,"
                                    }, "a", false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[clamp(2rem,4.6vw,3.8rem)] font-bold uppercase leading-[0.98] tracking-tight text-[#6b7280]",
                                        children: [
                                            "human by default",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d7ff3e]",
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 372,
                                                columnNumber: 167
                                            }, this)
                                        ]
                                    }, "b", true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 space-y-3 font-mono2 text-[12px] tracking-[0.14em] uppercase",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center gap-3 text-[#a7adb5]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14,
                                                    className: "text-[#d7ff3e]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 69
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phoneHref,
                                            className: "flex items-center gap-3 text-[#a7adb5] hover:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 14,
                                                    className: "text-[#d7ff3e]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 111
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: copyEmail,
                                            className: "group flex items-center gap-3 text-[#a7adb5] hover:text-white",
                                            "aria-label": "Copy email address",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 14,
                                                    className: "text-[#d7ff3e]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-md border border-white/15 px-2 py-1 text-[10px] text-[#6b7280] group-hover:border-[#d7ff3e]/50 group-hover:text-[#d7ff3e]",
                                                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 71
                                                            }, this),
                                                            " Copied"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 149
                                                            }, this),
                                                            " Copy"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 107
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "flex items-center gap-3 text-[#a7adb5] hover:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 14,
                                                    className: "text-[#d7ff3e]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].linkedinLabel,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 95
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 0.25,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#0c0d0f] p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display text-2xl font-bold text-white",
                                                    children: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 font-mono2 text-[9px] leading-relaxed tracking-[0.14em] text-[#6b7280] uppercase",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:pt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-snug tracking-tight text-[#f4f1e8]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].summary
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 space-y-6 border-l border-white/10 pl-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].summaryLong.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                        delay: i * 0.08,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-xl text-[15px] leading-relaxed text-[#a7adb5]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-3 font-mono2 text-[11px] text-[#d7ff3e]",
                                                    children: [
                                                        "0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 84
                                                }, this),
                                                p
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                        lineNumber: 410,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap gap-2.5",
                                    children: [
                                        "Figma-to-Code",
                                        "REST Design",
                                        "Role-based Access",
                                        "Schema Design",
                                        "Cloud Deploy",
                                        "Agile"
                                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 font-mono2 text-[10px] tracking-[0.16em] text-[#c9cdd3] uppercase transition-colors hover:border-[#d7ff3e]/60 hover:text-[#d7ff3e]",
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 0.25,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0c0d0f] p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#d7ff3e]/12 text-[#d7ff3e]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                lineNumber: 424,
                                                columnNumber: 118
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-[#a7adb5]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-white",
                                                    children: "Currently:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this),
                                                " owning end-to-end features at LYB Technology — WebRTC consultation flows on Dr Dermat, insurer integrations on Zanifest."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
function LayerIcon({ id }) {
    if (id === "ui") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 438,
        columnNumber: 27
    }, this);
    if (id === "api") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 439,
        columnNumber: 28
    }, this);
    if (id === "server") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 440,
        columnNumber: 31
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx",
        lineNumber: 441,
        columnNumber: 10
    }, this);
}
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Expertise",
    ()=>Expertise,
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/git-branch.mjs [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/server.mjs [app-ssr] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/workflow.mjs [app-ssr] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/boxes.mjs [app-ssr] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Expertise() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillGroups"][0].id);
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillGroups"].find((g)=>g.id === tab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "expertise",
        className: "relative scroll-mt-20 border-t border-white/10 bg-[#0b0c0e] py-24 md:py-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blueprint-fine pointer-events-none absolute inset-0 opacity-50",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1400px] px-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        index: "02",
                        eyebrow: "Technical Expertise // Verified stack only",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Full-stack, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d7ff3e]",
                                    children: "front to back."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 23,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true),
                        blurb: "Every technology below is taken directly from shipped production work. Select a layer, then hover or tap a node to see how I actually use it."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-wrap gap-3",
                            role: "tablist",
                            "aria-label": "Skill categories",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skillGroups"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    role: "tab",
                                    "aria-selected": tab === g.id,
                                    onClick: ()=>{
                                        setTab(g.id);
                                        setSel(0);
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex items-center gap-3 rounded-full border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide transition-all", tab === g.id ? "border-[#d7ff3e] bg-[#d7ff3e] text-black" : "border-white/15 text-[#a7adb5] hover:border-white/40 hover:text-white"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono2 text-[10px]", tab === g.id ? "text-black/60" : "text-[#6b7280]"),
                                            children: g.index
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        g.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hidden font-mono2 text-[10px] font-normal normal-case tracking-normal sm:inline", tab === g.id ? "text-black/60" : "text-[#6b7280]"),
                                            children: g.caption
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, g.id, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "noise relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f11] p-6 md:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between font-mono2 text-[10px] tracking-[0.24em] text-[#6b7280] uppercase",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "◉ ",
                                                        group.title,
                                                        " constellation"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        group.stack.length,
                                                        " nodes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mx-auto mt-6 aspect-square max-w-[420px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-full border border-dashed border-white/12",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-[14%] rounded-full border border-white/8",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-[30%] rounded-full border border-[#d7ff3e]/15",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin-slow absolute inset-0",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d7ff3e]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 grid place-items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "grid h-24 w-24 place-items-center rounded-full bg-[#d7ff3e] text-center font-display text-sm font-bold leading-tight text-black glow-lime md:h-28 md:w-28",
                                                        "aria-label": `${group.title} core`,
                                                        children: group.title.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                group.stack.map((s, i)=>{
                                                    const angle = i / group.stack.length * Math.PI * 2 - Math.PI / 2;
                                                    const rad = i % 2 === 0 ? 42 : 33;
                                                    const x = 50 + rad * Math.cos(angle);
                                                    const y = 50 + rad * Math.sin(angle);
                                                    const isSel = group.details[Math.min(sel, group.details.length - 1)]?.name.toLowerCase().includes(s.split(" ")[0].toLowerCase().replace(".", "").replace("+", ""));
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onMouseEnter: ()=>setSel(i % group.details.length),
                                                        onFocus: ()=>setSel(i % group.details.length),
                                                        onClick: ()=>setSel(i % group.details.length),
                                                        style: {
                                                            left: `${x}%`,
                                                            top: `${y}%`
                                                        },
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 font-mono2 text-[10px] tracking-[0.1em] uppercase backdrop-blur transition-all", isSel ? "border-[#d7ff3e] bg-[#d7ff3e]/15 text-[#d7ff3e]" : "border-white/15 bg-[#0b0c0e]/90 text-[#c9cdd3] hover:border-[#d7ff3e]/60"),
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "pointer-events-none absolute inset-0 h-full w-full",
                                                    "aria-hidden": true,
                                                    children: group.stack.map((_, i)=>{
                                                        const angle = i / group.stack.length * Math.PI * 2 - Math.PI / 2;
                                                        const rad = i % 2 === 0 ? 42 : 33;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "50%",
                                                            y1: "50%",
                                                            x2: `${50 + rad * Math.cos(angle)}%`,
                                                            y2: `${50 + rad * Math.sin(angle)}%`,
                                                            stroke: "rgba(244,241,232,0.08)"
                                                        }, i, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-center font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                            children: "Hover / tap nodes to inspect →"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    group.details.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                            delay: i * 0.06,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onMouseEnter: ()=>setSel(i),
                                                onFocus: ()=>setSel(i),
                                                onClick: ()=>setSel(i),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group w-full rounded-2xl border p-5 text-left transition-all duration-300", sel === i ? "border-[#d7ff3e]/60 bg-[#d7ff3e]/[0.06]" : "border-white/10 bg-[#0e0f11] hover:border-white/25"),
                                                "aria-expanded": sel === i,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-display text-lg font-bold tracking-tight", sel === i ? "text-[#d7ff3e]" : "text-white"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mr-3 font-mono2 text-[11px] font-normal text-[#6b7280]",
                                                                        children: [
                                                                            "0",
                                                                            i + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    d.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all", sel === i ? "border-[#d7ff3e] bg-[#d7ff3e] text-black" : "border-white/15 text-[#6b7280]"),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid transition-all duration-300", sel === i ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-60"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "overflow-hidden text-sm leading-relaxed text-[#a7adb5]",
                                                            children: d.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        }, d.name, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                        delay: 0.2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rounded-2xl border border-dashed border-white/15 p-4 font-mono2 text-[11px] leading-relaxed tracking-[0.08em] text-[#6b7280]",
                                            children: "// No fabricated proficiency bars. If it's listed here, it's shipped in production — ask me for the war stories."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
/* ================= PROJECT VISUALS (abstract, honest) ================= */ function ProjectVisual({ pattern, accent }) {
    if (pattern === "pulse") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full overflow-hidden bg-[#0a1418]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blueprint-fine absolute inset-0 opacity-60"
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 600 400",
                    className: "absolute inset-0 h-full w-full",
                    preserveAspectRatio: "xMidYMid slice",
                    "aria-hidden": true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 250 L90 250 L120 180 L155 320 L190 210 L220 250 L600 250",
                            fill: "none",
                            stroke: accent,
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 250 L90 250 L120 180 L155 320 L190 210 L220 250 L600 250",
                            fill: "none",
                            stroke: accent,
                            strokeWidth: "10",
                            opacity: "0.12"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        [
                            90,
                            220,
                            340,
                            470
                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: 130 + x % 90,
                                        r: "26",
                                        fill: "none",
                                        stroke: "rgba(255,255,255,0.18)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: 130 + x % 90,
                                        r: "4",
                                        fill: accent,
                                        className: "pulse-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x,
                                        y1: 130 + x % 90,
                                        x2: x,
                                        y2: "250",
                                        stroke: "rgba(255,255,255,0.14)",
                                        strokeDasharray: "4 4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, x, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)),
                        [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: 300 + i * 44,
                                y: 90 + i % 3 * 30,
                                width: "34",
                                height: "52",
                                rx: "6",
                                fill: "none",
                                stroke: "rgba(255,255,255,0.22)"
                            }, i, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-5 top-5 rounded-md bg-black/60 px-2.5 py-1.5 font-mono2 text-[10px] tracking-[0.2em] text-white/80 backdrop-blur",
                    children: "● WEBRTC // LIVE SESSION"
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-5 right-5 flex gap-2",
                    children: [
                        "CHAT",
                        "AUDIO",
                        "VIDEO"
                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full px-3 py-1 font-mono2 text-[10px] tracking-[0.16em]",
                            style: {
                                background: `${accent}22`,
                                color: accent,
                                border: `1px solid ${accent}55`
                            },
                            children: t
                        }, t, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this);
    }
    if (pattern === "ledger") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full overflow-hidden bg-[#0c0f14]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                "ZUNO  ₹4,210",
                                "SBI  ₹4,890",
                                "ICICI  ₹4,455",
                                "GODIGIT  ₹3,980"
                            ].map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 rounded-xl border p-3 backdrop-blur",
                                    style: {
                                        borderColor: i === 3 ? `${accent}88` : "rgba(255,255,255,0.12)",
                                        background: i === 3 ? `${accent}14` : "rgba(255,255,255,0.03)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono2 text-[9px] tracking-[0.14em] text-white/50",
                                            children: [
                                                "QUOTE 0",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 font-display text-[13px] font-bold",
                                            style: i === 3 ? {
                                                color: accent
                                            } : {},
                                            children: q
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full",
                                                style: {
                                                    width: `${55 + i * 12}%`,
                                                    background: i === 3 ? accent : "rgba(255,255,255,0.35)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                lineNumber: 193,
                                                columnNumber: 86
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, q, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 rounded-xl border border-white/12 bg-white/[0.03] p-4",
                            children: [
                                "Quote generated",
                                "Proposal submitted",
                                "KYC verified",
                                "Policy issued"
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 py-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold",
                                            style: {
                                                background: i < 3 ? accent : "rgba(255,255,255,0.12)",
                                                color: i < 3 ? "#000" : "#888"
                                            },
                                            children: i < 3 ? "✓" : "○"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono2 text-[11px] tracking-[0.12em] uppercase",
                                            style: {
                                                color: i < 3 ? "#fff" : "#666"
                                            },
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        i === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto rounded bg-white/10 px-2 py-0.5 font-mono2 text-[9px] text-white/60",
                                            children: "→ PAYMENT"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 202,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, s, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-5 top-5 hidden",
                    children: "ledger"
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden bg-[#100d08]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blueprint absolute inset-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 600 360",
                className: "absolute inset-0 h-full w-full",
                preserveAspectRatio: "xMidYMid slice",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "60",
                        y: "60",
                        width: "480",
                        height: "200",
                        rx: "14",
                        fill: "none",
                        stroke: "rgba(255,255,255,0.25)",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "60",
                        y: "60",
                        width: "480",
                        height: "44",
                        rx: "14",
                        fill: "rgba(255,255,255,0.05)"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "88",
                        cy: "82",
                        r: "5",
                        fill: "#ff5f57"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "106",
                        cy: "82",
                        r: "5",
                        fill: "#febc2e"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 217,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "124",
                        cy: "82",
                        r: "5",
                        fill: "#28c840"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 217,
                        columnNumber: 104
                    }, this),
                    [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 90 + i * 150,
                                    y: 130,
                                    width: "120",
                                    height: "100",
                                    rx: "10",
                                    fill: "none",
                                    stroke: i === 1 ? accent : "rgba(255,255,255,0.2)",
                                    strokeWidth: i === 1 ? 2 : 1
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 100 + i * 150,
                                    y: 145,
                                    width: "60",
                                    height: "8",
                                    rx: "4",
                                    fill: i === 1 ? accent : "rgba(255,255,255,0.25)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 100 + i * 150,
                                    y: 160,
                                    width: "100",
                                    height: "6",
                                    rx: "3",
                                    fill: "rgba(255,255,255,0.12)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 100 + i * 150,
                                    y: 200,
                                    width: "70",
                                    height: "18",
                                    rx: "9",
                                    fill: i === 1 ? accent : "rgba(255,255,255,0.12)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "220",
                        y: "290",
                        width: "160",
                        height: "34",
                        rx: "17",
                        fill: "none",
                        stroke: accent,
                        strokeDasharray: "5 5",
                        className: "flow-line"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "300",
                        y: "312",
                        textAnchor: "middle",
                        fill: accent,
                        fontSize: "13",
                        fontFamily: "monospace",
                        children: "◉ CHECK AVAILABILITY"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "relative scroll-mt-20 overflow-hidden py-24 md:py-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-[-160px] top-40 select-none font-display text-[20vw] font-bold leading-none text-white/[0.025]",
                "aria-hidden": true,
                children: "02"
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1400px] px-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        index: "03",
                        eyebrow: "Selected Work // Real platforms, real users",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Work that ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-stroke",
                                    children: "shipped."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 242,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true),
                        blurb: "Three production platforms plus client work across e-commerce and travel. Abstract visuals below represent each product category — not fake screenshots."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14 space-y-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group grid overflow-hidden rounded-3xl border border-white/10 bg-[#0c0d0f] transition-colors hover:border-white/25 lg:grid-cols-2", idx % 2 === 1 && "lg:[&>*:first-child]:order-2"),
                                    "aria-labelledby": `proj-${p.id}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative min-h-[300px] overflow-hidden md:min-h-[400px]",
                                            "data-hover": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectVisual, {
                                                        pattern: p.pattern,
                                                        accent: p.accent
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-5 top-5 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-black/70 px-3.5 py-1.5 font-display text-sm font-bold backdrop-blur",
                                                            style: {
                                                                color: p.accent
                                                            },
                                                            children: p.index
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-black/70 px-3.5 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-white/80 uppercase backdrop-blur",
                                                            children: p.year
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute bottom-5 left-5 rounded-md bg-black/70 px-2.5 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-white/60 uppercase backdrop-blur",
                                                    children: "◆ Abstract representation — not a product screenshot"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-between p-7 md:p-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                                                            className: "text-[#6b7280]",
                                                            children: p.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            id: `proj-${p.id}`,
                                                            className: "mt-3 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold uppercase leading-[0.95] tracking-tight",
                                                            children: p.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-4 max-w-lg text-[15px] leading-relaxed text-[#a7adb5]",
                                                            children: p.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "mt-5 space-y-2.5",
                                                            children: p.contributions.slice(0, 5).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex gap-3 text-[13.5px] leading-relaxed text-[#c9cdd3]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mt-[7px] h-[6px] w-[6px] shrink-0 rotate-45",
                                                                            style: {
                                                                                background: p.accent
                                                                            },
                                                                            "aria-hidden": true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        c
                                                                    ]
                                                                }, c, true, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-5 flex flex-wrap gap-2",
                                                            children: p.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-mono2 text-[10px] tracking-[0.12em] text-[#c9cdd3] uppercase",
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-4 font-mono2 text-[11px] leading-relaxed tracking-[0.06em] text-[#6b7280]",
                                                            children: [
                                                                "◈ ",
                                                                p.role
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6",
                                                    children: [
                                                        p.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Magnetic"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: p.url,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "flex items-center gap-2 rounded-full bg-[#f4f1e8] px-6 py-3 font-display text-[13px] font-bold text-black transition-colors hover:bg-[#d7ff3e]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " VISIT LIVE ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 58
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono2 text-[11px] tracking-[0.14em] text-[#6b7280] uppercase",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " URL on request — client property"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-2 font-mono2 text-[11px] tracking-[0.14em] text-[#6b7280] uppercase",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Repos private — available in interview"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this)
                            }, p.id, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-4 md:grid-cols-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["additionalProjects"].map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group rounded-2xl border border-white/10 bg-[#0c0d0f] p-6 transition-colors hover:border-[#d7ff3e]/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono2 text-[11px] text-[#d7ff3e]",
                                                    children: [
                                                        "+0",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#4b5057] transition-colors group-hover:text-[#d7ff3e]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 97
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mt-4 font-display text-lg font-bold leading-tight",
                                            children: a.name
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-relaxed text-[#a7adb5]",
                                            children: a.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, a.name, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.15,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-white/15 p-6 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-3 font-mono2 text-[12px] tracking-[0.1em] text-[#6b7280]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            size: 16,
                                            className: "text-[#d7ff3e]"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                            lineNumber: 333,
                                            columnNumber: 107
                                        }, this),
                                        " Full project breakdowns, architecture diagrams & code walkthroughs — live on request."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Magnetic"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "u-link flex items-center gap-2 font-display text-sm font-bold uppercase text-[#d7ff3e]",
                                        children: [
                                            "Request walkthrough ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                                lineNumber: 335,
                                                columnNumber: 153
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Approach",
    ()=>Approach,
    "Contact",
    ()=>Contact,
    "Footer",
    ()=>Footer,
    "Journey",
    ()=>Journey,
    "Lab",
    ()=>Lab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/lucide-react/dist/esm/icons/send.mjs [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Journey() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "journey",
        className: "relative scroll-mt-20 border-t border-white/10 bg-[#0b0c0e] py-24 md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1400px] px-5 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    index: "04",
                    eyebrow: "Journey // Where I've shipped",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Two years, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#d7ff3e]",
                                children: "two teams,"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 19,
                                columnNumber: 31
                            }, this),
                            " one trajectory."
                        ]
                    }, void 0, true),
                    blurb: "Accurate titles, dates and contributions — straight from the resume. Nothing inflated."
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "relative space-y-6 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-[#d7ff3e]/60 before:via-white/15 before:to-transparent",
                            "aria-label": "Work history",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experience"].map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: i * 0.08,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "relative grid gap-4 rounded-3xl border border-white/10 bg-[#0e0f11] p-7 pl-16 md:p-8 md:pl-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-[11px] top-8 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-[#d7ff3e] bg-[#070809]",
                                                "aria-hidden": true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-[6px] w-[6px] rounded-full bg-[#d7ff3e]", e.current && "pulse-dot")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-3 py-1 font-mono2 text-[10px] tracking-[0.18em] uppercase", e.current ? "bg-[#d7ff3e] text-black" : "border border-white/15 text-[#a7adb5]"),
                                                        children: e.current ? "● Present" : e.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 21
                                                    }, this),
                                                    e.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono2 text-[10px] tracking-[0.18em] text-[#6b7280] uppercase",
                                                        children: e.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-2xl font-bold tracking-tight",
                                                        children: e.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 flex items-center gap-2 font-mono2 text-[12px] tracking-[0.12em] text-[#d7ff3e] uppercase",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 40,
                                                                columnNumber: 131
                                                            }, this),
                                                            " ",
                                                            e.company
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2.5",
                                                children: e.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-3 text-sm leading-relaxed text-[#a7adb5]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-[8px] h-px w-4 shrink-0 bg-[#d7ff3e]/70",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 25
                                                            }, this),
                                                            pt
                                                        ]
                                                    }, pt, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: e.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono2 text-[10px] tracking-[0.1em] text-[#c9cdd3] uppercase",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                }, e.company, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl border border-white/10 bg-[#070809] p-7 md:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                                                className: "flex items-center gap-2 text-[#d7ff3e]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 74
                                                    }, this),
                                                    " Education & Certifications"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 space-y-5",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"].map((ed, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group flex gap-4 border-b border-white/8 pb-5 last:border-0 last:pb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-display text-sm font-bold text-[#4b5057] transition-colors group-hover:text-[#d7ff3e]",
                                                                children: [
                                                                    "0",
                                                                    i + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-display text-[15px] font-bold leading-snug",
                                                                        children: ed.degree
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 font-mono2 text-[11px] tracking-[0.1em] text-[#6b7280] uppercase",
                                                                        children: [
                                                                            ed.school,
                                                                            " — ",
                                                                            ed.year
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, ed.degree, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-7 rounded-2xl bg-[#d7ff3e] p-5 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono2 text-[10px] tracking-[0.22em] uppercase opacity-70",
                                                        children: "Open to"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 font-display text-lg font-bold leading-tight",
                                                        children: "Full-time roles · freelance builds · technical collaborations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: 0.15,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blueprint-fine mt-5 rounded-3xl border border-[#d7ff3e]/25 bg-[#d7ff3e]/[0.04] p-7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-xl font-bold leading-snug",
                                                children: "“Strong in REST design, JWT auth, role-based panels & Mongo schema design.”"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 font-mono2 text-[11px] tracking-[0.16em] text-[#6b7280] uppercase",
                                                children: "— Straight from the resume summary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function Lab() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labLayers"][2].id);
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labLayers"].find((l)=>l.id === active);
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labLayers"].findIndex((l)=>l.id === active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lab",
        className: "noise relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 md:py-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_30%,rgba(215,255,62,0.07),transparent_65%)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1400px] px-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        index: "05",
                        eyebrow: "Inside my digital workshop // Interactive",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "How a request ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#d7ff3e]",
                                    children: "travels."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 107,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true),
                        blurb: "Follow a click from the interface to the database. Tap any layer to inspect what lives there and why it matters.",
                        align: "center"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 overflow-x-auto pb-2",
                            role: "tablist",
                            "aria-label": "Architecture layers",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-[760px] items-stretch gap-0",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labLayers"].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 items-stretch",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                role: "tab",
                                                "aria-selected": active === l.id,
                                                onClick: ()=>setActive(l.id),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group relative flex-1 rounded-2xl border p-5 text-left transition-all duration-300", active === l.id ? "border-[#d7ff3e] bg-[#d7ff3e]/[0.07] glow-lime" : "border-white/12 bg-[#0d0e10] hover:border-white/30"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-mono2 text-[10px] tracking-[0.22em]", active === l.id ? "text-[#d7ff3e]" : "text-[#6b7280]"),
                                                        children: l.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 flex items-center gap-2 font-display text-base font-bold leading-tight", active === l.id ? "text-white" : "text-[#c9cdd3]"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: active === l.id ? "text-[#d7ff3e]" : "text-[#6b7280]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayerIcon"], {
                                                                    id: l.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 95
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 23
                                                            }, this),
                                                            l.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block font-mono2 text-[10px] tracking-[0.08em] text-[#6b7280]",
                                                        children: l.tech
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this),
                                                    active === l.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -bottom-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#d7ff3e] bg-[#0d0e10]",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            i < __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labLayers"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex w-10 items-center justify-center sm:w-14",
                                                "aria-hidden": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "100%",
                                                        height: "24",
                                                        viewBox: "0 0 56 24",
                                                        fill: "none",
                                                        preserveAspectRatio: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M2 12 H50 M42 5 L51 12 L42 19",
                                                            stroke: idx >= i ? "#d7ff3e" : "rgba(255,255,255,0.2)",
                                                            strokeWidth: "1.5",
                                                            className: "flow-line"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-1 h-1.5 w-1.5 rounded-full", idx > i ? "bg-[#d7ff3e] pulse-dot" : "bg-white/20")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, l.id, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-8 max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.45,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "grid gap-6 rounded-3xl border border-white/10 bg-[#0c0d0f] p-7 md:grid-cols-[auto_1fr] md:p-9",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid h-16 w-16 place-items-center rounded-2xl bg-[#d7ff3e] text-black",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayerIcon"], {
                                            id: current.id
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 158,
                                            columnNumber: 100
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                                                className: "text-[#d7ff3e]",
                                                children: [
                                                    current.step,
                                                    " — ",
                                                    current.tech
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 font-display text-2xl font-bold md:text-3xl",
                                                children: current.title
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-[#a7adb5]",
                                                children: current.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap gap-2",
                                                children: current.meta.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-white/[0.06] px-3.5 py-1.5 font-mono2 text-[10px] tracking-[0.14em] text-[#f4f1e8] uppercase",
                                                        children: m
                                                    }, m, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, current.id, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-center font-mono2 text-[11px] tracking-[0.2em] text-[#6b7280] uppercase",
                                children: [
                                    "Example round-trip — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#c9cdd3]",
                                        children: "“Book a consultation”:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 171,
                                        columnNumber: 34
                                    }, this),
                                    " React form → POST /api/consultations (JWT) → Express validates → Socket emits “ringing” → Mongo persists → UI confirms in ~300ms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
function Approach() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "approach",
        className: "relative scroll-mt-20 border-t border-white/10 bg-[#f4f1e8] py-24 text-[#0b0c0e] md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1400px] px-5 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                        className: "text-[#4b5563]",
                        children: "[06] — How I work // Principles, not posters"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaskedLines"], {
                    className: "mt-5 max-w-4xl",
                    lines: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-tight",
                            children: "Calm code."
                        }, "1", false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-tight",
                            children: [
                                "Fast interfaces",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#5a7a00]",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 191,
                                    columnNumber: 151
                                }, this)
                            ]
                        }, "2", true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, false, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-px overflow-hidden rounded-3xl border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["principles"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 0.06,
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group flex h-full flex-col justify-between bg-[#f4f1e8] p-7 transition-colors duration-300 hover:bg-[#0b0c0e] hover:text-[#f4f1e8] md:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono2 text-[12px] tracking-[0.2em] text-[#6b7280] group-hover:text-[#d7ff3e]",
                                            children: p.n
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-xl font-bold leading-tight tracking-tight",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm leading-relaxed opacity-70",
                                                    children: p.body
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, p.n, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-between bg-[#0b0c0e] p-7 text-[#f4f1e8] md:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono2 text-[12px] tracking-[0.2em] text-[#d7ff3e]",
                                    children: "06 — DEBUG MODE"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-10 font-display text-xl font-bold leading-snug",
                                    children: "“Reproduce it, isolate it, fix the cause — then write the test I wish existed.”"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 font-mono2 text-[11px] tracking-[0.12em] text-[#6b7280] uppercase",
                                    children: "Postman · DevTools · Logs · Explain plans"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
function Contact() {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        subject: "Project inquiry",
        message: ""
    });
    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email);
        } catch  {}
        setCopied(true);
        setTimeout(()=>setCopied(false), 1800);
    }
    async function onSubmit(e) {
        e.preventDefault();
        setError("");
        if (form.name.trim().length < 2) return setError("Please tell me your name (2+ characters)."), setStatus("err");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("That email doesn't look valid — double-check it?"), setStatus("err");
        if (form.message.trim().length < 10) return setError("Give me a little more detail (10+ characters)."), setStatus("err");
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await res.json().catch(()=>({}));
            if (!res.ok) throw new Error(data.error || "Something went wrong saving your message.");
            setStatus("ok");
            setForm({
                name: "",
                email: "",
                subject: "Project inquiry",
                message: ""
            });
        } catch (err) {
            setStatus("err");
            setError(err instanceof Error ? err.message : "Couldn't send. Email me directly instead.");
        }
    }
    const inputCls = "w-full rounded-xl border border-white/12 bg-[#0e0f11] px-4 py-3.5 text-sm text-white placeholder:text-[#4b5057] transition-colors focus:border-[#d7ff3e] focus:outline-none";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "noise relative scroll-mt-20 overflow-hidden border-t border-white/10 py-24 md:py-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_100%,rgba(215,255,62,0.1),transparent_65%)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1400px] px-5 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                            className: "text-[#d7ff3e]",
                            children: "[07] — Contact // The finale"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-5 font-display font-bold uppercase leading-[0.9] tracking-tight text-[clamp(2.8rem,9vw,8rem)]",
                        children: [
                            "Let's build",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 266,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#d7ff3e]",
                                children: "what's next."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 266,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-xl text-[15px] leading-relaxed text-[#a7adb5]",
                            children: "Have a role, a product idea, or a broken booking flow that needs saving? My inbox is open — I reply within 24 hours on working days."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: copyEmail,
                                        className: "group flex items-center justify-between gap-4 rounded-2xl border border-[#d7ff3e]/40 bg-[#d7ff3e]/[0.06] p-6 text-left transition-colors hover:bg-[#d7ff3e]/[0.1]",
                                        "aria-label": "Copy email address",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono2 text-[10px] tracking-[0.24em] text-[#d7ff3e] uppercase",
                                                        children: "✉ Email — click to copy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 break-all font-display text-lg font-bold md:text-xl",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d7ff3e] text-black transition-transform group-hover:scale-110",
                                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono2 text-[11px] tracking-[0.14em] text-[#d7ff3e] uppercase",
                                        role: "status",
                                        children: "✓ Copied to clipboard — talk soon."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 290,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phoneHref,
                                                className: "rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 transition-colors hover:border-[#d7ff3e]/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 18,
                                                        className: "text-[#d7ff3e]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 font-display font-bold",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 293,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-white/10 bg-[#0c0d0f] p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 18,
                                                        className: "text-[#d7ff3e]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                        children: "Base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 font-display text-[15px] font-bold leading-snug",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].location
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 transition-colors hover:border-[#d7ff3e]/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                            children: "LinkedIn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 font-display text-[15px] font-bold",
                                                            children: [
                                                                "Connect ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                    size: 14,
                                                                    className: "inline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 177
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 114
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://drdermat.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 transition-colors hover:border-[#d7ff3e]/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                            children: "Live work"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 font-display text-[15px] font-bold",
                                                            children: [
                                                                "drdermat.com ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                    size: 14,
                                                                    className: "inline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 183
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 115
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-[#0c0d0f] p-5 font-mono2 text-[11px] leading-relaxed tracking-[0.06em] text-[#6b7280]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#d7ff3e]",
                                                children: "$"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            " Prefer email apps? ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "u-link text-white",
                                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}?subject=${encodeURIComponent("Project inquiry — via portfolio")}`,
                                                children: "Open a pre-addressed email →"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 315,
                                                columnNumber: 76
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl border border-white/10 bg-[#0c0d0f] p-7 md:p-9",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                                                className: "text-white",
                                                children: "◉ New transmission"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mono"], {
                                                className: "text-[#6b7280]",
                                                children: "avg. reply < 24h"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: onSubmit,
                                        className: "mt-6 space-y-4",
                                        noValidate: false,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                                children: "Your name *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                minLength: 2,
                                                                maxLength: 120,
                                                                value: form.name,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        name: e.target.value
                                                                    }),
                                                                placeholder: "Ada Lovelace",
                                                                className: inputCls,
                                                                autoComplete: "name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                                children: "Email *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                required: true,
                                                                type: "email",
                                                                maxLength: 200,
                                                                value: form.email,
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        email: e.target.value
                                                                    }),
                                                                placeholder: "you@company.com",
                                                                className: inputCls,
                                                                autoComplete: "email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                        children: "Subject"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: form.subject,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                subject: e.target.value
                                                            }),
                                                        className: inputCls,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Project inquiry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Full-time role"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Freelance build"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Code walkthrough request"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Just saying hi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mb-1.5 block font-mono2 text-[10px] tracking-[0.2em] text-[#6b7280] uppercase",
                                                        children: "Message *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        required: true,
                                                        minLength: 10,
                                                        maxLength: 5000,
                                                        rows: 5,
                                                        value: form.message,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                message: e.target.value
                                                            }),
                                                        placeholder: "What are we building? Timeline, stack, links — anything helps.",
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(inputCls, "resize-y")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            status === "err" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-red-400/40 bg-red-500/10 p-3.5 text-sm text-red-200",
                                                role: "alert",
                                                children: [
                                                    "⚠ ",
                                                    error
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 351,
                                                columnNumber: 36
                                            }, this),
                                            status === "ok" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-[#d7ff3e]/50 bg-[#d7ff3e]/10 p-3.5 text-sm text-[#eaffb0]",
                                                role: "status",
                                                children: [
                                                    "✓ Transmission received — saved securely. I'll reply within 24 working hours. For anything urgent: ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Magnetic"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: status === "sending",
                                                    className: "flex w-full items-center justify-center gap-3 rounded-full bg-[#d7ff3e] px-7 py-4 font-display text-sm font-bold tracking-wide text-black transition-all hover:glow-lime disabled:opacity-60 sm:w-auto sm:px-10",
                                                    children: status === "sending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                size: 16,
                                                                className: "animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 45
                                                            }, this),
                                                            " TRANSMITTING…"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 113
                                                            }, this),
                                                            " SEND MESSAGE"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono2 text-[10px] tracking-[0.12em] text-[#4b5057] uppercase",
                                                children: "Stored securely · never shared · no spam, ever"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
function Footer() {
    const [top, setTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-white/10 bg-[#050607]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1400px] px-5 py-10 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-[clamp(2rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight",
                                    children: [
                                        "Ankit",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#d7ff3e]",
                                            children: "—"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 385,
                                            columnNumber: 20
                                        }, this),
                                        "Singh",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#4b5057]",
                                            children: "®"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 385,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 font-mono2 text-[11px] tracking-[0.18em] text-[#6b7280] uppercase",
                                    children: [
                                        "Beyond the interface · Designed & engineered by hand · ",
                                        new Date().getFullYear()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}`,
                                    className: "flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono2 text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-[#d7ff3e] hover:text-[#d7ff3e]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 390,
                                            columnNumber: 246
                                        }, this),
                                        " Email"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono2 text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-[#d7ff3e] hover:text-[#d7ff3e]",
                                    children: [
                                        "LinkedIn ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 391,
                                            columnNumber: 279
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }),
                                    onMouseEnter: ()=>setTop(true),
                                    onMouseLeave: ()=>setTop(false),
                                    className: "flex items-center gap-2 rounded-full bg-[#f4f1e8] px-5 py-2.5 font-mono2 text-[11px] tracking-[0.14em] text-black uppercase transition-colors hover:bg-[#d7ff3e]",
                                    "aria-label": "Back to top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                y: top ? -2 : 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                                lineNumber: 399,
                                                columnNumber: 58
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        " Top"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-col justify-between gap-3 border-t border-white/8 pt-6 font-mono2 text-[10px] tracking-[0.16em] text-[#4b5057] uppercase sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "React · Next.js · Node · Express · MongoDB"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Noida, IN — ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phone,
                                " — All facts per resume"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
            lineNumber: 381,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/effects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/sections1.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/sections2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/immersive-developer-portfolio-design/src/components/sections3.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function HomePage() {
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-[#070809] text-[#f4f1e8]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#profile",
                className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[#d7ff3e] focus:px-5 focus:py-2.5 focus:font-bold focus:text-black",
                children: "Skip to content"
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            !started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntroLoader"], {
                onDone: ()=>setStarted(true)
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spotlight"], {}, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {
                started: started
            }, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {
                        started: started
                    }, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Marquee"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["About"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expertise"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Journey"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lab"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Approach"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$immersive$2d$developer$2d$portfolio$2d$design$2f$src$2f$components$2f$sections3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/immersive-developer-portfolio-design/src/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_immersive-developer-portfolio-design_src_0a73ano._.js.map