import { Item } from "./Item"
import { LanguagePicker } from "./LanguagePicker"
import { Logo } from "./Logo"
import MenuIcon from "./MenuIcon"
import { useMediaQuery } from "@react-hooks-library/core"
import { MenuOverlay } from "./MenuOverlay"
import { useCallback, useState } from "react"
import { BuyMenuOverlay } from "./BuyMenuOverlay"
import { useStickyNavbar } from "~/hooks/useStickyNavbar"
import clsx from "clsx"


export const Navbar = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1100px)")
  const stickyClass = useStickyNavbar({ height: 100 });
  const items: MenuItem[] = [
    { name: "Buy Ticket", link: "/events" },
    { name: "Book VIP", link: "/vip-events" },
    { name: "Book Restaurant", link: "/restaurant" },
  ]
  const overlayItems: MenuItem[] = [
    { name: "Events", link: "/events" },
    { name: "VIP Tables", link: "/events" },
    { name: "Artists", link: "/events" },
    { name: "Restaurant", link: "/events" },
    { name: "Gallery", link: "/events" },
    { name: "Shop", link: "/events" },
    { name: "Work with us", link: "/events" },
  ]
  const buyOverlayItems: BuyMenuItem[] = [
    { header: "Buy Tickets", subheader: "Get your tickets now", name: "Buy Tickets", link: "/events" },
    { header: "Book VIP", subheader: "Enchance your experience with a VIP table", name: "VIP Tables", link: "/events" },
    { header: "Book Restaurant", subheader: "Start your evening with a cuisine", name: "Artists", link: "/events" },

  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBuyMenuOpen, setIsBuyMenuOpen] = useState(false)
  const handleMenuIconClick = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [setIsMenuOpen])

  const handleBuyMenuClick = useCallback(() => {
    setIsBuyMenuOpen(prev => !prev)
  }, [setIsBuyMenuOpen])

  const closeBuyMenu = useCallback(() => {
    setIsBuyMenuOpen(false)
  }, [setIsBuyMenuOpen])
  return (
    <>
      <div className={clsx(["py-4 w-full z-10 bg-black/50", stickyClass])}>
        {isSmallDevice ?
          <>
            <div className="flex justify-between mx-8">
              <MenuIcon onClick={handleMenuIconClick} />
              <Logo />
              <button
                className="bg-[#c10230] hover:bg-[#c10230]/90 border-[#c10230] text-white rounded-[5px] uppercase py-2 px-6"
                onClick={handleBuyMenuClick}
              >
                Buy
              </button>
            </div>
            <BuyMenuOverlay active={isBuyMenuOpen} handleExit={closeBuyMenu} items={buyOverlayItems} />
          </>
          : <div className="grid grid-cols-2">
            <div className="flex gap-10 mx-8">
              <MenuIcon onClick={handleMenuIconClick} />
              <Logo />
            </div>
            <div className="flex justify-between mr-6">
              {items.map((item, index) => {
                return (
                  <Item key={index} name={item.name} link={item.link} />
                )
              })}
              <LanguagePicker />
            </div>
          </div>
        }
        <MenuOverlay items={overlayItems} active={isMenuOpen} />
      </div>

    </>

  )
}
