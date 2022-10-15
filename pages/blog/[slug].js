import fs from 'fs';
import matter from 'gray-matter';

import PostPage from '../../components/PostPage';


export async function getStaticPaths() {
  const files = fs.readdirSync('posts/blog');
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
  const fileName = fs.readFileSync(`posts/blog/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function BlogPage({ frontmatter, content }) {
  const {title, date} = frontmatter;

  return (
    <PostPage
      title={title}
      date={date}
      content={content}
    />
  );
}
