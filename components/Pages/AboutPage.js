import Animation from "../Layout/Animation"

export default function AboutPage() {
    return (
        <Animation>
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
                            I am a <b>software engineer</b>, specialising in backend development. 
                            Some fields I have dabbled in include frontend design, machine learning, Web3, API, game, and database development. 
                            Through working at internships, startups, and hackathons, I have developed crucial communication, teamwork, and organization skills. 
                        </p>
                        <p className="prose text-lg my-2">
                            While not working, I enjoy <a className="" href="https://www.goodreads.com/user/show/137052229-stella-w">reading</a>, music (<a href="https://open.spotify.com/user/12172097669?si=e17f18eb635a46bc">Spotify</a> is my favourite social media), outdoor sports, <a href="https://www.youtube.com/channel/UCt2N5_ti9WrcclByyEC0unw">travelling</a>, and petting dogs. 
                        </p>
                    </div>
                </div>
                <iframe src="https://open.spotify.com/embed/playlist/5vZtlBCI6dcpokbzUuZem7?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            </div>
        </Animation>
    )
}