import Animation from "../Layout/Animation"

export default function HomePage() {
    return (
        <Animation>
            <div className='mx-auto space-y-12'>
                <div className="pb-12 mx-auto center font-bold text-center text-3xl sm:text-5xl relative">
                    <div className="text-[#C0D6DF] absolute inset-1 right-px">
                        Stella Wang
                    </div>
                    <div className="text-[#5FA8D3] absolute inset-0">
                        Stella Wang
                    </div>
                </div>
            </div>
        </Animation>
    )
}