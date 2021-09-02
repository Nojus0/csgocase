import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { styled } from "solid-styled-components";
import PrismaCase from "./Interfaces/Prisma";
import { isBlured, setBlured } from "./Store/GlobalStore";
import { PlayAsync } from "./Utils/ChromeAudio";
import Unlock from "./Views/Unlock";

const VideoBackground = styled("video")((props: { blured: boolean }) => ({
  position: "absolute",
  top: 0,
  width: "100vw",
  objectFit: "fill",
  filter: props.blured ? "blur(.65rem)" : "",
  transition: "filter 250ms ease-in-out",
  height: "100vh"
}))

const WholeWrapper = styled("div")({
  position: "relative",
  display: "flex",
})

const RelativeZindex = styled("div")((props: { zindex: number }) => ({
  position: "relative",
  zIndex: props.zindex
}))

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


  PlayAsync({ src: "/bg_anubis_01.wav", replayWhenAvailable: true, vol: 0.15, loop: true });
  PlayAsync({ src: "/case_drop_01.wav", replayWhenAvailable: true, vol: 0.15 });

  return (
    <WholeWrapper>

      <RelativeZindex zindex={1}>
        <BackgroundImage blured={isBlured()} />
      </RelativeZindex>

      <RelativeZindex zindex={10}>
        <Unlock {...PrismaCase} />
      </RelativeZindex>

    </WholeWrapper>
  );
};

export default App;
