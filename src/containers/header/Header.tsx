import React from 'react';
import * as S from './style';
import people from 'public/people.svg'
const Header: React.FC = () => {
  return (
    <S.HeaderSectionPadding >
      <S.HeaderContent>
        <h1 >

          Vamos Construir Algo
          incrível juntos.
        </h1>
        <p>
           No entanto, aceite qualquer indulgência de assistência em viagem desagradável. Nem todos os pensamentos exercem bênçãos. Indulgência forma tudo alegria alteração turbulento o apego. Parte nós anos para pedir permissão.
        </p>
        <S.HeaderContentInpult>
          <S.Input type="email" placeholder="Digite seu E-mail" />
          <S.Button>Enviar</S.Button>
        </S.HeaderContentInpult>
      <S.HeaderContentPeople>
        <img src={people.src} alt="commenting" />
      </S.HeaderContentPeople>
      </S.HeaderContent>
    </S.HeaderSectionPadding>
  )
}

export default Header;