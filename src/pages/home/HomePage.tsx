import * as S from './style';

import { Brand, Navbar, CT, Feature } from 'src/components/'
import { Footer, Blog, Possibility, WhatGPT3, Header, Featute } from 'src/containers/'

const HomePage: React.FC = () => {
  return (
    <S.App>
      <S.Gradient__bg>
        <Navbar />
        <Header />
      </S.Gradient__bg>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CT />
      <Blog />
      <Footer />

    </S.App>

  )
}

export default HomePage;