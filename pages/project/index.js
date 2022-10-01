import fs from 'fs';
import matter from 'gray-matter';
import ProjectCard from '../../components/ProjectCard';

export async function getStaticProps() {
  const files = fs.readdirSync('posts/projects');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/projects/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Project({ posts }) {
  return (
    <div className='flex flex-col'>
      {posts.map(({ slug, frontmatter }) => (
        <ProjectCard 
          key={slug}
          slug={slug}
          title={frontmatter.title}
          date={frontmatter.date}
          description={frontmatter.description}
          github={frontmatter.github}
          tags={frontmatter.tags}
          img={frontmatter.img}
        />
      ))}
    </div>
  );
}
