import { IoLogoMastodon } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='text-center py-2 px-4 flex justify-between items-center text-[--text-color] bg-[--oxford-blue]'>
    <div>
    <ul className='flex items-center gap-3'>
      <li className="text-4xl text-white"><IoLogoMastodon /></li>
      <li className="text-[--fire-red] cursor-pointer underline-offset-4">Mudassar Majeed</li>
    </ul>  
    </div>
    <button className="bg-[--fire-red] px-2 py-1 rounded-lg">
      Login
    </button>
    </div>
  )
}

export default Navbar