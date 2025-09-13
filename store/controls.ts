import { create } from 'zustand'

interface ControlsState {
  enableControls: boolean
  enableAudio: boolean
  toggleControls: () => void
  toggleAudio: () => void
}

export const useControlsStore = create<ControlsState>((set) => ({
  enableControls: true,
  enableAudio: false,
  toggleControls: () => set((state) => ({ enableControls: !state.enableControls })),
  toggleAudio: () => set((state) => ({ enableAudio: !state.enableAudio })),
}))
