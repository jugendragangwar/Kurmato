import React,{useState,useRef} from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const menuData = [
    { title: "Website Development", link: "/websiteDevelopment" },
    { title: "Software Development", link: "/softwareDevelopment" },
    { title: "App Development", link: "/appDevelopment" },
    { title: "Blockchain Development", link: "/blockchain" },
    { title: "Metaverse Development", link: "/metaverseDevelopment" },
    { title: "Exchange Solutions", link: "/exchangeSolution" },
    { title: "Game Development", link: "/gamedevelopment" },
    { title: "NFT Development", link: "/NftDevelopment" },
  ];
const Solution = () => {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const dropdownRef = useRef();
    const handleSolutionEnter = () => {
        setIsSolutionOpen(true);
      };
    
      const handleSolutionLeave = () => {
        setIsSolutionOpen(false);
      };
      const closeMenu = () => {
        setIsMenuOpen(false);
      };
  return (
     <>
     
           <div
             className="relative"
             onMouseEnter={handleSolutionEnter}
             onMouseLeave={handleSolutionLeave}
           >
             <div
               className="flex items-center cursor-pointer"
               onClick={() => setIsSolutionOpen(!isSolutionOpen)}
               ref={dropdownRef}
             >
               <p className="hover:text-[#139898] text-[#1B3D68] font-[Montserrat] text-base hover:underline">
                 Solutions
               </p>
               <MdArrowDropDown className="mt-1" />
             </div>
             {isSolutionOpen && (
               <ul className="absolute sm:-left-8 w-52 z-30 bg-white shadow-lg rounded-lg max-lg:static max-lg:w-full max-lg:mt-3">
                 {menuData.map((item, index) => (
                   <li
                     key={index}
                     className="relative border-b px-4 py-2 hover:bg-gray-100 max-lg:flex max-lg:flex-col"
                   >
                     <div
                       className="flex justify-between items-center"
                       onClick={() => toggleSubMenu(index)}
                     >
                       <Link
                         to={item.link}
                         className="block text-[#1B3D68] hover:text-[#139898] hover:underline font-[Montserrat]"
                         onClick={closeMenu}
                       >
                         {item.title}
                       </Link>
                       {item.subMenu && <MdArrowRight />}
                     </div>
                     {item.subMenu && subMenuOpen === index && (
                       <ul className="bg-white shadow-lg rounded-lg max-lg:mt-2 max-lg:w-full">
                         {item.subMenu.map((subItem, subIndex) => (
                           <li
                             key={subIndex}
                             className="border-b px-4 py-2 hover:bg-gray-100"
                           >
                             <Link
                               to={subItem.link}
                               className="block text-[#1B3D68] hover:text-[#139898] hover:underline font-[Montserrat]"
                               onClick={closeMenu}
                             >
                               {subItem.title}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     )}
                   </li>
                 ))}
               </ul>
             )}
           </div>
   
     </>
  )
}

export default Solution
