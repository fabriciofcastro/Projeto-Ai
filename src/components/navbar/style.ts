import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.5rem;
  text-transform: capitalize;

  padding: 2rem 6rem;

      @media screen and (max-width: 70rem) {
          padding: 2rem 4rem;
        }
      @media screen and (max-width: 55rem) {
          padding: 2rem;
      }
`

export const NavbarLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const NavbarLinksLogo = styled.div`
  margin-right: 2rem;


    img {
      width: 6.2rem;
    }
`
export const NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

    p {
      cursor: pointer;
      margin: 0 1rem;


        a {

        }

          @media screen and ( max-width: 105rem){
            display: none;
          }
    }
`

export const Button = styled.button`
  width: 15.2rem;
  height: 5,8rem;
  color: #FFF;
  padding: 0.5rem 1rem;
  background-color: var(--color-button);
  border-radius: .5rem;
  line-height: 2.5rem;
  border: 0;
  outline: none;
  cursor: pointer;

`

export const NavbarSign =styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

    p {
      cursor: pointer;
      margin: 0 1rem;
    }

        @media screen and (max-width: 55rem) {
          padding: 2rem;
          display: none;
        }

`

export const NavbarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: center;
  background-color:  var(--color-footer);
  padding: 2rem;
  position: absolute;
  top: 4rem;
  right: 0;
  margin-top: 1rem;
  min-width: 21rem;
  border-radius: .5rem;
  box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);

    p {
      cursor: pointer;
      margin: 1rem 0;
    }

        @media screen and (max-width: 55rem) {
          top: 2rem
        }

`

export const NavbarMenu =styled.div`
  margin-left: 1rem;

  display: none;
  position: relative;

    .svg {
      cursor: pointer;
    }

    @media screen and (max-width: 60rem) {
      display: flex;
    }
`
export const NavbarMenuContainerLinksSign = styled.div`
  display: none;

    @media screen and (max-width: 55rem) {
      display: block;
    }
`
