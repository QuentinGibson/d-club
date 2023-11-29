import { Link } from "@remix-run/react"
type ItemProps = {
  name: string,
  link: string
}

export const Item = ({ name, link }: ItemProps) => {
  return (
    <Link
      className="bg-[#c10230] hover:bg-[#c10230]/90 border-[#c10230] text-white rounded-[5px] uppercase py-2 px-6"
      to={link}>
      {name}
    </Link >
  )
}