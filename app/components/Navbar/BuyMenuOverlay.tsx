import { Link } from "@remix-run/react"
import { BsXLg } from "react-icons/bs"

interface BuyMenuOverlay {
  items: BuyMenuItem[]
  active?: boolean,
  handleExit: () => void
}


const OverlayItem = ({ menuItem }: { menuItem: BuyMenuItem }) => {
  const { header, subheader, link, name } = menuItem
  return (
    <li className="py-3 flex flex-col items-center gap-3">
      <p className="text-white text-4xl">{header}</p>
      <p className="text-gray-400 text-md">{subheader}</p>
      <Link className="text-white text-md md:text-md px-3 py-1 bg-[rgba(22,0,89,1)] border-[rgba(22,0,89,1)] border rounded" to={link}>{name}</Link>
    </li>
  )
}

export const BuyMenuOverlay = ({ items, active = false, handleExit }: BuyMenuOverlay) => {
  return (
    <>
      {active ? <div className="z-[60] fixed h-screen w-screen top-0 left-0 bg-[rgba(07,0,31,0.85)]">
        <div className="absolute top-10 right-10" >
          <button onClick={handleExit}>
            <BsXLg className="text-4xl text-white" />
          </button>
        </div>
        <div className="h-full w-full justify-center items-center flex">
          <nav className="basis-8/12 h-96 flex-shrink grow-0 overflow-y-scroll overflow-x-hidden">
            <ul className="flex flex-col gap-6">
              {items.map((item, index) => {
                return <OverlayItem menuItem={item} key={index} />
              })}
            </ul>
          </nav>
        </div>
      </div> : null
      }
    </>


  )
}