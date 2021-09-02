import type { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

export default styled("div")(({ height, src, width }: IUndragableProps) => ({
    minHeight: height,
    backgroundImage: `url(${src})`,
    minWidth: width,
    backgroundSize: `cover`,
}));

interface IUndragableProps {
    src: string;
    height: string
    width: string
}