import { onCleanup, onMount } from "solid-js";
import { SolidMouseEvent, Vector2 } from "../Utils/interfaces";

export function useContext(
    container: HTMLElement,
    contextMenu: HTMLElement,
    getShow: () => boolean,
    setShow: (val: boolean) => void
) {

    // * Click check hide context menu. *
    const onClick = (e: SolidMouseEvent<HTMLElement>) => {

        if (
            // * If clicked on Context Menu
            contextMenu.contains(e.target as Node) ||
            // * Or If currently not showing
            !getShow()
        ) return;

        setShow(false);
        console.log(`hide`)
    }

    const onContextMenu = (clicked: MouseEvent) => {
        clicked.preventDefault();

        if (contextMenu.contains(clicked.target as Node)) return;

        setShow(
            // * Check if target is inside CaseView *
            container.contains(clicked.target as Node)
            && // * Bellow, exludes self *
            clicked.target !== container
        )
    }

    onMount(() => {
        addEventListener("click", onClick);
        addEventListener("contextmenu", onContextMenu)
    })

    onCleanup(() => {
        removeEventListener("contextmenu", onContextMenu)
        removeEventListener("click", onClick);
    });
}



export function updateContextPosition(
    e: SolidMouseEvent<HTMLElement>,
    container: HTMLElement,
    contextMenu: HTMLElement,
): Vector2 {
    const rect = container.getBoundingClientRect();
    const relX = e.clientX + container.scrollLeft - rect.left
    const relY = e.clientY + container.scrollTop - rect.top;

    const overflownRight = Math.max((e.x + contextMenu.offsetWidth) - container.offsetWidth, 0);
    const overflowBottom = Math.max((relY + contextMenu.offsetHeight) - container.scrollHeight, 0);

    return { x: relX - overflownRight, y: relY - overflowBottom };
}