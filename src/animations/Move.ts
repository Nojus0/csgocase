import { TransitionProps } from "./types";

const y_keyframes = (y: string) => [
    {
        opacity: 0,
        transform: `translateY(${y})`,
    },
    {
        opacity: 1,
        transform: "translateY(0px)",
    }
]

export const moveY = (duration = 300, y: string, onBeforeEnter?: Function, onAfterExit?: Function): TransitionProps => ({
    appear: true,
    onEnter: async (el, done) => {
        el.animate(y_keyframes(y), { duration, easing: "ease-in-out" })
            .finished.then(done);
    },
    onExit: async (el, done) => {
        el.animate(y_keyframes(y).reverse(), { duration, easing: "ease-in-out" })
            .finished.then(done)
    },
    onBeforeEnter: (el) => {
        document.body.style.overflow = "hidden";
        onBeforeEnter && onBeforeEnter();
    },
    onAfterExit: (el) => {
        document.body.style.overflow = "";
        onAfterExit && onAfterExit();
    },
})