import { addToPlaylist, didInteract } from "./ChromeAudioPlaylist";

const syncAudio = new Audio();

interface IPlaySync {
    src: string,
    vol?: number
}

export function PlaySync({ src, vol = 1.0 }: IPlaySync) {
    if (!syncAudio.paused || !didInteract()) return;
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
    replayWhenAvailable = false,
    src,
    vol = 1.0,
}: IPlayAsync) {

    if (replayWhenAvailable && !didInteract()) {
        return addToPlaylist(() => PlayAsync({ loop, replayWhenAvailable, vol, src }))
    } else if (!didInteract()) return;
    
    const audio = new Audio(src);
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
}
