import md from 'markdown-it';

export default function ProjectPage(props) {
    return (
        <div className='prose max-w-none prose-img:rounded-md prose-img:mx-auto mx-20 mx-auto'>
            <h1 className='grid place-content-center font-bold -mb-4'>{props.title}</h1>
            <h2 className='grid place-content-center italic text-sm pb-12'>{props.date}</h2>
            <div dangerouslySetInnerHTML={{ __html: md().render(props.content) }} />
        </div>
    )
}