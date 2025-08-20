import { supersResult } from '@/data/supers'
import SearchResultLayout from '@/layouts/search-result'
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

  const title = `Search Result - ${superData.name} | Syndrome Main Computer`
  const description = `Search result for ${superData.name}: ${superData.description}, Last active record: ${superData.lastActiveRecord}, Threat Rating: {superData.threatRating}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`/images/search-results/${superData.img}`} />
      </Head>

      <SearchResultLayout superData={superData} />
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
