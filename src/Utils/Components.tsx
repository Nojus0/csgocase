import { styled } from "solid-styled-components";

export const RelativeZindex = styled("div")((props: { zindex: number }) => ({
    position: "relative",
    zIndex: props.zindex
}))