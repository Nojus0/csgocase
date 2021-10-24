const syncAudio = new Audio();

interface IPlaySync {
    src: string,
    vol?: number
}

export function PlaySync({ src, vol = 1.0 }: IPlaySync) {
    // * Is playing * 
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
}: IPlayAsync) {
    const audio = new Audio(src);
    audio.volume = vol;
    audio.loop = loop;
    audio.play();
}
