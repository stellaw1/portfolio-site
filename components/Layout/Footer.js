import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer>
        <div className="container mx-auto px-20 p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">&copy; 2022  stellawang.com</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
                <li>
                    <SocialIcon url="mailto:stellaw1@student.ubc.ca" className="mr-2 hover:scale-125" style={{ height: 32, width: 32}} bgColor="#ee8634"/>
                </li>
                <li>
                    <SocialIcon url="https://www.linkedin.com/in/stellaw1" className="mr-2 hover:scale-125" style={{ height: 32, width: 32}} bgColor="#0a66c3"/>
                </li>
                <li>
                    <SocialIcon url="https://www.youtube.com/channel/UCt2N5_ti9WrcclByyEC0unw" className="mr-2 hover:scale-125" style={{ height: 32, width: 32}}/>
                </li>
                <li>
                    <SocialIcon url="https://open.spotify.com/user/12172097669?si=e17f18eb635a46bc" className="mr-2 hover:scale-125" style={{ height: 32, width: 32}}/>
                </li>
                <li>
                    <SocialIcon url="https://twitter.com/jaketrent" className="mr-2 hover:scale-125" style={{ height: 32, width: 32}}/>
                </li>
                <li>
                    <SocialIcon url="https://github.com/stellaw1" className="mr-2 hover:scale-125" style={{ height: 32, width: 32}}/>
                </li>
            </ul>
        </div>
    </footer>
  )
}
