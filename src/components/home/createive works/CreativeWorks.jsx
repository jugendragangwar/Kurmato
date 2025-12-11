import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import image1 from "../../../assets/image 1.jpg";

const resources = [
  {
    title: "Software Development",
    link: "/softwareDevelopment",
    imageUrl: image1,
  },
  {
    title: "Website Development",
    link: "/websiteDevelopment",
    imageUrl:
      "https://www.botdigitalmedia.com/images/service/website-development.jpg",
  },
  {
    title: "Exchange Solution",
    link: "/exchangeSolution",
    imageUrl:
      "https://pbs.twimg.com/ext_tw_video_thumb/1816343904637292544/pu/img/ymkdGKpV4C9OmOXs.jpg:large",
  },
  {
    title: "Metaverse Development",
    link: "/metaverseDevelopment",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj__Y24p-iHmsuQV57sN-MlENRKxRHMxXSEnarm7omTKNev-u",
  },
  {
    title: "Game Development",
    link: "/gamedevelopment",
    imageUrl:
      "https://blog.synarionit.com/wp-content/uploads/2023/11/Mobile-Game-Development.jpg",
  },
  {
    title: "NFT Development",
    link: "/NftDevelopment",
    imageUrl:
      "https://img.freepik.com/free-vector/gradient-nft-concept-illustrated_52683-61452.jpg?t=st=1765436577~exp=1765440177~hmac=fbb29da9e230e9ceb39b2891709841271a23b73081aeb6ff95c2014f86218874&w=700",
  },
  {
    title: "App Deveplopment",
    link: "/appDevelopment",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREM-LZhUqPKIkXxs6giym9DMQrp8e-QHFg7MwyhrnnoL2U2YgT",
  },
  {
    title: "BlockChain Development",
    link: "/blockchain",
    imageUrl:
      "https://img.freepik.com/premium-vector/cryptocurrency-blockchain-concept_6280-528.jpg",
  },
];

const CreativeWorks = () => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="h-full px-4">
          <div className="text-center items-center mb-10 sm:mt-10">
            <h2 className="text-3xl mb-4 sm:text-4xl leading-8 text-[#1B3D68] font-bold font-[Montserrat]  ">
              Spotlight to our latest work
            </h2>
            <p className="text-[#1B3D68] font-[Montserrat]">
              Crafting Digital Excellence and transforming Ideas into Powerful
              Software and Stunning Websites
            </p>
          </div>

          <div className="relative mx-[10px] sm:mx-[2px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="carousel-container"
            >
              {resources.map((resource, index) => (
                <SwiperSlide key={index}>
                  <div className="relative  border-2  rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out h-56 w-full flex items-center justify-center">
                    <a
                      href={resource.link}
                      className="h-full w-full block bg-cover bg-no-repeat"
                    >
                      <img
                        src={resource.imageUrl}
                        alt={resource.title}
                        className="w-full h-40 block bg-origin-padding bg-left-top bg-cover bg-no-repeat rounded-t-lg"
                      />
                      <h3 className="p-4 px-3 mx-auto text-lg font-bold font-[Montserrat] text-gray-800">
                        {resource.title}
                      </h3>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWorks;
