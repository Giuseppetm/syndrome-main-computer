import { useMainStore } from '@/store'
import { useControlsStore } from '@/store/controls'
import { useRef } from 'react'

export enum SoundKey {
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS',
  MENU_OPENING = 'MENU_OPENING',
  SUPERS_OPENING = 'SUPERS_OPENING', // Not using this one for now
  TERMINATED = 'TERMINATED',
}

export const soundMap: Record<SoundKey, string> = {
  [SoundKey.AUTHENTICATION]: '/audio/authentication.mp3',
  [SoundKey.AUTHENTICATION_SUCCESS]: '/audio/authentication-success.mp3',
  [SoundKey.MENU_OPENING]: '/audio/menu-opening.mp3',
  [SoundKey.SUPERS_OPENING]: '/audio/supers-opening.mp3',
  [SoundKey.TERMINATED]: '/audio/terminated.mp3',
}

/**
 * @name useSoundPlayer
 *
 * @description
 * A custom React hook that allows playback of local `.mp3` sound assets
 * based on predefined keywords. Each sound is mapped to a `SoundKey` enum,
 * and can be triggered programmatically with optional volume control.
 *
 * Example usage:
 * ```tsx
 * const { play } = useSoundPlayer();
 * play(SoundKey.SUCCESS);
 * ```
 *
 * This hook uses the native `HTMLAudioElement` API and does not rely on external libraries.
 * It supports interrupting previous sounds and playing new ones on demand.
 *
 * @author Giuseppe Del Campo
 */
const useSoundPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isContentReady } = useMainStore()
  const { enableAudio } = useControlsStore()

  /**
   * Plays a sound associated with the given SoundKey.
   *
   * @param key - The keyword representing the sound to play.
   * @param volume - Optional volume level (0 to 1). Default is 1.
   */
  const play = (key: SoundKey, volume: number = 1, stopPreviousSound?: boolean) => {
    if (!isContentReady || !enableAudio) return

    const src = soundMap[key]
    if (!src) return

    // Stop previous sound
    if (stopPreviousSound && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    // Create new audio instance
    const audio = new Audio(src)
    audio.volume = volume
    audio.play().catch((err) => {
      console.warn('Playback failed:', err)
    })
    audioRef.current = audio
  }

  return { play }
}

export default useSoundPlayer
