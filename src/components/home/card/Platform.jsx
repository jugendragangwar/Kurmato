import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

const cards = [
  {
    image:
      "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?t=st=1765436499~exp=1765440099~hmac=ea5b2ac1c99b9c6fbd95782027228ff5c84aad1205ced126235e877bd78a461d&w=700",
    title: "Software Development",
    description:
      "From web applications to mobile apps and enterprise software, we leverage the latest technologies to build robust and scalable solutions tailored to your needs.",
    link: "/softwareDevelopment",
  },
  {
    image: "https://i.ytimg.com/vi/PHZ2Ux4gOaE/maxresdefault.jpg",
    title: "Website Development",
    description:
      "Transform Your Digital Presence with our expert website development services that address your unique business challenges and elevate your brand presence.",
    link: "/websiteDevelopment",
  },
  {
    image:
      "https://pbs.twimg.com/ext_tw_video_thumb/1816343904637292544/pu/img/ymkdGKpV4C9OmOXs.jpg",
    title: "Exchange Solution",
    description:
      "Our team excels in developing secure and feature-rich cryptocurrency exchange platforms. We employ advanced blockchain technology to ensure seamless trading experiences.",
    link: "/exchangeSolution",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*dum58QX-tNie2Oz15l3pFg.jpeg",
    title: "Metaverse Development",
    description:
      "Embark on a journey into the metaverse with our expert team. From virtual reality (VR) applications to augmented reality (AR) experiences, we help you create captivating digital realms.",
    link: "/metaverseDevelopment",
  },
  {
    image:
      "https://blog.synarionit.com/wp-content/uploads/2023/11/Mobile-Game-Development.jpg",
    title: "Game Development",
    description:
      "Unlock the potential of interactive entertainment with our game development expertise. We combine stunning graphics, engaging gameplay, and intuitive interfaces to deliver unforgettable gaming experiences.",
    link: "/gamedevelopment",
  },
  {
    image:
      "https://img.freepik.com/free-vector/gradient-nft-concept-illustrated_52683-61452.jpg?t=st=1765436577~exp=1765440177~hmac=fbb29da9e230e9ceb39b2891709841271a23b73081aeb6ff95c2014f86218874&w=700",
    title: "NFT Development",
    description:
      "Embrace the power of Non-Fungible Tokens (NFTs) with our specialized solutions. We assist you in leveraging NFT technology for digital art, collectibles, virtual real estate, and more.",
    link: "/NftDevelopment",
  },
];

const Platform = () => {
  const renderCard = (item) => (
    <Link to={item.link} key={item.title}>
      <div className="w-80 sm:w-full shadow-lg hover:shadow-[4px_4px_8px_10px_rgba(0,0,0,0.1)] transform transition-transform duration-300 hover:scale-105 flex flex-col">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-48"
        />
        <div className="flex flex-col flex-grow p-2">
          <h2 className="font-[Montserrat] text-[#1B3D68] text-lg font-bold sm:text-2xl">
            {item.title}
          </h2>
          <p className="font-[Montserrat] text-sm line-clamp-4 h-[52px]">
            {item.description.length <= 170
              ? item.description
              : `${item.description.slice(0, 170)}...`}
          </p>
          <span className="text-[#1B3D68] flex justify-end gap-2 my-2">
            Read more <LuMoveRight className="mt-[6px] h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="px-4 lg:mx-[55px] flex flex-col">
      <div className="mt-8 mb-8 text-center sm:mt-10">
        <h1 className="text-[#1B3D68] text-3xl sm:text-4xl font-bold font-[Montserrat] mb-4">
          Kurmato
        </h1>
        <p className="text-[#1B3D68] text-sm sm:text-base font-[Montserrat]">
          Get Real World Solution on Our Advance Platform
        </p>
      </div>

      <div className="hidden sm:block">
        <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {cards.map(renderCard)}
        </div>
      </div>

      <div className="sm:hidden mx-[20px]">
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
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col w-full h-auto border-2 rounded-xl hover:shadow-2xl">
                <Link to={item.link} className="block w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="text-xl font-bold font-[Montserrat] text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm">{item.description}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Platform;
