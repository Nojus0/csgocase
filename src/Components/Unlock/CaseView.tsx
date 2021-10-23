import { Component, For, onMount, Show } from "solid-js";
import { styled } from "solid-styled-components";
import { Transition, TransitionGroup } from "solid-transition-group";
import { moveY } from "../../animations/Move";
import { ISingleCase } from "../../Interfaces/WeaponCase";
import { SolidMouseEvent } from "../../Utils/interfaces";
import { Seperator } from "../../Utils/Seperator";
import { unlockStore } from "../../Views/Unlock";
import Case from "../Case";
import { ContextMenu } from "../ContextMenu";
import { updateContextPosition, useContext } from "../useContextMenu";

interface ICaseViewerProps {
    cases: ISingleCase[];
}

export const CASE_VIEW_ANIM_DURATION = 320;

export const CaseViewer: Component<ICaseViewerProps> = ({ cases }) => {
    let caseViewRef: HTMLDivElement;
    let contextRef: HTMLDivElement;

    onMount(() =>
        useContext(
            caseViewRef,
            contextRef,
            () => unlockStore.showContextMenu,
            (val) => unlockStore.setContextMenu(val)
        )
    )

    function caseContextMenu(e: SolidMouseEvent<HTMLElement>) {
        const newContextPos = updateContextPosition(e, caseViewRef, contextRef)
        unlockStore.setPos(newContextPos);
    }


    const animation = moveY(CASE_VIEW_ANIM_DURATION, "15rem")

    return (
        <>
            <Transition {...animation}>
                <FullWidthDiv>
                    <ItemsText>Items that might be in this Container:</ItemsText>
                    <Seperator margin=".2rem 0 .65rem 0" />
                </FullWidthDiv>
            </Transition>

            <Transition {...animation}>
                <Show when={!unlockStore.isOpening}>

                    <CaseView ref={caseViewRef}>
                        <ContextMenu
                            ref={contextRef}
                            show={() => unlockStore.showContextMenu}
                            position={() => unlockStore.position}
                        />
                        <For each={cases}>
                            {(skin) => <Case onContextMenu={caseContextMenu} {...skin} />}
                        </For>
                    </CaseView>
                </Show>
            </Transition>
        </>
    );
};

const FullWidthDiv = styled("div")({
    width: "100%",
});

const CaseView = styled("div")({
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
    marginBottom: "7.25rem",
    borderRadius: ".15rem",
    "&::-webkit-scrollbar": {
        width: "10px",
    },
    "&::-webkit-scrollbar-track": {
        borderRadius: "15rem",
        background: "#444444",
    },
    "&::-webkit-scrollbar-thumb": {
        borderRadius: "5rem",
        background: "#2e2e2e",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        background: "#2e2e2e",
    },
});

const ItemsText = styled("p")({
    alignSelf: "flex-start",
    color: "#CDCCC9",
    margin: ".85rem 0 .5rem 0",
});
