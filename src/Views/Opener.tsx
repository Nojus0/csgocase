import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { ISingleCase } from "../Interfaces/WeaponCase";


interface IOpenerProps {
    cases: ISingleCase[]
}

export const Opener: Component<IOpenerProps> = () => {
    return (
        <Wrapper>
            <ItemView>
                <h1>
                    sda
                </h1>
            </ItemView>
        </Wrapper>
    )
}

const ItemView = styled("div")({
    width: "100%",
    height: "8rem",
    background: "red"
})

const Wrapper = styled("div")({
    height: "100%",
    width: "100%",
    margin: "0 0 8.5rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
})