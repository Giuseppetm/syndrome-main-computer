import SkipButton from '@/components/skip-button'
import TerminalInput from '@/components/terminal-input'
import { ROUTES } from '@/utils/routes'
import { BoxProps, InputProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MotionVStack = motion(VStack)

/**
 * @name AuthenticationPage
 *
 * @description
 * Page rendered when user needs to authenticate.
 *
 * @author Giuseppe Del Campo
 */
const AuthenticationPage = () => {
  const styles = useSlotRecipe({ key: 'authenticationPage' })({}) as Record<string, BoxProps & StackProps & InputProps>
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [password, setPassword] = useState('PASSWORD')
  const passwordInput = useRef<HTMLInputElement>(null)

  const SUBMIT_TIMEOUT = 300

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (password !== 'PASSWORD') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = useCallback(() => {
    if (password.toLowerCase() === 'kronos') {
      setSubmitting(true)
      setTimeout(() => {
        router.push(ROUTES.MENU)
      }, SUBMIT_TIMEOUT)
    }
  }, [password, router])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const key = event.which || event.keyCode || 0
      if (event.code === 'Enter' || event.code === 'NumpadEnter' || key === 13) {
        event.preventDefault()
        handleSubmit()
      }
    }

    const escHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push(ROUTES.HOME)
      }
    }

    window.addEventListener('keydown', listener)
    window.addEventListener('keyup', escHandler)

    return () => {
      window.removeEventListener('keydown', listener)
      window.removeEventListener('keyup', escHandler)
    }
  }, [password, router, handleSubmit])

  useEffect(() => {
    setTimeout(() => {
      setPassword('')
      passwordInput.current?.focus()
    }, 1500)
  }, [])

  return (
    <>
      <Head>
        <title>Authentication Required | Syndrome Main Computer</title>
        <meta
          name="description"
          content="Access the Syndrome Main Computer system with your secure credentials. Authentication is required to proceed to the main menu."
        />
        <meta property="og:title" content="Authentication Required | Syndrome Main Computer" />
        <meta property="og:description" content="Secure login to access the Syndrome Main Computer system. Enter the password to continue." />
      </Head>

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
