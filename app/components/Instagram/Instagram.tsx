import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

interface InstaData {
  media_url: string
}

export const Instagram = ({ data }: { data: InstaData[] }) => {
  const urls = data.map(obj => obj.media_url)
  return (
    <>
      <div className="grid gap-10 my-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            {urls.map((url: string, index: number) => (
              <img className="" src={url} key={index} alt="" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  )

}