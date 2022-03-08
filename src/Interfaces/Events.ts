import { PlayAsync, PlaySync } from "../Utils/ChromeAudio";

export const buttonEvents = {
    onMouseOver: () => PlayAsync({ src: "/sidemenu_rollover_02.wav", vol: 0.2 }),
    onClick: () => PlayAsync({ src: "/generic_press_01.wav", vol: 0.2 }),
}

export const caseEvents = {
    onMouseOver: () => PlaySync({ src: "/itemtile_rollover_09.wav", vol: 0.2 }),
    onClick: () => {
        PlayAsync({ src: "/sidemenu_rollover_02.wav", vol: 0.3 })
    },
    onContextMenu: (e: MouseEvent) => {
        e.preventDefault();
        PlayAsync({ src: "/sidemenu_rollover_02.wav", vol: 0.2 })
    }
}