import { useState, useEffect } from 'react';
interface useStickyNavbarProps {
  height: number
}

export function useStickyNavbar({ height }: useStickyNavbarProps) {
  const [stickyClass, setStickyClass] = useState('absolute');


  useEffect(() => {

    const stickNavbar = () => {
      if (window !== undefined) {
        const windowHeight = window.scrollY;
        windowHeight > height ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('absolute');
      }
    };

    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, [height]);


  return stickyClass;
}
