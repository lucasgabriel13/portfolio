import React from "react";
import { SkillCard } from './SkillCard';
import { Slide } from "react-awesome-reveal";
import { MultiSlider } from "../MultiSlider";

import * as C from './styles';

const skills = [
  { name: 'HTML5', logo: 'html5.png' },
  { name: 'CSS3', logo: 'css3.png' },
  { name: 'Javascript', logo: 'javascript.png' },
  { name: 'React', logo: 'react.png' },
  { name: 'React Native', logo: 'react-native.png' },
  { name: 'SASS', logo: 'sass.png' },
];

export function Skills() {
  return (
    <C.Section id="skills">
      {/*@ts-ignore*/}
      <Slide triggerOnce>
        <div className="title">
          <img src="/images/arrow-down.svg" alt="Seção de Skills" />
          <h3>Skills</h3>
        </div>
      </Slide>
      <MultiSlider>
        {skills.map(skill => (
          <SkillCard
            key={skill.name}
            title={skill.name}
            logo={skill.logo}
          />
        ))}
      </MultiSlider>
    </C.Section>
  )
}