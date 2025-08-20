import ControlsHint from '@/components/controls-hint'
import { SITE_URL } from '@/data/metadata'
import { supersResult } from '@/data/supers'
import SearchResultLayout from '@/layouts/search-result'
import { SuperResult } from '@/types'
import { ROUTES } from '@/utils/routes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

interface SuperResultPageProps {
  superData: SuperResult | null
}

/**
 * @name SuperResultPage
 *
 * @description
 * Renders the **Search Result page** for a given Super in case they were **not terminated by an Omnidroid**.
 *
 * Displays detailed information such as:
 * - Name
 * - Description
 * - Last Active Record
 * - Threat Rating
 *
 * @remarks
 * - The data is pre-rendered at build time using Next.js **Static Generation** (`getStaticPaths` + `getStaticProps`).
 * - If a Super slug does not match any entry in `supersResult`, the page will render a "Super not found" message.
 *
 * Features:
 * - Dynamically generated SEO metadata (title, description, Open Graph tags).
 * - Uses {@link SearchResultLayout} for consistent UI layout and styling.
 *
 * @returns
 * A statically generated search result page for a given Super.
 *
 * @see SearchResultLayout Layout component for displaying Super result details.
 * @see supersResult Dataset of all Supers with their attributes.
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
        <meta property="og:url" content={`${SITE_URL}${ROUTES.SEARCH_SUPER}/${superData.slug}`} />
      </Head>

      <SearchResultLayout superData={superData} />

      <ControlsHint showNavButtons showControlsHint label={'Here you can read the informations about a super.'} />
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
