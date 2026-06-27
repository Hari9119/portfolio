import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "c",
    "java",
    "springboot",
    "mysql",
    "php",
    "html5",
    "css3",
    "javascript",
    "react",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, skill }) => {
  const isLarge = skill === 'mysql';
  const isMedium = skill === 'java';
  return (
    <img 
      src={src} 
      alt={skill}
      className={`duration-200 rounded-sm hover:scale-110 ${isLarge ? 'w-16 h-16' : isMedium ? 'w-12 h-12' : 'w-10 h-10'}`}
    />
  );
};
