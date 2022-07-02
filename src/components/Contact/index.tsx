import { SubmitHandler, useForm } from 'react-hook-form';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { api } from '../../service/api';
import { Title } from '../Title';
import { Fade } from "react-awesome-reveal";
import { toast } from 'react-toastify';

import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export function Contact() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {

    const response = await api.post('/mail', data);

    if (response.status === 200) {
      toast.success("Mensagem enviada com sucesso!")
    } else {
      toast.error('Ocorreu um erro ao enviar sua mensagem!');
    }

    reset();
  }

  return (
    //@ts-ignore
    <Fade direction='left' triggerOnce>
      <C.Section id="contact">
        <Title title='Contato' />
        <div className="content">
          <div className="contactInformation">
            <div className="title">
              <h3>Entre em contato!</h3>
              <p>Você pode entrar em contato comigo em qualquer horário. Prometo responder o mais rápido possível.</p>
            </div>
            <div className="socialMediasGroup">
              <a href="#">
                <FaWhatsapp size={40} />
                <span>(35) 98462-5339</span>
              </a>
              <a href="#">
                <MdEmail size={40} />
                <span>lucas.gabriel.goncalves12@gmail.com</span>
              </a>
              <a href="#">
                <FaLinkedin size={40} />
                <span>Lucas Gonçalves</span>
              </a>
            </div>
          </div>
          <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register('name', {
                required: true
              })}
              className={errors.name && 'error'}
            />
            {errors.name && <span className="error">O nome é obrigatório</span>}

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              placeholder="Digite seu email"
              {...register('email', {
                required: {
                  value: true,
                  message: "O email é obrigatório"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Digite um e-mail válido"
                }
              })}
              className={errors.email && 'error'}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}

            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              placeholder="Digite sua mensagem"
              {...register('message', {
                required: true
              })}
              className={errors.message && 'error'}
            />
            {errors.message && <span className="error">A mensagem é obrigatória</span>}

            <button type="submit">Enviar</button>
          </form>
        </div>
      </C.Section>
    </Fade>
  )
}