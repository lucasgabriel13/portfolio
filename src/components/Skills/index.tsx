import React from "react";
import { SkillCard } from '../SkillCard';
import { Slide } from "react-awesome-reveal";
import { MultiSlider } from "../MultiSlider";

import * as C from './styles';
import { Title } from "../Title";

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
        <Title title="Skills" />
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