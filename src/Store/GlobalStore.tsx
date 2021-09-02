import { createSignal } from "solid-js"
import { createMutable } from "solid-js/store"

interface IContextMenu {
    show: boolean,
    x: number,
    y: number
}

export const [isBlured, setBlured] = createSignal(true);