import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { ICompleteCase, ICompleteCaseProps } from "../Interfaces/WeaponCase";
import WarningOpen from "./WarningOpen";

interface IHeaderProps {
    caseName: string
}

export const Header: Component<ICompleteCaseProps> = (props) => {
    return (
        <TopWrapper>
            <TopText>Unlock Container</TopText>
            <DescriptionText>Unlock <b>{props.case.name} Case</b> </DescriptionText>
            <WarningOpen />
        </TopWrapper>
    )
}

const TopWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
})

const TopText = styled("h1")({
    color: "#CDCCC9",
    minHeight: "2rem",
    fontWeight: 500,
    margin: "1rem 0 0 0"
})
const DescriptionText = styled("p")({
    color: "#CDCCC9",
    minHeight: "1rem",
    margin: ".5rem 0 0 0"
})