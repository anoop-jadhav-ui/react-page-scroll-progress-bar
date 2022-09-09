import React, { useEffect, useMemo, useState } from "react";
import styles from "./PageScrollProgressBar.module.css";
interface Props {
  container: HTMLElement;
  color?: string;
  bgColor?: string;
  height?: string;
  top?: string;
}
export const PageScrollProgressBar = ({ container, color, bgColor, height, top }: Props) => {
  const [scrollPosition, setscrollPosition] = useState<number>(0);

  const cssStyles = useMemo(() => ({
    "--page-scroll-bar-color": color || "#eb5757",
    "--page-scroll-background-color": bgColor || "#f2f2f2",
    "--page-scroll-height": height || "0.25rem",
    "--top": top || "0"
  }),[color, bgColor, height, top])

  const handleScroll = () => {
    const scrollYHeight = window.scrollY;
    const viewPortHeight = document.documentElement.clientHeight;
    const appHeight = container.clientHeight || 0;
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
