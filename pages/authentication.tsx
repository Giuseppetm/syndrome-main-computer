import TerminalInput from '@/components/terminal-input'
import { ROUTES } from '@/utils/routes'
import { Box, BoxProps, InputProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

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
  const [password, setPassword] = useState('PASSWORD')
  const passwordInput = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(() => {
    if (password.toLowerCase() === 'kronos') {
      router.push(ROUTES.MENU)
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
        <title>Authentication Page</title>
        <meta name="description" content="" />
      </Head>
      <VStack {...styles.container}>
        <VStack {...styles.terminalPasswordWrapper}>
          <TerminalInput {...styles.passwordInput} ref={passwordInput} autoFocus type="text" password={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} maxLength={10} />
        </VStack>
      </VStack>

      {/* TODO: Add skip button */}
    </>
  )
}

export default AuthenticationPage
