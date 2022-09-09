import React, { useEffect, useMemo, useState } from "react";
import styles from "./PageScrollProgressBar.module.css";
interface Props {
  AppRef: React.RefObject<HTMLDivElement>;
  progressBarColor: string;
  progressBarBgColor: string;
  progressBarHeight: string;
}
export const PageScrollProgressBar = ({ AppRef, progressBarColor, progressBarBgColor, progressBarHeight }: Props) => {
  const [scrollPosition, setscrollPosition] = useState<number>(0);

  const cssStyles = useMemo(() => ({
    "--page-scroll-bar-color": progressBarColor || "#eb5757",
    "--page-scroll-background-color": progressBarBgColor || "#f2f2f2",
    "--page-scroll-height": progressBarHeight || "0.25rem"
  }),[progressBarBgColor, progressBarColor, progressBarHeight])

  const handleScroll = () => {
    const scrollYHeight = window.scrollY;
    const viewPortHeight = document.documentElement.clientHeight;
    const appHeight = AppRef?.current?.clientHeight || 0;
    const percent = (scrollYHeight * 100) / (appHeight - viewPortHeight);
    setscrollPosition(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <progress className={styles.pageScroll} style={cssStyles as React.CSSProperties}  id="top-scroll-bar" data-testid="top-scroll-bar" value={scrollPosition} max={100} />;
};
export default PageScrollProgressBar;
