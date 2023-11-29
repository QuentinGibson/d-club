import { useState, useEffect } from 'react';
type useStickyNavbarProps = {
  height: number
}

export function useStickyNavbar({ height }: useStickyNavbarProps) {
  const [stickyClass, setStickyClass] = useState('absolute');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > height ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('absolute');
    }
  };

  return stickyClass;
}
