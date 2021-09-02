import { styled } from "solid-styled-components";

export const GreenButton = styled("button")({
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    fontWeight: 500,
    fontSize: "1rem",
    outline: "none",
    padding: ".75rem",
    borderRadius: ".2rem",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#52C55F",
    }
})


export const TextButton = styled("button")({
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "1rem",
    outline: "none",
    padding: ".5rem 1rem",
    borderRadius: ".2rem",
    background: "linear-gradient(to left, transparent 50%, rgba(0,0,0,0.2) 50%) right",
    backgroundSize: "200%",
    transition: "300ms ease",
    "&:hover": {
        backgroundPosition: "left"
    }
})