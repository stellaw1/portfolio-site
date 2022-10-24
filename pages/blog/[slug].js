import fs from 'fs';
import matter from 'gray-matter';

import PostPage from '../../components/Pages/PostPage';

import {unified} from 'unified'
import remarkParse from 'remark-parse'
import rehypeRaw from 'rehype-raw'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'


function mdToHtml(content) {
  return unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(content)
    .toString();
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts/blog');
  const paths = files.reverse().map((fileName) => ({
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
  const { data, content } = matter(fileName);
  return {
    props: {
      data,
      html: mdToHtml(content),
    },
  };
}

export default function BlogPage({ data, html }) {
  const {title, date} = data;

  return (
    <PostPage
      title={title}
      date={date}
      html={html}
    />
  );
}
