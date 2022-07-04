import { Card } from './styles';

interface CardProps {
  logo: string;
  title: string;
  alt: string;
}

export function SkillCard({ logo, title, alt }: CardProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <img src={`/skills/${logo}`} alt={alt} />
    </Card>
  )
}