import SkipButton from '@/components/skip-button'
import TerminalInput from '@/components/terminal-input'
import { ROUTES } from '@/utils/routes'
import { BoxProps, InputProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SITE_URL } from '@/data/metadata'
import { NextSeo } from 'next-seo'
import { useMainStore } from '@/store'
import useSoundPlayer, { SoundKey } from '@/hooks/sound'

const MotionVStack = motion(VStack)

/**
 * @name AuthenticationPage
 *
 * @description
 * Page that handles user authentication before accessing th Syndrome Main Computer system.
 *
 * Users are prompted to enter a password inside a **terminal-like input field**.
 * - The default placeholder `"PASSWORD"` is shown initially and then cleared.
 * - When the user types and presses **Enter**, the input is validated:
 *   - If the password is `"kronos"` (case-insensitive), authentication succeeds and
 *     the user is redirected to the Main Menu.
 *   - Otherwise, nothing happens until the correct password is entered.
 * - The user can also press **Escape** at any moment to return to the Home page.
 * - A "Skip Authentication" button is provided for bypassing login during testing.
 *
 * @constants
 * - `SUBMIT_TIMEOUT` — delay (ms) before redirecting after correct authentication.
 *
 * @state
 * - `password` — current value of the input field.
 * - `submitting` — toggles when the form is submitting, used to style the text color.
 *
 * @returns
 * Renders the authentication screen with input, animations,
 * keyboard event handling, and skip option.
 *
 * @see SkipButton Component allowing direct bypass to the Menu.
 * @see TerminalInput Custom input styled as a terminal field.
 *
 * @author Giuseppe Del Campo
 */
const AuthenticationPage = () => {
  const styles = useSlotRecipe({ key: 'authenticationPage' })({}) as Record<string, BoxProps & StackProps & InputProps>
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [password, setPassword] = useState('PASSWORD')
  const passwordInput = useRef<HTMLInputElement>(null)
  const pageLoaded = useRef<boolean>(false)
  const { play } = useSoundPlayer()
  const { isContentReady } = useMainStore()

  const title = `"The Incredibles" - Syndrome Main Computer`
  const description = `A faithful, modern-day web recreation of Syndrome’s iconic main computer (Kronos unveiled sequence), built with Next.js and React 19. This project brings to life the cinematic interface from The Incredibles with cutting-edge web technologies.`

  const SUBMIT_TIMEOUT = 300

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (password !== 'PASSWORD') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = useCallback(() => {
    if (password.toLowerCase() === 'kronos') {
      play(SoundKey.AUTHENTICATION_SUCCESS)
      setSubmitting(true)
      setTimeout(() => {
        router.push(ROUTES.MENU)
      }, SUBMIT_TIMEOUT)
    }
  }, [password, router, play])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const key = event.which || event.keyCode || 0
      if (event.code === 'Enter' || event.code === 'NumpadEnter' || key === 13) {
        event.preventDefault()
        handleSubmit()
      }
    }

    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [password, router, handleSubmit])

  useEffect(() => {
    if (!pageLoaded.current && isContentReady) {
      play(SoundKey.AUTHENTICATION)

      setTimeout(() => {
        setPassword('')
        passwordInput.current?.focus()
      }, 1500)

      pageLoaded.current = true
    }
  }, [play, isContentReady])

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}`,
          images: [
            {
              url: '/images/seo/preview.png',
              alt: title,
              width: 1239,
              height: 630,
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      {/* @ts-expect-error Motion doesn't understand chakra props. */}
      <MotionVStack
        {...styles.container}
        initial={{ opacity: 0, filter: 'brightness(0%)' }}
        animate={{ opacity: 1, filter: 'brightness(100%)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <VStack {...styles.terminalPasswordWrapper}>
          {/* @ts-expect-error Variant is fine here. */}
          <TerminalInput
            {...styles.passwordInput}
            ref={passwordInput}
            autoFocus
            type="text"
            value={password}
            autoComplete="off"
            onChange={handleChange}
            maxLength={10}
            style={{ color: submitting ? 'white' : 'inherit', transition: 'color 0.3s ease' }}
          />
        </VStack>
      </MotionVStack>

      <SkipButton label={'Skip Authentication'} onClick={() => router.push(ROUTES.MENU)} />
    </>
  )
}

export default AuthenticationPage
