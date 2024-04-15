import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;