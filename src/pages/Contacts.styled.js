import styled from 'styled-components';

export const MainBlock = styled.div`
  max-height: 580px; 
  overflow-y: auto; 
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 8px solid var(--light-green);
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    width: 300px;
    padding: 15px;
    max-height: 580px;
  }

  @media screen and (max-width: 768px) {
    max-height: 500px; 
  }
`;

export const Header1 = styled.h1`
  text-align: center;
  color: var(--dark-blue);
`;

export const Header2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: var(--dark-blue);
`;