import React from "react";
import { SkillCard } from '../SkillCard';
import { Slide } from "react-awesome-reveal";
import { MultiSlider } from "../MultiSlider";

import * as C from './styles';
import { Title } from "../Title";

const skills = [
  { name: 'HTML5', logo: 'html5.png', alt: 'Logo do HTML5' },
  { name: 'CSS3', logo: 'css3.png', alt: 'Logo do CSS3' },
  { name: 'Javascript', logo: 'javascript.png', alt: 'Logo do Javascript' },
  { name: 'React', logo: 'react.png', alt: 'Logo do React' },
  { name: 'React Native', logo: 'react-native.png', alt: 'Logo do React Native' },
  { name: 'SASS', logo: 'sass.png', alt: 'Logo do SASS' },
  { name: 'Git', logo: 'git.png', alt: 'Logo do Git' },
  { name: 'GitHub', logo: 'github.png', alt: 'Logo do GitHub' },
  { name: 'Styled Comp', logo: 'styled-components.png', alt: 'Logo do Styled Components' },
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
            alt={skill.alt}
          />
        ))}
      </MultiSlider>
    </C.Section>
  )
}