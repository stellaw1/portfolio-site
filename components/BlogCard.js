import Link from 'next/link';

export default function BlogCard(props) {
    return (
        <Link href={`/blog/${props.slug}`}>
            <div className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-400 hover:bg-gray-100 ">
                <svg
                    aria-hidden="true"
                    className="ml-10 mr-3 w-5 h-5 fill-current"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z"></path>
                </svg>
                <div className="text-lg">{props.title}</div>
            </div>
        </Link>
    );
}
