import { Component, createSignal, Show } from "solid-js"
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

// ! When you understand SolidJs stores and better state methods replace this !
export const [show, setShow] = createSignal(false);
export const [pos, setPos] = createSignal<Vector2>({ x: 0, y: 0 })

export const ContextMenu: Component = () => {

    function soundAndClose() {
        buttonEvents.onClick();
        setShow(false);
    }

    return (
        <Show when={show()}>
            <ContextWrapper style={{ left: `${pos().x}px`, top: `${pos().y}px` }}>
                <ContextEntry onClick={soundAndClose} onMouseOver={caseEvents.onMouseOver}>
                    <SecondText color="grey" shadow={false} fontWeight={500}>Inspect</SecondText>
                </ContextEntry>
                <ContextEntry onClick={soundAndClose} onMouseOver={caseEvents.onMouseOver}>
                    <SecondText color="grey" shadow={false} fontWeight={500}>View On Market</SecondText>
                </ContextEntry>
            </ContextWrapper>
        </Show>

    )
}