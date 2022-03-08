import { createSignal, onCleanup, onMount } from "solid-js";
import { createSubscribable } from "./createSubscribable";

const syncAudio = new Audio();

const PLAY_INTERACTED = createSubscribable<void>();
export const [interacted, setInteracted] = createSignal(false);

function onDocumentClick() {
  if (interacted()) {
    PLAY_INTERACTED.clear();
    return removeEventListener("mousedown", onDocumentClick);
  }

  setInteracted(true);
  PLAY_INTERACTED.publish();
}

addEventListener("mousedown", onDocumentClick);

interface IPlaySync {
  src: string;
  vol?: number;
}

export function PlaySync({ src, vol = 1.0 }: IPlaySync) {
  if (!interacted()) return;

  syncAudio.src = src;
  syncAudio.volume = vol;
  syncAudio.play();
}

interface IPlayAsync {
  src: string;
  vol?: number;
  loop?: boolean;
  replayWhenAvailable?: boolean;
}

export function PlayAsync({
  loop = false,
  src,
  vol = 1.0,
  replayWhenAvailable,
}: IPlayAsync) {
  if (!interacted() && replayWhenAvailable) {
    return PLAY_INTERACTED.subscribe(() =>
      PlayAsync({ loop, src, replayWhenAvailable, vol })
    );
  }

  if (!interacted()) return;

  const audio = new Audio(src);
  audio.volume = vol;
  audio.loop = loop;
  audio.play();
}
