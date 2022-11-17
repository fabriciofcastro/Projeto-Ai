import React from 'react';
import * as S from './style';
import people from 'public/people.svg'
import ai from 'public/ai.svg'


const Header: React.FC = () => {
  return (
    <S.Header className="section__padding" >
      <S.HeaderContent>
        <h1>
          Vamos Construir Algo
          incrível juntos.
        </h1>
        <p>
          No entanto, aceite qualquer indulgência de assistência em viagem desagradável. Nem todos os pensamentos exercem bênçãos. Indulgência forma tudo alegria alteração turbulento o apego. Parte nós  para pedir permissão.
        </p>
        <S.HeaderContentInpult>
          <S.Input type="email" placeholder="Digite seu E-mail" />
          <S.Button>Enviar</S.Button>
        </S.HeaderContentInpult>
        <S.HeaderContentPeople>
          <img src={ people.src } alt="commenting" />
          <p>
            1,600 pessoas solicitaram acesso, e visitaram nas últimas 24 horas
          </p>
        </S.HeaderContentPeople>
      </S.HeaderContent>
      <S.HeaderImage>
        <img src={ ai.src } alt="artificial intelligence" />
      </S.HeaderImage>
    </S.Header >
  )
}

export default Header;