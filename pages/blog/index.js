import fs from 'fs';
import matter from 'gray-matter';

import BlogHero from '../../components/BlogHero';


export async function getStaticProps() {
    const files = fs.readdirSync('posts/blog');

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/blog/${fileName}`, 'utf-8');
        const { data } = matter(readFile);
        return {
            slug,
            data
        };
    });

    return {
        props: {
            posts
        }
    };
}

const splitPostsByYear = (posts) => {
    var dict = {};

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var date = post.data.date
        var year = date.substring(0, 4);
    
        if (dict[year]) {
            dict[year].push(post);
        } else {
            dict[year] = [post];
        }
    }
    var result = Object.keys(dict).map(function (year) {
        return {
            "year": year, 
            "data": dict[year]
        };
    });

    return result;
}

export default function Blog({ posts }) {
    return (
        <div className="">
            <div className="flex flex-row pb-8 font-bold text-2xl">
                <svg
                    aria-hidden="true"
                    className="mt-1 mr-2 w-6 h-6 fill-current"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"></path>
                </svg>
                <p>stellawang/brain-dump</p>
            </div>
            <div className="border border-gray-500 rounded-lg">
                {splitPostsByYear(posts).reverse().map(({ year, data }, i) => (
                    <BlogHero key={i} year={year} posts={data} />
                ))}
            </div>
        </div>
    );
}
