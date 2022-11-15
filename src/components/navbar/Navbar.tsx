import * as S from './style';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from 'public/logo.svg'
import { useState } from 'react';
import Menu from './MenuMobile';

const Navbar: React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <S.Navbar>
      <S.NavbarLink>
        <S.NavbarLinkLogo>
          <S.NavbarLogoImg src={ logo.src } alt="Logo" />
        </S.NavbarLinkLogo>
        <S.NavbarLinkContainer>
          <Menu />
        </S.NavbarLinkContainer>
      </S.NavbarLink>
      <S.NavbarSing>
        <S.NavbarSing_p>
          Sing in
        </S.NavbarSing_p>
        <S.NavbarButton type="button">
          Sing up
        </S.NavbarButton>
      </S.NavbarSing>
      <S.NavbarMenu>
        {
          toggleMenu
            ? <RiCloseLine color="FFF" size={ 27 } onClick={ () => setToggleMenu(false) } />
            :
            <RiMenu3Line color="FFF" size={ 27 } onClick={ () => setToggleMenu(true) }
            />
        }
        { toggleMenu && (
          <S.NavbarLinkContainer>
            <S.NavbarMenuContaine>
              <Menu />

              <S.NavbarSing>
                <S.NavbarSing_p>
                  Sing in
                </S.NavbarSing_p>
                <S.NavbarButton type="button">
                  Sing up
                </S.NavbarButton>
              </S.NavbarSing>

            </S.NavbarMenuContaine>
          </S.NavbarLinkContainer>
        ) }
      </S.NavbarMenu>
    </S.Navbar>
  )
}

export default Navbar;