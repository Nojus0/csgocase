import { Component, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { styled } from "solid-styled-components";
import Case from "../Components/Case";
import { GreenButton, TextButton } from "../Components/Buttons";
import { CircleHalf } from "../Components/CircleHalf";
import WarningOpen from "../Components/WarningOpen";
import { buttonEvents } from "../Interfaces/Events";
import { MediumSpan, SecondText } from "../Components/Text";
import UndragableImage from "../Utils/UndragableImage";
import { ICompleteCase } from "../Interfaces/WeaponCase";
import { ContextMenu, pos, setPos, setShow } from "../Components/ContextMenu";
import { SolidMouseEvent } from "../Utils/interfaces";

const Unlock: Component<ICompleteCase> = ({ name, skins, keyImg }) => {

    let caseViewRef: HTMLDivElement;
    onMount(() => {
        const onClick = (e: MouseEvent) => setShow(
            caseViewRef.contains(e.target as Node)
            && // * Bellow, exludes self *
            e.target !== caseViewRef
        )
        addEventListener("click", onClick)
        onCleanup(() => removeEventListener("click", onClick));
    })

    function caseClicked(e: SolidMouseEvent<HTMLDivElement>) {
        // ! Examine !
        var rect = caseViewRef.getBoundingClientRect();
        const relX = e.clientX + caseViewRef.scrollLeft - rect.left
        const relY = e.clientY + caseViewRef.scrollTop - rect.top;
        setPos({ x: relX, y: relY });
    }

    return (
        <Wrapper>
            <HalfModified />
            <Container >
                <TopText>Unlock Container</TopText>
                <DescriptionText>Unlock <b>{name} Case</b> </DescriptionText>
                <WarningOpen />
                <ItemsText>Items that might be in this Container:</ItemsText>
                <Seperator margin=".2rem 0 .65rem 0" />
                <CaseView ref={caseViewRef}>
                    <ContextMenu />
                    <For each={skins}>
                        {skin => <Case onClick={caseClicked} {...skin} />}
                    </For>
                </CaseView>

                <Seperator color="grey" margin="1.5rem 0 .65rem 0" width="clamp(1px, 100%, 37.5rem)" />

                <BottomKeyBox>
                    <KeyImg height="7rem" width="7rem" src={keyImg} />
                    <SecondText align="center" size="1.05rem" shadow={false}>This action requires a <MediumSpan>{name} Case Key</MediumSpan></SecondText>
                    <ButtonKeyBox>
                        <GreenButton {...buttonEvents}>Unlock Container</GreenButton>
                        <TextButton {...buttonEvents}>Close</TextButton>
                    </ButtonKeyBox>
                </BottomKeyBox>
            </Container>
        </Wrapper >
    );
};

export default Unlock;

const TopText = styled("h1")({
    color: "#CDCCC9",
    minHeight: "2rem",
    fontWeight: 500,
    margin: "1rem 0 0 0"
})
const DescriptionText = styled("p")({
    color: "#CDCCC9",
    minHeight: "1rem",
    margin: ".5rem 0 0 0"
})

const Wrapper = styled("div")({
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

const CaseView = styled("div")({
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    overflowY: "auto",
    maxHeight: "80vh",
    borderRadius: ".15rem",
    "&::-webkit-scrollbar": {
        width: "10px"
    },
    "&::-webkit-scrollbar-track": {
        borderRadius: "15rem",
        background: "#444444"
    },
    "&::-webkit-scrollbar-thumb": {
        borderRadius: "5rem",
        background: "#2e2e2e"
    },
    "&::-webkit-scrollbar-thumb:hover": {
        background: "#2e2e2e"
    }
})


const ItemsText = styled("p")({
    alignSelf: "flex-start",
    color: "#CDCCC9",
    margin: ".85rem 0 .5rem 0"
})

interface ISeperator {
    width?: string,
    color?: string,
    margin?: string
}

const Seperator = styled("div")(({ width = "100%", color = "#CDCCC9", margin = "0" }: ISeperator) => ({
    width,
    margin,
    height: ".08rem",
    background: color,
}))

const Container = styled("div")({
    width: "clamp(1px, 95vw, 100%)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center"
})

const HalfModified = styled(CircleHalf)({
    position: "absolute",
    top: "50%",
    zIndex: -1,
    left: "50%",
    transform: "translate(-50%, -50%)",
})

const BottomKeyBox = styled("div")({
    display: "flex",
    // flexWrap: "wrap",
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