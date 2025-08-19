import { encounters, omnidroids, supers } from '@/data'
import { useRouter } from 'next/router'
import EncounterLayout from '@/layouts/encounter'
import Head from 'next/head'

/**
 * @name SuperOmnidroidPage
 *
 * @description
 * Page rendered for Super and Omnidroid encounter.
 *
 * @author Giuseppe Del Campo
 */
const SuperOmnidroidPage = () => {
  const router = useRouter()
  const { superSlug, omnidroidName } = router.query

  const encounterData = encounters.find((e) => e.superSlug === superSlug && e.omnidroidName === omnidroidName)
  const superData = supers.find((s) => s.slug === encounterData?.superSlug)
  const omnidroidData = omnidroids.find((o) => o.name === encounterData?.omnidroidName)

  if (!encounterData) throw new Error('Encounter not found; check the data you defined.')
  if (!superData) throw new Error('Super not found; check the data you defined.')
  if (!omnidroidData) throw new Error('Omnidroid not found; check the data you defined.')

  return (
    <>
      <Head>
        <title>Super Omnidroid Page</title>
        <meta name="description" content="" />
      </Head>
      <EncounterLayout superData={superData} omnidroidData={omnidroidData} encounterData={encounterData} />
    </>
  )
}

export default SuperOmnidroidPage
