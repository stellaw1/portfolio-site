import Image from 'next/image';
import Link from 'next/link';

export default function Footer(props) {
    return (
        <div className='rounded-xl drop-shadow overflow-hidden flex flex-row bg-[#C0D6DF] mb-12 transition hover:shadow-md'>
            <div className="flex items-center">
                <div className="center flex">
                    <Link href={`/project/${props.slug}`}>
                        <Image
                            width={300}
                            height={256}
                            alt={props.title}
                            src={`/${props.img}`}
                        />
                    </Link>
                </div>
                <div className="flex flex-col px-8">
                    <h1 className='text-xl font-bold'>{props.title}</h1>
                    <h2 className='italic text-sm'>{props.date}</h2>
                    <p className='pt-4'>{props.description}</p>
                    <div className='flex flex-row py-4 '>
                        {props.tags.map((tag) => (
                            <h1 key={tag} className="mr-2 font-light">{tag}</h1>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}