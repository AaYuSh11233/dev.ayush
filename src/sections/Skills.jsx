import { GlareCard } from '../components/GlareCard';
import {
  FaReact,
  FaServer,
  FaMobileAlt,
  FaBrain,
  FaCloud,
  FaGamepad,
} from 'react-icons/fa';

const skills = [
  {
    icon: <FaReact className="text-sky-400 text-xl" />,
    title: 'Frontend',
    color: 'text-sky-400',
    barColor: 'bg-sky-400',
    stats: [
      { label: 'React.js', percent: 97 },
      { label: 'Next.js', percent: 83 },
      { label: 'TypeScript', percent: 80 },
      { label: 'Tailwind CSS', percent: 92 },
    ],
    footer: 'Projects Built',
    value: '14+',
  },
  {
    icon: <FaServer className="text-green-400 text-xl" />,
    title: 'Backend',
    color: 'text-green-400',
    barColor: 'bg-green-400',
    stats: [
      { label: 'Node.js', percent: 88 },
      { label: 'Express.js', percent: 82 },
      { label: 'MongoDB', percent: 86 },
      { label: 'Python', percent: 80 },
    ],
    footer: 'Servers Managed',
    value: '6+',
  },
  {
    icon: <FaMobileAlt className="text-orange-400 text-xl" />,
    title: 'Mobile',
    color: 'text-orange-400',
    barColor: 'bg-orange-400',
    stats: [
      { label: 'Swift', percent: 91 },
      { label: 'Kotlin', percent: 84 },
      { label: 'React Native', percent: 78 },
      { label: 'iOS/Android', percent: 85 },
    ],
    footer: 'Apps Made',
    value: '2+',
  },
  {
    icon: <FaBrain className="text-purple-400 text-xl" />,
    title: 'AI & ML',
    color: 'text-purple-400',
    barColor: 'bg-purple-400',
    stats: [
      { label: 'TensorFlow', percent: 85 },
      { label: 'PyTorch', percent: 80 },
      { label: 'Computer Vision', percent: 79 },
      { label: 'NLP', percent: 76 },
    ],
    footer: 'Model Accuracy',
    value: '89%',
  },
  {
    icon: <FaCloud className="text-cyan-400 text-xl" />,
    title: 'Cybersecurity',
    color: 'text-cyan-400',
    barColor: 'bg-cyan-400',
    stats: [
      { label: 'Kali Linux', percent: 86 },
      { label: 'API', percent: 89 },
      { label: 'Metasploit', percent: 78 },
      { label: 'NMap', percent: 85 },
    ],
    footer: 'Security Audits',
    value: '5+',
  },
  {
    icon: <FaGamepad className="text-rose-400 text-xl" />,
    title: 'Game Dev',
    color: 'text-rose-400',
    barColor: 'bg-rose-400',
    stats: [
      { label: 'Unreal Engine', percent: 84 },
      { label: 'C++', percent: 87 },
      { label: 'Game Design', percent: 81 },
      { label: '3D Modeling', percent: 74 },
    ],
    footer: 'Games Built',
    value: '2+',
  },
];

function Skills() {
  return (
    <section className="c-space section-spacing" id="skills">
      <h2 className="text-heading">Skills</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
        {skills.map((skill, index) => (
          <GlareCard
            key={index}
            className="p-6 bg-[#0B0F19] rounded-2xl border border-white/10 shadow-md h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                {skill.icon}
                <h3 className={`text-lg font-semibold ${skill.color}`}>{skill.title}</h3>
              </div>
              <div className="space-y-3">
                {skill.stats.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{item.label}</span>
                      <span className="text-white">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.barColor} rounded-full transition-all`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 text-sm text-gray-400">
              {skill.footer}:{' '}
              <span className={`font-bold ${skill.color}`}>{skill.value}</span>
            </div>
          </GlareCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;
