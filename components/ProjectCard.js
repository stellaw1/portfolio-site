import Image from 'next/image';
import Link from 'next/link';

export default function Footer(props) {
    return (
        <div className='h-64 m-2 rounded-xl drop-shadow overflow-hidden flex flex-row bg-[#C0D6DF] mb-6'>
            <Link href={`/project/${props.slug}`}>
                <a>
                <Image
                    width={256}
                    height={256}
                    alt={props.title}
                    src={`/${props.img}`}
                />
                </a>
            </Link>
            <div className="flex flex-col py-8 mx-12 my-auto">
                <h1 className='text-lg font-bold'>{props.title}</h1>
                <h2 className='italic text-sm'>{props.date}</h2>
                <p className='py-8'>{props.description}</p>
                <div className='flex flex-row'>
                    {props.tags.map((tag) => (
                        <h1 key={tag} className="mr-2 font-light">{tag}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}