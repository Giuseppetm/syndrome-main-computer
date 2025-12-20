import EncounterLayout from '@/layouts/encounter'
import NavigationControls from '@/components/navigation-controls'
import useSoundPlayer, { SoundKey } from '@/hooks/sound'
import { useEffect, useRef, useState } from 'react'
import { Encounter, Entity } from '@/types'
import { NextPage } from 'next'
import { SITE_URL } from '@/data/metadata'
import { ROUTES } from '@/utils/routes'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useMainStore } from '@/store'

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

  const { encounterSet } = useMainStore()

  const [loading, setLoading] = useState(true)
  const [encounterData, setEncounterData] = useState<Encounter | null>(null)
  const [entityAData, setEntityAData] = useState<Entity | null>(null)
  const [entityBData, setEntityBData] = useState<Entity | null>(null)

  useEffect(() => {
    if (!router.isReady) return

    const entityASlug = String(router.query.entityA_slug ?? '')
    const entityBSlug = String(router.query.entityB_slug ?? '')

    console.log('Loading encounter data for:', entityASlug, entityBSlug)

    setLoading(true)

    const e = encounterSet.encounters.find((e) => e.entityA_slug === entityASlug && e.entityB_slug === entityBSlug) ?? null
    const allEntities = encounterSet.entities
    const a = e ? (allEntities.find((x) => x.slug === e.entityA_slug) ?? null) : null
    const b = e ? (allEntities.find((x) => x.slug === e.entityB_slug) ?? null) : null

    setEncounterData(e)
    setEntityAData(a)
    setEntityBData(b)
    setLoading(false)
  }, [router.isReady, router.query.entityA_slug, router.query.entityB_slug, encounterSet.encounters, encounterSet.entities])

  useEffect(() => {
    if (!router.isReady) return
    const currentSlug = `${router.query.entityA_slug}-${router.query.entityB_slug}`
    if (previousSlugRef.current !== currentSlug) {
      setTimeout(() => {
        play(SoundKey.TERMINATED)
      }, 25)
      previousSlugRef.current = currentSlug
    }
  }, [router.query.entityA_slug, router.query.entityB_slug, play, router.isReady])

  if (!router.isReady || loading) {
    return <div>Loading…</div>
  }

  if (!encounterData || !entityAData || !entityBData) {
    return <div>Entity A or Entity B not found; stick to the provided data.</div>
  }

  const title = `Encounter: ${entityAData.name} vs ${entityBData.name} | Syndrome Main Computer`
  const description = `Explore the battle between ${entityAData.name} (Threat Rating: ${entityAData.threatRating}) and ${entityBData.name}.`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.ENCOUNTER}/${entityAData.slug}/${entityBData.slug}`,
          images: [
            {
              url: `/images/supers/${entityAData.img}`,
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

      <EncounterLayout entityA={entityAData} entityB={entityBData} encounter={encounterData} />

      <NavigationControls />
    </>
  )
}

export default EncounterPage
