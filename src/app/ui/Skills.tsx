"use client";

// Constants
import { skillsList } from "../constants/SkillsList";

type Skill = {
  Logo: React.ComponentType<{ className: string }>;
  name: string;
  logoColor: string;
};

const Skills = () => {
  return (
    <section className="scroller flex gap-x-10 overflow-hidden rounded-full bg-white p-5">
      <div className="scroller-primary flex items-center gap-x-10 text-xl font-medium [&>div]:shrink-0">
        {skillsList.map((skill: Skill, index: number) => (
          <div key={index} className="flex items-center">
            <skill.Logo className={`size-10 ${skill.logoColor}`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="scroller-secondary flex items-center gap-x-10 text-xl font-medium [&>div]:shrink-0">
        {skillsList.map((skill: Skill, index: number) => (
          <div key={index} className="flex items-center">
            <skill.Logo className={`size-10 ${skill.logoColor}`} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
