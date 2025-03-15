'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [content, setContent] = useState("scroll");

  useEffect(() => {
    // eslint-disable-next-line
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      if (!targetElement) return;
      
      const targetClassList = targetElement.classList;
      const classMapping = {
        play: "play",
        view: "view",
        custom: "custom",
      };

      for (const key of Object.keys(classMapping) as Array<keyof typeof classMapping>) {
        if (targetClassList.contains(key)) {
          setContent(classMapping[key]);
          return;
        }
      }
      setContent("scroll");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 5,
        y: position.y + 5,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="fixed z-[999] w-[70px] h-[70px] rounded-full backdrop-blur-[5px] bg-black/20 flex justify-center items-center overflow-none will-change-transform pointer-events-none "
    >
      <div className="text-sm text-white leading-none pointer-events-none">
        {content}
      </div>
    </motion.div>
  );
};

export default MagicCursor;