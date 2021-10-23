import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { styled } from "solid-styled-components";
import PrismaCase from "./Interfaces/Prisma";
import { isBlured, setBlured } from "./Store/GlobalStore";
import { PlayAsync } from "./Utils/ChromeAudio";
import { RelativeZindex } from "./Utils/Components";
import Unlock from "./Views/Unlock";

const WholeWrapper = styled("div")({
  position: "relative",
  display: "flex",
})

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
}))

const App: Component = () => {

  return (
    <WholeWrapper>

      <RelativeZindex zindex={1}>
        <BackgroundImage blured={isBlured()} />
      </RelativeZindex>

      <Unlock {...PrismaCase} />


    </WholeWrapper>
  );
};

export default App;
