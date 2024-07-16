import { useEffect, useRef, useState, useCallback } from "react";

import banner1 from "../../assets/image 1.png";
import banner2 from "../../assets/image 2.png";

import daticyIconHeader from "../../assets/Dentistry/image 7.png";
import daticyIconFooter from "../../assets/Dentistry/image 8.png";

import resumeTopLight from "../../assets/resume/image 15.png";
import resumeTopDark from "../../assets/resume/image 14.png";

import resumeBottomLight from "../../assets/resume/image 16.png";
import resumeBottomDark from "../../assets/resume/image 17.png";

import { Project } from "./components/Project";
import { ProjectDto } from "./types";
import clsx from "clsx";

export const Projects = () => {
  const [data, setData] = useState<ProjectDto[]>([]);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickX, setClickX] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isMoved, setIsMoved] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDown(true);
    setClickX(e.clientX);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    document.body.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    document.body.style.userSelect = '';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    document.body.style.userSelect = '';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    if (e.pageX === clickX) {
      setIsMoved(false);
      return;
    }
    setIsMoved(true);
    const walk = (x - startX) * 0.8;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!ref.current) return;
    const touch = e.touches[0];
    setIsDown(true);
    setStartX(touch.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!ref.current) return;
    if (!isDown) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    ref.current.scrollLeft = scrollLeft - walk;
  }, [isDown, startX, scrollLeft]);

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      if (isDown) e.preventDefault();
    };
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [isDown]);

  useEffect(() => {
    const refCurrent = ref.current;

    if (refCurrent) {
      refCurrent.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [handleTouchMove]);

  useEffect(() => {
    setData([
      {
        pics: [banner1, banner2],
        webSiteName: 'Sharix Sport Friend',
        link: 'https://aboba123.github.io/SportFriend/',
        clarification: "A good, and most importantly quality multi-page project written in HTML, CSS and JS."
      },
      {
        pics: [daticyIconHeader, daticyIconFooter],
        webSiteName: 'Dentistry of Dr. Ordzhonikidze',
        link: 'https://dr-ordzhonikidze.ru/',
        clarification: "The header and footer are not particularly attractive, but they are written very well."
      },
      {
        pics: [resumeTopLight, resumeTopDark, resumeBottomLight, resumeBottomDark],
        webSiteName: 'Resume',
        link: 'this web-site',
        clarification: "A project written in React, including information about my expertise"
      },
    ]);
  }, []);

  return (
    <>
      <h2>Latest projects</h2>
      <div className="latest-project-wrapper">
        <div
          ref={ref}
          className={clsx("latest-project-container")}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {data.map(item => <Project key={item.webSiteName} value={item} />)}
        </div>
      </div>
    </>
  );
};
