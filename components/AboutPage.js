export default function AboutPage() {
    return (
        <div className='mx-auto space-y-12'>
            <p className="pb-4 mx-auto center font-bold text-center text-5xl">
                Stella Wang
            </p>
            <div className="flex flex-row">
                <img className="object-contain w-2/5 rounded-md mr-2" alt={"about1"} src={`/about1.jpg`} />
                <div className="flex flex-col ml-4 my-auto">
                    <p className="text-xl my-2">
                        I am...
                    </p>
                    <div className="flex flex-col space-y-4 text-lg ml-4 my-2">
                        <p>📚 studying <b className="text-xl">Computer Engineering</b></p> 
                        <p>🏫 at <b className="text-xl">University of British Columbia</b></p> 
                        <p>🎓 graduating in <b className="text-xl">May 2023</b></p> 
                        <p>🏠 based in <b className="text-xl">Vancouver, BC, Canada</b></p> 
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <img className="object-contain w-2/5 rounded-md ml-2" alt={"about2"} src={`/about2.jpg`} />
                <div className="flex flex-col mr-4 my-auto">
                    <p className="text-lg my-2">
                        I am a software engineer, specialising in backend development. 
                        Some fields I have dabbled in include machine learning, Web3, API, and database development. 
                        Through working at internships, startups, and hackathons, I have developed crucial communication, teamwork, and organization skills. 
                    </p>
                    <p className="text-lg my-2">
                        While I'm not working I enjoy reading, music (Spotify is my favourite social media), outdoor sports, and travelling. 
                    </p>
                </div>
            </div>
{/* 
            ## What am I up to right now?
            ###### Updated: Jun 19th, 2022
            Interning at Amazon AWS for the summer, then going back to UBC to finish up my last in my computer engineering degree. 

            ## Career Interests
            - Web3 (blockchain) development
            - Fullstack development
            - Data science

            ## Hobbies
            - Mechanical Keyboards
            - Sports - Soccer, Volleyball, Kickboxing, Skiing
            - Travelling - *check out my travel vlogs on youtube!* */}
        </div>
    )
}