import { Card } from './styles';

interface CardProps {
  logo: string;
  title: string;
}

export function SkillCard({ logo, title }: CardProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <img src={`/skills/${logo}`} alt={title} />
    </Card>
  )
}