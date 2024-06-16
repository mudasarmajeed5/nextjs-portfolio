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
          <button className="hover:bg-black p-1 rounded-md"><Link className="text-2xl hover:text-white" href={''}><IoLogoInstagram/></Link></button>
          <button className="hover:bg-black p-1 rounded-md"><Link className="text-2xl hover:text-white" href={''}><IoLogoGithub/></Link></button>
          <button className="hover:bg-black p-1 rounded-md"><Link className="text-2xl hover:text-white" href={''}><IoLogoLinkedin/></Link></button>
          <button className="hover:bg-black p-1 rounded-md"><Link className="text-2xl hover:text-white" href={''}><IoLogoTwitter/></Link></button>
        </div>

      </div>
    </>
  );
}
