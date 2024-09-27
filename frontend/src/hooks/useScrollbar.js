import { useState } from "react";

const useScrollbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const scrollBarLogic = isHovered ? "thin-scrollbar" : "no-scrollbar";

  return {
    scrollBarLogic,
    onMouseEnter,
    onMouseLeave,
  };
};

export default useScrollbar;
