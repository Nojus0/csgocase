import { Accessor, Component, createEffect, createSignal, Show } from "solid-js"
import { styled } from "solid-styled-components"
import { caseEvents } from "../Interfaces/Events";
import { Vector2 } from "../Utils/interfaces";
import { unlockStore } from "../Views/Unlock";
import { SecondText } from "./Text";

interface IContextMenu {
    show: Accessor<boolean>,
    position: Accessor<Vector2>,
    ref: HTMLDivElement | ((el: HTMLDivElement) => void)
}

export const ContextMenu: Component<IContextMenu> = (props) => {

    function inspect() {
        unlockStore.setContextMenu(false)
        caseEvents.onClick()
    }

    return (
        <Menu ref={props.ref} style={{ left: `${props.position().x}px`, top: `${props.position().y}px`, visibility: props.show() ? "visible" : "hidden" }}>
            <ContextEntry {...caseEvents} onClick={inspect}>
                <SecondText fontWeight={500} shadow={false}>Inspect</SecondText>
            </ContextEntry>
            <ContextEntry {...caseEvents} >
                <SecondText fontWeight={500} shadow={false}>View On Market</SecondText>
            </ContextEntry>
        </Menu >
    )
}


const Menu = styled("div")({
    background: "rgba(44, 44, 44, 0.98)",
    borderRadius: ".35rem",
    position: "absolute",
    width: "clamp(8rem, 50vw, 20rem)", // ! CHANGE LATER !
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
