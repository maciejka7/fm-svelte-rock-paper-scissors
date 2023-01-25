import { writable } from 'svelte/store'

const initialState = {
    score: 0
}

export const scoreStore = writable(initialState)


export const actions = {
    increase: () => scoreStore.update(store => ({score: store.score+1}))
}