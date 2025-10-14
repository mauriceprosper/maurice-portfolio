import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Website Development",
    title: "Revcon Nigeria Limited",
    description:
      "Built the company portfolio of an Architecture Design & Construction Company",
    link: "https://revcon-omega.vercel.app/",
  },
  {
    id: 2,
    image: card2,
    category: "Website Development",
    title: "Weatherford NG",
    description:
      "Built a website for my website development & Digital marketing brand!",
    link: "https://weatherfordng.com/",
  },
  {
    id: 3,
    image: card3,
    category: "Mobile App Development",
    title: "BUXC",
    description:
      "Worked on the team that built the mobile app for buxc, still an idea, international payment gateway",
    link: "https://buxc.app/",
  },
  {
    id: 4,
    image: card4,
    category: "Website Development",
    title: "Delphat Travels & Tour",
    description:
      "Created a responsive website for a travel agency in Ogun state.",
    link: "https://delphat.vercel.app/",
  },
  {
    id: 5,
    image: card5,
    category: "Website Development",
    title: "Lad Global",
    description:
      "Implemented interactive website for Lad Global: Global Logistic Service For Businesses",
    link: "https://lad-global.vercel.app/",
  },
  {
    id: 6,
    image: card6,
    category: "Website Development",
    title: "Pegasus Nigeria Limited",
    description:
      "Built a website for Pegasus: a legal firm in Lagos.",
    link: "https://pegasus-sage.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
