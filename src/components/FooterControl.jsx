import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const FooterControl = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        // 用户向上滚动
        setIsAtBottom(false);
      } else if (window.innerHeight + currentScrollY >= document.body.offsetHeight) {
        // 用户滚动到底部
        setIsAtBottom(true);
      }
      lastScrollY.current = currentScrollY;
      console.log(isAtBottom)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isAtBottom && <Footer />}
    </>
  );
};

export default FooterControl;