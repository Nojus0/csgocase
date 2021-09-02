import { Route, Router, Routes } from "solid-app-router";
import { render } from "solid-js/web";
import { createGlobalStyles } from "solid-styled-components";
import App from "./App";
const GlobalStyles = createGlobalStyles({
    "*": {
        fontFamily: "stratum, sans-serif",
        userSelect: "none"
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
