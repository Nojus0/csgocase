import { styled } from "solid-styled-components"
import { TextAlignProperty, FontWeightProperty } from "csstype"
export const MainText = styled("h1")({
    margin: 0,
    marginTop: ".35rem",
    fontWeight: 500,
    // maxWidth: "7.85rem",
    color: "white",
    letterSpacing: "1px",
    fontSize: ".90rem",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    minHeight: "1rem",
})

interface ISecondText {
    shadow?: boolean,
    size?: string,
    align?: TextAlignProperty,
    fontWeight?: FontWeightProperty
}

export const SecondText = styled("p")(({ shadow = true, size = "0.90rem", align = "initial", fontWeight = 400 }: ISecondText) => ({
    fontWeight,
    minHeight: size,
    fontSize: size,
    textAlign: align != "initial" ? align : "initial",
    margin: 0,
    color: "#CDCCC9",
    textShadow: shadow ? "0px 2px 7px rgba(0, 0, 0, 1);" : "",
}))

interface IMediumSpan {
    margin?: string
}

export const MediumSpan = styled("span")(({ margin = "0" }: IMediumSpan) => ({
    fontWeight: 500,
    margin
}))

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
        width: "12rem",
        height: "6rem",
        top: "59%",
        left: "50%",
        borderBottomRightRadius: "100rem",
        borderBottomLeftRadius: "100rem",
        borderBottom: "0",
        backgroundColor: "rgba(0,0,0,0.1)",
    }
})


export const GreenButton = styled("button")({
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    fontWeight: 500,
    fontSize: "1rem",
    outline: "none",
    padding: ".75rem",
    borderRadius: ".2rem",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#52C55F",
    }
})


export const TextButton = styled("button")({
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "1rem",
    outline: "none",
    padding: ".5rem 1rem",
    borderRadius: ".2rem",
    background: "linear-gradient(to left, transparent 50%, rgba(0,0,0,0.2) 50%) right",
    backgroundSize: "200%",
    transition: "300ms ease",
    "&:hover": {
        backgroundPosition: "left"
    }
})

interface ISeperator {
    width?: string;
    color?: string;
    margin?: string;
    height?: string;
}

export const Seperator = styled("div")(({
    width = "100%",
    color = "#CDCCC9",
    margin = "0",
    height = "0.08rem",
}: ISeperator) => ({
    width,
    margin,
    height,
    minHeight: height,
    borderRadius: ".1rem",
    background: color,
}));

export const undragableImage = styled("div")(({ height, width }: IUndragableProps) => ({
    minHeight: height,
    minWidth: width,
    backgroundSize: `cover`,
}));

interface IUndragableProps {
    height: string
    width: string
}

export const RelativeZindex = styled("div")((props: { zindex: number }) => ({
    position: "relative",
    zIndex: props.zindex
}))