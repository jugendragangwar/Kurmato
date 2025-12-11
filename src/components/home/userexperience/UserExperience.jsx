import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import map from "../../../assets/Group_22.png";
import right from "../../../assets/vector_1.png";
import user from "../../../assets/Vector.png";
import experience from "../../../assets/experience1.png";

const UserExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative h-full w-full py-6">
      <img
        src={map}
        alt="user"
        className="w-full h-[70vh] sm:h-[60vh] object-cover"
      />

      <div className="absolute inset-0 flex flex-col py-6 md:flex-row justify-around items-center z-30">
        <div className="text-center text-white mb-8 md:mb-0">
          <img src={right} alt="user" className="w-14 h-14 mx-auto mb-2" />
          <h2 className="text-3xl sm:text-4xl text-[#1B3D68] font-[Montserrat] font-bold">
            {inView && <CountUp start={0} end={553} duration={6} />}
          </h2>
          <p className="text-xl sm:text-2xl text-[#1B3D68] font-[Montserrat] font-bold">
            Complete Projects
          </p>
        </div>
        <div className="text-center text-white mb-8 md:mb-0">
          <img src={user} alt="user" className="w-16 h-14 mx-auto mb-2" />
          <h2 className="text-3xl sm:text-4xl text-[#1B3D68] font-[Montserrat] font-bold">
            {inView && <CountUp start={0} end={50} duration={4} />}
          </h2>
          <p className="text-xl sm:text-2xl text-[#1B3D68] font-[Montserrat] font-bold">
            Team Members
          </p>
        </div>
        <div className="text-center text-white">
          <img
            src={experience}
            alt="experience"
            className="w-16 h-14 mx-auto mb-2"
          />
          <h2 className="text-3xl sm:text-4xl text-[#1B3D68] font-[Montserrat] font-bold">
            {inView && <CountUp start={0} end={10} duration={3} />} Years
          </h2>
          <p className="text-xl sm:text-2xl text-[#1B3D68] font-[Montserrat] font-bold">
            of Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
