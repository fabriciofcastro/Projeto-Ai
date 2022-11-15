import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 6rem;

`

export const NavbarLink = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NavbarLinkLogo = styled.div`
   margin-right: 2rem;
`

export const NavbarLogoImg = styled.img`
  width: 6.2rem;
  height: 1.6rem;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NavbarLinkContainer_p = styled.p`
  color: #fff;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-transform: capitalize;

  margin: 0 1rem;
  cursor: pointer;
`

export const NavbarLinkContainer_a =styled.a ``

export const NavbarSing = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavbarMenuContainer = styled.div`


`

export const NavbarSing_p = styled(NavbarLinkContainer_p)``

export const NavbarButton = styled.button`
  padding: 0.5rem 1rem;
  color: #FFF;
  background-color: #FF4820;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.5rem;
  border-radius: .5rem;
  outline: none;
  cursor: pointer;
`

export const NavbarMenu = styled.div`

`

export const scaleUpCenter = styled.div``

export const NavMenuContainerLinksSign = styled.div`
  display: none;
`

export const NavbarMenuMobile = styled.div`
  margin-left: 1rem;

  display: none;
  position: relative;
`

export const NavbarMenuMobileSVG = styled.div`
  cursor: pointer;
`

export const NavbarMenuContainerMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction:column;

  text-align: end;
  background-color: var(--color-footer);
  position: absolute;
  top: 4rem;
  right: 0;
  margin-top: 1rem;
  min-width: 21rem;
  border-radius: .5rem;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);
`

export const NavbarMenuContainer_p = styled.p`
  margin: 1rem 0;
`