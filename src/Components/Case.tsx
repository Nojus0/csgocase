import { Component, createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import { styled } from "solid-styled-components";
import { caseEvents } from "../Interfaces/Events";
import { ISingleCase } from "../Interfaces/WeaponCase";
import { MainText, SecondText, undragableImage } from "./Styled";
import { CaseRarity } from "../Interfaces";

const Case: Component<ISingleCase & JSX.HTMLAttributes<HTMLDivElement>> = ({ skin, weapon, imageUrl, rarity, ...rest }) => {
    return (
        <Wrapper {...caseEvents} {...rest}>
            <ImageWrapper rarity={rarity}>
                <Image width="7.85rem" height="7rem" style={{ "background-image": `url(${imageUrl})` }} />
            </ImageWrapper>
            <MainText>{weapon}</MainText>
            <SecondText>{skin}</SecondText>
        </Wrapper>
    );
};

export default Case;

const Wrapper = styled("div")({
    margin: ".5rem",
    position: "relative"
})

interface IImageWrapperProps {
    rarity: CaseRarity
}

const Image = styled(undragableImage)({
    marginLeft: "0.3rem",
})

const ImageWrapper = styled("div")(({ rarity }: IImageWrapperProps) => ({
    background: "linear-gradient(0deg, #797879 0%, #303134 100%);",
    maxWidth: "8.15rem",
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
