import { styled } from "solid-styled-components"

export const CircleHalf = styled("div")({
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.075)",
    borderRadius: "50%",
    height: "40vw",
    width: "40vw",
    "&::after": {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        content: "''",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255, 0.1)",
        width: "15rem",
        height: "15rem"
    },
    "&::before": {
        position: "absolute",
        content: "''",
        zIndex: 1,
        transform: "translate(-50%, -50%)",
        width: "13rem",
        height: "7rem",
        top: "60%",
        left: "50%",
        borderBottomRightRadius: "100rem",
        borderBottomLeftRadius: "100rem",
        borderBottom: "0",
        backgroundColor: "rgba(0,0,0,0.05)",
    }
})