import Head from 'next/head'
import Container from '../components/container'
import AllStories from '../components/all-stories'
import AllBeers from '../components/all-beers'
import Intro from '../components/intro'
import Main from '../components/main'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllBeersForHome } from '../lib/api'

export default function Index(
    { allPosts: { edges }, preview, allCustomPosts: {} }
  ) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>MABB</title>
        </Head>
        <Container>
          <Intro />
          <Main />
          {edges.length > 0 && <AllStories posts={edges} />}
          <hr />
          {edges.length > 0 && <AllStories posts={edges} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const allCustomPosts = await getAllBeersForHome(preview)

  return {
    props: { 
      allPosts, 
      allCustomPosts, 
      preview 
    },
  }
}
