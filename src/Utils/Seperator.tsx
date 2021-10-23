import { styled } from "solid-styled-components";

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
