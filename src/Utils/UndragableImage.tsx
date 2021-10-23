import type { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

export default styled("div")(({ height, width }: IUndragableProps) => ({
    minHeight: height,
    minWidth: width,
    backgroundSize: `cover`,
}));

interface IUndragableProps {
    height: string
    width: string
}