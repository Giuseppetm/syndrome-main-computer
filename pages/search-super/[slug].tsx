import { supersResult } from '@/data/supers'
import { SuperResult } from '@/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

interface SuperResultPageProps {
  superData: SuperResult | null
}

/**
 * @name SuperResultPage
 *
 * @description
 * Page rendered in case the super was not terminated by an Omnidroid.
 *
 * @author Giuseppe Del Campo
 */
const SuperResultPage = ({ superData }: SuperResultPageProps) => {
  if (!superData) {
    return <div>Super not found</div>
  }

  return (
    <>
      <Head>
        <title>Super Result Page</title>
        <meta name="description" content={`Details about ${superData.name}`} />
      </Head>
      <h1>Super Result Page: {superData.name}</h1>
      <p>{superData.description}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: supersResult.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string
  const superData = supersResult.find((s) => s.slug === slug) || null

  return {
    props: { superData },
  }
}

export default SuperResultPage
