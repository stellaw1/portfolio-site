import fs from 'fs';
import matter from 'gray-matter';
import ProjectCard from '../../components/ProjectCard';


export async function getStaticProps() {
  const files = fs.readdirSync('posts/projects');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/projects/${fileName}`, 'utf-8');
    const { data } = matter(readFile);
    return {
      slug,
      data,
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
      {posts.reverse().map(({ slug, data }, i) => (
        <ProjectCard 
          key={slug}
          slug={slug}
          title={data.title}
          date={data.date}
          description={data.description}
          github={data.github ? data.github : "/project/" + slug}
          tags={data.tags}
          img={data.img}
          reverse={i % 2 == 0? "flex-row" : "flex-row-reverse"}
        />
      ))}
    </div>
  );
}
