import md from 'markdown-it';
import Animation from '../Layout/Animation';

export default function PostPage(props) {
    return (
        <Animation>
            <div className='prose max-w-none prose-img:rounded-md prose-img:mx-auto lg:mx-20 mx-auto'>
                <h1 className='grid place-content-center font-bold -mb-4 text-center'>{props.title}</h1>
                <h2 className='grid place-content-center italic text-sm pb-12'>{props.date}</h2>
                <div dangerouslySetInnerHTML={{ __html: props.html }} />
            </div>
        </Animation>
    )
}