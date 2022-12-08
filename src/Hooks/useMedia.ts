import { useEffect, useState } from 'react';

const breakpoints = [1920, 1400, 1280, 1025, 769, 576, 340];

const useMedia = () => {
  const [windowWidth, setWindowWidth] = useState<number>(1920);

  useEffect(() => {
    let timeout: any = null;

    const updateDimensions = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setWindowWidth(window.innerWidth), 50);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return breakpoints.filter((bp) => bp < windowWidth)[0];
};

export default useMedia;
