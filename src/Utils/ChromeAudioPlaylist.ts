import { createSignal } from "solid-js";

// Allow subscriptions, to this variable
export const [didInteract, setInteract] = createSignal(false);

let functionPlayList: Array<Function> = []

addEventListener("mousedown", documentInteract)

function documentInteract() {
    setInteract(true);
    functionPlayList.forEach(func => func());
    functionPlayList = [];

    removeEventListener("click", documentInteract);
}


export function addToPlaylist(fn: Function) {
    if (didInteract()) return;

    functionPlayList.push(fn);
}