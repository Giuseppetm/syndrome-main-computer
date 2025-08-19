import { encounters, omnidroids, supers } from '@/data'
import EncounterLayout from '@/layouts/encounter'
import Head from 'next/head'
import { Encounter, Omnidroid, Super } from '@/types'
import { GetServerSideProps, NextPage } from 'next'
import NavigationControls from '@/components/navigation-controls'

interface SuperOmnidroidPageProps {
  encounterData: Encounter
  superData: Super
  omnidroidData: Omnidroid
}

/**
 * @name SuperOmnidroidPage
 *
 * @description
 * Page rendered for Super and Omnidroid encounter.
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
