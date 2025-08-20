import { encounters, omnidroids, supers } from '@/data'
import EncounterLayout from '@/layouts/encounter'
import Head from 'next/head'
import { Encounter, Omnidroid, Super } from '@/types'
import { GetServerSideProps, NextPage } from 'next'
import NavigationControls from '@/components/navigation-controls'

/**
 * Props for {@link SuperOmnidroidPage}.
 */
interface SuperOmnidroidPageProps {
  /**
   * Encounter data, representing a battle between a Super and an Omnidroid.
   */
  encounterData: Encounter

  /**
   * Data object describing the Super involved in the encounter.
   */
  superData: Super

  /**
   * Data object describing the Omnidroid involved in the encounter.
   */
  omnidroidData: Omnidroid
}

/**
 * @name SuperOmnidroidPage
 *
 * @description
 * Renders the details of a specific encounter between a **Super** and an **Omnidroid**.
 *
 * @remarks
 * Features:
 * - Dynamically sets SEO metadata (`<title>`, `<meta>` tags, Open Graph).
 * - Displays encounter details via {@link EncounterLayout}.
 * - Provides navigation with {@link NavigationControls}.
 *
 * @author Giuseppe Del Campo
 */
const SuperOmnidroidPage: NextPage<SuperOmnidroidPageProps> = ({ encounterData, superData, omnidroidData }) => {
  const title = `Encounter: ${superData.name} vs ${omnidroidData.name} | Syndrome Main Computer`
  const description = `Explore the battle between ${superData.name} (Threat Rating: ${superData.threatRating}) and ${omnidroidData.name}.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`/images/supers/${superData.img}`} />
      </Head>

      <EncounterLayout superData={superData} omnidroidData={omnidroidData} encounterData={encounterData} />

      <NavigationControls />
    </>
  )
}

/**
 * Fetches encounter, super, and omnidroid data at request time
 * based on dynamic route parameters (`superSlug` and `omnidroidSlug`).
 *
 * Returns `notFound: true` if no matching data is found.
 */
export const getServerSideProps: GetServerSideProps<SuperOmnidroidPageProps> = async (context) => {
  const { superSlug, omnidroidSlug } = context.params as {
    superSlug: string
    omnidroidSlug: string
  }

  const encounterData = encounters.find((e) => e.superSlug === superSlug && e.omnidroidSlug === omnidroidSlug)
  const superData = supers.find((s) => s.slug === encounterData?.superSlug)
  const omnidroidData = omnidroids.find((o) => o.slug === encounterData?.omnidroidSlug)

  if (!encounterData || !superData || !omnidroidData) {
    return { notFound: true }
  }

  return {
    props: {
      encounterData,
      superData,
      omnidroidData,
    },
  }
}

export default SuperOmnidroidPage
