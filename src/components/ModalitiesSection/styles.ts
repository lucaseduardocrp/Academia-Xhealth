import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';

export const Container = styled.section`
  background: ${({theme}) => theme.colors.dark100};
`;

export const ModalitiesContainer = styled.div`
  ${FlexCSS};
  flex-direction: column;
  gap: 2.2rem;
  padding-top: 6rem;
`;
