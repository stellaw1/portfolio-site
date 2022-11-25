import Animation from "../Layout/Animation"
import Link from 'next/link';

export default function HomePage() {
    return (
        <Animation>
            <div className='mx-auto md:mt-56 flex flex-row justify-center items-ceter space-x-20'>
                <div className="w-3/4 flex flex-col space-y-20">
                    <div className="my-auto font-bold md:text-center text-3xl lg:text-6xl relative block">
                        <div className="text-[#C0D6DF] absolute inset-1 right-px">
                            Stella Wang
                        </div>
                        <div className="text-[#5FA8D3] absolute inset-0">
                            Stella Wang
                        </div>
                    </div>
                    <div className='font-bold md:inline-flex lg:flex-row md:w-auto w-full lg:items-center flex flex-col'>
                        <Link href='/project'>
                        <a className='lg:inline-flex md:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-lg xl:text-2xl hover:text-white '>
                            Projects
                        </a>
                        </Link>
                        <Link href='/blog'>
                        <a className='lg:inline-flex md:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-lg xl:text-2xl hover:text-white'>
                            Blog
                        </a>
                        </Link>
                        <Link href='/resume.pdf'>
                        <a className='lg:inline-flex md:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-lg xl:text-2xl hover:text-white'>
                            Resume
                        </a>
                        </Link>
                        <Link href='/about'>
                        <a className='lg:inline-flex md:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-lg xl:text-2xl hover:text-white'>
                            About
                        </a>
                        </Link>
                    </div>
                </div>

                <div className="my-auto w-1/4 inline-flex items-center rounded-full">
                    <img className="object-contain rounded-full w-48" alt={"icon"} src={`/icon.jpg`} />
                </div>
            </div>
        </Animation>
    )
}