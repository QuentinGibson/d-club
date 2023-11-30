import { Link } from "@remix-run/react"

type MenuOverlayProps = {
  items: MenuItem[]
  active?: boolean
}


const OverlayItem = ({ menuItem }: { menuItem: MenuItem }) => {
  return (
    <li className="py-3">
      <Link
        className="text-white text-4xl md:text-5xl"
        to={menuItem.link}
      >
        {menuItem.name}
      </Link>
    </li>
  )
}

export const MenuOverlay = ({ items, active = false }: MenuOverlayProps) => {
  return (
    <>
      {active &&
        <div className="z-40 fixed h-screen w-screen top-0 left-0 bg-[rgba(07,0,31,0.85)]">
          <div className="h-screen w-full justify-center items-center flex">
            <nav className="basis-8/12 h-96 flex-shrink grow-0 overflow-y-scroll overflow-x-hidden">
              <ul>
                {items.map((item, index) => {
                  return <OverlayItem menuItem={item} key={index} />
                })}
              </ul>
            </nav>
          </div>
        </div>
      }
    </>


  )
}