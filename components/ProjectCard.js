import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props) {
    return (
        <div className='rounded-xl drop-shadow overflow-hidden flex flex-row bg-[#C0D6DF] mb-12 transition hover:shadow-md min-h-[16rem]'>
            <div className={`flex items-center ${props.reverse}`}>
                <Link href={`/project/${props.slug}`}>
                    <div className="center flex w-2/5 h-full">
                        <img className="object-fill" alt={props.title} src={`/images/projects/${props.img}`} />
                    </div>
                </Link>
                <div className="flex flex-col px-8 w-3/5 text-left">
                    <h1 className='text-2xl font-bold'>{props.title}</h1>
                    <h2 className='italic text-sm'>{props.date}</h2>
                    <p className='pt-4'>{props.description}</p>
                    <div className='flex pt-8'>
                        {props.tags.map((tag) => (
                            <div key={tag} className="mr-2 font-light">{tag}</div>
                            ))}
                        <div className="ml-auto flex flex-row">
                            <a href={`${props.github}`}>
                                <svg className="h-8 w-8 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>
                            </a>
                            <Link href={`/project/${props.slug}`}>
                                <button type="button" className="py-1.5 px-3 text-sm text-[#86ACC2] font-medium bg-white rounded-lg hover:bg-gray-100">SEE MORE...</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}