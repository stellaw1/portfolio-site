export default function Footer() {
  return (
    <div className="container mx-auto px-20">
        <footer className="p-4 md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-500 sm:text-center">&copy; 2022  stellawang.com</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    </div>
  )
}
