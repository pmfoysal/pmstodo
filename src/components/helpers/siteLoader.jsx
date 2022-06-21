import React from 'react';
import Logo from '@partials/logo';
import { BarLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import { SiteLoaderContainer } from './siteLoader.styled';

export default function SiteLoader() {
   const theme = useTheme();

   return (
      <SiteLoaderContainer>
         <Logo />
         <BarLoader speedMultiplier='2' color={theme.back.accent} height='0.5rem' width='12rem' css={{ borderRadius: '50rem' }} />
      </SiteLoaderContainer>
   );
}
