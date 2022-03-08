import {
  Component,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { styled } from "solid-styled-components";
import Case from "./Components/Case";
import {
  CircleHalf,
  GreenButton,
  MediumSpan,
  RelativeZindex,
  SecondText,
  Seperator,
  TextButton,
  undragableImage,
} from "./Components/Styled";
import { Header } from "./Components/UnlockHeader";
import { isBlured } from "./Store/GlobalStore";
import { PlayAsync } from "./Utils/ChromeAudio";
import { ICompleteCaseProps } from "./Interfaces";
import { Transition, TransitionGroup } from "solid-transition-group";
import { moveY } from "./animations/Move";
import { caseStore } from "./Store/CaseStore";
import { buttonEvents } from "./Interfaces/Events";
const CaseView: Component<ICompleteCaseProps> = (props) => {
  PlayAsync({
    src: "/bg_anubis_01.wav",
    vol: 1,
    loop: true,
    replayWhenAvailable: true,
  });

  PlayAsync({ src: "/case_drop_01.wav", vol: 1, replayWhenAvailable: true });

  return (
    <>
      <Background />
      <Wrapper>
        <HalfModified />
        <Container>
          <Header case={props.case} />

          <Transition {...moveY(300, "15rem")}>
            <Show when={!caseStore.isOpening}>
              <FullWidthDiv>
                <ItemsText>Items that might be in this Container:</ItemsText>
                <Seperator margin=".2rem 0 .65rem 0" />
              </FullWidthDiv>
            </Show>
          </Transition>

          <Transition {...moveY(300, "15rem")}>
            <Show when={!caseStore.isOpening}>
              <DivViewer>
                <For each={props.case.skins}>
                  {(skin) => <Case {...skin} />}
                </For>
              </DivViewer>
            </Show>
          </Transition>

          <Transition {...moveY(200, "5rem")}>
            <BottomKeyBox>
              <KeyImg
                height="7rem"
                width="7rem"
                style={{ "background-image": `url(${props.case.keyImg})` }}
              />
              <SecondText align="center" size="1.05rem" shadow={false}>
                This action requires a
                <MediumSpan>{props.case.name} Case Key</MediumSpan>
              </SecondText>
              <ButtonKeyBox>
                <GreenButton {...buttonEvents}>Unlock Container</GreenButton>
                <TextButton {...buttonEvents}>Close</TextButton>
              </ButtonKeyBox>
            </BottomKeyBox>
          </Transition>
        </Container>
      </Wrapper>
    </>
  );
};

export default CaseView;

const Background: Component = () => {
  return (
    <RelativeZindex zindex={1}>
      <BackgroundImage blured={isBlured()} />
    </RelativeZindex>
  );
};

const FullWidthDiv = styled("div")({
  width: "100%",
});

const DivViewer = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  overflowY: "auto",
  overflowX: "hidden",
  maxHeight: "80vh",
  marginBottom: "7.25rem",
  borderRadius: ".15rem",
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "15rem",
    background: "#444444",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "5rem",
    background: "#2e2e2e",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#2e2e2e",
  },
});

const ItemsText = styled("p")({
  alignSelf: "flex-start",
  color: "#CDCCC9",
  margin: ".85rem 0 .5rem 0",
});

const BackgroundImage = styled("div")(({ blured }: { blured: boolean }) => ({
  backgroundImage: `url(/anubis.jpg)`,
  backgroundSize: `cover`,
  height: "100vh",
  width: "100vw",
  position: "absolute",
  top: 0,
  objectFit: "fill",
  filter: blured ? "blur(.65rem)" : "",
  transition: "filter 250ms ease-in-out",
}));

const Wrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
  zIndex: 10,
  position: "relative",
  alignItems: "center",
});

const Container = styled("div")({
  width: "clamp(1px, 95vw, 100%)",
  height: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const HalfModified = styled(CircleHalf)({
  position: "absolute",
  top: "50%",
  zIndex: -1,
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const BottomKeyBox = styled("div")({
  display: "flex",
  // flexWrap: "wrap",
  position: "absolute",
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
  margin: "0 0 1rem 0",
});

const ButtonKeyBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "0 0 0 1rem",
  button: {
    margin: "0 .25rem",
  },
});

const KeyImg = styled(undragableImage)({
  "@media only screen and (max-width: 700px)": {
    display: "none",
  },
});
