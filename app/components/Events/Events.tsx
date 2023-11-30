
import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import gsap from 'gsap';
import Autoplay from 'embla-carousel-autoplay';

type Event = {
  name: string,
  image: string,
  date: Date
}

const months = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

const abbreviatedDaysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


const eventDetails: Event[] = [
  {
    name: "Gucci Mane",
    image: "/gucci-mane.webp",
    date: new Date(2023, 11, 8)
  },
  {
    name: "Big Scarr",
    image: "/big-scarr.webp",
    date: new Date(2023, 11, 13)
  },
  {
    name: "Pooh Shiesty",
    image: "/pooh-shiesty.webp",
    date: new Date(2023, 11, 14)
  },
  {
    name: "Roboy",
    image: "/roboy.webp",
    date: new Date(2023, 11, 15)
  },
  {
    name: "K Shiday",
    image: "/k-shiday.webp",
    date: new Date(2023, 11, 23)
  },
  {
    name: "Enchanting",
    image: "/enchanting.webp",
    date: new Date(2023, 11, 26)
  },
  {
    name: "Foogiano",
    image: "/foogiano.webp",
    date: new Date(2023, 11, 27)
  }
]

export const Events = () => {
  const autoplayOptions = { delay: 6000, rootNode: (emblaRoot: any) => emblaRoot.parentElement }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
  const imgRefs = useRef<(HTMLImageElement | null)[]>(Array(eventDetails.length).fill(null));
  const nameOverlayRefs = useRef<(HTMLDivElement | null)[]>(Array(eventDetails.length).fill(null));

  useEffect(() => {
    if (!emblaApi) return;

    const onSlideChange = () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      const activeImg = imgRefs.current[currentIndex]


      gsap.fromTo(
        activeImg,
        { scale: 1.0, opacity: 0.3 }, // Initial state (zoomed in and slightly faded)
        {
          scale: 1,
          opacity: 1,
          duration: 2.5,
          ease: 'power3.out', // You can change the easing function as needed
        }
      );
    };

    emblaApi.on('select', onSlideChange);

    return () => {
      emblaApi.off('select', onSlideChange);
    };
  }, [emblaApi]);

  const handleSlideMouseEnter = (index: number) => {
    const nameOverlay = nameOverlayRefs.current[index];
    gsap.to(nameOverlay, { opacity: 1, duration: 0.5, ease: 'power3.out' });
  };

  const handleSlideMouseLeave = (index: number) => {
    const nameOverlay = nameOverlayRefs.current[index];
    gsap.to(nameOverlay, { opacity: 0, duration: 0.5, ease: 'power3.out' });
  };


  return (

    <div className="embla overflow-hidden h-full" ref={emblaRef}>
      <div className="embla__container flex">
        {eventDetails.map((event, index) => {
          return (
            <div key={index} className="embla__slide grow-0 shrink-0 w-1/2 md:w-1/4 mr-10 md:mr-28 relative"
              onMouseEnter={() => handleSlideMouseEnter(index)}
              onMouseLeave={() => handleSlideMouseLeave(index)}
            >
              <div className='h-full flex flex-col'>
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  className="object-cover h-full" src={event.image} alt="" />

                <div className='bg-black h-5 absolute w-full bottom-0 flex justify-between'>
                  <div className='flex gap-2'>
                    <p className='text-white font-bold'>{abbreviatedDaysOfWeek[event.date.getDay()]}</p>
                    <p className='text-white font-light'>{event.date.getDay()}</p>
                  </div>
                  <p className='text-white font-bold'>{months[event.date.getMonth()]}</p>
                </div>
              </div>

              <div
                ref={(el) => (nameOverlayRefs.current[index] = el)}
                className="name-overlay absolute top-0 flex justify-center items-center w-full h-full overflow-hidden text-white text-2xl font-bold bg-black/30 opacity-0"
              >
                {event.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};