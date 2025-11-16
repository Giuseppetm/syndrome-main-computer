import EncounterLayout from '@/layouts/encounter'
import NavigationControls from '@/components/navigation-controls'
import useSoundPlayer, { SoundKey } from '@/hooks/sound'
import { useEffect, useRef, useState } from 'react'
import { encounters, omnidroids, supers } from '@/data'
import { Encounter, Omnidroid, Super } from '@/types'
import { NextPage } from 'next'
import { SITE_URL } from '@/data/metadata'
import { ROUTES } from '@/utils/routes'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

/**
 * @name EncounterPage
 *
 * @description
 * Renders the details of a specific encounter between a **Super** and an **Omnidroid**.
 *
 * @remarks
 * Features:
 * - Displays encounter details via {@link EncounterLayout}.
 * - Provides navigation with {@link NavigationControls}.
 *
 * @author Giuseppe Del Campo
 */
const EncounterPage: NextPage = () => {
  const router = useRouter()
  const { play } = useSoundPlayer()
  const previousSlugRef = useRef<string | null>(null)

  const [loading, setLoading] = useState(true)
  const [encounterData, setEncounterData] = useState<Encounter | null>(null)
  const [superData, setSuperData] = useState<Super | null>(null)
  const [omnidroidData, setOmnidroidData] = useState<Omnidroid | null>(null)

  useEffect(() => {
    if (!router.isReady) return

    const superSlug = String(router.query.superSlug ?? '')
    const omnidroidSlug = String(router.query.omnidroidSlug ?? '')

    setLoading(true)

    const e = encounters.find((e) => e.superSlug === superSlug && e.omnidroidSlug === omnidroidSlug) ?? null
    const s = e ? (supers.find((s) => s.slug === e.superSlug) ?? null) : null
    const o = e ? (omnidroids.find((o) => o.slug === e.omnidroidSlug) ?? null) : null

    setEncounterData(e)
    setSuperData(s)
    setOmnidroidData(o)
    setLoading(false)
  }, [router.isReady, router.query.superSlug, router.query.omnidroidSlug])

  useEffect(() => {
    if (!router.isReady) return
    const currentSlug = `${router.query.superSlug}-${router.query.omnidroidSlug}`
    if (previousSlugRef.current !== currentSlug) {
      setTimeout(() => {
        play(SoundKey.TERMINATED)
      }, 25)
      previousSlugRef.current = currentSlug
    }
  }, [router.query.superSlug, router.query.omnidroidSlug, play, router.isReady])

  if (!router.isReady || loading) {
    return <div>Loading…</div>
  }

  if (!encounterData || !superData || !omnidroidData) {
    return <div>Super or Omnidroid not found; stick to the provided data.</div>
  }

  const title = `Encounter: ${superData.name} vs ${omnidroidData.name} | Syndrome Main Computer`
  const description = `Explore the battle between ${superData.name} (Threat Rating: ${superData.threatRating}) and ${omnidroidData.name}.`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.ENCOUNTER}/${superData.slug}/${omnidroidData.slug}`,
          images: [
            {
              url: `/images/supers/${superData.img}`,
              alt: title,
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <EncounterLayout superData={superData} omnidroidData={omnidroidData} encounterData={encounterData} />

      <NavigationControls />
    </>
  )
}

export default EncounterPage
