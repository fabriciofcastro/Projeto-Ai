import * as S from './style';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from 'public/logo.svg'
import { useState } from 'react';
import Menu from './Menu';

const Navbar: React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <S.Navbar>
      <S.NavbarLinks>
        <S.NavbarLinksLogo>
          <img src={ logo.src } alt="Logo" />
        </S.NavbarLinksLogo>
        <S.NavbarLinksContainer>
          <Menu />
        </S.NavbarLinksContainer>
      </S.NavbarLinks>

      <S.NavbarSign>
        <p>Sign in </p>
        <S.Button>Sign Up</S.Button>
      </S.NavbarSign>
      <S.NavbarMenu>
        {
          toggleMenu
            ? <RiCloseLine color="#FFF" size={ 27 } onClick={ () => setToggleMenu(false) } />
            : <RiMenu3Line color="#FFF" size={ 27 } onClick={ () => setToggleMenu(true) } />
        }
        {
          toggleMenu && (
            <S.NavbarMenuContainer>
              <div className="scale-up-center">
                <Menu />
                <S.NavbarMenuContainerLinksSign>

                  <p>Sign in </p>
                  <S.Button>Sign Up</S.Button>

                </S.NavbarMenuContainerLinksSign>
              </div>
            </S.NavbarMenuContainer>
          )
        }
      </S.NavbarMenu>
    </S.Navbar>
  )
}

export default Navbar;