import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/src/assets/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/src/assets/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/src/assets/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/src/assets//project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/src/assets/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/src/assets/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

function Work() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
      </div>
      <div className="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {works.map(({ imgSrc, title, tags, projectLink }, key) => (
          <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} />
        ))}
      </div>
    </section>
  );
}

export default Work;
