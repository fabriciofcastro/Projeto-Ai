import React from 'react';
import * as S from './style'
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand: React.FC = () => {
  return (
   <S.Brand className='section__padding'>
    <S.BrandBoxImg>
      <img src={google.src} alt="logo Google" />
    </S.BrandBoxImg>
    <S.BrandBoxImg>
      <img src={atlassian.src} alt="logo Google" />
    </S.BrandBoxImg>
    <S.BrandBoxImg>
      <img src={dropbox.src} alt="logo Google" />
    </S.BrandBoxImg>
    <S.BrandBoxImg>
      <img src={shopify.src} alt="logo Google" />
    </S.BrandBoxImg>
    <S.BrandBoxImg>
      <img src={slack.src} alt="logo Google" />
    </S.BrandBoxImg>


   </S.Brand>
  )
}

export default Brand;