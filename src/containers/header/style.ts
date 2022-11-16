import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  margin: 0 4rem;

    @media screen and (max-width: 105rem) {
      flex-direction: column;
    }
`

export const HeaderSectionPadding = styled.div`
  color: #fff;
  font-size: 1.4rem;

`
export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin-right: 5rem;

      h1 {
        background-image: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         font-size: 6.2rem;
         font-weight: 900;
         letter-spacing: -.04em;

         @media screen and (max-width: 65rem){
            font-size: 4.8rem;
            line-height: 6rem;
      }
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.7rem;
        color:var(--color-text);
        margin-top: 1.5rem;
        color: #fff;

          @media screen and (max-width: 65rem){
            font-size: 1.6rem;
            line-height: 2.4rem;
          }
      }

        @media screen and (max-width: 105rem) {
          margin: 0 0 3rem;
        }
`

export const HeaderContentInpult = styled.div`
  width: 100%;
  margin: 2rem 0 1rem;
  display: flex;
`

export const Input = styled.input`
  background-color: var(--color-footer) ;
  flex: 2;
  width: 100%;
  min-height: 5rem;
  font-size: 2rem;
  line-height: 2.7rem;
  border: .2rem solid var(--color-footer);
  outline:none;
  padding: 0 1rem;
  color: #FFF;

`
export const Button = styled.button`
  flex: 0.6;
  width: 100%;
  min-height: 5rem;
  background-color: #FF4820;
  transform: matrix(-1, 0, 0, 1 0, 0 );
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.7rem;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 0 1rem;
  border: none;

  border-top-right-radius: .5rem;
  border-bottom-right-radius: 0.5rem;
`
export const HeaderContentPeople = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 2rem;

      p {
        margin: 0 0 0 1rem;
        font-weight: 500;
        font-size: 1.2rem;
        color: #fff;
        line-height: 3.8rem;
        text-align: center;
      }

      @media screen and (max-width: 65rem){
        flex-direction: column;
      }
`
export const HeaderImage = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
`

