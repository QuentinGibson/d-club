import { Logo } from "../Navbar/Logo"
import { BsTwitterX, BsFacebook, BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 mx-20 mb-20 gap-10 text-white">
      <div className="flex flex-col gap-10">
        <Logo />
        <div className="flex gap-3 text-2xl">
          <BsTwitterX />
          <BsFacebook />
          <BsInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold">Links</p>
        <div className="h-1 bg-white w-full max-w-md"></div>
        <ul className="flex flex-col">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">VIP Reservations</a>
          </li>
          <li>
            <a href="/">Tickets</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
        </ul>
      </div>

    </div>
  )
}