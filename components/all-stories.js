import PostPreview from './post-preview'

export default function AllStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold leading-tight">
        News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage.node}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
            pt={'posts'}
          />
        ))}
      </div>
    </section>
  )
}
