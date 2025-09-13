import { create } from 'zustand'

interface State {
  isContentReady: boolean
  enableContent: () => void
}

export const useMainStore = create<State>((set) => ({
  isContentReady: false,
  enableContent: () => set(() => ({ isContentReady: true })),
}))
