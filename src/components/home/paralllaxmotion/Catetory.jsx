import React, { useEffect, useState } from "react";
import ParalexText from "./ParalexText";
import {
  FaReact,
  FaAws,
  FaNode,
  FaPython,
  FaFigma,
  FaJava,
} from "react-icons/fa6";
import { IoLogoAndroid, IoIosGitMerge } from "react-icons/io";
import { AiFillApple } from "react-icons/ai";
import { DiJavascript } from "react-icons/di";
import { BiLogoPhp } from "react-icons/bi";
import { SiDjango, SiHiveBlockchain } from "react-icons/si";

const categoriesRow1 = [
  { icon: <FaReact />, label: "React", bg: "#ABEDFF" },
  { icon: <IoLogoAndroid />, label: "Android", bg: "#FFC3A6" },
  { icon: <AiFillApple />, label: "IOS", bg: "#90D4FF" },
  { icon: <SiHiveBlockchain />, label: "Blockchain", bg: "#D6B7FF" },
  { icon: <FaAws />, label: "AWS", bg: "#eed773" },
  { icon: <FaNode />, label: "Node js", bg: "#73ee90" },
  { icon: <DiJavascript />, label: "Javascript", bg: "#70DAB0" },
];

const categoriesRow2 = [
  { icon: <FaPython />, label: "Python", bg: "#ABEDFF" },
  { icon: <DiJavascript />, label: "Kotlin", bg: "#70DAB0" },
  { icon: <BiLogoPhp />, label: "Php", bg: "#FFC3A6" },
  { icon: <IoIosGitMerge />, label: "Git", bg: "#90D4FF" },
  { icon: <FaFigma />, label: "Figma", bg: "#D6B7FF" },
  { icon: <h3>C++</h3>, label: "C++", bg: "#70DAB0", custom: true },
  { icon: <SiDjango />, label: "Django", bg: "#eed773" },
  { icon: <FaJava />, label: "Java", bg: "#73ee90" },
];

const CategoryItem = ({ icon, label, bg, custom = false }) => (
  <div
    className={`w-auto h-10 rounded-full px-1 py-1`}
    style={{ backgroundColor: bg }}
  >
    <div className="flex gap-2">
      <div className={`bg-white rounded-full ${custom ? "p-1" : "p-2"}`}>
        {icon}
      </div>
      <div className="px-2">
        <h3 className="text-xl font-[Montserrat]">{label}</h3>
      </div>
    </div>
  </div>
);

const Catetory = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const newTimeout = setTimeout(() => setIsScrolling(false), 300);
      setScrollTimeout(newTimeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <section className="relative pt-6 pb-6 gap-4">
      <ParalexText baseVelocity={-1} startMoving={isScrolling}>
        <div className="flex gap-8">
          {categoriesRow1.map((cat, index) => (
            <CategoryItem key={index} {...cat} />
          ))}
        </div>
      </ParalexText>
      <ParalexText baseVelocity={1} startMoving={isScrolling}>
        <div className="flex gap-8">
          {categoriesRow2.map((cat, index) => (
            <CategoryItem key={index} {...cat} />
          ))}
        </div>
      </ParalexText>
    </section>
  );
};

export default Catetory;
