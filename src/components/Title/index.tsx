import * as C from './styles';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <C.Title className="title">
      <img src="/images/arrow-down.svg" alt="Seção de Projetos" />
      <h3>{title}</h3>
    </C.Title>
  )
}