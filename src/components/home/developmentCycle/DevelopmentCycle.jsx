import React, { useEffect, useRef, useState } from "react";

const DevelopmentCycle = () => {
  const sectionsRef = useRef([]);
  const [lineHeight, setLineHeight] = useState(1);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scroll-up-visible");
          if (entry.target.classList.contains("left-text")) {
            entry.target.classList.add("animate-slide-in-left");
          } else if (entry.target.classList.contains("right-text")) {
            entry.target.classList.add("animate-slide-in-right");
          }

          const sectionIndex = sectionsRef.current.indexOf(entry.target);
          if (sectionIndex !== -1) {
            const currentScrollHeight = document.documentElement.scrollTop;

            if (currentScrollHeight >= scrollHeight) {
              setScrollHeight(currentScrollHeight);
              const newHeight =
                ((sectionIndex + 1) / sectionsRef.current.length) * 100;
              if (newHeight > lineHeight) {
                setLineHeight(newHeight);
              }
            }
          }
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [lineHeight, scrollHeight]);

  return (
    <section className="mx-auto py-10 px-4 relative">
      <div className="text-center mb-10 sm:mt-10 mt-10">
        <h2 className="text-[#1B3D68] font-[Montserrat] font-bold text-2xl mb-4 sm:text-3xl">
          HERE'S HOW IT WORKS
        </h2>
        <p className="text-[#1B3D68] font-[Montserrat]">
          Software Development Life Cycle
        </p>
      </div>
      <div className="relative px-8">
        <div
          className="absolute sm:left-1/2 transform -translate-x-1/2 w-[2px] bg-[#05beb5]"
          style={{
            height: `${lineHeight - 6}%`,
            transition: "height 3s ease-out",
          }}
        ></div>

        {[
          {
            title: "Requirement Analysis",
            text: "Functional and Non-Functional requirements are collected by interacting with the stakeholders and users using different requirement elicitation techniques.",
          },
          {
            title: "Planning Analysis",
            text: "The requirements are defined and documented after further analysis.",
          },
          {
            title: "System Design",
            text: "Architecture is created for the system and its components (High-Level design and Low-Level design).",
          },
          {
            title: "Coding Implementation",
            text: "The software is built using suitable programming languages and technologies.",
          },
          {
            title: "Testing",
            text: "The quality of the software is evaluated.",
          },
          {
            title: "Deployment Maintenance",
            text: "Software is prepared for release.",
          },
        ].map((step, index, array) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`relative grid sm:grid-cols-2 mt-8 opacity-0 transition-opacity duration-1000 ease-in-out transform-gpu ${
              index % 2 === 0 ? "left-text" : "right-text"
            }`}
          >
            <div
              className={`${
                index % 2 === 0
                  ? "sm:text-right    sm:pr-14 ml-10  sm:col-start-1"
                  : " sm:text-left   sm:pl-14 ml-10 sm:ml-0 sm:col-start-2"
              } items-center`}
            >
              <h3
                className="text-[#1B3D68]   font-semibold mb-4 sm:text-3xl leading-tight"
                dangerouslySetInnerHTML={{ __html: step.title }}
              ></h3>
              <p className={`  ${index !== array.length - 1 ? "mb-10" : ""}`}>
                {step.text}
              </p>
            </div>

            <div
              className={`absolute sm:left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#67b9f0] rounded-full z-10 ${
                index !== array.length - 1 ? "mb-10" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#15647e] w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentCycle;
