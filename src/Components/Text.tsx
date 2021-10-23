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