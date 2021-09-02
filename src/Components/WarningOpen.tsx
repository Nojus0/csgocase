import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { SecondText } from "./Text";

const WarnText = styled("p")({
    fontWeight: 400,
    minHeight: "1rem",
    margin: 0,
    color: "#CDCCC9",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
})

const WarnShell = styled("div")({
    display: "flex",
    margin: ".45rem",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    minWidth: "1.15rem",
    minHeight: "1.15rem",
    boxShadow: "0px 1px 7px rgba(0, 0, 0, 0.5);",
})
const WarnShellText = styled("p")({
    fontWeight: 600,
    minHeight: ".85rem",
    fontSize: ".85rem",
    margin: 0,
    color: "#434340",
    textShadow: "0px 8px 7px rgba(0, 0, 0, 1);",
})
const WarnWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: ".25rem 0 0 0"
})

const WarningOpen: Component = () => {

    return (
        <WarnWrapper>
            <WarnShell>
                <WarnShellText>i</WarnShellText>
            </WarnShell>
            <WarnText>This Container can only be opened once</WarnText>
        </WarnWrapper>
    );
};

export default WarningOpen;
