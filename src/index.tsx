import { Route, Router, Routes } from "solid-app-router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { createGlobalStyles } from "solid-styled-components";
import App from "./App";

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

render(() => (
    <>
        <GlobalStyles />
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </>

), document.getElementById("root"));
