import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer>
        <div className="flex flex-col container mx-auto p-4 md:flex md:items-center md:justify-between">
            <ul className="flex flex-wrap items-center mt-3">
                <li>
                    <SocialIcon url="mailto:stellaw1@student.ubc.ca" className="mr-4 hover:scale-125" style={{ height: 36, width: 36}} bgColor="#ee8634"/>
                </li>
                <li>
                    <SocialIcon url="https://www.linkedin.com/in/stellaw1" className="mr-4 hover:scale-125" style={{ height: 36, width: 36}} bgColor="#0a66c3"/>
                </li>
                <li>
                    <SocialIcon url="https://www.youtube.com/channel/UCt2N5_ti9WrcclByyEC0unw" className="mr-4 hover:scale-125" style={{ height: 36, width: 36}}/>
                </li>
                <li>
                    <SocialIcon url="https://open.spotify.com/user/12172097669?si=e17f18eb635a46bc" className="mr-4 hover:scale-125" style={{ height: 36, width: 36}}/>
                </li>
                <li>
                    <SocialIcon url="https://twitter.com/stellaw__" className="mr-4 hover:scale-125" style={{ height: 36, width: 36}}/>
                </li>
                <li>
                    <SocialIcon url="https://github.com/stellaw1" className="mr-4 hover:scale-125" style={{ height: 36, width: 36}}/>
                </li>
            </ul>
            <span className="py-4 text-base sm:text-center">&copy; 2022  stellawang.com</span>
        </div>
    </footer>
  )
}
