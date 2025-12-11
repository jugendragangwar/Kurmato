import { CiCircleCheck } from "react-icons/ci";
import Footer from "../Footer";
import img from "../../../assets/game.png";
import img1 from "../../../assets/game1.png";
import img2 from "../../../assets/game2.png";
import AllServices from "../../AllServices";

const GameDevelopment = () => {
  const sectionContent = [
    {
      title: "What A Quality Game Development Needs?",
      items: [
        "Creative Expression.",
        "Immersive Storytelling.",
        "Advanced Graphics and Animation.",
        "Interactive Gameplay Mechanics.",
        "Cross-Platform Compatibility.",
        "User Engagement and Retention.",
        "Monetization Strategies.",
        "Multiplayer and Social Features.",
        "Regular Content Updates.",
        "Robust Testing and Quality Assurance.",
        "Community Building and Support.",
        "Adaptability to New Technologies.",
        "Compliance with Industry Standards and Regulations.",
      ],
    },
    {
      title: "Game Development Life Cycle Model :-",
      items: [
        "Concept Development",
        "Pre-Production Planning",
        "Prototyping",
        "Production",
        "Testing and Quality Assurance",
        "Alpha and Beta Testing",
        "Finalization and Polishing",
        "Launch/Release",
        "Post-Launch Support",
        "Continuous Updates and Content Expansion",
        "User Feedback and Iteration",
        "Marketing and Community Engagement",
        "End-of-Life and Transition",
      ],
    },
  ];

  return (
    <>
      <div className="mx-auto">
        <div className="relative">
          <div className="shadow-lg overflow-hidden">
            <img
              src={img}
              alt="game development"
              className="w-full xl:h-[400px] max-h-[400px] h-52"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-xl sm:text-4xl font-bold font-[Montserrat]">
              Game Development
            </h1>
          </div>
        </div>

        <section className="mx-auto container">
          <div className="p-4 md:flex md:space-x-8 py-10">
            <div className="mb-8 md:w-[80%] md:mb-0">
              <img
                src="https://media.istockphoto.com/id/1830042746/photo/document-management-system-dms-with-arrange-folder-and-files-icons-man-setup-storage-backup.jpg?s=612x612&w=0&k=20&c=t8oAAO16j6fMhleAYJEXm5pSXFIDZrEG6sYJkv_Sdos="
                alt="game development"
                className="w-full rounded-lg max-h-[800px] object-cover"
              />
              <h3 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Game Development
              </h3>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
                Game Development is the art of creating games and describes the
                design, development and release of a game. It may involve
                concept generation, design, build, test and release. While you
                create a game, it is important to think about the game
                mechanics, rewards, player engagement and level design. A game
                developer could be a programmer, a sound designer, an artist, a
                designer or many other roles available in the industry. Game
                Development can be undertaken by a large Game Development Studio
                or by a single individual. It can be as small or large as you
                like. As long as it lets the player interact with content and is
                able to manipulate the game’s elements, you can call it a
                ‘game’.
              </p>
            </div>

            <AllServices />
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 px-4">
            <div className="mt-10 rounded-xl overflow-hidden flex justify-center items-center">
              <img
                src={img1}
                alt="game development"
                className="w-full max-w-[600px] rounded-lg max-h-[500px] h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
            <div className="lg:ml-10 bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8">
              {sectionContent[0] && (
                <>
                  <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                    {sectionContent[0].title}
                  </h4>
                  <ul className="space-y-3">
                    {sectionContent[0].items.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <CiCircleCheck className="text-blue-500 text-3xl" />
                        <p className="font-[Montserrat]">{item}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col-reverse sm:mt-10 lg:grid lg:grid-cols-2 grid-cols-1 px-4">
            <div className="sm:mt-8 bg-gray-100 px-4 mt-8 py-4 rounded-lg">
              {sectionContent[1] && (
                <>
                  <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                    {sectionContent[1].title}
                  </h4>
                  <ul className="space-y-3">
                    {sectionContent[1].items.map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <CiCircleCheck className="text-blue-500 text-3xl" />
                        <p className="font-[Montserrat]">{item}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="mt-10 rounded-xl overflow-hidden flex justify-center items-center">
              <img
                src={img2}
                alt="game development"
                className="lg:ml-10 w-full max-w-[600px] rounded-lg max-h-[500px] h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default GameDevelopment;
