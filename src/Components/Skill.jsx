import SkilCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/src/assets/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/src/assets//css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/src/assets/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/src/assets//nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/src/assets/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/src/assets/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/src/assets/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/src/assets/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/src/assets/android-studio.svg",
    label: "Android Studio",
    desc: "Mobile Development",
  },
  {
    imgSrc: "/src/assets/unity.svg",
    label: "Unity",
    desc: "Game Development",
  },
  {
    imgSrc: "/src/assets/mysql.svg",
    label: "MySQL",
    desc: "Database Management",
  },
  {
    imgSrc: "/src/assets/firebase.svg",
    label: "Firebase",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/src/assets/csharp.svg",
    label: "C#",
    desc: "Programming Language",
  },
  {
    imgSrc: "/src/assets/c.svg",
    label: "C",
    desc: "Programming Language",
  },
];

function Skill() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkilCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
