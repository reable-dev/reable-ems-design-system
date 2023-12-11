import { styled } from 'styled-components';

export const Container = styled.div`
  & .checkbox-input {
    visibility: hidden;
    position: absolute;
  }
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
