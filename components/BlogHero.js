import BlogCard from "./BlogCard"

export default function BlogHero(props) {
    return (
        <div className="mx-auto w-3/4 rounded-lg border border-gray-500">
            {props.posts.reverse().map(({ slug, frontmatter }) => (
                <BlogCard 
                    key={slug}
                    slug={slug}
                    title={frontmatter.title}
                />
            ))}
        </div>
    )
}