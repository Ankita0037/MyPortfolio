import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const detectClickable = (e) => {
      const target = e.target;
      const clickable = target.closest("button, a, [role='button'], .cursor-none");
      setIsHoveringClickable(!!clickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", detectClickable);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", detectClickable);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) return null; // Hide cursor entirely on mobile

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#5a6581]"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHoveringClickable ? 1.5 : 1,
        opacity: isHoveringClickable ? 0.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      style={{
        width: 20,
        height: 20,
        boxShadow: isMobile ? 'none' : '0 0 10px rgba(0,0,0,0.25)',
      }}
    />
  );
};

export default CustomCursor;
