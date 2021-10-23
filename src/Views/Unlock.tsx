import { Component, Show } from "solid-js";
import { styled } from "solid-styled-components";
import { CircleHalf } from "../Components/CircleHalf";
import { ICompleteCase } from "../Interfaces/WeaponCase";
import { Vector2 } from "../Utils/interfaces";
import { Opener } from "./Opener";
import { createStore } from "solid-js/store";
import { Header } from "../Components/Unlock/Header";
import { CaseViewer } from "../Components/Unlock/CaseView";
import { PlayAsync } from "../Utils/ChromeAudio";
import { RelativeZindex } from "../Utils/Components";
import { ButtonSection } from "../Components/Unlock/ButtonSection";

export const [unlockStore, setStore] = createStore({
    isOpening: false,
    showOpening: false,

    showContextMenu: false,
    position: { x: 0, y: 0 } as Vector2,

    setPos(e: Vector2) {
        setStore("position", e)
    },
    setContextMenu(val: boolean) {
        setStore("showContextMenu", val);
    }
})

const Unlock: Component<ICompleteCase> = ({ name, skins, keyImg }) => {

    PlayAsync({ src: "/bg_anubis_01.wav", replayWhenAvailable: true, vol: 0.15, loop: true });
    PlayAsync({ src: "/case_drop_01.wav", replayWhenAvailable: true, vol: 0.15 });


    return (
        <RelativeZindex zindex={10}>
            <Wrapper>
                <HalfModified />
                <Container >
                    <Header caseName={name} />

                    <CaseViewer cases={skins} />

                    <Show when={unlockStore.showOpening}>
                        <Opener cases={skins} />
                    </Show>

                    <ButtonSection caseName={name} keyImg={keyImg} />
                </Container>
            </Wrapper >
        </RelativeZindex>
    );
};

export default Unlock;


const Wrapper = styled("div")({
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})




const Container = styled("div")({
    width: "clamp(1px, 95vw, 100%)",
    height: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

const HalfModified = styled(CircleHalf)({
    position: "absolute",
    top: "50%",
    zIndex: -1,
    left: "50%",
    transform: "translate(-50%, -50%)",
})
