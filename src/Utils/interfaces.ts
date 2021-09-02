export type SolidMouseEvent<El> = MouseEvent & {
    currentTarget: El;
    target: Element;
}
export interface Vector2 {
    x: number,
    y: number
}