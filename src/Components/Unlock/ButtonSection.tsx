import { Component } from "solid-js";
import { Transition } from "solid-transition-group";
import { styled } from "solid-styled-components";
import { moveY } from "../../animations/Move";
import { buttonEvents } from "../../Interfaces/Events";
import { GreenButton, TextButton } from "../Buttons";
import { MediumSpan, SecondText } from "../Text";
import UndragableImage from "../../Utils/UndragableImage";
import { setStore, unlockStore } from "../../Views/Unlock";
import { CASE_VIEW_ANIM_DURATION } from "./CaseView";


interface IButtonSectionProps {
    caseName: string,
    keyImg: string
}

export const ButtonSection: Component<IButtonSectionProps> = ({ keyImg, caseName }) => {

    function openCase() {
        buttonEvents.onClick();

        setStore("isOpening", !unlockStore.isOpening);

        if(unlockStore.showOpening) setStore("showOpening", false)

        setTimeout(() => {
            setStore("showOpening", true);
        }, CASE_VIEW_ANIM_DURATION);
    }

    return (
        <Transition {...moveY(200, "5rem")}>
            <BottomKeyBox>
                <KeyImg height="7rem" width="7rem" style={{ "background-image": `url(${keyImg})` }} />
                <SecondText align="center" size="1.05rem" shadow={false}>
                    This action requires a
                    <MediumSpan>{caseName} Case Key</MediumSpan>
                </SecondText>
                <ButtonKeyBox>
                    <GreenButton {...buttonEvents} onClick={openCase}>Unlock Container</GreenButton>
                    <TextButton {...buttonEvents}>Close</TextButton>
                </ButtonKeyBox>
            </BottomKeyBox>
        </Transition>
    )
}


const BottomKeyBox = styled("div")({
    display: "flex",
    // flexWrap: "wrap",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0 1rem 0"

})

const ButtonKeyBox = styled("div")({
    display: "flex",
    justifyContent: "center",
    padding: "0 0 0 1rem",
    "button": {
        margin: "0 .25rem"
    }
})

const KeyImg = styled(UndragableImage)({
    "@media only screen and (max-width: 700px)": {
        display: "none"
    }
})