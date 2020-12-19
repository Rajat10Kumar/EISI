import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./ScrollToTop.css";
import { MdArrowUpward} from 'react-icons/md'
const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top text-center"
      onClick={scrollToTop}
    >
     <MdArrowUpward className="icon"/> 
    </div>
  );
};

export default ScrollToTop;
 