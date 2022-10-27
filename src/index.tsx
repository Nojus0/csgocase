import { Route, Router, Routes } from "solid-app-router";
import { Component, createSignal, onMount } from "solid-js";
import { render } from "solid-js/web";
import { createGlobalStyles } from "solid-styled-components";
import CaseView from "./CaseView";
import { ICompleteCase } from "./Interfaces";
const prisma_case = import("./Interfaces/Prisma");

const GlobalStyles = createGlobalStyles({
    "*": {
        fontFamily: "stratum, sans-serif",
        userSelect: "none"
    },
    "html,body": {
        width: "100%",
        height: "100%"
    }
})

const loading_case: ICompleteCase = {
    name: "Loading",
    description: "",
    keyImg: "",
    skins: []
}

const Root: Component = () => {

    const [currentCase, setCurrentCase] = createSignal<ICompleteCase>(loading_case)

    onMount(async () => {
        const loaded = await prisma_case;
        setCurrentCase(loaded.default);
    })

    return (
        <>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<CaseView case={currentCase()} />} />
                </Routes>
            </Router>
        </>
    )
}

render(() => <Root />, document.getElementById("root"));
