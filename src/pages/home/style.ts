import { keyframes } from "styled-components";
import styled from 'styled-components';

export const App = styled.div`


`

export const Gradient__bg = styled.div`
  background:-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);
  background:-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);
  background:-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);
  background:-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);
  background:radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);

`

export const Gradient__text = styled.p`
  background-color: var(--gradient-text);
  background-clip: text;
  -webkit-background-clop: text;
  -webkit-text-fill-color: transparent;
`
export const Section__padding = styled.section`
  padding: 4rem 6rem;

      @media screen and (max-width: 70rem) {
        padding: 4rem;
      }

      @media screen and (max-width: 55rem) {
        padding: 4rem 2rem;
      }
`

export const Section__margin = styled.section`
  margin: 4rem ;
      @media screen and (max-width: 70rem) {
        margin: 4rem;
      }

      @media screen and (max-width: 55rem) {
        margin: 4rem 2rem;
      }


`
export const Scale__up_center = styled.div `
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;


      @-webkit-keyframes scale-up-center {
        0% {
           -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
      }
      @keyframes scale-up-center {
        0% {
           -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
           -webkit-transform: scale(1);
            transform: scale(1);
         }
      }

`
