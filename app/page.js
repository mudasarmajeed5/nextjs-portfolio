import "./globals.css"
import Link from "next/link";
import { IoLogoInstagram,IoLogoLinkedin, IoLogoTwitter,IoLogoGithub } from "react-icons/io5";
export default function Home() {
  return (
    <>
      <div className="homeHeight text-[--non-photo-blue]">
        <div className="vertical-buttons">
          <button>Projects</button>
          <button>Get in Touch</button>
          <button>Get Quote</button>
        </div>
        <div className="socials">
          <button className="bg-black p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl hover:text-white"><IoLogoInstagram/></span><Link href={'#'} className="show-text">Instagram</Link></button>
          <button className="bg-black p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl hover:text-white"><IoLogoGithub/></span><Link href={'#'} className="show-text">Github</Link></button>
          <button className="bg-black p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl hover:text-white"><IoLogoLinkedin/></span><Link href={'#'} className="show-text">LinkedIn</Link></button>
          <button className="bg-black p-1 hover:right-0 rounded-md flex gap-2"><span className="text-2xl hover:text-white"><IoLogoTwitter/></span><Link href={'#'} className="show-text">Twitter/X</Link></button>
        </div>

      </div>
    </>
  );
}
