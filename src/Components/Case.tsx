import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { styled } from "solid-styled-components";
import { caseEvents } from "../Interfaces/Events";
import { GreenButton } from "./Buttons";
import { MainText, SecondText } from "./Text";
import UndragableImage from "../Utils/UndragableImage";
import { CaseRarity } from "../Interfaces/colors";
import { ISingleCase } from "../Interfaces/WeaponCase";

const Case: Component<ISingleCase> = ({ skin, weapon, imageUrl, rarity }) => {
    return (
        <Wrapper {...caseEvents} >
            <ImageWrapper rarity={rarity}>
                <UndragableImage width="7.85rem" height="7rem" src={imageUrl} />
            </ImageWrapper>
            <MainText>{weapon}</MainText>
            <SecondText>{skin}</SecondText>
        </Wrapper>
    );
};

export default Case;

const Wrapper = styled("div")({
    margin: ".5rem",
})

interface IImageWrapperProps {
    rarity: CaseRarity
}

const ImageWrapper = styled("div")(({ rarity }: IImageWrapperProps) => ({
    background: "linear-gradient(0deg, #797879 0%, #303134 100%);",
    maxWidth: "7.85rem",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxShadow: "0px 9px 33px -1px rgba(0,0,0,0.5)",
    "&::after": {
        position: "absolute",
        content: "''",
        height: "100%",
        top: 0,
        left: 0,
        boxShadow: `0px 0px 10px 1px ${rarity}`,
        width: ".3rem",
        backgroundColor: rarity
    }
}))
