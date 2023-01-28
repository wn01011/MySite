import { useEffect, useState } from "react";

// 스크롤 방향 체크
const ScrollEvent = ({ scrollDir, setScrollDir }) => {
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", (e) => {
      onScroll(e);
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);
};

export default ScrollEvent;
