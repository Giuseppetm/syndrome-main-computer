import { supers } from '@/data/supers'
import Head from 'next/head'
import { useRouter } from 'next/router'

/**
 * @name SuperResultPage
 *
 * @description
 * Page rendered in case the super was not terminated by an Omnidroid.
 *
 * @author Giuseppe Del Campo
 */
const SuperResultPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const superData = supers.find((s) => s.slug === slug)

  if (!superData) throw new Error('Super not found; check the slug you inserted or the defined data.')

  return (
    <>
      <Head>
        <title>Super Result Page</title>
        <meta name="description" content="" />
      </Head>
      Super Result Page {superData.name}
    </>
  )
}

export default SuperResultPage
