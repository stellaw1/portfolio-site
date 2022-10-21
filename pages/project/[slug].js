import fs from 'fs';
import matter from 'gray-matter';

import PostPage from '../../components/Pages/PostPage';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/projects');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/projects/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function ProjectPage({ frontmatter, content }) {
  const {title, date, description, github, img, tags} = frontmatter;

  return (
    <PostPage
      title={title}
      date={date}
      content={content}
    />
  );
}
