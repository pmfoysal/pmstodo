import React from 'react';
import { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';
import { PageLoaderContainer } from './pageLoader.styled';

export default function PageLoader() {
   const theme = useTheme();
   return (
      <PageLoaderContainer>
         <RotatingLines width='50' strokeWidth='4' animationDuration='0.5' strokeColor={theme.back.accent} />
      </PageLoaderContainer>
   );
}
