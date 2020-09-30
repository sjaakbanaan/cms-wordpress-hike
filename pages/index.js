import Head from 'next/head'
import Container from '../components/container'
import AllStories from '../components/all-stories'
import AllBeers from '../components/all-beers'
import Intro from '../components/intro'
import Main from '../components/main'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllBeersForHome } from '../lib/api'

export default function Index(
    {allCustomPosts, allPosts}
  ) {

  return (
    <>
      <Layout>
        <Head>
          <title>MABB</title>
        </Head>
        <Container>
          <Intro />
          <Main />
          {allCustomPosts.edges.length > 0 && <AllBeers beers={allCustomPosts.edges} />}
          {allPosts.edges.length > 0 && <AllStories posts={allPosts.edges} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPostsData = await getAllPostsForHome()
  const allPosts = allPostsData?.posts;

  const allCustomPostsData = await getAllBeersForHome()
  const allCustomPosts = allCustomPostsData?.beers;

  return {
    props: { 
      allPosts, 
      allCustomPosts
    },
  }
}
