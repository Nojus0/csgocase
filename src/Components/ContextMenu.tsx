import { Accessor, Component, createSignal, Show } from "solid-js"
import { styled } from "solid-styled-components"
import { buttonEvents, caseEvents } from "../Interfaces/Events";
import { Vector2 } from "../Utils/interfaces";
import { MainText, SecondText } from "./Text";

const ContextWrapper = styled("div")({
    background: "rgba(44, 44, 44, 0.98)",
    borderRadius: ".35rem",
    position: "absolute",
    width: "clamp(1px, 50vw,20rem)", // ! CHANGE LATER !
    transition: "background .2s ease",
    zIndex: 100
})

const ContextEntry = styled("div")({
    width: "100%",
    margin: ".5rem 0",
    padding: "1rem 0 1rem 1.5rem",
    "&:hover": {
        background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)"
    }
})

interface IContextMenu {
    show: Accessor<boolean>,
    position: Accessor<Vector2>
}

export const ContextMenu: Component<IContextMenu> = ({ position, show, children }) => {
    return (
        <Show when={show()}>
            <div style={{ left: `${position().x}px`, top: `${position().y}px`, position: "absolute", "z-index": 100 }}>

            </div>
        </Show>
    )
}