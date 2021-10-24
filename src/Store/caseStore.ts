import { createStore } from "solid-js/store"

export const [caseStore, _setCaseStore] = createStore({
    isOpening: false,

    open() {
        _setCaseStore("isOpening", true)
    },

    close() {
        _setCaseStore("isOpening", false)
    }
})
