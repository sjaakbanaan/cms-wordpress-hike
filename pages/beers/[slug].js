import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import AllBeers from '../../components/all-beers'
import Intro from '../../components/intro'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllBeersWithSlug, getBeerAndMoreBeers } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'

export default function Beer({ beer, beers, preview }) {
  const router = useRouter()
  const morePosts = beers?.edges

  if (!router.isFallback && !beer?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Intro />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {beer.title} | MABB
                </title>
                <meta
                  property="og:image"
                  content={beer.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={beer.title}
                coverImage={beer.featuredImage.node}
                date={beer.date}
              />
              <PostBody content={beer.content} />
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <AllBeers beers={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getBeerAndMoreBeers(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllBeersWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/beers/${node.slug}`) || [],
    fallback: true,
  }
}
