/* eslint-disable react/prop-types */
import { OrbitingCircles } from "./OrbitingCircles";

// List only the logos that exist in public/assets/logos (case-sensitive)
const skills = [
  "api",
  "cplusplus",
  "csharp",
  "css3",
  "dotnet",
  "git",
  "github",
  "html5",
  "javascript",
  "kalilinux",
  "linux",
  "mongodb",
  "next",
  "node",
  "python",
  "react",
  "rust",
  "sqlite",
  "tailwindcss",
  "tensorflow",
  "unrealengine",
  "vitejs",
];

// Split skills into two equal arrays
const half = Math.ceil(skills.length / 2);
const outerSkills = skills.slice(0, half);
const innerSkills = skills.slice(half);

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={32} radius={140}>
        {outerSkills.map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={32} radius={90} reverse speed={2}>
        {innerSkills.map((skill) => (
          <Icon key={skill + "-inner"} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110 w-8 h-8" alt="" />
);
