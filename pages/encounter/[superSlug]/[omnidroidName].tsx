import { encounters, omnidroids, supers } from '@/data'
import EncounterLayout from '@/layouts/encounter'
import Head from 'next/head'
import { Encounter, Omnidroid, Super } from '@/types'
import { GetServerSideProps, NextPage } from 'next'

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

export const getServerSideProps: GetServerSideProps<SuperOmnidroidPageProps> = async (context) => {
  const { superSlug, omnidroidName } = context.params as {
    superSlug: string
    omnidroidName: string
  }

  const encounterData = encounters.find((e) => e.superSlug === superSlug && e.omnidroidName === omnidroidName)
  const superData = supers.find((s) => s.slug === encounterData?.superSlug)
  const omnidroidData = omnidroids.find((o) => o.name === encounterData?.omnidroidName)

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
