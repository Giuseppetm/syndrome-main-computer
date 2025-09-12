import { create } from 'zustand'

interface ControlsState {
  enableControls: boolean
  toggleControls: () => void
}

export const useControlsStore = create<ControlsState>((set) => ({
  enableControls: true,
  toggleControls: () => set((state) => ({ enableControls: !state.enableControls })),
}))
