import { useState } from 'react';
import Animation from '../Layout/Animation';

export default function AboutPage() {
    const [show, setShow] = useState(false);

    return (
        <Animation>
            <div className="mx-auto space-y-12">
                <div className="pb-12 mx-auto center font-bold text-center text-3xl sm:text-5xl relative">
                    <div className="text-[#C0D6DF] absolute inset-1 right-px">
                        Stella Wang
                    </div>
                    <div className="text-[#5FA8D3] absolute inset-0">
                        Stella Wang
                    </div>
                </div>
                <div className="lg:flex flex-row">
                    <img
                        className="object-contain lg:w-2/5 rounded-md mx-2"
                        alt={'about1'}
                        src={`/about1.jpg`}
                    />
                    <div className="flex flex-col mx-4 my-auto">
                        <p className="md:text-xl my-2">I...</p>
                        <div className="flex flex-col space-y-4 md:text-lg ml-4 my-2">
                            <p>
                                💻 work at{' '}
                                <b className="md:text-xl">
                                    Amazon AWS
                                </b>
                            </p>
                            <p>
                                🏫 studied at{' '}
                                <b className="md:text-xl">
                                    University of British Columbia
                                </b>
                            </p>
                            <p>
                                📚 majored in{' '}
                                <b className="md:text-xl">
                                    Computer Engineering
                                </b>
                            </p>
                            <p>
                                🎓 graduated in{' '}
                                <b className="md:text-xl">May 2023</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row-reverse">
                    <img
                        className="object-contain lg:w-2/5 rounded-md mx-2"
                        alt={'about2'}
                        src={`/about2.jpg`}
                    />
                    <div className="flex flex-col mx-4 my-auto lg:w-3/5">
                        <p className="md:text-lg my-2">
                            I am a <b>software engineer</b>, specializing in
                            backend development. I have dabbled in frontend
                            design, machine learning, Web3, API, game, app, and
                            database development through internships, startups,
                            course projects, and hackathons.
                        </p>
                        <p className="prose md:text-lg my-2">
                            While not working, I enjoy{' '}
                            <a className="" href="https://www.goodreads.com/user/show/137052229-stella-w">
                                reading
                            </a>
                            , <a href="https://open.spotify.com/user/12172097669?si=e17f18eb635a46bc">
                                music
                            </a>
                            , <a href="https://www.strava.com/athletes/111478645">
                                running
                            </a>
                            , and <a href="https://www.youtube.com/channel/UCt2N5_ti9WrcclByyEC0unw">
                                travelling
                            </a>
                            , and petting dogs.
                        </p>
                    </div>
                </div>

                <div className="mx-auto pt-16 text-center">
                    <button
                        className="btn btn-info bg-sky-500/50 text-white hover:bg-sky-400/50 hover:text-white"
                        onClick={() => {
                            setShow(!show);
                        }}
                    >More about me!</button>
                </div>
                {show &&
                    <div>
                        <div className="pt-12">
                            <div className="p-2 text-[#5FA8D3] text-2xl mx-auto center font-bold text-center">
                               Travel 
                            </div>
                            <div className="carousel rounded-box h-72">
                                <div className="carousel-item">
                                    <img src="/images/about/travel0.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel1.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel2.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel3.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel4.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel5.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel6.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel7.jpg" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/travel8.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel9.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel10.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel11.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel12.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel13.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel14.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel15.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel16.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel17.jpg" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/travel18.JPG" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/travel19.JPG" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/travel20.JPG" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/travel21.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel22.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/travel23.jpg" />
                                </div> 
                            </div>
                        </div>
                        <div className="pt-12">
                            <div className="p-2 text-[#5FA8D3] text-2xl mx-auto center font-bold text-center">
                                Sports
                            </div>
                            <div className="carousel rounded-box h-72">
                                <div className="carousel-item">
                                    <img src="/images/about/sports1.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/sports2.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/sports3.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/sports4.JPG" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/sports5.jpg" />
                                </div> 
                                <div className="carousel-item">
                                    <img src="/images/about/sports6.JPG" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/sports7.jpeg" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/about/sports8.jpeg" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 grid place-content-center">
                            <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/111478645/latest-rides/9d4fbd72db3b6b45c83a9f383ff9baa5ec14890b'></iframe>
                        </div>
                    </div>
                }
            </div>
        </Animation>
    );
}
